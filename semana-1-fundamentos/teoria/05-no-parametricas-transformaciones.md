# 🔵 Pruebas no paramétricas y transformaciones

> **Opcional.** Profundización para cuando los supuestos del ANOVA (documento 03) no se
> cumplen. Dos caminos: **transformar** la respuesta para recuperar los supuestos, o usar
> una prueba **no paramétrica** que exija menos.

## 1. Cuándo se necesitan

El análisis de residuales puede revelar:

- **No normalidad** marcada (Q-Q curvado, Shapiro-Wilk significativo).
- **Heterocedasticidad**: la varianza cambia entre tratamientos (patrón de embudo,
  Levene significativo).
- **Atípicos** o respuestas acotadas (proporciones, conteos).

Ante esto hay dos estrategias complementarias: **transformar** (sección 2) o **cambiar de
método** (sección 3).

## 2. Transformaciones de la respuesta

Una **transformación** aplica una función a $y$ para estabilizar la varianza y/o
acercarse a la normalidad. A menudo, corregir la heterocedasticidad también mejora la
normalidad.

### 2.1 Transformaciones estabilizadoras comunes

| Situación | Transformación | Uso típico |
|---|---|---|
| $\sigma \propto \mu$ (varianza crece con la media) | $\ln y$ o $\log y$ | Respuestas multiplicativas, crecimiento |
| Datos de **conteo** ($\sigma^2 \propto \mu$, Poisson) | $\sqrt{y}$ | Número de defectos, eventos |
| **Proporciones** $p$ (binomial) | $\arcsin\sqrt{p}$ | Fracciones, porcentajes |
| $\sigma \propto \mu^2$ | $1/y$ (recíproco) | Tasas, tiempos |

La elección clásica se guía por la relación entre la desviación estándar y la media de
cada grupo.

### 2.2 El método de Box-Cox

En lugar de adivinar, la familia de **Box-Cox** elige la potencia óptima $\lambda$:

$$
y^{(\lambda)} =
\begin{cases}
\dfrac{y^{\lambda} - 1}{\lambda}, & \lambda \neq 0,\\[2ex]
\ln y, & \lambda = 0.
\end{cases}
$$

Se estima $\lambda$ por **máxima verosimilitud**: el software prueba un rango de valores y
elige el que maximiza la verosimilitud, entregando además un **intervalo de confianza**
para $\lambda$. Valores de referencia:

| $\lambda$ | Transformación equivalente |
|---|---|
| $1$ | ninguna (datos sin transformar) |
| $0.5$ | raíz cuadrada $\sqrt{y}$ |
| $0$ | logaritmo $\ln y$ |
| $-0.5$ | $1/\sqrt{y}$ |
| $-1$ | recíproco $1/y$ |

> **Consejo práctico.** Si el IC de $\lambda$ incluye un valor "redondo" (p. ej. 0 o 0.5),
> conviene usar esa transformación interpretable en vez del $\hat{\lambda}$ exacto.
> Box-Cox exige $y > 0$; si hay ceros o negativos, se suma una constante.

### 2.3 Advertencias

- Tras transformar, **el análisis (ANOVA, comparaciones) se hace sobre la escala
  transformada**, y la interpretación cambia (en escala log, las diferencias son
  razones/multiplicativas).
- Para reportar, los resultados suelen **retransformarse** a la escala original (p. ej.,
  exponenciar medias en escala log da **medias geométricas**).
- Revisar de nuevo los residuales **después** de transformar.

## 3. La prueba de Kruskal-Wallis

Cuando la transformación no resuelve el problema, o la respuesta es **ordinal**, se usa
la alternativa no paramétrica al ANOVA de una vía: **Kruskal-Wallis**.

### 3.1 Idea

Es la extensión de la prueba de **Wilcoxon-Mann-Whitney** a $a \ge 3$ grupos. Trabaja
con los **rangos** de las observaciones en vez de sus valores, por lo que **no asume
normalidad**. Procedimiento:

1. Ordenar **todas** las $N$ observaciones juntas y asignarles rangos $1,\dots,N$
   (promediando rangos en caso de empates).
2. Sumar los rangos dentro de cada grupo, $R_i$.
3. Calcular el estadístico

$$
H = \frac{12}{N(N+1)}\sum_{i=1}^{a}\frac{R_i^2}{n_i} \;-\; 3(N+1).
$$

Bajo $H_0$ (las $a$ distribuciones son iguales), $H \sim \chi^2_{a-1}$ aproximadamente.
Se rechaza $H_0$ para valores grandes de $H$.

### 3.2 Hipótesis e interpretación

$$
H_0:\ \text{las } a \text{ poblaciones tienen la misma distribución (misma mediana)},
$$

$$
H_1:\ \text{al menos una difiere en localización}.
$$

Igual que el ANOVA, Kruskal-Wallis es una prueba **global**. Si se rechaza, se usan
comparaciones múltiples no paramétricas (p. ej., **prueba de Dunn** con ajuste de
Bonferroni o Holm).

### 3.3 Ventajas y costos

- **Ventaja:** robusta a no normalidad y a atípicos; válida con respuestas ordinales.
- **Costo:** si los datos **sí** son normales, es algo **menos potente** que el ANOVA
  (pierde poco, ~5 % de eficiencia asintótica). No estima magnitudes de efecto tan
  ricas como el modelo paramétrico.

## 4. ¿Transformar o ir a no paramétrico?

Árbol de decisión orientativo:

1. ¿Fallan los supuestos? → Mirar residuales.
2. ¿El problema es **heterocedasticidad / asimetría**? → Probar **Box-Cox**; reanalizar.
3. ¿La transformación **arregla** los supuestos? → Seguir con ANOVA en escala
   transformada.
4. ¿No hay transformación que funcione, o los datos son **ordinales**? →
   **Kruskal-Wallis** (+ Dunn).
5. ¿Solo falla la **igualdad de varianzas**? → Considerar **ANOVA de Welch**.

> No existe regla única: la elección combina diagnóstico estadístico, naturaleza de la
> respuesta y facilidad de interpretación.

## 5. En la práctica

- **R:** `boxcox()` (paquete **MASS**) para $\lambda$; `kruskal.test()` para
  Kruskal-Wallis; `dunn.test()` (paquete **dunn.test**) o `FSA::dunnTest()` para las
  comparaciones; `oneway.test()` para Welch.
- **Python:** `scipy.stats.boxcox`; `scipy.stats.kruskal`;
  `scikit_posthocs.posthoc_dunn`; Welch vía `pingouin.welch_anova`.

Los notebooks de la Fase 2 muestran un caso con heterocedasticidad resuelto por Box-Cox y
otro analizado con Kruskal-Wallis, comparando conclusiones con el ANOVA clásico.

---

### Para repasar

- ¿Qué transformación sugiere Box-Cox si $\hat{\lambda}\approx 0$? ¿Y si su IC incluye 1?
- ¿Sobre qué trabaja Kruskal-Wallis en lugar de los valores originales?
- Si los datos son realmente normales, ¿qué pierdes al usar Kruskal-Wallis?

### Referencias

- Montgomery, D. C. _Design and Analysis of Experiments_, cap. 3 (§3.4, §3.11).
- Conover, W. J. _Practical Nonparametric Statistics_.
- Box, G. E. P. & Cox, D. R. (1964). "An Analysis of Transformations". _JRSS-B_.
