# 📘 Ejemplo 14 — Retorno, `undefined` y valores por defecto

> 🎓 **Resultados de aprendizaje:** RA-5
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome y se anotó lo que imprimió la consola, con el archivo y la línea de cada error. Los valores se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Lucía prueba qué pasa cuando una función **no devuelve nada**, cuando se la llama con **menos argumentos** de los que espera y cuando algún parámetro tiene un **valor por defecto**.

## 💻 Código

El archivo [`14-retorno-y-valores-por-defecto.html`](../recursos/ejemplos/14-retorno-y-valores-por-defecto.html) tiene este código dentro de `<script>`:

```js
function mostrarTotal(precio, cantidad) {
  console.log('Total:', precio * cantidad);
}
const resultado = mostrarTotal(4.5, 3);
console.log('resultado vale', resultado);

function calcularTotal(precio, cantidad, descuento = 0) {
  return precio * cantidad * (1 - descuento);
}
console.log(calcularTotal(4.5, 3));
console.log(calcularTotal(4.5, 3, 0.1));
console.log(calcularTotal(4.5));
```

## 🔍 Análisis paso a paso

1. **Sin `return`, la función devuelve `undefined`.** `mostrarTotal` imprime con `console.log`, pero no devuelve nada; por eso `resultado` vale `undefined`. Mostrar y devolver son cosas distintas.
2. **Un valor por defecto** (`descuento = 0`) se usa cuando el argumento **falta** (o es `undefined`). Con `calcularTotal(4.5, 3)` el descuento es `0` y el total es el subtotal.
3. **Si se pasa el argumento, manda el que se pasa:** con `0.1` el total es `13.5 * 0.9`.
4. **Un argumento que falta, sin valor por defecto, vale `undefined`.** En `calcularTotal(4.5)`, `cantidad` es `undefined`, y `4.5 * undefined` da `NaN` (Clase 01).
5. **Poner los valores por defecto al final** de la lista de parámetros facilita llamar a la función solo con los datos obligatorios.
6. **JavaScript no se queja** por pasar de menos o de más: no hay error, solo `undefined` o argumentos que sobran sin usar.

## ✅ Resultado esperado

Al abrir `14-retorno-y-valores-por-defecto.html`, la consola muestra:

```text
Total: 13.5
resultado vale undefined
13.5
12.15
NaN
```

- Una función sin `return` devuelve `undefined`.
- El valor por defecto se usa solo cuando el argumento falta o es `undefined`.
