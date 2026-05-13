# Roadmap: Dashboard de Inteligencia Comercial — Virales Rappi Turbo MX

> Documento de especificación técnica y estratégica para evolucionar el Viral Dashboard
> de un espacio de monitoreo a una plataforma de inteligencia comercial y aprendizaje operativo.
>
> Fecha: 2026-05-13
> Estado: Planificado (no implementado)

---

## Contexto

Los virales son uno de los principales motores de crecimiento de Rappi Turbo MX. El dashboard
actualmente registra la planeación (pre-viral) y los resultados (postmortem) de cada activación.
Esta propuesta busca agregar capas de análisis, scoring, predicción y visualización que permitan
capitalizar la experiencia acumulada para tomar mejores decisiones comerciales.

---

## FASE 1 — Quick Wins (Alto impacto, baja complejidad)

### 1.1 KPIs de Eficiencia por Deal

**Ubicación:** Vista Detalle → Postmortem, nueva sección "Eficiencia del Deal" debajo de las KPI cards existentes.

**KPIs:**

| KPI | Fórmula | Formato | Color |
|---|---|---|---|
| ROI (GMV / Budget) | `gmv_activacion / budget_total_mxn` | "2.4x" | Verde ≥ 1x, Rojo < 1x |
| Costo por Orden (CPO) | `budget_total_mxn / ordenes_total` | "$108 MXN" | — |
| Costo por Usuario Nuevo (CPNU) | `budget_total_mxn / SUM(seg_nuevo)` | "$215 MXN" | — |
| Incrementalidad Real | `ordenes_total / ord_l4w` | "8.5x" | Verde si ≥ plan, Rojo si < plan |

**Datos requeridos:** Todos disponibles en `POSTMORTEM_DEALS` + `PREVIRAL_DEALS` + `POSTMORTEM_SKU_PERFORMANCE`.

**Implementación:**
- Modificar `renderDetalle()` en index.html
- Calcular en JS inline (no requiere cambios en data.js)
- Agregar después de línea ~1159 (cierre de primer kpi-grid)
- Usar mismo patrón visual: `kpi-grid` > `kpi-card` > label + value + delta

**Código de referencia:**
```javascript
const totalNuevos = skuPerf.reduce((s, r) => s + (r.seg_nuevo || 0), 0);
const roi = deal.budget_total_mxn > 0 ? (post.gmv_activacion / deal.budget_total_mxn) : null;
const cpo = post.ordenes_total > 0 ? Math.round(deal.budget_total_mxn / post.ordenes_total) : null;
const cpnu = totalNuevos > 0 ? Math.round(deal.budget_total_mxn / totalNuevos) : null;
const incrReal = post.ord_l4w && post.ord_l4w > 0 ? (post.ordenes_total / post.ord_l4w) : null;
```

---

### 1.2 Viral Health Score (Badge en Índice)

**Ubicación:** Calendario/Índice principal, como badge de color junto a cada deal.

**Scoring 0-100:**

| Dimensión | Peso | Métrica | Score 100 | Score 0 |
|---|---|---|---|---|
| Performance | 30% | GMV delta vs L4W | ≥ 1000% | ≤ 100% |
| Eficiencia | 20% | ROI (GMV/Budget) | ≥ 3x | ≤ 0.5x |
| Adquisición | 20% | % usuarios nuevos | ≥ 80% | ≤ 30% |
| Inventario | 15% | Coverage decay (ap→ci) | ≤ 20pp | ≥ 50pp |
| Retención | 15% | Canib ord delta % | ≥ 0% | ≤ -50% |

**Fórmula por dimensión:**
```javascript
function scoreLinear(value, min, max) {
  // Interpola linealmente entre 0 y 100
  if (value === null) return 50; // neutral si no hay data
  return Math.max(0, Math.min(100, ((value - min) / (max - min)) * 100));
}

// Ejemplo Performance:
const perfScore = scoreLinear(post.gmv_dl4w_pct, 100, 1000);
```

**Display:**
- 🟢 Score ≥ 70 (deal exitoso)
- 🟡 Score 40-69 (resultado medio)
- 🔴 Score < 40 (deal con problemas)

**Implementación:**
- Crear función `calcViralScore(dealId)` en el bloque de helpers JS
- Renderizar badge de color en la vista calendario (dentro de cada celda de deal)
- Solo mostrar para deals con postmortem completo

