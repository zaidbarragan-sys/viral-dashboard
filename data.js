// ============================================================
// VIRAL DASHBOARD — Datos de las 6 tablas
// Actualizar este archivo cuando se genere un nuevo viral.
// ============================================================

const PREVIRAL_DEALS = [
  {
    deal_id: "VIRAL_DEAL_AUDAZ_180526",
    maker_name: "Audaz Bakery",
    maker_aux: "Audaz",
    business_unit: "WOW",
    descuento_pct: 50,
    incrementalidad: 5,
    tipo_viral: "1 día",
    ciudades: "CDMX",
    fecha_planeacion: "2026-05-05",
    fecha_ejecucion: "2026-05-18",
    usd_mxn: 17.38,
    fecha_tasa: "2026-05-05",
    budget_maker_mxn: 20000,
    budget_growth_mxn: 6000,
    budget_total_mxn: 26000,
    budget_maker_usd: 1150.80,
    budget_growth_usd: 345.24,
    budget_total_usd: 1496.04,
    financiamiento_maker: "OC",
    pct_growth_vs_maker: 30,
    categoria_display: "Panaderia salada, Panaderia dulce"
  },
  {
    deal_id: "VIRAL_DEAL_GRANEL_300426",
    maker_name: "Granel",
    maker_aux: "Granel",
    business_unit: "WOW",
    descuento_pct: 60,
    incrementalidad: 15,
    tipo_viral: "1 día",
    ciudades: "CDMX",
    fecha_planeacion: "2026-03-23",
    fecha_ejecucion: "2026-04-30",
    usd_mxn: 17.49,
    fecha_tasa: "2026-05-04",
    budget_maker_mxn: 40000,
    budget_growth_mxn: 40000,
    budget_total_mxn: 80000,
    budget_maker_usd: 2286.65,
    budget_growth_usd: 2286.65,
    budget_total_usd: 4573.29,
    financiamiento_maker: "OC",
    pct_growth_vs_maker: 100,
    categoria_display: "Gomitas y caramelos, Frutos secos y semillas"
  },
  {
    deal_id: "VIRAL_DEAL_GEPP_290126",
    maker_name: "Gepp",
    maker_aux: "Gepp",
    business_unit: "Drinks",
    descuento_pct: 40,
    incrementalidad: 9,
    tipo_viral: "multi-día",
    ciudades: "Nacional",
    fecha_planeacion: "2025-12-22",
    fecha_ejecucion: "2026-01-29",
    usd_mxn: 17.45,
    fecha_tasa: "2025-12-22",
    budget_maker_mxn: 22000,
    budget_growth_mxn: 6600,
    budget_total_mxn: 28600,
    budget_maker_usd: 1260.74,
    budget_growth_usd: 378.22,
    budget_total_usd: 1638.97,
    financiamiento_maker: "OC",
    pct_growth_vs_maker: 30,
    categoria_display: "Isotónicos"
  }
];

