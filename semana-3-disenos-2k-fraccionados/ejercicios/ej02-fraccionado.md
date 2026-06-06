# Ejercicio 02 — Factorial fraccionado y estructura de alias

> **Temas:** factoriales fraccionados $2^{k-p}$, generadores, relación de definición,
> alias, resolución. Ejercicio principalmente **analítico** (papel y lápiz + verificación).

## Contexto

Un equipo de I+D quiere **cribar 5 factores** ($A$, $B$, $C$, $D$, $E$) sobre el
rendimiento de un proceso, pero solo dispone de presupuesto para **8 corridas**. Plantea un
diseño $2^{5-2}$ con los generadores

$$
D = AB, \qquad E = AC.
$$

## Preguntas

**a)** ¿Qué fracción del factorial completo $2^5$ representan 8 corridas? ¿Cuántas corridas
tendría el completo?

**b)** A partir de los generadores $D=AB$ y $E=AC$, obtén la **relación de definición
completa** (incluida la interacción generalizada). *Pista:* $I=ABD$, $I=ACE$, y su producto.

**c)** Determina la **resolución** del diseño (longitud de la palabra más corta en la
relación de definición). ¿Qué implica esa resolución sobre qué efectos se confunden?

**d)** Escribe la **cadena de alias** del efecto principal $A$ (hasta interacciones de dos
factores). ¿Está $A$ confundido con algún efecto principal? ¿Con interacciones de dos
factores?

**e)** ¿Es este un buen diseño para cribado? Si te preocupara que algunas interacciones de
dos factores fueran importantes, ¿qué estrategia secuencial usarías para resolver alias?

**f)** Construye la tabla de signos de las 8 corridas (columnas $A$, $B$, $C$, $D=AB$,
$E=AC$) y verifica que cada par de columnas es ortogonal.

---

> Solución en [`ej02-fraccionado-sol.md`](ej02-fraccionado-sol.md).
