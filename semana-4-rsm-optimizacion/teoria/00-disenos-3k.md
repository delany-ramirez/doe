# Diseños factoriales $3^k$

> **Objetivos.** Entender cuándo y por qué usar tres niveles en lugar de dos, descomponer
> los efectos en componentes **lineal** y **cuadrático**, construir la matriz de diseño para
> un $3^2$ y un $3^3$, ajustar el modelo de regresión correspondiente, y conocer los
> principios básicos de confusión en diseños $3^k$.

## 1. ¿Qué es un diseño $3^k$ y por qué usarlo?

Un **diseño $3^k$** es un factorial con $k$ factores, cada uno en **tres niveles**:
bajo, medio y alto (codificados $0$, $1$, $2$ en notación de Yates, o $-1$, $0$, $+1$
en escala centrada). El número de corridas de una sola réplica es $3^k$:

| $k$ | factores | corridas $3^k$ |
|-----|----------|----------------|
| 2 | $A,B$ | 9 |
| 3 | $A,B,C$ | 27 |
| 4 | $A,B,C,D$ | 81 |

### Ventaja principal frente a los $2^k$

Los diseños $2^k$ solo permiten ajustar una **recta** por factor (dos puntos definen
una línea). Si la respuesta tiene **curvatura**, la relación lineal no será suficiente.
El $3^k$ agrega un nivel intermedio que permite:

1. **Detectar** curvatura (efecto cuadrático).
2. **Estimar** coeficientes cuadráticos del tipo $\beta_{ii} x_i^2$.
3. Servir de base para diseños de superficie de respuesta (Semana 4).

> **Principio.** Usa un $3^k$ cuando sospechas que la respuesta presenta curvatura en
> algún factor, o cuando la etapa de cribado ($2^k$) ya identificó los factores activos
> y quieres **caracterizar** la superficie de respuesta.

### Desventaja

El número de corridas crece **más rápido**: un $3^4 = 81$ corridas frente a $2^4 = 16$.
Por eso los $3^k$ se reservan para pocos factores ($k \le 3$ o $4$) en la etapa de
caracterización, no de cribado.

---

## 2. Notación

- **Niveles:** $0$ (bajo), $1$ (medio), $2$ (alto) en notación de Yates; o
  $-1$, $0$, $+1$ en escala centrada (recomendada para regresión).
- **Combinaciones de tratamientos:** se escriben con los dígitos de cada factor.
  Ejemplo en un $3^2$: la combinación $01$ significa $A$ en nivel $0$ y $B$ en nivel $1$.
- **Grados de libertad por factor:** cada factor con 3 niveles aporta $3-1=2\,\text{gl}$,
  descompuestos en la **componente lineal** ($L$) y la **componente cuadrática** ($Q$).

---

## 3. El diseño $3^2$: diseño base

Con dos factores ($A$ y $B$), cada uno en tres niveles, se tienen $3^2 = 9$ corridas:

| Corrida | $A$ | $B$ | $AB$ (interacción) |
|:-------:|:---:|:---:|:------------------:|
| 1 | 0 | 0 | — |
| 2 | 0 | 1 | — |
| 3 | 0 | 2 | — |
| 4 | 1 | 0 | — |
| 5 | 1 | 1 | — |
| 6 | 1 | 2 | — |
| 7 | 2 | 0 | — |
| 8 | 2 | 1 | — |
| 9 | 2 | 2 | — |

La interacción $AB$ tiene $(3-1)^2 = 4\,\text{gl}$, descompuestos en cuatro componentes:
$A_L B_L$, $A_L B_Q$, $A_Q B_L$, $A_Q B_Q$ (subíndice $L$ = lineal, $Q$ = cuadrático).

### Tabla de grados de libertad para un $3^2$

| Fuente | gl |
|--------|:--:|
| $A$ (lineal + cuadrático) | 2 |
| $B$ (lineal + cuadrático) | 2 |
| $AB$ (4 componentes) | 4 |
| Error (con réplicas) | — |
| **Total** | **8** |

