# Solución — 🔵 Ejercicio 03 (cuadrado latino)

> Reproducible con `aov(rendimiento ~ conductor + coche + combustible, data=...)` en R o
> `ols('rendimiento ~ C(conductor)+C(coche)+C(combustible)')` en Python sobre
> [`../datos/rendimiento-combustible.csv`](../datos/rendimiento-combustible.csv).

## a) Es un cuadrado latino

Cada combustible (A–D) aparece **exactamente una vez** en cada fila (conductor) y en cada
columna (coche): es un cuadrado latino $4\times4$ válido. Usa $p^2=16$ corridas, frente a
las $4\times4\times4=64$ de un factorial completo de tres factores con una réplica: el
cuadrado latino es **mucho más económico** porque no estima interacciones.

## b) Modelo

$$
y_{ijk}=\mu+\alpha_i+\tau_j+\beta_k+\varepsilon_{ijk},\qquad \varepsilon_{ijk}\sim N(0,\sigma^2),
$$

con $\alpha_i$ efecto del **conductor** (fila), $\beta_k$ efecto del **coche** (columna),
$\tau_j$ efecto del **combustible** (tratamiento) y $\mu$ la media global. Supuesto fuerte:
**no hay interacciones** entre los tres factores (aditividad completa); de existir, se
confundirían con el error.

## c) Tabla ANOVA

| Fuente | SC | g.l. | CM | $F$ | valor-p |
|---|---|---|---|---|---|
| Conductor (fila) | 20.0 | 3 | 6.67 | 6.15 | 0.029 |
| Coche (columna) | 52.0 | 3 | 17.33 | 16.00 | 0.003 |
| Combustible (trat.) | 31.5 | 3 | 10.50 | **9.69** | **0.010** |
| Error | 6.5 | 6 | 1.083 | | |
| **Total** | 110.0 | 15 | | | |

El error tiene $(p-1)(p-2)=(3)(2)=6$ g.l. El **combustible** es significativo
($p\approx0.010<0.05$): la formulación afecta el rendimiento.

## d) Los dos bloqueos

Ambos factores de bloqueo son significativos: **coche** muy claramente ($F=16.0$,
$p=0.003$) y **conductor** también ($F=6.15$, $p=0.029$). Es decir, había variabilidad
real tanto entre vehículos como entre conductores; **bloquear en las dos direcciones fue
acertado** y limpió del error una parte importante de la variación ($20+52=72$ de $110$ en
suma de cuadrados).

## e) Medias y recomendación

| A | B | C | D |
|---|---|---|---|
| 14.75 | 13.50 | **15.75** | 12.00 |

La formulación **C** da el mayor rendimiento (15.75 km/L), seguida de A. Con solo **6 g.l.
de error** la prueba tiene potencia limitada: por eso, cuando $p$ es pequeño, suele
**replicarse** el cuadrado latino (o usarse varios cuadrados) para ganar grados de libertad
y precisión. Se recomienda **C**, confirmando con corridas adicionales.
