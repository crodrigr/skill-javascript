# 📘 Ejemplo 19 — El padre: parentNode y parentElement

> 🎓 **Resultados de aprendizaje:** RA-6
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, con el archivo y la línea de cada error; los clics se hicieron por código. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

La página es un **árbol**: cada elemento (salvo la raíz) tiene un **padre**. `parentNode` y `parentElement` permiten subir un nivel.

El HTML de partida, dentro del `<body>`:

```html
<section id="carta">
  <ul id="menu">
    <li id="cafe">Café</li>
  </ul>
</section>
```

## 💻 Código

El archivo [`19-parent-node-y-parent-element.html`](../recursos/ejemplos/19-parent-node-y-parent-element.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
const cafe = document.getElementById('cafe');

console.log('padre del café: ' + cafe.parentNode.id);
console.log('abuelo: ' + cafe.parentNode.parentNode.id);
console.log('parentElement: ' + cafe.parentElement.id);

const nuevo = document.createElement('li');
console.log('padre de un elemento nuevo: ' + nuevo.parentNode);

console.log('padre de <html>: ' + document.documentElement.parentNode.nodeName);
console.log('parentElement de <html>: ' + document.documentElement.parentElement);
console.log('padre de document: ' + document.parentNode);
```

## 🔍 Análisis paso a paso

1. **`parentNode`** devuelve el **padre** de un nodo; encadenándolo se sube más niveles (`cafe.parentNode.parentNode` es la sección).
2. **`parentElement`** devuelve el padre **si es un elemento**; para casi todos los casos da lo mismo que `parentNode`.
3. **Un elemento recién creado o quitado** no tiene padre: `parentNode` es `null`.
4. **El padre de `<html>`** es `document`: su `parentNode` es `#document` pero su `parentElement` es `null`, porque `document` no es un elemento.
5. **`document` no tiene padre** (`null`).
6. **Subir con `parentNode` muchas veces** es frágil si cambia el HTML: para buscar un ancestro conviene `closest` (Ejemplo 22).

## ✅ Resultado esperado

Al abrir `19-parent-node-y-parent-element.html`, la consola muestra:

```text
padre del café: menu
abuelo: carta
parentElement: menu
padre de un elemento nuevo: null
padre de <html>: #document
parentElement de <html>: null
padre de document: null
```

- `parentNode` y `parentElement` suben un nivel; dan `null` si no hay padre.
- `<html>` tiene padre `document`, que no es un elemento.