---

## 4. Descomposición ortogonal: contrastes lineales y cuadráticos

Cada factor de 3 niveles se descompone en **dos contrastes ortogonales**. Para un factor
con niveles $y_0,\, y_1,\, y_2$ (respuestas promedio en cada nivel):

$$
C_L = y_2 - y_0 \qquad \text{(contraste lineal, coeficientes } -1,\, 0,\, +1\text{)},
$$

$$
C_Q = y_0 - 2y_1 + y_2 \qquad \text{(contraste cuadrático, coeficientes } +1,\,-2,\,+1\text{)}.
$$

Los efectos (o coeficientes de contraste) son:

$$
\hat{L} = \frac{C_L}{\sqrt{2 n}} , \qquad
\hat{Q} = \frac{C_Q}{\sqrt{6 n}} ,
$$

donde $n$ es el número de réplicas por celda. La suma de cuadrados de cada componente se
calcula con la fórmula estándar de contraste:

$$
SC_L = \frac{C_L^2}{n \cdot \sum c_i^2} = \frac{C_L^2}{2n} ,
\qquad
SC_Q = \frac{C_Q^2}{n \cdot \sum c_i^2} = \frac{C_Q^2}{6n} .
$$

> **Verificación de ortogonalidad.** Los dos vectores de coeficientes
> $(-1,\,0,\,+1)$ y $(+1,\,-2,\,+1)$ son ortogonales: su producto interno es cero.
> Esto garantiza estimaciones independientes de $\hat{L}$ y $\hat{Q}$.

### 4.1 Matriz de contrastes para el $3^2$

Al igual que en los $2^k$ se usa la **tabla de signos**, en los $3^k$ el instrumento
equivalente es la **matriz de contrastes ortogonales**. Los coeficientes de las columnas
de interacción se obtienen **multiplicando** las columnas de los factores correspondientes.

| Corrida | $A$ | $B$ | $A_L$ | $A_Q$ | $B_L$ | $B_Q$ | $A_L B_L$ | $A_L B_Q$ | $A_Q B_L$ | $A_Q B_Q$ |
|:-------:|:---:|:---:|:------:|:------:|:------:|:------:|:---------:|:---------:|:---------:|:---------:|
| 00 | 0 | 0 | $-1$ | $+1$ | $-1$ | $+1$ | $+1$ | $-1$ | $-1$ | $+1$ |
| 01 | 0 | 1 | $-1$ | $+1$ | $\phantom{+}0$ | $-2$ | $\phantom{+}0$ | $+2$ | $\phantom{+}0$ | $-2$ |
| 02 | 0 | 2 | $-1$ | $+1$ | $+1$ | $+1$ | $-1$ | $-1$ | $+1$ | $+1$ |
| 10 | 1 | 0 | $\phantom{+}0$ | $-2$ | $-1$ | $+1$ | $\phantom{+}0$ | $\phantom{+}0$ | $+2$ | $-2$ |
| 11 | 1 | 1 | $\phantom{+}0$ | $-2$ | $\phantom{+}0$ | $-2$ | $\phantom{+}0$ | $\phantom{+}0$ | $\phantom{+}0$ | $+4$ |
| 12 | 1 | 2 | $\phantom{+}0$ | $-2$ | $+1$ | $+1$ | $\phantom{+}0$ | $\phantom{+}0$ | $-2$ | $-2$ |
| 20 | 2 | 0 | $+1$ | $+1$ | $-1$ | $+1$ | $-1$ | $+1$ | $-1$ | $+1$ |
| 21 | 2 | 1 | $+1$ | $+1$ | $\phantom{+}0$ | $-2$ | $\phantom{+}0$ | $-2$ | $\phantom{+}0$ | $-2$ |
| 22 | 2 | 2 | $+1$ | $+1$ | $+1$ | $+1$ | $+1$ | $+1$ | $+1$ | $+1$ |
| $\sum c_i^2$ | | | 6 | 18 | 6 | 18 | 4 | 12 | 12 | 36 |

