# 🟡 Intermedio 04 — animate() con finished y control

> 🟡 **Nivel:** Intermedio · 🎓 **Resultados de aprendizaje:** RA-8 · 🗓️ **Sesión 3**

## 🧱 Estado inicial

Abrí [`intermedio-04.html`](../recursos/practica/intermedio-04.html) y su archivo [`js/intermedio-04.js`](../recursos/practica/js/intermedio-04.js), de la carpeta `practica`. La página trae este HTML:

```html
<div id="aviso" class="aviso">Pedido listo</div>
<div id="otro" class="aviso">Pedido en camino</div>
```

y este CSS (dentro de un `<style>` en el `<head>`):

```css
.aviso { padding: 8px; background: #dbeafe; margin: 4px; }
```

Escribí tu código en el archivo `.js`; el `<script>` ya está al final del `<body>`.

## 🛠️ Proceso esperado

1. Animá `#aviso` con `animate`: la opacidad pasa de `1` a `0.2`, dura `300` ms y conserva el último cuadro (`fill: 'forwards'`).
2. Mostrá `Estado al empezar:` con `playState` y `Duración:` con la duración que tiene la animación (`effect.getTiming().duration`).
3. Cuando termine (`finished`), mostrá `Terminó → estado:` con su `playState`, una coma y `opacity:` con la opacidad calculada del aviso.
4. Animá `#otro` igual pero con `1000` ms. **Pausala** y mostrá `Segunda tras pause:` con su estado; **reanudala** y mostrá `Segunda tras play:`; **cancelala** y mostrá `Segunda tras cancel:` con su estado y `opacity:` con la opacidad calculada de `#otro`.

**Respondé:** ¿Qué diferencia hay entre `finish()` y `cancel()` en el aspecto final del elemento? ¿Por qué no conviene usar `finished` después de `cancel()`?

## ✅ Resultado esperado

La consola muestra (las animaciones transcurren en tiempo real; importan el **orden** y los **estados**, no los instantes):

```text
Estado al empezar: running
Duración: 300
Segunda tras pause: paused
Segunda tras play: running
Segunda tras cancel: idle, opacity: 1
Terminó → estado: finished, opacity: 0.2
```

## 🚧 Restricciones

- 🚫 No uses `setTimeout` para esperar el final: usá `finished`.
- 🚫 No cambies el HTML ni el CSS.

## 🎓 Resultados de aprendizaje

- RA-8
