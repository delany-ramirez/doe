# Solución — Ejercicio 01 (DBCA)

> Reproducible adaptando [`../notebooks/01-dbca_py.ipynb`](../notebooks/01-dbca_py.ipynb)
> al archivo [`../datos/rendimiento-fertilizante.csv`](../datos/rendimiento-fertilizante.csv).

## a) Diseño

- **Tratamiento:** fertilizante ($a=4$: F1–F4).
- **Bloque:** parcela ($b=5$: P1–P5).
- **Respuesta:** rendimiento (ton/ha). $N=20$ (un dato por celda).
- Se bloquea por parcela porque el terreno es **heterogéneo**: si no se controlara, la
  variabilidad entre parcelas inflaría el error y podría enmascarar las diferencias entre
  fertilizantes. El bloqueo aísla esa variación.

## b) Modelo e hipótesis

$$
y_{ij}=\mu+\tau_i+\beta_j+\varepsilon_{ij},\qquad \varepsilon_{ij}\sim N(0,\sigma^2).
$$
$$
H_0:\ \tau_1=\tau_2=\tau_3=\tau_4=0 \quad\text{vs.}\quad H_1:\ \exists\,i:\ \tau_i\neq 0.
$$
Supuesto adicional: **aditividad** (no hay interacción tratamiento×bloque); con una sola
observación por celda no es estimable y, de existir, se confundiría con el error.

## c) Tabla ANOVA

| Fuente | SC | g.l. | CM | $F$ | valor-p |
|---|---|---|---|---|---|
| Fertilizante | 183.75 | 3 | 61.25 | **50.69** | $<10^{-6}$ |
| Parcela (bloque) | 172.30 | 4 | 43.08 | 35.65 | $<10^{-6}$ |
| Error | 14.50 | 12 | 1.21 | | |
| **Total** | 370.55 | 19 | | | |

Con valor-p $<0.05$, **se rechaza $H_0$**: hay diferencias significativas entre
fertilizantes.

## d) Bloques

El factor parcela es **altamente significativo** ($F\approx35.6$, $p<10^{-6}$): las
parcelas difieren mucho en rendimiento base. Esto **confirma que bloquear fue acertado**;
de haberlo ignorado, esos $172.3$ de suma de cuadrados habrían ido al error, reduciendo
drásticamente la potencia para detectar el efecto del fertilizante.

## e) Eficiencia relativa

$$
ER=\frac{(b-1)CM_{\text{Bloq}}+b(a-1)CM_E}{(ab-1)CM_E}
=\frac{4(43.08)+5(3)(1.21)}{19(1.21)}\approx 8.3.
$$

$ER\approx 8.3 \gg 1$: el DBCA fue **mucho** más eficiente que un DCA. Habríamos
necesitado del orden de 8 veces más réplicas en un diseño completamente al azar para
lograr la misma precisión. El bloqueo valió ampliamente la pena.

## f) Tukey y recomendación

Medias por fertilizante:

| F1 | F2 | F3 | F4 |
|---|---|---|---|
| 45.4 | **51.4** | 48.4 | 43.4 |

Con $CM_E=1.21$ muy pequeño, las diferencias entre medias son nítidas: **F2** rinde
significativamente más que todos los demás (≈ 3 ton/ha sobre F3, el segundo). Se
recomienda **F2**, idealmente con una corrida de confirmación.
