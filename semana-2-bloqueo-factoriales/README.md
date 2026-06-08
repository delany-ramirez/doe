# Semana 2 — Bloqueo y factoriales (10 h)

> ✅ **Semana completa:** teoría (Fase 3) + notebooks, datos y ejercicios (Fase 4).

## Objetivos

Controlar la variabilidad mediante bloqueo y analizar experimentos con dos factores,
distinguiendo efectos principales de interacciones.

## Contenidos

### ✅ Núcleo
- Diseño en bloques completos aleatorizados (DBCA).
- Diseños factoriales: efectos principales e interacciones.
- Factorial de dos factores y ANOVA de dos vías.

### 🔵 Opcional
- Cuadrados latinos (tratamiento breve, como herramienta de bloqueo doble).
- Diseños en bloques incompletos balanceados (BIBD); efectos aleatorios/mixtos.

## Materiales

### Teoría ✅

| # | Documento | Tema |
|---|-----------|------|
| 01 | [`teoria/01-bloques-dbca.md`](teoria/01-bloques-dbca.md) | Diseño en bloques completos al azar (DBCA); eficiencia del bloqueo |
| 02 | [`teoria/02-factoriales-interacciones.md`](teoria/02-factoriales-interacciones.md) | Diseños factoriales: efectos principales e interacciones |
| 03 | [`teoria/03-anova-dos-vias.md`](teoria/03-anova-dos-vias.md) | Factorial de dos factores y ANOVA de dos vías |
| 04 🔵 | [`teoria/04-cuadrados-latinos-bibd.md`](teoria/04-cuadrados-latinos-bibd.md) | Opcional: cuadrados latinos, BIBD y efectos aleatorios/mixtos |

### Notebooks ✅ (doble versión R + Python)

| # | Notebook | Contenido |
|---|----------|-----------|
| 01 | `notebooks/01-dbca_{py\|r}.ipynb` | DBCA, supuestos y eficiencia del bloqueo |
| 02 | `notebooks/02-factorial-dos-vias_{py\|r}.ipynb` | Factorial 2 factores, interacción y ANOVA de dos vías |

### Datos ✅

| Archivo | Descripción | Variables |
|---------|-------------|-----------|
| [`datos/rendimiento-extrusion.csv`](datos/rendimiento-extrusion.csv) | DBCA: rendimiento de extrusión por presión (trat.) y lote (bloque); Montgomery 4.1 | `presion`, `lote`, `rendimiento` |
| [`datos/vida-bateria.csv`](datos/vida-bateria.csv) | Factorial 3×3: vida de batería por material y temperatura; Montgomery 5.3 | `material`, `temperatura`, `vida` |
| [`datos/rendimiento-fertilizante.csv`](datos/rendimiento-fertilizante.csv) | DBCA del ejercicio 01 (fertilizante × parcela) | `fertilizante`, `parcela`, `rendimiento` |
| [`datos/conversion-catalizador.csv`](datos/conversion-catalizador.csv) | Factorial 2×3 del ejercicio 02 (catalizador × concentración) | `catalizador`, `concentracion`, `conversion` |

### Ejercicios ✅

| # | Enunciado | Solución |
|---|-----------|----------|
| 01 | [`ejercicios/ej01-dbca.md`](ejercicios/ej01-dbca.md) | [`ej01-dbca-sol.md`](ejercicios/ej01-dbca-sol.md) |
| 02 | [`ejercicios/ej02-factorial.md`](ejercicios/ej02-factorial.md) | [`ej02-factorial-sol.md`](ejercicios/ej02-factorial-sol.md) |

### Taller ✅

| Enunciado | Solución | Duración |
|-----------|----------|----------|
| [`ejercicios/taller-semana-2.md`](ejercicios/taller-semana-2.md) | [`taller-semana-2-sol.md`](ejercicios/taller-semana-2-sol.md) | 90 min |

Taller integrador en dos partes: Parte A cubre DBCA completo (estructura, ANOVA,
eficiencia relativa y Tukey) con `rendimiento-extrusion.csv`; Parte B cubre factorial
3×3 (ANOVA de dos vías, interacción y recomendación operacional) con `vida-bateria.csv`;
cierra con un problema conceptual de selección de diseño.

> Notebooks ejecutables de principio a fin con [`environment.yml`](../environment.yml);
> versiones Python y R equivalentes.
