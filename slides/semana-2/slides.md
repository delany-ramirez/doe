---
theme: seriph
title: "Semana 2 — Bloqueo y Diseños Factoriales"
author: "Diseño de Experimentos · Maestría"
keywords: DBCA, factorial, interacción, ANOVA dos vías
colorSchema: light
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
---

# Semana 2
## Bloqueo y Diseños Factoriales

Diseño de Experimentos · Maestría

---
layout: default
---

# Agenda

<v-clicks>

1. **Del DCA al DBCA** — por qué y cuándo bloquear
2. **Diseño en Bloques Completos al Azar (DBCA)** — modelo y tabla ANOVA
3. **Eficiencia relativa** del DBCA vs. DCA
4. **¿Por qué factorial?** — límites del OFAT
5. **Efectos principales e interacciones** — la herramienta gráfica
6. **ANOVA de dos vías** — modelo, tabla, estrategia de análisis
7. 🔵 Opcional: Cuadrados Latinos y BIBD

</v-clicks>

---
layout: cover
background: '#1a365d'
---

# Parte 1
## Bloqueo y el Diseño DBCA

---

# Del DCA al DBCA

### ¿Cuándo falla el DCA?

El **diseño completamente al azar (DCA)** asume que las unidades experimentales son **homogéneas**.

Cuando existe una fuente de variabilidad **conocida** y **ajena** al factor de interés:
- Lotes distintos de materia prima
- Días/turnos diferentes
- Operarios, hornos, máquinas

Esa heterogeneidad **infla el error** y puede enmascarar el efecto del tratamiento.

### La solución: bloquear

Agrupar unidades en **bloques** homogéneos y aplicar **todos** los tratamientos en cada bloque.

> *Block what you can, randomize what you cannot.*

---

# El Diseño DBCA

**Diseño en Bloques Completos al Azar** (DBCA / *Randomized Complete Block Design*)

- $a$ tratamientos × $b$ bloques
- Cada bloque es **completo**: contiene los $a$ tratamientos (uno por tratamiento)
- Dentro de cada bloque, los tratamientos se asignan **al azar**
- Total de observaciones: $N = ab$

<br>

```
Bloque 1:  Trat-A  Trat-C  Trat-B   ← aleatorio dentro del bloque
Bloque 2:  Trat-B  Trat-A  Trat-C
Bloque 3:  Trat-C  Trat-B  Trat-A
```

> El bloque controla variabilidad pero **no es el factor de interés**.

---

# Modelo Estadístico del DBCA

$$y_{ij} = \mu + \tau_i + \beta_j + \varepsilon_{ij}, \qquad i=1,\dots,a;\quad j=1,\dots,b$$

| Símbolo | Significado | Restricción |
|---|---|---|
| $\mu$ | Media global | — |
| $\tau_i$ | Efecto del **tratamiento** $i$ | $\sum_i \tau_i = 0$ |
| $\beta_j$ | Efecto del **bloque** $j$ | $\sum_j \beta_j = 0$ |
| $\varepsilon_{ij}$ | Error aleatorio | $N(0,\sigma^2)$ independientes |

<br>

**Hipótesis de interés:**
$$H_0:\ \tau_1 = \tau_2 = \cdots = \tau_a = 0$$

**Supuesto clave:** el modelo es **aditivo** (tratamiento × bloque no interactúan).

---

# Tabla ANOVA del DBCA

Descomposición:

$$SC_T = SC_{\text{Trat}} + SC_{\text{Bloq}} + SC_E$$

| Fuente | SC | g.l. | CM | $F_0$ |
|---|---|---|---|---|
| Tratamientos | $SC_{\text{Trat}}$ | $a-1$ | $CM_{\text{Trat}}$ | $CM_{\text{Trat}}/CM_E$ |
| Bloques | $SC_{\text{Bloq}}$ | $b-1$ | $CM_{\text{Bloq}}$ | *(opcional)* |
| Error | $SC_E$ | $(a-1)(b-1)$ | $CM_E$ | |
| **Total** | $SC_T$ | $ab-1$ | | |

