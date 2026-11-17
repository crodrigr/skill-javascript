# 📘 Ejemplo 22 — Varios pedidos a la vez

> 🎓 **Resultados de aprendizaje:** RA-7, RA-9
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, **en el orden en que salió**, con el archivo y la línea de cada error. El orden se contrastó con Node cuando la página no usa el navegador ni tiene errores a propósito (sin diferencias). Los ejemplos **no imprimen objetos `Promise`**: la consola real muestra su estado, pero aquí se observa con `.then()`, `.catch()` y `.finally()`. Los **tiempos son aproximados**: lo que importa es el orden. Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Cierre del módulo: Aroma procesa **tres pedidos al mismo tiempo**. Uno tiene la tarjeta rechazada. El informe final debe mostrar el resultado de cada pedido, aunque alguno falle.

## 💻 Código

El archivo [`22-pedidos-completo.html`](../recursos/ejemplos/22-pedidos-completo.html) tiene este código dentro de `<script>`:

```js
function validar(pedido) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (pedido.items.length === 0) {
        reject('Pedido vacío');
        return;
      }
      console.log('✅ Validado (' + pedido.numero + ')');
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
      console.log('💳 Cobrado (' + pedido.numero + ')');
      resolve(pedido);
    }, 500);
  });
}

function preparar(pedido) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('☕ Preparado (' + pedido.numero + ')');
      resolve(pedido);
    }, 800);
  });
}

async function procesarPedido(pedido) {
  try {
    await validar(pedido);
    await cobrar(pedido);
    await preparar(pedido);
    return 'Pedido ' + pedido.numero + ' listo para ' + pedido.cliente;
  } catch (motivo) {
    throw new Error('Pedido ' + pedido.numero + ': ' + motivo);
  }
}

async function main() {
  const pedidos = [
    { numero: 101, cliente: 'Lucía', items: ['Café'], total: 4.5 },
    { numero: 102, cliente: 'Marcos', items: ['Té'], total: 3.2, tarjetaValida: false },
    { numero: 103, cliente: 'Sofía', items: ['Brownie', 'Té'], total: 6.7 }
  ];

  const promesas = [];
  for (const pedido of pedidos) {
    promesas.push(procesarPedido(pedido));
  }

  const resultados = await Promise.allSettled(promesas);

  console.log('--- Informe ---');
  for (const r of resultados) {
    if (r.status === 'fulfilled') {
      console.log('🏁 ' + r.value);
    } else {
      console.log('❌ ' + r.reason.message);
    }
  }
}

main();
```

## 🔍 Análisis paso a paso

1. **`procesarPedido` es `async`:** usa `await` por dentro, con un `try`/`catch` que **relanza** el error con más contexto (`throw new Error(…)`).
2. **Los tres pedidos se procesan a la vez:** se lanzan dentro de un bucle `for…of` **sin** `await`, y se guardan las promesas en una lista.
3. **`Promise.allSettled`** espera a que los tres se asienten, **aunque uno falle**. Si se usara `Promise.all`, el pedido 102 rechazaría todo el informe.
4. **El informe** recorre los resultados: `fulfilled` trae el valor y `rejected`, el motivo (el `Error` que lanzó `procesarPedido`).
5. **El pedido 102 se detiene en el cobro:** no se prepara. Los otros dos continúan sin esperar.
6. **Integra el módulo:** promesas, `async`/`await`, `try`/`catch`, `Promise.allSettled` y ejecución en paralelo.

## ✅ Resultado esperado

Al abrir `22-pedidos-completo.html`, la consola muestra:

```text
✅ Validado (101)
✅ Validado (102)
✅ Validado (103)
💳 Cobrado (101)
💳 Cobrado (103)
☕ Preparado (101)
☕ Preparado (103)
--- Informe ---
🏁 Pedido 101 listo para Lucía
❌ Pedido 102: Tarjeta rechazada
🏁 Pedido 103 listo para Sofía
```

- `Promise.allSettled` permite informar el resultado de cada pedido aunque alguno falle.
- Procesar en paralelo ahorra tiempo cuando los pedidos son independientes.
