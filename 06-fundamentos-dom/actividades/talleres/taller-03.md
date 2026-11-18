# 🛠️ Taller 03 — Contenido seguro

## 🎯 Objetivo

Aplicar lo aprendido en la sesión 3: leer y cambiar el contenido (RA-7) y explicar y evitar el riesgo de `innerHTML` (RA-8).

## 🌍 Contexto

Aroma quiere un **libro de visitas** donde se muestren los comentarios de la gente. Vas a comparar tres formas de mostrar un comentario y a elegir la segura. Para no usar código dañino, el «código» de las pruebas solo cambia una marca (`window.hackeado = true`).

## 🪜 Pasos

1. **Contenido básico.** En un párrafo con un `<strong>`, mostrá `nodeName`, `textContent`, `innerHTML` y `outerHTML`; anotá en qué se diferencian.
2. **Asignar.** Cambiá el texto del `<strong>` con `textContent`; reemplazá el contenido de una lista con `innerHTML`; reemplazá un título con `outerHTML` y anotá qué pasa con la variable vieja.
3. **`outerText`.** Probalo con un elemento que tenga un `<span hidden>` y compará con `textContent`.
4. **El comentario.** Guardá en una variable un comentario con negrita y una imagen con `onerror` que ponga `window.hackeado = true`.
5. **Tres formas.** Mostralo en tres `<div>`: con `textContent`, con `innerHTML` y con `setHTML()` (con detección y camino alternativo). Después de 300 ms, mostrá si se ejecutó el código en cada caso.
6. **Un libro de visitas seguro.** Escribí una función `mostrarComentario(texto)` que muestre el comentario en el `<div>` del libro usando **solo** `textContent`, y probala con el comentario del paso 4.
7. **Compatibilidad.** Buscá `Element.setHTML` en MDN y anotá la compatibilidad que figura hoy.
8. **Explicá con tus palabras** cuándo usarías cada una de las cuatro propiedades de contenido.

## 📦 Entregable

El archivo `.html` con el código y una nota con: las diferencias del paso 1, lo que pasó con la variable vieja (paso 2), el resultado del paso 5 en los tres casos, la compatibilidad del paso 7 con la fecha de consulta y la explicación del paso 8.

## 📋 Criterios de evaluación

- ✔️ Se usan las cuatro propiedades de contenido y la nota distingue lectura de asignación.
- ✔️ La prueba de seguridad muestra que `innerHTML` ejecuta la marca y `textContent` no.
- ✔️ `setHTML()` se usa con detección y un camino alternativo que no usa `innerHTML`.
- ✔️ `mostrarComentario` solo usa `textContent`.
- ✔️ La nota registra la compatibilidad con su fecha y explica cuándo usar cada propiedad.
