# 🔵 Ejercicio 02 (opcional) — Transformaciones y Kruskal-Wallis

> **Temas:** diagnóstico de supuestos, Box-Cox, Kruskal-Wallis. **Datos:**
> [`../datos/tiempo-coagulacion.csv`](../datos/tiempo-coagulacion.csv).

## Parte A — ¿Transformar?

Un ingeniero ajusta un ANOVA de una vía a un tiempo de vida (horas) medido en 4 niveles de
temperatura. Al graficar **residuales vs. valores ajustados** observa un claro patrón de
**embudo** (la dispersión crece con la media) y el Q-Q de residuales se curva en las colas.

1. ¿Qué supuesto(s) está(n) violándose? ¿Por qué no es prudente interpretar la tabla
   ANOVA tal cual?
2. El método de Box-Cox arroja $\hat{\lambda}=0.07$ con un intervalo de confianza
   $[-0.15,\,0.32]$. ¿Qué transformación recomiendas y por qué? ¿Sobre qué escala harías
   el ANOVA?
3. Tras transformar, ¿qué deberías volver a revisar antes de dar por válido el análisis?

## Parte B — Kruskal-Wallis

Con los datos de **tiempos de coagulación** según dieta (A, B, C, D):

4. Plantea las hipótesis de la prueba de Kruskal-Wallis. ¿En qué se diferencian de las del
   ANOVA paramétrico?
5. Ejecuta `kruskal.test` (R) o `scipy.stats.kruskal` (Python). Reporta el estadístico
   $H$ y el valor-p. ¿Se rechaza $H_0$ con $\alpha=0.05$?
6. Si los datos **fueran** perfectamente normales y homocedásticos, ¿qué desventaja
   tendría usar Kruskal-Wallis en lugar del ANOVA?

---

> Solución en [`ej02-no-parametricas-sol.md`](ej02-no-parametricas-sol.md).
