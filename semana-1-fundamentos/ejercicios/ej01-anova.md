# Ejercicio 01 — ANOVA de una vía y comparaciones múltiples

> **Temas:** principios del DOE, ANOVA de una vía, verificación de supuestos, Tukey y
> Dunnett. **Datos:** [`../datos/rendimiento-catalizador.csv`](../datos/rendimiento-catalizador.csv).

## Contexto

Una planta química evalúa el efecto de **cuatro catalizadores** (C1, C2, C3, C4) sobre el
**rendimiento (%)** de una reacción. Se realizaron **6 corridas independientes** por
catalizador, asignando el orden de las 24 corridas **al azar**. Los datos:

| Catalizador | Rendimiento (%) |
|---|---|
| C1 | 63, 61, 65, 64, 66, 62 |
| C2 | 68, 70, 67, 71, 69, 72 |
| C3 | 58, 60, 59, 57, 61, 60 |
| C4 | 66, 65, 68, 67, 64, 69 |

El catalizador **C1** es el que se usa actualmente (referencia/control).

## Preguntas

**a) Diseño.** Identifica: factor, niveles, variable de respuesta, unidad experimental y
número de réplicas. ¿Qué principio del DOE se aplicó al fijar el orden de las corridas y
para qué sirve?

**b) Modelo e hipótesis.** Escribe el modelo de efectos $y_{ij}=\mu+\tau_i+\varepsilon_{ij}$
indicando los supuestos sobre $\varepsilon_{ij}$. Plantea $H_0$ y $H_1$.

**c) ANOVA.** Construye la tabla ANOVA (puedes usar R o Python). Reporta $F_0$, el valor-p
y $R^2$. ¿Se rechaza $H_0$ con $\alpha=0.05$? Interpreta.

**d) Supuestos.** Verifica normalidad (Shapiro-Wilk + Q-Q) y homogeneidad de varianzas
(Levene). ¿Se cumplen los supuestos del ANOVA? ¿Por qué importa revisarlos **antes** de
interpretar la prueba F?

**e) Tukey.** Aplica el procedimiento de Tukey HSD. ¿Qué catalizador da el mayor
rendimiento? ¿Qué parejas **no** difieren significativamente?

**f) Dunnett (opcional 🔵).** Tomando **C1 como control**, usa Dunnett para decidir qué
catalizadores difieren del actual. ¿La conclusión cambiaría tu recomendación a la planta?

**g) Conclusión práctica.** Redacta una recomendación de 2–3 líneas para la planta,
distinguiendo significancia **estadística** de importancia **práctica**.

---

> Solución en [`ej01-anova-sol.md`](ej01-anova-sol.md). Intenta resolverlo antes de mirarla.
