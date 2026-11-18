# 📘 Ejemplo 27 — setHTML: HTML saneado, si el navegador lo tiene

> 🎓 **Resultados de aprendizaje:** RA-8
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, con el archivo y la línea de cada error; los clics se hicieron por código. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

`setHTML()` inserta HTML **saneado**: elimina lo peligroso (scripts, atributos de eventos) y conserva lo inocente (negritas, enlaces). Es una función **nueva**, así que primero hay que comprobar que el navegador la tenga.

El HTML de partida, dentro del `<body>`:

```html
<div id="destino"></div>
```

## 💻 Código

El archivo [`27-set-html.html`](../recursos/ejemplos/27-set-html.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
const comentario = '<b>Hola</b> <img src="img/no-existe.png" onerror="window.hackeado = true"><script>window.hackeado = true<\/script>';
const destino = document.getElementById('destino');

window.hackeado = false;

if (typeof destino.setHTML === 'function') {
  destino.setHTML(comentario);
  console.log('Camino: setHTML');
} else {
  destino.textContent = comentario;
  console.log('Camino: textContent (este navegador no tiene setHTML)');
}

setTimeout(() => {
  console.log('HTML resultante: ' + destino.innerHTML);
  console.log('¿Se ejecutó código? ' + window.hackeado);
}, 300);
```

## 🔍 Análisis paso a paso

1. **`elemento.setHTML(texto)`** parsea el HTML, **elimina** lo que puede ejecutar código (`<script>`, atributos como `onerror`) y inserta el resultado.
2. **Aquí conserva `<b>Hola</b>`** y quita la imagen con `onerror` y el script: no se ejecutó nada (`false`).
3. **Disponibilidad limitada:** según los datos de compatibilidad de MDN (consultados el 17 de noviembre de 2026), `setHTML()` figura desde Chrome 146 y Firefox 148, y Safari no la ofrece. Edge sigue a Chrome. Puede cambiar con el tiempo: revisá la tabla de MDN antes de depender de ella.
4. **Detección de la función:** `typeof destino.setHTML === 'function'` es verdadero solo si el navegador la tiene. Si no, se usa un **camino alternativo**: `textContent`, que muestra el texto sin interpretarlo.
5. **El camino alternativo no debe usar `innerHTML`** con texto no confiable: perderías la protección.
6. **Por qué `<\/script>`:** dentro de un `<script>`, la secuencia `</script>` cerraría el script de la página; por eso se escribe con una barra invertida (`<\/script>`), que en el texto vale lo mismo.
7. **Cuidado:** no conviertas el resultado a texto para volver a insertarlo con `innerHTML` en otro lado; volvé a usar `setHTML()`.

## ✅ Resultado esperado

Al abrir `27-set-html.html`, la consola muestra:

```text
Camino: setHTML
HTML resultante: <b>Hola</b> 
¿Se ejecutó código? false
```

- `setHTML()` inserta HTML saneado, pero no está en todos los navegadores: detectala antes de usarla.
- El camino alternativo seguro es `textContent`.
