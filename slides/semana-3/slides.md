---
theme: seriph
title: "Semana 3 — Diseños 2^k y Factoriales Fraccionados"
author: "Diseño de Experimentos · Maestría"
keywords: 2k, factorial, fraccionado, alias, resolución, screening
colorSchema: light
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
---

# Semana 3
## Diseños $2^k$ y Factoriales Fraccionados

Diseño de Experimentos · Maestría

---
layout: default
---

# Agenda

<v-clicks>

1. **Diseños $2^k$** — qué son y por qué importan
2. **Notación de Yates** y tabla de signos
3. **Cálculo de efectos** e interpretación
4. **Análisis** — con réplica (ANOVA) y réplica única (gráfico normal)
5. **Bloqueo y confusión** en $2^k$
6. **Factoriales fraccionados $2^{k-p}$** — generador, alias, resolución
7. 🔵 Opcional: Plackett-Burman y Taguchi

</v-clicks>

---
layout: cover
background: '#1a365d'
---

# Parte 1
## Diseños Factoriales $2^k$

---

# ¿Qué es un Diseño $2^k$?

Un diseño con $k$ factores, cada uno en **dos niveles**: bajo ($-$) y alto ($+$).

| $k$ factores | Corridas $2^k$ | Efectos estimables |
|---|---|---|
| 2 | 4 | 3 efectos |
| 3 | 8 | 7 efectos |
| 4 | 16 | 15 efectos |
| 5 | 32 | 31 efectos |

**Ventajas:**
- Estima **todos** los efectos principales e interacciones con pocas corridas
- Ortogonal: cada efecto se estima de forma **independiente**
- Base de los diseños fraccionados y la RSM

**Supuesto:** la respuesta es aproximadamente **lineal** en el rango de cada factor.

---

# Notación de Yates

Letras minúsculas indican los factores en nivel **alto**. Ejemplo para $2^3$:

| Notación | $A$ | $B$ | $C$ | Descripción |
|---|---|---|---|---|
| $(1)$ | $-$ | $-$ | $-$ | Todos en nivel bajo |
| $a$ | $+$ | $-$ | $-$ | Solo $A$ alto |
| $b$ | $-$ | $+$ | $-$ | Solo $B$ alto |
| $ab$ | $+$ | $+$ | $-$ | $A$ y $B$ altos |
| $c$ | $-$ | $-$ | $+$ | Solo $C$ alto |
| $ac$ | $+$ | $-$ | $+$ | $A$ y $C$ altos |
| $bc$ | $-$ | $+$ | $+$ | $B$ y $C$ altos |
| $abc$ | $+$ | $+$ | $+$ | Todos altos |

---

# Tabla de Signos y Cálculo de Efectos

Columnas de interacción = **producto** de las columnas de factores.

| Corrida | $A$ | $B$ | $C$ | $AB$ | $AC$ | $BC$ | $ABC$ | $y$ |
|---|---|---|---|---|---|---|---|---|
| $(1)$ | $-$ | $-$ | $-$ | $+$ | $+$ | $+$ | $-$ | |
| $a$ | $+$ | $-$ | $-$ | $-$ | $-$ | $+$ | $+$ | |
| $b$ | $-$ | $+$ | $-$ | $-$ | $+$ | $-$ | $+$ | |
| $ab$ | $+$ | $+$ | $-$ | $+$ | $-$ | $-$ | $-$ | |
| $c$ | $-$ | $-$ | $+$ | $+$ | $-$ | $-$ | $+$ | |
| $ac$ | $+$ | $-$ | $+$ | $-$ | $+$ | $-$ | $-$ | |
| $bc$ | $-$ | $+$ | $+$ | $-$ | $-$ | $+$ | $-$ | |
| $abc$ | $+$ | $+$ | $+$ | $+$ | $+$ | $+$ | $+$ | |

$$\text{Efecto} = \frac{\text{contraste}}{n\cdot 2^{k-1}}$$

La matriz es **ortogonal**: cada efecto se estima de forma independiente.

