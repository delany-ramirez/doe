# Factoriales fraccionados $2^{k-p}$

> **Objetivos.** Entender por qué y cómo se corre solo una **fracción** de un factorial
> $2^k$, dominar los conceptos de **generador**, **relación de definición**, **estructura
> de alias** y **resolución**, y saber elegir un diseño de cribado adecuado.

## 1. Motivación: la explosión combinatoria

El número de corridas de un $2^k$ crece exponencialmente: un $2^7$ son **128** corridas
para 7 factores. Pero la mayoría se gastan en estimar **interacciones de orden alto** que
—por el principio de **escasez de efectos**— suelen ser despreciables. La idea del
**factorial fraccionado** es correr solo una **fracción** cuidadosamente elegida y aceptar
cierta ambigüedad en los efectos de orden alto.

Un **diseño $2^{k-p}$** usa $2^{k-p}$ corridas (una fracción $1/2^p$ del factorial
completo): $2^{k-1}$ es la **media fracción**, $2^{k-2}$ la cuarta parte, etc.

## 2. La media fracción $2^{k-1}$

Construcción de una media fracción de un $2^3$ (4 corridas en vez de 8):

1. Escribir el diseño básico completo en los $k-1=2$ primeros factores ($A$, $B$).
2. Asignar el factor extra a una interacción: $C = AB$. Esa igualdad es el **generador**.

| Corrida | $A$ | $B$ | $C=AB$ |
|---|---|---|---|
| $(1)$→$c$ | $-$ | $-$ | $+$ |
| $a$ | $+$ | $-$ | $-$ |
| $b$ | $-$ | $+$ | $-$ |
| $abc$ | $+$ | $+$ | $+$ |

### Relación de definición

Multiplicando el generador $C=AB$ por $C$: $C\cdot C = ABC$, y como $C^2 = I$ (columna de
identidad, todo $+$), se obtiene la **relación de definición**:

$$
I = ABC .
$$

La relación de definición es la "huella" del diseño: de ella se deducen **todos** los
alias.

## 3. Estructura de alias

Cada efecto está **confundido (aliased)** con otro(s): no se pueden distinguir. Los alias
se obtienen multiplicando cada efecto por la relación de definición. Con $I=ABC$:

$$
A = A\cdot ABC = BC, \qquad B = AC, \qquad C = AB .
$$

Así, en esta media fracción **cada efecto principal está confundido con una interacción de
dos factores**. Lo que estimamos como "efecto de $A$" es en realidad $A + BC$: si $BC$ es
despreciable (escasez de efectos), la estimación es válida.

> **Cadena de alias.** $[A]=A+BC,\ [B]=B+AC,\ [C]=C+AB$. Los corchetes denotan "lo que
> realmente se estima".

## 4. Resolución del diseño

La **resolución** (número romano) resume la gravedad de los alias: es la **longitud de la
palabra más corta** en la relación de definición. Cuanto mayor, mejor.

| Resolución | Relación de def. | Qué se confunde | Uso |
|---|---|---|---|
| **III** | palabra de 3 letras (ej. $I=ABC$) | efectos principales ↔ interacciones de 2 factores | cribado agresivo de muchos factores |
| **IV** | palabra de 4 letras (ej. $I=ABCD$) | principales limpios; interacciones de 2 ↔ interacciones de 2 | cribado con cuidado |
| **V** | palabra de 5 letras (ej. $I=ABCDE$) | principales e interacciones de 2 limpios (↔ de 3) | caracterización fina |

Reglas prácticas:

- **Resolución III:** los efectos principales se confunden con interacciones de dos
  factores. Económico pero arriesgado si hay interacciones reales.
- **Resolución IV:** los efectos principales quedan **limpios** de interacciones de dos
  factores (se confunden entre sí las de dos factores). Buen compromiso para cribado.
- **Resolución V:** efectos principales e interacciones de dos factores estimables sin
  ambigüedad con interacciones de bajo orden. Casi tan informativo como el completo.

## 5. Diseño de la fracción y elección del generador

- Para una **media fracción** óptima, usar como generador la **interacción de mayor
  orden** (maximiza la resolución). Ej.: en un $2^{4-1}$, generar $D=ABC$ da $I=ABCD$
  (resolución IV).
- Para fracciones menores ($2^{k-p}$ con $p>1$) se eligen $p$ generadores independientes;
  la relación de definición completa incluye sus **interacciones generalizadas**, y la
  resolución es la palabra más corta resultante.

## 6. Proyección y aumento de diseños

- **Proyección:** un fraccionado de resolución $R$ "se proyecta" en un factorial completo
  en cualquier subconjunto de $R-1$ factores. Si tras el cribado solo importan unos pocos
  factores, ya tenemos un factorial completo en ellos sin correr más.
- **Fold-over (plegado):** combinar la fracción inicial con una fracción complementaria
  (signos invertidos) **rompe** algunos alias y aumenta la resolución. Estrategia
  **secuencial**: empezar pequeño, ampliar según lo aprendido.

## 7. Flujo de cribado

1. Muchos factores candidatos → usar un fraccionado de **resolución III o IV** para
   **cribar** (identificar los factores activos con pocas corridas).
2. Analizar con el **gráfico de probabilidad normal de efectos** (réplica única).
3. Quedarse con los factores activos; **proyectar** o **aumentar** (fold-over) para
   resolver alias.
4. Caracterizar los pocos factores importantes con un diseño completo o de superficie de
   respuesta (Semana 4).

> **Filosofía secuencial (Box).** No gastar más del ~25 % del presupuesto en el primer
> experimento; aprender y luego ampliar.

---

### Para repasar

- ¿Cuántas corridas tiene un $2^{6-2}$?
- Si la relación de definición es $I=ABCD$, ¿con qué está aliado el efecto $A$? ¿Y $AB$?
- ¿Qué resolución elegirías para cribar 7 factores con pocos recursos?

### Referencias

- Montgomery, D. C. _Design and Analysis of Experiments_, cap. 8.
- Box, Hunter & Hunter, _Statistics for Experimenters_, caps. 6–8.
