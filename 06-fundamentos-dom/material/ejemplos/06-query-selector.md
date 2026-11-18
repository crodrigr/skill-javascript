# 📘 Ejemplo 06 — querySelector: el primero que coincide con un selector

> 🎓 **Resultados de aprendizaje:** RA-2
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, con el archivo y la línea de cada error; los clics se hicieron por código. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

`querySelector` acepta cualquier **selector CSS** (`#id`, `.clase`, `etiqueta`, combinaciones…) y devuelve el **primer** elemento que coincide, o `null`.

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

El archivo [`06-query-selector.html`](../recursos/ejemplos/06-query-selector.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
console.log(document.querySelector('#titulo').textContent);
console.log(document.querySelector('.producto').textContent);
console.log(document.querySelector('li.destacado').textContent);
console.log(document.querySelector('#menu li:last-child').textContent);
console.log(document.querySelector('.agotado'));
```

## 🔍 Análisis paso a paso

1. **`querySelector(selector)`** usa la misma sintaxis que el CSS: `#titulo` (por `id`), `.producto` (por clase), `li.destacado` (etiqueta con clase), `#menu li:last-child` (el último `<li>` del menú).
2. **Devuelve solo el primero** que coincide: `.producto` encuentra el Café aunque haya cuatro productos.
3. **Si nada coincide,** devuelve **`null`** (como `getElementById`).
4. **Un selector inválido** lanza `SyntaxError` (Ejemplo 10).
5. **Es el método más flexible:** sirve para todo lo que hacen `getElementById`, `getElementsByClassName` y `getElementsByTagName`, con una sola sintaxis.

## ✅ Resultado esperado

Al abrir `06-query-selector.html`, la consola muestra:

```text
Menú de Aroma
Café
Té
Medialuna
null
```

- `querySelector` devuelve el primer elemento que coincide con un selector CSS, o `null`.
- Con `#`, `.` y combinaciones reemplaza a los otros métodos de búsqueda.
