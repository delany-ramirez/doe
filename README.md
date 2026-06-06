# Curso de Diseño de Experimentos (DOE)

Repositorio educativo del curso de **Diseño de Experimentos** de maestría — 40 horas,
distribuidas en 4 fines de semana (~10 h cada uno). Material en español, con teoría en
`.md` (LaTeX) y notebooks ejecutables en **R** y **Python**.

> ✅ **Estado:** contenido completo. Las cuatro semanas (teoría + notebooks R/Python +
> datos + ejercicios), el proyecto integrador y los recursos generales están construidos y
> verificados. El plan y el seguimiento de tareas se llevan en Notion (ver _Cómo retomar_).

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
└── recursos/
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

## 🧭 Cómo retomar la construcción

El plan completo, las fases y el estado de cada tarea viven en la página de Notion
**"Curso DOE — Plan de construcción"**. Una nueva sesión debe:

1. Abrir esa página y leer la sección **"Cómo retomar"** y la base de datos de tareas.
2. Tomar la primera fase en estado **Pendiente** marcada como _siguiente_.
3. Al terminar, marcar la fase como **Hecha** y registrar el commit asociado.

## 📄 Licencia

Material bajo [CC BY 4.0](LICENSE); el código (notebooks/scripts) además bajo MIT.
