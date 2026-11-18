# 🛠️ Taller 01 — Construir el menú

## 🎯 Objetivo

Aplicar lo aprendido en la sesión 1: crear elementos y nodos de texto (RA-1), insertar, mover, copiar, reemplazar y eliminar nodos (RA-2) y configurarlos con sus propiedades y `style` (RA-3).

## 🌍 Contexto

Aroma tiene los datos de su menú en un arreglo y quiere mostrarlos en la página **sin escribir el HTML a mano**. Vas a construir el menú con JavaScript. Trabajás en un archivo `.html` con el `<script>` **al final del `<body>`** y la consola abierta (F12).

## 🪜 Pasos

1. **Los datos.** Escribí un arreglo con cinco productos (`nombre`, `precio`, `stock`) y una página con un `<h1>` y una `<ul id="menu">` vacía.
2. **Crear.** Con un `for…of`, creá un `<li>` por producto con `createElement`, asignale el texto `NOMBRE — $PRECIO` con `textContent` y agregalo al menú con `append`. Mostrá en la consola `parentNode` e `isConnected` antes y después de insertar el primero.
3. **Configurar.** A cada `<li>` agregale una clase, el precio en `dataset` y, si el stock es `0`, el estilo `color: gray` con `style`.
4. **Insertar en otros lugares.** Agregá un aviso al principio con `prepend`, otro antes del tercer producto con `before` y otro después con `after`.
5. **Mover.** Movéle el segundo producto al final con `append` y anotá qué pasó con la cantidad de hijos.
6. **Clonar.** Hacé un clon profundo de un producto, cambiale el `id` y agregalo; anotá qué pasa con un clic registrado en el original.
7. **Reemplazar y eliminar.** Reemplazá un producto con `replaceWith` y eliminá otro con `remove`; mostrá el `parentNode` del eliminado.
8. **Estilos.** Leé el color de un producto con `style` y con `getComputedStyle` (usá una clase de CSS que le dé color) y anotá la diferencia.
9. **Texto seguro.** Probá agregar un nombre con etiquetas (`Té <b>verde</b>`) con `textContent` y con `innerHTML`; anotá la diferencia.

## 📦 Entregable

El archivo `.html` con el código y una nota con: los valores del paso 2, lo que pasó en los pasos 5 y 6, el `parentNode` del paso 7, la diferencia del paso 8 y la del paso 9.

## 📋 Criterios de evaluación

- ✔️ El menú se construye con nodos (sin `innerHTML`) y los productos aparecen en el orden previsto.
- ✔️ Las propiedades (`className`, `dataset`, `style`) se asignan antes de insertar.
- ✔️ La nota explica que insertar un nodo existente lo mueve y que el clon no copia los controladores.
- ✔️ Se distingue estilo en línea de estilo calculado con un ejemplo propio.
- ✔️ La nota explica por qué `textContent` es seguro con textos de otra persona.
