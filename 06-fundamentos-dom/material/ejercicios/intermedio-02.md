# 🟡 Intermedio 02 — Clases con classList

> 🟡 **Nivel:** Intermedio · 🎓 **Resultados de aprendizaje:** RA-6 · 🗓️ **Sesión 2**

## 🧱 Estado inicial

Abrí [`intermedio-02.html`](../recursos/practica/intermedio-02.html) y su archivo [`js/intermedio-02.js`](../recursos/practica/js/intermedio-02.js), de la carpeta `practica`. La página trae este HTML:

```html
<ul id="menu">
  <li id="cafe" class="producto activo">Café</li>
</ul>
```

Escribí tu código en el archivo `.js`; el `<script>` ya está al final del `<body>`.

## 🛠️ Proceso esperado

1. Mostrá `Inicio:` y el atributo `class` del café.
2. Agregá las clases `destacado` y `oferta` **en una sola llamada** y mostrá `Tras add:` con el `class`; mostrá `¿Tiene oferta?` con el resultado de `contains`.
3. Quitá `oferta` y mostrá `Tras remove:` con el `class`.
4. Reemplazá `activo` por `inactivo`: mostrá `replace:` con lo que devuelve y `Tras replace:` con el `class`.
5. Mostrá `toggle:` con lo que devuelve `toggle('nuevo')` y `toggle con true:` con lo que devuelve `toggle('agotado', true)`.
6. Mostrá `Final:` con el `class` seguido de un espacio y `(N clases)`, con `N` = `classList.length`.

**Respondé:** ¿Qué pasa si agregás con `add` una clase que ya existe? ¿Y si pasás `'dos palabras'` como nombre de clase?

## ✅ Resultado esperado

La consola muestra:

```text
Inicio: producto activo
Tras add: producto activo destacado oferta
¿Tiene oferta? true
Tras remove: producto activo destacado
replace: true
Tras replace: producto inactivo destacado
toggle: true
toggle con true: true
Final: producto inactivo destacado nuevo agotado (5 clases)
```

## 🚧 Restricciones

- 🚫 No uses `setAttribute` para cambiar las clases.
- 🚫 No cambies el HTML.

## 🎓 Resultados de aprendizaje

- RA-6
