# Convenciones del repositorio

Guía de estilo y reproducibilidad para todo el material del curso. Toda fase de
construcción debe respetar estas convenciones.

## 1. Estructura de cada semana

```
semana-N-nombre/
├── README.md        # índice de la semana: objetivos, contenidos núcleo/opcional, rutas
├── teoria/          # documentos .md con LaTeX (uno por tema)
├── notebooks/       # .ipynb ejecutables, en R y Python (ver §4)
├── datos/           # datasets .csv usados por notebooks y ejercicios
└── ejercicios/      # enunciados y soluciones
```

## 2. Núcleo vs. opcional

Cada README de semana clasifica los contenidos:

- ✅ **Núcleo** — material evaluable, imprescindible.
- 🔵 **Opcional** — profundización o lecturas para ampliar.

Usar estos emojis de forma consistente en títulos y tablas de contenido.

## 3. Estilo de los `.md` con LaTeX

- Fórmulas **inline** con `$...$`: por ejemplo $y_{ij} = \mu + \tau_i + \varepsilon_{ij}$.
- Fórmulas en **bloque** con `$$...$$` en su propia línea, con líneas en blanco alrededor.
- Notación estándar (Montgomery, _Design and Analysis of Experiments_): $\mu$ media global,
  $\tau_i$ efecto del tratamiento, $\varepsilon_{ij}\sim N(0,\sigma^2)$ error.
- Un archivo `.md` por tema, con encabezado `# Título` y una línea de objetivos al inicio.
- Tablas de ANOVA en formato Markdown; reservar bloques de código para R/Python.
- Idioma: **español**. Términos técnicos en inglés entre paréntesis la primera vez
  (p. ej. "confusión (confounding)").

## 4. Notebooks ejecutables (R y Python)

- Cada tema práctico se entrega en **doble versión**: `tema_xx_py.ipynb` (kernel Python)
  y `tema_xx_r.ipynb` (kernel IRkernel/R), produciendo resultados equivalentes.
- Los notebooks **deben ejecutarse de principio a fin sin errores** con el entorno de
  `environment.yml`.
- Leer los datos desde `../datos/` con rutas relativas; no usar rutas absolutas.
- Fijar semilla aleatoria cuando haya simulación (`set.seed(...)` / `np.random.seed(...)`).
- Primera celda: título, objetivos y lista de paquetes usados.

### Convención de nombres

| Elemento | Patrón | Ejemplo |
|----------|--------|---------|
| Teoría | `NN-tema-corto.md` | `01-principios-doe.md` |
| Notebook | `NN-tema-corto_{py\|r}.ipynb` | `02-anova-una-via_py.ipynb` |
| Datos | `nombre-descriptivo.csv` | `rendimiento-catalizador.csv` |
| Ejercicio | `ejNN-tema.md` (+ `ejNN-tema-sol.md`) | `ej01-anova.md` |

## 5. Datos

- Formato `.csv` con encabezados claros, separador coma, punto decimal.
- Datasets pequeños y reproducibles; si son simulados, incluir el script/celda que los genera.
- Documentar cada dataset (origen, variables, unidades) en el README de la semana.

## 6. Commits

- Un commit por fase completada (o por hito claro dentro de una fase).
- Mensaje en español, imperativo: `Fase 1: teoría semana 1 (principios, ANOVA, post-hoc)`.
- Registrar el hash del commit en la propiedad **Commit asociado** de la tarea en Notion.
