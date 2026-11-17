# 🔑 Soluciones — Ejercicios de la Clase 04 (material docente)

No compartir este archivo con los estudiantes. Cada solución se ejecutó en Chrome sobre la página de partida del ejercicio: pasa `validar_js.py --nivel 4` (sintaxis y alcance) y produce la salida indicada **en ese orden**. Los tiempos son aproximados.

---

## 🟢 Básico 01 — Síncrono o asíncrono

```js
console.log('A');
setTimeout(() => console.log('B'), 500);
console.log('C');
setTimeout(() => console.log('D'), 0);
console.log('E');

setTimeout(() => console.log('F'), 200);
```

**Salida:**

```text
A
C
E
D
F
B
```

**Respuesta.** (a) síncrona; (b) asíncrona; (c) asíncrona. En (a) la tarea siguiente espera a que termine la anterior; en (b) y (c) se inicia la espera y se sigue con otra cosa.

---

## 🟡 Intermedio 01 — Bloquear o no bloquear

```js
function pedirBloqueando(producto) {
  console.log('Pedido de ' + producto);
  for (let i = 0; i < 100000000; i++) { }
  console.log('Listo: ' + producto);
}

pedirBloqueando('Café');
pedirBloqueando('Té');
console.log('---');

function pedirSinBloquear(producto) {
  console.log('Pedido de ' + producto);
  setTimeout(() => console.log('Listo: ' + producto), 300);
}

pedirSinBloquear('Café');
pedirSinBloquear('Té');
pedirSinBloquear('Brownie');
console.log('Seguimos atendiendo');
```

**Salida:**

```text
Pedido de Café
Listo: Café
Pedido de Té
Listo: Té
---
Pedido de Café
Pedido de Té
Pedido de Brownie
Seguimos atendiendo
Listo: Café
Listo: Té
Listo: Brownie
```

**Respuesta.** En la primera, el bucle ocupa el único hilo: nada más se ejecuta hasta que termina, así que el segundo pedido espera. En la segunda, `setTimeout` solo programa el aviso y devuelve el control enseguida: los tres pedidos se toman primero y los avisos llegan después, cuando vence cada tiempo.

---

## 🟡 Intermedio 02 — La pila, la cola y el bucle

```js
console.log('1');
setTimeout(() => console.log('2'), 100);
setTimeout(() => {
  console.log('3');
  setTimeout(() => console.log('4'), 0);
}, 0);
setTimeout(() => console.log('5'), 100);

function seis() {
  console.log('6');
}

seis();
console.log('7');

setTimeout(() => console.log('8'), 50);
```

**Salida:**

```text
1
6
7
3
4
8
2
5
```

**Respuesta.** El `4` se programa cuando se ejecuta el `3` (a los 0 ms) con 0 ms de espera: vence casi de inmediato, mucho antes que los 100 ms del `2`. El `2` y el `5` vencen en el mismo instante (100 ms) y se ejecutan en el orden en que se programaron.

---

## 🟢 Básico 02 — Mi primer callback

```js
const precios = [4.5, 3.2, 1.8];

function conPesos(precio) {
  return '$' + precio;
}

function conDescuento(precio) {
  return '$' + (precio - 1);
}

function mostrarPrecios(lista, formato) {
  for (let i = 0; i < lista.length; i++) {
    console.log(formato(lista[i]));
  }
}

console.log('Precios normales');
mostrarPrecios(precios, conPesos);
console.log('Con descuento');
mostrarPrecios(precios, conDescuento);
console.log('En euros');
mostrarPrecios(precios, (precio) => '€' + precio);
```

**Salida:**

```text
Precios normales
$4.5
$3.2
$1.8
Con descuento
$3.5
$2.2
$0.8
En euros
€4.5
€3.2
€1.8
```

**Respuesta.** `conPesos()` se ejecutaría en ese momento, sin argumento (`precio` valdría `undefined`), y `mostrarPrecios` recibiría **el texto que devuelve** (`'$undefined'`) en lugar de una función: al llamar a `formato(...)` daría `TypeError: formato is not a function`.

---

## 🟡 Intermedio 03 — Temporizadores

