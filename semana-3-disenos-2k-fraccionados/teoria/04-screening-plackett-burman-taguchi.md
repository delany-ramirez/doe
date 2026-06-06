# 🔵 Cribado: Plackett-Burman y diseños de Taguchi

> **Opcional.** Dos familias de diseños muy usados en la industria para el cribado de
> muchos factores y para el diseño robusto: los diseños de **Plackett-Burman** y la
> filosofía de **Taguchi**.

## 1. Diseños de Plackett-Burman

Los diseños de **Plackett-Burman (PB)** son diseños de cribado de **resolución III** cuyo
número de corridas es **múltiplo de 4** (12, 20, 24, 28…), no necesariamente potencia de 2.
Esto los hace muy **económicos**: con 12 corridas se pueden cribar hasta 11 factores.

### 1.1 Características

- **Ortogonales** y de dos niveles, como los $2^k$.
- Pensados **solo para efectos principales**: asumen que las interacciones son
  despreciables.
- Su **estructura de alias es compleja** ("parcial" o no regular): cada efecto principal
  se confunde **parcialmente** con muchas interacciones de dos factores, repartidas en
  fracciones. No tienen una relación de definición simple como los $2^{k-p}$.

### 1.2 Cuándo usarlos

- Muchos factores ($\ge 6$) y se quiere **identificar los pocos activos** con el mínimo de
  corridas.
- Se confía en que las **interacciones son pequeñas** frente a los efectos principales.
- Como primer paso de una estrategia secuencial: cribar con PB, luego caracterizar los
  factores activos con un diseño de mayor resolución.

> **Advertencia.** Si hay interacciones importantes, los resultados de un PB pueden ser
> engañosos por la confusión parcial. Son herramientas de **cribado**, no de
> caracterización.

## 2. La filosofía de Taguchi

Genichi **Taguchi** popularizó el uso del DOE para el **diseño robusto** de productos y
procesos: lograr que el desempeño sea **insensible** a las fuentes de variación (ruido).
Más que un conjunto de diseños nuevos, es una **filosofía** con aportes valiosos y aspectos
controvertidos.

### 2.1 Conceptos clave

- **Factores de control:** los que el ingeniero **fija** (los de diseño).
- **Factores de ruido:** los que varían en operación y **no** se controlan fácilmente
  (temperatura ambiente, desgaste, variación de materia prima).
- **Diseño robusto:** elegir los niveles de los factores de control para **minimizar el
  efecto del ruido** sobre la respuesta, no solo para optimizar la media.
- **Función de pérdida de calidad:** Taguchi asocia un **costo** a cualquier desviación del
  valor objetivo (no solo a salirse de las especificaciones), motivando reducir la
  variabilidad alrededor del blanco.

### 2.2 Arreglos ortogonales

Taguchi usa **arreglos ortogonales** (notación $L_8$, $L_9$, $L_{12}$, $L_{18}$…) que en
muchos casos coinciden con factoriales fraccionados o diseños PB ya conocidos. El enfoque
clásico cruza un **arreglo interno** (factores de control) con un **arreglo externo**
(factores de ruido) y analiza la **razón señal-ruido (S/N)**.

### 2.3 Aportes y críticas

- **Aportes (ampliamente aceptados):** poner el foco en la **reducción de variabilidad** y
  en la **robustez** frente al ruido; pensar la calidad como cercanía al objetivo.
- **Críticas (de la comunidad estadística):** el uso de las **razones S/N** y de los
  arreglos cruzados puede ser **ineficiente** y, a veces, ocultar interacciones. La
  alternativa moderna es el **diseño de experimentos robusto** con el enfoque de **modelo
  de respuesta** (incluir factores de control, de ruido y sus interacciones control×ruido
  en un único diseño combinado y modelar media y varianza).

## 3. Resumen comparativo

| Diseño | Corridas | Resolución | Ideal para |
|---|---|---|---|
| $2^{k-p}$ | potencia de 2 | III, IV, V… (regular) | cribado/caracterización estructurada |
| Plackett-Burman | múltiplo de 4 | III (no regular) | cribado de muchos factores, mínimo costo |
| Taguchi ($L_n$) | varía | equivalente a fraccionados | diseño robusto, foco en variabilidad |

> **Recomendación.** Para cribado, los fraccionados $2^{k-p}$ de resolución IV y los PB son
> excelentes. Para robustez, adoptar los **objetivos** de Taguchi (reducir variabilidad)
> pero analizarlos con el **enfoque de modelo de respuesta** de la estadística moderna.

---

### Para repasar

- ¿Por qué un Plackett-Burman de 12 corridas no es lo mismo que un $2^{k-p}$?
- Distingue factor de control de factor de ruido con un ejemplo de tu área.
- ¿Cuál es el aporte más valioso de la filosofía de Taguchi?

### Referencias

- Montgomery, D. C. _Design and Analysis of Experiments_, caps. 8 y 12.
- Plackett, R. L. & Burman, J. P. (1946). "The design of optimum multifactorial experiments".
- Box, G. E. P. (1988). "Signal-to-noise ratios, performance criteria, and transformations".
