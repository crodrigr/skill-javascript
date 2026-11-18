# 🟡 Intermedio 01 — Colecciones: viva frente a estática

> 🟡 **Nivel:** Intermedio · 🎓 **Resultados de aprendizaje:** RA-3 · 🗓️ **Sesión 1**

## 🧱 Estado inicial

Abrí [`intermedio-01.html`](../recursos/practica/intermedio-01.html) y su archivo [`js/intermedio-01.js`](../recursos/practica/js/intermedio-01.js), de la carpeta `practica`. La página trae este HTML:

```html
<h1 id="titulo" class="titulo">Menú de Aroma</h1>
<ul id="menu">
  <li class="producto">Café</li>
  <li class="producto destacado">Té</li>
  <li class="producto">Galleta</li>
  <li class="producto">Medialuna</li>
</ul>
```

Escribí tu código en el archivo `.js`; el `<script>` ya está al final del `<body>`.

## 🛠️ Proceso esperado

1. Guardá en `viva` los elementos con la clase `producto` (con `getElementsByClassName`) y en `estatica` los mismos (con `querySelectorAll`). Mostrá `Antes → viva: N, estática: M`.
2. Quitale la clase `producto` al **tercer** `<li>` (el de la Galleta): `document.querySelectorAll('li')[2].classList.remove('producto')`.
3. Volvé a mostrar las cantidades con el formato `Después → viva: N, estática: M`.
4. Recorré `viva` con `for…of` y mostrá `for…of: NOMBRE`; recorré `estatica` con `forEach` y mostrá `forEach: NOMBRE`.
5. Mostrá `forEach en la viva:` seguido del `typeof` de `viva.forEach`.

**Respondé:** ¿Por qué la colección viva tiene un elemento menos que la estática después de quitar la clase? ¿Qué pasaría si usaras `viva.forEach(...)`?

## ✅ Resultado esperado

La consola muestra:

```text
Antes → viva: 4, estática: 4
Después → viva: 3, estática: 4
for…of: Café
for…of: Té
for…of: Medialuna
forEach: Café
forEach: Té
forEach: Galleta
forEach: Medialuna
forEach en la viva: undefined
```

## 🚧 Restricciones

- 🚫 No cambies el HTML.
- 🚫 No uses `forEach` sobre la colección viva.

## 🎓 Resultados de aprendizaje

- RA-3
