# ANOVA de dos vías (factorial de dos factores)

> **Objetivos.** Plantear el modelo factorial de dos factores con interacción, construir e
> interpretar su tabla ANOVA, y aplicar la estrategia correcta de análisis según haya o no
> interacción significativa.

## 1. El diseño factorial de dos factores

Dos factores: $A$ con $a$ niveles y $B$ con $b$ niveles, **cruzados** (todas las
combinaciones), con $n$ **réplicas** por celda. Total: $N = a\,b\,n$. Las réplicas son
imprescindibles: sin ellas ($n=1$) no hay grados de libertad para estimar el error
separado de la interacción.

## 2. El modelo de efectos

$$
y_{ijk} = \mu + \tau_i + \beta_j + (\tau\beta)_{ij} + \varepsilon_{ijk},
$$
$$
i=1,\dots,a;\quad j=1,\dots,b;\quad k=1,\dots,n,
$$

con:

- $\mu$ media global; $\tau_i$ efecto principal de $A$ ($\sum_i\tau_i=0$);
- $\beta_j$ efecto principal de $B$ ($\sum_j\beta_j=0$);
- $(\tau\beta)_{ij}$ efecto de **interacción** ($\sum_i(\tau\beta)_{ij}=\sum_j(\tau\beta)_{ij}=0$);
- $\varepsilon_{ijk}\sim N(0,\sigma^2)$ independientes.

### Las tres hipótesis

$$
\begin{aligned}
H_0^{A}&:\ \tau_i = 0 \ \forall i & &\text{(sin efecto principal de }A)\\
H_0^{B}&:\ \beta_j = 0 \ \forall j & &\text{(sin efecto principal de }B)\\
H_0^{AB}&:\ (\tau\beta)_{ij} = 0 \ \forall i,j & &\text{(sin interacción)}
\end{aligned}
$$

## 3. Descomposición de la variabilidad

$$
SC_T = SC_A + SC_B + SC_{AB} + SC_E,
$$

con la partición de grados de libertad:

$$
\underbrace{abn-1}_{\text{Total}} =
\underbrace{(a-1)}_{A} + \underbrace{(b-1)}_{B} + \underbrace{(a-1)(b-1)}_{AB} + \underbrace{ab(n-1)}_{\text{Error}} .
$$

- $SC_A,\ SC_B$: variabilidad de los efectos principales.
- $SC_{AB}$: variabilidad debida a la interacción.
- $SC_E$: error puro, estimable **gracias a las réplicas**.

## 4. La tabla ANOVA de dos vías

| Fuente | Suma de cuadrados | g.l. | Cuadrado medio | $F_0$ |
|---|---|---|---|---|
| Factor $A$ | $SC_A$ | $a-1$ | $CM_A$ | $CM_A/CM_E$ |
| Factor $B$ | $SC_B$ | $b-1$ | $CM_B$ | $CM_B/CM_E$ |
| Interacción $AB$ | $SC_{AB}$ | $(a-1)(b-1)$ | $CM_{AB}$ | $CM_{AB}/CM_E$ |
| Error | $SC_E$ | $ab(n-1)$ | $CM_E$ | |
| **Total** | $SC_T$ | $abn-1$ | | |

Cada efecto se prueba dividiendo su cuadrado medio entre $CM_E$ (modelo de **efectos
fijos**). $CM_E$ es el estimador insesgado de $\sigma^2$.

## 5. Estrategia de interpretación

El **orden** del análisis es crucial:

1. **Probar primero la interacción** $AB$.
2. **Si $AB$ es significativa:**
   - Los factores **actúan conjuntamente**. Interpretar los efectos principales por
     separado puede ser engañoso.
   - Analizar la **gráfica de interacción** y, si procede, comparar las medias de las
     **celdas** (combinaciones de niveles), p. ej. con efectos simples o comparaciones de
     medias dentro de cada nivel del otro factor.
3. **Si $AB$ no es significativa:**
   - El modelo es esencialmente **aditivo**. Interpretar los **efectos principales** de
     $A$ y $B$ directamente, con comparaciones múltiples (Tukey) sobre cada factor.
   - Opcionalmente, reajustar un modelo sin el término de interacción para ganar grados
     de libertad en el error.

> **Regla de oro.** Mira la interacción **antes** que los efectos principales.

## 6. Supuestos y diagnóstico

Idénticos al ANOVA de una vía, verificados sobre los residuales
$e_{ijk}=y_{ijk}-\hat{y}_{ijk}$:

1. Normalidad (Q-Q, Shapiro-Wilk).
2. Homogeneidad de varianzas entre celdas (residuales vs. ajustados; Levene).
3. Independencia (residuales vs. orden de corrida; la aleatorización la respalda).

A diferencia del DBCA, aquí **sí** se modela la interacción explícitamente (hay réplicas),
de modo que no se requiere el supuesto de aditividad.

## 7. Diseños balanceados vs. desbalanceados

- **Balanceado** ($n$ igual en todas las celdas): las sumas de cuadrados son ortogonales
  y la partición es única.
- **Desbalanceado**: el orden de entrada de los términos importa. Se usan **sumas de
  cuadrados de tipo II o III** (en R, `car::Anova`; en Python, `anova_lm(..., typ=2)` o
  `typ=3`). Conviene, siempre que se pueda, **diseñar balanceado**.

## 8. Modelo de efectos aleatorios y mixtos (nota)

Si los niveles de un factor son una **muestra** de una población mayor (p. ej., lotes
elegidos al azar), ese factor es **aleatorio**, y los denominadores de las pruebas $F$
cambian (se usan los cuadrados medios apropiados según el modelo). El caso con un factor
fijo y otro aleatorio es un **modelo mixto**. Aquí trabajamos sobre todo el caso de
**efectos fijos**; los modelos mixtos se introducen como tema opcional.

---

### Para repasar

- En un factorial $3\times4$ con $n=3$, ¿cuántos g.l. tiene el error?
- Si la interacción es significativa, ¿qué gráfico interpretas primero?
- ¿Por qué necesitas réplicas para estimar la interacción y el error por separado?

### Referencias

- Montgomery, D. C. _Design and Analysis of Experiments_, cap. 5.
- Gutiérrez Pulido & de la Vara Salazar, _Análisis y diseño de experimentos_, cap. 5.
