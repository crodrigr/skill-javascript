# 📘 Ejemplo 02 — `else if` y valores verdaderos y falsos

> 🎓 **Resultados de aprendizaje:** RA-1
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome y se anotó lo que imprimió la consola, con el archivo y la línea de cada error. Los valores se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

La tienda da un descuento según el total: **0%** por debajo de 20, **5%** de 20 a menos de 50 y **10%** desde 50. Son tres caminos, no dos. Además Lucía quiere saber qué valores JavaScript considera «verdaderos» dentro de un `if`.

## 💻 Código

El archivo [`02-else-if-y-verdadero-falso.html`](../recursos/ejemplos/02-else-if-y-verdadero-falso.html) tiene este código dentro de `<script>`:

```js
const total = 35;
let porcentaje;

if (total >= 50) {
  porcentaje = 10;
} else if (total >= 20) {
  porcentaje = 5;
} else {
  porcentaje = 0;
}

console.log('Total:', total, '→ descuento del', porcentaje + '%');

// ¿Qué valores cuentan como verdaderos o falsos?
console.log(Boolean(0), Boolean(''), Boolean(NaN), Boolean(null), Boolean(undefined));
console.log(Boolean(1), Boolean(-1), Boolean('Aroma'), Boolean('0'), Boolean('false'));
```

## 🔍 Análisis paso a paso

1. **`else if` encadena condiciones.** JavaScript las evalúa **en orden**, de arriba hacia abajo, y ejecuta el bloque de la **primera** que sea verdadera; las demás se saltan. No existe una palabra `elseif` en un solo término.
2. **El orden importa.** Con `total = 35`, la primera condición (`>= 50`) es falsa; la segunda (`>= 20`) es verdadera y asigna `5`. Si hubieras puesto `>= 20` primero, un total de `60` también caería ahí y daría `5` en lugar de `10`.
3. **`else` final.** Recoge todo lo que no cumplió ninguna condición anterior.
4. **`let porcentaje;` sin valor.** Se declara antes del `if` para poder asignarle un valor en cada camino y usarlo después. Con `const` no se podría reasignar.
5. **Valores «falsos» (*falsy*).** Dentro de una condición, JavaScript convierte el valor a verdadero o falso. Son falsos solo estos: `false`, `0`, `-0`, `0n`, `""` (texto vacío), `null`, `undefined` y `NaN`. `Boolean(valor)` muestra esa conversión.
6. **Todo lo demás es «verdadero» (*truthy*).** Incluso `-1`, `'0'` (un texto) y `'false'` (otro texto): un texto no vacío siempre cuenta como verdadero.

## ✅ Resultado esperado

Al abrir `02-else-if-y-verdadero-falso.html`, la consola muestra:

```text
Total: 35 → descuento del 5%
false false false false false
true true true true true
```

### 🔁 Probalo con otros datos

Se cambió una línea del primer script y se volvió a abrir la página:

- Si `total` pasa a `60`: `Total: 60 → descuento del 10%`
- Si `total` pasa a `12`: `Total: 12 → descuento del 0%`
- Si `total` pasa a `20`: `Total: 20 → descuento del 5%`

- Se ejecuta **una sola** rama: la primera condición verdadera.
- Los valores falsos son solo ocho; un texto como `'0'` o `'false'` es verdadero.
