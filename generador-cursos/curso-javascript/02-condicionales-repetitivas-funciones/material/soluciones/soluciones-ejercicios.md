# 🔑 Soluciones — Ejercicios de la Clase 02 (material docente)

No compartir este archivo con los estudiantes. Cada solución se ejecutó en Chrome sobre la página de partida del ejercicio: pasa `validar_js.py --nivel 2` (sintaxis y alcance) y produce la salida indicada.

---

## 🟢 Básico 01 — Envío y descuento

```js
const total = 35;

let porcentaje;
if (total >= 50) {
  porcentaje = 10;
} else if (total >= 20) {
  porcentaje = 5;
} else {
  porcentaje = 0;
}

console.log('Total:', total);
console.log('Descuento: ' + porcentaje + '%');
if (total >= 20) {
  console.log('Envío: gratis');
} else {
  console.log('Envío: con costo');
}
```

**Salida con `total = 35`:**

```text
Total: 35
Descuento: 5%
Envío: gratis
```

**Otros totales:** con `12` → `Total: 12`, `Descuento: 0%`, `Envío: con costo`; con `60` → `Total: 60`, `Descuento: 10%`, `Envío: gratis`.

---

## 🟢 Básico 02 — Contá las vueltas

**Parte A.** a) **4** vueltas (`i` vale 0, 1, 2 y 3). b) **3** vueltas (`i` vale 5, 3 y 1). c) **2** vueltas (`m` pasa de 10 a 7 y de 7 a 4; con `4` ya no se cumple `m > 6`). d) **1** vuelta (`do...while` ejecuta el cuerpo antes de evaluar `k > 5`). e) **Infinito**: `x` nunca cambia y `x < 5` siempre es verdadero.

**Partes B y C y comprobación de la Parte A:**

```js
// Parte B: tabla del 7 (de 1 a 5)
for (let i = 1; i <= 5; i++) {
  console.log('7 x ' + i + ' = ' + 7 * i);
}

// Parte C: suma del 1 al 10
let suma = 0;
let n = 1;
while (n <= 10) {
  suma += n;
  n++;
}
console.log('Suma del 1 al 10: ' + suma);

// Parte A (comprobación): cantidad de vueltas
let a = 0; for (let i = 0; i < 4; i++) { a++; } console.log('a', a);
let b = 0; for (let i = 5; i > 0; i -= 2) { b++; } console.log('b', b);
let c = 0; let m = 10; while (m > 6) { m -= 3; c++; } console.log('c', c);
let d = 0; let k = 0; do { k++; d++; } while (k > 5); console.log('d', d);
```

**Salida:**

```text
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
Suma del 1 al 10: 55
a 4
b 3
c 2
d 1
```

(Las líneas `a`, `b`, `c` y `d` son la comprobación de la Parte A; el bucle `e` no se ejecuta porque es infinito.)

---

## 🟡 Intermedio 01 — Elegí la estructura

```js
// Parte A: switch
const codigo = 'N';
switch (codigo) {
  case 'E':
    console.log('Envío: Express');
    break;
  case 'N':
    console.log('Envío: Normal');
    break;
  case 'R':
    console.log('Envío: Retiro en tienda');
    break;
  default:
    console.log('Envío: código desconocido');
}

// Parte B: operador condicional
const stock = 0;
const etiqueta = stock > 0 ? 'Disponible' : 'Agotado';
console.log('Estado: ' + etiqueta);

// Parte C: continue y break
for (let n = 1; n <= 20; n++) {
  if (n % 3 !== 0) {
    continue;
  }
  console.log('Múltiplo de 3: ' + n);
  if (n % 12 === 0) {
    break;
  }
}
console.log('Fin');
```

**Salida:**

```text
Envío: Normal
Estado: Agotado
Múltiplo de 3: 3
Múltiplo de 3: 6
Múltiplo de 3: 9
Múltiplo de 3: 12
Fin
```

**Parte D.**

1. Sin los `break`, con `codigo = 'E'` se mostrarían **las cuatro líneas**: `Envío: Express`, `Envío: Normal`, `Envío: Retiro en tienda` y `Envío: código desconocido` (cascada: después de entrar al primer caso, se ejecutan todos los siguientes, incluido `default`).
2. Porque el operador condicional elige entre **dos** valores; con cuatro opciones habría que encadenarlo y se leería mal. `switch` compara un valor con varias opciones exactas con mucha más claridad.

---

## 🟡 Intermedio 02 — Funciones declarativas y de expresión

