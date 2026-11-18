# 📘 Ejemplo 10 — src, href y dataset

> 🎓 **Resultados de aprendizaje:** RA-3
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, con el archivo y la línea de cada error; los clics se hicieron por código. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Las imágenes y los enlaces se configuran con `src`, `alt` y `href`; y los datos propios del producto (precio, código) se guardan en `dataset`, que escribe atributos `data-…`.

El HTML de partida, dentro del `<body>`:

```html
<div id="carta"></div>
```

## 💻 Código

El archivo [`10-propiedades-src-href-y-dataset.html`](../recursos/ejemplos/10-propiedades-src-href-y-dataset.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
const carta = document.getElementById('carta');

const foto = document.createElement('img');
foto.src = 'img/cafe.svg';
foto.alt = 'Taza de café';

const enlace = document.createElement('a');
enlace.href = 'carta.html';
enlace.textContent = 'Ver la carta';

const tarjeta = document.createElement('article');
tarjeta.dataset.precio = 4.5;
tarjeta.dataset.productoId = 'cafe-01';
tarjeta.append(foto, enlace);
carta.append(tarjeta);

console.log(tarjeta.outerHTML);
console.log('dataset.precio: ' + tarjeta.dataset.precio + ' (' + typeof tarjeta.dataset.precio + ')');
console.log('Atributo data-producto-id: ' + tarjeta.getAttribute('data-producto-id'));
console.log('Convertido a número y sumado 1: ' + (Number(tarjeta.dataset.precio) + 1));
```

## 🔍 Análisis paso a paso

1. **`foto.src` y `foto.alt`** escriben los atributos de la imagen; **`enlace.href`**, el del enlace.
2. **`dataset`** guarda datos propios en atributos que empiezan con `data-`: `dataset.precio` escribe `data-precio`.
3. **Los nombres con varias palabras** se escriben en *camelCase* en `dataset` (`productoId`) y con guiones en el atributo (`data-producto-id`).
4. **Los valores de `dataset` son siempre texto:** `4.5` se guarda como `"4.5"` y hay que convertirlo con `Number` para calcular.
5. **`append` acepta varios nodos:** la foto y el enlace se agregan de una vez a la tarjeta.
6. **Ventaja de `dataset`:** el dato queda en el HTML y se puede leer desde el CSS o desde otro script.

## ✅ Resultado esperado

Al abrir `10-propiedades-src-href-y-dataset.html`, la consola muestra:

```text
<article data-precio="4.5" data-producto-id="cafe-01"><img src="img/cafe.svg" alt="Taza de café"><a href="carta.html">Ver la carta</a></article>
dataset.precio: 4.5 (string)
Atributo data-producto-id: cafe-01
Convertido a número y sumado 1: 5.5
```

- `src`, `alt` y `href` configuran imágenes y enlaces; `dataset` guarda datos en atributos `data-*`.
- Los valores de `dataset` son texto.
