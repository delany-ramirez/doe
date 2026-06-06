# Diseño en bloques completos al azar (DBCA)

> **Objetivos.** Entender el bloqueo como técnica para controlar variabilidad conocida,
> plantear y analizar el diseño en bloques completos al azar (DBCA), e interpretar su
> tabla ANOVA y la eficiencia frente a un diseño completamente al azar.

## 1. Del completamente al azar al bloqueo

En la Semana 1 estudiamos el **diseño completamente al azar (DCA)**: un solo factor con
las unidades asignadas por completo al azar. El DCA supone que las unidades
experimentales son **homogéneas**. Cuando no lo son —hay una fuente de variabilidad
**conocida** y ajena al factor de interés (lotes de material, días, operarios, hornos,
parcelas de terreno)— esa heterogeneidad infla el error experimental y puede enmascarar
el efecto de los tratamientos.

La solución es el **bloqueo**: agrupar las unidades en **bloques** homogéneos y aplicar
**todos** los tratamientos dentro de cada bloque. Así, la comparación entre tratamientos
se hace en condiciones similares y la variabilidad entre bloques se aísla del error.

> **Principio (Semana 1).** _Block what you can, randomize what you cannot._

## 2. El diseño DBCA

En un **diseño en bloques completos al azar** (DBCA, _randomized complete block design_):

- Hay $a$ **tratamientos** y $b$ **bloques**.
- Cada bloque es **completo**: contiene las $a$ unidades, una por tratamiento.
- Dentro de cada bloque, los tratamientos se asignan a las unidades **al azar**.
- Total de observaciones: $N = a\,b$ (una observación por celda tratamiento×bloque).

El bloque es un factor **de ruido** que controlamos pero cuyo efecto no nos interesa por
sí mismo; el tratamiento es el factor de interés.

## 3. Modelo estadístico

$$
y_{ij} = \mu + \tau_i + \beta_j + \varepsilon_{ij},
\qquad i=1,\dots,a;\quad j=1,\dots,b,
$$

donde:

- $\mu$ es la media global,
- $\tau_i$ es el efecto del **tratamiento** $i$, con $\sum_i \tau_i = 0$,
- $\beta_j$ es el efecto del **bloque** $j$, con $\sum_j \beta_j = 0$,
- $\varepsilon_{ij}\sim N(0,\sigma^2)$ independientes.

Es un modelo **aditivo sin interacción**: se asume que el efecto del tratamiento es el
mismo en todos los bloques (tratamiento y bloque no interactúan). Esta es una hipótesis
clave del DBCA.

### Hipótesis de interés

$$
H_0:\ \tau_1=\cdots=\tau_a=0
\qquad\text{vs.}\qquad
H_1:\ \exists\, i:\ \tau_i\neq 0.
$$

Aunque también podría probarse $\beta_j=0$, los bloques se incluyen para **controlar**
variabilidad, no para probar hipótesis sobre ellos.

## 4. Descomposición de la variabilidad

La suma de cuadrados total se reparte ahora en **tres** componentes:

$$
SC_T = SC_{\text{Trat}} + SC_{\text{Bloq}} + SC_E,
$$

$$
\underbrace{\sum_{i}\sum_{j}(y_{ij}-\bar{y}_{\cdot\cdot})^2}_{SC_T}
=
\underbrace{b\sum_{i}(\bar{y}_{i\cdot}-\bar{y}_{\cdot\cdot})^2}_{SC_{\text{Trat}}}
+
\underbrace{a\sum_{j}(\bar{y}_{\cdot j}-\bar{y}_{\cdot\cdot})^2}_{SC_{\text{Bloq}}}
+
SC_E .
$$

La clave: $SC_{\text{Bloq}}$ **se extrae** de lo que en un DCA habría sido error. Al
sacar la variabilidad entre bloques, $CM_E$ se reduce y la prueba de tratamientos gana
**precisión y potencia**.

## 5. La tabla ANOVA del DBCA

| Fuente | Suma de cuadrados | g.l. | Cuadrado medio | $F_0$ |
|---|---|---|---|---|
| Tratamientos | $SC_{\text{Trat}}$ | $a-1$ | $CM_{\text{Trat}}$ | $CM_{\text{Trat}}/CM_E$ |
| Bloques | $SC_{\text{Bloq}}$ | $b-1$ | $CM_{\text{Bloq}}$ | $(CM_{\text{Bloq}}/CM_E)$ |
| Error | $SC_E$ | $(a-1)(b-1)$ | $CM_E$ | |
| **Total** | $SC_T$ | $ab-1$ | | |

Los grados de libertad del error, $(a-1)(b-1)$, son **menos** que en un DCA con el mismo
$N$ (que tendría $a(b-1)$). Se "pagan" $b-1$ grados de libertad por estimar el efecto de
bloque: es el precio del bloqueo, rentable cuando los bloques son realmente distintos.

La prueba principal es $F_0 = CM_{\text{Trat}}/CM_E$, que bajo $H_0$ sigue una
$F_{a-1,\,(a-1)(b-1)}$.

## 6. Supuestos y diagnóstico

Los mismos que el ANOVA de una vía, más la **aditividad**:

1. Normalidad de los residuales.
2. Homogeneidad de varianzas.
3. Independencia.
4. **Aditividad** (no interacción tratamiento×bloque). Con una sola observación por
   celda, la interacción no puede estimarse; si existe, se confunde con el error. La
   **prueba de no aditividad de Tukey** (1 g.l.) ayuda a detectarla.

El análisis de residuales (residuales vs. ajustados, vs. bloques, Q-Q) procede igual que
en la Semana 1.

## 7. Eficiencia relativa del bloqueo

¿Valió la pena bloquear? La **eficiencia relativa** del DBCA respecto a un DCA compara la
varianza del error que se habría tenido sin bloquear con la obtenida:

$$
ER = \frac{(b-1)\,CM_{\text{Bloq}} + b(a-1)\,CM_E}{(ab-1)\,CM_E}.
$$

- $ER > 1$ indica que el bloqueo **mejoró** la precisión (equivale a haber necesitado
  $ER$ veces más réplicas en un DCA para igualar la precisión).
- Si $ER \approx 1$, los bloques no aportaron y se perdieron grados de libertad: el
  bloqueo no estaba justificado.

> **Regla práctica.** Si **sospechas** que una fuente de variabilidad importa, bloquéala:
> el costo (perder algunos g.l.) es pequeño frente al beneficio si la sospecha es cierta.

## 8. Datos faltantes

Si se pierde una observación, el diseño deja de estar balanceado. Se puede **estimar el
valor faltante** por mínimos cuadrados o, mejor, ajustar el modelo con software que
maneje el desbalance (mínimos cuadrados generales). Los paquetes modernos (`lm`/`aov` en
R, `ols` en Python) lo resuelven directamente.

---

### Para repasar

- ¿Por qué bloquear reduce el cuadrado medio del error?
- ¿Cuántos grados de libertad tiene el error en un DBCA con $a=4$, $b=5$?
- Si la eficiencia relativa es 1.05, ¿valió la pena bloquear? ¿Y si es 2.5?

### Referencias

- Montgomery, D. C. _Design and Analysis of Experiments_, cap. 4.
- Gutiérrez Pulido & de la Vara Salazar, _Análisis y diseño de experimentos_, cap. 4.
