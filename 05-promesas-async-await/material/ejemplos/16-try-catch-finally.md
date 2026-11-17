# 📘 Ejemplo 16 — Atender errores con try, catch y finally

> 🎓 **Resultados de aprendizaje:** RA-7
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, **en el orden en que salió**, con el archivo y la línea de cada error. El orden se contrastó con Node cuando la página no usa el navegador ni tiene errores a propósito (sin diferencias). Los ejemplos **no imprimen objetos `Promise`**: la consola real muestra su estado, pero aquí se observa con `.then()`, `.catch()` y `.finally()`. Los **tiempos son aproximados**: lo que importa es el orden. Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Con `.then()` los errores se atendían con `.catch()`. Con `await`, el rechazo de una promesa se comporta como una **excepción**: se atiende con `try`/`catch`, igual que los errores del código síncrono.

## 💻 Código

El archivo [`16-try-catch-finally.html`](../recursos/ejemplos/16-try-catch-finally.html) tiene este código dentro de `<script>`:

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

async function intentar(pedido) {
  try {
    const p = await cobrar(pedido);
    console.log('💳 Cobrado $' + p.total);
  } catch (motivo) {
    console.log('❌ ' + motivo);
  } finally {
    console.log('🔚 Fin del intento del pedido ' + pedido.numero);
  }
}

intentar({ numero: 101, total: 6.7 });
intentar({ numero: 102, total: 6.7, tarjetaValida: false });
```

## 🔍 Análisis paso a paso

1. **`try`:** el bloque donde se espera con `await`. Si la promesa se cumple, `await` devuelve su valor.
2. **`catch (motivo)`:** si la promesa se rechaza, `await` lanza el motivo y el programa salta al `catch`.
3. **`finally`:** se ejecuta siempre, haya error o no.
4. **Es la misma lógica del Ejemplo 05,** escrita de arriba hacia abajo: `then` ↔ el código después del `await`, `catch` ↔ `catch`, `finally` ↔ `finally`.
5. **El orden de salida** es el mismo que en el Ejemplo 05: se completa el pedido 101 y después el 102.
6. **Un error no atendido en una función `async`** rechaza la promesa que devuelve; si nadie la atiende, aparece `Uncaught (in promise)`.

## ✅ Resultado esperado

Al abrir `16-try-catch-finally.html`, la consola muestra:

```text
💳 Cobrado $6.7
🔚 Fin del intento del pedido 101
❌ Tarjeta rechazada
🔚 Fin del intento del pedido 102
```

- Con `await`, los rechazos se atienden con `try`/`catch`/`finally`.
- Es el equivalente de `.then()`, `.catch()` y `.finally()`.
