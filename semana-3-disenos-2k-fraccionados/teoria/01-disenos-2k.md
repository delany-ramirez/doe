# Diseños factoriales $2^k$

> **Objetivos.** Comprender los diseños factoriales a dos niveles, calcular efectos con la
> tabla de signos, analizar diseños con réplica única usando el gráfico de probabilidad
> normal de efectos, y manejar la notación estándar.

## 1. ¿Qué es un diseño $2^k$?

Un **diseño $2^k$** es un factorial con $k$ factores, cada uno en **dos niveles**: bajo
($-$) y alto ($+$). El número de combinaciones (corridas de una réplica) es $2^k$:

| $k$ | factores | corridas $2^k$ |
|---|---|---|
| 2 | $A,B$ | 4 |
| 3 | $A,B,C$ | 8 |
| 4 | $A,B,C,D$ | 16 |
| 5 | $A,B,C,D,E$ | 32 |

Son la **piedra angular** de la experimentación industrial, sobre todo en las **etapas
iniciales** (cribado, _screening_), porque con pocas corridas estiman todos los efectos
principales y sus interacciones. Suponen que la respuesta es **aproximadamente lineal** en
el rango estudiado de cada factor (dos niveles solo permiten ajustar una recta por factor).

## 2. Notación

- **Niveles:** $-$ (bajo) y $+$ (alto); también $-1$ y $+1$ codificados.
- **Combinaciones de tratamientos (notación de Yates):** letras minúsculas indican qué
  factores están en nivel **alto**. Ejemplos en un $2^3$:
  - $(1)$ = todos bajos,
  - $a$ = solo $A$ alto,
  - $ab$ = $A$ y $B$ altos,
  - $abc$ = los tres altos.

## 3. Cálculo de efectos: la tabla de signos

Para un $2^3$, la **matriz de diseño** en variables codificadas y las columnas de
interacción (productos de signos) son:

| Corrida | $A$ | $B$ | $C$ | $AB$ | $AC$ | $BC$ | $ABC$ |
|---|---|---|---|---|---|---|---|
| $(1)$ | $-$ | $-$ | $-$ | $+$ | $+$ | $+$ | $-$ |
| $a$ | $+$ | $-$ | $-$ | $-$ | $-$ | $+$ | $+$ |
| $b$ | $-$ | $+$ | $-$ | $-$ | $+$ | $-$ | $+$ |
| $ab$ | $+$ | $+$ | $-$ | $+$ | $-$ | $-$ | $-$ |
| $c$ | $-$ | $-$ | $+$ | $+$ | $-$ | $-$ | $+$ |
| $ac$ | $+$ | $-$ | $+$ | $-$ | $+$ | $-$ | $-$ |
| $bc$ | $-$ | $+$ | $+$ | $-$ | $-$ | $+$ | $-$ |
| $abc$ | $+$ | $+$ | $+$ | $+$ | $+$ | $+$ | $+$ |

Las columnas de interacción se obtienen **multiplicando** las columnas de los factores
($AB$ = signo de $A$ × signo de $B$). El **efecto** de cualquier término es:

$$
\text{Efecto} = \frac{\text{contraste}}{n\,2^{k-1}},
$$

donde el **contraste** es la suma de las respuestas con los signos de la columna, $n$ el
número de réplicas. La matriz es **ortogonal**: cada efecto se estima con independencia de
los demás.

> La columna de signos de un efecto suma cero y es ortogonal a todas las demás; por eso los
> $2^k$ estiman cada efecto con máxima eficiencia.

## 4. El modelo de regresión

Un $2^k$ equivale a un modelo de regresión lineal en variables codificadas $x_i\in\{-1,+1\}$:

$$
y = \beta_0 + \sum_i \beta_i x_i + \sum_{i<j}\beta_{ij}x_i x_j + \cdots + \varepsilon .
$$

Los coeficientes cumplen $\beta = \text{Efecto}/2$ (el efecto es el cambio de $-1$ a $+1$,
es decir 2 unidades de $x$). Esta visión de regresión es la que conecta con la metodología
de superficie de respuesta (Semana 4).

## 5. Análisis: ¿qué efectos importan?

### 5.1 Con réplicas

Si hay réplicas ($n>1$), se dispone de un estimador del error y se hace el **ANOVA**
estándar: cada efecto se prueba con su $F = CM_{\text{efecto}}/CM_E$. La tabla tiene una
fila por efecto principal e interacción.

### 5.2 Réplica única (¡el caso difícil!)