<br>

El bloqueo **"roba"** variabilidad de $SC_E$ → $CM_E$ más pequeño → $F_0$ más grande → mayor potencia.

---

# Eficiencia Relativa del DBCA

¿Cuánto ganó el bloqueo? La **eficiencia relativa** (ER) estima cuántas más réplicas hubiera necesitado el DCA para alcanzar la misma precisión:

$$\text{ER} = \frac{(b-1)CM_{\text{Bloq}} + b(a-1)CM_E}{(ab-1)CM_E}$$

- $\text{ER} > 1$: el bloqueo **ayudó** (lo usual cuando los bloques son heterogéneos)
- $\text{ER} \approx 1$: el bloqueo fue neutro
- $\text{ER} < 1$: el bloqueo costó precisión (los bloques eran innecesarios)

<br>

> Regla práctica: si se sospecha heterogeneidad entre unidades, bloquear no cuesta nada y puede ganar mucho.

---
layout: cover
background: '#1a365d'
---

# Parte 2
## Diseños Factoriales y Efectos de Interacción

---

# ¿Por Qué Factorial?

Cuando hay **dos o más factores**, el método **OFAT** (*one factor at a time*) tiene dos defectos:

<div class="grid grid-cols-2 gap-6">

<div class="bg-red-50 p-4 rounded">

### ❌ OFAT
- **No detecta interacciones** (nunca varía dos factores juntos)
- **Ineficiente**: más corridas, menos información
- Conclusiones válidas solo en un punto

</div>

<div class="bg-green-50 p-4 rounded">

### ✅ Factorial
- Investiga **todas las combinaciones**
- Cada observación informa sobre **todos** los factores
- **Detecta interacciones**
- Conclusiones válidas en un **rango** de condiciones

</div>

</div>

---

# Efecto Principal

El **efecto principal** de un factor = cambio promedio en la respuesta al cambiar su nivel, **promediando** sobre los niveles del otro factor.

Para un $2\times2$ con factores $A$ y $B$:

$$\text{Efecto } A = \frac{y_{+-}+y_{++}}{2} - \frac{y_{--}+y_{-+}}{2}$$

$$\text{Efecto } B = \frac{y_{-+}+y_{++}}{2} - \frac{y_{--}+y_{+-}}{2}$$

<br>

| $A$ | $B$ | Respuesta |
|---|---|---|
| $-$ | $-$ | $y_{--}$ |
| $+$ | $-$ | $y_{+-}$ |
| $-$ | $+$ | $y_{-+}$ |
| $+$ | $+$ | $y_{++}$ |

---

# Interacción: El Concepto Clave

Hay **interacción** $AB$ cuando el efecto de $A$ **depende del nivel de** $B$.

$$\text{Interacción } AB = \frac{(y_{++}-y_{-+}) - (y_{+-}-y_{--})}{2}$$

### Interpretación gráfica

<div class="grid grid-cols-2 gap-6 mt-2">

<div class="bg-green-50 p-3 rounded text-sm">

**Sin interacción** → líneas **paralelas**

Las dos líneas de la gráfica de interacción son paralelas: el efecto de $A$ es el mismo independientemente de $B$.

</div>

<div class="bg-orange-50 p-3 rounded text-sm">

**Con interacción** → líneas que se **cruzan o convergen**

El efecto de $A$ es grande cuando $B$ es alto pero pequeño (o inverso) cuando $B$ es bajo.

</div>

</div>

<br>

> ⚠️ Si hay interacción significativa, los efectos principales **no pueden interpretarse solos**.

---

# ANOVA de Dos Vías — Modelo

$$y_{ijk} = \mu + \tau_i + \beta_j + (\tau\beta)_{ij} + \varepsilon_{ijk}$$

$$i=1,\dots,a;\quad j=1,\dots,b;\quad k=1,\dots,n$$

### Las tres hipótesis

