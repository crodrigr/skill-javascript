# 🔴 Desafío 02 — Varios pedidos con allSettled

> 🔴 **Nivel:** Desafío · 🎓 **Resultados de aprendizaje:** RA-7, RA-9 · 🗓️ **Sesión 2**

## 🧱 Estado inicial

Abrí [`desafio-02.html`](../recursos/practica/desafio-02.html) y su archivo [`js/desafio-02.js`](../recursos/practica/js/desafio-02.js), de la carpeta `practica`. El archivo trae tres pasos que devuelven promesas (sin mensajes) y la lista de pedidos:

```js
function validar(pedido) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (pedido.items.length === 0) {
        reject('Pedido vacío');
        return;
      }
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
      resolve(pedido);
    }, 500);
  });
}

function preparar(pedido) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(pedido), 800);
  });
}

const pedidos = [
  { numero: 101, cliente: 'Lucía', items: ['Café'], total: 4.5 },
  { numero: 102, cliente: 'Marcos', items: ['Té'], total: 3.2, tarjetaValida: false },
  { numero: 103, cliente: 'Sofía', items: [], total: 0 },
  { numero: 104, cliente: 'Diego', items: ['Brownie'], total: 3.5 }
];

// Escribí acá procesarPedido y main
```

Para los casos de prueba 2 y 3 cambiás **solo** lo indicado en cada caso.

## 🛠️ Proceso esperado

1. Escribí `async function procesarPedido(pedido)`: con `try`, espera `validar`, `cobrar` y `preparar` con `await` y **devuelve** `Pedido N listo para CLIENTE`; con `catch`, **lanza** `new Error('Pedido N: MOTIVO')`.
2. Escribí `async function main()`: lanzá `procesarPedido` para **todos** los pedidos dentro de un `for…of` **sin esperar** a cada uno, y guardá las promesas en un arreglo con `push`.
3. Esperá todas con `Promise.allSettled`.
4. Recorré los resultados: si se cumplió, mostrá `🏁` seguido de un espacio y el valor; si se rechazó, mostrá `❌` seguido de un espacio y el mensaje del error (`reason.message`). Contá los listos y los fallidos.
5. Al final, mostrá `Resumen: N listos, M fallidos` y llamá a `main()`.
6. Ejecutá y comprobá los **tres casos de prueba**.

## ✅ Resultado esperado

El resultado se comprueba con los tres casos de prueba (más abajo).

## 🚧 Restricciones

- 🚫 No uses `Promise.all`: un fallo no puede detener el informe.
- 🚫 No uses `await` dentro del `for…of` que lanza los pedidos.
- 🚫 No uses `map` ni `reduce`.
- 🚫 No cambies los tres pasos.

## 🧪 Casos de prueba

**Caso 1 (el del archivo).**

Salida esperada:

```text
🏁 Pedido 101 listo para Lucía
❌ Pedido 102: Tarjeta rechazada
❌ Pedido 103: Pedido vacío
🏁 Pedido 104 listo para Diego
Resumen: 2 listos, 2 fallidos
```

**Caso 2: todos bien.**

Cambiá en el archivo:

```js
const pedidos = [
  { numero: 201, cliente: 'Ana', items: ['Café'], total: 4.5 },
  { numero: 202, cliente: 'Luis', items: ['Té', 'Galleta'], total: 5 }
];
```

Salida esperada:

```text
🏁 Pedido 201 listo para Ana
🏁 Pedido 202 listo para Luis
Resumen: 2 listos, 0 fallidos
```

**Caso 3: todos fallan.**

Cambiá en el archivo:

```js
const pedidos = [
  { numero: 301, cliente: 'Eva', items: [], total: 0 },
  { numero: 302, cliente: 'Pablo', items: ['Café'], total: 4.5, tarjetaValida: false }
];
```

Salida esperada:

```text
❌ Pedido 301: Pedido vacío
❌ Pedido 302: Tarjeta rechazada
Resumen: 0 listos, 2 fallidos
```

## 🎓 Resultados de aprendizaje

- RA-7, RA-9
