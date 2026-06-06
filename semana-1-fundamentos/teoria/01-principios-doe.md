# Principios del diseño de experimentos

> **Objetivos.** Comprender qué es un experimento diseñado, distinguirlo de un estudio
> observacional, y dominar los tres principios básicos —aleatorización, replicación y
> bloqueo— junto con el vocabulario y la estrategia general de experimentación.

## 1. ¿Qué es un experimento?

Un **experimento** es una prueba o serie de pruebas en la que se hacen cambios
deliberados en las variables de entrada de un proceso o sistema para observar e
identificar las razones de los cambios en la variable de respuesta (Montgomery,
_Design and Analysis of Experiments_).

La idea central del **diseño de experimentos (DOE, _design of experiments_)** es
**planear** esas pruebas de modo que los datos recogidos puedan analizarse con métodos
estadísticos y conduzcan a **conclusiones válidas y objetivas**. Diseño y análisis son
dos caras de lo mismo: un buen análisis no puede rescatar un experimento mal diseñado.

### Modelo de un proceso

Conviene representar el sistema bajo estudio como un proceso que transforma entradas en
una respuesta:

- **Factores controlables** $x_1, x_2, \dots, x_k$: variables que el experimentador
  puede fijar (temperatura, concentración, tipo de catalizador).
- **Factores no controlables** $z_1, z_2, \dots, z_q$: variables que influyen pero no se
  controlan en operación normal (humedad ambiente, lote de materia prima).
- **Respuesta** $y$: la característica de calidad o desempeño que se mide.

Los objetivos típicos de un experimento son:

1. Determinar **cuáles** factores influyen más en la respuesta (cribado, _screening_).
2. Determinar **dónde** fijar los factores influyentes para optimizar $y$.
3. Determinar cómo reducir la **variabilidad** de la respuesta.
4. Hacer el proceso **robusto** frente a los factores no controlables.

## 2. Experimental vs. observacional

| | Estudio **experimental** | Estudio **observacional** |
|---|---|---|
| Asignación de tratamientos | El investigador **interviene** y asigna | Se observa lo que ocurre, sin intervenir |
| Control de confusores | Por diseño (aleatorización, bloqueo) | Solo por modelado a posteriori |
| Conclusión posible | **Causal** ("$x$ causa $y$") | **Asociación** ("$x$ se relaciona con $y$") |
| Ejemplo | Asignar al azar 3 dietas a cerdos y medir peso | Encuestar dietas que la gente ya sigue |

La diferencia clave es la **asignación aleatoria de los tratamientos**: es lo que
permite atribuir las diferencias observadas al factor y no a variables ocultas
(confusión, _confounding_). Un estudio observacional bien hecho es valioso, pero solo
un experimento controlado autoriza afirmaciones causales fuertes.

## 3. Los tres principios básicos

### 3.1 Aleatorización (randomization)

Consiste en asignar al azar tanto el **orden** de las corridas como la **asignación** de
unidades experimentales a los tratamientos.

- **Por qué.** Reparte el efecto de variables desconocidas o no controladas entre todos
  los tratamientos, evitando sesgos sistemáticos (p. ej., una deriva de la máquina a lo
  largo del día). Además, es la base que justifica los métodos estadísticos: hace que
  los errores puedan tratarse como variables aleatorias **independientes**.
- **Cómo.** Con una tabla de números aleatorios o un generador (`sample()` en R,
  `numpy.random.permutation` en Python), fijando una semilla para reproducibilidad.

> **Idea clave.** La aleatorización "promedia" el efecto de lo que no controlamos.

### 3.2 Replicación (replication)

Es la **repetición independiente** de cada tratamiento. No confundir con mediciones
repetidas de la misma unidad (eso es _duplicación_ o pseudorréplica).

- **Por qué.**
  1. Permite **estimar el error experimental** $\sigma^2$, que es la vara con la que se
     mide si una diferencia entre tratamientos es real.
  2. Hace más **precisa** la estimación de las medias: el error estándar de una media de
     $n$ réplicas es $\sigma/\sqrt{n}$.
