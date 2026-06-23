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

**g)** Reanaliza los datos **ignorando el bloque** (un ANOVA de una vía, como si fuera un
DCA). ¿Cómo cambian $F$ y el valor-p del fertilizante? Conecta el resultado con la
eficiencia relativa del inciso (e).

# Ejercicio 02 — Factorial de dos factores

> **Temas:** diseño factorial, efectos principales, interacción, ANOVA de dos vías.
> **Datos:** [`../datos/conversion-catalizador.csv`](../datos/conversion-catalizador.csv).

## Contexto

En una reacción química se estudia la **conversión (%)** en función de dos factores:

- **Catalizador** (2 niveles: A, B).
- **Concentración** del reactivo (3 niveles: 10, 20, 30 %).

Se realiza un **factorial completo** $2\times3$ con **3 réplicas** por combinación (18
corridas, orden aleatorizado). Medias por celda:

| | conc 10 | conc 20 | conc 30 |
|---|---|---|---|
| Catalizador A | 40.0 | 46.0 | 50.0 |
| Catalizador B | 44.0 | 48.0 | 49.0 |

## Preguntas

**a)** ¿Cuántos tratamientos hay? ¿Por qué un factorial es preferible a estudiar cada
factor por separado (un factor a la vez)?

**b)** Escribe el modelo de dos factores con interacción e indica las **tres** hipótesis
nulas.

**c)** Construye la tabla ANOVA de dos vías. Reporta $F$ y valor-p de los dos efectos
principales y de la interacción ($\alpha=0.05$).

**d)** Siguiendo la estrategia correcta, **¿qué pruebas primero?** ¿Es significativa la
interacción? Interprétala con ayuda de las medias de celda (¿el efecto de la concentración
depende del catalizador?).

**e)** Dibuja (o describe) la **gráfica de interacción**. ¿Qué forma tienen las líneas y
qué implica?

**f)** Da una recomendación de proceso: ¿qué combinación catalizador–concentración
maximiza la conversión?

**g)** Calcula las **medias marginales**: la conversión media de cada catalizador
(promediando concentración) y la de cada concentración (promediando catalizador). El
"efecto principal" sugiere que un catalizador es mejor *en promedio*; explica por qué, dada
la interacción significativa, esa conclusión puede inducir a error.

---