# 🔑 Soluciones — Ejercicios de la Clase 01 (material docente)

No compartir este archivo con los estudiantes. Cada solución se ejecutó en Chrome sobre la página de partida del ejercicio: pasa `validar_js.py` (sintaxis y alcance) y produce la salida indicada.

---

## 🟢 Básico 01 — Tu primera página con JavaScript

**Parte A.** `4.5 * 3` → `13.5`; `'Aroma'.length` → `5`; `10 / 4` → `2.5`; `typeof 'Aroma'` → `'string'`; `precioTe` → `Uncaught ReferenceError: precioTe is not defined`.

**Partes B y C — el cuerpo de la página** (al final del `<body>`):

```html
    <script>
      console.log('Bienvenida a Café Aroma');
      console.log('El título dice:', document.getElementById('titulo').textContent);
    </script>

    <script src="js/basico-01.js"></script>
```

**El archivo `js/basico-01.js`:**

```js
// Código del archivo externo
const precio = 4.5;
const cantidad = 3;
console.log('Total:', precio * cantidad);
```

**Salida en la consola:**

```text
Bienvenida a Café Aroma
El título dice: Café Aroma
Total: 13.5
```

**Parte D.**

1. Porque el título está en el `<body>`; si el script estuviera en el `<head>`, se ejecutaría **antes** de que el título exista. Comprobado: en el `<head>`, la lectura del título da `Uncaught TypeError: Cannot read properties of null (reading 'textContent') (basico-01.html:7)`.
2. El script en línea está dentro del HTML; el externo está en un archivo `.js` que se incorpora con `src`, se puede reutilizar en varias páginas y se organiza mejor.
3. El navegador informa el error con el **archivo y la línea** (por ejemplo, `basico-01.html:7` o `basico-01.js:3`).

---

## 🟢 Básico 02 — Tipos y variables

**Parte A.** `42` → `'number'`; `'42'` → `'string'`; `true` → `'boolean'`; `undefined` → `'undefined'`; `null` → `'object'`; `3.14` → `'number'`; `10n` → `'bigint'`; `NaN` → `'number'`.

**Parte B — `js/basico-02.js`:**

```js
// Parte B: declaraciones y salida
const nombreTienda = 'Aroma';
let cantidad = 3;
const precio = 4.5;

cantidad = 5;

console.log(nombreTienda);
console.log(cantidad);
console.log(precio);
console.log(typeof precio);
```

**Salida:**

```text
Aroma
5
4.5
number
```

**Parte C.**

1. `nombreTienda` y `precio` no cambian, así que van con `const`; `cantidad` pasa de `3` a `5`, así que va con `let`.
2. Reasignar una constante da `Uncaught TypeError: Assignment to constant variable.` («error de tipo: asignación a una variable constante»).
3. `typeof null` da `'object'` por un resto histórico de la primera versión de JavaScript; no es un error del programa. Para saber si algo es `null` se compara con `=== null`.

---

## 🟡 Intermedio 01 — Corregí las declaraciones

**Parte A — el cuerpo corregido:**

```html
    <script>
      // Script 1: el IVA cambia, así que se declara con let
      let iva = 0.21;
      iva = 0.19;
      console.log('IVA:', iva);
    </script>

    <script>
      // Script 2: se declara una sola vez y después se reasigna
      let cantidad = 2;
      cantidad = 3;
      console.log('Cantidad:', cantidad);
    </script>

    <script>
      // Script 3: se declara antes de usarla
      let total = 10;
      console.log('Total:', total);
    </script>

    <script>
      // Script 4: la variable se declara fuera del bloque
      let etiqueta;
      {
        etiqueta = 'Café';
      }
      console.log('Etiqueta:', etiqueta);
    </script>
```

**Salida:**

```text
IVA: 0.19
Cantidad: 3
Total: 10
Etiqueta: Café
```

**Parte B.** `typeof Number.isInteger` → `'function'` (existe) y `typeof Number.funcionInventada` → `'undefined'` (no existe).

**Parte C.**

