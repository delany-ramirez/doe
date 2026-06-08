# Taller Semana 3 — Solución

> Referencia al enunciado: [`taller-semana-3.md`](taller-semana-3.md)

---

## Problema 1

**a)** Un $2^4$ tiene $2^4 = 16$ corridas y $2^4 - 1 = 15$ efectos estimables: 4
principales, $\binom{4}{2}=6$ de dos factores, $\binom{4}{3}=4$ de tres factores y
1 de cuatro factores.

**b)** "Réplica única": se corre exactamente una observación por combinación de
tratamientos, por lo que no existe variabilidad pura entre repeticiones del mismo punto.
Sin réplicas no puede calcularse $SS_E$ directamente; se necesita asumir que las
interacciones de alto orden son despreciables (o usar métodos gráficos) para estimar
el error.

**c)** La columna $AC$ se obtiene multiplicando signo a signo las columnas $A$ y $C$:

| Corrida | A | C | AC |
|--------:|--:|--:|---:|
| 1 | −1 | −1 | +1 |
| 2 | +1 | −1 | −1 |
| 3 | −1 | −1 | +1 |
| 4 | +1 | −1 | −1 |
| 5 | −1 | +1 | −1 |
| 6 | +1 | +1 | +1 |
| 7 | −1 | +1 | −1 |
| 8 | +1 | +1 | +1 |
| 9 | −1 | −1 | +1 |
| 10 | +1 | −1 | −1 |
| 11 | −1 | −1 | +1 |
| 12 | +1 | −1 | −1 |
| 13 | −1 | +1 | −1 |
| 14 | +1 | +1 | +1 |
| 15 | −1 | +1 | −1 |
| 16 | +1 | +1 | +1 |

$ACD$ se obtiene multiplicando las columnas $A$, $C$ y $D$ signo a signo (producto de
tres columnas de ±1).

---

## Problema 2

Usando la fórmula $\hat{E} = (\Sigma_{+} - \Sigma_{-})/8$:

| Efecto | Contraste | $\hat{E}$ |
|--------|----------:|----------:|
| A | 173 | **21.625** |
| B | 25 | 3.125 |
| C | 79 | **9.875** |
| D | 117 | **14.625** |
| AB | 1 | 0.125 |
| AC | −145 | **−18.125** |
| AD | 133 | **16.625** |
| BC | 19 | 2.375 |
| BD | −3 | −0.375 |
| CD | −9 | −1.125 |
| ABC | 15 | 1.875 |
| ABD | 33 | 4.125 |
| ACD | −13 | −1.625 |
| BCD | −21 | −2.625 |
| ABCD | 11 | 1.375 |

**a)** $\hat{E}_A = 21.625$; $\hat{E}_C = 9.875$; $\hat{E}_D = 14.625$.

**b)** $\hat{E}_{AC} = -18.125$; $\hat{E}_{AD} = 16.625$.

**c)** Los cinco de mayor magnitud: $|A| = 21.6$, $|AC| = 18.1$, $|AD| = 16.6$,
$|D| = 14.6$, $|C| = 9.9$.

---

## Problema 3

**a)** Si todos los efectos son nulos (solo ruido) con $\sigma^2$ constante, los 15
efectos estimados son proporcionales a una $\mathcal{N}(0, 4\sigma^2/N)$ y alineados
perfectamente sobre una recta en el gráfico de probabilidad normal.

**b)** Los efectos que se apartan claramente de la recta central (cola derecha / izquierda)
son los activos: **A**, **C**, **D**, **AC** y **AD**.

**c)** Código R:

```r
library(FrF2)
df <- read.csv("../datos/filtracion-2k.csv")
modelo <- lm(tasa ~ A*B*C*D, data = df)
DanielPlot(modelo, half = FALSE, alpha = 0.10)
```

Los mismos cinco efectos aparecen alejados de la línea en el gráfico.

---

## Problema 4

**a)** $\hat{\beta}_0 = \bar{y}_{..} = 1121/16 = 70.06$.

Coeficientes de regresión (efecto / 2):

| Término | $\hat{E}$ | $\hat{\beta}$ |
|---------|----------:|--------------:|
| A | 21.625 | 10.813 |
| C | 9.875 | 4.938 |
| D | 14.625 | 7.313 |
| AC | −18.125 | −9.063 |
| AD | 16.625 | 8.313 |