- **Cuánta.** A mayor número de réplicas $n$, mayor **potencia** para detectar efectos
  (ver el documento de inferencia aplicada).

> **Réplica ≠ medición repetida.** Volver a pesar la misma probeta no es replicar;
> preparar y procesar una nueva probeta bajo el mismo tratamiento, sí.

### 3.3 Bloqueo (blocking)

Es agrupar las unidades experimentales en **bloques** homogéneos para controlar una
fuente de variabilidad **conocida y de poco interés** (lotes de material, días, operarios,
hornos).

- **Por qué.** Aísla la variabilidad del bloque del error experimental, aumentando la
  **precisión** de las comparaciones entre tratamientos. Lo que no se puede aleatorizar
  por completo, se bloquea.
- **Regla mnemotécnica:** _"Block what you can, randomize what you cannot."_
  (Bloquea lo que puedas; aleatoriza lo que no.)

El bloqueo se desarrolla en profundidad en la Semana 2 (diseño en bloques completos al
azar, DBCA).

## 4. Vocabulario esencial

| Término | Símbolo / definición |
|---|---|
| **Factor** | Variable de entrada estudiada (p. ej., catalizador). |
| **Nivel** | Cada valor o categoría del factor (A, B, C; 150 °C, 180 °C). |
| **Tratamiento** | Una combinación específica de niveles. En un factor, = nivel. |
| **Unidad experimental** | El objeto al que se aplica un tratamiento (una probeta, un lote). |
| **Respuesta** $y$ | La variable medida que se quiere explicar. |
| **Réplica** | Repetición independiente de un tratamiento. |
| **Error experimental** | Variación entre unidades tratadas igual; mide el "ruido". |
| **Efecto** | Cambio en la respuesta al cambiar el nivel de un factor. |

## 5. Pautas para diseñar un experimento

Montgomery propone una **guía en siete pasos**; los tres primeros son los que más se
descuidan y los más importantes:

1. **Reconocimiento y planteamiento del problema.** ¿Qué pregunta queremos responder?
2. **Selección de la variable de respuesta.** Que sea medible, relevante y con buen
   sistema de medición.
3. **Elección de factores, niveles y rango.** Distinguir factores de diseño, de los que
   se mantienen constantes y de los que se dejan variar (ruido).
4. **Elección del diseño experimental.** Tamaño de muestra, orden de corridas, bloqueo.
5. **Realización del experimento.** Vigilar que se ejecute según el plan.
6. **Análisis estadístico de los datos.** Métodos objetivos, no "ojímetro".
7. **Conclusiones y recomendaciones.** Incluir corridas de **confirmación**.

> **Principio rector.** El conocimiento del área (ingeniería, química, biología) y la
> estadística son **complementarios**: ningún diseño suple la comprensión del fenómeno.

## 6. Estrategia de experimentación

- **El peor enfoque:** _prueba y error_ sin plan.
- **Mejor, pero limitado:** _un factor a la vez_ (OFAT, _one factor at a time_). Falla
  porque no detecta **interacciones** y es ineficiente.
- **El estándar:** **experimentos factoriales**, donde los factores se varían
  conjuntamente. Detectan interacciones y usan los datos con máxima eficiencia
  (Semanas 2–3).

En esta primera semana nos concentramos en el caso más simple —**un solo factor con
varios niveles**— que se analiza con el **ANOVA de una vía** (documento 03), pero ya con
la mentalidad correcta: aleatorizar, replicar y, cuando proceda, bloquear.

---

### Para repasar

- Define con tus palabras la diferencia entre réplica y medición repetida.
- ¿Por qué un estudio observacional no autoriza conclusiones causales?
- Da un ejemplo de tu área donde tenga sentido bloquear, e indica el bloque.

### Referencias

- Montgomery, D. C. _Design and Analysis of Experiments_, caps. 1–2.
- Gutiérrez Pulido & de la Vara Salazar, _Análisis y diseño de experimentos_, cap. 1.
