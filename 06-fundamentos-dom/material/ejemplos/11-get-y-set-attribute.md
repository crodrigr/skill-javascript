# 📘 Ejemplo 11 — getAttribute y setAttribute

> 🎓 **Resultados de aprendizaje:** RA-4
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, con el archivo y la línea de cada error; los clics se hicieron por código. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Los **atributos** son los datos que se escriben dentro de la etiqueta (`href`, `src`, `alt`, `target`). `getAttribute` los lee y `setAttribute` los cambia.

El HTML de partida, dentro del `<body>`:

```html
<article class="tarjeta">
  <h2 id="nombre">Café</h2>
  <img id="foto" src="img/cafe.svg" alt="Taza de café">
  <a id="carta" href="carta.html" target="_blank">Ver la carta</a>
  <button id="pedir" class="pedir">Pedir</button>
</article>
```

## 💻 Código

El archivo [`11-get-y-set-attribute.html`](../recursos/ejemplos/11-get-y-set-attribute.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
const enlace = document.getElementById('carta');
const foto = document.getElementById('foto');

console.log('href: ' + enlace.getAttribute('href'));
console.log('target: ' + enlace.getAttribute('target'));
console.log('src: ' + foto.getAttribute('src'));
console.log('Atributo inexistente (rel): ' + enlace.getAttribute('rel'));

enlace.setAttribute('href', 'menu.html');
foto.setAttribute('src', 'img/te.svg');
foto.setAttribute('alt', 'Taza de té');

console.log('href ahora: ' + enlace.getAttribute('href'));
console.log('src ahora: ' + foto.getAttribute('src') + ' | alt: ' + foto.getAttribute('alt'));
console.log('Tipo del valor: ' + typeof foto.getAttribute('src'));
```

## 🔍 Análisis paso a paso

1. **`getAttribute(nombre)`** devuelve el valor del atributo **como texto**, o **`null`** si el elemento no lo tiene.
2. **`setAttribute(nombre, valor)`** crea el atributo o cambia su valor; el valor se convierte siempre en **texto**.
3. **Cambiar `src` o `href`** modifica lo que muestra o adónde lleva el elemento, sin recargar la página.
4. **El `alt`** (texto alternativo de una imagen) también es un atributo: conviene actualizarlo cuando cambia la imagen.
5. **Los nombres de atributo** de las etiquetas HTML se convierten a minúsculas.

## ✅ Resultado esperado

Al abrir `11-get-y-set-attribute.html`, la consola muestra:

```text
href: carta.html
target: _blank
src: img/cafe.svg
Atributo inexistente (rel): null
href ahora: menu.html
src ahora: img/te.svg | alt: Taza de té
Tipo del valor: string
```

- `getAttribute` lee (texto o `null`) y `setAttribute` crea o cambia un atributo.
- Los valores de los atributos son siempre texto.