Modelo reducido:
$$\hat{y} = 70.06 + 10.81\,x_A + 4.94\,x_C + 7.31\,x_D - 9.06\,x_Ax_C + 8.31\,x_Ax_D$$

**b)** Para maximizar $\hat{y}$, fija $x_A = +1$, luego busca el mejor valor de $x_C$ y
$x_D$:

Con $x_A = +1$:
$$\hat{y} = 70.06 + 10.81 + 4.94\,x_C + 7.31\,x_D - 9.06\,x_C + 8.31\,x_D
= 80.87 - 4.12\,x_C + 15.62\,x_D$$

Máximo con $x_C = -1$ y $x_D = +1$:
$$\hat{y} = 80.87 + 4.12 + 15.62 = 100.61 \text{ gal/h}$$

Verificación con el dato observado en $(A=+1, B=-1, C=-1, D=+1)$: 100 gal/h. ✓

**c)** Tabla ANOVA con 5 términos activos (combinación de los 10 restantes como error):

```r
modelo_red <- lm(tasa ~ A + C + D + I(A*C) + I(A*D), data = df)
anova(modelo_red)
```

| Fuente | gl | SC | CM | $F_0$ |
|--------|---:|------:|-------:|------:|
| A | 1 | 1870.6 | 1870.6 | 282.7 |
| C | 1 | 390.1 | 390.1 | 59.0 |
| D | 1 | 855.6 | 855.6 | 129.3 |
| AC | 1 | 1314.1 | 1314.1 | 198.6 |
| AD | 1 | 1105.6 | 1105.6 | 167.1 |
| Error (10 ef.) | 10 | 66.2 | 6.6 | |

Todos los cinco términos son significativos ($F_{0.05,1,10} = 4.96$; todos $F_0 \gg 4.96$).

---

## Problema 5

**a)** Fracción principal $I = ABCD$ ($ABCD = +1$): corridas de la tabla original donde
el producto $A \cdot B \cdot C \cdot D = +1$:

Corridas 1, 4, 6, 7, 10, 11, 13, 16:

| A | B | C | D | Tasa |
|--:|--:|--:|--:|-----:|
| −1 | −1 | −1 | −1 | 45 |
| +1 | +1 | −1 | −1 | 65 |
| +1 | −1 | +1 | −1 | 60 |
| −1 | +1 | +1 | −1 | 80 |
| +1 | −1 | −1 | +1 | 100 |
| −1 | +1 | −1 | +1 | 45 |
| −1 | −1 | +1 | +1 | 75 |
| +1 | +1 | +1 | +1 | 96 |

**b)** Relación generatriz: $I = ABCD$. Estructura de alias (cada efecto + su alias):

$$A = BCD, \quad B = ACD, \quad C = ABD, \quad D = ABC$$
$$AB = CD, \quad AC = BD, \quad AD = BC$$

Cada efecto principal está confundido con una interacción de **tres** factores; cada
interacción de dos factores está confundida con otra interacción de dos factores.

**c)** Resolución **IV**. Implicaciones:

- Los efectos **principales no están confundidos** con ninguna interacción de dos
  factores (solo con triples, que suelen ser despreciables). ✓
- Las interacciones de **dos factores sí están confundidas** entre sí (ej. $AB$
  confundida con $CD$). No se pueden estimar de forma independiente.

**d)** No: con $I = ABCD$ y resolución IV, $AC$ está confundida con $BD$. Si $AC$ es
activa no se puede saber si el efecto observado viene de $AC$, de $BD$ o de ambas.

Opciones para estimar $AC$ y $AD$ sin confusión:
1. **Correr el diseño completo $2^4$** (16 corridas, como en el enunciado del taller).
2. **Aumentar la fracción** con la fracción complementaria (8 corridas adicionales con
   $I = -ABCD$) para obtener el $2^4$ completo.
3. **Usar un generador distinto** como $I = ABD$ (resolución IV pero con alias
   $AC = BCD$, que sí permite estimar $AC$ si $BCD$ es despreciable), o un diseño de
   resolución V ($2^{5-1}$ con 16 corridas si se agrega un quinto factor ficticio).
