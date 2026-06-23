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

### 3.1 Ejemplo: cadena completa de alias en un $2^{5-2}$

Supón 5 factores ($A,B,C,D,E$) con solo 8 corridas disponibles.
Se elige un $2^{5-2}$ con **generadores** $D = AB$ y $E = AC$.

**Paso 1 — Relación de definición completa.**

Los generadores producen dos palabras: $ABD$ y $ACE$.
La tercera surge de multiplicarlas (recuerda $X^2 = I$):

$$
(ABD)(ACE) = A^2 BCDE = BCDE.
$$

$$
\boxed{I = ABD = ACE = BCDE.}
$$

**Paso 2 — Cadenas de alias** (multiplica cada efecto por las 3 palabras de la rel. de definición):

| Efecto | $\times \; ABD$ | $\times \; ACE$ | $\times \; BCDE$ | Cadena de alias |
|:------:|:---------------:|:---------------:|:----------------:|:----------------|
| $A$ | $BD$ | $CE$ | $ABCDE$ | $[A] = A + BD + CE$ |
| $B$ | $AD$ | $ABCE$ | $CDE$ | $[B] = B + AD + CDE$ |
| $C$ | $ABCD$ | $AE$ | $BDE$ | $[C] = C + AE + BDE$ |
| $D$ | $AB$ | $ACDE$ | $BCE$ | $[D] = D + AB + BCE$ |
| $E$ | $ABDE$ | $AC$ | $BCD$ | $[E] = E + AC + BCD$ |
| $BC$ | $ACD$ | $ABE$ | $DE$ | $[BC] = BC + DE$ |
| $BE$ | $ADE$ | $ABC$ | $CD$ | $[BE] = BE + CD$ |

La palabra más corta ($ABD$, $ACE$) tiene **3 letras** → **Resolución III**.

> **Consecuencia directa:** todos los efectos principales están confundidos con al menos
> una interacción de dos factores. La Resolución III solo es segura si asumimos
> que las 2FIs son despreciables (escasez de efectos).

### 3.2 Cómo leer una tabla de alias

Una cadena $[A] = A + BD + CE$ dice que al estimar "el efecto de $A$" realmente
obtenemos la **suma** de tres efectos. Reglas prácticas:

1. **El alias de menor orden importa más.** Por escasez de efectos, las interacciones
   de orden ≥ 3 son casi siempre despreciables. En $[A] = A + BD + CE$, los alias
   problemáticos son $BD$ y $CE$ (orden 2); el término $ABCDE$ (orden 5) se ignora.

2. **Si una 2FI puede ser activa, el alias contamina.** Antes del experimento,
   identifica qué pares de factores pueden interactuar (por conocimiento del proceso)
   y verifica que esa 2FI no esté aliada con un efecto principal que te importe.

3. **Resumen de protección por resolución:**

   | Resolución | Ef. principales limpios de 2FI | 2FIs limpias entre sí |
   |:----------:|:------------------------------:|:---------------------:|
   | III | No ($\times$) | — |
   | IV | Sí ($\checkmark$) | No ($\times$) |
   | V | Sí ($\checkmark$) | Sí ($\checkmark$) |

4. **Acción posterior:** si tras el análisis varios aliases parecen activos, usa
   **fold-over** (§6.1) para desconfundirlos con corridas adicionales.

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

- **Proyección:** un fraccionado de resolución $R$ se proyecta en un factorial completo
  en cualquier subconjunto de $R-1$ factores. Si tras el cribado solo importan unos pocos
  factores, ya tenemos un factorial completo en ellos sin correr más.
- **Fold-over (plegado):** combinar la fracción inicial con una fracción complementaria
  (signos invertidos) **rompe** algunos alias y aumenta la resolución. Estrategia
  **secuencial**: empezar pequeño, ampliar según lo aprendido.

### 6.1 Fold-over: paso a paso

**Situación:** Se corrió un $2^{4-1}$ con generador $D = ABC$ (Resolución IV,
$I = ABCD$). Los efectos principales quedan limpios, pero las 2FIs están confundidas
entre sí:

$$[AB] = AB + CD, \quad [AC] = AC + BD, \quad [AD] = AD + BC.$$

**Paso 1 — Fracción original** (8 corridas, $D = ABC$):

| Corrida | $A$ | $B$ | $C$ | $D=ABC$ |
|:-------:|:---:|:---:|:---:|:-------:|
| 1 | $-$ | $-$ | $-$ | $-$ |
| 2 | $+$ | $-$ | $-$ | $+$ |
| 3 | $-$ | $+$ | $-$ | $+$ |
| 4 | $+$ | $+$ | $-$ | $-$ |
| 5 | $-$ | $-$ | $+$ | $+$ |
| 6 | $+$ | $-$ | $+$ | $-$ |
| 7 | $-$ | $+$ | $+$ | $-$ |
| 8 | $+$ | $+$ | $+$ | $+$ |

**Paso 2 — Fracción complementaria** (invertir todos los signos):

Corresponde a $D = -ABC$, la otra mitad del $2^4$. En esta segunda fracción:

$$\hat{AB}_{\text{frac1}} = AB + CD, \qquad \hat{AB}_{\text{frac2}} = AB - CD.$$

Promediando y restando: $\widehat{AB} = AB$, $\widehat{CD} = CD$. **Los alias
quedan separados.**

**Paso 3 — Resultado:**

Las 16 corridas combinadas equivalen al factorial completo $2^4$; todos los efectos
principales y todas las 2FIs son estimables sin ambigüedad.

> **Fold-over parcial:** si solo se sospecha de un factor concreto (digamos $D$),
> basta invertir solo el signo de $D$ en la segunda fracción. Se desconfunden los aliases
> que involucran a $D$ sin necesidad de correr 8 corridas completamente nuevas.

> **Regla de Box:** el fold-over de un diseño Resolución III produce un diseño
> Resolución IV; el fold-over de un Resolución IV aumenta la información pero no
> siempre llega a Resolución V completa.

### 6.2 Mínima aberración y catálogo de diseños recomendados

No todas las elecciones de generadores son igualmente buenas. El criterio de
**mínima aberración** selecciona el diseño que confunde las interacciones de menor
orden lo más tarde posible, minimizando el daño de los aliases.

| Diseño | Corridas | Generadores recomendados | Relación de definición | Resolución |
|:------:|:--------:|:------------------------:|:----------------------:|:----------:|
| $2^{3-1}$ | 4 | $C = AB$ | $I = ABC$ | **III** |
| $2^{4-1}$ | 8 | $D = ABC$ | $I = ABCD$ | **IV** |
| $2^{5-1}$ | 16 | $E = ABCD$ | $I = ABCDE$ | **V** |
| $2^{5-2}$ | 8 | $D = AB,\; E = AC$ | $I = ABD = ACE = BCDE$ | III |
| $2^{6-2}$ | 16 | $E = ABC,\; F = BCD$ | $I = ABCE = BCDF = ADEF$ | **IV** |
| $2^{7-4}$ | 8 | $D=AB,E=AC,F=BC,G=ABC$ | múltiples palabras de 3 letras | III |

> **Cómo elegir:** (1) fija el número de corridas disponibles; (2) de la tabla,
> elige la mayor resolución posible; (3) si conoces pares de factores que probablemente
> interactúan, verifica que esa 2FI no esté aliada con efectos principales (Res. IV)
> ni con otras 2FIs de interés (Res. V).

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