```js
// Parte A: función declarativa
function calcularTotal(precio, cantidad, descuento = 0) {
  return precio * cantidad * (1 - descuento);
}

// Parte B: función de expresión
const porcentajeDescuento = function (total) {
  if (total >= 50) {
    return 10;
  } else if (total >= 20) {
    return 5;
  }
  return 0;
};

console.log(calcularTotal(4.5, 3));
console.log(calcularTotal(4.5, 3, 0.1));
console.log(calcularTotal(4.5));
console.log(porcentajeDescuento(13.5), porcentajeDescuento(35), porcentajeDescuento(60));
```

**Salida (Partes A a C):**

```text
13.5
12.15
NaN
0 5 10
```

**Parte D.**

- a) Muestra **`8`**: la función declarativa se eleva y se puede llamar antes de su definición.
- b) **`ReferenceError: Cannot access 'triplicar' before initialization`**: la función de expresión guardada en una constante no se puede usar antes de su línea.
- c) Muestra **`undefined`**: `sumar` calcula `resultado` pero no hay `return`; además `resultado` es local y no existe afuera.

---

## 🟡 Intermedio 03 — Cuatro formas y funciones autoejecutables

```js
// Parte A: cuatro formas de la misma función
function esParA(n) {
  return n % 2 === 0;
}
const esParB = function (n) {
  return n % 2 === 0;
};
const esParC = n => n % 2 === 0;
const esParD = (function (n) {
  return n % 2 === 0;
})(10);

console.log(esParA(7), esParB(8), esParC(9), esParD);

// Parte B: función autoejecutable
(function () {
  const descuentoSecreto = 0.15;
  console.log('Total con descuento:', 20 * (1 - descuentoSecreto));
})();
console.log(typeof descuentoSecreto);

// Parte C: flechas
const conIva = precio => precio * 1.21;
const etiqueta = (nombre, precio) => nombre + ': ' + precio;
const saludo = () => 'Hola, Aroma';
const calcularSubtotal = (precio, cantidad) => {
  return precio * cantidad;
};
console.log(conIva(10));
console.log(etiqueta('Café', 4.5));
console.log(saludo());
console.log(calcularSubtotal(4.5, 3));
```

**Salida:**

```text
false true false true
Total con descuento: 17
undefined
12.1
Café: 4.5
Hola, Aroma
13.5
```

**Parte D.** Sin `return`, la llamada devolvería **`undefined`**: con llaves el cuerpo es un bloque y la expresión `precio * cantidad;` se calcula pero no se devuelve. Solo las flechas **sin llaves** devuelven el valor de la expresión de forma implícita.

---

## 🔴 Desafío 01 — La caja de Aroma

```js
const precio = 4.5;
const cantidadMaxima = 8;

function descuentoPara(subtotal) {
  if (subtotal >= 50) {
    return 10;
  } else if (subtotal >= 20) {
    return 5;
  }
  return 0;
}

const envioPara = total => total >= 20 ? 0 : 3.5;

function totalFinal(precio, cantidad) {
  const subtotal = precio * cantidad;
  const conDescuento = subtotal - subtotal * descuentoPara(subtotal) / 100;
  return conDescuento + envioPara(conDescuento);
}

let cantidadGratis = 0;
for (let cantidad = 1; cantidad <= cantidadMaxima; cantidad++) {
  const subtotal = precio * cantidad;
  const conDescuento = subtotal - subtotal * descuentoPara(subtotal) / 100;
  console.log('Cantidad ' + cantidad + ': ' + totalFinal(precio, cantidad).toFixed(2));
  if (envioPara(conDescuento) === 0) {
    cantidadGratis = cantidad;
    break;
  }
}
if (cantidadGratis > 0) {
  console.log('Envío gratis desde la cantidad ' + cantidadGratis);
} else {
  console.log('Con ' + cantidadMaxima + ' no se llega al envío gratis');
}
```

**Salida con `precio = 4.5` y `cantidadMaxima = 8`:**

```text
Cantidad 1: 8.00
Cantidad 2: 12.50
Cantidad 3: 17.00
Cantidad 4: 21.50
Cantidad 5: 21.38
Envío gratis desde la cantidad 5
```

**Casos de prueba 2 y 3** (se cambian solo los dos datos):

- `precio = 8`, `cantidadMaxima = 5`: `Cantidad 1: 11.50`, `Cantidad 2: 19.50`, `Cantidad 3: 22.80`, `Envío gratis desde la cantidad 3`.
- `precio = 2.5`, `cantidadMaxima = 4`: `Cantidad 1: 6.00`, `Cantidad 2: 8.50`, `Cantidad 3: 11.00`, `Cantidad 4: 13.50`, `Con 4 no se llega al envío gratis`.

**Notas.** Con 4 cafés el total es `21.50` (18 más 3.5 de envío) pero el envío **no** es gratis, porque el total con descuento (18) no llega a 20; el criterio es el total con descuento **sin** el envío. Con 5, `22.5 * 0.95` es `21.375`, que `toFixed(2)` muestra como `21.38`.
