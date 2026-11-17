# 🛠️ Taller 01 — El carrito de Aroma

## 🎯 Objetivo

Aplicar lo aprendido en la sesión 1: tomar decisiones con `if`, `else if`, `else` y `switch` (RA-1, RA-2), repetir con `for` y `while` evitando el bucle infinito (RA-3) y controlar el recorrido con `break` y `continue` (RA-4).

## 🌍 Contexto

Trabajás solo o en pareja con **una página propia** (puede ser una tienda, un taller o un comercio imaginario) y un archivo `.js`. Usás VS Code (o un editor en línea) y el navegador con su consola. No hace falta instalar nada más. **Mantené la consola abierta (F12) y, mientras practicás, agregá un seguro (un contador con tope) a cada bucle.**

## 🪜 Pasos

1. **Los datos.** Declará con `const` el precio de un producto, el monto desde el que el envío es gratis y los tramos de descuento (por ejemplo, 0%, 5% y 10%).
2. **El descuento.** Con `if`/`else if`/`else`, calculá el porcentaje de descuento de un total que vos elijas y mostrá una frase completa.
3. **El envío.** Mostrá si el pedido tiene envío gratis o cuánto falta para lograrlo.
4. **Un `switch`.** Con un código de categoría, mostrá el pasillo o la sección del producto, con `default`.
5. **El operador condicional.** Mostrá el estado del producto (disponible o agotado) con `? :`.
6. **El carrito.** Con un `for`, recorré las cantidades de 1 a 10 y mostrá el total de cada una.
7. **Con `continue`.** Salteá las cantidades que no te interesen (por ejemplo, las impares).
8. **Con `break`.** Cortá el recorrido en la primera cantidad con envío gratis y mostrá cuál es.
9. **Un `while` con tope.** Hacé una cuenta regresiva de la oferta con `while`, con un contador de seguridad.
10. **Probá con tres totales distintos** y anotá qué rama se ejecutó en cada caso.
11. **Revisá** que todos los bloques lleven llaves, que las comparaciones usen `===` y que ningún bucle pueda ser infinito.

## 📦 Entregable

La carpeta del proyecto (página y archivo `.js`) y una nota con: la salida de la consola de los tres totales del paso 10, la rama que se ejecutó en cada uno y una frase que explique para qué sirve el `break` y para qué el `continue` en tu programa.

## 📋 Criterios de evaluación

- ✔️ Hay decisiones con `if`/`else if`/`else`, un `switch` con `default` y un operador condicional.
- ✔️ Hay un `for` y un `while` bien formados, sin bucles infinitos.
- ✔️ `break` y `continue` se usan donde corresponde.
- ✔️ Los resultados son correctos con los tres totales de prueba.
- ✔️ Las comparaciones usan `===` y todos los bloques tienen llaves.
- ✔️ La nota explica la diferencia entre `break` y `continue`.
