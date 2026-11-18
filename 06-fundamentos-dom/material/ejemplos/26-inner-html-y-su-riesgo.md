# 📘 Ejemplo 26 — innerHTML y su riesgo

> 🎓 **Resultados de aprendizaje:** RA-8
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, con el archivo y la línea de cada error; los clics se hicieron por código. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

En el libro de visitas de Aroma, una persona escribió un comentario con una etiqueta `<img>` que lleva un atributo `onerror`. Si el sitio lo muestra con `innerHTML`, **ese código se ejecuta**. Para verlo con seguridad, el «código» de este ejemplo solo cambia una marca (`window.hackeado`).

El HTML de partida, dentro del `<body>`:

```html
<div id="con-texto"></div>
<div id="con-inner"></div>
```

## 💻 Código

El archivo [`26-inner-html-y-su-riesgo.html`](../recursos/ejemplos/26-inner-html-y-su-riesgo.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
const comentario = '<b>Hola</b> <img src="img/no-existe.png" onerror="window.hackeado = true">';
const conTexto = document.getElementById('con-texto');
const conInner = document.getElementById('con-inner');

window.hackeado = false;
conTexto.textContent = comentario;
console.log('Cómo quedó con textContent: ' + conTexto.innerHTML);

setTimeout(() => {
  console.log('Con textContent, ¿se ejecutó el código? ' + window.hackeado);

  conInner.innerHTML = comentario;

  setTimeout(() => {
    console.log('Con innerHTML, ¿se ejecutó el código? ' + window.hackeado);
  }, 300);
}, 300);
```

## 🔍 Análisis paso a paso

1. **El comentario trae una imagen que no existe** (`img/no-existe.png`) y un atributo `onerror`, que ejecuta código cuando la imagen falla.
2. **Con `textContent`,** todo se muestra **como texto**: las etiquetas quedan escapadas y **nada se ejecuta** (`false`).
3. **Con `innerHTML`,** el texto se **interpreta como HTML**: se crea la imagen, falla al cargar y se ejecuta el `onerror` (`true`).
4. **El navegador no ejecuta los `<script>` insertados con `innerHTML`,** pero otras etiquetas con atributos de eventos (`onerror`, `onclick`…) **sí** pueden ejecutar código.
5. **Eso se llama XSS** (*cross-site scripting*): alguien logra que su código corra en la página de otra persona. Un ataque real podría robar datos; por eso este ejemplo solo cambia una marca inofensiva.
6. **Regla:** con texto que viene de afuera (formularios, comentarios, la red), usá **`textContent`**. Si necesitás mostrar HTML, usá `setHTML()` (Ejemplo 27) o una biblioteca de saneamiento.

## ✅ Resultado esperado

Al abrir `26-inner-html-y-su-riesgo.html`, la consola muestra:

```text
Cómo quedó con textContent: &lt;b&gt;Hola&lt;/b&gt; &lt;img src="img/no-existe.png" onerror="window.hackeado = true"&gt;
Con textContent, ¿se ejecutó el código? false
Con innerHTML, ¿se ejecutó el código? true
```

- `innerHTML` interpreta el texto como HTML y puede ejecutar código de atributos como `onerror`.
- Con texto de una persona usuaria, usá `textContent` (o `setHTML()`).
