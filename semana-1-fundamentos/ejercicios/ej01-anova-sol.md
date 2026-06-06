# Solución — Ejercicio 01

> Valores obtenidos con los datos de
> [`../datos/rendimiento-catalizador.csv`](../datos/rendimiento-catalizador.csv). Pueden
> reproducirse con el notebook [`../notebooks/01-anova-una-via_py.ipynb`](../notebooks/01-anova-una-via_py.ipynb)
> adaptando el archivo de datos.

## a) Diseño

- **Factor:** tipo de catalizador (cualitativo).
- **Niveles:** 4 (C1, C2, C3, C4) → diseño **de un solo factor con efectos fijos**.
- **Respuesta:** rendimiento (%).
- **Unidad experimental:** una corrida de la reacción.
- **Réplicas:** $n=6$ por nivel; total $N=24$.
- **Principio aplicado:** **aleatorización** del orden de las 24 corridas. Reparte el
  efecto de variables no controladas (deriva de equipos, hora del día) entre los
  tratamientos, evitando sesgos y justificando la independencia de los errores.

## b) Modelo e hipótesis

$$
y_{ij} = \mu + \tau_i + \varepsilon_{ij}, \qquad i=1,\dots,4;\ j=1,\dots,6,
$$
con $\varepsilon_{ij}\sim N(0,\sigma^2)$ **independientes** y $\sum_i \tau_i = 0$.

$$
H_0:\ \tau_1=\tau_2=\tau_3=\tau_4=0
\qquad\text{vs.}\qquad
H_1:\ \exists\, i:\ \tau_i\neq 0.
$$

## c) Tabla ANOVA

| Fuente | SC | g.l. | CM | $F_0$ | valor-p |
|---|---|---|---|---|---|
| Catalizador | 350.00 | 3 | 116.67 | **36.84** | $2.4\times10^{-8}$ |
| Error | 63.33 | 20 | 3.17 | | |
| **Total** | 413.33 | 23 | | | |

$$
R^2 = \frac{350.00}{413.33} = 0.847.
$$

Como valor-p $\approx 2.4\times10^{-8} < 0.05$, **se rechaza $H_0$**: al menos un
catalizador produce un rendimiento medio distinto. El factor explica el **84.7 %** de la
variabilidad.

Medias por tratamiento:

| | C1 | C2 | C3 | C4 |
|---|---|---|---|---|
| Media (%) | 63.5 | **69.5** | 59.2 | 66.5 |

## d) Supuestos

- **Normalidad:** Shapiro-Wilk sobre los residuales, $p\approx0.13 > 0.05$ → no se
  rechaza la normalidad; el Q-Q muestra los puntos alineados.
- **Homocedasticidad:** Levene, $p\approx0.88 > 0.05$ → varianzas homogéneas; el gráfico
  de residuales vs. ajustados no muestra embudo.

Ambos supuestos se cumplen. Importa revisarlos **antes** porque la validez de la prueba F
descansa en ellos; si fallaran, $F_0$ y el valor-p podrían ser engañosos y habría que
transformar la respuesta o usar una alternativa no paramétrica.

## e) Tukey HSD ($\alpha=0.05$)

| Comparación | Diferencia | valor-p ajustado | ¿Difieren? |
|---|---|---|---|
| C2 − C1 | 6.00 | 0.0001 | Sí |
| C3 − C1 | −4.33 | 0.0022 | Sí |
| C4 − C1 | 3.00 | 0.0389 | Sí |
| C3 − C2 | −10.33 | <0.0001 | Sí |
| C4 − C2 | −3.00 | 0.0389 | Sí |
| C4 − C3 | 7.33 | <0.0001 | Sí |

**Todas** las parejas difieren significativamente. El **catalizador C2** da el mayor
rendimiento (69.5 %), seguido de C4 (66.5), C1 (63.5) y C3 (59.2). En este conjunto no
hay parejas estadísticamente iguales.

## f) Dunnett (control = C1) 🔵

Comparando cada catalizador contra el control C1, las tres diferencias (C2−C1 = +6.0,
C3−C1 = −4.33, C4−C1 = +3.0) resultan significativas. C2 y C4 **superan** al actual; C3 es
**peor**. (Dunnett solo hace 3 comparaciones en vez de las 6 de Tukey, por lo que es algo
más potente para esta pregunta concreta.)

## g) Conclusión práctica

> El tipo de catalizador afecta de forma marcada el rendimiento (ANOVA, $p<10^{-7}$,
> $R^2=0.85$). Se recomienda **cambiar a C2**, que rinde en promedio 6 puntos porcentuales
> más que el catalizador actual C1, diferencia estadística y prácticamente relevante.
> Debe evitarse C3. Conviene una corrida de **confirmación** con C2 antes de adoptarlo en
> producción.
