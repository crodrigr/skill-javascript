# 🛠️ Taller 02 — El pedido con async/await

## 🎯 Objetivo

Aplicar lo aprendido en la sesión 2: escribir funciones `async` con `await` (RA-6), atender errores con `try`/`catch`/`finally` y combinar con `.then()` (RA-7), usar *top-level await* (RA-8) y procesar varios pedidos en paralelo (RA-9).

## 🌍 Contexto

Partís de las promesas del Taller 01. Ahora escribís el flujo del pedido con `async`/`await`, procesás varios pedidos a la vez y probás el *top-level await* en un módulo. Para el módulo necesitás **servir la carpeta con un servidor local**: en VS Code, instalá la extensión **Live Server** y abrí la página con «Open with Live Server».

## 🪜 Pasos

1. **`procesarPedido`.** Escribí una función `async` que muestre `📥 Pedido N recibido`, espere con `await` los cuatro pasos y muestre `🏁 Pedido N terminado`.
2. **Errores.** Envolvé los `await` en `try`/`catch`/`finally`: en `catch`, mostrá `❌ El pedido N se detuvo: MOTIVO`; en `finally`, `Fin del pedido N`. Probá con la tarjeta rechazada y con un pedido vacío.
3. **Con `.then()`.** Llamá a `procesarPedido` y usá `.then()` sobre su resultado para mostrar un mensaje cuando termina.
4. **Secuencia o paralelo.** Medí con `Date.now()` cuánto tardan tres consultas esperadas **una tras otra** y con `Promise.all`; anotá la diferencia.
5. **Varios pedidos.** Procesá una lista de cuatro pedidos **a la vez** (uno con la tarjeta rechazada y uno vacío), con `Promise.allSettled`, y mostrá un informe con `🏁`/`❌` por pedido y un resumen.
6. **`for…of` y `forEach`.** Procesá los pedidos de uno en uno con `for…of` y `await`, y probá `forEach` con una función `async`. Anotá qué diferencia viste en el orden.
7. **Un botón.** Agregá un botón «Procesar» que, con `addEventListener`, inicie el flujo cada vez que se pulsa.
8. **Top-level await.** En una página aparte, con `<script type="module">`, esperá una promesa con `await` **sin** función. Abrila con Live Server. Probá el mismo código en un `<script>` clásico y anotá el error.

## 📦 Entregable

El archivo `.html` con el código, la página del módulo y una nota con: la salida de los dos casos de error del paso 2, los tiempos del paso 4, el informe del paso 5, la diferencia del paso 6 y el error del paso 8 (con su traducción).

## 📋 Criterios de evaluación

- ✔️ `procesarPedido` espera los pasos en orden y atiende los errores con `try`/`catch`/`finally`.
- ✔️ La nota compara los tiempos de secuencia y paralelo y explica por qué difieren.
- ✔️ El informe del paso 5 muestra cada pedido, aunque alguno falle, y no usa `Promise.all`.
- ✔️ La nota explica por qué `forEach` no espera.
- ✔️ El módulo funciona con un servidor local y la nota explica el error del script clásico.
