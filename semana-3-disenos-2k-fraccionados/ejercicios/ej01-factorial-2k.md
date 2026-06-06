# Ejercicio 01 — Diseño $2^3$ con réplicas

> **Temas:** diseño $2^k$, cálculo de efectos, ANOVA, interacciones. **Datos:**
> [`../datos/grabado-2k.csv`](../datos/grabado-2k.csv).

## Contexto

En un proceso de **grabado** (etching) de obleas se estudian tres factores a dos niveles
($-1$/$+1$): **$A$** (potencia del plasma), **$B$** (flujo de gas) y **$C$** (presión de
la cámara). La respuesta es la **tasa de grabado** ($y$). Se corre un factorial $2^3$
completo con **2 réplicas** (16 corridas, en orden aleatorizado).

## Preguntas

**a)** ¿Cuántas combinaciones de tratamientos tiene el diseño? ¿Por qué tener réplicas
permite, a diferencia de la réplica única, hacer un ANOVA clásico?

**b)** Estima los **siete efectos** ($A$, $B$, $C$, $AB$, $AC$, $BC$, $ABC$). ¿Cuáles son
los de mayor magnitud?

**c)** Construye la tabla ANOVA. ¿Qué efectos son significativos con $\alpha=0.05$?

**d)** Hay una interacción $AC$ importante. Dibuja (o describe) su **gráfica de
interacción** e interpreta: ¿el efecto de $C$ depende del nivel de $A$?

**e)** Escribe el **modelo de regresión reducido** en variables codificadas, con solo los
términos significativos. ¿Qué combinación de niveles **maximiza** la tasa de grabado?

**f)** El factor $B$ resultó no significativo. ¿Qué harías con él en la práctica?

---

> Solución en [`ej01-factorial-2k-sol.md`](ej01-factorial-2k-sol.md).
