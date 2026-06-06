# Metodología de superficie de respuesta (RSM) y ascenso por máxima pendiente

> **Objetivos.** Entender el objetivo de la RSM (optimizar una respuesta), ajustar modelos
> de **primer orden** y aplicar el método del **ascenso por máxima pendiente** para
> moverse hacia la región óptima.

## 1. ¿Qué es la RSM?

La **metodología de superficie de respuesta** (RSM, _response surface methodology_) es un
conjunto de técnicas estadísticas y de optimización para **modelar y optimizar** una
respuesta $y$ que depende de varios factores cuantitativos $x_1,\dots,x_k$. Mientras los
diseños $2^k$ (Semana 3) sirven para **cribar** (¿qué factores importan?), la RSM busca el
paso siguiente: **¿en qué valores de los factores se optimiza la respuesta?**

Se asume que existe una función verdadera
$$
y = f(x_1, x_2, \dots, x_k) + \varepsilon,
$$
desconocida, que aproximamos con un **polinomio** (de primer o segundo orden) en una región
de interés. La gráfica de la respuesta esperada sobre el espacio de factores es la
**superficie de respuesta**.

## 2. Estrategia secuencial de la RSM

La RSM es **secuencial**, en dos etapas:

1. **Lejos del óptimo:** la superficie es casi plana e inclinada; basta un **modelo de
   primer orden** (plano). Se usa el **ascenso por máxima pendiente** para avanzar
   rápidamente hacia la región óptima.
2. **Cerca del óptimo:** la superficie se **curva** (hay un máximo, mínimo o silla); se
   necesita un **modelo de segundo orden** (cuadrático) y diseños como el CCD o
   Box-Behnken (documento 02).

> **Filosofía.** Empezar simple y barato (primer orden), moverse hacia donde la respuesta
> mejora, y solo refinar con un modelo cuadrático cuando se está cerca del óptimo.

## 3. El modelo de primer orden

En una región alejada del óptimo, se aproxima la superficie con un **modelo lineal** (de
primer orden) en variables codificadas:

$$
\hat{y} = \beta_0 + \sum_{i=1}^{k}\beta_i x_i .
$$

Se ajusta con un **diseño factorial $2^k$** (o fraccionado) **aumentado con puntos
centrales**. Los puntos centrales cumplen dos funciones:

- Dan una **estimación del error puro** (réplicas en el centro).
- Permiten una **prueba de curvatura**: si la media en el centro difiere mucho de la media
  de los puntos factoriales, la superficie ya **no** es plana y hay que pasar al segundo
  orden.

## 4. Prueba de falta de ajuste y curvatura

La **curvatura** se detecta comparando la respuesta media en los puntos centrales
($\bar{y}_C$) con la de los puntos factoriales ($\bar{y}_F$):

- Si $\bar{y}_C \approx \bar{y}_F$: el modelo de primer orden es adecuado; **se sigue
  ascendiendo**.
- Si difieren significativamente: hay **curvatura**; se está cerca del óptimo y se requiere
  un modelo de segundo orden.

Una prueba de **falta de ajuste** (_lack of fit_) formaliza esta comparación usando el
error puro de las réplicas centrales.

## 5. Ascenso por máxima pendiente (steepest ascent)

Mientras el modelo de primer orden sea válido, la dirección en la que la respuesta
**aumenta más rápido** es la del **gradiente** del plano ajustado, es decir, proporcional a
los coeficientes $\beta_i$:

$$
\text{dirección de ascenso} \propto (\beta_1, \beta_2, \dots, \beta_k).
$$

### Procedimiento

1. Ajustar el modelo de primer orden en la región actual (en variables codificadas).
2. Elegir un factor de referencia (el de mayor $|\beta_i|$) y fijar un **tamaño de paso**
   $\Delta x_i$ para él.
3. Los pasos de los demás factores son **proporcionales** a sus coeficientes:
   $\Delta x_j = \dfrac{\beta_j}{\beta_i}\,\Delta x_i$.
4. Realizar corridas sucesivas a lo largo de esa trayectoria (un punto, dos, tres…) y
   **medir** la respuesta.
5. Continuar mientras la respuesta **mejore**; cuando deje de mejorar (o empeore), **parar**:
   se ha llegado a la vecindad del óptimo.
6. En ese nuevo punto, ajustar **otro** modelo de primer orden y repetir, o pasar al modelo
   de segundo orden si se detecta curvatura.

> Para minimizar se usa el **descenso** por máxima pendiente (dirección $-\nabla$).

### Notas prácticas

- Los pasos se calculan en **variables codificadas** y luego se traducen a unidades
  reales (naturales) de cada factor.
- El ascenso por máxima pendiente **depende de la escala** de codificación: conviene
  codificar de forma coherente ($-1$/$+1$ en el rango experimental).

## 6. Resumen del flujo

```
Cribado (2^k)  →  ¿factores activos?
       │
       ▼
Modelo 1er orden + puntos centrales
       │  ¿curvatura?
   no  │            sí
       ▼             ▼
Ascenso máx.    Modelo 2º orden
pendiente  ───►  (CCD / Box-Behnken)
(mover región)   → optimización (doc. 02)
```

---

### Para repasar

- ¿Para qué sirven los puntos centrales en un diseño de primer orden?
- ¿En qué dirección se mueve el ascenso por máxima pendiente y por qué?
- ¿Cómo sabes que debes dejar de ascender y pasar al modelo cuadrático?

### Referencias

- Montgomery, D. C. _Design and Analysis of Experiments_, cap. 11.
- Myers, Montgomery & Anderson-Cook, _Response Surface Methodology_.