const PREVIRAL_SKU_DETAIL = [
  // Audaz
  { deal_id: "VIRAL_DEAL_AUDAZ_180526", sync: "81181", ean: "2220000001137", pid: "2115719600", name: "Hogaza masa madre congelada", subcategoria: "Panaderia salada", h_units: 11.8, h_orders: 11.3, avg_price: 180.65, ex_incr_units: 59, ex_incr_orders: 57, ex_budget_mxn: 5329, ex_budget_usd: 306.63, real_units: 243, final_budget_mxn: 21959, final_budget_usd: 1263.51, sku_order: 1 },
  { deal_id: "VIRAL_DEAL_AUDAZ_180526", sync: "86864", ean: "22200000027973", pid: "2115708053", name: "Trilogía de galletas- Audaz", subcategoria: "Panaderia dulce", h_units: 2.1, h_orders: 1.9, avg_price: 180.27, ex_incr_units: 11, ex_incr_orders: 10, ex_budget_mxn: 991, ex_budget_usd: 57.02, real_units: 45, final_budget_mxn: 4056, final_budget_usd: 233.38, sku_order: 2 },
  // Granel
  { deal_id: "VIRAL_DEAL_GRANEL_300426", sync: "87047", ean: "2220000002881", pid: "2115717499", name: "OSITO ENCHILADO 200 gr", subcategoria: "Gomitas y caramelos", h_units: 15.0, h_orders: 24.0, avg_price: 26.00, ex_incr_units: 225, ex_incr_orders: 360, ex_budget_mxn: 3510, ex_budget_usd: 200.66, real_units: 1972, final_budget_mxn: 30763, final_budget_usd: 1758.62, sku_order: 1 },
  { deal_id: "VIRAL_DEAL_GRANEL_300426", sync: "86768", ean: "2220000002861", pid: "2115709124", name: "Piña Enchilada 200 g", subcategoria: "Frutos secos y semillas", h_units: 8.0, h_orders: 15.0, avg_price: 83.00, ex_incr_units: 120, ex_incr_orders: 225, ex_budget_mxn: 5976, ex_budget_usd: 341.60, real_units: 330, final_budget_mxn: 16434, final_budget_usd: 939.48, sku_order: 2 },
  { deal_id: "VIRAL_DEAL_GRANEL_300426", sync: "87055", ean: "2220000002887", pid: "2115714856", name: "GOMA SANDIA ENCHILADA 200", subcategoria: "Gomitas y caramelos", h_units: 8.0, h_orders: 14.0, avg_price: 20.00, ex_incr_units: 120, ex_incr_orders: 210, ex_budget_mxn: 1440, ex_budget_usd: 82.32, real_units: 1368, final_budget_mxn: 16416, final_budget_usd: 938.45, sku_order: 3 },
  { deal_id: "VIRAL_DEAL_GRANEL_300426", sync: "86778", ean: "2220000002847", pid: "2115709123", name: "Mango Enchilado 200 g", subcategoria: "Frutos secos y semillas", h_units: 4.0, h_orders: 5.0, avg_price: 83.00, ex_incr_units: 60, ex_incr_orders: 75, ex_budget_mxn: 2988, ex_budget_usd: 170.81, real_units: 165, final_budget_mxn: 8217, final_budget_usd: 469.72, sku_order: 4 },
  { deal_id: "VIRAL_DEAL_GRANEL_300426", sync: "87062", ean: "2220000002908", pid: "2115714866", name: "Aros De Pepino Ench.", subcategoria: "Gomitas y caramelos", h_units: 4.0, h_orders: 4.0, avg_price: 22.00, ex_incr_units: 60, ex_incr_orders: 60, ex_budget_mxn: 792, ex_budget_usd: 45.28, real_units: 622, final_budget_mxn: 8210, final_budget_usd: 469.32, sku_order: 5 },
  // Gepp
  { deal_id: "VIRAL_DEAL_GEPP_290126", sync: "8161", ean: "36731326003", pid: "2115518974", name: "Gatorade Bebida Hidratante Sabor", subcategoria: "Isotónicos", h_units: 85.1, h_orders: 61.4, avg_price: 33.00, ex_incr_units: 766, ex_incr_orders: 553, ex_budget_mxn: 10111, ex_budget_usd: 579.43, real_units: 919, final_budget_mxn: 12131, final_budget_usd: 695.19, sku_order: 1 },
  { deal_id: "VIRAL_DEAL_GEPP_290126", sync: "8939", ean: "36731323002", pid: "2115620178", name: "Gatorade Bebida Rehidratante sabor", subcategoria: "Isotónicos", h_units: 73.1, h_orders: 55.4, avg_price: 31.94, ex_incr_units: 658, ex_incr_orders: 499, ex_budget_mxn: 8407, ex_budget_usd: 481.78, real_units: 816, final_budget_mxn: 10425, final_budget_usd: 597.42, sku_order: 2 },
  { deal_id: "VIRAL_DEAL_GEPP_290126", sync: "12111", ean: "7501022015063", pid: "2115518976", name: "Gatorlyte Naranja", subcategoria: "Isotónicos", h_units: 17.9, h_orders: 10.8, avg_price: 27.82, ex_incr_units: 161, ex_incr_orders: 97, ex_budget_mxn: 1792, ex_budget_usd: 102.69, real_units: 229, final_budget_mxn: 2548, final_budget_usd: 146.02, sku_order: 3 },
  { deal_id: "VIRAL_DEAL_GEPP_290126", sync: "12104", ean: "7501022015049", pid: "2115518975", name: "Gatorlyte Fresa Kiwi", subcategoria: "Isotónicos", h_units: 15.9, h_orders: 10.4, avg_price: 23.88, ex_incr_units: 143, ex_incr_orders: 94, ex_budget_mxn: 1366, ex_budget_usd: 78.28, real_units: 237, final_budget_mxn: 2264, final_budget_usd: 129.74, sku_order: 4 },
  { deal_id: "VIRAL_DEAL_GEPP_290126", sync: "11908", ean: "7501022014295", pid: "2112840750", name: "Gatorade sin Azucar Frambuesa", subcategoria: "Isotónicos", h_units: 8.3, h_orders: 5.3, avg_price: 31.34, ex_incr_units: 75, ex_incr_orders: 48, ex_budget_mxn: 940, ex_budget_usd: 53.87, real_units: 95, final_budget_mxn: 1191, final_budget_usd: 68.25, sku_order: 5 },
  { deal_id: "VIRAL_DEAL_GEPP_290126", sync: "83642", ean: "7501022016053", pid: "2115515390", name: "Gatorlyte Bebida Frutas Tropicales", subcategoria: "Isotónicos", h_units: 0.2, h_orders: 0.1, avg_price: 27.11, ex_incr_units: 2, ex_incr_orders: 1, ex_budget_mxn: 22, ex_budget_usd: 1.26, real_units: 3, final_budget_mxn: 33, final_budget_usd: 1.89, sku_order: 6 }
];