---

### 1.3 Alertas de Riesgo Pre-Ejecución

**Ubicación:** Vista Detalle → Pre-Viral, nueva sección "Alertas" antes de la tabla de SKUs.

**Alertas a evaluar:**

| Alerta | Condición | Severidad | Mensaje |
|---|---|---|---|
| OOS Risk | `real_units / h_units > 20` para algún SKU | 🔴 Alta | "SKU {name}: se asignan {real}x más unidades que el histórico diario. Verificar stock." |
| Budget Concentration | Un SKU concentra >90% del final_budget | 🟡 Media | "El {pct}% del budget está en un solo SKU. Considerar redistribución." |
| Low Historical | `h_units < 1` para algún SKU | 🟡 Media | "SKU {name} tiene < 1 und/día de histórico. Riesgo de baja demanda." |
| Maker Track Record | Maker con canib_ord_delta < -30% en virales previos | 🟡 Media | "El maker {name} tuvo canibalización de {X}% en su último viral." |
| High Incrementality | `incrementalidad > 10` | 🟡 Media | "Incrementalidad {X}x es agresiva. Promedio histórico es {avg}x." |

**Implementación:**
- Crear función `getAlerts(deal, skuDetail)` que retorna array de alertas
- Renderizar como cards con borde de color (rojo/amarillo) antes de la tabla de SKUs
- No bloquea — es informativo

**Código de referencia:**
```javascript
function getAlerts(deal, skuDetail) {
  const alerts = [];
  
  skuDetail.forEach(s => {
    if (s.h_units > 0 && s.real_units / s.h_units > 20) {
      alerts.push({ severity: 'high', msg: `OOS Risk: ${s.name} — ${Math.round(s.real_units/s.h_units)}x más unidades que histórico` });
    }
    if (s.h_units < 1) {
      alerts.push({ severity: 'medium', msg: `Low Historical: ${s.name} tiene ${s.h_units} unds/día` });
    }
  });
  
  const maxBudget = Math.max(...skuDetail.map(s => s.final_budget_mxn));
  const totalBudget = skuDetail.reduce((a, s) => a + s.final_budget_mxn, 0);
  if (maxBudget / totalBudget > 0.90) {
    alerts.push({ severity: 'medium', msg: `Budget Concentration: ${Math.round(maxBudget/totalBudget*100)}% en un solo SKU` });
  }
  
  return alerts;
}
```

---

### 1.4 Reactivar Sección Tendencias

**Ubicación:** Nueva pestaña "Tendencias" (actualmente comentada en el HTML, líneas 928-938).

**Charts (usando Chart.js CDN):**

1. **GMV por Viral** — Bar chart horizontal, ordenado por GMV DESC
   - Data: `POSTMORTEM_DEALS.map(p => p.gmv_activacion)`
   - Color: por BU (Foods=verde, Drinks=azul, Pharma=morado, WOW=naranja)

2. **ROI por Deal** — Bar chart, con línea de referencia en 1.0x
   - Data: GMV/Budget por deal
   - Highlight deals por encima/debajo del promedio

3. **Scatter: Budget vs GMV** — Scatter plot con línea de tendencia
   - X: budget_total_mxn, Y: gmv_activacion
   - Tamaño del punto: ordenes_total
   - Muestra eficiencia marginal

4. **Sell-up % Trend** — Line chart cronológico
   - Data: pct_sellup por fecha_ejecucion
   - Muestra si el equipo mejora con el tiempo

**Dependencia:** Chart.js CDN (agregar `<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>`)

**Implementación:**
- Descomentar sección HTML (líneas 928-938)
- Agregar tab "Tendencias" al nav
- Crear función `renderTendencias()` con 4 canvas
- Registrar charts con Chart.js API

---

## FASE 2 — Inteligencia (Medio plazo)

### 2.1 Vista Ejecutiva "Command Center"

**Nueva pestaña** con KPIs agregados para directivos.

**KPIs de cabecera:**
- GMV Viral Acumulado (mes/trimestre) + % del SO Turbo MX
- \# Virales ejecutados vs planeados (tasa de cumplimiento)
- ROI promedio del portafolio
- Tasa de éxito (% deals con ROI > 1)
- CPO promedio y CPNU promedio

**Visuales:**
- Heatmap mensual de GMV por día
- Waterfall de contribución por BU
- Trend line de ROI mes a mes
- Top 5 makers por ROI acumulado

