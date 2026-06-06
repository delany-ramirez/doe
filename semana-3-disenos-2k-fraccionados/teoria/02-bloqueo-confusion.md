# Bloqueo y confusión en diseños $2^k$

> **Objetivos.** Entender cómo bloquear un diseño $2^k$ cuando no caben todas las corridas
> en condiciones homogéneas, qué significa **confundir** (confounding) un efecto con los
> bloques y cómo elegir qué confundir para preservar la información importante.

## 1. El problema

Un $2^k$ puede requerir más corridas de las que caben en condiciones homogéneas: un solo
turno, un lote de materia prima, un día de operación. Si las $2^k$ corridas se reparten en
varios **bloques** (turnos, lotes, días), la variabilidad entre bloques se mezcla con la de
los tratamientos. Como en el DBCA (Semana 2), queremos **bloquear** para controlar ese
ruido, pero ahora el diseño no permite poner todos los tratamientos en cada bloque sin
sacrificar algo.

## 2. La idea de confundir (confounding)

**Confundir** un efecto con los bloques significa que ese efecto y la diferencia entre
bloques **no se pueden separar**: quedan ligados, indistinguibles. La estrategia consiste
en **elegir deliberadamente** qué efecto confundir, sacrificando el de **menor interés**
—normalmente la **interacción de orden más alto**— para proteger los efectos principales y
las interacciones de dos factores.

> **Compromiso central.** No se puede bloquear gratis: se "paga" confundiendo un efecto.
> La habilidad está en pagar con el efecto que menos importa.

## 3. Confundir en dos bloques

Para dividir un $2^k$ en **dos bloques** se usa un **contraste de definición** (_defining
contrast_), normalmente la interacción de mayor orden. Ejemplo con un $2^3$ confundiendo
$ABC$:

- Se calcula la columna de signos de $ABC$ (ver tabla de signos del documento 01).
- Las corridas con $ABC = +$ van a un bloque; las de $ABC = -$, al otro.

| Bloque 1 ($ABC=-$) | Bloque 2 ($ABC=+$) |
|---|---|
| $(1),\ ab,\ ac,\ bc$ | $a,\ b,\ c,\ abc$ |

Ahora la diferencia entre bloques **es** el efecto $ABC$: están confundidos. Pero $A$, $B$,
$C$, $AB$, $AC$, $BC$ siguen estimándose **limpiamente**. Como $ABC$ suele ser
despreciable, el costo es mínimo.

## 4. Confundir en más bloques

Para $2^p$ bloques se necesitan $p$ contrastes de definición **independientes**; sus
**interacciones generalizadas** quedan también confundidas (no se eligen libremente, se
deducen). Por ejemplo, para un $2^4$ en 4 bloques se eligen dos efectos a confundir
(p. ej. $ABC$ y $BCD$); su interacción generalizada $AD$ (= $ABC\cdot BCD$ eliminando los
cuadrados) **también** se confunde. Hay que verificar que ningún efecto principal o
interacción de dos factores importante quede confundido sin querer.

## 5. Confusión parcial (con réplicas)

Si el experimento se **replica**, se puede confundir un efecto **distinto en cada réplica**.
Así, un efecto confundido en una réplica se estima limpiamente en las otras: se recupera
**información parcial** sobre todos los efectos. Es la **confusión parcial** (_partial
confounding_), útil cuando interesa estimar también alguna interacción de orden alto.

## 6. Relación con los diseños fraccionados

El bloqueo por confusión y los **factoriales fraccionados** (documento 03) comparten la
misma maquinaria algebraica (contrastes de definición, interacciones generalizadas). La
diferencia conceptual:

- **Bloqueo:** se corren **todas** las $2^k$ combinaciones, repartidas en bloques; se
  confunde un efecto con los **bloques**.
- **Fraccionado:** se corre **solo una fracción** de las combinaciones; los efectos se
  confunden **entre sí** (alias).

## 7. Buenas prácticas

- Confundir siempre las **interacciones de orden más alto**, las menos importantes.
- Documentar **explícitamente** qué efecto(s) quedan confundidos con los bloques: forma
  parte del reporte del diseño.
- Si una interacción de orden alto pudiera ser relevante, considerar **confusión parcial**
  con réplicas.

---

### Para repasar

- ¿Qué significa que un efecto esté "confundido" con los bloques?
- En un $2^3$ en dos bloques, ¿qué efecto conviene confundir y por qué?
- ¿En qué se diferencia el bloqueo por confusión de un diseño fraccionado?

### Referencias

- Montgomery, D. C. _Design and Analysis of Experiments_, cap. 7.
- Box, Hunter & Hunter, _Statistics for Experimenters_, cap. 7.
