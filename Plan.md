# Plan de implementación — Semana 4: Diseños 3^k y ejercicios 3^k → RSM

> Archivo de seguimiento temporal. Fecha de inicio: 2026-06-30.

## Contexto

Se movió el tema de diseños $3^k$ de semana 3 a semana 4 (el tema no alcanzó a impartirse
en semana 3). Se requiere actualizar la documentación del repositorio y crear 5 ejercicios
graduales que conecten el modelo $3^k$ con la Metodología de Superficie de Respuesta (RSM).

---

## Tareas

### 1. Actualización del repositorio

- [x] Editar `README.md` (raíz): semana 3 → "Diseños 2^k y fraccionados"; semana 4 → "Diseños 3^k, RSM y cierre"
- [x] Editar `semana-3/README.md`: quitar objetivos, núcleo y fila de teoría relativos a 3^k
- [x] Editar `semana-4/README.md`: añadir 3^k a objetivos, núcleo y tabla de teoría; añadir tabla de ejercicios

### 2. Teoría — `semana-4/teoria/00-disenos-3k.md`

- [x] Añadir **Ejemplo 1**: cálculo completo de $C_L$, $C_Q$ y SC para un $3^2$ (rendimiento de reacción)
- [x] Añadir **Ejemplo 2**: el $3^2$ como puente al RSM (curvatura → modelo cuadrático → superficie)

### 3. Datasets CSV — `semana-4/datos/`

- [x] `rendimiento-reaccion-3k.csv` — 9 corridas, Temperatura × Concentración (Ej. 1)
- [x] `fermentacion-3k.csv` — 9 corridas, pH × Temperatura (Ej. 2)
- [x] `calidad-pintura-3k.csv` — 9 corridas, Tiempo × Temperatura (Ej. 3)
- [x] `resistencia-concreto-3k3.csv` — 27 corridas, Agua × Cemento × Arena (Ej. 4)
- [x] `pureza-farmaco-3k.csv` — 27 corridas, Temperatura × Tiempo × Concentración (Ej. 5)

### 4. Ejercicio 1 — `notebooks/ej01-3k-curvatura/`

**Tema:** Detección de curvatura con un $3^2$ vs. $2^2$

- [x] `ej01-3k-curvatura_py.ipynb`
- [x] `ej01-3k-curvatura_r.ipynb`
- [x] `ej01-3k-curvatura_r.Rmd`

### 5. Ejercicio 2 — `notebooks/ej02-3k-ascenso/`

**Tema:** Ascenso por máxima pendiente partiendo de un $3^2$

- [x] `ej02-3k-ascenso_py.ipynb`
- [x] `ej02-3k-ascenso_r.ipynb`
- [x] `ej02-3k-ascenso_r.Rmd`

### 6. Ejercicio 3 — `notebooks/ej03-3k-a-ccd/`

**Tema:** Transición de $3^2$ a CCD (aumentar con puntos axiales y centros)

- [x] `ej03-3k-a-ccd_py.ipynb`
- [x] `ej03-3k-a-ccd_r.ipynb`
- [x] `ej03-3k-a-ccd_r.Rmd`

### 7. Ejercicio 4 — `notebooks/ej04-3k3-rsm/`

**Tema:** Diseño $3^3$ completo y análisis RSM con 3 factores

- [x] `ej04-3k3-rsm_py.ipynb`
- [x] `ej04-3k3-rsm_r.ipynb`
- [x] `ej04-3k3-rsm_r.Rmd`

### 8. Ejercicio 5 — `notebooks/ej05-3k-vs-bbd/`

**Tema:** Comparación $3^k$ vs. Box-Behnken (eficiencia y varianza de predicción)

- [x] `ej05-3k-vs-bbd_py.ipynb`
- [x] `ej05-3k-vs-bbd_r.ipynb`
- [x] `ej05-3k-vs-bbd_r.Rmd`

---

## Progreso

| Sección | Estado |
|---------|--------|
| READMEs | ✅ Completado |
| Teoría (ejemplos) | ✅ Completado |
| Datasets | ✅ Completado |
| Ej. 1 Curvatura | ✅ Completado |
| Ej. 2 Ascenso | ✅ Completado |
| Ej. 3 3^2 → CCD | ✅ Completado |
| Ej. 4 3^3 + RSM | ✅ Completado |
| Ej. 5 3^k vs BBD | ✅ Completado |
