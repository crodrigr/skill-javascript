# 📘 Ejemplo 07 — Cuatro pasos en una cadena plana

> 🎓 **Resultados de aprendizaje:** RA-3, RA-9
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, **en el orden en que salió**, con el archivo y la línea de cada error. El orden se contrastó con Node cuando la página no usa el navegador ni tiene errores a propósito (sin diferencias). Los ejemplos **no imprimen objetos `Promise`**: la consola real muestra su estado, pero aquí se observa con `.then()`, `.catch()` y `.finally()`. Los **tiempos son aproximados**: lo que importa es el orden. Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

En la Clase 04, los cuatro pasos del pedido formaban una pirámide de callbacks. Con promesas, cada paso devuelve una promesa y los `.then()` se escriben **uno debajo del otro**, con un solo `.catch()` al final.

## 💻 Código

El archivo [`07-encadenar-then.html`](../recursos/ejemplos/07-encadenar-then.html) tiene este código dentro de `<script>`:

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

const pedido = { numero: 101, cliente: 'Lucía', items: ['Café', 'Medialuna'], total: 6.7 };

console.log('📥 Pedido ' + pedido.numero + ' recibido');

validar(pedido)
  .then(cobrar)
  .then(preparar)
  .then(entregar)
  .then((p) => console.log('🏁 Pedido ' + p.numero + ' terminado'))
  .catch((motivo) => console.log('❌ El pedido se detuvo: ' + motivo));
```

La segunda página, [`07-encadenar-then-fallo.html`](../recursos/ejemplos/07-encadenar-then-fallo.html) (el pedido 102 con la tarjeta rechazada), tiene el mismo código; solo cambia el pedido:

```js
const pedido = { numero: 102, cliente: 'Marcos', items: ['Té'], total: 3.2, tarjetaValida: false };
```

## 🔍 Análisis paso a paso

1. **Cada paso devuelve una promesa** (`validar`, `cobrar`, `preparar` y `entregar`) que se cumple con el pedido.
2. **`.then(cobrar)`** pasa la función (sin paréntesis): recibe el pedido que cumplió la promesa anterior y devuelve otra promesa. El siguiente `.then()` **espera** a que esa promesa se cumpla.
3. **La cadena es plana:** no hay sangría creciente. Compará con el Ejemplo 19 de la Clase 04.
4. **Un solo `.catch()` al final** atiende el rechazo de **cualquier** paso: la segunda página muestra el pedido 102, con la tarjeta rechazada, y los pasos siguientes **no** se ejecutan.
5. **Los tiempos se suman** (300 + 500 + 800 + 200 = 1800 ms), porque cada paso espera al anterior.

## ✅ Resultado esperado

Al abrir `07-encadenar-then.html`, la consola muestra:

```text
📥 Pedido 101 recibido
✅ Validado
💳 Cobrado $6.7
☕ Preparado
🛵 Entregado
🏁 Pedido 101 terminado
```

Al abrir `07-encadenar-then-fallo.html`, la consola muestra:

```text
📥 Pedido 102 recibido
✅ Validado
❌ El pedido se detuvo: Tarjeta rechazada
```

- Cada `.then()` devuelve una promesa nueva: así se encadenan los pasos en una cadena plana.
- Un solo `.catch()` al final atiende el error de cualquier paso.
