# 📘 Ejemplo 04 — getElementsByClassName: todos los de una clase

> 🎓 **Resultados de aprendizaje:** RA-2, RA-3
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, con el archivo y la línea de cada error; los clics se hicieron por código. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Varios elementos comparten la clase `producto`. `getElementsByClassName` devuelve **todos** en una colección que se recorre por posición.

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

El archivo [`04-get-elements-by-class-name.html`](../recursos/ejemplos/04-get-elements-by-class-name.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
const productos = document.getElementsByClassName('producto');
console.log('Cantidad: ' + productos.length);
console.log('El primero: ' + productos[0].textContent);
console.log('El último: ' + productos[productos.length - 1].textContent);

for (let i = 0; i < productos.length; i++) {
  console.log((i + 1) + '. ' + productos[i].textContent);
}

console.log('Con dos clases: ' + document.getElementsByClassName('producto destacado').length);
console.log('Clase inexistente: ' + document.getElementsByClassName('agotado').length);
```

## 🔍 Análisis paso a paso

1. **`getElementsByClassName(clase)`** devuelve una **`HTMLCollection`** (colección de elementos) con **todos** los elementos que tienen esa clase.
2. **Se usa como un arreglo en lo básico:** `length` y la posición entre corchetes (`productos[0]`). Pero **no es un arreglo**: no tiene `forEach`, `map` ni `filter` (Ejemplo 09).
3. **Con dos clases** separadas por un espacio, devuelve los elementos que tienen **las dos**.
4. **Si no hay coincidencias,** devuelve una colección **vacía** (`length` igual a `0`), **no `null`**.
5. **Es una colección «viva»:** se actualiza sola si la página cambia (Ejemplo 08).
6. **Sin punto:** el nombre de la clase se escribe sin `.` (a diferencia de `querySelector`).

## ✅ Resultado esperado

Al abrir `04-get-elements-by-class-name.html`, la consola muestra:

```text
Cantidad: 4
El primero: Café
El último: Medialuna
1. Café
2. Té
3. Galleta
4. Medialuna
Con dos clases: 1
Clase inexistente: 0
```

- `getElementsByClassName` devuelve una `HTMLCollection` (vacía si no hay coincidencias).
- Se recorre con `length` y posiciones; no tiene `forEach`.
