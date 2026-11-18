# 🟢 Básico 02 — Atributos de un enlace y una imagen

> 🟢 **Nivel:** Básico · 🎓 **Resultados de aprendizaje:** RA-4 · 🗓️ **Sesión 2**

## 🧱 Estado inicial

Abrí [`basico-02.html`](../recursos/practica/basico-02.html) y su archivo [`js/basico-02.js`](../recursos/practica/js/basico-02.js), de la carpeta `practica`. La página trae este HTML:

```html
<article class="tarjeta">
  <h2 id="nombre">Café</h2>
  <img id="foto" src="img/cafe.svg" alt="Taza de café">
  <a id="carta" href="carta.html" target="_blank">Ver la carta</a>
  <button id="pedir" class="pedir">Pedir</button>
</article>
```

Escribí tu código en el archivo `.js`; el `<script>` ya está al final del `<body>`.

## 🛠️ Proceso esperado

1. Mostrá `href:` seguido del `href` del enlace y `rel:` seguido del atributo `rel` (que no existe).
2. Cambiá el `href` del enlace a `menu.html`, el `src` de la imagen a `img/te.svg` y su `alt` a `Taza de té`.
3. Mostrá `href ahora:` y `src ahora:` con los valores nuevos.
4. Mostrá la lista de nombres de atributos de la imagen (`getAttributeNames`).
5. Quitá el atributo `target` del enlace y mostrá `target ahora:` seguido de su valor.

**Respondé:** ¿Qué tipo de dato devuelve `getAttribute` y qué devuelve si el atributo no existe?

## ✅ Resultado esperado

La consola muestra:

```text
href: carta.html
rel: null
href ahora: menu.html
src ahora: img/te.svg
(3) ['id', 'src', 'alt']
target ahora: null
```

## 🚧 Restricciones

- 🚫 No cambies el HTML.
- 🚫 No uses propiedades como `enlace.href` o `foto.src`: usá los métodos de atributos.

## 🎓 Resultados de aprendizaje

- RA-4
