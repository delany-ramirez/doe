# 🔵 Panorama de temas avanzados

> **Opcional / lecturas para profundizar.** Un mapa de hacia dónde seguir tras este curso:
> modelos de efectos aleatorios y mixtos, diseño robusto (Taguchi), diseños de mezclas,
> diseños óptimos y experimentación computacional. No se profundiza; se busca ubicar cada
> tema y saber cuándo recurrir a él.

## 1. Modelos de efectos aleatorios y mixtos

A lo largo del curso trabajamos con **efectos fijos** (los niveles son los únicos de
interés). Cuando los niveles de un factor son una **muestra** de una población mayor
(lotes, operarios, días elegidos al azar), el factor es **aleatorio** y lo que interesa son
las **componentes de varianza** (cuánta variabilidad aporta cada fuente). Los **modelos
mixtos** combinan factores fijos y aleatorios; son la herramienta para:

- Datos **jerárquicos/anidados** (mediciones dentro de lotes dentro de plantas).
- **Medidas repetidas** sobre la misma unidad.
- Estudios de **repetibilidad y reproducibilidad** (Gauge R&R).

Software: `lme4::lmer` / `nlme` en R; `MixedLM` en `statsmodels`. (Ver también el documento
opcional de la Semana 2.)

## 2. Diseño robusto y Taguchi

El **diseño de parámetros robusto** busca configurar el proceso para que sea **insensible**
a las fuentes de ruido. La filosofía de **Taguchi** (foco en reducir la variabilidad
alrededor del objetivo, función de pérdida) es valiosa; la práctica estadística moderna
prefiere analizar esos experimentos con el **enfoque de modelo de respuesta** (incluir
factores de control, de ruido y sus interacciones control×ruido en un único diseño) en
lugar de las razones señal-ruido. (Ampliado en el documento opcional de la Semana 3.)

## 3. Diseños de mezclas

En un **experimento de mezclas** (_mixture design_) los factores son **proporciones** de
los componentes de una formulación (un combustible, un concreto, una bebida), sujetas a la
restricción

$$
\sum_{i=1}^{q} x_i = 1, \qquad x_i \ge 0.
$$

Esta restricción cambia la geometría (el espacio experimental es un **símplex**, no un
cubo) y requiere diseños y modelos específicos:

- **Diseños:** símplex-reticular (_simplex lattice_), símplex-centroide.
- **Modelos:** polinomios de **Scheffé** (sin término independiente, por la restricción).

Aplicaciones típicas: formulación de productos, ciencia de materiales, alimentos.

## 4. Diseños óptimos (criterios de optimalidad)

Cuando las restricciones prácticas impiden usar diseños estándar (región experimental
irregular, número de corridas fijado, modelo no polinómico), se recurre a **diseños óptimos
generados por computadora** según un criterio:

- **D-óptimo:** minimiza la varianza generalizada de los coeficientes (mejor estimación de
  parámetros). El más usado.
- **I-óptimo (IV):** minimiza la varianza **promedio de predicción** sobre la región (mejor
  para predecir/optimizar respuestas).
- **A-, G-óptimos:** otros criterios sobre la matriz de información.

Software: `AlgDesign`, `skpr` en R; `pyDOE3`/`dexpy` en Python; o paquetes comerciales.

## 5. Experimentos computacionales y muchos factores

- **Experimentos de simulación (deterministas):** cuando la "respuesta" viene de un modelo
  de cómputo sin error aleatorio, se usan **hipercubos latinos** (_Latin hypercube
  sampling_) y **modelos sustitutos** (_surrogate_, p. ej. kriging / procesos gaussianos)
  para explorar el espacio con pocas corridas.
- **Cribado de muchísimos factores:** diseños **supersaturados** y métodos de análisis
  específicos.

## 6. Buenas prácticas transversales (cierre del curso)

Independientemente del diseño, recuerda:

1. **Planear antes de experimentar** (objetivo, respuesta, factores, tamaño de muestra).
2. **Aleatorizar, replicar y bloquear** según corresponda.
3. **Verificar supuestos** con análisis de residuales.
4. **Distinguir** significancia estadística de importancia práctica.
5. **Confirmar** los resultados con corridas adicionales antes de decidir.
6. Pensar la experimentación como un proceso **secuencial e iterativo**.

## 7. Para seguir aprendiendo

- Montgomery, D. C. _Design and Analysis of Experiments_ (texto de referencia integral).
- Box, Hunter & Hunter, _Statistics for Experimenters_ (intuición y filosofía).
- Myers, Montgomery & Anderson-Cook, _Response Surface Methodology_ (optimización).
- Cornell, J. A. _Experiments with Mixtures_ (mezclas).

---

### Para reflexionar

- ¿Qué tema de este panorama es más relevante para tu área de trabajo y por qué?
- Da un ejemplo de tu campo donde tuviera sentido un diseño de mezclas.
- ¿Cuándo recurrirías a un diseño D-óptimo en vez de un CCD estándar?