---

# El Modelo de Regresión

Un $2^k$ equivale a un modelo lineal en variables codificadas $x_i \in \{-1, +1\}$:

$$y = \beta_0 + \sum_i \beta_i x_i + \sum_{i<j}\beta_{ij}x_i x_j + \cdots + \varepsilon$$

**Relación efecto–coeficiente:**

$$\beta_i = \frac{\text{Efecto}_i}{2}$$

(el efecto es el cambio de $-1$ a $+1$, es decir, 2 unidades de $x$)

<br>

Este modelo de regresión conecta los $2^k$ con la **metodología de superficie de respuesta** (Semana 4).

---

# Análisis: ¿Qué Efectos Importan?

<div class="grid grid-cols-2 gap-6">

<div class="bg-blue-50 p-4 rounded">

### Con réplicas ($n > 1$)

Usar ANOVA estándar:
- $SC_E$ disponible (error puro)
- Prueba $F$ para cada efecto
- Valor-p para decidir significancia

</div>

<div class="bg-yellow-50 p-4 rounded">

### Réplica única ($n = 1$)

No hay $SC_E$ → usar el **gráfico de probabilidad normal de efectos**:

- Efectos **nulos** son pequeños y se alinean en una recta
- Efectos **activos** se desvían de la recta

Alternativa: método de Lenth (pseudo-error estándar).

</div>

</div>

<br>

> **Principio de escasez de efectos:** en la práctica, pocos efectos son importantes; los de orden alto suelen ser despreciables.

---
layout: cover
background: '#1a365d'
---

# Parte 2
## Bloqueo y Confusión en $2^k$

---

# Bloqueo en Diseños $2^k$

Cuando las corridas no pueden hacerse en condiciones homogéneas (dos días, dos lotes), se divide el diseño en **bloques**.

### Idea central: confusión

Se **confunde** (sacrifica) un efecto de orden alto con el bloque. Ese efecto no se podrá estimar, pero si se elige bien (interacción de orden alto), la pérdida es mínima.

### Ejemplo: $2^3$ en dos bloques

Confundir $ABC$ con el bloque:
- Bloque I: corridas con $ABC = +$ → $\{a, b, c, abc\}$
- Bloque II: corridas con $ABC = -$ → $\{(1), ab, ac, bc\}$

Los efectos $A$, $B$, $C$, $AB$, $AC$, $BC$ se estiman libremente.  
$ABC$ está confundido con el bloque → no se puede separar.

> Elegir siempre confundir interacciones de **orden alto** que se asumen despreciables.

---
layout: cover
background: '#1a365d'
---

# Parte 3
## Factoriales Fraccionados $2^{k-p}$

---

# Motivación: La Explosión Combinatoria

| $k$ | Corridas $2^k$ | Corridas $2^{k-1}$ | Corridas $2^{k-2}$ |
|---|---|---|---|
| 3 | 8 | 4 | — |
| 4 | 16 | 8 | 4 |
| 5 | 32 | 16 | 8 |
| 6 | 64 | 32 | 16 |
| 7 | 128 | 64 | 32 |

Un $2^{k-p}$ usa $\frac{1}{2^p}$ de las corridas del factorial completo.

**¿Por qué es viable?**

> **Principio de escasez de efectos:** las interacciones de **orden 3 o más** son generalmente despreciables. Podemos sacrificarlas para reducir el número de corridas.

---

# Construcción de la Media Fracción $2^{k-1}$

Ejemplo: $2^{3-1}$ (4 corridas en vez de 8)

1. Escribir el factorial completo en $k-1=2$ factores ($A$, $B$)
2. Asignar el factor adicional: $C = AB$ → **generador**

| Corrida | $A$ | $B$ | $C=AB$ |
|---|---|---|---|
| $c$ | $-$ | $-$ | $+$ |
| $a$ | $+$ | $-$ | $-$ |
| $b$ | $-$ | $+$ | $-$ |
| $abc$ | $+$ | $+$ | $+$ |

