# Proyecto integrador — Optimización de un proceso de extracción

> Proyecto final del curso de Diseño Estadístico de Experimentos — Maestría en Investigación Operativa y Estadística. Integra las cuatro semanas:
> planeación, diseño factorial, ANOVA y verificación de supuestos, interacciones,
> diagnóstico de curvatura y la decisión de pasar a superficie de respuesta.

## 1. Contexto

Un laboratorio de productos naturales desea **maximizar el rendimiento (%)** de extracción
de un compuesto activo. El equipo de proceso identificó tres factores potencialmente
influyentes:

| Factor | Símbolo | Nivel bajo ($-1$) | Nivel alto ($+1$) |
|--------|---------|-------------------|-------------------|
| Temperatura | $A$ | 50 °C | 70 °C |
| Tiempo de extracción | $B$ | 30 min | 60 min |
| pH del solvente | $C$ | 4 | 6 |

Se realizó un **diseño factorial $2^3$ con 2 réplicas** (16 corridas) **más 4 puntos
centrales** (en 55–60 °C aprox., 45 min, pH 5), con el **orden de corridas aleatorizado**.
Los datos están en [`datos/extraccion.csv`](datos/extraccion.csv) (factores en variables
codificadas; la columna `rep` vale `1`/`2` para las réplicas factoriales y `C` para los
puntos centrales).

## 2. Objetivo

Determinar **qué factores e interacciones** afectan el rendimiento, **recomendar
condiciones** que lo maximicen, y decidir el **siguiente paso experimental** de forma
justificada.

## 3. Entregables

Un **informe** (PDF o notebook ejecutado) y el **código** (notebook R o Python). El informe
debe contener:

1. **Planeación (Semana 1).** Identificación de factores, niveles, respuesta, unidad
   experimental, réplicas y principios del DOE aplicados (aleatorización, replicación).
   Plantear el modelo y las hipótesis.

2. **Análisis factorial (Semanas 2–3).**
   - Estimar los **efectos** de los tres factores y sus interacciones.
   - Construir la **tabla ANOVA** (usando las réplicas para el error) e identificar los
     términos significativos ($\alpha=0.05$).
   - Interpretar las **interacciones** significativas con sus gráficas. No interpretar
     efectos principales involucrados en interacciones fuertes de forma aislada.

3. **Verificación de supuestos (Semana 1).** Análisis de residuales: normalidad
   (Q-Q, Shapiro-Wilk), homocedasticidad (residuales vs. ajustados) e independencia.

4. **Diagnóstico de curvatura (Semana 4).** Comparar la respuesta media de los **puntos
   centrales** con la de los puntos factoriales. ¿Hay evidencia de **curvatura**? ¿Qué
   implica para el modelo lineal?

5. **Recomendación y siguiente paso.**
   - Recomendar una combinación de niveles que maximice el rendimiento, en **unidades
     reales**.
   - Con base en el diagnóstico de curvatura, justificar si conviene pasar a un **modelo de
     segundo orden** (RSM con CCD o Box-Behnken) y esbozar ese diseño.
   - Mencionar la necesidad de **corridas de confirmación**.

6. **Conclusiones.** Distinguir significancia **estadística** de importancia **práctica**.

## 4. Criterios de evaluación

Ver la **rúbrica** en [`rubrica.md`](rubrica.md).

## 5. Cronograma sugerido

| Semana del curso | Avance del proyecto |
|---|---|
| 1 | Planeación y marco (sección 1) |
| 2–3 | Análisis factorial y supuestos (secciones 2–3) |
| 4 | Curvatura, recomendación y cierre (secciones 4–6); presentación |

> **Sugerencia.** Reutiliza los notebooks de las semanas como plantilla: el de factoriales
> (`semana-2/notebooks/02-factorial-dos-vias`), el de $2^k$
> (`semana-3/notebooks/01-disenos-2k`) y el de RSM (`semana-4/notebooks/02-rsm-ccd`).
