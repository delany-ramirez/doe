# Cheatsheet de Diseño de Experimentos

Resumen de consulta rápida. Notación de Montgomery.

## 1. Elección del diseño

```
¿Cuántos factores y qué objetivo?
│
├─ 1 factor, comparar medias ............... ANOVA de una vía (S1)
│     └─ con una fuente de ruido conocida .. DBCA, bloques (S2)
│     └─ dos fuentes de ruido .............. Cuadrado latino (S2 🔵)
│
├─ 2–4 factores, ver interacciones ......... Factorial completo a^k / 2^k (S2–S3)
│
├─ muchos factores, cribado ................ Fraccionado 2^(k-p), Plackett-Burman (S3)
│
└─ optimizar respuesta (cuantitativa) ...... RSM: 1er orden + ascenso → CCD/BB (S4)
```

## 2. Tablas ANOVA (g.l.)

**Una vía** ($a$ tratamientos, $n$ réplicas, $N=an$):

| Fuente | g.l. |
|---|---|
| Tratamientos | $a-1$ |
| Error | $N-a$ |
| Total | $N-1$ |

**DBCA** ($a$ tratamientos, $b$ bloques):

| Fuente | g.l. |
|---|---|
| Tratamientos | $a-1$ |
| Bloques | $b-1$ |
| Error | $(a-1)(b-1)$ |
| Total | $ab-1$ |

**Dos vías con interacción** ($a\times b$, $n$ réplicas):

| Fuente | g.l. |
|---|---|
| $A$ | $a-1$ |
| $B$ | $b-1$ |
| $AB$ | $(a-1)(b-1)$ |
| Error | $ab(n-1)$ |
| Total | $abn-1$ |

## 3. Fórmulas clave

- Estadístico F: $F_0 = CM_{\text{efecto}}/CM_E$; se rechaza si $F_0 > F_{\alpha,\,gl_1,\,gl_2}$.
- $R^2 = SC_{\text{efecto}}/SC_T$.
- Tukey HSD: $|\bar{y}_i-\bar{y}_j| > q_{\alpha,a,N-a}\sqrt{CM_E/n}$.
- Error por familia: $\alpha_{EF}\approx 1-(1-\alpha)^c$ con $c$ comparaciones.
- Eficiencia relativa DBCA vs. DCA: $ER=\dfrac{(b-1)CM_{Bloq}+b(a-1)CM_E}{(ab-1)CM_E}$.
- Efecto en $2^k$: $\text{Efecto}=\text{contraste}/(n\,2^{k-1})$; $\beta=\text{Efecto}/2$.

## 4. $2^k$ y fraccionados

- **Réplica única:** sin g.l. de error → **gráfico de probabilidad normal de efectos**.
- **Resolución:** III (principal↔2fi), IV (principal limpio; 2fi↔2fi), V (principal y 2fi
  limpios).
- **Alias:** multiplicar el efecto por la **relación de definición** ($I=\dots$).
- **Escasez de efectos:** dominan principales y algunas 2fi; las de orden alto son ruido.

## 5. RSM

| Etapa | Modelo | Diseño |
|---|---|---|
| Lejos del óptimo | 1er orden + curvatura | $2^k$ + puntos centrales → **ascenso máx. pendiente** |
| Cerca del óptimo | 2.º orden (cuadrático) | **CCD** (rotable $\alpha=(2^k)^{1/4}$) o **Box-Behnken** |

- Punto estacionario: $\mathbf{x}_s=-\tfrac12\mathbf{B}^{-1}\mathbf{b}$.
- Eigenvalores de $\mathbf{B}$: todos $<0$ máx · todos $>0$ mín · mixtos silla.

## 6. Verificación de supuestos (siempre)

| Supuesto | Gráfico | Prueba |
|---|---|---|
| Normalidad | Q-Q de residuales | Shapiro-Wilk |
| Homocedasticidad | residuales vs. ajustados | Levene / Bartlett |
| Independencia | residuales vs. orden | Durbin-Watson |

Si fallan: **Box-Cox** (transformar) o **Kruskal-Wallis** (no paramétrico).

## 7. Funciones por software

| Tarea | R | Python |
|---|---|---|
| ANOVA | `aov`, `lm` + `anova` | `ols` + `anova_lm` |
| Supuestos | `shapiro.test`, `car::leveneTest` | `scipy.stats.shapiro`, `levene` |
| Tukey | `TukeyHSD` | `pairwise_tukeyhsd` |
| Dunnett | `multcomp::glht(..., mcp(f='Dunnett'))` | `scipy.stats.dunnett` |
| Box-Cox | `MASS::boxcox` | `scipy.stats.boxcox` |
| Kruskal-Wallis | `kruskal.test` | `scipy.stats.kruskal` |
| RSM | `rsm::rsm`, `canonical` | `ols` cuadrático + álgebra de `numpy` |
