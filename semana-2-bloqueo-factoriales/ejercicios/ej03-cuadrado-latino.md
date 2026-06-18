# 🔵 Ejercicio 03 — Cuadrado latino (bloqueo doble)

> **Opcional.** **Temas:** cuadrado latino, bloqueo en dos direcciones. **Datos:**
> [`../datos/rendimiento-combustible.csv`](../datos/rendimiento-combustible.csv).
> Requiere la teoría [`../teoria/04-cuadrados-latinos-bibd.md`](../teoria/04-cuadrados-latinos-bibd.md).

## Contexto

Una empresa de transporte compara **cuatro formulaciones de combustible** (A, B, C, D)
midiendo el **rendimiento** (km/L). Hay dos fuentes de variabilidad conocidas y cruzadas
que conviene controlar: el **conductor** (4 conductores con estilos distintos) y el
**coche** (4 vehículos). Para bloquear **ambas** a la vez con solo 16 corridas se usa un
**cuadrado latino** $4\times4$: cada combustible se prueba una vez con cada conductor y una
vez en cada coche.

| Conductor \ Coche | Coche1 | Coche2 | Coche3 | Coche4 |
|---|---|---|---|---|
| Cond1 | A — 14 | B — 14 | C — 12 | D — 14 |
| Cond2 | B — 15 | C — 18 | D — 11 | A — 18 |
| Cond3 | C — 13 | D — 11 | A — 12 | B — 14 |
| Cond4 | D — 12 | A — 15 | B — 11 | C — 20 |

## Preguntas

**a)** Verifica que el arreglo es un cuadrado latino: ¿aparece cada combustible exactamente
una vez en cada fila (conductor) y en cada columna (coche)? ¿Cuántas corridas usa frente a
un factorial completo conductor×coche×combustible con una réplica?

**b)** Escribe el modelo $y_{ijk}=\mu+\alpha_i+\tau_j+\beta_k+\varepsilon_{ijk}$ e identifica
qué representa cada término. ¿Qué supuesto fuerte impone el cuadrado latino?

**c)** Construye la tabla ANOVA (filas, columnas, tratamientos, error). Reporta $F$ y el
valor-p del **combustible** con $\alpha=0.05$. ¿Cuántos grados de libertad tiene el error?

**d)** ¿Resultaron significativos los dos factores de bloqueo (conductor y coche)? ¿Qué
implica eso sobre la decisión de bloquear en dos direcciones?

**e)** Da las medias por combustible y recomienda una formulación. ¿Por qué los pocos
grados de libertad del error limitan la potencia de este diseño?

---

> Solución en [`ej03-cuadrado-latino-sol.md`](ej03-cuadrado-latino-sol.md).
