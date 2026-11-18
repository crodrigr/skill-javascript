# 📘 Ejemplo 07 — querySelectorAll: todos los que coinciden

> 🎓 **Resultados de aprendizaje:** RA-2, RA-3
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, con el archivo y la línea de cada error; los clics se hicieron por código. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Cuando hacen falta **todos** los elementos que coinciden con un selector, `querySelectorAll` devuelve una `NodeList` que se puede recorrer con `forEach`.

El HTML de partida, dentro del `<body>`:

```html
<h1 id="titulo" class="titulo">Menú de Aroma</h1>
<ul id="menu">
  <li class="producto">Café</li>
  <li class="producto destacado">Té</li>
  <li class="producto">Galleta</li>
  <li class="producto">Medialuna</li>
</ul>
```

## 💻 Código

El archivo [`07-query-selector-all.html`](../recursos/ejemplos/07-query-selector-all.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
const productos = document.querySelectorAll('.producto');
console.log('Cantidad: ' + productos.length);

productos.forEach((producto, posicion) => {
  console.log((posicion + 1) + '. ' + producto.textContent);
});

console.log('Destacados: ' + document.querySelectorAll('li.destacado').length);
console.log('Sin coincidencias: ' + document.querySelectorAll('.agotado').length);
console.log('Dos selectores: ' + document.querySelectorAll('h1, li').length);
```

## 🔍 Análisis paso a paso

1. **`querySelectorAll(selector)`** devuelve una **`NodeList`** con todos los elementos que coinciden, en el orden de la página.
2. **La `NodeList` tiene `forEach`:** recibe una función que se ejecuta por cada elemento (el elemento y su posición).
3. **Sin coincidencias** devuelve una `NodeList` **vacía** (`length` igual a `0`), no `null`.
4. **Se pueden combinar selectores** con coma: `h1, li` busca los `<h1>` **y** los `<li>`.
5. **Es una colección «estática»:** es una foto del momento; no se actualiza si la página cambia (Ejemplo 08).

## ✅ Resultado esperado

Al abrir `07-query-selector-all.html`, la consola muestra:

```text
Cantidad: 4
1. Café
2. Té
3. Galleta
4. Medialuna
Destacados: 1
Sin coincidencias: 0
Dos selectores: 5
```

- `querySelectorAll` devuelve una `NodeList` (vacía si no hay coincidencias).
- La `NodeList` se puede recorrer con `forEach`.
