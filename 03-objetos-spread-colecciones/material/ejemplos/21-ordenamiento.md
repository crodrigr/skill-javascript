# 📘 Ejemplo 21 — Ordenar: `sort()` y `reverse()`

> 🎓 **Resultados de aprendizaje:** RA-9
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome y se anotó lo que imprimió la consola, con el archivo y la línea de cada error. Los valores se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador. La consola real muestra los objetos como un árbol que se despliega; aquí se escriben en una sola línea.

## 🧱 Situación inicial

Lucía quiere mostrar los productos de menor a mayor precio. Probó `sort()` con números y el resultado salió **desordenado**: `sort()` ordena como texto si no se le dice otra cosa.

## 💻 Código

El archivo [`21-ordenamiento.html`](../recursos/ejemplos/21-ordenamiento.html) tiene este código dentro de `<script>`:

```js
const productos = [
  { nombre: 'Café', precio: 4.5, stock: 12 },
  { nombre: 'Té', precio: 3.2, stock: 0 },
  { nombre: 'Galleta', precio: 1.8, stock: 40 },
  { nombre: 'Medialuna', precio: 2.2, stock: 25 },
  { nombre: 'Brownie', precio: 3.5, stock: 6 }
];

const numeros = [10, 9, 1, 100];
console.log([...numeros].sort());
console.log([...numeros].sort((a, b) => a - b));
console.log([...numeros].sort((a, b) => b - a));

const nombres = ['Medialuna', 'café', 'Té', 'Brownie'];
console.log([...nombres].sort());
console.log([...nombres].sort((a, b) => a.localeCompare(b)));

const porPrecio = [...productos].sort((a, b) => a.precio - b.precio);
for (const p of porPrecio) {
  console.log(p.nombre, p.precio);
}

const original = [3, 1, 2];
const ordenado = original.sort((a, b) => a - b);
console.log(original, ordenado === original);
console.log([1, 2, 3].reverse());
```

## 🔍 Análisis paso a paso

1. **`sort()` sin comparador ordena como texto.** Convierte cada elemento a texto y compara letra a letra: `'10'` va antes que `'9'` porque `'1'` es menor que `'9'`. Resultado: `[1, 10, 100, 9]`.
2. **El comparador.** `sort((a, b) => a - b)` recibe dos elementos y devuelve un número: **negativo** si `a` va antes, **positivo** si `b` va antes, `0` si da igual. `a - b` ordena de menor a mayor; `b - a`, de mayor a menor.
3. **Textos.** Sin comparador, las mayúsculas van antes que las minúsculas (`café` quedó al final). `a.localeCompare(b)` compara respetando el idioma.
4. **Objetos por una propiedad.** `(a, b) => a.precio - b.precio` ordena los productos por precio.
5. **`sort()` modifica el arreglo original** y devuelve **ese mismo arreglo**: `ordenado === original` es `true`. Para no tocar el original, copiá primero con `[...arreglo]`.
6. **`reverse()`** también modifica el original: invierte el orden.

## ✅ Resultado esperado

Al abrir `21-ordenamiento.html`, la consola muestra:

```text
(4) [1, 10, 100, 9]
(4) [1, 9, 10, 100]
(4) [100, 10, 9, 1]
(4) ['Brownie', 'Medialuna', 'Té', 'café']
(4) ['Brownie', 'café', 'Medialuna', 'Té']
Galleta 1.8
Medialuna 2.2
Té 3.2
Brownie 3.5
Café 4.5
(3) [1, 2, 3] true
(3) [3, 2, 1]
```

- `sort()` sin comparador ordena como texto; para números hace falta `(a, b) => a - b`.
- `sort()` y `reverse()` modifican el arreglo original.