Las columnas de interacción se calculan como producto elemento a elemento de sus
factores: $A_L B_L = (A_L)\times(B_L)$, $A_Q B_Q = (A_Q)\times(B_Q)$, etc.

La suma de cuadrados de cualquier efecto es:

$$
SC_{\text{efecto}} = \frac{\bigl(\sum_i c_i\, y_i\bigr)^2}{n \cdot \sum_i c_i^2} ,
$$

donde $c_i$ son los coeficientes de la columna correspondiente, $y_i$ la respuesta de la
corrida $i$, y $n$ el número de réplicas por celda.

> **Diferencia clave con los $2^k$.** En la tabla de signos de un $2^k$ todos los
> coeficientes son $\pm 1$. En los $3^k$ aparecen $0$, $\pm 1$, $\pm 2$ y hasta $\pm 4$
> (en la columna $A_Q B_Q$), y el divisor $\sum c_i^2$ varía según el efecto. Por eso
> cada suma de cuadrados tiene su propio denominador, a diferencia de los $2^k$ donde
> todos los efectos comparten el mismo divisor $n\,2^{k-1}$.

---

## 5. Modelo de regresión para un $3^k$

Con los factores codificados en escala centrada ($x_i \in \{-1, 0, +1\}$), el modelo
para un $3^2$ es:

$$
y = \beta_0
  + \beta_1 x_1 + \beta_2 x_2
  + \beta_{11} x_1^2 + \beta_{22} x_2^2
  + \beta_{12} x_1 x_2
  + \beta_{112} x_1^2 x_2 + \beta_{122} x_1 x_2^2
  + \beta_{1122} x_1^2 x_2^2
  + \varepsilon .
$$

La tabla de ANOVA agrupa estos términos según la fuente:

| Fuente | Términos del modelo |
|--------|---------------------|
| $A_L$ | $\beta_1 x_1$ |
| $A_Q$ | $\beta_{11} x_1^2$ |
| $B_L$ | $\beta_2 x_2$ |
| $B_Q$ | $\beta_{22} x_2^2$ |
| $A_L B_L$ | $\beta_{12} x_1 x_2$ |
| $A_L B_Q$ | $\beta_{122} x_1 x_2^2$ |
| $A_Q B_L$ | $\beta_{112} x_1^2 x_2$ |
| $A_Q B_Q$ | $\beta_{1122} x_1^2 x_2^2$ |

> **Nota.** En la práctica, si la interacción cuadrática ($A_Q B_Q$) y los términos cruzados
> de orden alto son despreciables (principio de escasez), se trabaja con el modelo reducido
> que solo incluye los efectos principales lineales y cuadráticos, más la interacción
> bilineal $A_L B_L$.

---

## 6. El diseño $3^3$

Con tres factores y tres niveles cada uno se tienen $3^3 = 27$ corridas.

### Tabla de grados de libertad para un $3^3$

| Fuente | gl |
|--------|:--:|
| $A$ | 2 |
| $B$ | 2 |
| $C$ | 2 |
| $AB$ | 4 |
| $AC$ | 4 |
| $BC$ | 4 |
| $ABC$ | 8 |
| **Total** | **26** |

Los 26 grados de libertad se reparten entre efectos principales ($3 \times 2 = 6$),
interacciones de dos factores ($3 \times 4 = 12$) e interacción triple ($8$).
Cuando no hay réplicas, la interacción triple (8 gl) suele usarse como estimador del error.

---

## 7. Confusión y bloques en diseños $3^k$

El bloqueo en diseños $3^k$ se basa en **aritmética modular** (módulo 3). La idea es
asignar las combinaciones de tratamiento a bloques de forma que ciertas interacciones de
alto orden **queden confundidas** con los bloques.

