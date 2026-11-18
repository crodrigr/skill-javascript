# 🟢 Básico 02 — Insertar en las cuatro posiciones

> 🟢 **Nivel:** Básico · 🎓 **Resultados de aprendizaje:** RA-4 · 🗓️ **Sesión 2**

## 🧱 Estado inicial

Abrí [`basico-02.html`](../recursos/practica/basico-02.html) y su archivo [`js/basico-02.js`](../recursos/practica/js/basico-02.js), de la carpeta `practica`. La página trae este HTML:

```html
<div id="caja"><p id="nota">Café</p></div>
```

Escribí tu código en el archivo `.js`; el `<script>` ya está al final del `<body>`.

## 🛠️ Proceso esperado

1. Creá un `<h2>` con el texto `Hoy` e insertalo **antes** del párrafo (`beforebegin`) con `insertAdjacentElement`.
2. Con `insertAdjacentText`, agregá `★` y un espacio **dentro del párrafo, al principio** (`afterbegin`).
3. Con `insertAdjacentHTML`, agregá `<b>doble</b>` precedido de un espacio (el texto completo es un espacio y la negrita) **dentro del párrafo, al final** (`beforeend`).
4. Creá un `<small>` con el texto `Precio: $4.5` e insertalo **después** del párrafo (`afterend`); guardá lo que devuelve.
5. Mostrá el `innerHTML` de la caja; `Devuelve:` con el `nodeName` del valor devuelto; `Hijos de la caja:` con la cantidad de elementos; y `Hijos del párrafo:` con la cantidad de elementos y, entre paréntesis, la de nodos.

**Respondé:** ¿Qué diferencia hay entre `afterbegin` y `beforebegin`? ¿Por qué conviene `insertAdjacentText` si el texto lo escribió otra persona?

## ✅ Resultado esperado

La consola muestra:

```text
<h2>Hoy</h2><p id="nota">★ Café <b>doble</b></p><small>Precio: $4.5</small>
Devuelve: SMALL
Hijos de la caja: 3
Hijos del párrafo: 1 (4 nodos)
```

## 🚧 Restricciones

- 🚫 No uses `append`, `prepend` ni `innerHTML`.
- 🚫 No cambies el HTML.

## 🎓 Resultados de aprendizaje

- RA-4
