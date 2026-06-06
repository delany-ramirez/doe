# Ejercicio 01 — Optimización con superficie de respuesta (CCD)

> **Temas:** modelo de segundo orden, CCD, punto estacionario, análisis canónico.
> **Datos:** [`../datos/pureza-ccd.csv`](../datos/pureza-ccd.csv).

## Contexto

Tras cribar y ascender, un proceso de purificación está **cerca de su óptimo**. Se corre un
**diseño central compuesto** (CCD) rotable en dos factores codificados —**$x_1$**
(temperatura) y **$x_2$** (tiempo de residencia)— con 4 puntos factoriales, 4 axiales
($\pm1.414$) y 5 centrales. La respuesta es la **pureza (%)**.

## Preguntas

**a)** Describe la composición del CCD: ¿cuántas corridas y de qué tipo? ¿Por qué se
incluyen puntos **axiales** y **centrales** (qué permite estimar cada grupo)? ¿Qué
significa que sea **rotable**?

**b)** Ajusta el **modelo de segundo orden** completo. Reporta los coeficientes y $R^2$.

**c)** Calcula el **punto estacionario** $\mathbf{x}_s$ (en variables codificadas).

**d)** Haz el **análisis canónico**: obtén los valores propios de la matriz $\mathbf{B}$.
¿El punto es un **máximo**, un **mínimo** o una **silla**? Justifica.

**e)** Predice la **pureza óptima** y di si el óptimo cae **dentro** de la región
experimental ($|x_i|\le 1.414$).

**f)** ¿Cuál es el **paso siguiente** imprescindible antes de fijar estas condiciones en
producción?

---

> Solución en [`ej01-rsm-ccd-sol.md`](ej01-rsm-ccd-sol.md).
