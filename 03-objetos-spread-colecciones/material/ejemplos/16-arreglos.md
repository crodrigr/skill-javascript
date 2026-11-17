# 📘 Ejemplo 16 — Crear, leer y recorrer arreglos

> 🎓 **Resultados de aprendizaje:** RA-8
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome y se anotó lo que imprimió la consola, con el archivo y la línea de cada error. Los valores se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador. La consola real muestra los objetos como un árbol que se despliega; aquí se escriben en una sola línea.

## 🧱 Situación inicial

Lucía guarda los precios de la tienda en una lista y los nombres de los productos del pedido en otra. Un **arreglo** (*array*) guarda varios valores en orden y cada uno tiene una **posición**, que empieza en `0`.

## 💻 Código

El archivo [`16-arreglos.html`](../recursos/ejemplos/16-arreglos.html) tiene este código dentro de `<script>`:

```js
const precios = [4.5, 3.2, 1.8, 2.2];
console.log(precios, precios.length);
console.log(precios[0], precios[3], precios[10]);

precios[1] = 3.5;
console.log(precios[precios.length - 1], precios);

const pedido = ['Café', 'Té', 'Medialuna'];

for (let i = 0; i < pedido.length; i++) {
  console.log('posición', i, '→', pedido[i]);
}

for (const producto of pedido) {
  console.log('producto:', producto);
}

pedido.forEach(function (producto, indice) {
  console.log(indice + 1, producto);
});
```

## 🔍 Análisis paso a paso

1. **Crear.** Un arreglo se escribe entre corchetes `[ ]` con los valores separados por comas. Puede mezclar tipos, pero conviene que todos sean del mismo tipo de cosa.
2. **Posición (índice).** El primer elemento está en la posición `0`: `precios[0]` es `4.5` y el último, `precios[3]`. Una posición que no existe da `undefined`.
3. **`length`.** Es la cantidad de elementos (`4`). El último elemento siempre está en `length - 1`.
4. **Modificar.** Asignar a una posición cambia el elemento (`precios[1] = 3.5`). Aunque el arreglo esté en una `const`, su contenido se puede cambiar.
5. **`for`** recorre las posiciones; **`for...of`** entrega cada elemento directamente (más corto cuando no hace falta la posición); **`forEach`** recibe **una función que se le pasa al método** y la llama con cada elemento y su posición.
6. **Elegí** `for...of` para recorrer; `for` cuando necesitás la posición o cortar con `break`.

## ✅ Resultado esperado

Al abrir `16-arreglos.html`, la consola muestra:

```text
(4) [4.5, 3.2, 1.8, 2.2] 4
4.5 2.2 undefined
2.2 (4) [4.5, 3.5, 1.8, 2.2]
posición 0 → Café
posición 1 → Té
posición 2 → Medialuna
producto: Café
producto: Té
producto: Medialuna
1 Café
2 Té
3 Medialuna
```

- La primera posición es `0` y la última es `length - 1`.
- `for...of` recorre los elementos; `forEach` recibe una función.