const POSTMORTEM_DEALS = [
  {
    deal_id: "VIRAL_DEAL_GRANEL_300426",
    post_days: 4, fase: 2,
    gmv_activacion: 32980, gmv_lw: 2440, gmv_dlw_pct: 1251.6, gmv_l4w: 2563, gmv_dl4w_pct: 1186.7,
    usuarios_unicos: 230, usr_lw: 55, usr_dlw_pct: 318.2, usr_l4w: 52.5, usr_dl4w_pct: 338.1,
    cr_pct: 1.99, aov: 122.60, aov_lw: 37.54, aov_dlw_pct: 226.6, aov_l4w: 42.73, aov_dl4w_pct: 186.9,
    unidades_total: 700, und_lw: 76, und_dlw_pct: 821.1, und_l4w: 70.5, und_dl4w_pct: 893.0,
    ordenes_total: 269, ord_lw: 65, ord_dlw_pct: 313.8, ord_l4w: 60.5, ord_dl4w_pct: 344.6,
    impresiones_total: 11585,
    so_turbo_mx: 7009360, gmv_categoria: 121126, gmv_cat_lw: 76139, gmv_cat_l4w: 70032,
    share_deal_cat_pct: 27.23, share_lw_pct: 3.20, share_l4w_pct: 3.66,
    gmv_basket: 91997, gmv_sellup: 59017, pct_sellup: 64.15, aov_basket: 342, aov_deal_post: 122.60,
    cross_ordenes: 269, cross_skus_distintos: 610, cross_top_producto: "Corona Extra 710mL", cross_top_ordenes: 12, cross_top_pct: 4.46,
    inv_oos_cierre_viral_avg: 17.4, inv_oos_post_avg: 16.4, inv_cov_viral_ap_avg: 53.2, inv_cov_viral_ci_avg: 26.0, inv_cov_post_avg: 28.9, inv_cov_bench_avg: 51.2,
    canib_ord_post: 117, canib_ord_bench: 254, canib_ord_delta_pct: -53.9,
    canib_und_post: 118, canib_und_bench: 270, canib_und_delta_pct: -56.3,
    canib_cli_post: 101, canib_cli_bench: 233, canib_cli_delta_pct: -56.7
  },
  {
    deal_id: "VIRAL_DEAL_GEPP_290126",
    post_days: 4, fase: 2,
    gmv_activacion: 71179, gmv_lw: 5488, gmv_dlw_pct: 1196.7, gmv_l4w: 4037, gmv_dl4w_pct: 1662.8,
    usuarios_unicos: 662, usr_lw: 115, usr_dlw_pct: 475.7, usr_l4w: 90, usr_dl4w_pct: 639.6,
    cr_pct: 1.78, aov: 98.72, aov_lw: 45.73, aov_dlw_pct: 115.9, aov_l4w: 43.28, aov_dl4w_pct: 128.1,
    unidades_total: 2259, und_lw: 179, und_dlw_pct: 1161.5, und_l4w: 134, und_dl4w_pct: 1590.3,
    ordenes_total: 721, ord_lw: 120, ord_dlw_pct: 500.8, ord_l4w: 93, ord_dl4w_pct: 673.1,
    impresiones_total: 37147,
    so_turbo_mx: 6280226, gmv_categoria: 92553, gmv_cat_lw: 24485, gmv_cat_l4w: 28102,
    share_deal_cat_pct: 76.91, share_lw_pct: 22.41, share_l4w_pct: 14.36,
    gmv_basket: 173434, gmv_sellup: 102255, pct_sellup: 58.96, aov_basket: 240.55, aov_deal_post: 98.72,
    cross_ordenes: 721, cross_skus_distintos: 859, cross_top_producto: "Bachoco Huevo Blanco 12 ud.", cross_top_ordenes: 22, cross_top_pct: 3.05,
    inv_oos_cierre_viral_avg: 11.7, inv_oos_post_avg: 11.0, inv_cov_viral_ap_avg: 84.4, inv_cov_viral_ci_avg: 73.2, inv_cov_post_avg: 74.5, inv_cov_bench_avg: 84.6,
    canib_ord_post: 557, canib_ord_bench: 411, canib_ord_delta_pct: 35.5,
    canib_und_post: 730, canib_und_bench: 566, canib_und_delta_pct: 29.0,
    canib_cli_post: 541, canib_cli_bench: 383, canib_cli_delta_pct: 41.3
  }
];

