# 🎞️ Animar elementos

Curso **JavaScript** · Clase 07 · **Sesión 3**

---

## 🎯 Objetivos de la sesión

- 🔹 Animar con una clase y una transición de CSS.
- 🔹 Animar con `Element.animate()` y `requestAnimationFrame`.
- 🔹 Esperar el final antes de eliminar y respetar `prefers-reduced-motion`.

---

## 🎞️ Cuatro formas de animar

![Cuatro formas de animar, de menos a más control manual. Uno: una clase con una transición de CSS, que avisa con transitionend. Dos: la propiedad style con una transición, que también avisa con transitionend. Tres: requestAnimationFrame, donde el código mueve el elemento en cada cuadro y se detiene al no pedir otro cuadro. Cuatro: Element.animate, que recibe cuadros clave y opciones y devuelve un Animation con la promesa finished.](../imagenes/formas-de-animar.svg)

---

## 🧩 Transición con una clase

- El CSS define la propiedad, la duración y el estado final.
- JavaScript solo agrega la clase.
- Avisan el final: `transitionend` y `finished`.

---

## 🤔 ¿Por qué no se anima?

- Una transición necesita que el navegador **vea el estado inicial**.
- Solución: leer `getComputedStyle(elemento).propiedad` antes del cambio.
- Prueba rápida: `elemento.getAnimations().length`.

---

## 🎛️ Transición con `style`

- `style.transition = 'opacity 300ms linear'` y después cambiar el valor.
- Para aspectos fijos, mejor **una clase**.

---

## ✨ `Element.animate()`

```js
aviso.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 300, fill: 'forwards' });
```

- Devuelve un `Animation`: `playState` y `finished`.

---

## ⏯️ Controlar la animación

- `pause()`, `play()`, `finish()`, `cancel()`.
- `cancel()` devuelve el elemento a su aspecto original.

---

## 🔁 `requestAnimationFrame`

- Una función por **cada cuadro**; hay que volver a pedirla.
- Calcular con la **marca de tiempo**; `cancelAnimationFrame(id)`.

---

## 🌀 `@keyframes` de CSS

- Una clase con `animation` la activa; `animationend` avisa el final.
- No necesita estado inicial previo.

---

## 🛡️ `prefers-reduced-motion`

- `matchMedia('(prefers-reduced-motion: reduce)').matches`.
- Si es `true`: evitar o acortar las animaciones.

---

## ⏳ Esperar el final para eliminar

- Animar la salida → esperar `finished` → `remove()`.
- Si se elimina antes, la animación **no se ve**.

---

## 🚀 Proyecto de cierre y actividad

- [El carrito animado de Aroma](../../actividades/proyectos/proyecto-carrito-aroma.md).
- 🟢 [Básico 03](../ejercicios/basico-03.md), 🟡 [Intermedio 04](../ejercicios/intermedio-04.md), 🔴 [Desafío 02](../ejercicios/desafio-02.md).
- 🛠️ [Taller 03 — Animar la tarjeta](../../actividades/talleres/taller-03.md).

---

## ✅ Resumen

- Lo más simple que alcance: transición con clase; después `animate()`.
- Animar `transform` y `opacity`; esperar `finished`; respetar el movimiento reducido.
