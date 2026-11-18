# 🟡 Intermedio 02 — Configurar un elemento con sus propiedades

> 🟡 **Nivel:** Intermedio · 🎓 **Resultados de aprendizaje:** RA-3 · 🗓️ **Sesión 1**

## 🧱 Estado inicial

Abrí [`intermedio-02.html`](../recursos/practica/intermedio-02.html) y su archivo [`js/intermedio-02.js`](../recursos/practica/js/intermedio-02.js), de la carpeta `practica`. La página trae este HTML:

```html
<div id="carta"></div>
```

y este CSS (dentro de un `<style>` en el `<head>`):

```css
.destacada { font-weight: bold; }
```

Escribí tu código en el archivo `.js`; el `<script>` ya está al final del `<body>`.

## 🛠️ Proceso esperado

1. Creá un `<article>` y configurá: `id` = `tarjeta-te`, `className` = `tarjeta destacada`, `title` = `Té de la casa`, `dataset.precio` = `3.2`, `style.backgroundColor` = `gold` y `style.fontSize` = `18px`.
2. Creá una `<img>` con `src` = `img/te.svg` y `alt` = `Taza de té`, y un `<button>` con el texto `Pedir` y el atributo `disabled`.
3. Agregá la imagen y el botón a la tarjeta con **una sola llamada** a `append` y la tarjeta, a `#carta`.
4. Mostrá el `outerHTML` de la tarjeta.
5. Mostrá `Precio + 1:` con el precio (convertido a número) más uno; `Color en línea:` con `style.backgroundColor`; `Peso calculado:` con el `fontWeight` de `getComputedStyle`; y `Botón deshabilitado:` con `disabled`.

**Respondé:** ¿Por qué `tarjeta.dataset.precio` hay que convertirlo con `Number` para sumarle uno? ¿Qué diferencia hay entre `style.fontWeight` y `getComputedStyle(tarjeta).fontWeight`?

## ✅ Resultado esperado

La consola muestra:

```text
<article id="tarjeta-te" class="tarjeta destacada" title="Té de la casa" data-precio="3.2" style="background-color: gold; font-size: 18px;"><img src="img/te.svg" alt="Taza de té"><button disabled="">Pedir</button></article>
Precio + 1: 4.2
Color en línea: gold
Peso calculado: 700
Botón deshabilitado: true
```

## 🚧 Restricciones

- 🚫 No uses `innerHTML` ni `setAttribute`.
- 🚫 `style.background-color` con guion no funciona: usá *camelCase*.

## 🎓 Resultados de aprendizaje

- RA-3
