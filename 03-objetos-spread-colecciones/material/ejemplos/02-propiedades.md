# 📘 Ejemplo 02 — Propiedades: agregar, modificar, borrar y comprobar

> 🎓 **Resultados de aprendizaje:** RA-1
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome y se anotó lo que imprimió la consola, con el archivo y la línea de cada error. Los valores se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador. La consola real muestra los objetos como un árbol que se despliega; aquí se escriben en una sola línea.

## 🧱 Situación inicial

El producto de Lucía cambia: sube el precio, se agrega un stock y se retira un dato que ya no sirve. Las propiedades de un objeto **no son fijas**.

## 💻 Código

El archivo [`02-propiedades.html`](../recursos/ejemplos/02-propiedades.html) tiene este código dentro de `<script>`:

```js
const producto = { nombre: 'Café', precio: 4.5 };

producto.stock = 12;
producto.precio = 4.8;
console.log(producto);

delete producto.stock;
console.log(producto);

console.log('precio' in producto, 'stock' in producto);
console.log(producto.color);

const nombre = 'Té';
const precio = 3.2;
const otro = { nombre, precio };
console.log(otro);
```

## 🔍 Análisis paso a paso

1. **Agregar.** Asignar a una propiedad que no existe la crea: `producto.stock = 12`.
2. **Modificar.** Asignar a una que existe cambia su valor: `producto.precio = 4.8`. Observá que `producto` es una `const` y aun así cambia: `const` impide **reasignar la variable**, no cambiar el contenido del objeto.
3. **Borrar.** `delete producto.stock` elimina la propiedad completa (no la deja en `undefined`).
4. **Comprobar.** `'precio' in producto` pregunta si la propiedad existe y da `true` o `false`. Una propiedad que no existe, leída con punto, da `undefined` (sin error): `producto.color`.
5. **Forma abreviada.** Si la variable se llama igual que la propiedad, `{ nombre, precio }` equivale a `{ nombre: nombre, precio: precio }`.
6. **Orden.** Las propiedades se muestran en el orden en que se agregaron.

## ✅ Resultado esperado

Al abrir `02-propiedades.html`, la consola muestra:

```text
{nombre: 'Café', precio: 4.8, stock: 12}
{nombre: 'Café', precio: 4.8}
true false
undefined
{nombre: 'Té', precio: 3.2}
```

- `const` no vuelve inmutable al objeto: sus propiedades se pueden cambiar.
- `in` comprueba la existencia; una propiedad inexistente vale `undefined`.
