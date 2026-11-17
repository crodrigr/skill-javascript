# 📘 Ejemplo 05 — then, catch y finally

> 🎓 **Resultados de aprendizaje:** RA-3
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, **en el orden en que salió**, con el archivo y la línea de cada error. El orden se contrastó con Node cuando la página no usa el navegador ni tiene errores a propósito (sin diferencias). Los ejemplos **no imprimen objetos `Promise`**: la consola real muestra su estado, pero aquí se observa con `.then()`, `.catch()` y `.finally()`. Los **tiempos son aproximados**: lo que importa es el orden. Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Diego cobra dos pedidos: uno sale bien y el otro tiene la tarjeta rechazada. Quiere mostrar el resultado de cada uno y, pase lo que pase, avisar que el intento terminó.

## 💻 Código

El archivo [`05-then-catch-finally.html`](../recursos/ejemplos/05-then-catch-finally.html) tiene este código dentro de `<script>`:

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

function intentar(pedido) {
  cobrar(pedido)
    .then((p) => console.log('💳 Cobrado $' + p.total))
    .catch((motivo) => console.log('❌ ' + motivo))
    .finally(() => console.log('🔚 Fin del intento del pedido ' + pedido.numero));
}

intentar({ numero: 101, total: 6.7 });
intentar({ numero: 102, total: 6.7, tarjetaValida: false });
```

## 🔍 Análisis paso a paso

1. **`.then(alCumplir)`** recibe el valor cuando la promesa se cumple.
2. **`.catch(alRechazar)`** recibe el motivo cuando se rechaza.
3. **`.finally(alTerminar)`** se ejecuta **siempre**, con éxito o con error, y no recibe argumentos: sirve para cerrar o limpiar.
4. **El orden de salida:** primero se resuelve por completo el pedido 101 (`then` y `finally`) y después el 102 (`catch` y `finally`), porque cada temporizador es una tarea distinta.
5. **Cada método devuelve una promesa nueva,** por eso se pueden escribir uno debajo del otro (encadenar).

## ✅ Resultado esperado

Al abrir `05-then-catch-finally.html`, la consola muestra:

```text
💳 Cobrado $6.7
🔚 Fin del intento del pedido 101
❌ Tarjeta rechazada
🔚 Fin del intento del pedido 102
```

- `.then()` atiende el éxito, `.catch()` el error y `.finally()` corre siempre.
- Los tres se pueden encadenar.
