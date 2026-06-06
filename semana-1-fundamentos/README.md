# Semana 1 — Fundamentos y un solo factor (10 h)

> ✅ **Semana completa:** teoría (Fase 1) + notebooks, datos y ejercicios (Fase 2).

## Objetivos

Al finalizar la semana, el estudiante será capaz de planear un experimento de un solo
factor, analizarlo con ANOVA de una vía, verificar sus supuestos y comparar tratamientos.

## Contenidos

### ✅ Núcleo
- Principios del DOE: aleatorización, replicación, bloqueo; experimental vs. observacional.
- Repaso de inferencia aplicada: hipótesis, potencia y tamaño de muestra.
- ANOVA de una vía (efectos fijos) y verificación de supuestos (análisis de residuales).
- Comparaciones múltiples: Tukey y Dunnett.

### 🔵 Opcional
- Pruebas no paramétricas (Kruskal-Wallis), transformaciones (Box-Cox).

## Materiales

### Teoría ✅

| # | Documento | Tema |
|---|-----------|------|
| 01 | [`teoria/01-principios-doe.md`](teoria/01-principios-doe.md) | Principios del DOE: aleatorización, replicación, bloqueo; experimental vs. observacional |
| 02 | [`teoria/02-inferencia-aplicada.md`](teoria/02-inferencia-aplicada.md) | Repaso de inferencia: hipótesis, errores I/II, potencia y tamaño de muestra |
| 03 | [`teoria/03-anova-una-via.md`](teoria/03-anova-una-via.md) | ANOVA de una vía (efectos fijos) y verificación de supuestos (residuales) |
| 04 | [`teoria/04-comparaciones-multiples.md`](teoria/04-comparaciones-multiples.md) | Comparaciones múltiples: Tukey (HSD) y Dunnett |
| 05 🔵 | [`teoria/05-no-parametricas-transformaciones.md`](teoria/05-no-parametricas-transformaciones.md) | Opcional: Kruskal-Wallis y transformaciones (Box-Cox) |

### Notebooks ✅ (doble versión R + Python)

| # | Notebook | Contenido |
|---|----------|-----------|
| 01 | `notebooks/01-anova-una-via_{py\|r}.ipynb` | ANOVA de una vía, residuales, Tukey y Dunnett |
| 02 🔵 | `notebooks/02-no-parametricas-transformaciones_{py\|r}.ipynb` | Opcional: Box-Cox y Kruskal-Wallis |

### Datos ✅

| Archivo | Descripción | Variables |
|---------|-------------|-----------|
| [`datos/resistencia-algodon.csv`](datos/resistencia-algodon.csv) | Resistencia a la tensión de fibra sintética vs. % de algodón (Montgomery 3.1); 5 niveles × 5 réplicas | `algodon_pct` (15–35 %), `resistencia` (lb/pulg²) |
| [`datos/tiempo-coagulacion.csv`](datos/tiempo-coagulacion.csv) | Tiempo de coagulación por dieta (A = control); diseño desbalanceado | `dieta` (A–D), `tiempo` (s) |
| [`datos/rendimiento-catalizador.csv`](datos/rendimiento-catalizador.csv) | Rendimiento por catalizador (usado en el ejercicio 01); 4 niveles × 6 réplicas | `catalizador` (C1–C4), `rendimiento` (%) |

### Ejercicios ✅

| # | Enunciado | Solución |
|---|-----------|----------|
| 01 | [`ejercicios/ej01-anova.md`](ejercicios/ej01-anova.md) | [`ej01-anova-sol.md`](ejercicios/ej01-anova-sol.md) |
| 02 🔵 | [`ejercicios/ej02-no-parametricas.md`](ejercicios/ej02-no-parametricas.md) | [`ej02-no-parametricas-sol.md`](ejercicios/ej02-no-parametricas-sol.md) |

> Los notebooks se ejecutan de principio a fin con el entorno de [`environment.yml`](../environment.yml).
> Las versiones Python y R producen resultados equivalentes.