const POSTMORTEM_SKU_PERFORMANCE = [
  // Granel
  { deal_id: "VIRAL_DEAL_GRANEL_300426", sync: "86778", name: "Mango Enchilado 200 g", ordenes: 106, usuarios: 98, unidades: 141, gmv: 11511, aov: 108.60, impresiones: 3021, cr_pct: 3.24, gmv_dlw_pct: 2644.0, gmv_dl4w_pct: 1681.2, seg_nuevo: 95, seg_nuevo_pct: 90, seg_reactivado: 1, seg_reactivado_pct: 1, seg_retenido: 9, seg_retenido_pct: 9, stock_viral: 289, stock_post: 144, stock_bench: 163, stock_delta_pct: -11.4, oos_cierre_viral: 12, oos_post: 15, cov_viral_ap: 58.5, cov_viral_ci: 31.8, cov_post: 27.2, canib_ord_post: 15, canib_ord_bench: 31, canib_ord_delta_pct: -51.6, canib_und_post: 15, canib_und_bench: 32, canib_und_delta_pct: -53.1, canib_cli_post: 15, canib_cli_bench: 30, canib_cli_delta_pct: -50.0 },
  { deal_id: "VIRAL_DEAL_GRANEL_300426", sync: "86768", name: "Piña Enchilada 200 g", ordenes: 94, usuarios: 87, unidades: 136, gmv: 11243, aov: 119.60, impresiones: 3536, cr_pct: 2.46, gmv_dlw_pct: 2753.1, gmv_dl4w_pct: 1850.1, seg_nuevo: 80, seg_nuevo_pct: 85, seg_reactivado: 8, seg_reactivado_pct: 8, seg_retenido: 6, seg_retenido_pct: 6, stock_viral: 735, stock_post: 642, stock_bench: 281, stock_delta_pct: 128.7, oos_cierre_viral: 4, oos_post: 4, cov_viral_ap: 65.7, cov_viral_ci: 65.2, cov_post: 65.2, canib_ord_post: 29, canib_ord_bench: 22, canib_ord_delta_pct: 31.8, canib_und_post: 29, canib_und_bench: 23, canib_und_delta_pct: 26.1, canib_cli_post: 22, canib_cli_bench: 21, canib_cli_delta_pct: 4.8 },
  { deal_id: "VIRAL_DEAL_GRANEL_300426", sync: "87047", name: "OSITO ENCHILADO 200 gr", ordenes: 141, usuarios: 117, unidades: 289, gmv: 7344, aov: 52.09, impresiones: 3305, cr_pct: 3.54, gmv_dlw_pct: 818.8, gmv_dl4w_pct: 1100.2, seg_nuevo: 104, seg_nuevo_pct: 74, seg_reactivado: 9, seg_reactivado_pct: 6, seg_retenido: 27, seg_retenido_pct: 19, stock_viral: 354, stock_post: 99, stock_bench: 122, stock_delta_pct: -19.3, oos_cierre_viral: 19, oos_post: 15, cov_viral_ap: 65.7, cov_viral_ci: 18.3, cov_post: 28.8, canib_ord_post: 52, canib_ord_bench: 83, canib_ord_delta_pct: -37.3, canib_und_post: 53, canib_und_bench: 89, canib_und_delta_pct: -40.4, canib_cli_post: 45, canib_cli_bench: 78, canib_cli_delta_pct: -42.3 },
  { deal_id: "VIRAL_DEAL_GRANEL_300426", sync: "87055", name: "GOMA SANDIA ENCHILADA 200", ordenes: 49, usuarios: 41, unidades: 81, gmv: 1696, aov: 34.62, impresiones: 878, cr_pct: 4.67, gmv_dlw_pct: 177.3, gmv_dl4w_pct: 206.0, seg_nuevo: 40, seg_nuevo_pct: 82, seg_reactivado: 1, seg_reactivado_pct: 2, seg_retenido: 8, seg_retenido_pct: 16, stock_viral: 79, stock_post: 34, stock_bench: 92, stock_delta_pct: -62.7, oos_cierre_viral: 28, oos_post: 22, cov_viral_ap: 34.5, cov_viral_ci: 1.4, cov_post: 15.7, canib_ord_post: 19, canib_ord_bench: 88, canib_ord_delta_pct: -78.4, canib_und_post: 20, canib_und_bench: 96, canib_und_delta_pct: -79.2, canib_cli_post: 17, canib_cli_bench: 76, canib_cli_delta_pct: -77.6 },
  { deal_id: "VIRAL_DEAL_GRANEL_300426", sync: "87062", name: "Aros De Pepino Ench.", ordenes: 42, usuarios: 39, unidades: 53, gmv: 1186, aov: 28.23, impresiones: 845, cr_pct: 4.62, gmv_dlw_pct: 450.4, gmv_dl4w_pct: 410.6, seg_nuevo: 38, seg_nuevo_pct: 90, seg_reactivado: 1, seg_reactivado_pct: 2, seg_retenido: 3, seg_retenido_pct: 7, stock_viral: 61, stock_post: 9, stock_bench: 59, stock_delta_pct: -84.3, oos_cierre_viral: 24, oos_post: 26, cov_viral_ap: 41.4, cov_viral_ci: 13.2, cov_post: 7.8, canib_ord_post: 2, canib_ord_bench: 30, canib_ord_delta_pct: -93.3, canib_und_post: 1, canib_und_bench: 30, canib_und_delta_pct: -96.7, canib_cli_post: 2, canib_cli_bench: 28, canib_cli_delta_pct: -92.9 },
  // Gepp
  { deal_id: "VIRAL_DEAL_GEPP_290126", sync: "8161", name: "Gatorade Bebida Hidratante Sabor", ordenes: 384, usuarios: 370, unidades: 773, gmv: 27149, aov: 70.70, impresiones: 10342, cr_pct: 3.58, gmv_dlw_pct: 1337.9, gmv_dl4w_pct: 1830.0, seg_nuevo: 260, seg_nuevo_pct: 68, seg_reactivado: 91, seg_reactivado_pct: 24, seg_retenido: 29, seg_retenido_pct: 8, stock_viral: 1231, stock_post: 1631, stock_bench: 971, stock_delta_pct: 67.9, oos_cierre_viral: 7, oos_post: 6, cov_viral_ap: 98.8, cov_viral_ci: 81.8, cov_post: 82.3, canib_ord_post: 236, canib_ord_bench: 141, canib_ord_delta_pct: 67.7, canib_und_post: 291, canib_und_bench: 184, canib_und_delta_pct: 57.9, canib_cli_post: 227, canib_cli_bench: 130, canib_cli_delta_pct: 74.6 },
  { deal_id: "VIRAL_DEAL_GEPP_290126", sync: "8939", name: "Gatorade Bebida Rehidratante Sabor", ordenes: 311, usuarios: 300, unidades: 669, gmv: 21424, aov: 68.89, impresiones: 7076, cr_pct: 4.24, gmv_dlw_pct: 1092.2, gmv_dl4w_pct: 1455.7, seg_nuevo: 219, seg_nuevo_pct: 72, seg_reactivado: 62, seg_reactivado_pct: 20, seg_retenido: 25, seg_retenido_pct: 8, stock_viral: 531, stock_post: 853, stock_bench: 541, stock_delta_pct: 57.7, oos_cierre_viral: 15, oos_post: 15, cov_viral_ap: 77.0, cov_viral_ci: 68.9, cov_post: 69.9, canib_ord_post: 173, canib_ord_bench: 117, canib_ord_delta_pct: 48.2, canib_und_post: 235, canib_und_bench: 154, canib_und_delta_pct: 52.6, canib_cli_post: 168, canib_cli_bench: 113, canib_cli_delta_pct: 49.3 },
  { deal_id: "VIRAL_DEAL_GEPP_290126", sync: "11908", name: "Gatorade Bebida Isotonica Sin", ordenes: 156, usuarios: 150, unidades: 300, gmv: 9642, aov: 61.81, impresiones: 5199, cr_pct: 2.88, gmv_dlw_pct: 3215.4, gmv_dl4w_pct: 2554.9, seg_nuevo: 131, seg_nuevo_pct: 84, seg_reactivado: 9, seg_reactivado_pct: 6, seg_retenido: 15, seg_retenido_pct: 10, stock_viral: 358, stock_post: 693, stock_bench: 333, stock_delta_pct: 108.1, oos_cierre_viral: 9, oos_post: 10, cov_viral_ap: 94.7, cov_viral_ci: 77.5, cov_post: 72.3, canib_ord_post: 37, canib_ord_bench: 38, canib_ord_delta_pct: -1.3, canib_und_post: 52, canib_und_bench: 54, canib_und_delta_pct: -4.1, canib_cli_post: 37, canib_cli_bench: 33, canib_cli_delta_pct: 12.1 },
  { deal_id: "VIRAL_DEAL_GEPP_290126", sync: "12111", name: "Gatorlyte Bebida Hidratante Sabor", ordenes: 96, usuarios: 94, unidades: 201, gmv: 5408, aov: 56.33, impresiones: 6190, cr_pct: 1.52, gmv_dlw_pct: 557.3, gmv_dl4w_pct: 1181.6, seg_nuevo: 63, seg_nuevo_pct: 66, seg_reactivado: 22, seg_reactivado_pct: 23, seg_retenido: 10, seg_retenido_pct: 10, stock_viral: 245, stock_post: 670, stock_bench: 300, stock_delta_pct: 123.0, oos_cierre_viral: 12, oos_post: 13, cov_viral_ap: 80.5, cov_viral_ci: 73.7, cov_post: 74.0, canib_ord_post: 45, canib_ord_bench: 48, canib_ord_delta_pct: -6.3, canib_und_post: 68, canib_und_bench: 73, canib_und_delta_pct: -6.2, canib_cli_post: 43, canib_cli_bench: 45, canib_cli_delta_pct: -3.9 },
  { deal_id: "VIRAL_DEAL_GEPP_290126", sync: "12104", name: "Gatorlyte Bebida Con Electrolitos", ordenes: 110, usuarios: 103, unidades: 208, gmv: 4900, aov: 44.54, impresiones: 5445, cr_pct: 1.89, gmv_dlw_pct: 733.6, gmv_dl4w_pct: 1325.9, seg_nuevo: 81, seg_nuevo_pct: 74, seg_reactivado: 11, seg_reactivado_pct: 10, seg_retenido: 18, seg_retenido_pct: 16, stock_viral: 193, stock_post: 631, stock_bench: 224, stock_delta_pct: 181.7, oos_cierre_viral: 16, oos_post: 10, cov_viral_ap: 83.5, cov_viral_ci: 67.1, cov_post: 79.6, canib_ord_post: 41, canib_ord_bench: 46, canib_ord_delta_pct: -10.9, canib_und_post: 53, canib_und_bench: 71, canib_und_delta_pct: -25.1, canib_cli_post: 41, canib_cli_bench: 42, canib_cli_delta_pct: -3.0 },
  { deal_id: "VIRAL_DEAL_GEPP_290126", sync: "83642", name: "Gatorlyte Bebida Frutas Tropicales", ordenes: 57, usuarios: 57, unidades: 108, gmv: 2656, aov: 46.59, impresiones: 2895, cr_pct: 1.97, gmv_dlw_pct: 2519.7, gmv_dl4w_pct: 2033.7, seg_nuevo: 54, seg_nuevo_pct: 95, seg_reactivado: 3, seg_reactivado_pct: 5, seg_retenido: 0, seg_retenido_pct: 0, stock_viral: 165, stock_post: 184, stock_bench: 152, stock_delta_pct: 20.5, oos_cierre_viral: 11, oos_post: 12, cov_viral_ap: 71.9, cov_viral_ci: 70.2, cov_post: 68.9, canib_ord_post: 25, canib_ord_bench: 21, canib_ord_delta_pct: 20.5, canib_und_post: 31, canib_und_bench: 30, canib_und_delta_pct: 4.2, canib_cli_post: 25, canib_cli_bench: 20, canib_cli_delta_pct: 25.0 }
];

