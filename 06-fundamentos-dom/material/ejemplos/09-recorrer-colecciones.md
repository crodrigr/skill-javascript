# 📘 Ejemplo 09 — Recorrer colecciones

> 🎓 **Resultados de aprendizaje:** RA-3
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, con el archivo y la línea de cada error; los clics se hicieron por código. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Para trabajar con cada elemento hay que **recorrer** la colección. Hay tres formas, y no todas funcionan con los dos tipos de colección.

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

El archivo [`09-recorrer-colecciones.html`](../recursos/ejemplos/09-recorrer-colecciones.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
const viva = document.getElementsByClassName('producto');
for (let i = 0; i < viva.length; i++) {
  console.log('for: ' + viva[i].textContent);
}

for (const producto of viva) {
  console.log('for…of: ' + producto.textContent);
}

const lista = document.querySelectorAll('.producto');
lista.forEach((producto) => {
  console.log('forEach: ' + producto.textContent);
});

console.log('forEach en HTMLCollection: ' + typeof viva.forEach);
console.log('forEach en NodeList: ' + typeof lista.forEach);
```

La segunda página, [`09-recorrer-colecciones-error.html`](../recursos/ejemplos/09-recorrer-colecciones-error.html) (forEach en una HTMLCollection), tiene el mismo HTML y este código dentro de `<script>`:

```js
const viva = document.getElementsByClassName('producto');
viva.forEach((producto) => {
  console.log(producto.textContent);
});
```

## 🔍 Análisis paso a paso

1. **`for` con `length`:** funciona con las dos colecciones.
2. **`for…of`:** también funciona con las dos y no necesita llevar la cuenta de la posición.
3. **`forEach`:** solo existe en la **`NodeList`**. En la `HTMLCollection` su tipo es `undefined`.
4. **La segunda página** muestra el error al usar `forEach` en una `HTMLCollection`: `TypeError: viva.forEach is not a function` (*viva.forEach no es una función*).
5. **Recomendación:** usá `for…of` si querés una forma que sirva siempre.

## ✅ Resultado esperado

Al abrir `09-recorrer-colecciones.html`, la consola muestra:

```text
for: Café
for: Té
for: Galleta
for: Medialuna
for…of: Café
for…of: Té
for…of: Galleta
for…of: Medialuna
forEach: Café
forEach: Té
forEach: Galleta
forEach: Medialuna
forEach en HTMLCollection: undefined
forEach en NodeList: function
```

Al abrir `09-recorrer-colecciones-error.html`, la consola muestra:

```text
Uncaught TypeError: viva.forEach is not a function (09-recorrer-colecciones-error.html:19)
```

- `for` y `for…of` sirven para las dos colecciones; `forEach` solo para la `NodeList`.
- Un `forEach` sobre una `HTMLCollection` da `TypeError`.
