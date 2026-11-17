# 🟡 Intermedio 01 — then, catch, finally y el orden

> 🟡 **Nivel:** Intermedio · 🎓 **Resultados de aprendizaje:** RA-3, RA-5 · 🗓️ **Sesión 1**

## 🧱 Estado inicial

Abrí [`intermedio-01.html`](../recursos/practica/intermedio-01.html) y su archivo [`js/intermedio-01.js`](../recursos/practica/js/intermedio-01.js), de la carpeta `practica`. El archivo trae la función `cobrar`, que devuelve una promesa:

```js
function cobrar(pedido) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (pedido.tarjetaValida === false) {
        reject('Tarjeta rechazada');
        return;
      }
      resolve(pedido);
    }, 500);
  });
}

// Escribí acá los pasos del ejercicio
```

## 🛠️ Proceso esperado

1. Mostrá `Inicio`.
2. Con `setTimeout` de **0 ms**, mostrá `Temporizador de 0 ms`.
3. Con `Promise.resolve('ya cumplida')` y `.then()`, mostrá `Microtarea: ya cumplida`.
4. Escribí `intentar(pedido)`: cobra el pedido y muestra `💳 Cobrado $TOTAL` si sale bien o `❌ MOTIVO` si falla; en los dos casos, al final, `🔚 Fin del pedido N`. Llamala con el pedido `101` (total `6.7`) y con el `102` (total `6.7`, `tarjetaValida: false`).
5. Al final, mostrá `Fin del código síncrono`.
6. **Antes de ejecutar**, anotá el orden de las ocho líneas de salida y comprobalo.

**Respondé:** ¿Por qué `Microtarea: ya cumplida` sale antes que `Temporizador de 0 ms`, si el temporizador se escribió primero?

## ✅ Resultado esperado

La consola muestra (en este orden):

```text
Inicio
Fin del código síncrono
Microtarea: ya cumplida
Temporizador de 0 ms
💳 Cobrado $6.7
🔚 Fin del pedido 101
❌ Tarjeta rechazada
🔚 Fin del pedido 102
```

## 🚧 Restricciones

- 🚫 No cambies `cobrar`.
- 🚫 No uses `async`/`await`: es de la sesión 2.

## 🎓 Resultados de aprendizaje

- RA-3, RA-5
