# 🔴 Desafío 01 — Reservas con «error primero»

> 🔴 **Nivel:** Desafío · 🎓 **Resultados de aprendizaje:** RA-7 · 🗓️ **Sesión 2**

## 🧱 Estado inicial

Abrí [`desafio-01.html`](../recursos/practica/desafio-01.html) y su archivo [`js/desafio-01.js`](../recursos/practica/js/desafio-01.js), de la carpeta `practica`. El archivo declara el stock y la función que muestra el resultado, y llama a `reservar` (que vas a escribir) cuatro veces:

```js
const stock = { 'Café': 12, 'Té': 0, 'Brownie': 6, 'Galleta': 40 };

function informar(error, resultado) {
  if (error !== null) {
    console.log('❌ ' + error);
    return;
  }
  console.log('✅ ' + resultado);
}

// Escribí acá la función reservar

reservar('Café', 2, informar);
reservar('Té', 1, informar);
reservar('Pizza', 1, informar);
reservar('Brownie', 10, informar);
console.log('Reservas enviadas');
```

Para los casos de prueba 2 y 3 cambiás **solo** lo indicado en cada caso.

## 🛠️ Proceso esperado

1. Escribí `reservar(producto, cantidad, alTerminar)`, que espere **300 ms** con `setTimeout` y después llame a `alTerminar` **una sola vez**.
2. Si el producto **no existe** en `stock`: `alTerminar('No existe: ' + producto)`.
3. Si hay **menos stock** que la cantidad pedida: error `Stock insuficiente de PRODUCTO: pedido N, hay M`.
4. Si todo está bien: **descontá** la cantidad del `stock` y llamá a `alTerminar(null, 'Reservado: N x PRODUCTO')`.
5. Ejecutá y comprobá los **tres casos de prueba**.

## ✅ Resultado esperado

El resultado se comprueba con los tres casos de prueba (más abajo).

## 🚧 Restricciones

- 🚫 No uses `return` para entregar el resultado: tiene que llegar por el callback.
- 🚫 `alTerminar` se llama exactamente una vez por reserva.
- 🚫 No cambies `informar` ni el stock inicial.

## 🧪 Casos de prueba

**Caso 1 (el del archivo).**

Salida esperada:

```text
Reservas enviadas
✅ Reservado: 2 x Café
❌ Stock insuficiente de Té: pedido 1, hay 0
❌ No existe: Pizza
❌ Stock insuficiente de Brownie: pedido 10, hay 6
```

**Caso 2: el stock se gasta.**

Cambiá en el archivo:

```js
reservar('Galleta', 40, informar);
reservar('Galleta', 1, informar);
console.log('Reservas enviadas');
```

Salida esperada:

```text
Reservas enviadas
✅ Reservado: 40 x Galleta
❌ Stock insuficiente de Galleta: pedido 1, hay 0
```

**Caso 3: sin reservas válidas.**

Cambiá en el archivo:

```js
reservar('Pizza', 2, informar);
reservar('Té', 5, informar);
console.log('Reservas enviadas');
```

Salida esperada:

```text
Reservas enviadas
❌ No existe: Pizza
❌ Stock insuficiente de Té: pedido 5, hay 0
```

## 🎓 Resultados de aprendizaje

- RA-7
