# 📘 Ejemplo 03 — getElementById: un elemento por su id

> 🎓 **Resultados de aprendizaje:** RA-2, RA-3
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, con el archivo y la línea de cada error; los clics se hicieron por código. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

El `id` identifica **un solo** elemento de la página. `getElementById` lo busca y lo devuelve; si no existe, devuelve `null`.

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

El archivo [`03-get-element-by-id.html`](../recursos/ejemplos/03-get-element-by-id.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
const titulo = document.getElementById('titulo');
console.log(titulo.textContent);
console.log(titulo.nodeName + ' / ' + titulo.className);

const noExiste = document.getElementById('subtitulo');
console.log(noExiste);
console.log(noExiste === null);
```

## 🔍 Análisis paso a paso

1. **`document.getElementById(id)`** recibe el `id` como **texto, sin `#`** y devuelve **el elemento** que lo tiene.
2. **El elemento tiene propiedades y métodos:** aquí usamos `textContent`, `nodeName` y `className` (el texto del atributo `class`).
3. **Si el `id` no existe,** devuelve **`null`**: no da error al buscar, pero sí al usar el resultado (`noExiste.textContent` daría `TypeError`).
4. **Comprobá antes de usar** cuando no estés seguro: `if (elemento !== null) { … }`.
5. **Un `id` debe ser único** en la página; por eso este método devuelve un solo elemento, no una colección.

## ✅ Resultado esperado

Al abrir `03-get-element-by-id.html`, la consola muestra:

```text
Menú de Aroma
H1 / titulo
null
true
```

- `getElementById` devuelve un elemento o `null`.
- El `id` se escribe sin `#` y es único en la página.
