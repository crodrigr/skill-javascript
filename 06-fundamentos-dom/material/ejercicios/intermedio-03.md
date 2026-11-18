# 🟡 Intermedio 03 — Atributos booleanos

> 🟡 **Nivel:** Intermedio · 🎓 **Resultados de aprendizaje:** RA-5 · 🗓️ **Sesión 2**

## 🧱 Estado inicial

Abrí [`intermedio-03.html`](../recursos/practica/intermedio-03.html) y su archivo [`js/intermedio-03.js`](../recursos/practica/js/intermedio-03.js), de la carpeta `practica`. La página trae este HTML:

```html
<button id="pedir" disabled>Pedir</button>
<p id="aviso" hidden>Café agotado</p>
```

Escribí tu código en el archivo `.js`; el `<script>` ya está al final del `<body>`.

## 🛠️ Proceso esperado

1. Mostrá `Botón deshabilitado:` y `Aviso oculto:` con las propiedades `disabled` y `hidden`.
2. Escribí `setAttribute('disabled', 'false')` en el botón y mostrá `Tras setAttribute false:` con `disabled`.
3. Con `toggleAttribute('disabled')`, mostrá `toggle del botón:` con lo que devuelve y volvé a mostrar `Botón deshabilitado:`.
4. Hacé lo mismo con el aviso y `hidden`: `toggle del aviso:` y `Aviso oculto:`.
5. Con `toggleAttribute('hidden', true)`, ocultá el aviso otra vez y mostrá `Aviso oculto otra vez:`.

**Respondé:** ¿Por qué el botón sigue deshabilitado después de `setAttribute('disabled', 'false')`? ¿Cómo se lo habilita?

## ✅ Resultado esperado

La consola muestra:

```text
Botón deshabilitado: true
Aviso oculto: true
Tras setAttribute false: true
toggle del botón: false
Botón deshabilitado: false
toggle del aviso: false
Aviso oculto: false
Aviso oculto otra vez: true
```

## 🚧 Restricciones

- 🚫 No cambies el HTML.
- 🚫 No uses las propiedades `disabled` o `hidden` para asignar: solo para leer.

## 🎓 Resultados de aprendizaje

- RA-5