### 7.1 Bloques de tamaño $3^{k-1}$: media confusión

Para confundir una interacción en un $3^k$, se define un **componente de confusión**
mediante una relación lineal módulo 3. Por ejemplo, en un $3^2$ con 3 bloques de 3 corridas,
se confunde la componente $AB^2$ (la más alta que suele considerarse despreciable):

$$
L = x_1 + 2x_2 \pmod{3} .
$$

Las nueve combinaciones $(x_1, x_2)$ se asignan al bloque $b = L \bmod 3$:

| $x_1$ | $x_2$ | $L = x_1 + 2x_2 \bmod 3$ | Bloque |
|:-----:|:-----:|:-------------------------:|:------:|
| 0 | 0 | 0 | B0 |
| 0 | 1 | 2 | B2 |
| 0 | 2 | 1 | B1 |
| 1 | 0 | 1 | B1 |
| 1 | 1 | 0 | B0 |
| 1 | 2 | 2 | B2 |
| 2 | 0 | 2 | B2 |
| 2 | 1 | 1 | B1 |
| 2 | 2 | 0 | B0 |

Cada bloque tiene exactamente 3 corridas y $A$, $B$ quedan estimables sin sesgo.

### 7.2 Componentes de confusión

En general, cualquier contraste de la forma:

$$
L = \alpha_1 x_1 + \alpha_2 x_2 + \cdots + \alpha_k x_k \pmod{3}, \quad \alpha_i \in \{0,1,2\},
$$

define una partición del diseño en 3 bloques. Se elige el componente de mayor orden
(más letras con $\alpha_i \ne 0$) para minimizar la pérdida de información.

> **Diferencia clave con los $2^k$.** En los $2^k$, cada interacción tiene **un**
> componente; en los $3^k$, cada interacción de $m$ factores tiene $2^m - 1$ componentes
> (uno por cada contraste no trivial módulo 3 que la involucre). Esto hace que la teoría
> de confusión en $3^k$ sea más rica pero también más compleja.

---

## 8. Diseños $3^{k-p}$ fraccionados

Al igual que los $2^{k-p}$, existen fracciones del $3^k$ que permiten estudiar más
factores con menos corridas. Las fracciones se construyen con generadores módulo 3:

$$
x_k = \alpha_1 x_1 + \cdots + \alpha_{k-1} x_{k-1} \pmod{3} .
$$

Por ejemplo, una **tercera fracción** de un $3^3$ usa $3^{3-1} = 9$ corridas definidas
por el generador $C = A + B \pmod{3}$.

En la práctica, los $3^{k-p}$ fraccionados son mucho menos utilizados que los $2^{k-p}$,
porque la alternativa habitual para pocos factores es un **diseño de Box-Behnken** o un
**diseño central compuesto** (ambos tratados en Semana 4), que son más eficientes para
ajustar superficies de respuesta cuadráticas.

---

## 9. Comparación $2^k$ vs. $3^k$

| Criterio | $2^k$ | $3^k$ |
|----------|:-----:|:-----:|
| Niveles por factor | 2 | 3 |
| Corridas (sin réplica) | $2^k$ | $3^k$ |
| Detecta curvatura | No | Sí |
| Uso típico | Cribado | Caracterización |
| Fraccionado estándar | $2^{k-p}$ (común) | $3^{k-p}$ (raro; prefer. CCD/BBD) |
| Análisis central | Efectos con tabla de signos | ANOVA + contrastes $L$/$Q$ |

> **Regla práctica.** En la etapa de cribado (muchos factores, presupuesto limitado),
> usa $2^k$ o $2^{k-p}$. Una vez identificados los factores activos, si sospechas curvatura,
> avanza a un $3^k$ o a un diseño central compuesto.

---

## 10. Ejemplos numéricos

### 10.1 Cálculo de contrastes en un $3^2$ — Rendimiento de reacción

