# 🛠️ Taller 02 — Estilos con clases y atributos

## 🎯 Objetivo

Aplicar lo aprendido en la sesión 2: cambiar atributos (RA-4), explicar los atributos booleanos (RA-5) y manipular clases con `classList` (RA-6).

## 🌍 Contexto

Partís de la página del Taller 01. Ahora los productos van a **cambiar de aspecto y de comportamiento** con clics, sin escribir estilos en JavaScript: las clases las define un poco de CSS que escribís vos.

## 🪜 Pasos

1. **El CSS.** Escribí en un `<style>` las clases `destacado` (fondo amarillo), `agotado` (texto gris tachado) y `oferta` (texto rojo).
2. **Atributos.** Agregá a la página una imagen y un enlace. Leé su `src`, `alt` y `href`; cambiá los tres; listá los atributos de la imagen con `getAttributeNames`; quitá el `target` del enlace.
3. **Booleanos.** Agregá un botón «Pedir» deshabilitado. Probá `setAttribute('disabled', 'false')`, anotá qué pasa y habilitalo de la forma correcta.
4. **`classList` básico.** Con `add`, `remove` y `contains`, marcá un producto como `oferta`, quitale `producto` y comprobá cada paso mostrando su `class`.
5. **Un clic con `toggle`.** Agregá un botón por producto que alterne `destacado` con `classList.toggle` y muestre el valor que devuelve.
6. **Con condición.** Guardá un stock por producto en un objeto y, al cargar, aplicá `toggle('agotado', stock === 0)` a cada producto.
7. **`replace`.** Agregá un botón que cambie `activo` por `inactivo` en un producto; mostrá lo que devuelve `replace` cuando la clase no existe.
8. **Atributo de estado.** Con cada clic de `toggle`, guardá el estado en `aria-pressed` (`true` o `false`).

## 📦 Entregable

El archivo `.html` con el código y el CSS, y una nota con: lo que pasó en el paso 3 y cómo lo resolviste, la salida de los pasos 4 y 5 con tres clics, el valor de `replace` en el paso 7 y una frase que explique por qué `setAttribute('disabled', 'false')` no habilita un botón.

## 📋 Criterios de evaluación

- ✔️ Los atributos se leen, cambian, listan y quitan con los métodos correspondientes.
- ✔️ El botón se habilita quitando el atributo y la nota explica por qué.
- ✔️ Las clases cambian con `classList` (sin `setAttribute('class', …)`) y las demás se conservan.
- ✔️ `toggle` con condición refleja el stock y `aria-pressed` sigue el estado.
- ✔️ La nota explica el atributo booleano con claridad.
