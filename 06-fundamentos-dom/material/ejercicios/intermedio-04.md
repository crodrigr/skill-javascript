# 🟡 Intermedio 04 — El riesgo de innerHTML y setHTML

> 🟡 **Nivel:** Intermedio · 🎓 **Resultados de aprendizaje:** RA-8 · 🗓️ **Sesión 3**

## 🧱 Estado inicial

Abrí [`intermedio-04.html`](../recursos/practica/intermedio-04.html) y su archivo [`js/intermedio-04.js`](../recursos/practica/js/intermedio-04.js), de la carpeta `practica`. La página trae este HTML:

```html
<div id="con-texto"></div>
<div id="con-inner"></div>
<div id="con-sethtml"></div>
```

Y el archivo trae este código de partida:

```js
const comentario = '<b>Hola</b> <img src="img/no-existe.png" onerror="window.hackeado = true">';

// Escribí acá los pasos del ejercicio
```

Escribí tu código en el archivo `.js`; el `<script>` ya está al final del `<body>`.

## 🛠️ Proceso esperado

1. Poné `window.hackeado = false` y mostrá el comentario en `#con-texto` con `textContent`.
2. A los **300 ms** (con `setTimeout`), mostrá `textContent → código ejecutado:` con `window.hackeado`.
3. Después, si `typeof conSetHtml.setHTML === 'function'`, usá `setHTML(comentario)` y mostrá `Camino: setHTML`; si no, usá `textContent` y mostrá `Camino: textContent`.
4. A los **300 ms** más, mostrá `setHTML o alternativa → código ejecutado:` y `HTML resultante:` con el `innerHTML` de `#con-sethtml`.
5. Después, mostrá el comentario en `#con-inner` con **`innerHTML`** y, a los **300 ms**, mostrá `innerHTML → código ejecutado:`.
6. Anotá en qué casos el código se ejecutó.

**Respondé:** ¿Por qué `innerHTML` es un riesgo con el comentario de una persona usuaria? ¿Qué diferencia hay con `setHTML()`?

## ✅ Resultado esperado

La consola muestra:

```text
textContent → código ejecutado: false
Camino: setHTML
setHTML o alternativa → código ejecutado: false
HTML resultante: <b>Hola</b> 
innerHTML → código ejecutado: true
```

## 🚧 Restricciones

- 🚫 No cambies el HTML ni el `comentario`.
- 🚫 Para el camino alternativo, **no** uses `innerHTML`.
- 🚫 El resultado de la línea `Camino:` depende del navegador (el esperado es el de Chrome 146 o posterior).

## 🎓 Resultados de aprendizaje

- RA-8
