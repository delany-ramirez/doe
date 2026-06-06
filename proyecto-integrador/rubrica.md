# Rúbrica de evaluación — Proyecto integrador

Calificación sobre **100 puntos**. Cada criterio se evalúa en cuatro niveles.

## Distribución de puntos

| # | Criterio | Puntos |
|---|----------|--------|
| 1 | Planeación y planteamiento del problema | 15 |
| 2 | Diseño y análisis factorial (efectos + ANOVA) | 25 |
| 3 | Interpretación de interacciones | 15 |
| 4 | Verificación de supuestos (residuales) | 15 |
| 5 | Diagnóstico de curvatura y decisión RSM | 15 |
| 6 | Recomendación, confirmación y comunicación | 15 |
| | **Total** | **100** |

## Niveles de desempeño

Para cada criterio: **Excelente** (100 %), **Bueno** (75 %), **Suficiente** (50 %),
**Insuficiente** (≤ 25 %).

### 1. Planeación (15 pts)
- **Excelente:** identifica correctamente factores, niveles, respuesta, unidad
  experimental y réplicas; plantea modelo e hipótesis; explica aleatorización y replicación.
- **Suficiente:** identifica los elementos pero sin justificar los principios del DOE.
- **Insuficiente:** descripción incompleta o incorrecta del diseño.

### 2. Análisis factorial (25 pts)
- **Excelente:** estima todos los efectos; ANOVA correcto con el error de las réplicas;
  identifica bien los términos significativos; código reproducible.
- **Suficiente:** ANOVA correcto pero con errores menores de interpretación.
- **Insuficiente:** cálculo erróneo de efectos o lectura incorrecta de la significancia.

### 3. Interacciones (15 pts)
- **Excelente:** detecta la(s) interacción(es) significativa(s), las grafica e interpreta
  correctamente; **no** interpreta de forma aislada efectos principales con interacción.
- **Suficiente:** identifica la interacción pero la interpreta parcialmente.
- **Insuficiente:** ignora las interacciones o las malinterpreta.

### 4. Supuestos (15 pts)
- **Excelente:** análisis de residuales completo (normalidad, homocedasticidad,
  independencia) con gráficas y pruebas, y conclusión correcta.
- **Suficiente:** revisa algunos supuestos pero de forma incompleta.
- **Insuficiente:** omite la verificación de supuestos.

### 5. Curvatura y RSM (15 pts)
- **Excelente:** compara puntos centrales vs. factoriales, concluye correctamente que hay
  **curvatura**, y justifica el paso a un modelo de **segundo orden** esbozando un CCD o
  Box-Behnken adecuado.
- **Suficiente:** detecta la curvatura pero no conecta con la estrategia RSM.
- **Insuficiente:** no analiza la curvatura.

### 6. Recomendación y comunicación (15 pts)
- **Excelente:** recomienda condiciones en unidades reales, distingue significancia
  estadística de importancia práctica, propone **corridas de confirmación**; informe claro
  y bien estructurado.
- **Suficiente:** da una recomendación razonable pero sin confirmación ni matices.
- **Insuficiente:** conclusiones vagas o no sustentadas en el análisis.

## Resultados esperados (clave para el evaluador)

Con el conjunto [`datos/extraccion.csv`](datos/extraccion.csv) se espera que el estudiante
encuentre, aproximadamente:

- **Efectos principales significativos:** temperatura ($A$) y tiempo ($B$); el pH ($C$) por
  sí solo es **débil**.
- **Interacciones significativas:** $A\times B$ (temperatura×tiempo, fuerte y positiva) y
  $A\times C$ (temperatura×pH).
- **Mejor esquina factorial:** temperatura **alta** + tiempo **alto** ($A=B=+1$), con
  rendimiento ~82–86 %.
- **Curvatura:** la media de los puntos centrales (~77 %) es **bastante mayor** que la media
  de los puntos factoriales (~70 %) → **curvatura significativa**: el modelo lineal es
  insuficiente cerca de la región óptima.
- **Decisión correcta:** aumentar el diseño a un **CCD/Box-Behnken** para ajustar un modelo
  de segundo orden y localizar el óptimo, seguido de **corridas de confirmación**.

> Penalizar interpretar el efecto principal de la temperatura o del tiempo de forma aislada
> sin mencionar su interacción. Valorar especialmente la conexión curvatura → RSM, que es el
> corazón integrador del proyecto.