| Hipótesis | Afirmación |
|---|---|
| $H_0^A:\ \tau_i = 0\ \forall i$ | Sin efecto principal de $A$ |
| $H_0^B:\ \beta_j = 0\ \forall j$ | Sin efecto principal de $B$ |
| $H_0^{AB}:\ (\tau\beta)_{ij} = 0\ \forall i,j$ | Sin interacción |

<br>

⚠️ Se requieren **réplicas** ($n > 1$) para separar la interacción del error.

---

# ANOVA de Dos Vías — Tabla

$$SC_T = SC_A + SC_B + SC_{AB} + SC_E$$

| Fuente | SC | g.l. | CM | $F_0$ |
|---|---|---|---|---|
| $A$ | $SC_A$ | $a-1$ | $CM_A$ | $CM_A/CM_E$ |
| $B$ | $SC_B$ | $b-1$ | $CM_B$ | $CM_B/CM_E$ |
| $AB$ | $SC_{AB}$ | $(a-1)(b-1)$ | $CM_{AB}$ | $CM_{AB}/CM_E$ |
| Error | $SC_E$ | $ab(n-1)$ | $CM_E$ | |
| **Total** | $SC_T$ | $abn-1$ | | |

---

# Estrategia de Análisis

<div class="grid grid-cols-2 gap-6">

<div class="bg-orange-50 p-4 rounded">

### Interacción significativa ($p_{AB} \leq \alpha$)

1. Graficar la interacción
2. Analizar el efecto de cada factor **por separado** para cada nivel del otro
3. NO interpretar los efectos principales aisladamente

</div>

<div class="bg-blue-50 p-4 rounded">

### Interacción no significativa ($p_{AB} > \alpha$)

1. Simplificar el modelo (puede eliminarse el término $AB$)
2. Interpretar efectos principales directamente
3. Comparaciones múltiples por factor

</div>

</div>

<br>

> Orden de análisis: primero interacción → luego efectos principales.

---

# 🔵 Opcional: Cuadrados Latinos y BIBD

### Cuadrado Latino

- Controla **dos** fuentes de variabilidad (dos bloques cruzados: filas y columnas)
- $a$ tratamientos en una grilla $a \times a$; cada tratamiento aparece **una vez** en cada fila y columna
- Modelo: $y_{ijk} = \mu + \tau_k + \rho_i + \gamma_j + \varepsilon_{ijk}$
- Útil cuando hay dos factores de ruido (p. ej., día + operario)

### BIBD (Diseño en Bloques Incompletos Balanceados)

- Cuando los bloques son más pequeños que el número de tratamientos
- Cada par de tratamientos aparece juntos en exactamente $\lambda$ bloques
- Análisis por mínimos cuadrados (ajuste por efectos de bloque)

---
layout: center
---

# Resumen Semana 2

| Concepto | Lo esencial |
|---|---|
| DBCA | Bloquear fuentes conocidas de variabilidad; $SC_T = SC_{\text{Trat}} + SC_{\text{Bloq}} + SC_E$ |
| Eficiencia relativa | ER > 1 → bloqueo ayudó; cuantifica la ganancia |
| Factorial | Varía todos los factores juntos; detecta interacciones |
| Interacción | Efecto de $A$ depende de nivel de $B$; gráfica de líneas |
| ANOVA dos vías | Tres hipótesis: $H_0^A$, $H_0^B$, $H_0^{AB}$ |
| Estrategia | Si $AB$ significativa → analizar condicionalmente |

<br>

**Próxima semana:** diseños $2^k$ y factoriales fraccionados para cribado de factores.

---
layout: center
---

# Referencias

- Montgomery, D. C. *Design and Analysis of Experiments*, caps. 4–5.
- Gutiérrez Pulido & de la Vara Salazar, *Análisis y Diseño de Experimentos*, caps. 5–6.
- Notebooks: `semana-2-bloqueo-factoriales/notebooks/`
- Datos de práctica: `semana-2-bloqueo-factoriales/datos/`
