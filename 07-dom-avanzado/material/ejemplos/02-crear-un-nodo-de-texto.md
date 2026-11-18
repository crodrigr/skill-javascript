# 📘 Ejemplo 02 — createTextNode: un nodo de texto

> 🎓 **Resultados de aprendizaje:** RA-1
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, con el archivo y la línea de cada error; los clics se hicieron por código. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Un elemento puede tener **hijos que no son elementos**: el texto también es un nodo (de tipo `#text`). `createTextNode` crea uno.

El HTML de partida, dentro del `<body>`:

```html
<p id="nota">Café</p>
```

## 💻 Código

El archivo [`02-crear-un-nodo-de-texto.html`](../recursos/ejemplos/02-crear-un-nodo-de-texto.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
const parrafo = document.getElementById('nota');

const texto = document.createTextNode(' (precio: $4.5)');
console.log('Nombre del nodo: ' + texto.nodeName + ', tipo: ' + texto.nodeType);

parrafo.append(texto);
console.log('Texto del párrafo: ' + parrafo.textContent);

const conEtiquetas = document.createTextNode('<b>no es negrita</b>');
parrafo.append(conEtiquetas);
console.log('HTML del párrafo: ' + parrafo.innerHTML);
console.log('Elementos hijos: ' + parrafo.children.length);
```

## 🔍 Análisis paso a paso

1. **`createTextNode(texto)`** crea un **nodo de texto**: `nodeName` es `#text` y `nodeType` es `3` (el tipo de los nodos de texto).
2. **`append` acepta nodos de texto** y los agrega al final del padre; el párrafo pasa a tener dos hijos de texto.
3. **El texto no se interpreta como HTML:** `<b>…</b>` se muestra **tal cual** (en el HTML queda escapado como `&lt;b&gt;`) y no se crea ningún elemento (`children.length` sigue en `0`).
4. **`textContent` hace lo mismo** de una forma más corta; `createTextNode` es útil cuando querés un nodo suelto para insertar en una posición exacta.
5. **Para los textos,** `append` también acepta directamente una cadena: `parrafo.append(' hola')`.

## ✅ Resultado esperado

Al abrir `02-crear-un-nodo-de-texto.html`, la consola muestra:

```text
Nombre del nodo: #text, tipo: 3
Texto del párrafo: Café (precio: $4.5)
HTML del párrafo: Café (precio: $4.5)&lt;b&gt;no es negrita&lt;/b&gt;
Elementos hijos: 0
```

- `createTextNode` crea un nodo de texto (`#text`) que no interpreta etiquetas.
- Los textos también son nodos del árbol.
