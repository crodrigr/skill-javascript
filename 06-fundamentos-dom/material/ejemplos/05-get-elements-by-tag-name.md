# 📘 Ejemplo 05 — getElementsByTagName: todos los de una etiqueta

> 🎓 **Resultados de aprendizaje:** RA-2, RA-3
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, con el archivo y la línea de cada error; los clics se hicieron por código. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Para contar o recorrer todos los `<li>` o todos los `<h1>` no hace falta que tengan una clase: `getElementsByTagName` busca por el **nombre de la etiqueta**.

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

El archivo [`05-get-elements-by-tag-name.html`](../recursos/ejemplos/05-get-elements-by-tag-name.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
const items = document.getElementsByTagName('li');
console.log('Cantidad de <li>: ' + items.length);

const titulos = document.getElementsByTagName('h1');
console.log('Cantidad de <h1>: ' + titulos.length);
console.log(titulos[0].textContent);

const menu = document.getElementById('menu');
console.log('<li> dentro del menú: ' + menu.getElementsByTagName('li').length);
console.log('<table> en la página: ' + document.getElementsByTagName('table').length);
```

## 🔍 Análisis paso a paso

1. **`getElementsByTagName(etiqueta)`** devuelve una `HTMLCollection` con todos los elementos de esa etiqueta; el nombre se escribe sin `<` ni `>`.
2. **También funciona sobre un elemento** (`menu.getElementsByTagName('li')`): busca **solo dentro** de él.
3. **Si no hay coincidencias,** devuelve una colección vacía.
4. **Es una colección viva,** igual que la de `getElementsByClassName`.
5. **Cuándo usarlo:** para contar o recorrer elementos del mismo tipo; para casos más específicos, `querySelector` suele ser más cómodo.

## ✅ Resultado esperado

Al abrir `05-get-elements-by-tag-name.html`, la consola muestra:

```text
Cantidad de <li>: 4
Cantidad de <h1>: 1
Menú de Aroma
<li> dentro del menú: 4
<table> en la página: 0
```

- `getElementsByTagName` busca por el nombre de la etiqueta y devuelve una `HTMLCollection`.
- También se puede usar sobre un elemento, para buscar solo dentro de él.
