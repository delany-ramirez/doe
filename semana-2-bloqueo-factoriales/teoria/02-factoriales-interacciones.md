# Diseños factoriales: efectos principales e interacciones

> **Objetivos.** Comprender por qué los diseños factoriales son superiores a variar un
> factor a la vez, y dominar los conceptos de **efecto principal** e **interacción**, base
> de todo el diseño factorial.

## 1. ¿Por qué factorial?

Cuando intervienen **dos o más factores**, la estrategia ingenua es el método **un factor
a la vez** (OFAT): fijar todos los factores y variar uno, luego otro, etc. Tiene dos
defectos graves:

1. **No detecta interacciones**: nunca varía dos factores simultáneamente, así que no
   puede ver si el efecto de uno depende del nivel del otro.
2. **Es ineficiente**: usa más corridas para estimar los efectos con menos precisión.

El **diseño factorial** investiga **todas las combinaciones** de niveles de los factores.
Con factores $A$ (niveles $a$) y $B$ (niveles $b$), hay $a\times b$ tratamientos. Sus
ventajas:

- **Eficiencia**: cada observación se usa para estimar los efectos de *todos* los
  factores (las réplicas se comparten).
- **Detecta interacciones**.
- Las conclusiones son **válidas en un rango** de condiciones, no en un único punto.

## 2. Efecto principal

El **efecto principal** de un factor es el cambio promedio en la respuesta al cambiar su
nivel, **promediando** sobre los niveles del otro factor.

Para un factorial $2\times2$ con factores $A$ y $B$ en niveles bajo ($-$) y alto ($+$),
denotando por $y_{AB}$ la respuesta media en cada combinación:

$$
\text{Efecto } A = \frac{y_{+-}+y_{++}}{2} - \frac{y_{--}+y_{-+}}{2}.
$$

Es la diferencia entre la respuesta media con $A$ alto y con $A$ bajo. Análogamente para
$B$.

## 3. Interacción

Hay **interacción** entre $A$ y $B$ cuando el efecto de un factor **depende del nivel**
del otro. En el factorial $2\times2$:

$$
\text{Interacción } AB = \frac{y_{++}-y_{-+}}{2} - \frac{y_{+-}-y_{--}}{2}.
$$

Es la diferencia entre "el efecto de $A$ cuando $B$ es alto" y "el efecto de $A$ cuando
$B$ es bajo", dividida entre 2. Si ambas valen lo mismo, no hay interacción ($AB=0$).

> **Idea clave.** La interacción es **simétrica**: que el efecto de $A$ dependa de $B$ es
> lo mismo que el efecto de $B$ dependa de $A$.

### 3.1 La gráfica de interacción

La herramienta visual esencial. Se grafica la respuesta media frente a un factor, con una
línea por cada nivel del otro:

- **Líneas paralelas** ⇒ **no hay interacción** (los efectos se suman, son aditivos).
- **Líneas no paralelas** (se cruzan o divergen) ⇒ **hay interacción**.

```
Sin interacción            Con interacción
 y |   B+ ___              y |   B+   __
   |   ___/                  |     \ /
   | _/    B-                |      X
   |/   ___/                 |   __/ \__ B-
   +-----------A             +-----------A
```

### 3.2 Interacción y efectos principales

**Advertencia importante:** cuando hay una interacción **fuerte**, los efectos
principales pueden ser **engañosos** o carecer de sentido práctico, porque "el efecto
promedio de $A$" oculta que $A$ ayuda en un nivel de $B$ y perjudica en otro. La regla:

> **Si la interacción es significativa, interprétala primero**; los efectos principales
> de los factores involucrados se interpretan con cautela (o no se interpretan por
> separado).

## 4. Notación y generalización

- Un factorial con factores $A, B, C, \dots$ se denota por el producto de sus niveles:
  $a\times b\times c$.
- Caso especial muy usado: todos los factores con **dos niveles**, el diseño $2^k$
  (Semana 3).
- Con $k$ factores aparecen efectos principales, interacciones **dobles** ($AB$, $AC$,
  $BC$…), **triples** ($ABC$…), etc. Las interacciones de orden alto suelen ser pequeñas
  (principio de **escasez de efectos**, _sparsity of effects_).

## 5. El modelo de efectos (dos factores)

Para dos factores con interacción:

$$
y_{ijk} = \mu + \tau_i + \beta_j + (\tau\beta)_{ij} + \varepsilon_{ijk},
$$

donde $\tau_i$ y $\beta_j$ son los efectos principales de $A$ y $B$, y $(\tau\beta)_{ij}$
es el efecto de **interacción**. El análisis formal (ANOVA de dos vías, con réplicas para
poder estimar la interacción) se desarrolla en el documento 03.

## 6. Por qué el factorial es más eficiente (intuición)

Para estimar el efecto de $A$ con la misma precisión que un OFAT, el factorial usa
**todas** las corridas (las de $B$ bajo y las de $B$ alto contribuyen al efecto de $A$).
En un OFAT, solo las corridas donde se varió $A$ aportan. Con el mismo presupuesto de
corridas, el factorial estima **más efectos** (incluida la interacción) con **igual o
mejor** precisión. La ventaja crece con el número de factores.

---

### Para repasar

- Define con tus palabras qué significa que dos factores interactúen.
- Si en una gráfica de interacción las líneas son casi paralelas, ¿qué concluyes?
- ¿Por qué un efecto principal puede ser engañoso si hay interacción fuerte?

### Referencias

- Montgomery, D. C. _Design and Analysis of Experiments_, cap. 5.
- Box, Hunter & Hunter, _Statistics for Experimenters_, caps. 5–6.
