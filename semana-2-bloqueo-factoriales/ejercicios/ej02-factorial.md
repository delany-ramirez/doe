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

---

> Solución en [`ej02-factorial-sol.md`](ej02-factorial-sol.md).
