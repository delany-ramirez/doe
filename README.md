# Curso de Diseño Estadístico de Experimentos (DOE)

Repositorio educativo del curso de **Diseño Estadístico de Experimentos** de la Maestría en Investigación Operativa y Estadística — 40 horas,
distribuidas en 4 fines de semana (~10 h cada uno). Material en español, con teoría en
`.md` (LaTeX) y notebooks ejecutables en **R** y **Python**.

## 📚 Programa

| Semana | Tema | Carpeta |
|--------|------|---------|
| 1 | Fundamentos y un solo factor | [`semana-1-fundamentos/`](semana-1-fundamentos/) |
| 2 | Bloqueo y factoriales | [`semana-2-bloqueo-factoriales/`](semana-2-bloqueo-factoriales/) |
| 3 | Diseños 2^k y fraccionados | [`semana-3-disenos-2k-fraccionados/`](semana-3-disenos-2k-fraccionados/) |
| 4 | Optimización y cierre (RSM) | [`semana-4-rsm-optimizacion/`](semana-4-rsm-optimizacion/) |
| — | Proyecto integrador | [`proyecto-integrador/`](proyecto-integrador/) |
| — | Recursos generales | [`recursos/`](recursos/) |

Cada semana sigue la misma estructura: `teoria/` · `notebooks/` · `datos/` · `ejercicios/`.

## 🗂️ Estructura del repositorio

```
doe/
├── docs/convenciones.md          # estilo .md/LaTeX, cómo ejecutar notebooks
├── semana-1-fundamentos/
│   ├── teoria/        notebooks/        datos/        ejercicios/
├── semana-2-bloqueo-factoriales/        (misma sub-estructura)
├── semana-3-disenos-2k-fraccionados/    (misma sub-estructura)
├── semana-4-rsm-optimizacion/           (misma sub-estructura)
├── proyecto-integrador/
├── recursos/
└── slides/                       # presentaciones Slidev (una por semana)
```

## ⚙️ Puesta en marcha

**Opción A — conda (recomendada, incluye R y Python):**

```bash
conda env create -f environment.yml
conda activate doe
Rscript -e "IRkernel::installspec()"   # registra el kernel de R en Jupyter
jupyter lab
```

**Opción B — solo Python (pip):**

```bash
python -m venv .venv
# Windows: .venv\Scripts\activate   ·   Linux/Mac: source .venv/bin/activate
pip install -r requirements.txt
jupyter lab
```

## 🎞️ Diapositivas (Slidev)

Las presentaciones están en `slides/` (una por semana). Requieren **Node.js ≥ 18**.

**Instalar dependencias (una sola vez):**

```bash
cd slides
npm install
```

**Ejecutar en modo presentación (servidor local):**

```bash
npm run semana-1   # abre en http://localhost:3030
npm run semana-2
npm run semana-3
npm run semana-4
```

**Generar HTML estático:**

```bash
npm run build:1   # genera dist/semana-1/
npm run build:2
npm run build:3
npm run build:4
```

## 📄 Licencia

Material bajo [CC BY 4.0](LICENSE); el código (notebooks/scripts) además bajo MIT.
