# 🔴 Desafío 02 — El menú con contador y total

> 🔴 **Nivel:** Desafío · 🎓 **Resultados de aprendizaje:** RA-9 · 🗓️ **Sesión 3**

## 🧱 Estado inicial

Abrí [`desafio-02.html`](../recursos/practica/desafio-02.html) y su archivo [`js/desafio-02.js`](../recursos/practica/js/desafio-02.js), de la carpeta `practica`. La página trae este HTML:

```html
<h1 id="titulo">Menú de Aroma</h1>
<p>Pedidos: <span id="contador">0</span> | Total: $<span id="total">0</span></p>
<ul id="menu">
  <li class="producto" data-precio="4.5"><span class="nombre">Café</span> <button class="pedir">Pedir</button></li>
  <li class="producto" data-precio="3.2"><span class="nombre">Té</span> <button class="pedir">Pedir</button></li>
  <li class="producto" data-precio="1.8"><span class="nombre">Galleta</span> <button class="pedir">Pedir</button></li>
</ul>
<p id="mensaje"></p>
```

Escribí tu código en el archivo `.js`; el `<script>` ya está al final del `<body>`.

## 🛠️ Proceso esperado

1. Al cargar, mostrá `Listo: N botones`.
2. Para cada producto, buscá su botón, su nombre y su precio (el atributo `data-precio`, convertido a número con `Number`).
3. Al pulsar «Pedir»: sumá `1` a los pedidos y el precio al total.
4. En el producto: agregá la clase `pedido`; en el botón: poné el atributo `disabled` y cambiá su texto a `Pedido ✔`.
5. Actualizá el texto de `#contador`, de `#total` y de `#mensaje` (`Último pedido: NOMBRE`).
6. Mostrá `NOMBRE → pedidos: N, total: $T, mensaje: …`.
7. Comprobá los **tres casos de prueba**.

## ✅ Resultado esperado

El resultado se comprueba con los tres casos de prueba (más abajo).

## 🚧 Restricciones

- 🚫 Un solo `querySelectorAll`; no repitas el código por producto.
- 🚫 Un botón deshabilitado no debe sumar de nuevo.
- 🚫 No cambies el HTML ni uses `innerHTML` para mostrar datos.

## 🧪 Casos de prueba

**Caso 1.** Pulsá Pedir en Café y en Té.

La consola muestra (empezando por la línea de carga):

```text
Listo: 3 botones
Café → pedidos: 1, total: $4.5, mensaje: Último pedido: Café
Té → pedidos: 2, total: $7.7, mensaje: Último pedido: Té
```

**Caso 2.** Pulsá Pedir dos veces en la Galleta.

La consola muestra (empezando por la línea de carga):

```text
Listo: 3 botones
Galleta → pedidos: 1, total: $1.8, mensaje: Último pedido: Galleta
```

**Caso 3.** Pulsá los tres botones, de abajo hacia arriba.

La consola muestra (empezando por la línea de carga):

```text
Listo: 3 botones
Galleta → pedidos: 1, total: $1.8, mensaje: Último pedido: Galleta
Té → pedidos: 2, total: $5, mensaje: Último pedido: Té
Café → pedidos: 3, total: $9.5, mensaje: Último pedido: Café
```

## 🎓 Resultados de aprendizaje

- RA-9
