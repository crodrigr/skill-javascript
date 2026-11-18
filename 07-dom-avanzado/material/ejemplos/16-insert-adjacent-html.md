# 📘 Ejemplo 16 — insertAdjacentHTML: HTML en una posición

> 🎓 **Resultados de aprendizaje:** RA-4
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, con el archivo y la línea de cada error; los clics se hicieron por código. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Para insertar **HTML propio** (con etiquetas) en una posición exacta se usa `insertAdjacentHTML`. A diferencia de `innerHTML`, **no reemplaza** lo que ya había.

El HTML de partida, dentro del `<body>`:

```html
<ul id="menu"><li id="te">Té</li></ul>
```

## 💻 Código

El archivo [`16-insert-adjacent-html.html`](../recursos/ejemplos/16-insert-adjacent-html.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
const menu = document.getElementById('menu');

menu.insertAdjacentHTML('afterbegin', '<li><b>Café</b></li>');
menu.insertAdjacentHTML('beforeend', '<li>Galleta</li><li>Medialuna</li>');
menu.insertAdjacentHTML('BEFOREEND', '<li>Brownie</li>');

console.log(menu.outerHTML);
console.log('Productos: ' + menu.children.length);
console.log('Negritas: ' + menu.getElementsByTagName('b').length);
```

La segunda página, [`16-insert-adjacent-html-posicion-invalida.html`](../recursos/ejemplos/16-insert-adjacent-html-posicion-invalida.html) (una posición mal escrita), tiene el mismo HTML y este código dentro de `<script>`:

```js
const menu = document.getElementById('menu');
console.log('Antes de insertar');
menu.insertAdjacentHTML('despues', '<li>Galleta</li>');
console.log('Esta línea no se ejecuta');
```

## 🔍 Análisis paso a paso

1. **`insertAdjacentHTML(posición, html)`** interpreta el texto como HTML y crea los nodos en la posición indicada (aquí se crean varios `<li>` de una vez).
2. **No toca lo que ya estaba:** `innerHTML +=` reescribiría todo el contenido; `insertAdjacentHTML` solo agrega.
3. **La posición no distingue mayúsculas:** `'BEFOREEND'` funciona igual que `'beforeend'`.
4. **La segunda página** usa una posición inválida (`'despues'`) y da `SyntaxError: Failed to execute 'insertAdjacentHTML' on 'Element': The value provided ('despues') is not one of 'beforeBegin', 'afterBegin', 'beforeEnd', or 'afterEnd'.` (*el valor no es una de las cuatro posiciones*).
5. **Solo con HTML propio:** como `innerHTML`, interpreta lo que le pasás (Ejemplo 17).

## ✅ Resultado esperado

Al abrir `16-insert-adjacent-html.html`, la consola muestra:

```text
<ul id="menu"><li><b>Café</b></li><li id="te">Té</li><li>Galleta</li><li>Medialuna</li><li>Brownie</li></ul>
Productos: 5
Negritas: 1
```

Al abrir `16-insert-adjacent-html-posicion-invalida.html`, la consola muestra:

```text
Antes de insertar
Uncaught SyntaxError: Failed to execute 'insertAdjacentHTML' on 'Element': The value provided ('despues') is not one of 'beforeBegin', 'afterBegin', 'beforeEnd', or 'afterEnd'. (16-insert-adjacent-html-posicion-invalida.html:14)
```

- `insertAdjacentHTML` interpreta HTML y lo inserta en una posición sin reemplazar lo existente.
- Una posición inválida da `SyntaxError`.
