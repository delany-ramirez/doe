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
├── slides/                       # presentaciones Slidev (una por semana)
└── slides_qmd/                   # presentaciones Quarto/Reveal.js (una por semana)
```

## ⚙️ Puesta en marcha

**Opción A — conda (recomendada, incluye R y Python):**

```bash
conda env create -f environment.yml
conda activate doe
Rscript -e "install.packages('IRkernel', repos='https://cloud.r-project.org')"
Rscript -e "IRkernel::installspec(user = TRUE)"   # registra el kernel de R en Jupyter
jupyter lab
```

> Si `conda activate doe` falla en una terminal nueva, inicializa tu shell y vuelve a abrir VS Code:
>
> ```bash
> conda init bash
> ```

**Opción B — solo Python (pip):**

```bash
python -m venv .venv
# Windows: .venv\Scripts\activate   ·   Linux/Mac: source .venv/bin/activate
pip install -r requirements.txt
jupyter lab
```

## 🧠 Kernel de R en VS Code

1. Abre cualquier notebook `*_r.ipynb`.
2. En el selector de kernel (esquina superior derecha), elige **R** / **ir**.
3. Si no aparece, ejecuta:

```bash
Rscript -e "install.packages('IRkernel', repos='https://cloud.r-project.org')"
Rscript -e "IRkernel::installspec(user = TRUE)"
```

4. Recarga VS Code con **Developer: Reload Window** y vuelve a seleccionar el kernel.

## 🎞️ Diapositivas

Hay dos versiones de las presentaciones; ambas cubren el mismo contenido.

### Opción A — Quarto / Reveal.js (`slides_qmd/`) ✅ Recomendada

Genera un **único `.html` autocontenido** que se abre con doble clic, sin servidor ni dependencias adicionales. Requiere [Quarto](https://quarto.org/docs/get-started/) instalado.

**Renderizar una semana:**

```bash
quarto render slides_qmd/semana-1/slides.qmd   # genera slides_qmd/semana-1/slides.html
```

El archivo resultante es portable: funciona offline y desde cualquier ruta.

### Opción B — Slidev (`slides/`)

Requiere **Node.js ≥ 18**. Los HTML generados necesitan un servidor local para funcionar (restricción de `type="module"` en `file://`).

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

**Generar HTML estático y servirlo:**

```bash
npm run build:1   # genera dist/semana-1/
npm run build:2
npm run build:3
npm run build:4
npm run serve     # sirve dist/ en http://localhost:3000
```

**Exportar a PDF** (requiere `playwright-chromium`, ya incluido en `devDependencies`):

```bash
npx slidev export semana-1/slides.md --output ../dist/semana-1.pdf
```

## 📄 Licencia

Material bajo [CC BY 4.0](LICENSE); el código (notebooks/scripts) además bajo MIT.
