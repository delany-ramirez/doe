# Solución — Ejercicio 01 (RSM con CCD)

> Reproducible adaptando [`../notebooks/02-rsm-ccd_py.ipynb`](../notebooks/02-rsm-ccd_py.ipynb)
> al archivo [`../datos/pureza-ccd.csv`](../datos/pureza-ccd.csv).

## a) Composición del CCD

13 corridas: **4 factoriales** ($\pm1$), **4 axiales** ($\pm1.414$ sobre los ejes) y
**5 centrales** ($0,0$).

- Los **factoriales** estiman los términos lineales y la interacción.
- Los **axiales** (5 niveles por factor) permiten estimar los términos **cuadráticos**
  $\beta_{ii}$.
- Los **centrales** dan el **error puro** y la **prueba de curvatura**.

Es **rotable** porque $\alpha=(2^2)^{1/4}=1.414$: la **varianza de predicción** es la misma
en todos los puntos equidistantes del centro, sin importar la dirección.

## b) Modelo de segundo orden

$$
\hat{y}=90.28-1.79\,x_1+2.40\,x_2-2.21\,x_1^2-2.16\,x_2^2+0.28\,x_1x_2,
\qquad R^2\approx0.995 .
$$

Excelente ajuste. Los coeficientes cuadráticos negativos anticipan una superficie cóncava
(máximo).

## c) Punto estacionario

$$
\mathbf{x}_s=-\tfrac12\mathbf{B}^{-1}\mathbf{b}
\;\Rightarrow\; x_1 \approx -0.373,\quad x_2 \approx 0.532 .
$$

## d) Análisis canónico

Valores propios de $\mathbf{B}$: $\lambda_1\approx-2.32$, $\lambda_2\approx-2.04$. Ambos
**negativos** ⇒ el punto estacionario es un **MÁXIMO**. La superficie desciende en todas
las direcciones a partir de $\mathbf{x}_s$.

## e) Pureza óptima y ubicación

$$
\hat{y}(\mathbf{x}_s)\approx 91.25\ \% .
$$

El óptimo $(-0.373,\,0.532)$ está **cómodamente dentro** de la región experimental
($|x_i|\le1.414$): es un óptimo **interior**, no en la frontera, por lo que la
recomendación es fiable.

## f) Paso siguiente

Realizar **corridas de confirmación** en las condiciones óptimas predichas (traducidas a
unidades reales de temperatura y tiempo) y comprobar que la pureza observada coincide con
el ~91.3 % predicho, antes de adoptar esas condiciones en producción. Confirmar siempre
antes de decidir.