### Relación de definición

$$I = ABC$$

(multiplicando el generador $C = AB$ por $C$, ya que $C^2 = I$)

---

# Estructura de Alias

Los **alias** se obtienen multiplicando cada efecto por la relación de definición $I = ABC$:

$$A = A \cdot I = A \cdot ABC = A^2BC = BC$$
$$B = B \cdot ABC = AC$$
$$C = C \cdot ABC = AB$$

Cadenas de alias:
- $[A] = A + BC$
- $[B] = B + AC$
- $[C] = C + AB$

Lo que estimamos como "efecto de $A$" es realmente $A + BC$.

Si $BC$ es despreciable (principio de escasez), la estimación de $A$ es válida.

---

# Resolución del Diseño

La **resolución** indica el confundimiento mínimo:

| Resolución | Definición | Implicación |
|---|---|---|
| **III** | Efectos principales aliados con interacciones de 2 factores | Poco poder para distinguir efectos |
| **IV** | Efectos principales libres; interacciones de 2 factores aliadas entre sí | Adecuado para screening con supuesto adicional |
| **V** | Efectos principales e interacciones de 2 factores libres | Ideal para estudios completos |

La resolución se escribe en romano: $2^{3-1}_{\text{III}}$, $2^{5-1}_{\text{V}}$, etc.

<br>

> **Regla:** en screening industrial, mínimo **resolución IV**.

---

# Tabla de Diseños Fraccionados Comunes

| Diseño | $k$ | Corridas | Resolución | Uso típico |
|---|---|---|---|---|
| $2^{3-1}$ | 3 | 4 | III | Screening muy económico |
| $2^{4-1}$ | 4 | 8 | **IV** | Screening 4 factores |
| $2^{5-1}$ | 5 | 16 | **V** | Evaluación 5 factores |
| $2^{5-2}$ | 5 | 8 | III | Screening muy rápido |
| $2^{6-2}$ | 6 | 16 | **IV** | Screening 6 factores |
| $2^{7-4}$ | 7 | 8 | III | Plackett-Burman alternativo |

---

# 🔵 Opcional: Plackett-Burman y Taguchi

### Diseños de Plackett-Burman

- Diseños de $N = 4t$ corridas para hasta $N-1$ factores ($N$ múltiplo de 4)
- Resolución III: útil para **screening** de muchos factores con pocas corridas
- Estructura de alias compleja (proyección no ortogonal)

### Diseños de Taguchi

- Filosofía: diseño **robusto** (minimizar variabilidad causada por factores de ruido)
- Arreglos ortogonales ($L_8$, $L_{16}$, etc.)
- Separa factores de **control** vs. factores de **ruido** en arreglos cruzados
- Optimización mediante relación señal-ruido (*S/N ratio*)

---
layout: center
---

# Resumen Semana 3

| Concepto | Lo esencial |
|---|---|
| $2^k$ | $k$ factores, 2 niveles; ortogonal; estima todos los efectos |
| Efecto | Contraste / $(n \cdot 2^{k-1})$; coeficiente de regresión = Efecto/2 |
| Réplica única | Gráfico de probabilidad normal de efectos |
| Bloqueo | Confundir interacción de orden alto con el bloque |
| $2^{k-p}$ | Fracción del factorial; acepta ambigüedad en efectos de orden alto |
| Alias | $[A] = A + (\text{aliados})$; obtenidos de la relación de definición |
| Resolución | III mínimo; **IV** para screening; V para estudio completo |

<br>

**Próxima semana:** metodología de superficie de respuesta (RSM) — de screening a optimización.

---
layout: center
---

# Referencias

- Montgomery, D. C. *Design and Analysis of Experiments*, caps. 6–8.
- Gutiérrez Pulido & de la Vara Salazar, *Análisis y Diseño de Experimentos*, caps. 7–9.
- Notebooks: `semana-3-disenos-2k-fraccionados/notebooks/`
- Datos de práctica: `semana-3-disenos-2k-fraccionados/datos/`
