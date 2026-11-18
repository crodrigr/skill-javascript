# 📘 Ejemplo 09 — Configurar un elemento: id, className, title, hidden y disabled

> 🎓 **Resultados de aprendizaje:** RA-3
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, con el archivo y la línea de cada error; los clics se hicieron por código. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Un elemento recién creado está vacío. Antes de insertarlo se lo **configura** asignando sus **propiedades**: cada una escribe el atributo HTML correspondiente.

El HTML de partida, dentro del `<body>`:

```html
<button id="pedir">Pedir</button>
<div id="carta"></div>
```

## 💻 Código

El archivo [`09-propiedades-id-class-name-title.html`](../recursos/ejemplos/09-propiedades-id-class-name-title.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
const carta = document.getElementById('carta');
const pedir = document.getElementById('pedir');

const tarjeta = document.createElement('article');
tarjeta.id = 'tarjeta-cafe';
tarjeta.className = 'tarjeta destacada';
tarjeta.title = 'Café de la casa';
tarjeta.hidden = true;
console.log(tarjeta.outerHTML);

tarjeta.hidden = false;
carta.append(tarjeta);
console.log('En la página: ' + carta.innerHTML);

console.log('disabled antes: ' + pedir.disabled);
pedir.disabled = true;
console.log('disabled ahora: ' + pedir.disabled + ' | ' + pedir.outerHTML);
```

## 🔍 Análisis paso a paso

1. **`id`, `className`, `title` y `hidden`** son propiedades: al asignarlas se escriben los atributos `id="…"`, `class="…"`, `title="…"` y `hidden`.
2. **`className`** es el texto completo del atributo `class` (varias clases separadas por espacio); para manipularlas una por una, `classList` (Clase 06).
3. **`hidden = true`** agrega el atributo booleano `hidden`; con `false` lo quita.
4. **`disabled`** hace lo mismo con los botones y los campos: `true` pone el atributo, `false` lo quita.
5. **Las propiedades booleanas** (`hidden`, `disabled`) se asignan con `true` o `false`, sin `setAttribute`.
6. **Se configura antes de insertar** y todo queda listo cuando el elemento aparece en la página.

## ✅ Resultado esperado

Al abrir `09-propiedades-id-class-name-title.html`, la consola muestra:

```text
<article id="tarjeta-cafe" class="tarjeta destacada" title="Café de la casa" hidden=""></article>
En la página: <article id="tarjeta-cafe" class="tarjeta destacada" title="Café de la casa"></article>
disabled antes: false
disabled ahora: true | <button id="pedir" disabled="">Pedir</button>
```

- Asignar `id`, `className`, `title`, `hidden` o `disabled` escribe el atributo correspondiente.
- Las propiedades booleanas se asignan con `true` o `false`.