```js
console.log('Pedido en marcha');

setTimeout(() => console.log('Aviso 1: tu pedido está en preparación'), 500);

const idAviso = setTimeout(() => console.log('Aviso 2: este no debería salir'), 700);
clearTimeout(idAviso);

let faltan = 3;
const idCuenta = setInterval(() => {
  console.log('Faltan ' + faltan);
  faltan = faltan - 1;
  if (faltan === 0) {
    clearInterval(idCuenta);
    console.log('¡Listo!');
  }
}, 200);

console.log('Todo programado');
```

**Salida:**

```text
Pedido en marcha
Todo programado
Faltan 3
Faltan 2
Aviso 1: tu pedido está en preparación
Faltan 1
¡Listo!
```

**Respuesta.** `Todo programado` es síncrono y sale apenas termina el código; los demás mensajes son callbacks de temporizadores y salen después, cuando vence cada tiempo (200, 400 y 600 ms para la cuenta; 500 ms para el aviso 1).

---

## 🔴 Desafío 01 — Reservas con «error primero»

```js
const stock = { 'Café': 12, 'Té': 0, 'Brownie': 6, 'Galleta': 40 };

function informar(error, resultado) {
  if (error !== null) {
    console.log('❌ ' + error);
    return;
  }
  console.log('✅ ' + resultado);
}

function reservar(producto, cantidad, alTerminar) {
  setTimeout(() => {
    if (stock[producto] === undefined) {
      alTerminar('No existe: ' + producto);
      return;
    }
    if (stock[producto] < cantidad) {
      alTerminar('Stock insuficiente de ' + producto + ': pedido ' + cantidad + ', hay ' + stock[producto]);
      return;
    }
    stock[producto] = stock[producto] - cantidad;
    alTerminar(null, 'Reservado: ' + cantidad + ' x ' + producto);
  }, 300);
}

reservar('Café', 2, informar);
reservar('Té', 1, informar);
reservar('Pizza', 1, informar);
reservar('Brownie', 10, informar);
console.log('Reservas enviadas');
```

**Salida:**

```text
Reservas enviadas
✅ Reservado: 2 x Café
❌ Stock insuficiente de Té: pedido 1, hay 0
❌ No existe: Pizza
❌ Stock insuficiente de Brownie: pedido 10, hay 6
```

**Caso 2: el stock se gasta** — salida:

```text
Reservas enviadas
✅ Reservado: 40 x Galleta
❌ Stock insuficiente de Galleta: pedido 1, hay 0
```

**Caso 3: sin reservas válidas** — salida:

```text
Reservas enviadas
❌ No existe: Pizza
❌ Stock insuficiente de Té: pedido 5, hay 0
```

---

## 🔴 Desafío 02 — El pedido sin pirámide

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

function fallar(error) {
  console.log('❌ El pedido ' + pedido.numero + ' se detuvo: ' + error);
}

function alEntregar(error, p) {
  if (error !== null) {
    fallar(error);
    return;
  }
  console.log('🏁 Pedido ' + p.numero + ' terminado para ' + p.cliente);
}

function alPreparar(error, p) {
  if (error !== null) {
    fallar(error);
    return;
  }
  entregar(p, alEntregar);
}

function alCobrar(error, p) {
  if (error !== null) {
    fallar(error);
    return;
  }
  preparar(p, alPreparar);
}

function alValidar(error, p) {
  if (error !== null) {
    fallar(error);
    return;
  }
  cobrar(p, alCobrar);
}

console.log('📥 Pedido ' + pedido.numero + ' recibido');
validar(pedido, alValidar);
```

**Salida:**

```text
📥 Pedido 103 recibido
✅ Validado
💳 Cobrado $6.7
☕ Preparado
🛵 Entregado
🏁 Pedido 103 terminado para Sofía
```

**Caso 2: tarjeta rechazada** — salida:

```text
📥 Pedido 104 recibido
✅ Validado
❌ El pedido 104 se detuvo: Tarjeta rechazada
```

**Caso 3: pedido vacío** — salida:

```text
📥 Pedido 105 recibido
❌ El pedido 105 se detuvo: Pedido vacío
```
