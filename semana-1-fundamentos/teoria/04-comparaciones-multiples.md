# Comparaciones múltiples: Tukey y Dunnett

> **Objetivos.** Entender por qué hace falta controlar el error al comparar varias medias,
> y aplicar los procedimientos de Tukey (todas las parejas) y Dunnett (todos contra un
> control), distinguiendo cuándo usar cada uno.

## 1. El problema de las comparaciones múltiples

El ANOVA (documento 03) responde una pregunta global: *"¿hay alguna diferencia entre los
$a$ tratamientos?"* Si se **rechaza** $H_0$, sabemos que al menos un par de medias
difiere, pero **no cuál**. El paso siguiente es comparar las medias entre sí.

La tentación es hacer todas las pruebas $t$ por parejas. El problema es la **inflación
del error tipo I**: con $a$ tratamientos hay $\binom{a}{2}=\frac{a(a-1)}{2}$ parejas, y
cada prueba tiene su propia probabilidad $\alpha$ de falsa alarma.

### 1.1 Error por comparación vs. error por familia

- **Error por comparación** ($\alpha_{PC}$): el de **una** prueba individual.
- **Error por familia** ($\alpha_{EF}$, _family-wise error rate_): probabilidad de
  cometer **al menos un** error tipo I en **todo** el conjunto de comparaciones.

Si las comparaciones fueran independientes,

$$
\alpha_{EF} = 1 - (1 - \alpha_{PC})^{c},
$$

con $c$ el número de comparaciones. Por ejemplo, con $a=5$ tratamientos hay $c=10$
parejas; tomando $\alpha_{PC}=0.05$,

$$
\alpha_{EF} \approx 1 - 0.95^{10} \approx 0.40.
$$

¡Un 40 % de probabilidad de declarar alguna diferencia falsa! Los procedimientos de
comparación múltiple **controlan $\alpha_{EF}$** en el nivel deseado.

## 2. Procedimiento de Tukey (HSD)

El método de **Tukey**, llamado **HSD** (_Honestly Significant Difference_, diferencia
honestamente significativa), está pensado para comparar **todas las parejas** de medias
controlando exactamente el error por familia.

### 2.1 Estadístico y diferencia crítica

Se basa en la distribución del **rango studentizado** $q_{\alpha,\,a,\,N-a}$, que depende
del número de tratamientos $a$ y de los grados de libertad del error. Dos medias se
declaran **distintas** si

$$
\left|\bar{y}_{i\cdot} - \bar{y}_{j\cdot}\right| > T_\alpha,
\qquad
T_\alpha = q_{\alpha,\,a,\,N-a}\,\sqrt{\frac{CM_E}{n}},
$$

donde $T_\alpha$ es la **diferencia honestamente significativa** y $CM_E$ proviene de la
tabla ANOVA. (Para diseños desbalanceados se usa la versión Tukey-Kramer, que reemplaza
$\sqrt{CM_E/n}$ por $\sqrt{\frac{CM_E}{2}\left(\frac{1}{n_i}+\frac{1}{n_j}\right)}$.)

### 2.2 Intervalos de confianza simultáneos

Tukey entrega además **intervalos de confianza simultáneos** para cada diferencia
$\mu_i-\mu_j$:

$$
\left(\bar{y}_{i\cdot}-\bar{y}_{j\cdot}\right) \pm T_\alpha .
$$

Si el intervalo **no contiene el 0**, la diferencia es significativa. Estos IC tienen una
confianza **conjunta** del $100(1-\alpha)\%$ para todas las parejas a la vez.

### 2.3 Cuándo usarlo

- Cuando interesan **todas** las comparaciones por parejas.
- Es el procedimiento por defecto, recomendado y de uso más extendido tras un ANOVA
  significativo.

## 3. Procedimiento de Dunnett

El método de **Dunnett** compara cada tratamiento **contra un único control** (o
referencia), sin comparar los tratamientos entre sí.

### 3.1 Idea

Hay $a-1$ comparaciones (cada tratamiento frente al control). Se declara que el
tratamiento $i$ difiere del control si

$$
\left|\bar{y}_{i\cdot} - \bar{y}_{\text{control}}\right|
> d_{\alpha,\,a-1,\,N-a}\,\sqrt{CM_E\left(\frac{1}{n_i}+\frac{1}{n_{\text{control}}}\right)},
$$

