# Solución — Ejercicio 02 (factorial fraccionado $2^{5-2}$)

## a) Tamaño de la fracción

Con $k=5$ y $p=2$: $2^{5-2}=2^3=8$ corridas. El factorial completo sería $2^5=32$
corridas, así que el diseño usa **una cuarta parte** ($1/2^2$) del completo.

## b) Relación de definición completa

De los generadores:
$$
D=AB \ \Rightarrow\ I=ABD, \qquad E=AC \ \Rightarrow\ I=ACE.
$$
La **interacción generalizada** es el producto, eliminando los cuadrados ($X^2=I$):
$$
(ABD)(ACE)=A^2BCDE=BCDE \ \Rightarrow\ I=BCDE.
$$
Relación de definición completa:
$$
\boxed{I = ABD = ACE = BCDE.}
$$

## c) Resolución

Las palabras tienen longitudes 3 ($ABD$), 3 ($ACE$) y 4 ($BCDE$). La más corta es **3**,
luego el diseño es de **resolución III**. Implica que los **efectos principales están
confundidos con interacciones de dos factores**: hay que asumir que esas interacciones son
despreciables para interpretar los efectos principales (escasez de efectos).

## d) Cadena de alias de $A$

Multiplicando $A$ por cada palabra de la relación de definición:
$$
A\cdot ABD = BD,\qquad A\cdot ACE = CE,\qquad A\cdot BCDE = ABCDE.
$$
$$
[A] = A + BD + CE + ABCDE.
$$
$A$ **no** está confundido con ningún otro **efecto principal** (bien), pero **sí** con dos
**interacciones de dos factores** ($BD$ y $CE$), como corresponde a la resolución III.

## e) ¿Buen diseño? Estrategia secuencial

Para un **primer cribado** de 5 factores con solo 8 corridas, es razonable: identifica los
factores **activos** con costo mínimo. El riesgo: si $BD$ o $CE$ fueran importantes,
sesgarían la estimación de $A$.

Si se sospecha de interacciones de dos factores, la estrategia es **secuencial**:

- **Fold-over (plegado):** correr una segunda fracción de 8 con todos los signos
  invertidos. Combinadas (16 corridas) **suben la resolución a IV**, separando los efectos
  principales de las interacciones de dos factores.
- Alternativamente, una vez identificados los 2–3 factores activos, correr un **factorial
  completo** solo en ellos (proyección).

## f) Tabla de signos y ortogonalidad

Diseño básico en $A,B,C$ (un $2^3$) con $D=AB$ y $E=AC$:

| Corrida | $A$ | $B$ | $C$ | $D=AB$ | $E=AC$ |
|---|---|---|---|---|---|
| 1 | $-$ | $-$ | $-$ | $+$ | $+$ |
| 2 | $+$ | $-$ | $-$ | $-$ | $-$ |
| 3 | $-$ | $+$ | $-$ | $-$ | $+$ |
| 4 | $+$ | $+$ | $-$ | $+$ | $-$ |
| 5 | $-$ | $-$ | $+$ | $+$ | $-$ |
| 6 | $+$ | $-$ | $+$ | $-$ | $+$ |
| 7 | $-$ | $+$ | $+$ | $-$ | $-$ |
| 8 | $+$ | $+$ | $+$ | $+$ | $+$ |

Cada columna tiene cuatro $+$ y cuatro $-$ (suma 0). Para verificar ortogonalidad de dos
columnas cualesquiera, el producto término a término también suma 0 (cuatro $+$ y cuatro
$-$). Por ejemplo, $A\cdot D$: $(-)(+),(+)(-),(-)( -),(+)(+),(-)(+),(+)(-),(-)( -),(+)(+)$
$= -,-,+,+,-,-,+,+$ → suma 0. El diseño es **ortogonal**.

> Puedes verificar en Python/R que `t(X) %*% X` es diagonal (las columnas son ortogonales).
