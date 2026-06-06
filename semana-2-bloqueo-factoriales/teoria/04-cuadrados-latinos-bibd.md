# 🔵 Cuadrados latinos, BIBD y efectos aleatorios

> **Opcional.** Profundización sobre estructuras de bloqueo más ricas: el cuadrado latino
> (doble bloqueo), los bloques incompletos balanceados (BIBD) y una introducción a los
> modelos de efectos aleatorios y mixtos.

## 1. Cuadrado latino: bloqueo en dos direcciones

El DBCA controla **una** fuente de variabilidad. A veces hay **dos** fuentes de ruido
cruzadas y conocidas (p. ej., en una prueba de neumáticos: la **posición** en el coche y
el **coche**). El **cuadrado latino** (_Latin square_) las bloquea ambas a la vez.

### 1.1 Estructura

Para $p$ tratamientos se usa una cuadrícula $p\times p$ donde:

- Las **filas** son un factor de bloqueo.
- Las **columnas** son otro factor de bloqueo.
- Cada **tratamiento** (letra latina A, B, C…) aparece **exactamente una vez** en cada
  fila y en cada columna.

Ejemplo $4\times4$:

```
        Col1 Col2 Col3 Col4
Fila1    A    B    C    D
Fila2    B    C    D    A
Fila3    C    D    A    B
Fila4    D    A    B    C
```

Requiere $N=p^2$ corridas (frente a $p^2\cdot$réplicas de un factorial), por lo que es muy
**económico**, a costa de suponer que **no hay interacciones** entre tratamientos y
bloques.

### 1.2 Modelo y ANOVA

$$
y_{ijk} = \mu + \alpha_i + \tau_j + \beta_k + \varepsilon_{ijk},
$$

con $\alpha_i$ (filas), $\beta_k$ (columnas) y $\tau_j$ (tratamientos). La tabla ANOVA
separa cuatro fuentes:

| Fuente | g.l. |
|---|---|
| Filas | $p-1$ |
| Columnas | $p-1$ |
| Tratamientos | $p-1$ |
| Error | $(p-1)(p-2)$ |
| **Total** | $p^2-1$ |

La prueba de interés es $F = CM_{\text{Trat}}/CM_E$. La limitación es que los grados de
libertad del error son **pocos** cuando $p$ es pequeño (con $p=3$ solo quedan 2),
restando potencia; suelen replicarse varios cuadrados latinos.

> **Cuadrado grecolatino:** extensión que bloquea **tres** direcciones superponiendo dos
> cuadrados latinos ortogonales (letras latinas + griegas).

## 2. Bloques incompletos balanceados (BIBD)

En un DBCA el bloque debe contener **todos** los tratamientos. Pero a veces el bloque es
**pequeño** y no caben todos (una corrida de horno con capacidad limitada, un panel de
cata que solo prueba unas pocas muestras). Entonces se usan **bloques incompletos**.

Un **diseño en bloques incompletos balanceado** (BIBD, _balanced incomplete block
design_) elige qué tratamientos van en cada bloque de modo que:

- Cada bloque contiene $k < a$ tratamientos.
- Cada par de tratamientos aparece junto en el **mismo número** $\lambda$ de bloques.

Ese balance garantiza que **todas** las parejas de tratamientos se comparan con la misma
precisión, pese a la incompletitud. El análisis usa medias **ajustadas** por el efecto de
bloque (los efectos de tratamiento y bloque no son ortogonales).

Parámetros ($a$ tratamientos, $b$ bloques de tamaño $k$, cada tratamiento en $r$ bloques):

$$
\lambda = \frac{r(k-1)}{a-1}, \qquad a r = b k .
$$

## 3. Efectos aleatorios y mixtos

Hasta ahora los factores fueron **fijos**: sus niveles son los únicos de interés y las
conclusiones se limitan a ellos.

### 3.1 Factor de efectos aleatorios

Cuando los niveles del factor son una **muestra aleatoria** de una población mayor de
niveles posibles (p. ej., 5 lotes elegidos al azar de cientos, 4 operarios de una
plantilla grande), el factor es **aleatorio**. El interés no está en esos niveles
concretos sino en la **variabilidad** que aporta esa fuente.

Modelo (un factor aleatorio):

$$
y_{ij} = \mu + \tau_i + \varepsilon_{ij},
\qquad \tau_i \sim N(0,\sigma_\tau^2),\quad \varepsilon_{ij}\sim N(0,\sigma^2).
$$

Lo que se estima son las **componentes de varianza** $\sigma_\tau^2$ y $\sigma^2$, y la
hipótesis es $H_0:\sigma_\tau^2=0$. La aritmética de la tabla ANOVA es la misma, pero la
**interpretación** y, en modelos con varios factores, los **denominadores** de las pruebas
$F$ cambian (se elige el cuadrado medio cuyo valor esperado coincide con el del numerador
bajo $H_0$).

### 3.2 Modelo mixto

Un **modelo mixto** combina factores fijos y aleatorios (frecuente cuando hay bloqueo
aleatorio). Se ajusta con herramientas específicas:

- **R:** `lme4::lmer`, `nlme::lme`.
- **Python:** `statsmodels.regression.mixed_linear_model.MixedLM`.

> **Por qué importa la distinción.** Confundir un factor aleatorio con uno fijo lleva a
> usar el denominador equivocado en la prueba $F$ y a conclusiones incorrectas sobre la
> significancia.

---

### Para repasar

- ¿Qué dos fuentes de variabilidad controla un cuadrado latino y a qué supuesto obliga?
- ¿Cuándo recurrirías a un BIBD en lugar de un DBCA?
- Da un ejemplo de tu área de un factor que tratarías como **aleatorio**.

### Referencias

- Montgomery, D. C. _Design and Analysis of Experiments_, caps. 4 y 13.
- Box, Hunter & Hunter, _Statistics for Experimenters_, cap. 4.
