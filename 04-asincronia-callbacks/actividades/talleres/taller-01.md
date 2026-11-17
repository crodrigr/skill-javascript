# 🛠️ Taller 01 — El pedido que no espera

## 🎯 Objetivo

Aplicar lo aprendido en la sesión 1: distinguir lo síncrono de lo asíncrono (RA-1), reconocer cuándo un programa bloquea (RA-2 y RA-3) y predecir el orden de ejecución con temporizadores (RA-4).

## 🌍 Contexto

En Aroma entran tres pedidos al mismo tiempo. Vas a simular su atención con un programa que usa temporizadores y a comprobar que **el orden de las salidas** es el que predecís. Trabajás en una página HTML con un `<script>` y la consola abierta (F12).

## 🪜 Pasos

1. **Tres pedidos.** Escribí una función `tomarPedido(producto, milisegundos)` que muestre `📥 Pedido de PRODUCTO` y, pasado el tiempo, `✅ Listo: PRODUCTO`.
2. **Sin bloquear.** Llamala con `'Café'` (900 ms), `'Té'` (400 ms) y `'Brownie'` (600 ms), y mostrá al final `🧑‍🍳 Seguimos atendiendo`.
3. **Predecí.** Antes de ejecutar, escribí en un papel el orden de las **siete** líneas de salida y explicá cuál fue tu razonamiento.
4. **Comprobá.** Ejecutá y compará. Si algo no coincide, anotá por qué.
5. **Bloqueá a propósito.** Agregá una versión `tomarPedidoBloqueando(producto)` que use un bucle largo en lugar de un temporizador y llamala dos veces. Anotá qué cambia en el orden.
6. **El temporizador de 0 ms.** Agregá un `setTimeout` de 0 ms que muestre `Aviso inmediato` en medio del código síncrono. Anotá en qué posición sale y por qué.
7. **Explicá con tus palabras** qué es un lenguaje bloqueante y qué es uno no bloqueante, con un ejemplo de la vida diaria.

## 📦 Entregable

El archivo `.html` con el código y una nota con: el orden que predijiste y el que se obtuvo (paso 3 y 4), lo que cambió al bloquear (paso 5), la posición del aviso de 0 ms con su explicación (paso 6) y la explicación del paso 7.

## 📋 Criterios de evaluación

- ✔️ El programa no bloquea y el orden de las salidas coincide con la predicción (o la nota explica la diferencia).
- ✔️ La versión bloqueante muestra que un pedido espera al anterior.
- ✔️ El aviso de 0 ms está explicado: sale después de todo el código síncrono.
- ✔️ La explicación de bloqueante y no bloqueante es clara y usa un ejemplo propio.
