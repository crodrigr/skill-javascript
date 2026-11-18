# 🌳 El DOM y la búsqueda de elementos

Curso **JavaScript** · Clase 06 · **Sesión 1**

---

## 🎯 Objetivos de la sesión

- 🔹 Explicar qué es el DOM y cómo se ve la página como un árbol.
- 🔹 Encontrar elementos con los cinco métodos de búsqueda.
- 🔹 Distinguir lo que devuelve cada uno y recorrerlo.

---

## 🌳 ¿Qué es el DOM?

![A la izquierda, el HTML de una página con un título y una lista de tres productos. A la derecha, el mismo contenido como un árbol: la raíz document tiene el elemento html, que contiene head, con title, y body. El body contiene el h1 con id titulo y la lista ul con id menu, que contiene tres elementos li.](../imagenes/arbol-del-dom.svg)

- El navegador convierte el HTML en un **árbol de nodos**.
- `document` es la raíz. Cambiar el DOM **no** cambia el archivo `.html`.

---

## 📍 El script al final del `<body>`

- El DOM se arma **de arriba hacia abajo**.
- Un script en el `<head>` busca elementos que **todavía no existen** → `null`.
- Regla: el `<script>` va **antes de `</body>`**.

---

## 🆔 `getElementById`

```js
const titulo = document.getElementById('titulo');
```

- Devuelve **un elemento** o `null`. Sin `#`.

---

## 🏷️ `getElementsByClassName` y `getElementsByTagName`

- Devuelven una **`HTMLCollection` viva**.
- Se recorren con `length` y posiciones o `for…of`; **no** tienen `forEach`.
- Sin coincidencias: colección **vacía**.

---

## 🎯 `querySelector`

```js
document.querySelector('#menu li:last-child');
```

- Un **selector CSS** → el **primer** elemento que coincide, o `null`.
- Un selector inválido: `SyntaxError`.

---

## 📋 `querySelectorAll`

```js
document.querySelectorAll('.producto').forEach((p) => { /* … */ });
```

- Devuelve una **`NodeList` estática** (con `forEach`).

---

## 🔎 Los cinco métodos

![Tabla con los cinco métodos de búsqueda. getElementById recibe un id y devuelve un elemento o null. getElementsByClassName y getElementsByTagName devuelven una HTMLCollection viva, vacía si no hay coincidencias. querySelector recibe un selector CSS y devuelve el primer elemento que coincide o null. querySelectorAll devuelve una NodeList estática, con forEach, vacía si no hay coincidencias.](../imagenes/metodos-de-busqueda.svg)

- Uno solo → un elemento o `null`. Varios → una colección.

---

## ⚡ Viva frente a estática

- La `HTMLCollection` se **actualiza sola**; la `NodeList` es una **foto**.
- Al quitar una clase: viva `3`, estática `4`.

---

## 🔁 Recorrer colecciones

- `for` y `for…of` sirven para las dos.
- `forEach` solo para la `NodeList`.
- Sobre una `HTMLCollection`: `TypeError`.

---

## ✍️ Actividad

- 🟢 [Básico 01](../ejercicios/basico-01.md) y 🟡 [Intermedio 01](../ejercicios/intermedio-01.md).
- 🛠️ [Taller 01 — Encontrar el menú](../../actividades/talleres/taller-01.md).

---

## ✅ Resumen

- El DOM es la página como árbol; `document` es la raíz.
- Cinco métodos: elegí según uno o varios, vivo o estático.
- El `<script>` va al final del `<body>`.
