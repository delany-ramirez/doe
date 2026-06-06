# Ejercicio 01 — Diseño en bloques completos al azar

> **Temas:** bloqueo, DBCA, eficiencia del bloqueo. **Datos:**
> [`../datos/rendimiento-fertilizante.csv`](../datos/rendimiento-fertilizante.csv).

## Contexto

Un agrónomo compara **cuatro fertilizantes** (F1, F2, F3, F4) midiendo el **rendimiento**
(ton/ha) de un cultivo. El terreno disponible es heterogéneo (pendiente, humedad), así que
se divide en **cinco parcelas** (P1–P5) relativamente homogéneas internamente. En **cada
parcela** se aplican los **cuatro** fertilizantes a subparcelas asignadas al azar.

| Fertilizante | P1 | P2 | P3 | P4 | P5 |
|---|---|---|---|---|---|
| F1 | 44 | 48 | 44 | 50 | 41 |
| F2 | 50 | 54 | 48 | 56 | 49 |
| F3 | 48 | 49 | 48 | 53 | 44 |
| F4 | 42 | 46 | 40 | 48 | 41 |

## Preguntas

**a)** Identifica el factor de **tratamiento**, el factor de **bloque**, la variable de
respuesta y el número de tratamientos $a$ y bloques $b$. ¿Por qué tiene sentido bloquear
por parcela en lugar de hacer un diseño completamente al azar?

**b)** Escribe el modelo $y_{ij}=\mu+\tau_i+\beta_j+\varepsilon_{ij}$ y plantea la
hipótesis de interés sobre los tratamientos. ¿Qué supuesto adicional (respecto al ANOVA de
una vía) impone este diseño?

**c)** Construye la tabla ANOVA. Reporta $F$ y el valor-p de **fertilizante** y de
**parcela**. ¿Hay diferencias entre fertilizantes con $\alpha=0.05$?

**d)** ¿Los bloques resultaron significativos? ¿Qué te dice eso sobre la decisión de
bloquear?

**e)** Calcula la **eficiencia relativa** del DBCA frente a un DCA. Interprétala.

**f)** Aplica Tukey sobre los fertilizantes. ¿Cuál recomendarías? Acompaña con las medias.

---

> Solución en [`ej01-dbca-sol.md`](ej01-dbca-sol.md).
