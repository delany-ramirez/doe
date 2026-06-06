# Solución — Ejercicio 01 ($2^3$ con réplicas)

> Reproducible adaptando [`../notebooks/01-disenos-2k_py.ipynb`](../notebooks/01-disenos-2k_py.ipynb)
> al archivo [`../datos/grabado-2k.csv`](../datos/grabado-2k.csv).

## a) Diseño

$2^3 = 8$ combinaciones de tratamientos; con 2 réplicas, $N=16$ corridas. Las réplicas
proporcionan **grados de libertad para el error puro** ($CM_E$), de modo que cada efecto
puede probarse con su prueba $F$. En la réplica única no existe ese estimador y hay que
recurrir al gráfico de probabilidad normal de efectos.

## b) Efectos estimados

| Efecto | $A$ | $B$ | $C$ | $AB$ | $AC$ | $BC$ | $ABC$ |
|---|---|---|---|---|---|---|---|
| Magnitud | **16.9** | 0.4 | **9.6** | −0.6 | **8.6** | 1.6 | −0.4 |

Dominan **$A$**, **$C$** y la interacción **$AC$**.

## c) Tabla ANOVA

| Fuente | SC | g.l. | CM | $F$ | valor-p |
|---|---|---|---|---|---|
| $A$ | 1139.06 | 1 | 1139.06 | 628.4 | $<10^{-8}$ |
| $B$ | 0.56 | 1 | 0.56 | 0.31 | 0.59 |
| $C$ | 370.56 | 1 | 370.56 | 204.4 | $<10^{-6}$ |
| $AB$ | 1.56 | 1 | 1.56 | 0.86 | 0.38 |
| $AC$ | 297.56 | 1 | 297.56 | 164.2 | $<10^{-6}$ |
| $BC$ | 10.56 | 1 | 10.56 | 5.83 | 0.042 |
| $ABC$ | 0.56 | 1 | 0.56 | 0.31 | 0.59 |
| Error | 14.50 | 8 | 1.81 | | |

Significativos a $\alpha=0.05$: **$A$, $C$, $AC$** (muy claros) y, marginalmente, **$BC$**
($p=0.042$, pero de magnitud pequeña, 1.6). $B$, $AB$ y $ABC$ son despreciables.

## d) Interacción $AC$

Gráfica de $y$ vs. $C$ con una línea por nivel de $A$:

- Con **$A=-1$** (potencia baja): cambiar $C$ casi no altera la respuesta (líneas
  planas, ~41).
- Con **$A=+1$** (potencia alta): subir $C$ de $-1$ a $+1$ **aumenta** mucho la tasa
  (de ~49 a ~68).

Las líneas **no son paralelas** (divergen): el efecto de $C$ **depende** del nivel de $A$.
Por eso $A$ y $C$ no deben interpretarse aislados.

## e) Modelo reducido y óptimo

$$
\hat{y} = 50.6 + 8.4\,x_A + 4.8\,x_C + 4.3\,x_A x_C
$$

(coeficientes ≈ efecto/2). Como todos los coeficientes de los términos relevantes son
positivos y la interacción refuerza, la **máxima** tasa de grabado se logra con
**$A=+1$ y $C=+1$** (potencia alta y presión alta): combinación que da ~68–70.

## f) Factor $B$

$B$ (flujo de gas) **no influye** en la tasa de grabado. En la práctica se fija en el nivel
más **económico, seguro o conveniente** (p. ej., el que reduzca consumo de gas), ya que no
afecta la respuesta. Esto simplifica y abarata el proceso.
