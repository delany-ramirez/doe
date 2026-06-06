# ANOVA de una vía y verificación de supuestos

> **Objetivos.** Plantear el modelo de un solo factor con efectos fijos, entender la
> descomposición de la variabilidad, construir e interpretar la tabla ANOVA, y verificar
> los supuestos mediante el análisis de residuales.

## 1. El problema

Tenemos **un factor** con $a$ niveles (tratamientos) y queremos saber si la media de la
respuesta difiere entre ellos. En cada nivel $i$ tomamos $n$ réplicas (diseño
**balanceado**; el caso desbalanceado es análogo). El total de observaciones es
$N = a\,n$.

Comparar las $a$ medias con muchas pruebas $t$ por pares infla el error tipo I. El
**análisis de varianza (ANOVA, _analysis of variance_)** resuelve el problema con **una
sola prueba global**.

## 2. El modelo de efectos

### 2.1 Modelo de medias

$$
y_{ij} = \mu_i + \varepsilon_{ij},
\qquad i = 1,\dots,a;\quad j = 1,\dots,n,
$$

donde $\mu_i$ es la media del tratamiento $i$ y $\varepsilon_{ij}$ es el error aleatorio.

### 2.2 Modelo de efectos (equivalente, más usado)

$$
y_{ij} = \mu + \tau_i + \varepsilon_{ij},
$$

donde:

- $\mu$ es la **media global**,
- $\tau_i = \mu_i - \mu$ es el **efecto del tratamiento** $i$,
- $\varepsilon_{ij}$ es el error, con $\varepsilon_{ij}\sim N(0,\sigma^2)$
  **independientes**.

Como los efectos se definen respecto a la media global, satisfacen la restricción

$$
\sum_{i=1}^{a}\tau_i = 0.
$$

Este es un modelo de **efectos fijos**: los $a$ niveles son los únicos de interés (los
elegimos deliberadamente) y las conclusiones se limitan a ellos. (El modelo de efectos
**aleatorios**, donde los niveles son una muestra de una población mayor, se trata más
adelante en el curso.)

### 2.3 Hipótesis

$$
H_0:\ \tau_1 = \tau_2 = \cdots = \tau_a = 0
\quad\Longleftrightarrow\quad
\mu_1 = \mu_2 = \cdots = \mu_a,
$$
$$
H_1:\ \tau_i \neq 0 \ \text{para al menos un } i.
$$

Rechazar $H_0$ dice que **al menos un** tratamiento difiere, pero **no cuál**: para eso
se usan las comparaciones múltiples (documento 04).

## 3. Descomposición de la variabilidad

La idea genial del ANOVA: la **variabilidad total** de los datos se parte en dos
fuentes, una atribuible a los tratamientos y otra al error.

Con la notación de puntos ($\bar{y}_{i\cdot}$ = media del tratamiento $i$;
$\bar{y}_{\cdot\cdot}$ = media global):

$$
\underbrace{\sum_{i}\sum_{j}\left(y_{ij}-\bar{y}_{\cdot\cdot}\right)^2}_{SC_T}
=
\underbrace{n\sum_{i}\left(\bar{y}_{i\cdot}-\bar{y}_{\cdot\cdot}\right)^2}_{SC_{\text{Trat}}}
+
\underbrace{\sum_{i}\sum_{j}\left(y_{ij}-\bar{y}_{i\cdot}\right)^2}_{SC_E}.
$$

- $SC_T$: **suma de cuadrados total** (variabilidad global), con $N-1$ g.l.
- $SC_{\text{Trat}}$: **entre tratamientos** (_between_), con $a-1$ g.l.
- $SC_E$: **del error** o intra tratamientos (_within_), con $N-a$ g.l.

Los grados de libertad también se reparten: $N-1 = (a-1) + (N-a)$.

## 4. La prueba F

Dividiendo cada suma de cuadrados entre sus grados de libertad se obtienen los
**cuadrados medios** (_mean squares_), que son varianzas:

$$
CM_{\text{Trat}} = \frac{SC_{\text{Trat}}}{a-1},
\qquad
CM_E = \frac{SC_E}{N-a}.
$$

El **cuadrado medio del error** $CM_E$ es siempre un estimador insesgado de $\sigma^2$.
El cuadrado medio de tratamientos $CM_{\text{Trat}}$ solo estima $\sigma^2$ **si $H_0$ es
verdadera**; si es falsa, tiende a ser mayor. De ahí el estadístico:

$$
F_0 = \frac{CM_{\text{Trat}}}{CM_E}.
$$

Bajo $H_0$, $F_0 \sim F_{a-1,\,N-a}$. Se rechaza $H_0$ cuando

$$
F_0 > F_{\alpha,\,a-1,\,N-a},
$$

equivalentemente cuando el valor-p es $\le \alpha$. Es una prueba **de una cola**: solo
valores grandes de $F_0$ contradicen $H_0$.

## 5. La tabla ANOVA

