# 🔴 Desafío 02 — El pedido sin pirámide

> 🔴 **Nivel:** Desafío · 🎓 **Resultados de aprendizaje:** RA-8, RA-9 · 🗓️ **Sesión 2**

## 🧱 Estado inicial

Abrí [`desafio-02.html`](../recursos/practica/desafio-02.html) y su archivo [`js/desafio-02.js`](../recursos/practica/js/desafio-02.js), de la carpeta `practica`. El archivo trae los cuatro pasos de un pedido y el pedido 103. Los pasos ya funcionan; falta **conectarlos**:

```js
function validar(pedido, siguiente) {
  setTimeout(() => {
    if (pedido.items.length === 0) {
      siguiente('Pedido vacío');
      return;
    }
    console.log('✅ Validado');
    siguiente(null, pedido);
  }, 300);
}

function cobrar(pedido, siguiente) {
  setTimeout(() => {
    if (pedido.tarjetaValida === false) {
      siguiente('Tarjeta rechazada');
      return;
    }
    console.log('💳 Cobrado $' + pedido.total);
    siguiente(null, pedido);
  }, 500);
}

function preparar(pedido, siguiente) {
  setTimeout(() => {
    console.log('☕ Preparado');
    siguiente(null, pedido);
  }, 800);
}

function entregar(pedido, siguiente) {
  setTimeout(() => {
    console.log('🛵 Entregado');
    siguiente(null, pedido);
  }, 200);
}

const pedido = { numero: 103, cliente: 'Sofía', items: ['Brownie', 'Té'], total: 6.7 };

// Escribí acá las funciones con nombre y el primer paso
```

Para los casos de prueba 2 y 3 cambiás **solo** lo indicado en cada caso.

## 🛠️ Proceso esperado

1. Escribí una función con nombre por cada paso: `alValidar`, `alCobrar`, `alPreparar` y `alEntregar`. Todas reciben `(error, p)`.
2. Escribí `fallar(error)`, que muestre `❌ El pedido N se detuvo: ERROR`.
3. En cada una, si `error` no es `null`, llamá a `fallar` y **terminá con `return`**; si no, llamá al paso siguiente pasándole la función que sigue.
4. `alEntregar` muestra `🏁 Pedido N terminado para CLIENTE`.
5. Mostrá `📥 Pedido N recibido` y llamá a `validar(pedido, alValidar)`.
6. Ejecutá y comprobá los **tres casos de prueba**.

## ✅ Resultado esperado

El resultado se comprueba con los tres casos de prueba (más abajo).

## 🚧 Restricciones

- 🚫 **Nada de callbacks anidados**: cada paso se conecta por su nombre.
- 🚫 No cambies las cuatro funciones de los pasos.
- 🚫 Si hay un error, no se ejecuta ningún paso siguiente.

## 🧪 Casos de prueba

**Caso 1 (el del archivo).**

Salida esperada:

```text
📥 Pedido 103 recibido
✅ Validado
💳 Cobrado $6.7
☕ Preparado
🛵 Entregado
🏁 Pedido 103 terminado para Sofía
```

**Caso 2: tarjeta rechazada.**

Cambiá en el archivo:

```js
const pedido = { numero: 104, cliente: 'Diego', items: ['Café'], total: 4.5, tarjetaValida: false };
```

Salida esperada:

```text
📥 Pedido 104 recibido
✅ Validado
❌ El pedido 104 se detuvo: Tarjeta rechazada
```

**Caso 3: pedido vacío.**

Cambiá en el archivo:

```js
const pedido = { numero: 105, cliente: 'Marcos', items: [], total: 0 };
```

Salida esperada:

```text
📥 Pedido 105 recibido
❌ El pedido 105 se detuvo: Pedido vacío
```

## 🎓 Resultados de aprendizaje

- RA-8, RA-9
