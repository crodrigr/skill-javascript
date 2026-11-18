# 📘 Ejemplo 17 — insertAdjacentHTML y su riesgo

> 🎓 **Resultados de aprendizaje:** RA-5
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, con el archivo y la línea de cada error; los clics se hicieron por código. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Los comentarios de la gente se agregan a un libro de visitas. Si se insertan con `insertAdjacentHTML`, el HTML del comentario **se interpreta** y puede ejecutar código; con `insertAdjacentText`, no. Para verlo con seguridad, el «código» solo cambia una marca (`window.hackeado`).

El HTML de partida, dentro del `<body>`:

```html
<div id="con-texto"></div>
<div id="con-html"></div>
```

## 💻 Código

El archivo [`17-insert-adjacent-html-y-su-riesgo.html`](../recursos/ejemplos/17-insert-adjacent-html-y-su-riesgo.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
const comentario = '<b>Hola</b> <img src="img/no-existe.png" onerror="window.hackeado = true">';
const conTexto = document.getElementById('con-texto');
const conHtml = document.getElementById('con-html');

window.hackeado = false;
conTexto.insertAdjacentText('beforeend', comentario);
console.log('Con insertAdjacentText: ' + conTexto.innerHTML);

setTimeout(() => {
  console.log('Con insertAdjacentText, ¿se ejecutó el código? ' + window.hackeado);

  conHtml.insertAdjacentHTML('beforeend', comentario);

  setTimeout(() => {
    console.log('Con insertAdjacentHTML, ¿se ejecutó el código? ' + window.hackeado);
  }, 300);
}, 300);
```

## 🔍 Análisis paso a paso

1. **`insertAdjacentText`** muestra el comentario como **texto**: las etiquetas quedan escapadas y no se ejecuta nada (`false`).
2. **`insertAdjacentHTML`** interpreta el comentario: se crea la imagen, falla al cargar y se ejecuta el `onerror` (`true`).
3. **Esto es XSS** (*cross-site scripting*): otra persona logra que su código corra en tu página. MDN avisa que `insertAdjacentHTML` **no sanea** nada.
4. **Alternativas seguras:** `insertAdjacentText`, crear nodos con `textContent`, o `setHTML()` de la Clase 06 (con detección: tiene disponibilidad limitada).
5. **El ejemplo usa solo una marca inofensiva;** un ataque real podría robar datos o modificar la página.
6. **Regla:** con texto de otra persona, nunca HTML sin sanear.

## ✅ Resultado esperado

Al abrir `17-insert-adjacent-html-y-su-riesgo.html`, la consola muestra:

```text
Con insertAdjacentText: &lt;b&gt;Hola&lt;/b&gt; &lt;img src="img/no-existe.png" onerror="window.hackeado = true"&gt;
Con insertAdjacentText, ¿se ejecutó el código? false
Con insertAdjacentHTML, ¿se ejecutó el código? true
```

- `insertAdjacentHTML` no sanea: con texto de otra persona puede ejecutar código.
- Usá `insertAdjacentText`, nodos con `textContent` o `setHTML()`.
