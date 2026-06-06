# Repaso de inferencia aplicada

> **Objetivos.** Refrescar el andamiaje estadístico que sostiene el DOE: prueba de
> hipótesis, errores tipo I y II, potencia, intervalos de confianza y cálculo del
> tamaño de muestra. Este lenguaje se usa en todos los análisis posteriores.

## 1. Población, muestra y parámetros

Trabajamos con una **población** descrita por parámetros desconocidos —típicamente la
media $\mu$ y la varianza $\sigma^2$— y la **muestra** de la que obtenemos
**estimadores**: la media muestral $\bar{y}$ y la varianza muestral $s^2$.

$$
\bar{y} = \frac{1}{n}\sum_{i=1}^{n} y_i,
\qquad
s^2 = \frac{1}{n-1}\sum_{i=1}^{n}\left(y_i - \bar{y}\right)^2 .
$$

El divisor $n-1$ (grados de libertad) hace que $s^2$ sea un estimador **insesgado** de
$\sigma^2$. La raíz $s$ es la desviación estándar muestral.

## 2. Distribución muestral y error estándar

Si $y \sim N(\mu, \sigma^2)$, entonces la media de $n$ observaciones se distribuye

$$
\bar{y} \sim N\!\left(\mu,\ \frac{\sigma^2}{n}\right).
$$

La cantidad $\sigma/\sqrt{n}$ es el **error estándar de la media**: cuantifica la
precisión y mejora con más datos. El **Teorema del Límite Central** garantiza que, aun
si $y$ no es normal, $\bar{y}$ tiende a la normalidad al crecer $n$, lo que da robustez a
los métodos que veremos.

## 3. Prueba de hipótesis

Una **prueba de hipótesis** enfrenta dos afirmaciones complementarias:

- **Hipótesis nula** $H_0$: la afirmación "por defecto" o de "no efecto"
  (p. ej., $\mu_1 = \mu_2$).
- **Hipótesis alternativa** $H_1$: lo que queremos demostrar
  (p. ej., $\mu_1 \neq \mu_2$).

El procedimiento: se calcula un **estadístico de prueba** a partir de los datos y se
evalúa qué tan compatible es con $H_0$.

### 3.1 Los dos tipos de error

| Decisión \ Realidad | $H_0$ verdadera | $H_0$ falsa |
|---|---|---|
| **No rechazar $H_0$** | Correcto $(1-\alpha)$ | **Error tipo II** $(\beta)$ |
| **Rechazar $H_0$** | **Error tipo I** $(\alpha)$ | Correcto: **potencia** $(1-\beta)$ |

- **Error tipo I** ($\alpha$): rechazar $H_0$ siendo verdadera ("falsa alarma"). Es el
  **nivel de significancia**, fijado por el experimentador (habitualmente $0.05$).
- **Error tipo II** ($\beta$): no rechazar $H_0$ siendo falsa ("no detectar lo que sí
  ocurre").
- **Potencia** ($1-\beta$): probabilidad de detectar un efecto que realmente existe. Es
  la métrica que queremos **maximizar** al diseñar.

> Fijamos $\alpha$ directamente; $\beta$ se controla **indirectamente** mediante el
> tamaño de muestra, la magnitud del efecto y la variabilidad.

### 3.2 El valor-p

El **valor-p** es la probabilidad de observar un estadístico tan o más extremo que el
obtenido, **suponiendo que $H_0$ es verdadera**. Regla de decisión:

$$
\text{valor-}p \le \alpha \;\Rightarrow\; \text{se rechaza } H_0 .
$$

Advertencias importantes:

- El valor-p **no** es la probabilidad de que $H_0$ sea verdadera.
- "No significativo" **no** prueba que $H_0$ sea cierta; puede faltar potencia.
- La **significancia estadística** no equivale a **importancia práctica**. Un efecto
  diminuto puede ser significativo con $n$ enorme. Reporta siempre la magnitud del
  efecto y su intervalo de confianza.

## 4. Intervalos de confianza

Un **intervalo de confianza (IC)** del $100(1-\alpha)\%$ para $\mu$ (con $\sigma$
desconocida) es

$$
\bar{y} \pm t_{\alpha/2,\,n-1}\,\frac{s}{\sqrt{n}},
$$

donde $t_{\alpha/2,\,n-1}$ es el cuantil de la distribución $t$ de Student con $n-1$
grados de libertad. Interpretación frecuentista: si repitiéramos el muestreo muchas
veces, el $95\%$ de los IC construidos así contendrían el verdadero $\mu$. Los IC suelen
ser **más informativos** que un simple "sí/no" de la prueba, porque muestran la magnitud
y la precisión del efecto.

## 5. Comparación de dos medias (preludio del ANOVA)

Para dos tratamientos con varianzas iguales, la prueba **t de dos muestras** usa

$$
t_0 = \frac{\bar{y}_1 - \bar{y}_2}{s_p\sqrt{\dfrac{1}{n_1}+\dfrac{1}{n_2}}},
\qquad
s_p^2 = \frac{(n_1-1)s_1^2 + (n_2-1)s_2^2}{n_1 + n_2 - 2},
$$

donde $s_p^2$ es la **varianza combinada** (_pooled_). Se rechaza $H_0:\mu_1=\mu_2$ si
$|t_0| > t_{\alpha/2,\,n_1+n_2-2}$.

Cuando hay **tres o más** tratamientos, repetir pruebas $t$ por pares **infla el error
tipo I global**. Esa es precisamente la razón de ser del **ANOVA** (documento 03) y de
las **comparaciones múltiples** (documento 04).

## 6. Potencia y tamaño de muestra

Diseñar bien implica elegir $n$ **antes** de experimentar, para tener potencia
suficiente. Los cuatro ingredientes están ligados; fijados tres, queda el cuarto:

1. Nivel de significancia $\alpha$.
2. Tamaño del efecto que se desea detectar, $\delta$ (diferencia de medias relevante).
3. Variabilidad $\sigma$.
4. Tamaño de muestra $n$ (y, por tanto, la potencia $1-\beta$).

Una medida adimensional muy útil es el **tamaño del efecto de Cohen**:

$$
d = \frac{\delta}{\sigma}.
$$

> **Regla práctica.** Más réplicas $\Rightarrow$ menor error estándar $\Rightarrow$ mayor
> potencia. Detectar efectos pequeños o con mucho ruido exige $n$ grande.

### 6.1 En la práctica

El cálculo se hace con software, no a mano:

- **R:** `power.t.test()`, `power.anova.test()`, o el paquete `pwr`
  (`pwr.anova.test()`).
- **Python:** `statsmodels.stats.power` (`TTestIndPower`, `FTestAnovaPower`).

En la Fase 2 (práctica) se incluyen notebooks que calculan la potencia de un ANOVA y la
$n$ necesaria para un efecto dado. Conviene acompañar el diseño con una **curva de
potencia** (potencia vs. $n$) para justificar la elección.

> **Buenas prácticas.** Decidir $\alpha$, el efecto mínimo relevante y $n$ **antes** de
> recoger datos. Cambiar las reglas después de ver los resultados invalida la inferencia.

---

### Para repasar

- ¿Cuál de los dos tipos de error controla directamente el experimentador?
- Explica por qué "no significativo" no es lo mismo que "no hay efecto".
- Si duplicas $n$, ¿qué pasa con el error estándar de la media? ¿Y con la potencia?

### Referencias

- Montgomery, D. C. _Design and Analysis of Experiments_, cap. 2.
- Cohen, J. _Statistical Power Analysis for the Behavioral Sciences_.
