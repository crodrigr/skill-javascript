# 🟢 Básico 03 — Cambiar el contenido

> 🟢 **Nivel:** Básico · 🎓 **Resultados de aprendizaje:** RA-7 · 🗓️ **Sesión 3**

## 🧱 Estado inicial

Abrí [`basico-03.html`](../recursos/practica/basico-03.html) y su archivo [`js/basico-03.js`](../recursos/practica/js/basico-03.js), de la carpeta `practica`. La página trae este HTML:

```html
<p id="precio">Café: <strong>$4.5</strong></p>
<ul id="menu"><li>Galleta</li></ul>
```

Escribí tu código en el archivo `.js`; el `<script>` ya está al final del `<body>`.

## 🛠️ Proceso esperado

1. Mostrá `Nodo:` con el `nodeName` del párrafo y el del `<strong>` (separados por una barra con un espacio a cada lado).
2. Mostrá `Texto:` con el `textContent` del párrafo.
3. Cambiá el texto del `<strong>` a `$5.0` y mostrá `Nuevo texto:` con el `textContent` del párrafo.
4. Con `innerHTML`, reemplazá el contenido del menú por `<li>Té</li><li><b>Medialuna</b></li>` y mostrá `Menú:` con su `innerHTML` y `Solo el texto:` con su `textContent`.
5. Mostrá `Párrafo:` con el `outerHTML` del párrafo.

**Respondé:** ¿En qué se diferencian `innerHTML` y `outerHTML` al leerlos? ¿Y `textContent` e `innerHTML` al asignarlos?

## ✅ Resultado esperado

La consola muestra:

```text
Nodo: P / STRONG
Texto: Café: $4.5
Nuevo texto: Café: $5.0
Menú: <li>Té</li><li><b>Medialuna</b></li>
Solo el texto: TéMedialuna
Párrafo: <p id="precio">Café: <strong>$5.0</strong></p>
```

## 🚧 Restricciones

- 🚫 No cambies el HTML.
- 🚫 No uses `createElement` ni `appendChild`.

## 🎓 Resultados de aprendizaje

- RA-7
