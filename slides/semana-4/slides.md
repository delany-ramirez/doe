---
theme: seriph
title: "Semana 4 — RSM y Optimización"
author: "Diseño de Experimentos · Maestría"
keywords: RSM, superficie de respuesta, CCD, Box-Behnken, optimización, ascenso
colorSchema: light
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
---

# Semana 4
## Metodología de Superficie de Respuesta y Optimización

Diseño de Experimentos · Maestría

---
layout: default
---

# Agenda

<v-clicks>

1. **¿Qué es la RSM?** — objetivo y estrategia secuencial
2. **Modelo de primer orden** — puntos centrales y curvatura
3. **Ascenso por máxima pendiente** — moverse hacia el óptimo
4. **Modelo de segundo orden** — términos cuadráticos
5. **Diseño Central Compuesto (CCD)** — construcción y rotabilidad
6. **Diseño de Box-Behnken** — alternativa sin esquinas
7. **Análisis de la superficie** — punto estacionario y análisis canónico
8. 🔵 Opcional: optimización múltiple y temas avanzados

</v-clicks>

---
layout: cover
background: '#1a365d'
---

# Parte 1
## La Metodología RSM y el Primer Orden

---

# ¿Qué es la RSM?

La **metodología de superficie de respuesta** (RSM) es un conjunto de técnicas para **modelar y optimizar** una respuesta $y$ que depende de factores cuantitativos $x_1,\dots,x_k$.

$$y = f(x_1, x_2, \dots, x_k) + \varepsilon$$

La función $f$ es desconocida; se aproxima con un **polinomio** local.

### ¿Dónde entra la RSM?

| Etapa | Herramienta | Pregunta |
|---|---|---|
| **Cribado** | $2^k$ / fraccionados (S3) | ¿Qué factores importan? |
| **Optimización (I)** | $2^k$ + puntos centrales + ascenso | ¿En qué dirección mejorar? |
| **Optimización (II)** | CCD / Box-Behnken | ¿Dónde está el óptimo exactamente? |

---

# Estrategia Secuencial de la RSM

<div class="grid grid-cols-2 gap-6">

<div class="bg-blue-50 p-4 rounded">

### Etapa 1 — Lejos del óptimo

La superficie es **plana e inclinada**.

- Ajustar **modelo de primer orden** (plano)
- Verificar que no hay curvatura significativa
- Aplicar **ascenso por máxima pendiente**

</div>

<div class="bg-green-50 p-4 rounded">

### Etapa 2 — Cerca del óptimo

La superficie se **curva** (máximo, mínimo o silla).

- Ajustar **modelo de segundo orden** (cuadrático)
- Diseño CCD o Box-Behnken
- Análisis canónico para caracterizar el óptimo

</div>

</div>

<br>

> **Filosofía:** empezar simple y barato; refinar solo cuando se está cerca del óptimo.

---

# El Modelo de Primer Orden

En una región alejada del óptimo:

$$\hat{y} = \beta_0 + \sum_{i=1}^{k}\beta_i x_i$$

Se ajusta con un **$2^k$ (o fraccionado) aumentado con puntos centrales**.

### Función de los puntos centrales

| Función | Cómo |
|---|---|
| Estimación del **error puro** | Réplicas en el centro dan $SC_{\text{PE}}$ |
| Prueba de **curvatura** | Comparar media del centro vs. media de los factoriales |

### Prueba de curvatura

Si $\bar{y}_C \approx \bar{y}_F$: sin curvatura → seguir ascendiendo.  
Si difieren significativamente: hay curvatura → pasar al segundo orden.

---

# Ascenso por Máxima Pendiente

La dirección de **mayor aumento** de $\hat{y}$ es el gradiente del modelo de primer orden:

$$\text{dirección} \propto (\beta_1, \beta_2, \dots, \beta_k)$$

### Procedimiento

1. Ajustar el modelo de primer orden en variables codificadas
2. Elegir un **factor de referencia** (el de mayor $|\beta_i|$) y un tamaño de paso $\Delta_r$
3. El paso del factor $i$-ésimo es: $\Delta_i = \frac{\beta_i}{\beta_r}\Delta_r$
4. Correr ensayos a lo largo de la dirección ascendente hasta que la respuesta **deje de mejorar**
5. La región donde la respuesta es máxima es el nuevo **punto de partida** para el segundo orden

