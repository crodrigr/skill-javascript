# 📘 Ejemplo 01 — El DOM: la página como un árbol

> 🎓 **Resultados de aprendizaje:** RA-1
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, con el archivo y la línea de cada error; los clics se hicieron por código. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Lucía abre la carta de Aroma en el navegador. Para tu código, esa página **no es un texto**: es un **árbol de objetos** (el **DOM**, *Document Object Model*) que JavaScript puede leer y cambiar. El punto de entrada es `document`.

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

El archivo [`01-el-dom-como-arbol.html`](../recursos/ejemplos/01-el-dom-como-arbol.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
console.log('Título de la página: ' + document.title);
console.log('Nombre de document: ' + document.nodeName);
console.log('Nombre del <body>: ' + document.body.nodeName);

const menu = document.getElementById('menu');
console.log('Nombre del menú: ' + menu.nodeName);
console.log('Texto del título: ' + document.getElementById('titulo').textContent);
```

## 🔍 Análisis paso a paso

1. **El navegador convierte el HTML en un árbol:** cada etiqueta (`<h1>`, `<ul>`, `<li>`…) es un **elemento**, y cada elemento es un **nodo** del árbol.
2. **`document` es la raíz.** Desde `document` se llega a todo lo demás: `document.title`, `document.body`, y los métodos de búsqueda que vemos en esta sesión.
3. **`nodeName`** da el nombre del nodo: `#document` para el documento y el nombre de la etiqueta **en mayúsculas** para un elemento HTML (`BODY`, `UL`).
4. **HTML y DOM no son lo mismo:** el HTML es el texto que escribís; el DOM es el árbol vivo que JavaScript modifica. Si cambiás el DOM, el archivo `.html` **no** cambia: solo cambia lo que ve la persona en el navegador.
5. **La consola real muestra los elementos como un árbol que se despliega;** aquí imprimimos datos concretos (nombre, texto) para ver el resultado en una línea.
6. **Lo que viene después:** buscar elementos (bloque 2), cambiar sus atributos (bloque 3), sus clases (bloque 4) y su contenido (bloque 5). Crear o quitar nodos queda para más adelante.

## ✅ Resultado esperado

Al abrir `01-el-dom-como-arbol.html`, la consola muestra:

```text
Título de la página: Ejemplo 01 — El DOM: la página como un árbol | Café Aroma
Nombre de document: #document
Nombre del <body>: BODY
Nombre del menú: UL
Texto del título: Menú de Aroma
```

- El DOM es la página convertida en un árbol de nodos que JavaScript puede leer y cambiar.
- `document` es la raíz; `nodeName` da el nombre de un nodo.
