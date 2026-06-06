# 🔵 Solución — Ejercicio 02 (opcional)

## Parte A — ¿Transformar?

**1.** El patrón de **embudo** indica **heterocedasticidad** (la varianza no es constante,
crece con la media); la curvatura del Q-Q indica **no normalidad** (colas pesadas o
asimetría). La prueba F asume varianza constante y normalidad de los errores, así que con
ambos supuestos rotos el valor-p puede estar sesgado y las conclusiones no son confiables.

**2.** Con $\hat{\lambda}=0.07$ y un IC $[-0.15,\,0.32]$ que **contiene el 0**, se recomienda
la transformación **logarítmica** ($\lambda=0$): es interpretable (las diferencias en
escala log son razones/multiplicativas) y estadísticamente compatible con el óptimo. El
ANOVA se realiza sobre $\ln(\text{tiempo de vida})$.

**3.** Volver a **analizar los residuales** del modelo ajustado en la escala transformada:
re-graficar residuales vs. ajustados (que desaparezca el embudo) y el Q-Q (que se
enderece), y repetir Shapiro-Wilk y Levene. Solo si los supuestos ya se cumplen se da por
válida la prueba F.

## Parte B — Kruskal-Wallis

**4.** Hipótesis:
$$
H_0:\ \text{las 4 distribuciones de tiempo son iguales (misma localización/mediana)},
$$
$$
H_1:\ \text{al menos una difiere en localización}.
$$
A diferencia del ANOVA paramétrico, **no** se asume normalidad: la prueba trabaja con los
**rangos** de las observaciones, no con sus valores, y la hipótesis se expresa en términos
de distribuciones/medianas en lugar de medias.

**5.** Con los datos de coagulación:
$$
H \approx 17.0, \qquad \text{g.l.}=3, \qquad p \approx 0.0007.
$$
Como $p < 0.05$, **se rechaza $H_0$**: al menos una dieta difiere. El resultado es
coherente con el ANOVA paramétrico del notebook 01. Para identificar **cuáles** dietas
difieren se usaría la prueba **post-hoc de Dunn** (con ajuste de Bonferroni o Holm).

**6.** Si los datos fueran realmente normales y homocedásticos, Kruskal-Wallis sería
**menos potente** que el ANOVA (su eficiencia asintótica relativa es ≈ 0.955, es decir,
pierde ~5 %): podría no detectar diferencias que el ANOVA sí detectaría, y además no
entrega estimaciones de magnitud de efecto tan ricas como el modelo paramétrico. Por eso
las pruebas no paramétricas se reservan para cuando los supuestos **no** se cumplen.