<br>

> Cuando el ascenso se detiene, la curvatura indica que estamos **cerca del óptimo**.

---
layout: cover
background: '#1a365d'
---

# Parte 2
## Modelos de Segundo Orden y Diseños RSM

---

# El Modelo de Segundo Orden

$$\hat{y} = \beta_0 + \sum_{i=1}^{k}\beta_i x_i + \sum_{i=1}^{k}\beta_{ii} x_i^2 + \sum_{i<j}\beta_{ij} x_i x_j$$

| Tipo de término | Símbolo | Captura |
|---|---|---|
| Lineales | $\beta_i x_i$ | Pendiente |
| Cuadráticos puros | $\beta_{ii} x_i^2$ | Curvatura por eje |
| Interacciones | $\beta_{ij} x_i x_j$ | Torsión de la superficie |

<br>

Para estimar $\beta_{ii}$ se necesitan **al menos 3 niveles** por factor.  
→ Un $2^k$ de dos niveles no puede ajustar curvatura.

---

# Diseño Central Compuesto (CCD)

El **CCD** es el diseño más popular para modelos de segundo orden.

### Tres grupos de puntos

| Grupo | Ubicación | Función | # de puntos |
|---|---|---|---|
| **Factoriales** | Vértices $\pm 1$ | Efectos lineales e interacciones | $2^k$ (o fracción) |
| **Centrales** | Origen $(0,\dots,0)$ | Error puro y curvatura | $n_C$ réplicas |
| **Axiales / estrella** | Ejes a $\pm\alpha$ | Términos cuadráticos puros | $2k$ puntos |

**Total:** $2^k + 2k + n_C$

<br>

Para $k=2$: $4 + 4 + n_C$ corridas.  
Para $k=3$: $8 + 6 + n_C$ corridas.

---

# Rotabilidad del CCD

La distancia axial $\alpha$ determina propiedades del diseño:

| Condición | $\alpha$ | Propiedad |
|---|---|---|
| $k=2$ | $\alpha = 2^{2/4} = \sqrt{2} \approx 1.414$ | **Rotable**: varianza de predicción igual en todos los puntos equidistantes del centro |
| $k=3$ | $\alpha = 2^{3/4} \approx 1.682$ | Rotable |
| **CCD de caras centradas (CCF)** | $\alpha = 1$ | Todos los puntos en el cubo $[-1,1]^k$ — útil cuando no se pueden alcanzar niveles extremos |

<br>

**Rotabilidad:** la calidad de predicción no depende de la dirección en el espacio de factores.

---

# Diseño de Box-Behnken (BBD)

Alternativa al CCD para $k \geq 3$ factores:

- Solo **tres niveles** por factor: $-1, 0, +1$
- **Sin puntos en las esquinas** del cubo (combina pares de factores en $\pm1$ con el resto en 0)
- Siempre incluye puntos centrales

| $k$ | Corridas BBD | Corridas CCD rotable |
|---|---|---|
| 3 | 15 | 20 |
| 4 | 27 | 31 |
| 5 | 46 | 52 |

### Cuándo preferir Box-Behnken

- Las combinaciones extremas (todos los factores al máximo) son **imposibles o peligrosas**
- Presupuesto ajustado y el diseño es casi tan eficiente

---
layout: cover
background: '#1a365d'
---

# Parte 3
## Análisis de la Superficie: Encontrando el Óptimo

---

# Punto Estacionario y Análisis Canónico

El punto estacionario $x_s$ es donde las derivadas parciales se anulan:

$$\frac{\partial \hat{y}}{\partial x_i} = 0 \quad \forall i \qquad \Rightarrow \qquad x_s = -\frac{1}{2}\mathbf{B}^{-1}\mathbf{b}$$

donde $\mathbf{b}$ es el vector de coeficientes lineales y $\mathbf{B}$ la matriz de cuadráticos.

### Análisis canónico — naturaleza del punto estacionario

La transformación a **ejes canónicos** diagonaliza la superficie:

$$\hat{y} = \hat{y}_s + \lambda_1 w_1^2 + \lambda_2 w_2^2 + \cdots + \lambda_k w_k^2$$