**Datos requeridos:** Todos disponibles en arrays existentes. Cálculos agregados en JS.

---

### 2.2 Benchmarks por BU / Maker / Categoría

**Ubicación:** Dentro del Command Center o como sub-sección del Comparador.

**Tablas benchmark:**

| Dimensión | Métricas a comparar |
|---|---|
| Por BU | ROI prom, CPO prom, CPNU prom, Fill rate, Carry-over % |
| Por Maker (top 10) | # virales, GMV total, ROI prom, Retención post |
| Por Subcategoría | CR promedio, Coverage decay, Sell-up % |
| Por Rango de Budget | Small/Med/Large → ROI, ¿diminishing returns? |
| Por Descuento | 40/50/60% → CR, Órdenes, ROI |
| Por DOW | Lun-Dom → GMV promedio, CR |

**Implementación:**
- Función `calcBenchmarks()` que itera todos los deals
- Tablas con formato de ranking y color coding
- Filtros interactivos (BU, período)

---

### 2.3 Insights Automáticos por Deal

**Ubicación:** Vista Detalle → Postmortem, card de "Insights" al inicio.

**Lógica:** Comparar métricas del deal vs todos los deals históricos y generar bullets.

**Ejemplo de insights generados:**
```
- "Este viral tiene el 3er mejor ROI de los últimos 20 deals (2.4x)"
- "El maker Holanda tiene 100% carry-over positivo en 2 virales"
- "El sell-up de 64% está en el top 10% de todos los virales"
- "Alerta: coverage decay de 28pp es el peor de la categoría Helados"
```

