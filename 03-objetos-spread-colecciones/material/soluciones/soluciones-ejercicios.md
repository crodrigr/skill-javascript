# 🔑 Soluciones — Ejercicios de la Clase 03 (material docente)

No compartir este archivo con los estudiantes. Cada solución se ejecutó en Chrome sobre la página de partida del ejercicio: pasa `validar_js.py --nivel 3` (sintaxis y alcance) y produce la salida indicada.

---

## 🟢 Básico 01 — La ficha del producto

```js
const producto = { nombre: 'Galleta', precio: 1.8, stock: 40 };

producto.activo = true;
producto.stock = 35;
console.log(producto);

delete producto.activo;
console.log('activo' in producto);

console.log(producto['nombre'], producto.precio);
console.log(producto.color);
```

**Salida:**

```text
{nombre: 'Galleta', precio: 1.8, stock: 35, activo: true}
false
Galleta 1.8
undefined
```

**Respuesta.** `const` impide **reasignar la variable** `producto`, pero no cambiar las propiedades del objeto al que apunta.

---

## 🟡 Intermedio 01 — Métodos y `this`

**Parte A:**

```js
const producto = {
  nombre: 'Brownie',
  precio: 3.5,
  stock: 6,
  descripcion() {
    return `${this.nombre}: $${this.precio}`;
  },
  conDescuento(porcentaje) {
    return this.precio * (100 - porcentaje) / 100;
  },
  vender(unidades) {
    this.stock = this.stock - unidades;
  }
};

console.log(producto.descripcion());
console.log(producto.conDescuento(10));
producto.vender(1);
console.log(producto.stock);
```

**Salida:**

```text
Brownie: $3.5
3.15
5
```

**Parte B** (con el código de la Parte B ejecutado en una página):

```text
undefined: $undefined
NaN
Brownie: $3.5
```

- a) `f()` es un método suelto: `this` es el objeto global, que no tiene `nombre` ni `precio`: `undefined: $undefined`.
- b) La flecha usa el `this` del script (el objeto global): `this.precio` es `undefined` y `undefined * 1.21` da `NaN`.
- c) Llamado con el objeto, `this` es `producto`: `Brownie: $3.5`.

**Parte C.** Llamar el método con el objeto, o envolverlo: `const f = () => producto.descripcion(); f()`.

---

## 🟢 Básico 02 — De objeto a JSON y de vuelta

```js
const pedido = {
  numero: 101,
  cliente: 'Lucía',
  total: 13.5,
  pagado: false,
  nota: undefined,
  imprimir() {
    return 'imprimiendo';
  }
};

const texto = JSON.stringify(pedido);
console.log(texto);
console.log(JSON.stringify(pedido, null, 2));

const copia = JSON.parse(texto);
console.log(copia);
console.log('imprimir' in copia, 'nota' in copia);
```

**Salida (Parte A):**

```text
{"numero":101,"cliente":"Lucía","total":13.5,"pagado":false}
{
  "numero": 101,
  "cliente": "Lucía",
  "total": 13.5,
  "pagado": false
}
{numero: 101, cliente: 'Lucía', total: 13.5, pagado: false}
false false
```

**Parte B:**

```text
{"a":1,"b":[1,null,3],"c":null}
"Aroma"
2
```

- a) `undefined` dentro de un arreglo pasa a `null` y `NaN` también.
- b) El texto JSON de un texto incluye las comillas dobles.
- c) `JSON.parse` devuelve el arreglo `[1, 2]` y su `length` es `2`.

**Parte C.** Es válido solo `'{"a":1}'`. No lo son: `"{'a':1}"` (comillas simples), `'{"a":1,}'` (coma final) y `'{a:1}'` (clave sin comillas).

---

## 🟡 Intermedio 02 — Desestructuración, spread y copias

```js
const pedido = {
  numero: 102,
  cliente: { nombre: 'Marta', ciudad: 'Salta' },
  items: ['Té'],
  total: 3.2
};

const { nombre, ciudad } = pedido.cliente;
console.log(nombre, ciudad);

const { numero, total: importe, envio = 0 } = pedido;
console.log(numero, importe, envio);

const conEnvio = { ...pedido, envio: 3.5 };
console.log(conEnvio.envio, pedido.envio);

const copia = { ...pedido };
copia.cliente.ciudad = 'Jujuy';
console.log(pedido.cliente.ciudad);

const profunda = structuredClone(pedido);
profunda.cliente.ciudad = 'Tucumán';
console.log(pedido.cliente.ciudad, profunda.cliente.ciudad);

const mezcla = Object.assign({}, { a: 1, b: 2 }, { b: 3 });
console.log(mezcla);
```

**Salida:**

```text
Marta Salta
102 3.2 0
3.5 undefined
Jujuy
Jujuy Tucumán
{a: 1, b: 3}
```

**Respuesta.** El *spread* hace una copia superficial: `copia.cliente` es **el mismo objeto** que `pedido.cliente`, así que cambiar su ciudad cambia también el original. `structuredClone` copia todos los niveles: `profunda.cliente` es otro objeto.

---

## 🟢 Básico 03 — Arreglos

```js
const pedido = ['Café', 'Té'];

pedido.push('Medialuna');
pedido.unshift('Brownie');
console.log(pedido, pedido.length);

const quitado = pedido.pop();
console.log(quitado, pedido);

console.log(pedido.slice(1, 3), pedido);

pedido.splice(1, 0, 'Scone');
console.log(pedido);

for (let i = 0; i < pedido.length; i++) {
  console.log(i + 1 + '. ' + pedido[i]);
}

const copia = [...pedido, 'Alfajor'];
console.log(copia.length, pedido.length);
```

