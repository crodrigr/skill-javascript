# 🛠️ Taller 01 — Encontrar el menú

## 🎯 Objetivo

Aplicar lo aprendido en la sesión 1: explicar el DOM (RA-1), encontrar elementos con los cinco métodos (RA-2) y distinguir lo que devuelve cada uno (RA-3).

## 🌍 Contexto

Aroma tiene una página con su menú: un título, una lista de productos y un pie de página. Vas a escribir un programa que **encuentre** esos elementos de varias formas y muestre lo que encontró en la consola (F12). Trabajás en un archivo `.html` con el `<script>` **al final del `<body>`**.

## 🪜 Pasos

1. **La página.** Escribí un HTML con un `<h1 id="titulo">`, una `<ul id="menu">` con cinco `<li class="producto">` (uno también con la clase `destacado`) y un `<p id="pie">`.
2. **Por `id`.** Con `getElementById`, mostrá el texto del título y del pie; buscá un `id` que no exista y mostrá el resultado.
3. **Por clase y etiqueta.** Con `getElementsByClassName` y `getElementsByTagName`, mostrá cuántos productos hay y recorré la colección con `for…of`.
4. **Con selectores.** Con `querySelector`, mostrá el primer producto, el destacado y el último `<li>`; con `querySelectorAll`, recorré todos con `forEach`.
5. **Viva y estática.** Quitale la clase `producto` a un `<li>` con `classList.remove` y mostrá las cantidades de las dos colecciones antes y después.
6. **Dos errores.** En páginas aparte, provocá (a) un `forEach` sobre una `HTMLCollection` y (b) un selector inválido; anotá los mensajes.
7. **El script en el `<head>`.** Movelo al `<head>` y anotá qué pasa y por qué.
8. **Explicá con tus palabras** qué es el DOM y en qué se diferencia del archivo HTML.

## 📦 Entregable

El archivo `.html` con el código y una nota con: lo que devolvió cada método (paso 2 a 4), las cantidades del paso 5, los dos errores del paso 6 con su traducción, lo que pasó en el paso 7 y la explicación del paso 8.

## 📋 Criterios de evaluación

- ✔️ Los cinco métodos encuentran los elementos esperados y se usa el adecuado en cada caso.
- ✔️ La nota explica la diferencia entre colección viva y estática con las cantidades medidas.
- ✔️ Los dos errores están anotados con su traducción.
- ✔️ La nota explica por qué el script va al final del `<body>`.
- ✔️ La explicación del DOM es clara y distingue DOM de HTML.
