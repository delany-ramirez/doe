# Semana 3 — Diseños 2^k y fraccionados (10 h)

> ✅ **Semana completa:** teoría (Fase 5) + notebooks, datos y ejercicios (Fase 6).

## Objetivos

Diseñar y analizar experimentos factoriales a dos niveles, incluyendo réplica única,
bloqueo con confusión y fracciones para screening de muchos factores.

## Contenidos

### ✅ Núcleo
- Diseños $2^k$: cálculo de efectos, gráficos de probabilidad normal, réplica única.
- Bloqueo y confusión (confounding).
- Factoriales fraccionados $2^{k-p}$: resolución, estructura de alias.

### 🔵 Opcional
- Screening con diseños de Plackett-Burman.
- Diseños de Taguchi.

## Materiales

### Teoría ✅

| # | Documento | Tema |
|---|-----------|------|
| 01 | [`teoria/01-disenos-2k.md`](teoria/01-disenos-2k.md) | Diseños $2^k$: cálculo de efectos, gráfico de probabilidad normal, réplica única |
| 02 | [`teoria/02-bloqueo-confusion.md`](teoria/02-bloqueo-confusion.md) | Bloqueo y confusión (confounding) |
| 03 | [`teoria/03-factoriales-fraccionados.md`](teoria/03-factoriales-fraccionados.md) | Factoriales fraccionados $2^{k-p}$: resolución y alias |
| 04 🔵 | [`teoria/04-screening-plackett-burman-taguchi.md`](teoria/04-screening-plackett-burman-taguchi.md) | Opcional: Plackett-Burman y Taguchi |

### Notebooks ✅ (doble versión R + Python)

| # | Notebook | Contenido |
|---|----------|-----------|
| 01 | `notebooks/01-disenos-2k_{py\|r}.ipynb` | $2^4$ con réplica única, efectos y gráfico de probabilidad normal |
| 02 | `notebooks/02-fraccionado_{py\|r}.ipynb` | Media fracción $2^{4-1}$ y estructura de alias |

### Datos ✅

| Archivo | Descripción | Variables |
|---------|-------------|-----------|
| [`datos/filtracion-2k.csv`](datos/filtracion-2k.csv) | $2^4$ réplica única: tasa de filtración (Montgomery 6.2) | `A,B,C,D` (±1), `tasa` |
| [`datos/grabado-2k.csv`](datos/grabado-2k.csv) | $2^3$ con 2 réplicas (ejercicio 01) | `A,B,C` (±1), `rep`, `y` |

### Ejercicios ✅

| # | Enunciado | Solución |
|---|-----------|----------|
| 01 | [`ejercicios/ej01-factorial-2k.md`](ejercicios/ej01-factorial-2k.md) | [`ej01-factorial-2k-sol.md`](ejercicios/ej01-factorial-2k-sol.md) |
| 02 | [`ejercicios/ej02-fraccionado.md`](ejercicios/ej02-fraccionado.md) | [`ej02-fraccionado-sol.md`](ejercicios/ej02-fraccionado-sol.md) |

> Notebooks ejecutables con [`environment.yml`](../environment.yml); versiones Python y R equivalentes.
