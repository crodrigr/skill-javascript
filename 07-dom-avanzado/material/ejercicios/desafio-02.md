# 🔴 Desafío 02 — Un aviso que aparece y se cierra

> 🔴 **Nivel:** Desafío · 🎓 **Resultados de aprendizaje:** RA-9 · 🗓️ **Sesión 3**

## 🧱 Estado inicial

Abrí [`desafio-02.html`](../recursos/practica/desafio-02.html) y su archivo [`js/desafio-02.js`](../recursos/practica/js/desafio-02.js), de la carpeta `practica`. La página trae este HTML:

```html
<div id="avisos"></div>
<button id="nuevo">Mostrar aviso</button>
```

y este CSS (dentro de un `<style>` en el `<head>`):

```css
.tarjeta { border: 1px solid #94a3b8; padding: 8px; margin: 4px; background: #fff; }
```

Escribí tu código en el archivo `.js`; el `<script>` ya está al final del `<body>`.

## 🛠️ Proceso esperado

1. Al cargar, mostrá `Listo`.
2. Al pulsar «Mostrar aviso»: sumá `1` al número de avisos y **creá** una tarjeta con el texto `Aviso N` y un botón «Cerrar» (con `textContent`); agregala a `#avisos`.
3. Animá su **aparición** con `animate` (opacidad de `0` a `1`, `200` ms) y mostrá `Aviso N creado → avisos: K` (`K` = cantidad de avisos); cuando termine la animación, mostrá `Aviso N apareció`.
4. Al pulsar «Cerrar»: subí con `closest` hasta **su** tarjeta, animá su **salida** (opacidad de `1` a `0`, `200` ms, conservando el último cuadro) y, **cuando termine**, eliminala y mostrá `Aviso N eliminado → quedan K`.
5. Comprobá los **tres casos de prueba** (los clics se hacen con una espera entre uno y otro).

## ✅ Resultado esperado

El resultado se comprueba con los tres casos de prueba (más abajo).

## 🚧 Restricciones

- 🚫 Todo el texto con `textContent`; sin `innerHTML`.
- 🚫 No elimines la tarjeta antes de que termine la animación de salida.
- 🚫 Usá `finished`, no `setTimeout`, para esperar el final.

## 🧪 Casos de prueba

**Caso 1.** Pulsá «Mostrar aviso» y, cuando aparezca, «Cerrar».

La consola muestra (empezando por la línea de carga):

```text
Listo
Aviso 1 creado → avisos: 1
Aviso 1 apareció
Aviso 1 eliminado → quedan 0
```

**Caso 2.** Pulsá «Mostrar aviso» dos veces y cerrá solo el primero.

La consola muestra (empezando por la línea de carga):

```text
Listo
Aviso 1 creado → avisos: 1
Aviso 2 creado → avisos: 2
Aviso 1 apareció
Aviso 2 apareció
Aviso 1 eliminado → quedan 1
```

**Caso 3.** Pulsá «Mostrar aviso» una vez y no cierres nada.

La consola muestra (empezando por la línea de carga):

```text
Listo
Aviso 1 creado → avisos: 1
Aviso 1 apareció
```

## 🎓 Resultados de aprendizaje

- RA-9
