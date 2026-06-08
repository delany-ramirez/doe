# Taller — Semana 3: Diseños 2^k y Factoriales Fraccionados

> **Duración:** 90 min | **Modalidad:** individual o en parejas  
> **Datos:** [`../datos/filtracion-2k.csv`](../datos/filtracion-2k.csv) (Montgomery 6.2)

Un ingeniero de procesos estudia la **tasa de filtración** (gal/h) en función de cuatro
factores a dos niveles codificados ($-1$ / $+1$):

| Factor | Variable | Nivel $-1$ | Nivel $+1$ |
|--------|---------|--------:|--------:|
| A | Temperatura (°C) | 170 | 185 |
| B | Presión (psi) | 60 | 80 |
| C | Concentración de formaldehído (%) | 2 | 3 |
| D | Velocidad de agitación (rpm) | 250 | 325 |

Se corrió un **diseño $2^4$ con réplica única** (16 corridas en orden aleatorizado):

| A | B | C | D | Tasa |
|--:|--:|--:|--:|-----:|
| −1 | −1 | −1 | −1 | 45 |
| +1 | −1 | −1 | −1 | 71 |
| −1 | +1 | −1 | −1 | 48 |
| +1 | +1 | −1 | −1 | 65 |
| −1 | −1 | +1 | −1 | 68 |
| +1 | −1 | +1 | −1 | 60 |
| −1 | +1 | +1 | −1 | 80 |
| +1 | +1 | +1 | −1 | 65 |
| −1 | −1 | −1 | +1 | 43 |
| +1 | −1 | −1 | +1 | 100 |
| −1 | +1 | −1 | +1 | 45 |
| +1 | +1 | −1 | +1 | 104 |
| −1 | −1 | +1 | +1 | 75 |
| +1 | −1 | +1 | +1 | 86 |
| −1 | +1 | +1 | +1 | 70 |
| +1 | +1 | +1 | +1 | 96 |

---

## Problema 1 — Estructura del diseño $2^4$ *(10 min)*

**a)** ¿Cuántas corridas tiene un diseño $2^k$ con $k = 4$ factores? ¿Cuántos efectos
estimables en total (principales + interacciones de todos los órdenes)?

**b)** ¿Por qué se denomina "réplica única"? ¿Qué dificultad introduce para el análisis
respecto a un diseño con 2 o más réplicas completas?

**c)** ¿Cómo se construye la columna de signos para la interacción $AC$? ¿Y para $ACD$?
Escribe los 16 signos de la columna $AC$.

---

## Problema 2 — Estimación de efectos *(20 min)*

El **efecto** de un factor se estima como:
$$\hat{E}_i = \frac{\text{Contraste}_i}{2^{k-1}} = \frac{\sum (+)y - \sum (-)y}{8}$$

**a)** Calcula los efectos principales $A$, $C$ y $D$.

**b)** Calcula los efectos de interacción $AC$ y $AD$.

**c)** Lista los 15 efectos ordenados de mayor a menor magnitud $|\hat{E}|$. ¿Cuáles son
los cinco más grandes?

---

## Problema 3 — Gráfico de probabilidad normal e identificación de efectos activos
*(15 min)*

En la réplica única no existe estimador de error independiente; se usa el gráfico de
probabilidad normal (Daniel, 1959) para distinguir efectos activos de ruido.

**a)** Si los efectos fueran todos nulos (solo ruido), ¿qué distribución seguirían y qué
forma tendría el gráfico normal de efectos?

**b)** Con base en los valores del Problema 2, ¿qué efectos se apartan claramente de la
línea recta central? Identifícalos como **activos**.

**c)** Genera el gráfico en R o Python y confirma visualmente:

```r
library(FrF2)
df <- read.csv("../datos/filtracion-2k.csv")
modelo <- lm(tasa ~ A*B*C*D, data = df)
# Gráfico normal de efectos:
DanielPlot(modelo, half = FALSE, alpha = 0.1)
```

¿Coincide con tu identificación manual?

---

## Problema 4 — Modelo reducido y predicción *(20 min)*

Supón que los efectos activos son: $A$, $C$, $D$, $AC$ y $AD$.

**a)** Escribe el modelo de regresión reducido en variables codificadas:
$$\hat{y} = \hat{\beta}_0 + \hat{\beta}_A x_A + \hat{\beta}_C x_C + \hat{\beta}_D x_D
+ \hat{\beta}_{AC} x_A x_C + \hat{\beta}_{AD} x_A x_D$$
donde $\hat{\beta}_i = \hat{E}_i / 2$. Calcula $\hat{\beta}_0$ (gran media).

**b)** ¿Qué combinación de niveles $(x_A, x_C, x_D)$ maximiza la tasa de filtración?
Calcula el valor predicho para esa combinación.

**c)** Construye la tabla ANOVA con los cinco términos activos y los 10 efectos no
activos agrupados como error. ¿Son todos los términos activos significativos con
$\alpha = 0.05$?

---

## Problema 5 — Diseño fraccionado $2^{4-1}$ *(25 min)*

Un nuevo experimento dispone de solo **8 corridas**. Se decide usar una **media fracción**
$2^{4-1}$.

**a)** Elige el **generador** $I = ABCD$. Construye la matriz de diseño de 8 corridas
(fracción principal: donde $ABCD = +1$). ¿Qué 8 corridas de la tabla original
corresponden a esta fracción?

**b)** Escribe la **estructura de alias** completa. ¿Con qué interacción está confundido
cada efecto principal?

**c)** ¿Cuál es la **resolución** de este diseño? Explica qué implicación tiene para
estimar efectos principales y de dos factores.

**d)** Dada la evidencia del Problema 3 de que $AC$ y $AD$ son activas, ¿podría el
diseño $2^{4-1}_{IV}$ con $I = ABCD$ estimar $AC$ **sin confusión** con otra
interacción de dos factores? ¿Qué opciones tendrías si necesitaras estimar $AC$ y $AD$
de forma limpia?

---

> Solución en [`taller-semana-3-sol.md`](taller-semana-3-sol.md). Intenta resolverlo antes
> de consultarla.