donde $d_{\alpha,\,a-1,\,N-a}$ proviene de las **tablas de Dunnett**, construidas
específicamente para controlar el error por familia de este conjunto reducido de
comparaciones.

### 3.2 Por qué es más potente que Tukey aquí

Como Dunnett solo realiza $a-1$ comparaciones (en lugar de las $\binom{a}{2}$ de Tukey),
"gasta" menos su presupuesto de error y resulta **más potente** para detectar diferencias
frente al control. Por eso, **si tu pregunta es "¿qué tratamientos superan al control?",
Dunnett es preferible a Tukey.**

### 3.3 Cuándo usarlo

- Hay un **tratamiento de referencia natural**: placebo, método actual, condición
  estándar.
- El interés está en *tratamiento vs. control*, no en *tratamiento vs. tratamiento*.

## 4. Otros métodos (panorama)

| Método | Controla | Uso típico | Comentario |
|---|---|---|---|
| **Tukey HSD** | $\alpha_{EF}$ exacto | Todas las parejas | Recomendado por defecto |
| **Dunnett** | $\alpha_{EF}$ | Todos vs. control | Más potente para ese caso |
| **Bonferroni** | $\alpha_{EF}$ (cota) | Pocas comparaciones planeadas | Simple pero **conservador** |
| **Fisher LSD** | solo $\alpha_{PC}$ | — | No controla familia; poco recomendable |
| **Scheffé** | $\alpha_{EF}$ | Contrastes arbitrarios | Muy general, poco potente para parejas |

**Bonferroni** simplemente usa $\alpha_{PC}=\alpha/c$ para cada una de las $c$
comparaciones; es válido siempre pero pierde potencia si $c$ es grande. **Fisher LSD** no
ajusta nada (solo es admisible como prueba protegida cuando el ANOVA ya fue
significativo y $a=3$).

## 5. Contrastes (planeados vs. exploratorios)

Cuando las comparaciones de interés se definen **antes** de ver los datos, pueden
expresarse como **contrastes**: combinaciones lineales de medias

$$
C = \sum_{i=1}^{a} c_i\,\mu_i, \qquad \sum_{i=1}^{a} c_i = 0.
$$

Por ejemplo, $\mu_1 - \tfrac{1}{2}(\mu_2+\mu_3)$ compara el tratamiento 1 con el promedio
de 2 y 3. Las comparaciones **planeadas** (a priori) son más potentes que la búsqueda
exploratoria **a posteriori** (_post hoc_) de Tukey, porque se hacen menos pruebas. La
distinción importa: explorar todas las parejas y luego "elegir" la diferencia grande es
hacer trampa estadística si no se ajusta el error.

## 6. En la práctica

- **R:** `TukeyHSD(aov_model)`; para Dunnett, `glht()` del paquete **multcomp** con
  `mcp(factor = "Dunnett")`. El paquete **emmeans** unifica medias marginales y
  comparaciones (`emmeans()` + `contrast()` / `pairs()`).
- **Python:** `statsmodels.stats.multicomp.pairwise_tukeyhdsd`; para Dunnett,
  `scipy.stats.dunnett`. También `MultiComparison` de statsmodels.

Los notebooks de la Fase 2 implementan Tukey y Dunnett sobre el mismo conjunto de datos
para contrastar resultados.

## 7. Reporte de resultados

Buenas prácticas al comunicar comparaciones múltiples:

1. Indicar **qué procedimiento** se usó y el nivel $\alpha_{EF}$.
2. Reportar las **diferencias estimadas** con sus **intervalos de confianza
   simultáneos**, no solo "significativo / no significativo".
3. Acompañar con un **gráfico** (medias con IC, o el diagrama de diferencias de Tukey).
4. Usar **letras de agrupación** (_compact letter display_): tratamientos que comparten
   letra no difieren significativamente.

---

### Para repasar

- Con $a=4$ tratamientos, ¿cuántas parejas compara Tukey? ¿Cuántas Dunnett?
- ¿Por qué Dunnett es más potente que Tukey cuando solo interesa el control?
- ¿Qué diferencia hay entre una comparación planeada y una _post hoc_?

### Referencias

- Montgomery, D. C. _Design and Analysis of Experiments_, cap. 3 (§3.5).
- Hsu, J. C. _Multiple Comparisons: Theory and Methods_.
