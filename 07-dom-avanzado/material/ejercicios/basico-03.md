# 🟢 Básico 03 — Una transición con una clase

> 🟢 **Nivel:** Básico · 🎓 **Resultados de aprendizaje:** RA-7 · 🗓️ **Sesión 3**

## 🧱 Estado inicial

Abrí [`basico-03.html`](../recursos/practica/basico-03.html) y su archivo [`js/basico-03.js`](../recursos/practica/js/basico-03.js), de la carpeta `practica`. La página trae este HTML:

```html
<div id="caja" class="caja"></div>
```

y este CSS (dentro de un `<style>` en el `<head>`):

```css
.caja { width: 60px; height: 60px; background: #d97706; transition: transform 400ms linear; }
.mover { transform: translateX(200px); }
```

Escribí tu código en el archivo `.js`; el `<script>` ya está al final del `<body>`.

## 🛠️ Proceso esperado

1. Registrá un `transitionend` que muestre `transitionend:` seguido de `evento.propertyName`.
2. **Antes de cambiar la clase**, mostrá `Antes → transform:` con el `transform` calculado de la caja (esto también le permite al navegador ver el estado inicial).
3. Agregá la clase `mover` con `classList.add`.
4. Mostrá `Animaciones activas:` con la cantidad de animaciones de la caja y `Tipo:` con el nombre del constructor de la primera.
5. Cuando la animación termine (`finished`), mostrá `Terminó → transform:` con el `transform` calculado.

**Respondé:** ¿Qué cambiaría si agregaras la clase **sin** leer antes el `transform` calculado? ¿Cuántas animaciones activas habría?

## ✅ Resultado esperado

La consola muestra (las animaciones transcurren en tiempo real; importan el **orden** y los **estados**, no los instantes):

```text
Antes → transform: none
Animaciones activas: 1
Tipo: CSSTransition
Terminó → transform: matrix(1, 0, 0, 1, 200, 0)
transitionend: transform
```

## 🚧 Restricciones

- 🚫 No cambies el HTML ni el CSS.
- 🚫 No uses `style` para mover la caja: usá la clase.

## 🎓 Resultados de aprendizaje

- RA-7