| Fuente de variación | Suma de cuadrados | g.l. | Cuadrado medio | $F_0$ |
|---|---|---|---|---|
| Tratamientos | $SC_{\text{Trat}}$ | $a-1$ | $CM_{\text{Trat}}$ | $CM_{\text{Trat}}/CM_E$ |
| Error | $SC_E$ | $N-a$ | $CM_E$ | |
| **Total** | $SC_T$ | $N-1$ | | |

### Medida de efecto

La proporción de variabilidad explicada por el factor es

$$
R^2 = \frac{SC_{\text{Trat}}}{SC_T}.
$$

Complementa al valor-p indicando la **magnitud práctica** del efecto del factor.

## 6. Supuestos del modelo

La validez de la prueba F descansa en tres supuestos sobre los errores
$\varepsilon_{ij}$:

1. **Normalidad:** $\varepsilon_{ij}\sim N(0,\sigma^2)$.
2. **Homogeneidad de varianzas (homocedasticidad):** la varianza $\sigma^2$ es la misma
   en todos los tratamientos.
3. **Independencia:** los errores son independientes entre sí (la **aleatorización** del
   orden de corridas es lo que lo respalda).

El ANOVA es **razonablemente robusto** a desviaciones moderadas de normalidad y de
homocedasticidad, sobre todo en diseños balanceados, pero la **independencia** es
crítica y no negociable.

## 7. Análisis de residuales

Los supuestos se verifican con los **residuales** $e_{ij} = y_{ij} - \bar{y}_{i\cdot}$
(observado menos predicho). Es la herramienta diagnóstica central. Cinco gráficas y
pruebas:

| Qué se revisa | Herramienta gráfica | Qué se busca / prueba formal |
|---|---|---|
| **Normalidad** | Gráfico de probabilidad normal (Q-Q) de los residuales | Puntos alineados; prueba de Shapiro-Wilk |
| **Homocedasticidad** | Residuales vs. valores ajustados $\hat{y}_{ij}$ | Nube sin patrón de "embudo"; pruebas de Levene / Bartlett |
| **Independencia** | Residuales vs. orden de corrida | Sin tendencias ni ciclos; prueba de Durbin-Watson |
| **Linealidad/atípicos** | Residuales vs. cada factor | Sin curvatura; sin puntos lejanos |

Interpretación rápida:

- **Embudo** (varianza crece con la media) $\Rightarrow$ heterocedasticidad; suele
  arreglarse con una **transformación** (raíz, log; ver Box-Cox en el documento 05).
- **Curva** en el Q-Q $\Rightarrow$ no normalidad (asimetría o colas pesadas).
- **Tendencia** frente al orden $\Rightarrow$ falta de independencia (deriva temporal);
  refuerza la importancia de aleatorizar.

> **Regla de oro.** Nunca interpretes la tabla ANOVA sin antes mirar los residuales. Si
> los supuestos fallan, las conclusiones pueden ser engañosas.

### Pruebas formales (complemento, no sustituto)

- Normalidad: **Shapiro-Wilk** ($H_0$: los datos son normales).
- Igualdad de varianzas: **Levene** (robusta a no-normalidad) o **Bartlett** (sensible a
  no-normalidad).

Estas pruebas acompañan a las gráficas; con $n$ grande detectan desviaciones triviales y
con $n$ pequeño tienen poca potencia, así que el juicio gráfico manda.

## 8. ¿Qué hacer si los supuestos fallan?

- **Heterocedasticidad / no normalidad:** transformar la respuesta (raíz cuadrada para
  conteos, logaritmo para respuestas multiplicativas, **Box-Cox** para elegir la
  potencia óptima).
- **No normalidad persistente:** usar una alternativa **no paramétrica**
  (**Kruskal-Wallis**) — ver documento 05.
- **Welch:** si solo falla la igualdad de varianzas, existe una versión del ANOVA que no
  la exige (ANOVA de Welch, `oneway.test()` en R).

## 9. Flujo de trabajo recomendado

1. Plantear modelo e hipótesis.
2. Ajustar el ANOVA y obtener la tabla.
3. **Analizar residuales** (gráficas + pruebas formales).
4. Si los supuestos se cumplen, interpretar $F_0$ y el valor-p.
5. Si $H_0$ se rechaza, aplicar **comparaciones múltiples** (documento 04).
6. Reportar $R^2$, medias con IC y conclusiones prácticas.

---

### Para repasar

- ¿Por qué $CM_E$ estima $\sigma^2$ aunque $H_0$ sea falsa, pero $CM_{\text{Trat}}$ no?
- Si rechazas $H_0$, ¿puedes decir cuál tratamiento es mejor? ¿Qué te falta?
- Dibuja cómo se vería un gráfico de residuales vs. ajustados con heterocedasticidad.

### Referencias

- Montgomery, D. C. _Design and Analysis of Experiments_, cap. 3.
- Gutiérrez Pulido & de la Vara Salazar, _Análisis y diseño de experimentos_, cap. 3.