**Contexto.** Se estudia el rendimiento (%) de una reacción química en función de la
temperatura ($A$: 60, 75, 90 °C) y la concentración del catalizador ($B$: 10, 15, 20 g/L).

**Datos observados** (un diseño $3^2$ sin réplica):

| Corrida | $A$ (cod.) | $B$ (cod.) | Rendimiento $y$ |
|:-------:|:----------:|:----------:|:---------------:|
| 00 | $-1$ | $-1$ | 52.3 |
| 01 | $-1$ | $\phantom{+}0$ | 61.8 |
| 02 | $-1$ | $+1$ | 58.4 |
| 10 | $\phantom{+}0$ | $-1$ | 63.5 |
| 11 | $\phantom{+}0$ | $\phantom{+}0$ | 74.2 |
| 12 | $\phantom{+}0$ | $+1$ | 70.6 |
| 20 | $+1$ | $-1$ | 68.9 |
| 21 | $+1$ | $\phantom{+}0$ | 82.1 |
| 22 | $+1$ | $+1$ | 77.4 |

**Medias marginales por nivel del factor $A$:**

$$
\bar{y}_{A=-1} = \frac{52.3+61.8+58.4}{3} = 57.50 \qquad
\bar{y}_{A=0} = \frac{63.5+74.2+70.6}{3} = 69.43 \qquad
\bar{y}_{A=+1} = \frac{68.9+82.1+77.4}{3} = 76.13
$$

**Contrastes para el factor $A$** (usando medias marginales, $n=3$ réplicas "implícitas" = promedio sobre B):

$$
C_L^A = \bar{y}_{A=+1} - \bar{y}_{A=-1} = 76.13 - 57.50 = 18.63
$$

$$
C_Q^A = \bar{y}_{A=-1} - 2\bar{y}_{A=0} + \bar{y}_{A=+1} = 57.50 - 2(69.43) + 76.13 = -5.23
$$

**Sumas de cuadrados** (con $n_{\text{nivel}}=3$ observaciones por nivel y divisores $\sum c_i^2=2$ y $6$):

$$
SC_{A_L} = \frac{(C_L^A)^2}{n_{\text{nivel}}\cdot 2} = \frac{(18.63)^2}{3 \times 2} = \frac{347.08}{6} = 57.85
$$

$$
SC_{A_Q} = \frac{(C_Q^A)^2}{n_{\text{nivel}}\cdot 6} = \frac{(-5.23)^2}{3 \times 6} = \frac{27.35}{18} = 1.52
$$

**Interpretación:** $SC_{A_L} \gg SC_{A_Q}$, lo que indica que el efecto de la temperatura
es predominantemente **lineal** sobre el rendimiento, con curvatura pequeña pero detectable.

**Medias marginales para $B$:**

$$
\bar{y}_{B=-1} = 61.57 \qquad \bar{y}_{B=0} = 72.70 \qquad \bar{y}_{B=+1} = 68.80
$$

$$
C_L^B = 68.80 - 61.57 = 7.23 \qquad C_Q^B = 61.57 - 2(72.70) + 68.80 = -15.03
$$

$$
SC_{B_L} = \frac{(7.23)^2}{6} = 8.72 \qquad SC_{B_Q} = \frac{(-15.03)^2}{18} = 12.55
$$

**Interpretación:** Para la concentración ($B$), el componente cuadrático ($SC_{B_Q}=12.55$) es
mayor que el lineal ($SC_{B_L}=8.72$), lo que revela una **curvatura real**: el rendimiento
alcanza un máximo cerca del nivel central ($B=0$, es decir 15 g/L) y decrece en los extremos.

> **Verificación de ortogonalidad.** Los vectores de coeficientes $(-1,0,+1)$ y $(+1,-2,+1)$
> satisfacen $(-1)(+1)+(0)(-2)+(+1)(+1) = -1+0+1 = 0$. ✓

---

### 10.2 El $3^2$ como puente al RSM

