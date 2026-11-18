# 🛠️ Taller 03 — Animar la tarjeta

## 🎯 Objetivo

Aplicar lo aprendido en la sesión 3: animar con una clase y una transición (RA-7), con `animate()` y `requestAnimationFrame` (RA-8) y respetar el movimiento reducido (RA-9).

## 🌍 Contexto

Aroma quiere que sus avisos **aparezcan** y **se cierren** con una animación suave. Trabajás en la misma página, con el CSS en un `<style>`.

## 🪜 Pasos

1. **Transición con clase.** Escribí en CSS una caja con `transition: transform 400ms linear` y una clase `mover`. Leé el estilo calculado antes de agregar la clase, y mostrá `getAnimations().length` y el evento `transitionend`.
2. **Sin leer el estado inicial.** Repetilo con otra caja **sin** leer el estilo antes; anotá cuántas animaciones hay y por qué.
3. **Con `style`.** Animá la opacidad de un aviso con `style.transition` y un cambio de valor.
4. **`animate()`.** Hacé que el aviso aparezca con `animate` (opacidad de `0` a `1`) y mostrá `playState` y cuando termina (`finished`).
5. **Controlar.** Creá una animación larga y probá `pause`, `play`, `finish` y `cancel`; anotá el `playState` y el aspecto del elemento en cada caso.
6. **`requestAnimationFrame`.** Mové una caja 200 píxeles calculando el avance con la marca de tiempo, y detenela al llegar.
7. **Cerrar con animación.** Agregá un botón «Cerrar» que anime la salida del aviso y lo elimine **cuando termine** la animación (`finished`).
8. **Movimiento reducido.** Leé `prefers-reduced-motion` y acortá las animaciones si es `true`.
9. **Explicá con tus palabras** cuándo usarías cada una de las cuatro formas de animar.

## 📦 Entregable

El archivo `.html` con el código y el CSS, y una nota con: lo que pasó en el paso 2, el `playState` y el aspecto del paso 5, la explicación de por qué se espera `finished` en el paso 7 y la explicación del paso 9.

## 📋 Criterios de evaluación

- ✔️ Las animaciones funcionan y se comprueban con eventos y estados (`getAnimations`, `finished`, `transitionend`).
- ✔️ La nota explica por qué una transición necesita el estado inicial.
- ✔️ El aviso se elimina solo cuando termina la animación de salida.
- ✔️ Se respeta `prefers-reduced-motion`.
- ✔️ La explicación del paso 9 compara las cuatro formas con ejemplos propios.
