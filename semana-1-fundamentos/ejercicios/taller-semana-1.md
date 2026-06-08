# Taller — Semana 1: Fundamentos y ANOVA de una vía

> **Duración:** 90 min | **Modalidad:** individual o en parejas  
> **Datos:** [`../datos/resistencia-algodon.csv`](../datos/resistencia-algodon.csv) (Montgomery 3.1)

Un investigador estudia cómo el **porcentaje de algodón** en la mezcla afecta la
**resistencia a la tensión** (lb/pulg²) de fibra sintética. Se evaluaron **5 niveles**
(15, 20, 25, 30 y 35 %) con **5 réplicas** cada uno; el orden de las 25 corridas se
fijó completamente al azar.

| % Algodón | Observaciones |
|:---------:|---------------|
| 15 | 7, 7, 15, 11, 9 |
| 20 | 12, 17, 12, 18, 18 |
| 25 | 14, 18, 18, 19, 19 |
| 30 | 19, 25, 22, 19, 23 |
| 35 | 7, 10, 11, 15, 11 |

---

## Problema 1 — Identificación del diseño *(10 min)*

**a)** ¿Qué tipo de diseño se usó (DCA, DBCA, otro)? Identifica: factor, niveles, variable
de respuesta, unidad experimental, número de tratamientos $a$ y réplicas $n$.

**b)** El investigador aleatoriza el orden de las 25 corridas antes de ejecutarlas. ¿Qué
principio del DOE aplica y qué fuente de sesgo controla?

**c)** Una colega propone ejecutar primero las 5 réplicas del 15 %, luego las del 20 %,
y así sucesivamente en orden ascendente. ¿Por qué este procedimiento podría invalidar
el análisis estadístico?

---

## Problema 2 — Cálculos del ANOVA *(25 min)*

**a)** Calcula la gran media $\bar{y}_{..}$ y las cinco medias de tratamiento
$\bar{y}_{i.}$.

**b)** Usando las fórmulas
$$SS_{\text{Trat}} = n\sum_{i=1}^{a}(\bar{y}_{i.}-\bar{y}_{..})^2, \qquad
SS_E = \sum_{i=1}^{a}\sum_{j=1}^{n}(y_{ij}-\bar{y}_{i.})^2,$$
calcula $SS_{\text{Trat}}$ y $SS_E$.

**c)** Completa la tabla ANOVA:

| Fuente | gl | SC | CM | $F_0$ |
|--------|---:|---:|---:|------:|
| Tratamientos | | | | |
| Error | | | | |
| Total | | | | |

Con $\alpha = 0.05$, ¿cuál es el valor crítico $F_{\alpha,\,a-1,\,N-a}$? ¿Se rechaza
$H_0$?

**d)** Verifica en R o Python. ¿Coinciden tus cálculos con la salida del software?

---

## Problema 3 — Verificación de supuestos *(20 min)*

**a)** Calcula los residuales $e_{ij} = y_{ij} - \bar{y}_{i.}$ para cada observación.
¿Qué patrón esperarías en un gráfico de $e_{ij}$ vs. $\bar{y}_{i.}$ si el modelo es
correcto?

**b)** Aplica la prueba de **Shapiro-Wilk** sobre el vector de residuales. ¿Se cumple la
normalidad con $\alpha = 0.05$?

**c)** Aplica la prueba de **Bartlett** (o Levene) para homogeneidad de varianzas entre los
cinco grupos. ¿Hay evidencia de heterocedasticidad con $\alpha = 0.05$?

**d)** Si las varianzas no fueran iguales entre grupos, ¿qué alternativas al ANOVA
clásico existirían? Menciona al menos dos.

---

## Problema 4 — Comparaciones múltiples *(20 min)*

**a)** Aplica el procedimiento de **Tukey HSD** con $\alpha = 0.05$. Reporta la diferencia
mínima significativa (HSD) e indica qué pares de tratamientos difieren.

**b)** ¿El nivel del 30 % es significativamente superior a **todos** los demás? ¿Y al
nivel adyacente de 25 %? ¿Y al de 35 %?

**c)** La empresa considera industrialmente relevante una diferencia de $\geq 4$ lb/pulg².
Compara la significancia estadística de las comparaciones Tukey con esa magnitud práctica.
¿Hay alguna diferencia estadísticamente significativa que no sea prácticamente relevante,
o viceversa? Argumenta.

---

## Problema 5 — Conclusión e interpretación *(15 min)*

**a)** ¿La relación entre % de algodón y resistencia es monotónica? ¿Por qué el nivel más
alto (35 %) no produce la mayor resistencia? ¿Qué sugiere esto sobre la forma funcional
de la relación?

**b)** Redacta una recomendación de 3–4 líneas para el equipo de producción: ¿qué nivel
de algodón se debe usar? Distingue significancia **estadística** de relevancia
**práctica**.

**c)** 🔵 **(Opcional)** Si se quisiera detectar una diferencia entre medias de 4 lb/pulg²
con potencia $\geq 0.90$ y $\alpha = 0.05$, ¿cuántas réplicas serían necesarias en un
nuevo experimento? Usa `pwr.anova.test` (R) o `statsmodels.stats.power` (Python) con la
estimación de $\sigma$ obtenida del experimento actual.

---

> Solución en [`taller-semana-1-sol.md`](taller-semana-1-sol.md). Intenta resolverlo antes
> de consultarla.
