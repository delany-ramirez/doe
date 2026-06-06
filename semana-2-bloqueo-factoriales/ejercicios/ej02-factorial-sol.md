# Solución — Ejercicio 02 (factorial de dos factores)

> Reproducible adaptando
> [`../notebooks/02-factorial-dos-vias_py.ipynb`](../notebooks/02-factorial-dos-vias_py.ipynb)
> al archivo [`../datos/conversion-catalizador.csv`](../datos/conversion-catalizador.csv).

## a) Tratamientos y ventaja del factorial

Hay $2\times3=6$ tratamientos (combinaciones). El factorial es preferible al método "un
factor a la vez" porque: (i) **detecta la interacción** entre catalizador y concentración,
imposible de ver variando uno solo; (ii) es **más eficiente**, pues cada corrida aporta
información sobre ambos efectos principales.

## b) Modelo e hipótesis

$$
y_{ijk}=\mu+\tau_i+\beta_j+(\tau\beta)_{ij}+\varepsilon_{ijk},\qquad
\varepsilon_{ijk}\sim N(0,\sigma^2).
$$
$$
\begin{aligned}
H_0^{A}&:\ \tau_i=0\ \forall i &&(\text{sin efecto del catalizador})\\
H_0^{B}&:\ \beta_j=0\ \forall j &&(\text{sin efecto de la concentración})\\
H_0^{AB}&:\ (\tau\beta)_{ij}=0\ \forall i,j &&(\text{sin interacción})
\end{aligned}
$$

## c) Tabla ANOVA de dos vías

| Fuente | SC | g.l. | CM | $F$ | valor-p |
|---|---|---|---|---|---|
| Catalizador | 12.5 | 1 | 12.50 | 5.36 | 0.039 |
| Concentración | 175.0 | 2 | 87.50 | 37.50 | $<10^{-5}$ |
| Interacción | 19.0 | 2 | 9.50 | 4.07 | 0.045 |
| Error | 28.0 | 12 | 2.33 | | |
| **Total** | 234.5 | 17 | | | |

## d) Estrategia: primero la interacción

Se prueba **primero la interacción**: es significativa ($p\approx0.045<0.05$). Esto
significa que el **efecto de la concentración depende del catalizador**:

- Con **catalizador A**: la conversión sube 40 → 46 → 50 al aumentar la concentración
  (efecto de +10 puntos de 10 a 30 %).
- Con **catalizador B**: sube 44 → 48 → 49 (efecto de solo +5 puntos), e incluso casi se
  estanca de 20 a 30 %.

Como hay interacción, los efectos principales se interpretan con **cautela**: no basta con
decir "A es mejor" o "más concentración es mejor" en general.

## e) Gráfica de interacción

Dos líneas (una por catalizador) de conversión vs. concentración. **No son paralelas**: la
línea de A tiene **mayor pendiente** y cruza/alcanza a la de B en la concentración alta.
Líneas no paralelas ⇒ **interacción**, consistente con el ANOVA.

## f) Recomendación

La **máxima conversión** (50 %) se obtiene con **catalizador A a concentración 30 %**.
Aunque B parte más alto en concentraciones bajas, A escala mejor y supera a B en el
extremo alto. Recomendación: operar con **A al 30 %**, confirmando con corridas
adicionales en esa región.
