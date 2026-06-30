# Semana 4 — Diseños $3^k$, RSM y cierre (10 h)

## Objetivos

Conocer el modelo factorial $3^k$ como puente hacia RSM, optimizar respuestas mediante
metodología de superficie de respuesta (RSM), y conocer el panorama de temas avanzados.
Presentación del proyecto integrador.

## Contenidos

### Núcleo
- Diseños $3^k$: contrastes L/Q y curvatura como punto de partida del RSM.
- Metodología de superficie de respuesta (RSM): ascenso por máxima pendiente.
- Diseño central compuesto (CCD) y Box-Behnken (introducción aplicada).

### Opcional / lecturas para profundizar
- Panorama de temas avanzados: efectos mixtos, Taguchi, diseños de mezclas.

## Proyecto integrador

El enunciado, los datos y la rúbrica viven en [`../proyecto-integrador/`](../proyecto-integrador/).

## Materiales

### Teoría

| # | Documento | Tema |
|---|-----------|------|
| 00 | [`teoria/00-disenos-3k.md`](teoria/00-disenos-3k.md) | Diseños $3^k$: contrastes L/Q, confusión y conexión con RSM |
| 01 | [`teoria/01-rsm-ascenso.md`](teoria/01-rsm-ascenso.md) | RSM, modelo de primer orden y ascenso por máxima pendiente |
| 02 | [`teoria/02-segundo-orden-ccd-bb.md`](teoria/02-segundo-orden-ccd-bb.md) | Modelos de segundo orden, CCD, Box-Behnken y optimización |
| 03 🔵 | [`teoria/03-temas-avanzados.md`](teoria/03-temas-avanzados.md) | Opcional: panorama (mixtos, Taguchi, mezclas, diseños óptimos) |

### Notebooks (doble versión R + Python)

| # | Notebook | Contenido |
|---|----------|-----------|
| 01 | `notebooks/01-ascenso-pendiente_{py\|r}.ipynb` | Modelo de primer orden y trayectoria de máxima pendiente |
| 02 | `notebooks/02-rsm-ccd_{py\|r}.ipynb` | Modelo de segundo orden con CCD, punto óptimo, análisis canónico y contornos |

### Ejercicios 3^k → RSM (sets aislados)

| Carpeta | Tema | Formatos |
|---------|------|----------|
| `notebooks/ej01-3k-curvatura/` | Detección de curvatura: 3^2 vs. 2^2 | py · r · Rmd |
| `notebooks/ej02-3k-ascenso/` | Ascenso por máxima pendiente desde un 3^2 | py · r · Rmd |
| `notebooks/ej03-3k-a-ccd/` | Transición de 3^2 a CCD (puntos axiales + centros) | py · r · Rmd |
| `notebooks/ej04-3k3-rsm/` | Diseño 3^3 completo y superficie de respuesta | py · r · Rmd |
| `notebooks/ej05-3k-vs-bbd/` | Comparación 3^k vs. Box-Behnken (eficiencia y varianza) | py · r · Rmd |

### Datos

| Archivo | Descripción | Variables |
|---------|-------------|-----------|
| [`datos/proceso-primer-orden.csv`](datos/proceso-primer-orden.csv) | $2^2$ + 3 centros, región lineal (ascenso) | `x1,x2` (cod.), `y` |
| [`datos/rsm-ccd.csv`](datos/rsm-ccd.csv) | CCD rotable 2 factores; rendimiento | `x1,x2` (cod.), `rendimiento` |
| [`datos/pureza-ccd.csv`](datos/pureza-ccd.csv) | CCD del ejercicio 01; pureza | `x1,x2` (cod.), `pureza` |

### Ejercicios

| # | Enunciado | Solución |
|---|-----------|----------|
| 01 | [`ejercicios/ej01-rsm-ccd.md`](ejercicios/ej01-rsm-ccd.md) | [`ej01-rsm-ccd-sol.md`](ejercicios/ej01-rsm-ccd-sol.md) |
| 02 | [`ejercicios/ej02-ascenso-diseno.md`](ejercicios/ej02-ascenso-diseno.md) | [`ej02-ascenso-diseno-sol.md`](ejercicios/ej02-ascenso-diseno-sol.md) |

> Notebooks ejecutables con [`environment.yml`](../environment.yml); versiones Python y R equivalentes.
