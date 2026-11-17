# 📘 Ejemplo 17 — Agregar y quitar elementos

> 🎓 **Resultados de aprendizaje:** RA-8
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome y se anotó lo que imprimió la consola, con el archivo y la línea de cada error. Los valores se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador. La consola real muestra los objetos como un árbol que se despliega; aquí se escriben en una sola línea.

## 🧱 Situación inicial

Lucía arma el pedido de un cliente: agrega productos al final y al principio y los quita. Cada método **modifica el arreglo** y además **devuelve un valor** distinto.

## 💻 Código

El archivo [`17-agregar-y-quitar.html`](../recursos/ejemplos/17-agregar-y-quitar.html) tiene este código dentro de `<script>`:

```js
const pedido = ['Café', 'Té'];

console.log(pedido.push('Medialuna'), pedido);
console.log(pedido.unshift('Brownie'), pedido);
console.log(pedido.pop(), pedido);
console.log(pedido.shift(), pedido);

const vacio = [];
console.log(vacio.pop(), vacio.length);
```

## 🔍 Análisis paso a paso

1. **`push(x)`** agrega al **final** y devuelve la **nueva longitud** (`3`).
2. **`unshift(x)`** agrega al **principio** y devuelve la nueva longitud (`4`).
3. **`pop()`** quita el **último** y devuelve **el elemento quitado** (`Medialuna`).
4. **`shift()`** quita el **primero** y devuelve el elemento quitado (`Brownie`).
5. **Todos modifican el arreglo original.** No crean uno nuevo: por eso `pedido` cambia en cada línea.
6. **Arreglo vacío.** `pop()` de un arreglo vacío devuelve `undefined` y no da error.
7. **Para recordarlos:** las que terminan en «ush»/«op» trabajan al final (`push`/`pop`); `unshift`/`shift` trabajan al principio.

## ✅ Resultado esperado

Al abrir `17-agregar-y-quitar.html`, la consola muestra:

```text
3 (3) ['Café', 'Té', 'Medialuna']
4 (4) ['Brownie', 'Café', 'Té', 'Medialuna']
Medialuna (3) ['Brownie', 'Café', 'Té']
Brownie (2) ['Café', 'Té']
undefined 0
```

- `push` y `unshift` devuelven la nueva longitud; `pop` y `shift` devuelven el elemento quitado.
- Los cuatro modifican el arreglo original.