El ejemplo anterior ilustra el **flujo de análisis** que conecta los tres tipos de diseño:

```
Screening (2^k / 2^{k-p})
   ↓  Identificar factores activos
Caracterización (3^k)
   ↓  Detectar curvatura, estimar L y Q
Optimización (CCD / Box-Behnken)
   ↓  Ajustar modelo completo de 2° orden, localizar óptimo
```

**¿Cuándo pasar del $3^k$ al RSM?** Usa la siguiente regla de decisión:

| Resultado del $3^k$ | Siguiente paso |
|---------------------|----------------|
| Solo componentes $L$ significativos (sin curvatura) | Ascenso por máxima pendiente (Semana 4, § RSM 1er orden) |
| Algún componente $Q$ significativo | Añadir puntos axiales y centros → CCD; ajustar modelo de 2° orden completo |
| Interacción $A_L B_L$ significativa además de $Q$ | CCD con ambos factores; vigilar la forma del punto estacionario |

**Modelo cuadrático ajustado** sobre los datos del ejemplo anterior con `lm()` en R:

```r
diseno <- data.frame(
  x1 = c(-1,-1,-1, 0,0,0, 1,1,1),
  x2 = c(-1, 0, 1,-1,0,1,-1,0,1),
  y  = c(52.3,61.8,58.4, 63.5,74.2,70.6, 68.9,82.1,77.4)
)
modelo <- lm(y ~ x1 + x2 + I(x1^2) + I(x2^2) + x1:x2, data = diseno)
```

Los coeficientes estimados confirmarán $\hat\beta_{22} < 0$ (curvatura negativa en $B$),
señalando que existe un máximo en la dirección de $B$ y que un CCD permitirá localizarlo
con precisión.

---

## 11. Ajuste en R

```r
# Diseño 3^2 con n=1 réplica
library(dplyr)

# Construir la matriz de diseño en escala centrada
diseno <- expand.grid(A = c(-1, 0, 1), B = c(-1, 0, 1))
diseno$y <- c(...)  # respuestas observadas

# Ajustar modelo cuadrático completo
modelo <- lm(y ~ A + B + I(A^2) + I(B^2) + A:B + I(A^2):B + A:I(B^2) + I(A^2):I(B^2),
             data = diseno)
anova(modelo)
summary(modelo)

# Modelo reducido (solo L, Q y la interacción bilineal)
modelo_reducido <- lm(y ~ A + B + I(A^2) + I(B^2) + A:B, data = diseno)
anova(modelo_reducido)
```

```r
# Visualizar la superficie de respuesta
library(rsm)
diseno_rsm <- as.coded.data(diseno, A ~ A, B ~ B)
modelo_rsm  <- rsm(y ~ SO(A, B), data = diseno_rsm)  # second-order model
persp(modelo_rsm, ~ A + B, col = terrain.colors(50), contour = TRUE)
```

> **Nota:** `rsm::SO()` ajusta el modelo de segundo orden $(\beta_i, \beta_{ii},
> \beta_{ij})$ directamente. Es la misma función que se usará en Semana 4 para los
> diseños de superficie de respuesta.

---

### Para repasar

- ¿Cuántas corridas tiene un $3^3$ sin réplica? ¿Y un $3^4$?
- ¿Cuántos grados de libertad tiene la componente cuadrática de un factor con 3 niveles?
- ¿Por qué los $3^k$ fraccionados son poco usados en la práctica industrial?
- En un $3^2$ con los datos $y_{00}=18,\, y_{10}=20,\, y_{20}=25$, calcula $C_L$ y $C_Q$
  para el factor $A$ (ignorando $B$). ¿Hay curvatura?

### Referencias

- Montgomery, D. C. _Design and Analysis of Experiments_, cap. 9.
- Box, Hunter & Hunter, _Statistics for Experimenters_, cap. 7.
- Lenth, R. V. `rsm`: Response-Surface Methods in R. _Journal of Statistical Software_, 2009.
