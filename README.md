# Viral Dashboard — Rappi MX Turbo

Dashboard estático para visualizar el lifecycle completo de activaciones comerciales (virales): desde la planeación (pre-viral) hasta los resultados (postmortem).

## Deploy en GitHub Pages

1. Crear un repositorio nuevo en GitHub (público o privado con Pages habilitado)
2. Subir estos archivos al branch `main`:
   ```
   viral-dashboard/
   ├── index.html
   ├── data.js
   └── README.md
   ```
3. En GitHub: **Settings → Pages → Source: Deploy from branch → Branch: main → / (root)**
4. El dashboard estará disponible en: `https://<tu-usuario>.github.io/<nombre-repo>/`

## Uso Local

Simplemente abrir `index.html` en el browser. No requiere servidor ni instalación.

## Actualizar con un nuevo viral

1. Abrir `data.js`
2. Agregar el nuevo deal a `PREVIRAL_DEALS` (siempre)
3. Agregar los SKUs a `PREVIRAL_SKU_DETAIL`
4. Si ya se ejecutó el viral, agregar datos a:
   - `POSTMORTEM_DEALS`
   - `POSTMORTEM_SKU_PERFORMANCE`
   - `POSTMORTEM_SELLUP_CATS`
   - `POSTMORTEM_CROSSBASKET`
5. Commit y push → GitHub Pages se actualiza automáticamente

## Estructura de datos

| Array | Granularidad | Descripción |
|---|---|---|
| `PREVIRAL_DEALS` | 1 por viral | Metadata, budget, parámetros |
| `PREVIRAL_SKU_DETAIL` | 1 por SKU × viral | Proyecciones de demanda |
| `POSTMORTEM_DEALS` | 1 por viral ejecutado | KPIs, jerarquía, sell-up, inventario, canibalización |
| `POSTMORTEM_SKU_PERFORMANCE` | 1 por SKU × viral | Performance + segmentación + inventario + canib. |
| `POSTMORTEM_SELLUP_CATS` | Top 8 categorías × viral | Categorías compradas junto al deal |
| `POSTMORTEM_CROSSBASKET` | Top 12 productos × viral | Productos por afinidad |

## URL Fija

Una vez desplegado, el link nunca cambia. Solo se actualiza `data.js` para agregar nuevos virales.