**Salida:**

```text
(4) ['Brownie', 'Café', 'Té', 'Medialuna'] 4
Medialuna (3) ['Brownie', 'Café', 'Té']
(2) ['Café', 'Té'] (3) ['Brownie', 'Café', 'Té']
(4) ['Brownie', 'Scone', 'Café', 'Té']
1. Brownie
2. Scone
3. Café
4. Té
5 4
```

**Respuesta.** Modifican el original: `push`, `unshift`, `pop` y `splice`. No lo modifican: `slice` y el *spread*.

---

## 🟡 Intermedio 03 — Buscar y ordenar

```js
const productos = [
  { nombre: 'Café', precio: 4.5, stock: 12 },
  { nombre: 'Té', precio: 3.2, stock: 0 },
  { nombre: 'Galleta', precio: 1.8, stock: 40 },
  { nombre: 'Medialuna', precio: 2.2, stock: 25 },
  { nombre: 'Brownie', precio: 3.5, stock: 6 }
];

const brownie = productos.find(p => p.nombre === 'Brownie');
console.log(brownie);
console.log(productos.findIndex(p => p.stock === 0));
console.log(productos.filter(p => p.stock > 0).length);

const porPrecio = [...productos].sort((a, b) => b.precio - a.precio);
const nombres = [];
for (const p of porPrecio) {
  nombres.push(p.nombre);
}
console.log(nombres.join(', '));
console.log(productos[0].nombre);

console.log([10, 9, 1, 100].sort((a, b) => a - b));
```

**Salida:**

```text
{nombre: 'Brownie', precio: 3.5, stock: 6}
1
4
Café, Brownie, Té, Medialuna, Galleta
Café
(4) [1, 9, 10, 100]
```

**Respuesta.** `productos.find(p => p.precio > 10)` devuelve `undefined`, porque ningún producto cumple; pedirle `.nombre` a `undefined` da `TypeError`. Conviene comprobar antes, o usar `?.`.

---

## 🟡 Intermedio 04 — `Set`, `Map` y `FormData`

```js
const ventas = ['Café', 'Té', 'Café', 'Galleta', 'Té', 'Café'];

const distintos = new Set(ventas);
console.log(distintos.size, [...distintos]);

const conteo = new Map();
for (const v of ventas) {
  conteo.set(v, (conteo.get(v) || 0) + 1);
}
console.log(conteo);
console.log(conteo.get('Café'), conteo.get('Scone'));

const formulario = document.getElementById('pedido');
const datos = new FormData(formulario);
const pedido = Object.fromEntries(datos);
console.log(pedido);
console.log(Number(pedido.cantidad) * 4.5);
```

**Salida:**

```text
3 (3) ['Café', 'Té', 'Galleta']
Map(3) {'Café' => 3, 'Té' => 2, 'Galleta' => 1}
3 undefined
{producto: 'Café', cantidad: '3'}
13.5
```

**Respuesta.** (a) `Set`: guarda valores únicos. (b) `Map`: asocia cada producto con su cantidad y cambia con cada venta. (c) Arreglo: lista ordenada con repetidos. Los valores del formulario son texto: `Number(pedido.cantidad)` convierte la cantidad antes de calcular. El campo sin `name` no aparece.

---

## 🔴 Desafío 01 — El inventario de Aroma

```js
const productos = [
  { nombre: 'Café', precio: 4.5, stock: 12 },
  { nombre: 'Té', precio: 3.2, stock: 0 },
  { nombre: 'Galleta', precio: 1.8, stock: 40 },
  { nombre: 'Medialuna', precio: 2.2, stock: 25 },
  { nombre: 'Brownie', precio: 3.5, stock: 6 }
];
const ventas = ['Café', 'Galleta', 'Café', 'Brownie', 'Galleta', 'Café', 'Brownie'];

const conteo = new Map();
for (const venta of ventas) {
  conteo.set(venta, (conteo.get(venta) || 0) + 1);
}

let recaudado = 0;
for (const [nombre, cantidad] of conteo) {
  const { precio, stock } = productos.find(p => p.nombre === nombre);
  const resto = stock - cantidad;
  recaudado += cantidad * precio;
  const aviso = resto <= 5 ? ' (reponer)' : '';
  console.log(nombre + ': ' + cantidad + ' vendidos, quedan ' + resto + aviso);
}

const vendidos = new Set(ventas);
const sinVentas = [];
for (const p of productos) {
  if (!vendidos.has(p.nombre)) {
    sinVentas.push(p.nombre);
  }
}
console.log('Sin ventas: ' + (sinVentas.length > 0 ? sinVentas.join(', ') : 'ninguno'));
console.log('Recaudado: ' + recaudado.toFixed(2));

const resumen = { ...productos[0], vendidos: conteo.get('Café') || 0 };
console.log(JSON.stringify(resumen));
```

**Salida con las ventas de arriba:**

```text
Café: 3 vendidos, quedan 9
Galleta: 2 vendidos, quedan 38
Brownie: 2 vendidos, quedan 4 (reponer)
Sin ventas: Té, Medialuna
Recaudado: 24.10
{"nombre":"Café","precio":4.5,"stock":12,"vendidos":3}
```

**Casos de prueba 2 y 3** (se cambia solo la lista `ventas`): ver la tabla del ejercicio; las salidas se obtuvieron ejecutando el programa.

**Notas.** `Brownie` tiene stock `6`: con dos vendidos quedan `4`, que es 5 o menos, así que se agrega `(reponer)`. `recaudado` suma `3 x 4.5 + 2 x 1.8 + 2 x 3.5 = 24.1`.