const POSTMORTEM_SELLUP_CATS = [
  // Granel
  { deal_id: "VIRAL_DEAL_GRANEL_300426", subcategoria: "Deportes", ordenes: 4, gmv: 5289, pct_sellup: 8.96, order: 1 },
  { deal_id: "VIRAL_DEAL_GRANEL_300426", subcategoria: "Cervezas", ordenes: 39, gmv: 4930, pct_sellup: 8.35, order: 2 },
  { deal_id: "VIRAL_DEAL_GRANEL_300426", subcategoria: "Otros Bienestar y Ocio", ordenes: 8, gmv: 3521, pct_sellup: 5.97, order: 3 },
  { deal_id: "VIRAL_DEAL_GRANEL_300426", subcategoria: "Snacks salados", ordenes: 42, gmv: 2790, pct_sellup: 4.73, order: 4 },
  { deal_id: "VIRAL_DEAL_GRANEL_300426", subcategoria: "Gomitas y caramelos", ordenes: 38, gmv: 2044, pct_sellup: 3.46, order: 5 },
  { deal_id: "VIRAL_DEAL_GRANEL_300426", subcategoria: "Frutos secos y semillas", ordenes: 33, gmv: 1916, pct_sellup: 3.25, order: 6 },
  { deal_id: "VIRAL_DEAL_GRANEL_300426", subcategoria: "Galletas", ordenes: 34, gmv: 1609, pct_sellup: 2.73, order: 7 },
  { deal_id: "VIRAL_DEAL_GRANEL_300426", subcategoria: "Gaseosas", ordenes: 44, gmv: 1586, pct_sellup: 2.69, order: 8 },
  // Gepp
  { deal_id: "VIRAL_DEAL_GEPP_290126", subcategoria: "Snacks salados", ordenes: 139, gmv: 11607, pct_sellup: 11.35, order: 1 },
  { deal_id: "VIRAL_DEAL_GEPP_290126", subcategoria: "Gaseosas", ordenes: 138, gmv: 7901, pct_sellup: 7.73, order: 2 },
  { deal_id: "VIRAL_DEAL_GEPP_290126", subcategoria: "Suero", ordenes: 69, gmv: 7292, pct_sellup: 7.13, order: 3 },
  { deal_id: "VIRAL_DEAL_GEPP_290126", subcategoria: "Cervezas", ordenes: 47, gmv: 6729, pct_sellup: 6.58, order: 4 },
  { deal_id: "VIRAL_DEAL_GEPP_290126", subcategoria: "Panaderia salada", ordenes: 34, gmv: 4309, pct_sellup: 4.21, order: 5 },
  { deal_id: "VIRAL_DEAL_GEPP_290126", subcategoria: "Cigarrillos", ordenes: 21, gmv: 4232, pct_sellup: 4.14, order: 6 },
  { deal_id: "VIRAL_DEAL_GEPP_290126", subcategoria: "Huevos", ordenes: 47, gmv: 3856, pct_sellup: 3.77, order: 7 },
  { deal_id: "VIRAL_DEAL_GEPP_290126", subcategoria: "Agua Natural", ordenes: 75, gmv: 3704, pct_sellup: 3.62, order: 8 }
];

