# Ejercicio 02 — Ascenso por máxima pendiente y elección de diseño

> **Temas:** estrategia secuencial RSM, ascenso por máxima pendiente, elección entre CCD y
> Box-Behnken. Ejercicio analítico (papel y lápiz).

## Parte A — Ascenso por máxima pendiente

En una región **alejada del óptimo**, un experimento de primer orden con dos factores
codificados arroja el modelo ajustado:

$$
\hat{y} = 60 + 4\,x_1 + 1\,x_2 .
$$

1. ¿En qué **dirección** (en variables codificadas) aumenta más rápido la respuesta?
2. Tomando $x_1$ como referencia con un paso $\Delta x_1 = 1$, calcula el paso
   correspondiente $\Delta x_2$. Escribe las coordenadas de los **primeros tres puntos** de
   la trayectoria de ascenso (a partir del centro $(0,0)$).
3. ¿Cómo decides **cuándo detener** el ascenso?
4. La prueba de curvatura en el centro resulta **no significativa**. ¿Qué implica eso sobre
   continuar con el modelo de primer orden?

## Parte B — Elección de diseño de segundo orden

Para 3 factores necesitas un modelo cuadrático. Las combinaciones donde los **tres**
factores están simultáneamente en su nivel **extremo** (todos $+$ o todos $-$) producen
condiciones **peligrosas** en el reactor.

5. ¿Elegirías un **CCD** o un **Box-Behnken**? Justifica en función de la restricción.
6. ¿Cuántos niveles por factor usa cada uno? ¿Por qué el Box-Behnken evita el problema de
   las esquinas?
7. Si en cambio **no** pudieras explorar niveles **fuera** del cubo $[-1,1]^3$ (límites
   físicos del equipo), ¿qué variante del CCD usarías y qué propiedad sacrificas?

---

> Solución en [`ej02-ascenso-diseno-sol.md`](ej02-ascenso-diseno-sol.md).