1. El IVA **cambia** de valor: una constante no se puede reasignar, así que se declara con `let`. Quitar la reasignación cambiaría el programa.
2. Con `let` hay zona muerta temporal: usar `total` antes de declararla da `ReferenceError`. Con `var`, la declaración se eleva y mostraría `Total: undefined`.
3. La Parte B es el paso 2 de la estrategia: **detectar** si la característica existe antes de usarla (después de **consultar** la compatibilidad).

---

## 🟡 Intermedio 02 — Los cálculos de la tienda

**Parte A.** `2 + 3 * 4` → `14`; `(2 + 3) * 4` → `20`; `10 % 4` → `2`; `2 ** 3 ** 2` → `512`; `'5' + 3 - 1` → `52`; `7 / 2` → `3.5`.

**Parte B — `js/intermedio-02.js`:**

```js
// Datos de la tienda (no los cambies)
const precio = 4.5;
const cantidad = 3;
const iva = 0.21;
const minimo = 10;

const subtotal = precio * cantidad;
const conIva = subtotal * (1 + iva);
const llegaAlMinimo = subtotal >= minimo;
const cantidadPar = cantidad % 2 === 0;
const hayStockYMinimo = cantidad > 0 && llegaAlMinimo;
const unidadesSobrantes = cantidad % 2;

console.log('Subtotal:', subtotal);
console.log('Con IVA:', conIva);
console.log('¿Llega al mínimo?', llegaAlMinimo);
console.log('¿Cantidad par?', cantidadPar);
console.log('¿Hay stock y llega al mínimo?', hayStockYMinimo);
console.log('Sobrantes:', unidadesSobrantes);
console.log('Cuadrado de la cantidad:', cantidad ** 2);
```

**Salida:**

```text
Subtotal: 13.5
Con IVA: 16.335
¿Llega al mínimo? true
¿Cantidad par? false
¿Hay stock y llega al mínimo? true
Sobrantes: 1
Cuadrado de la cantidad: 9
```

**Parte C.**

1. `'5' + 3` concatena y da `'53'`; después `'53' - 1` convierte el texto a número y resta: `52`.
2. Porque `===` compara valor **y** tipo, sin conversiones inesperadas.
3. Los decimales se guardan de forma aproximada y un cálculo con IVA puede arrastrar más cifras de las que importan: para mostrar un importe se redondea, por ejemplo con `.toFixed(2)`.

---

## 🟡 Intermedio 03 — Permisos y valores por defecto

**Parte A.** `6 & 3` → `2`; `6 | 3` → `7`; `6 ^ 3` → `5`; `1 << 4` → `16`; `-16 >> 2` → `-4`; `~6` → `-7`.

**Parte B, C y D — `js/intermedio-03.js`:**

```js
// Permisos de un usuario en un solo número (cada permiso es un bit):
//   leer = 0b001 (1)   escribir = 0b010 (2)   borrar = 0b100 (4)
let permisos = 0b001;

console.log('Al empezar:', permisos);

permisos |= 0b010;
console.log('Con escribir:', permisos);

permisos |= 0b100;
console.log('Con borrar:', permisos);

console.log('¿Puede escribir?', (permisos & 0b010) !== 0);

permisos &= ~0b010;
console.log('Sin escribir:', permisos);

console.log('En binario:', permisos.toString(2));

let nombre = '';
nombre ||= 'Cliente';
let descuento = 0;
descuento ??= 0.1;
let envio = null;
envio ??= 5;
console.log(nombre, descuento, envio);
console.log('Desplazado:', 5 << 2, -16 >> 2);
```

**Salida:**

```text
Al empezar: 1
Con escribir: 3
Con borrar: 7
¿Puede escribir? true
Sin escribir: 5
En binario: 101
Cliente 0 5
Desplazado: 20 -4
```

**Parte C — comprobación.** `a ??= 5` → `5`; `b ||= 7` → `7`; `c ??= 9` → `0`; `d &&= 'y'` → `'y'`.

**Parte E.**

1. Con `??=`, `descuento` queda en `0` porque `0` **no es** `null` ni `undefined`. Con `||=` pasaría a `0.1`, porque `0` es un valor falso.
2. Un `&` con el bit del permiso: `(permisos & 0b010) !== 0`.

