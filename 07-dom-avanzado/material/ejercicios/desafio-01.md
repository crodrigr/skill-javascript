# 🔴 Desafío 01 — Pedidos que se pueden quitar

> 🔴 **Nivel:** Desafío · 🎓 **Resultados de aprendizaje:** RA-2, RA-6 · 🗓️ **Sesión 2**

## 🧱 Estado inicial

Abrí [`desafio-01.html`](../recursos/practica/desafio-01.html) y su archivo [`js/desafio-01.js`](../recursos/practica/js/desafio-01.js), de la carpeta `practica`. La página trae este HTML:

```html
<ul id="pedidos">
  <li class="pedido"><span class="texto">Café para Lucía</span> <button class="quitar">Quitar</button></li>
  <li class="pedido"><span class="texto">Té para Marcos</span> <button class="quitar">Quitar</button></li>
  <li class="pedido"><span class="texto">Galleta para Sofía</span> <button class="quitar">Quitar</button></li>
</ul>
<p>Pendientes: <span id="total">3</span></p>
```

Escribí tu código en el archivo `.js`; el `<script>` ya está al final del `<body>`.

## 🛠️ Proceso esperado

1. Al cargar, mostrá `Listo: N botones`.
2. Con **un solo** `querySelectorAll`, registrá un clic en cada botón «Quitar».
3. Al pulsar un botón: subí con `closest` hasta **su** `<li>`, leé el texto de su `.texto` y guardá su hermano siguiente (`nextElementSibling`) **antes** de quitarlo.
4. Quitá el pedido con `remove()` y actualizá `#total` con la cantidad de pedidos que quedan (usá `textContent`).
5. Mostrá `Quitado: TEXTO | pendientes: N | el siguiente era: TEXTO_DEL_SIGUIENTE` (o `ninguno` si era el último).
6. Comprobá los **tres casos de prueba**.

## ✅ Resultado esperado

El resultado se comprueba con los tres casos de prueba (más abajo).

## 🚧 Restricciones

- 🚫 Un solo `querySelectorAll`; no repitas el código por pedido.
- 🚫 No uses `id` para los botones ni `parentNode.parentNode`.
- 🚫 No cambies el HTML.

## 🧪 Casos de prueba

**Caso 1.** Pulsá «Quitar» del segundo pedido y después del primero.

La consola muestra (empezando por la línea de carga):

```text
Listo: 3 botones
Quitado: Té para Marcos | pendientes: 2 | el siguiente era: Galleta para Sofía
Quitado: Café para Lucía | pendientes: 1 | el siguiente era: Galleta para Sofía
```

**Caso 2.** Pulsá «Quitar» del último pedido.

La consola muestra (empezando por la línea de carga):

```text
Listo: 3 botones
Quitado: Galleta para Sofía | pendientes: 2 | el siguiente era: ninguno
```

**Caso 3.** Pulsá los tres botones, de arriba hacia abajo.

La consola muestra (empezando por la línea de carga):

```text
Listo: 3 botones
Quitado: Café para Lucía | pendientes: 2 | el siguiente era: Té para Marcos
Quitado: Té para Marcos | pendientes: 1 | el siguiente era: Galleta para Sofía
Quitado: Galleta para Sofía | pendientes: 0 | el siguiente era: ninguno
```

## 🎓 Resultados de aprendizaje

- RA-2, RA-6
