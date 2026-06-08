# Taller Semana 1 — Solución

> Referencia al enunciado: [`taller-semana-1.md`](taller-semana-1.md)

---

## Problema 1

**a)** Diseño completamente aleatorizado (DCA). Factor: % de algodón (cuantitativo, 5
niveles: 15, 20, 25, 30, 35 %). Respuesta: resistencia (lb/pulg²). Unidad experimental:
una probeta de fibra. $a = 5$, $n = 5$, $N = 25$.

**b)** Aleatorización. Controla el sesgo de tendencias temporales (drift del equipo,
fatiga del operario, variación ambiental a lo largo del día) que, de no controlarse,
quedaría confundido con el efecto del tratamiento.

**c)** Sin aleatorización, cualquier cambio sistemático a lo largo del tiempo (e.g.,
calentamiento progresivo del equipo) se confunde con la variable "% algodón". Los
residuales mostrarían autocorrelación y el supuesto de independencia se violaría.

---

## Problema 2

**a)** Medias por tratamiento y gran media:

| % Algodón | Suma | $\bar{y}_{i.}$ |
|:---------:|-----:|:--------------:|
| 15 | 49 | 9.80 |
| 20 | 77 | 15.40 |
| 25 | 88 | 17.60 |
| 30 | 108 | 21.60 |
| 35 | 54 | 10.80 |
| **Total** | **376** | $\bar{y}_{..} = 376/25 =$ **15.04** |

**b)** Sumas de cuadrados:

$$SS_{\text{Trat}} = 5\bigl[(9.80-15.04)^2+(15.40-15.04)^2+(17.60-15.04)^2
+(21.60-15.04)^2+(10.80-15.04)^2\bigr] = 5\times 95.15 = \mathbf{475.76}$$

$SS_E$ por grupo (residuales al cuadrado):

| Grupo | $SS_i$ |
|-------|-------:|
| 15 % | 44.80 |
| 20 % | 39.20 |
| 25 % | 17.20 |
| 30 % | 27.20 |
| 35 % | 32.80 |
| **Total $SS_E$** | **161.20** |

**c)** Tabla ANOVA:

| Fuente | gl | SC | CM | $F_0$ |
|--------|---:|------:|-------:|------:|
| Tratamientos | 4 | 475.76 | 118.94 | 14.76 |
| Error | 20 | 161.20 | 8.06 | |
| Total | 24 | 636.96 | | |

Valor crítico $F_{0.05,\,4,\,20} = 2.87$. Como $F_0 = 14.76 > 2.87$, se rechaza $H_0$.
Hay diferencias significativas entre los niveles de algodón.

**d)** Código R de verificación:

```r
df <- read.csv("../datos/resistencia-algodon.csv")
modelo <- aov(resistencia ~ factor(algodon_pct), data = df)
summary(modelo)
# Df=4, SS≈475.8, MS≈118.9, F≈14.76, p<0.001
```

---

## Problema 3

**a)** Los residuales deberían distribuirse sin patrón alrededor de cero y con varianza
aproximadamente constante para cada nivel. Un "embudo" indicaría heterocedasticidad.

**b)** Shapiro-Wilk:

```r
shapiro.test(residuals(modelo))
# W ≈ 0.97, p ≈ 0.59 → no se rechaza normalidad
```

El p-valor es mayor que 0.05; no hay evidencia para rechazar normalidad.

**c)** Bartlett:

```r
bartlett.test(resistencia ~ factor(algodon_pct), data = df)
# K² ≈ 3.0, p ≈ 0.56 → no se rechaza homocedasticidad
```

No hay evidencia de heterocedasticidad. Los supuestos del ANOVA se cumplen.

**d)** Si las varianzas fueran desiguales: (i) prueba de Welch–ANOVA (`oneway.test` en R),
(ii) Kruskal-Wallis (no paramétrico), (iii) transformación Box-Cox para estabilizar
varianza.

---

## Problema 4

**a)** Tukey HSD ($\alpha = 0.05$, $MS_E = 8.06$, $n = 5$, $a = 5$):

$$\text{HSD} = q_{0.05,5,20}\sqrt{\frac{MS_E}{n}} \approx 4.23\times\sqrt{\frac{8.06}{5}}
\approx 4.23 \times 1.269 \approx 5.37 \text{ lb/pulg}^2$$

```r
TukeyHSD(modelo)
```

Pares con diferencia > 5.37 lb/pulg² (significativamente distintos): 30 % vs 15 %,
30 % vs 20 %, 30 % vs 35 %; 25 % vs 15 %; 20 % vs 15 %.

**b)** 30 % es significativamente superior a todos los demás niveles. La diferencia con
25 % es $21.60 - 17.60 = 4.00$ lb/pulg², **inferior** al HSD ≈ 5.37, por lo que 30 %
y 25 % **no difieren significativamente**. Frente a 35 % la diferencia es 10.80 > 5.37,
sí difieren.

**c)** La diferencia 30 % vs. 25 % (= 4.0 lb/pulg²) es prácticamente relevante pero
estadísticamente no significativa con las réplicas disponibles. Las diferencias de
grupos extremos (30 % vs. 15 % = 11.8 lb/pulg²) son tanto estadística como
prácticamente relevantes. No se detecta el caso inverso (estadístico pero no práctico)
con este conjunto de datos.

---

## Problema 5

**a)** La relación **no es monotónica**: la resistencia sube de 15 % a 30 %, pero cae en
35 %. Esto sugiere que el algodón mejora la resistencia hasta cierto punto óptimo
(~30 %) a partir del cual otras propiedades de la mezcla se deterioran. Una curva
cuadrática modelaría mejor esta tendencia.

**b)** Recomendación: Usar el 30 % de algodón, que produce la mayor resistencia media
(21.6 lb/pulg²) y difiere significativamente de 15 %, 20 % y 35 % (Tukey, $\alpha =
0.05$). Aunque la diferencia con 25 % no alcanza significancia estadística, es
industrialmente relevante (4 lb/pulg²), por lo que se sugiere confirmar con un
experimento más potente si el costo de la diferencia de formulación lo justifica.

**c)** 🔵 Opcional — Potencia y tamaño de muestra:

Con $\hat{\sigma}^2 = MS_E = 8.06$ ($\hat{\sigma} \approx 2.84$) y diferencia de interés
$\Delta = 4$ lb/pulg²:

```r
library(pwr)
# ANOVA de una vía: f = sigma_medias / sigma_error
# Bajo H_a con dos grupos separados 4 unidades:
# sigma_medias aprox Delta/2 = 2 (caso minimal de dos grupos igualmente extremos)
f <- 2 / 2.84   # ≈ 0.70
pwr.anova.test(k = 5, f = f, sig.level = 0.05, power = 0.90)
# n ≈ 10–12 réplicas por tratamiento (≈50–60 corridas totales)
```

El resultado exacto depende de qué medias se especifiquen como alternativa. Con
$f \approx 0.70$ (grande según Cohen) se necesitan alrededor de 10–12 réplicas por
nivel para alcanzar potencia ≥ 0.90.
