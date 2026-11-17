# 🛠️ Taller 03 — El inventario de Aroma

## 🎯 Objetivo

Aplicar lo aprendido en la sesión 3 e integrar las anteriores: manipular, buscar y ordenar arreglos (RA-8, RA-9), usar `Set`, `Map` y `FormData` (RA-10, RA-11), elegir la colección adecuada (RA-7) y combinar objetos y colecciones en un programa (RA-12).

## 🌍 Contexto

Partís de los productos de los talleres anteriores. Armás el **inventario** de tu comercio: un arreglo de productos (objetos), las ventas del día y una página con un formulario para registrar un pedido. Trabajás con la consola abierta (F12).

## 🪜 Pasos

1. **El inventario.** Declará un arreglo con al menos cinco productos (objetos con nombre, precio y stock).
2. **Manipular.** Agregá un producto al final, quitá otro y mostrá el arreglo; insertá uno en el medio con `splice`.
3. **Recorrer.** Mostrá cada producto con `for...of` y con `forEach`.
4. **Buscar.** Con `find`, `findIndex` y `filter`, mostrá un producto por nombre, la posición del primero sin stock y los que tienen stock.
5. **Ordenar.** Mostrá los nombres ordenados por precio de menor a mayor, sin modificar el arreglo original.
6. **Ventas.** Declará un arreglo con las ventas del día (con repetidos). Con un `Set`, mostrá los productos distintos vendidos; con un `Map`, el conteo por producto.
7. **El resumen.** Con desestructuración y los datos del `Map`, mostrá cuánto se recaudó por producto y el total con dos decimales.
8. **El formulario.** En la página, agregá un formulario con tres campos (uno sin `name`). Con `FormData` y `Object.fromEntries`, convertilo en un objeto y calculá el total del pedido.
9. **Elegí.** Para tres problemas de tu comercio, anotá qué colección usarías y por qué.
10. **Revisá** que ningún ordenamiento modifique el arreglo original y que no uses `map` ni `reduce`.

## 📦 Entregable

La carpeta del proyecto (página y archivo `.js`) y una nota con: la salida de los pasos 4 y 5, el conteo del paso 6, el objeto del paso 8 y la elección de colección del paso 9 con su justificación.

## 📋 Criterios de evaluación

- ✔️ El inventario es un arreglo de objetos y se manipula, recorre, busca y ordena correctamente.
- ✔️ El orden no modifica el original.
- ✔️ Se usan un `Set` y un `Map` con sentido.
- ✔️ `FormData` produce un objeto y los valores se convierten antes de calcular.
- ✔️ La nota justifica la elección de colección en tres casos.
