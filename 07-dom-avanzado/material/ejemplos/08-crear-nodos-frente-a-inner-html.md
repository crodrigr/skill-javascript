# 📘 Ejemplo 08 — Crear nodos frente a escribir HTML

> 🎓 **Resultados de aprendizaje:** RA-1, RA-5
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, con el archivo y la línea de cada error; los clics se hicieron por código. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Hay dos formas de mostrar un texto como `Café <b>doble</b>`: **crear nodos** (el texto se muestra tal cual) o **escribir HTML** con `innerHTML` (el texto se interpreta). La diferencia importa cuando el texto viene de otra persona.

El HTML de partida, dentro del `<body>`:

```html
<div id="con-nodos"></div>
<div id="con-html"></div>
```

## 💻 Código

El archivo [`08-crear-nodos-frente-a-inner-html.html`](../recursos/ejemplos/08-crear-nodos-frente-a-inner-html.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
const texto = 'Café <b>doble</b>';
const conNodos = document.getElementById('con-nodos');
const conHtml = document.getElementById('con-html');

const parrafo = document.createElement('p');
parrafo.textContent = texto;
conNodos.append(parrafo);

conHtml.innerHTML = '<p>' + texto + '</p>';

console.log('Con nodos: ' + conNodos.innerHTML);
console.log('Con HTML:  ' + conHtml.innerHTML);
console.log('Etiquetas <b> en cada uno: ' + conNodos.getElementsByTagName('b').length + ' y ' + conHtml.getElementsByTagName('b').length);
```

## 🔍 Análisis paso a paso

1. **Con nodos:** `createElement` + `textContent` + `append`. El texto se trata como **texto**: las etiquetas se ven escritas y no se crea ningún `<b>`.
2. **Con `innerHTML`:** el texto se **interpreta**: aparece una negrita real (hay un `<b>`).
3. **Si el texto lo escribió otra persona,** `innerHTML` puede ejecutar código de etiquetas como `<img onerror>` (Clase 06, Ejemplo 26): crear nodos con `textContent` es **seguro**.
4. **`innerHTML` es cómodo** para HTML **propio** y fijo (por ejemplo, una plantilla escrita por vos).
5. **Regla:** datos que vienen de afuera → nodos y `textContent`; HTML propio → `innerHTML`; HTML ajeno → `setHTML()` (disponibilidad limitada, Clase 06).

## ✅ Resultado esperado

Al abrir `08-crear-nodos-frente-a-inner-html.html`, la consola muestra:

```text
Con nodos: <p>Café &lt;b&gt;doble&lt;/b&gt;</p>
Con HTML:  <p>Café <b>doble</b></p>
Etiquetas <b> en cada uno: 0 y 1
```

- Crear nodos con `textContent` no interpreta etiquetas; `innerHTML` sí.
- Con datos de otra persona, creá nodos o usá `textContent`.
