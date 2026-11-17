# 🛠️ Taller 01 — El pedido prometido

## 🎯 Objetivo

Aplicar lo aprendido en la sesión 1: crear y consumir promesas (RA-1, RA-2 y RA-3), combinarlas (RA-4) y predecir el orden con microtareas (RA-5).

## 🌍 Contexto

Partís del flujo del pedido de Aroma de la Clase 04 (validar, cobrar, preparar y entregar), que usaba callbacks. Ahora lo reescribís con **promesas**. Trabajás en una página HTML con un `<script>` y la consola abierta (F12).

## 🪜 Pasos

1. **Los pasos como promesas.** Escribí `validar`, `cobrar`, `preparar` y `entregar`: cada una **devuelve una promesa** que se cumple con el pedido después de 300, 500, 800 y 200 ms. `validar` rechaza con `Pedido vacío` si no hay productos; `cobrar` rechaza con `Tarjeta rechazada` si `tarjetaValida` es `false`.
2. **Un solo paso.** Llamá a `validar` con un pedido y mostrá el resultado con `.then()`; probá con un pedido vacío y atendé el error con `.catch()`.
3. **La cadena.** Encadená los cuatro pasos con `.then()` en una **lista plana**, con un solo `.catch()` al final y un `.finally()` que muestre `Fin del pedido N`.
4. **Probá los errores.** Ejecutá con el pedido vacío y con la tarjeta rechazada; anotá qué pasos se ejecutan en cada caso.
5. **El `return` olvidado.** Escribí a propósito un paso sin `return` y anotá qué recibe el paso siguiente.
6. **Combiná.** Escribí tres consultas (`precio`, `stock` y `proveedor`, de 300, 500 y 700 ms) y mostrá su resultado con `Promise.all`; después hacé que una falle y comparalo con `Promise.allSettled`.
7. **Predecí el orden.** Escribí un programa con un `console.log`, un `setTimeout` de 0 ms, un `.then()` de una promesa ya cumplida y otro `console.log`. Anotá el orden **antes** de ejecutar y comprobalo.
8. **Explicá con tus palabras** si las promesas son código no bloqueante.

## 📦 Entregable

El archivo `.html` con el código y una nota con: lo que pasó en cada caso del paso 4, lo que recibió el paso sin `return` (paso 5), la comparación entre `Promise.all` y `Promise.allSettled` (paso 6), el orden predicho y el real del paso 7, y la explicación del paso 8.

## 📋 Criterios de evaluación

- ✔️ Los cuatro pasos devuelven promesas y la cadena es plana, con un solo `.catch()`.
- ✔️ Los casos de error detienen el flujo y la nota describe qué se ejecutó.
- ✔️ La diferencia entre `all` y `allSettled` está explicada con el ejemplo propio.
- ✔️ La predicción del orden coincide con la ejecución, o la nota explica la diferencia con las microtareas.
- ✔️ La explicación del paso 8 distingue la espera (no bloquea) de lo que se ejecuta dentro de la promesa.
