# 📘 Ejemplo 20 — children frente a childNodes: elementos y nodos

> 🎓 **Resultados de aprendizaje:** RA-6
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, con el archivo y la línea de cada error; los clics se hicieron por código. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Sofía contó los hijos del menú: dos productos. Pero `childNodes` le dio **cinco**. La diferencia son los **espacios y saltos de línea** entre las etiquetas, que también son nodos.

El HTML de partida, dentro del `<body>`:

```html
<ul id="menu">
  <li>Café</li>
  <li>Té</li>
</ul>
```

## 💻 Código

El archivo [`20-children-y-child-nodes.html`](../recursos/ejemplos/20-children-y-child-nodes.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
const menu = document.getElementById('menu');

console.log('children: ' + menu.children.length);
console.log('childNodes: ' + menu.childNodes.length);

const nombres = [];
for (const nodo of menu.childNodes) {
  nombres.push(nodo.nodeName);
}
console.log('Nodos: ' + nombres.join(', '));

const soloElementos = [];
for (const hijo of menu.children) {
  soloElementos.push(hijo.nodeName);
}
console.log('Elementos: ' + soloElementos.join(', '));

console.log('forEach en children: ' + typeof menu.children.forEach);
console.log('forEach en childNodes: ' + typeof menu.childNodes.forEach);
```

## 🔍 Análisis paso a paso

1. **`children`** (`HTMLCollection`) trae **solo los elementos** hijos: los dos `<li>`.
2. **`childNodes`** (`NodeList`) trae **todos los nodos**: los `<li>` **y** los nodos de texto con los saltos de línea y espacios entre las etiquetas (`#text`).
3. **Los espacios del HTML cuentan:** `<ul>\n  <li>` crea un nodo de texto antes del primer `<li>`.
4. **Casi siempre querés `children`**; `childNodes` sirve cuando necesitás también los textos.
5. **`children` no tiene `forEach`** (es una `HTMLCollection`); `childNodes`, sí.
6. **Ambas son colecciones vivas:** se actualizan solas (Ejemplo 23).

## ✅ Resultado esperado

Al abrir `20-children-y-child-nodes.html`, la consola muestra:

```text
children: 2
childNodes: 5
Nodos: #text, LI, #text, LI, #text
Elementos: LI, LI
forEach en children: undefined
forEach en childNodes: function
```

- `children` trae solo elementos; `childNodes`, todos los nodos (incluidos los textos de espacios).
- Los espacios entre etiquetas son nodos de texto.
