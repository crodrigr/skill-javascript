# 📘 Ejemplo 15 — insertAdjacentText: texto sin interpretar

> 🎓 **Resultados de aprendizaje:** RA-4, RA-5
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, con el archivo y la línea de cada error; los clics se hicieron por código. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Cuando solo hay que insertar **texto** en una posición exacta, `insertAdjacentText` lo hace sin interpretar etiquetas: es la opción **segura**.

El HTML de partida, dentro del `<body>`:

```html
<div id="caja"><p id="nota"><b>Café</b></p></div>
```

## 💻 Código

El archivo [`15-insert-adjacent-text.html`](../recursos/ejemplos/15-insert-adjacent-text.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
const nota = document.getElementById('nota');

nota.insertAdjacentText('afterbegin', '[nuevo] ');
nota.insertAdjacentText('beforeend', ' <i>no es cursiva</i>');
nota.insertAdjacentText('afterend', 'texto afuera');

console.log('Párrafo: ' + nota.innerHTML);
console.log('Caja: ' + document.getElementById('caja').innerHTML);
console.log('Elementos dentro del párrafo: ' + nota.children.length);
```

## 🔍 Análisis paso a paso

1. **`insertAdjacentText(posición, texto)`** inserta un **nodo de texto** en la posición indicada.
2. **No interpreta HTML:** `<i>no es cursiva</i>` queda **escrito como texto** (escapado) y no se crea ninguna etiqueta.
3. **Con `afterend`** el texto queda fuera del párrafo, después de él.
4. **No devuelve valor.**
5. **Es la alternativa segura** a `insertAdjacentHTML` cuando el texto viene de otra persona (Ejemplo 17).

## ✅ Resultado esperado

Al abrir `15-insert-adjacent-text.html`, la consola muestra:

```text
Párrafo: [nuevo] <b>Café</b> &lt;i&gt;no es cursiva&lt;/i&gt;
Caja: <p id="nota">[nuevo] <b>Café</b> &lt;i&gt;no es cursiva&lt;/i&gt;</p>texto afuera
Elementos dentro del párrafo: 1
```

- `insertAdjacentText` inserta texto en una posición exacta, sin interpretar etiquetas.
- Es la opción segura para texto de otra persona.
