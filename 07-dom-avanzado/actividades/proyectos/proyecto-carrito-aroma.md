# 🚀 Proyecto de cierre — El carrito animado de Aroma

> 🚀 **Sesión 3** · 🎓 **Resultados de aprendizaje:** RA-1, RA-2, RA-3, RA-6, RA-8 y RA-9

## 🌍 Contexto

Aroma quiere un carrito donde cada clic en «Agregar» **crea una línea** con el nombre y el precio, que **aparece con una animación**, y donde cada línea se puede **quitar** con una animación de salida. El total y la cantidad de líneas se actualizan solos.

## 🧱 Punto de partida

Abrí [`proyecto-carrito-aroma.html`](../../material/recursos/practica/proyecto-carrito-aroma.html) y su archivo [`js/proyecto-carrito-aroma.js`](../../material/recursos/practica/js/proyecto-carrito-aroma.js). La página trae este HTML:

```html
<h1>Carrito de Aroma</h1>
<ul id="productos">
  <li class="producto" data-precio="4.5"><span class="nombre">Café</span> <button class="agregar">Agregar</button></li>
  <li class="producto" data-precio="3.2"><span class="nombre">Té</span> <button class="agregar">Agregar</button></li>
  <li class="producto" data-precio="1.8"><span class="nombre">Galleta</span> <button class="agregar">Agregar</button></li>
</ul>
<h2>Tu carrito</h2>
<ul id="carrito"></ul>
<p>Total: $<span id="total">0</span> | Líneas: <span id="cantidad">0</span></p>
```

y este CSS (dentro de un `<style>` en el `<head>`):

```css
.linea { padding: 4px 8px; margin: 2px 0; background: #f1f5f9; }
.linea button { margin-left: 8px; }
```

Cada producto tiene su precio en el atributo `data-precio`.

## 🛠️ Requisitos

1. **Agregar.** Al pulsar «Agregar» de un producto, **creá** una línea (`<li>` con la clase `linea`) con el texto `NOMBRE — $PRECIO` y un botón «Quitar», y agregala a `#carrito`. Todo el texto con `textContent`.
2. **Aparición animada.** La línea nueva **aparece** con una animación de opacidad (de `0` a `1`) hecha con `animate`.
3. **Totales.** Guardá el precio de cada línea en su `dataset.precio`. Cada vez que se agrega o se quita una línea, **recalculá** `#total` sumando los precios de las líneas que hay en el carrito (recorriendo `carrito.children`) y actualizá `#cantidad` con la cantidad de líneas. Así el total nunca se desfasa.
4. **Quitar.** El botón «Quitar» sube con `closest` hasta **su** línea, anima su **salida** (opacidad de `1` a `0`) y, **cuando termine** la animación (`finished`), la elimina y actualiza los totales.
5. **Una línea por clic.** Cada clic en «Agregar» crea una línea nueva, aunque el producto ya esté en el carrito.
6. **Movimiento reducido.** Si `prefers-reduced-motion: reduce` es verdadero, usá una duración casi nula (`1` ms) en las dos animaciones.
7. **Comprobación en la consola.** Mostrá una línea por acción, por ejemplo `Agregado: Café → líneas: 1, total: $4.5` y `Quitado: Café → líneas: 0, total: $0`.

## 🚧 Restricciones

- 🚫 Sin `innerHTML` ni `insertAdjacentHTML` con datos.
- 🚫 Un solo `querySelectorAll` para los botones «Agregar»; nada de `id` por línea.
- 🚫 No elimines la línea antes de que termine la animación de salida.
- 🚫 Los cambios de aspecto, con `animate` o con clases; no con `style` en línea para animar.

## 📦 Entregable

El archivo `.js` terminado y una nota breve con: el texto de la consola de una sesión (tres agregados y un quitado), la lista de los métodos de nodos, de navegación y de animación que usaste y una frase que explique por qué se espera `finished` antes de eliminar.

## 📋 Criterios de evaluación

- ✔️ Cada clic en «Agregar» crea y configura una línea nueva con sus datos y la inserta en el carrito.
- ✔️ La línea aparece animada y se quita animada, esperando `finished` antes de eliminarla.
- ✔️ El total y la cantidad de líneas son correctos después de cada acción.
- ✔️ El botón «Quitar» afecta solo a su línea (usa `closest`).
- ✔️ Se respeta `prefers-reduced-motion` y todo el texto se asigna con `textContent`.
- ✔️ El código es corto: un recorrido sobre los productos, sin repeticiones.
