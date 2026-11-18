# 📘 Ejemplo 25 — outerHTML: el elemento completo

> 🎓 **Resultados de aprendizaje:** RA-7
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, con el archivo y la línea de cada error; los clics se hicieron por código. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

`outerHTML` incluye **la etiqueta del propio elemento**. Leerlo sirve para ver cómo quedó algo; asignarlo **reemplaza el elemento**.

El HTML de partida, dentro del `<body>`:

```html
<div id="caja">
  <h2 id="titulo">Café</h2>
</div>
```

## 💻 Código

El archivo [`25-outer-html.html`](../recursos/ejemplos/25-outer-html.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
const caja = document.getElementById('caja');
const titulo = document.getElementById('titulo');

console.log('outerHTML: ' + titulo.outerHTML);
console.log('innerHTML: ' + titulo.innerHTML);

titulo.outerHTML = '<h3 id="titulo">Café de la casa</h3>';

console.log('La caja ahora: ' + caja.innerHTML.trim());
console.log('La variable guarda: ' + titulo.nodeName + ' → ' + titulo.textContent);
console.log('Lo que hay en la página: ' + document.getElementById('titulo').nodeName);
```

## 🔍 Análisis paso a paso

1. **`outerHTML` leído** devuelve el HTML del elemento **con su propia etiqueta**; `innerHTML` devuelve solo lo de adentro.
2. **`outerHTML` asignado** reemplaza el elemento **completo** por lo que se escriba: el `<h2>` pasó a ser un `<h3>`.
3. **La variable `titulo` sigue apuntando al elemento viejo** (ya fuera de la página): sigue diciendo `H2` y `Café`.
4. **Para trabajar con el nuevo** hay que **buscarlo de nuevo** (`document.getElementById('titulo')`).
5. **Mismo cuidado que `innerHTML`:** se interpreta como HTML, así que no se debe usar con texto no confiable.

## ✅ Resultado esperado

Al abrir `25-outer-html.html`, la consola muestra:

```text
outerHTML: <h2 id="titulo">Café</h2>
innerHTML: Café
La caja ahora: <h3 id="titulo">Café de la casa</h3>
La variable guarda: H2 → Café
Lo que hay en la página: H3
```

- `outerHTML` incluye la etiqueta del elemento y, al asignarse, lo reemplaza.
- La variable vieja queda apuntando al elemento anterior: hay que buscarlo de nuevo.
