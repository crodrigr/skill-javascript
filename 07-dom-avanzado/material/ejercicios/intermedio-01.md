# 🟡 Intermedio 01 — Mover, clonar, reemplazar y eliminar

> 🟡 **Nivel:** Intermedio · 🎓 **Resultados de aprendizaje:** RA-2 · 🗓️ **Sesión 1**

## 🧱 Estado inicial

Abrí [`intermedio-01.html`](../recursos/practica/intermedio-01.html) y su archivo [`js/intermedio-01.js`](../recursos/practica/js/intermedio-01.js), de la carpeta `practica`. La página trae este HTML:

```html
<ul id="pendientes">
  <li id="cafe">Café</li>
  <li id="te">Té</li>
  <li id="galleta">Galleta</li>
</ul>
<ul id="listos"></ul>
```

Escribí tu código en el archivo `.js`; el `<script>` ya está al final del `<body>`.

## 🛠️ Proceso esperado

1. **Mover:** pasá el café a `#listos` con `append` y mostrá `Mover el café → pendientes: N, listos: M`.
2. **Clonar:** hacé un clon **profundo** del té, cambiale el `id` a `te-copia`, agregalo a `#listos` y mostrá `Clonar el té →` con el mismo formato. Guardá el `isConnected` del clon **antes** de insertarlo y, después de insertarlo, mostrá `El clon antes de insertar estaba en la página:` seguido de ese valor.
3. **Reemplazar:** creá un `<li>` con el texto `Medialuna` y reemplazá con él a la galleta con `replaceWith`. Mostrá `Reemplazar la galleta → pendientes:` con el texto del segundo hijo de `#pendientes`, una coma y su cantidad de elementos (`N elementos`). Mostrá `La galleta sigue en la página:` con `isConnected`.
4. **Eliminar:** quitá el té original con `remove` y mostrá `Eliminar el té →` con las cantidades; después `Padre del té quitado:` con su `parentNode`.

**Respondé:** ¿Qué pasa con el café en `#pendientes` cuando lo agregás a `#listos`? ¿Por qué el clon necesita otro `id`?

## ✅ Resultado esperado

La consola muestra:

```text
Mover el café → pendientes: 2, listos: 1
Clonar el té → pendientes: 2, listos: 2
El clon antes de insertar estaba en la página: false
Reemplazar la galleta → pendientes: Medialuna, 2 elementos
La galleta sigue en la página: false
Eliminar el té → pendientes: 1, listos: 2
Padre del té quitado: null
```

## 🚧 Restricciones

- 🚫 No uses `innerHTML`.
- 🚫 No cambies el HTML.

## 🎓 Resultados de aprendizaje

- RA-2
