# 📘 Ejemplo 18 — El pedido con async/await

> 🎓 **Resultados de aprendizaje:** RA-9
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, **en el orden en que salió**, con el archivo y la línea de cada error. El orden se contrastó con Node cuando la página no usa el navegador ni tiene errores a propósito (sin diferencias). Los ejemplos **no imprimen objetos `Promise`**: la consola real muestra su estado, pero aquí se observa con `.then()`, `.catch()` y `.finally()`. Los **tiempos son aproximados**: lo que importa es el orden. Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Es el flujo de la Clase 04 (y del Ejemplo 07) **por tercera vez**: validar → cobrar → preparar → entregar. Con `async`/`await` se lee **como si fuera síncrono**.

## 💻 Código

El archivo [`18-pedido-con-async-await.html`](../recursos/ejemplos/18-pedido-con-async-await.html) tiene este código dentro de `<script>`:

```js
function validar(pedido) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (pedido.items.length === 0) {
        reject('Pedido vacío');
        return;
      }
      console.log('✅ Validado');
      resolve(pedido);
    }, 300);
  });
}

function cobrar(pedido) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (pedido.tarjetaValida === false) {
        reject('Tarjeta rechazada');
        return;
      }
      console.log('💳 Cobrado $' + pedido.total);
      resolve(pedido);
    }, 500);
  });
}

function preparar(pedido) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('☕ Preparado');
      resolve(pedido);
    }, 800);
  });
}

function entregar(pedido) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('🛵 Entregado');
      resolve(pedido);
    }, 200);
  });
}

async function procesarPedido(pedido) {
  console.log('📥 Pedido ' + pedido.numero + ' recibido');
  try {
    await validar(pedido);
    await cobrar(pedido);
    await preparar(pedido);
    await entregar(pedido);
    console.log('🏁 Pedido ' + pedido.numero + ' terminado');
  } catch (motivo) {
    console.log('❌ El pedido ' + pedido.numero + ' se detuvo: ' + motivo);
  }
}

procesarPedido({ numero: 101, cliente: 'Lucía', items: ['Café', 'Medialuna'], total: 6.7 });
```

La segunda página, [`18-pedido-con-async-await-fallo.html`](../recursos/ejemplos/18-pedido-con-async-await-fallo.html) (el pedido 102 con la tarjeta rechazada), tiene el mismo código; solo cambia el pedido:

```js
const pedido = { numero: 102, cliente: 'Marcos', items: ['Té'], total: 3.2, tarjetaValida: false };
```

## 🔍 Análisis paso a paso

1. **Cada paso se espera con `await`** y la línea siguiente no se ejecuta hasta que la promesa se cumple: el orden de escritura es el orden de ejecución.
2. **Sin pirámide y sin `.then()`:** el código se lee de arriba hacia abajo.
3. **Un solo `try`/`catch`** atiende el error de **cualquier** paso: en la segunda página (pedido 102, tarjeta rechazada) los pasos siguientes no se ejecutan.
4. **Las tres formas del mismo flujo:** callbacks anidados (Clase 04, Ejemplo 19), cadena de `.then()` (Ejemplo 07) y `async`/`await` (este ejemplo). El resultado es idéntico.
5. **La función `procesarPedido` no bloquea:** su llamada termina enseguida y el pedido se procesa mientras el programa sigue.

## ✅ Resultado esperado

Al abrir `18-pedido-con-async-await.html`, la consola muestra:

```text
📥 Pedido 101 recibido
✅ Validado
💳 Cobrado $6.7
☕ Preparado
🛵 Entregado
🏁 Pedido 101 terminado
```

Al abrir `18-pedido-con-async-await-fallo.html`, la consola muestra:

```text
📥 Pedido 102 recibido
✅ Validado
❌ El pedido 102 se detuvo: Tarjeta rechazada
```

- Con `async`/`await`, el flujo asíncrono se escribe en orden, con un `try`/`catch`.
- Callbacks, promesas y `async`/`await` resuelven el mismo problema.
