# 🚀 Proyecto de cierre — El menú de Aroma con vida

> 🚀 **Sesión 3** · 🎓 **Resultados de aprendizaje:** RA-2, RA-4, RA-5, RA-6, RA-7, RA-8 y RA-9

## 🌍 Contexto

Aroma quiere que su carta en línea **responda a los clics**: pedir un producto, destacarlo, ocultar los agotados y avisar con un mensaje. Con lo que aprendiste, vas a dar vida a la página.

## 🧱 Punto de partida

Abrí [`proyecto-menu-aroma.html`](../../material/recursos/practica/proyecto-menu-aroma.html) y su archivo [`js/proyecto-menu-aroma.js`](../../material/recursos/practica/js/proyecto-menu-aroma.js). La página trae este HTML:

```html
<h1 id="titulo">Menú de Aroma</h1>
<p>Pedidos: <span id="contador">0</span> | Total: $<span id="total">0</span></p>
<button id="ocultar">Ocultar agotados</button>
<ul id="menu">
  <li class="producto" data-precio="4.5"><span class="nombre">Café</span> <button class="pedir">Pedir</button> <button class="marcar">Destacar</button></li>
  <li class="producto" data-precio="3.2"><span class="nombre">Té</span> <button class="pedir">Pedir</button> <button class="marcar">Destacar</button></li>
  <li class="producto agotado" data-precio="1.8"><span class="nombre">Galleta</span> <button class="pedir">Pedir</button> <button class="marcar">Destacar</button></li>
  <li class="producto" data-precio="2.2"><span class="nombre">Medialuna</span> <button class="pedir">Pedir</button> <button class="marcar">Destacar</button></li>
  <li class="producto agotado" data-precio="3.5"><span class="nombre">Brownie</span> <button class="pedir">Pedir</button> <button class="marcar">Destacar</button></li>
</ul>
<p id="mensaje"></p>
```

Dos productos están marcados con la clase `agotado`. Cada producto tiene su precio en el atributo `data-precio`.

## 🛠️ Requisitos

1. **Pedir.** Al pulsar «Pedir» de un producto **no agotado**: agregá la clase `pedido` al producto, deshabilitá su botón (atributo booleano), cambiá su texto a `Pedido ✔`, sumá `1` a `#contador` y el precio a `#total`, y mostrá en `#mensaje` `Último pedido: NOMBRE`.
2. **Agotados.** El botón «Pedir» de un producto agotado debe estar **deshabilitado desde el inicio** (con `toggleAttribute` forzado) y no sumar nada.
3. **Destacar.** Cada botón «Destacar» alterna la clase `destacado` en **su** producto y guarda el estado en `aria-pressed` (`true` o `false`).
4. **Ocultar agotados.** El botón `#ocultar` alterna el atributo `hidden` en los productos agotados y cambia su propio texto entre `Ocultar agotados` y `Mostrar agotados`.
5. **Mensaje seguro.** Todos los textos que muestres (mensaje, nombres, contador) deben asignarse con `textContent`; **no** uses `innerHTML` con datos.
6. **Búsqueda.** Usá `querySelectorAll` para los productos y buscá los botones **dentro** de cada uno; no repitas el código por producto.
7. **Comprobación en la consola.** Al final de cada acción, mostrá en la consola una línea con el estado (por ejemplo, `Café → pedidos: 1, total: $4.5`).

## 🚧 Restricciones

- 🚫 Sin `createElement`, `appendChild`, `style` en línea ni `innerHTML` con datos.
- 🚫 Un solo `querySelectorAll` para los productos; los botones se buscan dentro de cada producto.
- 🚫 Los cambios de aspecto se hacen **solo con clases** (el CSS ya está en la página).

## 📦 Entregable

El archivo `.js` terminado y una nota breve con: una captura (o el texto de la consola) de tres pedidos y un destacado, la lista de los métodos de búsqueda, de atributos, de clases y de contenido que usaste, y una frase que explique por qué no usaste `innerHTML` con los nombres de los productos.

## 📋 Criterios de evaluación

- ✔️ Pedir cambia clase, atributo y contenido, y no suma de nuevo con el botón deshabilitado.
- ✔️ Los agotados quedan deshabilitados desde el inicio y no suman.
- ✔️ Destacar alterna la clase y guarda `aria-pressed` en **su** producto.
- ✔️ Ocultar agotados alterna `hidden` y el texto del botón.
- ✔️ Todo el contenido se asigna con `textContent` y la nota explica por qué.
- ✔️ El código es corto: un recorrido sobre los productos, sin repeticiones.