const POSTMORTEM_CROSSBASKET = [
  // Granel
  { deal_id: "VIRAL_DEAL_GRANEL_300426", sync: "4939", name: "Cerveza Corona Extra Laton", subcategoria: "Cervezas", ordenes: 12, pct_deal: 4.46, order: 1 },
  { deal_id: "VIRAL_DEAL_GRANEL_300426", sync: "74130", name: "Oreo Galleta Oreo Cubierta", subcategoria: "Esencias y colorantes", ordenes: 10, pct_deal: 3.72, order: 2 },
  { deal_id: "VIRAL_DEAL_GRANEL_300426", sync: "6446", name: "Kinder Chocolate Maxi Con", subcategoria: "Chocolates", ordenes: 9, pct_deal: 3.35, order: 3 },
  { deal_id: "VIRAL_DEAL_GRANEL_300426", sync: "5314", name: "Pack Cerveza Michelob Ultra", subcategoria: "Cervezas", ordenes: 9, pct_deal: 3.35, order: 4 },
  { deal_id: "VIRAL_DEAL_GRANEL_300426", sync: "14693", name: "Aguacate Para Hoy X3", subcategoria: "Frutas", ordenes: 9, pct_deal: 3.35, order: 5 },
  { deal_id: "VIRAL_DEAL_GRANEL_300426", sync: "71840", name: "Harpic Limpiador Liquido", subcategoria: "Limpiadores multiusos", ordenes: 7, pct_deal: 2.60, order: 6 },
  { deal_id: "VIRAL_DEAL_GRANEL_300426", sync: "91919", name: "Panini Album Fifa World", subcategoria: "Otros Bienestar y Ocio", ordenes: 7, pct_deal: 2.60, order: 7 },
  { deal_id: "VIRAL_DEAL_GRANEL_300426", sync: "87045", name: "GOMA MINI TAJIN 200 gr", subcategoria: "Otros", ordenes: 7, pct_deal: 2.60, order: 8 },
  { deal_id: "VIRAL_DEAL_GRANEL_300426", sync: "6149", name: "Coca-Cola Refresco Sin Azucar", subcategoria: "Gaseosas", ordenes: 6, pct_deal: 2.23, order: 9 },
  { deal_id: "VIRAL_DEAL_GRANEL_300426", sync: "14156", name: "Hielo Club 5 kg", subcategoria: "Hielo", ordenes: 6, pct_deal: 2.23, order: 10 },
  { deal_id: "VIRAL_DEAL_GRANEL_300426", sync: "10929", name: "Doritos Nacho 223Gr Sabritas", subcategoria: "Snacks salados", ordenes: 6, pct_deal: 2.23, order: 11 },
  { deal_id: "VIRAL_DEAL_GRANEL_300426", sync: "82057", name: "Pepino", subcategoria: "Frutas", ordenes: 6, pct_deal: 2.23, order: 12 },
  // Gepp
  { deal_id: "VIRAL_DEAL_GEPP_290126", sync: "12616", name: "Bachoco Huevo Blanco 12 ud", subcategoria: "Huevos", ordenes: 22, pct_deal: 3.05, order: 1 },
  { deal_id: "VIRAL_DEAL_GEPP_290126", sync: "8033", name: "Ciel Agua Natural Purificada", subcategoria: "Agua Natural", ordenes: 18, pct_deal: 2.50, order: 2 },
  { deal_id: "VIRAL_DEAL_GEPP_290126", sync: "9103", name: "Electrolit Suero Rehidratante", subcategoria: "Suero", ordenes: 17, pct_deal: 2.36, order: 3 },
  { deal_id: "VIRAL_DEAL_GEPP_290126", sync: "5759", name: "Electrolit Suero Rehidratante", subcategoria: "Suero", ordenes: 17, pct_deal: 2.36, order: 4 },
  { deal_id: "VIRAL_DEAL_GEPP_290126", sync: "5543", name: "Bachoco Huevo Blanco 18 Und", subcategoria: "Huevos", ordenes: 16, pct_deal: 2.22, order: 5 },
  { deal_id: "VIRAL_DEAL_GEPP_290126", sync: "6744", name: "Coca-Cola Original Refresco Pet", subcategoria: "Gaseosas", ordenes: 15, pct_deal: 2.08, order: 6 },
  { deal_id: "VIRAL_DEAL_GEPP_290126", sync: "5495", name: "Electrolit Suero Rehidratante", subcategoria: "Suero", ordenes: 15, pct_deal: 2.08, order: 7 },
  { deal_id: "VIRAL_DEAL_GEPP_290126", sync: "5896", name: "Electrolit Suero Rehidratante", subcategoria: "Suero", ordenes: 15, pct_deal: 2.08, order: 8 },
  { deal_id: "VIRAL_DEAL_GEPP_290126", sync: "8043", name: "Electrolit Suero Rehidratante", subcategoria: "Suero", ordenes: 15, pct_deal: 2.08, order: 9 },
  { deal_id: "VIRAL_DEAL_GEPP_290126", sync: "12664", name: "Bimbo Donas Azucaradas 158", subcategoria: "Panaderia dulce", ordenes: 14, pct_deal: 1.94, order: 10 },
  { deal_id: "VIRAL_DEAL_GEPP_290126", sync: "5340", name: "Doritos Snack Nachos con", subcategoria: "Snacks salados", ordenes: 14, pct_deal: 1.94, order: 11 },
  { deal_id: "VIRAL_DEAL_GEPP_290126", sync: "12227", name: "Ciel Agua Natural Purificada", subcategoria: "Agua Natural", ordenes: 14, pct_deal: 1.94, order: 12 }
];
