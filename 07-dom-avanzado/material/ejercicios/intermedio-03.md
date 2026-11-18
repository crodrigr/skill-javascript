# 🟡 Intermedio 03 — Navegar la jerarquía

> 🟡 **Nivel:** Intermedio · 🎓 **Resultados de aprendizaje:** RA-6 · 🗓️ **Sesión 2**

## 🧱 Estado inicial

Abrí [`intermedio-03.html`](../recursos/practica/intermedio-03.html) y su archivo [`js/intermedio-03.js`](../recursos/practica/js/intermedio-03.js), de la carpeta `practica`. La página trae este HTML:

```html
<section id="carta">
  <h2>Carta</h2>
  <ul id="menu">
    <li id="cafe">Café</li>
    <li id="te">Té</li>
    <li id="galleta">Galleta</li>
  </ul>
  <button id="cerrar">Cerrar la carta</button>
</section>
```

Escribí tu código en el archivo `.js`; el `<script>` ya está al final del `<body>`.

## 🛠️ Proceso esperado

1. Desde el `<li id="te">`, sin buscar otros elementos por `id`: mostrá `Padre del té:` con el `id` de su padre (usá `parentElement`) y `Sección:` con el `id` de su ancestro `section` (usá `closest`). Mostrá `Ancestro que no existe:` con `closest('table')`.
2. Mostrá `Anterior:` y `Siguiente:` con el texto de sus hermanos, y `Primero:` y `último:` (en una línea, separados por una coma) con el texto del primer y último hijo del menú.
3. Mostrá `Elementos hijos del menú:` con `children.length` y `Nodos hijos del menú:` con `childNodes.length`.
4. Con `Array.from` y `for…of`, armá una lista con los textos de los hijos y mostrá `Recorridos:` seguido de los textos separados por una coma y un espacio.
5. Mostrá `Hermano anterior del botón:` con el `id` del hermano anterior de `#cerrar` y `Padre de la sección:` con el `nodeName` del padre de `#carta`.

**Respondé:** ¿Por qué `childNodes.length` es mayor que `children.length`? ¿Qué devuelve `closest` si ningún ancestro coincide?

## ✅ Resultado esperado

La consola muestra:

```text
Padre del té: menu
Sección: carta
Ancestro que no existe: null
Anterior: Café
Siguiente: Galleta
Primero: Café, último: Galleta
Elementos hijos del menú: 3
Nodos hijos del menú: 7
Recorridos: Café, Té, Galleta
Hermano anterior del botón: menu
Padre de la sección: BODY
```

## 🚧 Restricciones

- 🚫 No busques otros elementos con `getElementById` después del primero.
- 🚫 No uses `parentNode.parentNode`.
- 🚫 No cambies el HTML.

## 🎓 Resultados de aprendizaje

- RA-6
