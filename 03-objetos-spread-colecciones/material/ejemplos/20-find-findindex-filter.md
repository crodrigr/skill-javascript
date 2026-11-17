# 📘 Ejemplo 20 — Buscar con una condición: `find`, `findIndex` y `filter`

> 🎓 **Resultados de aprendizaje:** RA-9
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome y se anotó lo que imprimió la consola, con el archivo y la línea de cada error. Los valores se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador. La consola real muestra los objetos como un árbol que se despliega; aquí se escriben en una sola línea.

## 🧱 Situación inicial

Ahora los productos son **objetos** con nombre, precio y stock. Lucía quiere el primer producto que cumpla una condición, su posición y todos los que la cumplen. Estos métodos reciben **una función que se le pasa al método** y que dice qué buscar.

## 💻 Código

El archivo [`20-find-findindex-filter.html`](../recursos/ejemplos/20-find-findindex-filter.html) tiene este código dentro de `<script>`:

```js
const productos = [
  { nombre: 'Café', precio: 4.5, stock: 12 },
  { nombre: 'Té', precio: 3.2, stock: 0 },
  { nombre: 'Galleta', precio: 1.8, stock: 40 },
  { nombre: 'Medialuna', precio: 2.2, stock: 25 },
  { nombre: 'Brownie', precio: 3.5, stock: 6 }
];

const te = productos.find(function (p) {
  return p.nombre === 'Té';
});
console.log(te);
console.log(te === productos[1]);

const caro = productos.find(p => p.precio > 4);
console.log(caro.nombre);
console.log(productos.find(p => p.precio > 10));

console.log(productos.findIndex(p => p.stock === 0), productos.findIndex(p => p.precio > 10));

const disponibles = productos.filter(p => p.stock > 0);
console.log(disponibles.length, productos.length);
console.log(productos.filter(p => p.precio > 10));

disponibles.forEach(p => console.log(p.nombre + ': ' + p.stock));
```

## 🔍 Análisis paso a paso

1. **La función le dice al método qué buscar.** Se le pasa **una función que recibe cada elemento** (`p`) y devuelve `true` o `false`. Se puede escribir como función de expresión o como flecha (la forma corta de la Clase 02).
2. **`find`** devuelve **el primer elemento** que cumple, o `undefined` si ninguno. Devuelve el **mismo objeto** del arreglo (no una copia): `te === productos[1]` es `true`.
3. **`findIndex`** devuelve la **posición** del primero que cumple, o `-1`.
4. **`filter`** devuelve un **arreglo nuevo** con **todos** los que cumplen; si ninguno cumple, un arreglo vacío `[]`. No modifica el original.
5. **Cuidado con `find` sin resultado.** `productos.find(p => p.precio > 10)` es `undefined`; pedirle `.nombre` daría `TypeError`. Por eso se suele comprobar antes, o usar `?.`.
6. **Elegí** `find` si querés uno, `filter` si querés varios, `findIndex` si necesitás la posición, y `includes`/`indexOf` para valores simples.

## ✅ Resultado esperado

Al abrir `20-find-findindex-filter.html`, la consola muestra:

```text
{nombre: 'Té', precio: 3.2, stock: 0}
true
Café
undefined
1 -1
4 5
[]
Café: 12
Galleta: 40
Medialuna: 25
Brownie: 6
```

- `find` devuelve el primer objeto que cumple; `filter`, un arreglo nuevo con todos.
- `find` sin coincidencias devuelve `undefined`; `filter`, `[]`.