| Eigenvalores $\lambda_i$ | Tipo de punto |
|---|---|
| Todos **negativos** | **Máximo** |
| Todos **positivos** | **Mínimo** |
| **Mixtos** | **Punto de silla** |
| Algunos $\approx 0$ | *Ridge* (cresta) |

---

# Diagramas de Contorno y Superficie

Las herramientas visuales para comunicar la superficie:

<div class="grid grid-cols-2 gap-6">

<div class="bg-blue-50 p-4 rounded">

### Diagrama de contorno (*contour plot*)

- Curvas de nivel de $\hat{y}$ sobre el plano $(x_1, x_2)$
- Fácil de leer la región óptima
- Muestra restricciones y fronteras viables

</div>

<div class="bg-green-50 p-4 rounded">

### Gráfica de superficie 3D

- Vista intuitiva de la curvatura
- Identifica máximos, mínimos y sillas visualmente
- Complementa al diagrama de contorno

</div>

</div>

<br>

> Para $k > 2$: fijar los factores restantes en el óptimo o en valores nominales y graficar de dos en dos.

---

# 🔵 Opcional: Optimización Múltiple

En la práctica frecuentemente se optimizan **varias respuestas** simultáneamente.

### Función de deseabilidad (*desirability function*)

Para cada respuesta $y_i$ se define una función $d_i \in [0, 1]$:

- $d_i = 1$: la respuesta es completamente deseable
- $d_i = 0$: la respuesta es inaceptable

La **deseabilidad compuesta** $D$:

$$D = \left(\prod_{i=1}^{m} d_i\right)^{1/m}$$

Se maximiza $D$ sobre el espacio de factores buscando el punto donde **todas** las respuestas son satisfactorias.

---

# 🔵 Opcional: Temas Avanzados

### Análisis de Mezclas

- Factores son proporciones que suman 1 ($x_1 + x_2 + \cdots + x_q = 1$)
- Diseños simplex: redes de Scheffé
- Modelo cúbico especial

### Diseños Robustos (Taguchi / Dual Response)

- Separar factores de control de factores de ruido
- Modelar media **y** varianza simultáneamente
- Minimizar variabilidad (hacer el proceso robusto al ruido)

### Diseños de Mezcla-Proceso

- Combina factores de mezcla con factores de proceso
- Diseño producto de un simplex × factorial

---
layout: center
---

# Resumen Semana 4

| Concepto | Lo esencial |
|---|---|
| RSM | Modelar y optimizar $y = f(x_1,\dots,x_k)$ con polinomios locales |
| Estrategia | Primer orden + ascenso → segundo orden cerca del óptimo |
| Puntos centrales | Error puro + prueba de curvatura |
| CCD | $2^k$ + axiales + centrales; rotable si $\alpha = (2^k)^{1/4}$ |
| Box-Behnken | Sin esquinas; útil cuando extremos son inaccesibles |
| Punto estacionario | $x_s = -\frac{1}{2}\mathbf{B}^{-1}\mathbf{b}$; clasificar con eigenvalores |
| Deseabilidad | Optimización simultánea de múltiples respuestas |

---
layout: center
---

# Resumen del Curso DOE

| Semana | Diseño | Pregunta principal |
|---|---|---|
| **S1** | DCA — ANOVA una vía | ¿Algún nivel de este factor hace diferencia? |
| **S2** | DBCA, factorial 2 factores | ¿Hay efectos de bloque? ¿Interacción entre factores? |
| **S3** | $2^k$ y $2^{k-p}$ | ¿Qué factores importan entre muchos? |
| **S4** | CCD / Box-Behnken (RSM) | ¿En qué valores de los factores se optimiza? |

<br>

> El conocimiento del área + la estadística son **complementarios**: ningún diseño suple la comprensión del fenómeno.

---
layout: center
---

# Referencias

- Montgomery, D. C. *Design and Analysis of Experiments*, caps. 10–11.
- Myers, Montgomery & Anderson-Cook. *Response Surface Methodology*, caps. 2–7.
- Gutiérrez Pulido & de la Vara Salazar, *Análisis y Diseño de Experimentos*, caps. 10–11.
- Notebooks: `semana-4-rsm-optimizacion/notebooks/`
- Datos de práctica: `semana-4-rsm-optimizacion/datos/`