**Implementación:**
```javascript
function generateInsights(dealId) {
  const post = getPost(dealId);
  const allPosts = POSTMORTEM_DEALS;
  const insights = [];
  
  // ROI ranking
  const roi = post.gmv_activacion / getDeal(dealId).budget_total_mxn;
  const allROIs = allPosts.map(p => p.gmv_activacion / getDeal(p.deal_id).budget_total_mxn).sort((a,b) => b-a);
  const rank = allROIs.indexOf(roi) + 1;
  insights.push(`ROI de ${roi.toFixed(1)}x — #${rank} de ${allPosts.length} deals`);
  
  // Percentile de sell-up
  const sellupPercentile = allPosts.filter(p => p.pct_sellup < post.pct_sellup).length / allPosts.length * 100;
  if (sellupPercentile > 80) insights.push(`Sell-up ${post.pct_sellup}% está en el top ${Math.round(100-sellupPercentile)}% de virales`);
  
  return insights;
}
```

---

### 2.4 Tabla de Rankings / Leaderboard

**Ubicación:** Command Center o como vista dentro del Comparador.

**Rankings:**
- Top 10 deals por ROI
- Top 10 deals por GMV absoluto
- Top 10 deals por CPNU más bajo (eficiencia adquisición)
- Bottom 5 deals (peor performance)
- Makers con más virales ejecutados

---

## FASE 3 — Predictivo (Largo plazo)

### 3.1 Expected Performance Model

**Concepto:** Para cada nuevo pre-viral, estimar el GMV esperado basado en deals históricos similares.

**Variables input:**
- budget_total_mxn
- descuento_pct
- incrementalidad
- h_units promedio del deal
- business_unit
- tipo_viral (1 día vs multi-día)

**Modelo (regresión simple o lookup de deals similares):**
```javascript
function predictGMV(deal, skuDetail) {
  // Buscar los 5 deals más similares por (budget, descuento, BU)
  const similarDeals = findSimilarDeals(deal, 5);
  const avgROI = similarDeals.reduce((s, d) => s + d.roi, 0) / similarDeals.length;
  
  return {
    expectedGMV: deal.budget_total_mxn * avgROI,
    confidence: similarDeals.length >= 3 ? 'alta' : 'baja',
    range: [min_roi * budget, max_roi * budget],
    basedOn: similarDeals.length + ' deals similares'
  };
}
```

**Display:** Card en pre-viral: "GMV esperado: $45k - $80k (basado en 5 deals similares)"

---

### 3.2 Pipeline Scoring para Forecasts

**Concepto:** Para deals en estado "forecast", scoring de prioridad.

**Factores:**
- Potencial de mercado (GMV subcategoría × share esperado)
- Track record del maker
- Disponibilidad de inventario (si hay data)
- Temporalidad (¿es buen momento para la categoría?)
- Competencia interna (¿hay otro viral similar cercano?)

---

### 3.3 Análisis por Warehouse

**Requiere:** Integración de data granular de inventario por warehouse.

**Métricas:**
- Top warehouses por conversión durante virales
- Warehouses con OOS recurrente
- Cobertura geográfica real del viral

---

### 3.4 Recomendaciones de Parámetros Óptimos

**Concepto:** Basado en el histórico, sugerir parámetros ideales para un nuevo viral.

**Output:**
- "Para la categoría Helados, el descuento óptimo es 50% (mejor ROI que 60%)"
- "La incrementalidad de 8x tiene el mejor balance ROI/volumen en Foods"
- "Los virales en viernes tienen 23% más CR que en lunes"

---

## ELEMENTOS VISUALES ADICIONALES (Transversal)

| Elemento | Dónde | Para qué |
|---|---|---|
| Traffic light 🟢🟡🔴 | Índice/Calendario | Quick read del Viral Score |
| Sparklines | Índice, por maker | Mini trend de GMV |
| Progress bar | Pre-viral, budget | Visualizar distribución entre SKUs |
| Gauge / Speedometer | Postmortem, ROI | Impacto visual para ejecutivos |
| Donut chart | Segmentación usuarios | Más visual que barras |
| Funnel | Impresiones → Usuarios → Órdenes | Conversion funnel |
| Tooltips con contexto | Hover en métricas | "Este valor está en el top 20%" |
| Conditional formatting | Tablas de performance | Rojo/verde automático |

---

## DATOS ADICIONALES NECESARIOS

Para implementar la propuesta completa, se necesitaría eventualmente:

1. **Impresiones consistentes** — Actualmente se pasan manualmente y a veces no están disponibles. Integrar fuente automática mejoraría CR y funnel.

2. **Datos por warehouse** — Para análisis geográfico y OOS por tienda.

3. **Historial de ejecución** — Fecha real de activación/desactivación del descuento (para medir precisión de timing).

4. **Datos de recompra a 30 días** — Para medir retención real más allá de los 4 días post.

5. **Benchmark de categoría** — GMV habitual de cada subcategoría para calcular TAM y penetración.

---

## PRIORIZACIÓN DE IMPLEMENTACIÓN

| # | Elemento | Impacto | Complejidad | Dependencia |
|---|---|---|---|---|
| 1 | KPIs Eficiencia (ROI, CPO, CPNU) | Alto | Baja | Ninguna |
| 2 | Alertas Pre-Ejecución | Alto | Baja | Ninguna |
| 3 | Tendencias (charts) | Medio | Media | Chart.js CDN |
| 4 | Viral Health Score | Alto | Media | Ninguna |
| 5 | Benchmarks por dimensión | Alto | Media | Ninguna |
| 6 | Vista Ejecutiva | Alto | Alta | Charts + Benchmarks |
| 7 | Insights Automáticos | Medio | Media | Benchmarks |
| 8 | Rankings / Leaderboard | Medio | Baja | Ninguna |
| 9 | Expected Performance | Alto | Alta | Más deals históricos |
| 10 | Pipeline Scoring | Medio | Alta | Modelo predictivo |
| 11 | Análisis Warehouse | Medio | Alta | Data granular |
| 12 | Params Óptimos | Alto | Alta | >30 deals históricos |

---

## NOTAS TÉCNICAS

- **Stack:** HTML + JS vanilla + Chart.js (sin frameworks adicionales)
- **Data source:** data.js estático (se actualiza via git push)
- **Hosting:** GitHub Pages (static, no backend)
- **Limitación:** No hay backend ni base de datos — todo es client-side
- **Alternativa futura:** Si el volumen crece, migrar a Streamlit/Snowflake dashboard con queries en vivo

---

## CÓMO RETOMAR

1. Abrir este archivo (`ROADMAP_INTELIGENCIA_COMERCIAL.md`)
2. Elegir el elemento a implementar de la tabla de priorización
3. Seguir la especificación detallada de la fase correspondiente
4. Hacer commit de respaldo antes de cada cambio
5. Verificar en browser después de cada deploy
6. Revertir con `git revert <hash>` si algo no funciona

---

*Generado por: Cortex Code · Sesión del 13 mayo 2026*
