# Modelos de segundo orden: CCD, Box-Behnken y optimización

> **Objetivos.** Ajustar modelos cuadráticos de superficie de respuesta, conocer los
> diseños central compuesto (CCD) y Box-Behnken, localizar el punto óptimo y analizar la
> naturaleza de la superficie.

## 1. Cuando la superficie se curva

Una vez que el ascenso por máxima pendiente (documento 01) lleva a la **vecindad del
óptimo**, la superficie deja de ser plana: hay un máximo, un mínimo o un punto de silla.
Un modelo de primer orden ya no basta; se necesita un **modelo de segundo orden**
(cuadrático) que capture la **curvatura**.

## 2. El modelo de segundo orden

$$
\hat{y} = \beta_0 + \sum_{i=1}^{k}\beta_i x_i + \sum_{i=1}^{k}\beta_{ii} x_i^2 + \sum_{i<j}\beta_{ij} x_i x_j .
$$

Tiene tres tipos de términos:

- **Lineales** $\beta_i x_i$: la pendiente.
- **Cuadráticos puros** $\beta_{ii} x_i^2$: la curvatura en cada eje.
- **Interacciones** $\beta_{ij} x_i x_j$: la torsión de la superficie.

Para estimar los $\beta_{ii}$ se requieren **al menos tres niveles** por factor (un $2^k$
de dos niveles no puede ajustar curvatura). De ahí los diseños específicos de segundo
orden.

## 3. Diseño central compuesto (CCD)

El **diseño central compuesto** (CCD, _central composite design_) es el más popular para
ajustar modelos de segundo orden. Se construye sumando tres grupos de puntos:

1. **Puntos factoriales** ($2^k$ o una fracción): los vértices, en $\pm 1$. Estiman
   términos lineales e interacciones.
2. **Puntos centrales** ($n_C$ réplicas en el origen): estiman error puro y curvatura.
3. **Puntos axiales o estrella** ($2k$ puntos): sobre los ejes, a distancia $\pm\alpha$
   del centro. Permiten estimar los términos **cuadráticos**.

Número de corridas: $2^k + 2k + n_C$.

### El valor de $\alpha$ y la rotabilidad

La distancia axial $\alpha$ determina propiedades del diseño:

- **Rotabilidad:** un CCD es **rotable** si $\alpha = (2^k)^{1/4}$ (p. ej., $\alpha=1.414$
  para $k=2$, $\alpha=1.682$ para $k=3$). En un diseño rotable, la **varianza de
  predicción** es la misma en todos los puntos equidistantes del centro: la calidad de la
  predicción no depende de la dirección.
- **CCD de caras centradas (CCF):** $\alpha = 1$. Todos los puntos caben en el cubo
  $[-1,1]^k$; útil cuando no se pueden explorar niveles fuera del rango (no es rotable).

## 4. Diseño de Box-Behnken

El **Box-Behnken** (BBD) es una alternativa al CCD para **tres o más factores** que:

- Usa solo **tres niveles** por factor ($-1, 0, +1$).
- **No tiene puntos en las esquinas** del cubo (combina pares de factores en $\pm1$ con el
  resto en 0). Esto es útil cuando las combinaciones extremas (todos los factores al máximo)
  son **costosas, peligrosas o inviables**.
- Suele requerir **menos corridas** que el CCD para el mismo $k$.

| Diseño | Niveles por factor | Puntos extremos | Cuándo |
|---|---|---|---|
| CCD | 5 ($\pm\alpha,\pm1,0$) | sí (vértices + axiales) | el estándar; rotable |
| CCF | 3 ($\pm1,0$) | sí (vértices) | si no se sale del cubo |
| Box-Behnken | 3 ($\pm1,0$) | **no** | esquinas inviables; $k\ge3$ |

## 5. Localización del óptimo

Ajustado el modelo cuadrático, el **punto estacionario** $\mathbf{x}_s$ (donde el gradiente
se anula) se obtiene resolviendo

$$
\frac{\partial \hat{y}}{\partial \mathbf{x}} = 0
\quad\Longrightarrow\quad
\mathbf{x}_s = -\tfrac{1}{2}\mathbf{B}^{-1}\mathbf{b},
$$

donde $\mathbf{b}$ es el vector de coeficientes lineales y $\mathbf{B}$ la matriz de
coeficientes cuadráticos e interacciones. En la práctica lo calcula el software.

### Análisis canónico: ¿qué tipo de punto es?

El punto estacionario puede ser un **máximo**, un **mínimo** o un **punto de silla**
(_saddle_). Se determina por los **signos de los valores propios** (eigenvalues) de
$\mathbf{B}$:

- Todos **negativos** → **máximo**.
- Todos **positivos** → **mínimo**.
- **Signos mixtos** → **punto de silla** (la respuesta sube en unas direcciones y baja en
  otras; el óptimo está en la frontera de la región).

Las gráficas de **contornos** y de **superficie** complementan el análisis y comunican el
resultado visualmente.

## 6. Optimización de múltiples respuestas

Cuando hay **varias respuestas** que optimizar simultáneamente (p. ej., maximizar
rendimiento y minimizar impurezas), se usa la **función de deseabilidad** (_desirability_):
cada respuesta se transforma a una escala $0$–$1$ ($0$ = inaceptable, $1$ = ideal) y se
combina su **media geométrica** en una deseabilidad global $D$ que se maximiza. Disponible
en software (`desirability` en R, `desirability` en Python/`statsmodels`-adyacentes).

## 7. Validación

Como siempre: **análisis de residuales** (normalidad, homocedasticidad, independencia) y,
sobre todo, **corridas de confirmación** en el óptimo predicho para verificar que la
respuesta real coincide con la predicha antes de adoptar las condiciones.

---

### Para repasar

- ¿Por qué un $2^k$ no puede ajustar un modelo de segundo orden?
- ¿Cuándo preferirías un Box-Behnken sobre un CCD?
- Si los valores propios de $\mathbf{B}$ tienen signos mixtos, ¿qué tipo de punto es?

### Referencias

- Montgomery, D. C. _Design and Analysis of Experiments_, cap. 11.
- Myers, Montgomery & Anderson-Cook, _Response Surface Methodology_, caps. 6–7.