---

## 🔴 Desafío 01 — La caja de la tienda

**Solución — `js/desafio.js`:**

```js
// DATOS (para el caso de prueba 1 no los cambies; para los otros casos, cambiá solo esto)
const precio = 4.5;
const cantidadTexto = '3';
const descuento = 0.1;
const envioGratisDesde = 20;

// Cálculos
const cantidad = Number(cantidadTexto);
const datosValidos = Number.isFinite(cantidad);
const subtotal = precio * cantidad;
const ahorro = subtotal * descuento;
const total = subtotal - ahorro;
const envioGratis = total >= envioGratisDesde;
const precioPorUnidad = total / cantidad;
const vecesElAhorro = subtotal / ahorro;

// Salida
console.log('Datos válidos:', datosValidos);
console.log('Subtotal:', subtotal.toFixed(2));
console.log('Ahorro:', ahorro.toFixed(2));
console.log('Total:', total.toFixed(2));
console.log('Envío gratis:', envioGratis);
console.log('Precio por unidad:', precioPorUnidad.toFixed(2));
console.log('Veces que cabe el ahorro en el subtotal:', vecesElAhorro);
console.log(`Aroma: ${cantidadTexto} x ${precio} = ${total.toFixed(2)}`);
```

**Casos de prueba comprobados** (las líneas completas de cada salida):

**Caso 1** (`precio = 4.5`, `cantidadTexto = '3'`, `descuento = 0.1`):

```text
Datos válidos: true
Subtotal: 13.50
Ahorro: 1.35
Total: 12.15
Envío gratis: false
Precio por unidad: 4.05
Veces que cabe el ahorro en el subtotal: 10
Aroma: 3 x 4.5 = 12.15
```

**Caso 2** (`precio = 19.99`, `cantidadTexto = '3'`, `descuento = 0.1`):

```text
Datos válidos: true
Subtotal: 59.97
Ahorro: 6.00
Total: 53.97
Envío gratis: true
Precio por unidad: 17.99
Veces que cabe el ahorro en el subtotal: 10
Aroma: 3 x 19.99 = 53.97
```

**Caso 3** (`precio = 4.5`, `cantidadTexto = 'abc'`, `descuento = 0.1`):

```text
Datos válidos: false
Subtotal: NaN
Ahorro: NaN
Total: NaN
Envío gratis: false
Precio por unidad: NaN
Veces que cabe el ahorro en el subtotal: NaN
Aroma: abc x 4.5 = NaN
```

**Caso 4** (`precio = 4.5`, `cantidadTexto = '0'`, `descuento = 0.1`):

```text
Datos válidos: true
Subtotal: 0.00
Ahorro: 0.00
Total: 0.00
Envío gratis: false
Precio por unidad: NaN
Veces que cabe el ahorro en el subtotal: NaN
Aroma: 0 x 4.5 = 0.00
```

**Caso 5** (`precio = 4.5`, `cantidadTexto = '10'`, `descuento = 0.1`):

```text
Datos válidos: true
Subtotal: 45.00
Ahorro: 4.50
Total: 40.50
Envío gratis: true
Precio por unidad: 4.05
Veces que cabe el ahorro en el subtotal: 10
Aroma: 10 x 4.5 = 40.50
```

**Caso 6** (`precio = 4.5`, `cantidadTexto = '3'`, `descuento = 0`):

```text
Datos válidos: true
Subtotal: 13.50
Ahorro: 0.00
Total: 13.50
Envío gratis: false
Precio por unidad: 4.50
Veces que cabe el ahorro en el subtotal: Infinity
Aroma: 3 x 4.5 = 13.50
```

**Notas de corrección.**

- `Number(cantidadTexto)` convierte el texto; con `'abc'` da `NaN` y `Number.isFinite` lo detecta.
- `0 / 0` da `NaN` (caso 4) y `13.5 / 0` da `Infinity` (caso 6): dividir entre cero no es un error.
- Los importes se redondean solo **al mostrar**; los cálculos usan los valores completos.
- Se acepta una solución con otros nombres de constantes mientras la salida coincida y no use estructuras fuera de alcance.
