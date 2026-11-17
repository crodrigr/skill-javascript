# 🛠️ Taller 02 — Del pedido a la entrega

## 🎯 Objetivo

Aplicar lo aprendido en la sesión 2: escribir y usar callbacks (RA-5), programar tareas con temporizadores y eventos (RA-6), recibir resultados y errores con el patrón «error primero» (RA-7) y encadenar los pasos de un pedido con funciones con nombre (RA-8 y RA-9).

## 🌍 Contexto

Partís del programa del Taller 01. Ahora cada pedido de Aroma pasa por cuatro pasos —**validar, cobrar, preparar y entregar**— y cada uno depende del anterior. Trabajás en la misma página, con un botón y la consola abierta (F12).

## 🪜 Pasos

1. **Un paso con callback.** Escribí `validar(pedido, siguiente)`: espera 300 ms, muestra `✅ Validado` y llama a `siguiente(null, pedido)`. Si el pedido no tiene productos, llama a `siguiente('Pedido vacío')`.
2. **Los demás pasos.** Escribí `cobrar` (500 ms; falla con `Tarjeta rechazada` si `tarjetaValida` es `false`), `preparar` (800 ms) y `entregar` (200 ms), con el mismo formato.
3. **Encadená con anidamiento.** Conectá los cuatro pasos anidando callbacks. Ejecutá y anotá cuántos niveles de sangría quedaron.
4. **Reorganizá.** Reescribí el flujo con **funciones con nombre** (`alValidar`, `alCobrar`, `alPreparar`, `alEntregar` y `fallar`), sin callbacks anidados. Comprobá que la salida es la misma.
5. **Errores.** Probá un pedido con la tarjeta rechazada y uno vacío; comprobá que los pasos siguientes **no** se ejecutan y que se muestra el error una sola vez.
6. **Una cuenta regresiva.** Con `setInterval`, mostrá `Faltan 3`, `Faltan 2`, `Faltan 1` mientras se prepara el pedido y detené el intervalo cuando termine.
7. **Un botón.** Agregá un botón «Pedir» que, con `addEventListener`, inicie el flujo cada vez que se pulsa.
8. **Cancelá.** Agregá un aviso con `setTimeout` a los 2000 ms y cancelalo con `clearTimeout` si el pedido termina antes.

## 📦 Entregable

El archivo `.html` con el código y una nota con: los niveles de sangría del paso 3, la comparación entre el paso 3 y el paso 4 (¿qué se lee mejor y por qué?), la salida de los dos casos de error del paso 5 y una frase que explique por qué el resultado de una tarea asíncrona llega al callback y no con `return`.

## 📋 Criterios de evaluación

- ✔️ Los cuatro pasos se ejecutan en orden y la salida es la esperada.
- ✔️ La versión con funciones con nombre no tiene callbacks anidados y da el mismo resultado.
- ✔️ Los errores se atienden con «error primero» y el flujo se detiene en el primer fallo.
- ✔️ La cuenta regresiva y el botón funcionan; el intervalo se detiene solo.
- ✔️ La nota explica con claridad por qué el resultado llega al callback.
