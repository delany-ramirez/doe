# Solución — Ejercicio 02 (ascenso y elección de diseño)

## Parte A — Ascenso por máxima pendiente

**1.** La respuesta aumenta más rápido en la dirección del **gradiente**, proporcional a
los coeficientes: $(\beta_1,\beta_2)=(4,1)$. Es decir, avanzar 4 unidades en $x_1$ por cada
1 en $x_2$.

**2.** Con $x_1$ de referencia y $\Delta x_1=1$:
$$
\Delta x_2 = \frac{\beta_2}{\beta_1}\,\Delta x_1 = \frac{1}{4}(1) = 0.25 .
$$
Trayectoria desde el centro:

| Punto | $x_1$ | $x_2$ |
|---|---|---|
| 0 (centro) | 0 | 0 |
| 1 | 1 | 0.25 |
| 2 | 2 | 0.50 |
| 3 | 3 | 0.75 |

**3.** Se realizan corridas **reales** en esos puntos y se avanza **mientras la respuesta
medida mejore**. Cuando la respuesta deja de aumentar (o empieza a bajar), se **detiene**:
se ha llegado a la vecindad del óptimo. Allí se ajusta un nuevo modelo de primer orden o se
pasa al de segundo orden.

**4.** Una prueba de **curvatura no significativa** indica que la superficie sigue siendo
**aproximadamente plana** en esta región: el modelo de **primer orden es adecuado** y tiene
sentido **continuar ascendiendo**. La curvatura significativa sería la señal para cambiar
al modelo cuadrático.

## Parte B — Elección de diseño de segundo orden

**5.** **Box-Behnken**. Sus puntos **nunca** colocan los tres factores simultáneamente en
sus extremos (no hay puntos en las esquinas del cubo), evitando las combinaciones
peligrosas. Un CCD sí incluye los vértices (todos $\pm1$) y los axiales (que además salen
del cubo), lo que aquí sería inseguro.

**6.** Ambos usan **tres niveles** por factor ($-1, 0, +1$) —el Box-Behnken— mientras que
el CCD rotable usa **cinco** ($\pm\alpha,\pm1,0$). El Box-Behnken combina **pares** de
factores en $\pm1$ manteniendo el resto en $0$, de modo que en cada corrida nunca coinciden
los tres factores en el extremo: por eso evita las esquinas.

**7.** Si no se puede salir del cubo $[-1,1]^3$, se usa un **CCD de caras centradas (CCF)**
con $\alpha=1$: los puntos axiales caen sobre las caras del cubo. Se **sacrifica la
rotabilidad** (la varianza de predicción deja de ser uniforme en todas las direcciones) y
la estimación de los términos cuadráticos puros es algo menos precisa, pero todo el diseño
queda dentro de los límites físicos del equipo.
