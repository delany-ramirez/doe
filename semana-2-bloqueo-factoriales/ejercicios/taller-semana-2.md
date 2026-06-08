# Taller — Semana 2: Bloqueo y Diseños Factoriales

> **Duración:** 90 min | **Modalidad:** individual o en parejas  
> **Datos:** [`../datos/rendimiento-extrusion.csv`](../datos/rendimiento-extrusion.csv) ·
> [`../datos/vida-bateria.csv`](../datos/vida-bateria.csv)

---

## Parte A — Diseño en bloques completos aleatorizados (DBCA)

Un ingeniero estudia el efecto de la **presión de inyección** (4 niveles: 8 500, 8 700,
8 900 y 9 100 psi) sobre el **rendimiento** (%) de un proceso de extrusión. Dado que la
materia prima proviene de diferentes **lotes** (b = 6), se usa un DBCA: cada lote recibe
los cuatro niveles de presión en orden aleatorio.

### Problema 1 — Estructura del diseño *(10 min)*

**a)** Identifica el factor de tratamiento, el factor de bloque, la variable de respuesta,
y los valores de $a$ (tratamientos), $b$ (bloques) y $N$ (observaciones totales).

**b)** Escribe el modelo lineal
$y_{ij} = \mu + \tau_i + \beta_j + \varepsilon_{ij}$
e indica el supuesto sobre $\varepsilon_{ij}$. ¿Qué supuesto adicional —respecto al DCA—
impone el DBCA?

**c)** ¿Por qué tiene más sentido bloquear por lote que realizar un DCA con 24 corridas
independientes? ¿Qué fuente de variación controla el bloqueo?

### Problema 2 — ANOVA del DBCA *(25 min)*

**a)** Calcula las medias por nivel de presión, las medias por lote y la gran media.

**b)** Construye la tabla ANOVA completa:

| Fuente | gl | SC | CM | $F_0$ | Valor-$p$ |
|--------|---:|---:|---:|------:|----------:|
| Presión (trat.) | | | | | |
| Lote (bloque) | | | | | |
| Error | | | | | |
| Total | | | | | |

**c)** Con $\alpha = 0.05$: ¿hay diferencias significativas entre niveles de presión?
¿Los bloques (lotes) resultaron significativos? ¿Qué te dice ese resultado sobre la
decisión de bloquear?

**d)** Aplica Tukey HSD sobre los niveles de presión. ¿Qué presiones difieren entre sí?
¿Cuál maximiza el rendimiento?

**e)** Calcula la **eficiencia relativa** del DBCA respecto al DCA:
$$RE = \frac{(b-1)\,CM_{\text{Bloque}} + b(a-1)\,CM_E}{(ab-1)\,CM_E}$$
Interprétala: ¿cuántas veces más réplicas habría necesitado un DCA para lograr la
misma precisión?

---

## Parte B — Factorial de dos factores

Se estudia la **vida útil** (horas) de baterías según el **tipo de material** (M1, M2, M3)
y la **temperatura de operación** (15, 70, 125 °F), con 4 réplicas por celda. Los datos
completos están en `vida-bateria.csv`.

| Material | 15 °F | 70 °F | 125 °F |
|:--------:|-------|-------|--------|
| M1 | 130, 155, 74, 180 | 34, 40, 80, 75 | 20, 70, 82, 58 |
| M2 | 150, 188, 159, 126 | 136, 122, 106, 115 | 25, 70, 58, 45 |
| M3 | 138, 110, 168, 160 | 174, 120, 150, 139 | 96, 104, 82, 60 |

### Problema 3 — Estructura y modelo factorial *(10 min)*

**a)** Identifica los dos factores, sus niveles, la variable de respuesta y el número
total de corridas. ¿Cuántas celdas (combinaciones tratamiento) hay?

**b)** Escribe el modelo de dos vías con interacción:
$y_{ijk} = \mu + \alpha_i + \beta_j + (\alpha\beta)_{ij} + \varepsilon_{ijk}$,
donde $\alpha_i$ es el efecto de material, $\beta_j$ el de temperatura y
$(\alpha\beta)_{ij}$ la interacción. Plantea las tres hipótesis nulas.

### Problema 4 — ANOVA de dos vías *(20 min)*

**a)** Calcula las medias de celda $\bar{y}_{ij.}$, las medias marginales por material
$\bar{y}_{i..}$ y por temperatura $\bar{y}_{.j.}$, y la gran media $\bar{y}_{...}$.

**b)** Construye la tabla ANOVA de dos vías. ¿Son significativos los efectos principales
de material y temperatura? ¿Lo es la interacción $(\alpha\beta)$?

**c)** Si la interacción es significativa, ¿tiene sentido interpretar los efectos
principales por separado? ¿Qué análisis harías en su lugar?

### Problema 5 — Gráfica de interacción e interpretación *(15 min)*

**a)** Traza (o describe) la **gráfica de interacción**: medias de cada material en
función de la temperatura. ¿Las líneas son paralelas o se cruzan? ¿Qué indica esto?

**b)** ¿Qué combinación material–temperatura maximiza la vida útil? ¿Hay una combinación
que sea robusta (buena vida en todas las temperaturas)?

**c)** Redacta en 3–4 líneas la recomendación operacional para el equipo de ingeniería.

---

## Problema 6 — Selección de diseño *(10 min, conceptual)*

Para cada escenario indica qué diseño usarías (DCA, DBCA, factorial) y justifica en
**una línea**:

| Escenario | Diseño propuesto |
|-----------|-----------------|
| Comparar 3 formulaciones de un medicamento; 5 lotes de materia prima disponibles; solo interesa el efecto de la formulación. | |
| Evaluar el efecto conjunto de temperatura (3 niveles) y catalizador (2 tipos) sobre la conversión de un reactor; recursos para 24 corridas. | |
| Estudiar el efecto de 1 aditivo (2 niveles) sobre la viscosidad; las muestras provienen de un único lote homogéneo. | |
| Comparar 4 tratamientos agrícolas en un campo con 3 zonas de suelo claramente distintas; 1 parcela por tratamiento por zona. | |

---

> Solución en [`taller-semana-2-sol.md`](taller-semana-2-sol.md). Intenta resolverlo antes
> de consultarla.
