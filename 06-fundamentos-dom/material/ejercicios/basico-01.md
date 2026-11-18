# 🟢 Básico 01 — Encontrar elementos

> 🟢 **Nivel:** Básico · 🎓 **Resultados de aprendizaje:** RA-2 · 🗓️ **Sesión 1**

## 🧱 Estado inicial

Abrí [`basico-01.html`](../recursos/practica/basico-01.html) y su archivo [`js/basico-01.js`](../recursos/practica/js/basico-01.js), de la carpeta `practica`. La página trae este HTML:

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

1. Con `getElementById`, mostrá el texto del título.
2. Con `getElementsByClassName`, mostrá `Productos:` seguido de la cantidad de elementos con la clase `producto`.
3. Con `querySelector`, mostrá `Destacado:` seguido del texto del `<li>` que tiene la clase `destacado`.
4. Con `getElementsByTagName`, mostrá `Etiquetas li:` seguido de la cantidad de `<li>`.
5. Con `querySelectorAll` y `forEach`, mostrá `Producto N: NOMBRE` para cada producto (con `N` desde `1`).

**Respondé:** ¿Qué devolvería `document.getElementById('menu2')` y por qué hay que tener cuidado al usar su resultado?

## ✅ Resultado esperado

La consola muestra:

```text
Menú de Aroma
Productos: 4
Destacado: Té
Etiquetas li: 4
Producto 1: Café
Producto 2: Té
Producto 3: Galleta
Producto 4: Medialuna
```

## 🚧 Restricciones

- 🚫 No cambies el HTML.
- 🚫 No uses `style` ni crees elementos.

## 🎓 Resultados de aprendizaje

- RA-2