Muchos $2^k$ se corren **sin réplicas** ($n=1$) para ahorrar recursos. Entonces **no hay
grados de libertad para el error**: no se puede hacer el ANOVA clásico. Dos soluciones:

**a) Gráfico de probabilidad normal de los efectos (método de Daniel).** Se grafican los
efectos estimados en papel normal:

- Los efectos **despreciables** (ruido) se distribuyen como $N(0,\sigma^2)$ y caen sobre
  una **recta**.
- Los efectos **importantes** se **alejan** de la recta (colas).

Se identifican visualmente los efectos significativos como los puntos fuera de la línea.

**b) Principio de escasez de efectos (sparsity).** Se asume que las **interacciones de
orden alto** son despreciables y se **agrupan** (pool) para formar un estimador del error,
con el que ya se pueden probar los efectos restantes.

> **Escasez de efectos (_sparsity of effects_).** En la mayoría de sistemas, dominan los
> **efectos principales** y unas pocas **interacciones de dos factores**; las de orden
> superior suelen ser ruido. Es el supuesto que hace viable la réplica única y los diseños
> fraccionados.

## 6. Tamaño de muestra y potencia en diseños $2^k$

Antes de correr un $2^k$ hay que responder: **¿cuántas réplicas necesito ($n$)?** La
respuesta depende de tres parámetros:

| Parámetro | Símbolo | Significado |
|---|---|---|
| Diferencia mínima detectable | $\delta$ | el efecto más pequeño que importa prácticamente |
| Desviación estándar del error | $\sigma$ | estimada de datos previos o piloto |
| Potencia deseada | $1-\beta$ | probabilidad de detectar el efecto si existe |

El cociente $\Delta = \delta/\sigma$ es la **relación señal-ruido**; con él se usa la curva
de potencia estándar de la prueba $F$ o la equivalencia con la prueba $t$.

### Regla práctica para un efecto principal

Para detectar un efecto de tamaño $\delta$ con $\alpha = 0{,}05$ y potencia $\geq 0{,}80$:

$$
n \geq \left(\frac{2 z_{\alpha/2} + z_\beta}{\Delta}\right)^2 ,
$$

donde $z_{0{,}025} \approx 1{,}96$ y $z_{0{,}20} \approx 0{,}84$. Para $\Delta = 2$ (efecto
igual a dos desviaciones estándar) resulta $n \approx 2$.

> **Regla de dedo:** con $n = 2$ réplicas se detectan efectos de $\Delta \geq 2$; con
> $n = 3$, efectos de $\Delta \geq 1{,}5$. Para cribado inicial, $n = 2$ suele ser suficiente.

### En R

```r
# Potencia de un diseño 2^k con n réplicas, para detectar un efecto = delta
# usando la aproximación de dos muestras independientes
power.t.test(n       = 2 * 2^k,   # corridas totales en cada "grupo" del contraste
             delta   = delta,
             sd      = sigma,
             sig.level = 0.05,
             type    = "two.sample")

# O con la librería pwr (más flexible):
library(pwr)
pwr.t.test(d = delta/sigma, sig.level = 0.05, power = 0.80, type = "two.sample")
```

> **Nota:** cuando no hay estimación previa de $\sigma$, se realiza una **corrida piloto**
> (en general, la primera réplica del diseño) y se ajusta $n$ antes de correr la segunda.

## 7. El algoritmo de Yates (nota histórica)

Antes del software, los contrastes se calculaban con el **algoritmo de Yates**, un
procedimiento de sumas y restas sucesivas sobre las respuestas ordenadas en orden estándar.
Hoy se obtiene todo con `lm`/`ols`, pero conviene conocer el orden estándar de Yates porque
estructura las tablas de signos.

## 8. Interpretación práctica

- Reportar los efectos en una **tabla de efectos** y el gráfico de probabilidad normal.
- Construir el modelo reducido solo con los términos significativos.
- Usar **gráficas de interacción** y de efectos principales para comunicar resultados.
- Validar con análisis de residuales (como en semanas anteriores).

---

### Para repasar

- ¿Cuántas corridas tiene una réplica de un $2^5$? ¿Y dos réplicas?
- ¿Por qué no se puede hacer un ANOVA clásico con réplica única?
- Explica con tus palabras el principio de escasez de efectos.

### Referencias

- Montgomery, D. C. _Design and Analysis of Experiments_, caps. 6–7.
- Box, Hunter & Hunter, _Statistics for Experimenters_, caps. 5–7.
