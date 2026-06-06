# Checklist de análisis de un experimento

Lista de verificación para no saltarse pasos. Marca cada casilla.

## Antes de experimentar
- [ ] Objetivo y pregunta claramente definidos.
- [ ] Variable de respuesta medible y con buen sistema de medición.
- [ ] Factores, niveles y rango elegidos; factores de ruido identificados.
- [ ] Tipo de diseño seleccionado (ver cheatsheet).
- [ ] Tamaño de muestra / réplicas justificado (potencia).
- [ ] Orden de corridas **aleatorizado**; bloqueo definido si aplica.

## Durante
- [ ] Las corridas se ejecutan según el plan; se registran incidencias.

## Análisis
- [ ] Exploración gráfica (boxplots, gráficas de interacción).
- [ ] Modelo ajustado e hipótesis planteadas.
- [ ] Tabla ANOVA / efectos estimados; términos significativos identificados.
- [ ] **Interacciones interpretadas antes** que efectos principales.
- [ ] **Supuestos verificados** (normalidad, homocedasticidad, independencia).
- [ ] Si fallan supuestos: transformación (Box-Cox) o no paramétrico (Kruskal-Wallis).
- [ ] Comparaciones múltiples con control del error por familia (Tukey/Dunnett).
- [ ] $R^2$ y magnitud de efectos reportados.

## Cierre
- [ ] Significancia **estadística** distinguida de importancia **práctica**.
- [ ] Recomendación en **unidades reales**.
- [ ] **Corridas de confirmación** previstas.
- [ ] Siguiente paso del ciclo secuencial definido (cribado → optimización).
- [ ] Análisis **reproducible** (semilla fijada, código y datos versionados).
