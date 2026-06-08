# Taller Semana 2 — Solución

> Referencia al enunciado: [`taller-semana-2.md`](taller-semana-2.md)

---

## Parte A — DBCA (rendimiento-extrusion.csv)

### Problema 1

**a)** Factor de tratamiento: presión de inyección ($a = 4$ niveles: 8 500, 8 700, 8 900,
9 100 psi). Factor de bloque: lote de materia prima ($b = 6$). Respuesta: rendimiento (%).
$N = 4 \times 6 = 24$.

**b)** Modelo: $y_{ij} = \mu + \tau_i + \beta_j + \varepsilon_{ij}$, con
$\varepsilon_{ij} \sim \mathcal{N}(0, \sigma^2)$ i.i.d. Supuesto adicional respecto al DCA:
no existe interacción tratamiento × bloque (los efectos de bloque y tratamiento son
aditivos).

**c)** Bloquear por lote elimina la variabilidad entre lotes del término de error. Si esa
variabilidad es grande, el DCA la absorbería en $MS_E$, reduciendo la potencia de la
prueba sobre tratamientos.

---

### Problema 2

**a)** Medias por presión (código R):

```r
df <- read.csv("../datos/rendimiento-extrusion.csv")
tapply(df$rendimiento, df$presion, mean)
# 8500 → 92.82  |  8700 → 91.68  |  8900 → 88.92  |  9100 → 85.77
tapply(df$rendimiento, df$lote, mean)
# Lote 1→87.70  2→89.75  3→91.00  4→90.55  5→85.33  6→94.45
# Gran media ≈ 89.80
```

**b)** Tabla ANOVA:

```r
modelo <- aov(rendimiento ~ factor(presion) + factor(lote), data = df)
summary(modelo)
```

| Fuente | gl | SC | CM | $F_0$ | Valor-$p$ |
|--------|---:|------:|------:|------:|----------:|
| Presión | 3 | 178.0 | 59.3 | 8.07 | 0.002 |
| Lote | 5 | 192.1 | 38.4 | 5.22 | 0.005 |
| Error | 15 | 110.2 | 7.35 | | |
| Total | 23 | 480.3 | | | |

**c)** Ambos efectos son significativos con $\alpha = 0.05$. Que los bloques (lotes)
también resulten significativos confirma que bloquear fue la decisión correcta: hubo
variabilidad real entre lotes que de otro modo habría inflado $MS_E$ en un DCA.

**d)** Tukey HSD:

```r
TukeyHSD(modelo, "factor(presion)")
```

La presión 8 500 psi produce el mayor rendimiento ($\approx 92.8\%$) y difiere
significativamente de 9 100 psi ($\approx 85.8\%$). Los niveles 8 700 y 8 900 no difieren
significativamente de 8 500 ni entre sí.

**e)** Eficiencia relativa:

$$RE = \frac{(b-1)\,CM_{\text{Bloque}} + b(a-1)\,CM_E}{(ab-1)\,CM_E}
= \frac{5\times38.4 + 6\times3\times7.35}{23\times7.35}
= \frac{192.0+132.3}{169.1} \approx 1.92$$

El DBCA es ~1.9× más eficiente que un DCA: un DCA habría necesitado casi el doble de
observaciones para lograr la misma precisión en la estimación del efecto de la presión.

---

## Parte B — Factorial 3 × 3 (vida-bateria.csv)

### Problema 3

**a)** Factor A: material (3 niveles: M1, M2, M3). Factor B: temperatura (3 niveles: 15,
70, 125 °F). Respuesta: vida útil (h). Réplicas: $n = 4$. Celdas: $3\times3 = 9$.
Total: $N = 36$ corridas.

**b)** El modelo con interacción plantea tres $H_0$: (i) no hay efecto de material
($\alpha_i = 0\ \forall i$); (ii) no hay efecto de temperatura ($\beta_j = 0\ \forall j$);
(iii) no hay interacción ($(\alpha\beta)_{ij} = 0\ \forall i,j$).

---

### Problema 4

**a)** Medias de celda y marginales:

```r
df2 <- read.csv("../datos/vida-bateria.csv")
tapply(df2$vida, list(df2$material, df2$temperatura), mean)
#       15     70    125
# M1  134.8  57.3   57.5
# M2  155.8 119.8   49.5
# M3  144.0 145.8   85.5

# Medias marginales por material:
tapply(df2$vida, df2$material, mean)
# M1→83.2  M2→108.3  M3→125.1

# Medias marginales por temperatura:
tapply(df2$vida, df2$temperatura, mean)
# 15°F→144.9  70°F→107.6  125°F→64.2
```

**b)** ANOVA de dos vías:

```r
modelo2 <- aov(vida ~ factor(material) * factor(temperatura), data = df2)
summary(modelo2)
```

Resultado esperado: material ($p < 0.05$), temperatura ($p < 0.001$), interacción
material:temperatura ($p < 0.05$). Los tres efectos son significativos.

**c)** Con interacción significativa, **no** conviene interpretar efectos principales en
forma aislada: el efecto de la temperatura depende del material (y viceversa). El análisis
adecuado es comparar las 9 medias de celda o usar un análisis de efectos simples
(*simple effects*): efecto de temperatura dentro de cada material.

---

### Problema 5

**a)** Las líneas de interacción **no son paralelas**: M3 mantiene una vida útil más alta a
70 °F y 125 °F que M1 y M2, mientras que M2 tiene la mayor vida a 15 °F pero cae
drásticamente a 125 °F. Este cruzamiento confirma la interacción significativa.

**b)** La combinación M2–15 °F o M3–15 °F maximiza la vida útil (medias $\approx 156$
y $144$ h, respectivamente). M3 es la opción más **robusta**: mantiene una vida
aceptable en los tres niveles de temperatura, lo que lo hace preferible cuando no se
puede controlar la temperatura operativa.

**c)** Recomendación: si la temperatura de operación está garantizada a 15 °F, M2 da la
mayor vida útil media. Si la temperatura puede variar hasta 125 °F, M3 ofrece el mejor
desempeño consistente. Se recomienda M3 como alternativa robusta, con una reducción de
$\approx 12$ h respecto a M2 en condiciones óptimas.

---

### Problema 6 — Selección de diseño

| Escenario | Diseño propuesto |
|-----------|-----------------|
| 3 formulaciones, 5 lotes, solo interesa la formulación | **DBCA** — el lote es una fuente de variación no controlable que conviene bloquear. |
| Temperatura × catalizador, 24 corridas | **Factorial 3 × 2** — permite estimar efectos principales e interacción; 18 corridas con $n=3$ réplicas. |
| 1 aditivo, lote homogéneo | **DCA** — sin fuente de variación identificable para bloquear; el DCA es el diseño más simple. |
| 4 tratamientos agrícolas, 3 zonas de suelo distintas | **DBCA** — las zonas son bloques naturales que controlan la heterogeneidad del suelo. |
