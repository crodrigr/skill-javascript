# 🔴 Desafío 01 — De callbacks a promesas y async/await

> 🔴 **Nivel:** Desafío · 🎓 **Resultados de aprendizaje:** RA-9 · 🗓️ **Sesión 2**

## 🧱 Estado inicial

Abrí [`desafio-01.html`](../recursos/practica/desafio-01.html) y su archivo [`js/desafio-01.js`](../recursos/practica/js/desafio-01.js), de la carpeta `practica`. El archivo trae los tres pasos **como en la Clase 04**, con callbacks `(error, resultado)`, y el pedido 101:

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

const pedido = { numero: 101, cliente: 'Lucía', items: ['Café'], total: 4.5 };

// Escribí acá las versiones con promesas y la función async
```

Para los casos de prueba 2 y 3 cambiás **solo** lo indicado en cada caso.

## 🛠️ Proceso esperado

1. Escribí `validarP(pedido)`, `cobrarP(pedido)` y `prepararP(pedido)`: cada una **devuelve una promesa** (`new Promise`) y llama a la función de callback original; si el callback recibe un `error`, rechaza con él; si no, se cumple con el pedido.
2. Escribí `async function procesar(pedido)`: muestra `📥 Pedido N recibido`; con `try`, espera los tres pasos con `await` y muestra `🏁 Pedido N listo para CLIENTE`; con `catch`, muestra `❌ El pedido N se detuvo: MOTIVO`.
3. Llamá a `procesar(pedido)`.
4. Ejecutá y comprobá los **tres casos de prueba**.

## ✅ Resultado esperado

El resultado se comprueba con los tres casos de prueba (más abajo).

## 🚧 Restricciones

- 🚫 No cambies `validar`, `cobrar` ni `preparar`.
- 🚫 Nada de callbacks anidados ni de `.then()`.
- 🚫 Si un paso falla, los siguientes no se ejecutan.

## 🧪 Casos de prueba

**Caso 1 (el del archivo).**

Salida esperada:

```text
📥 Pedido 101 recibido
✅ Validado
💳 Cobrado $4.5
☕ Preparado
🏁 Pedido 101 listo para Lucía
```

**Caso 2: tarjeta rechazada.**

Cambiá en el archivo:

```js
const pedido = { numero: 102, cliente: 'Marcos', items: ['Té'], total: 3.2, tarjetaValida: false };
```

Salida esperada:

```text
📥 Pedido 102 recibido
✅ Validado
❌ El pedido 102 se detuvo: Tarjeta rechazada
```

**Caso 3: pedido vacío.**

Cambiá en el archivo:

```js
const pedido = { numero: 103, cliente: 'Diego', items: [], total: 0 };
```

Salida esperada:

```text
📥 Pedido 103 recibido
❌ El pedido 103 se detuvo: Pedido vacío
```

## 🎓 Resultados de aprendizaje

- RA-9
