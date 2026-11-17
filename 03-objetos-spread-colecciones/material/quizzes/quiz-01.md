# 📝 Quiz 01 — Objetos, Spread, desestructuración y colecciones de datos

24 ítems: los **8 primeros** son de la **sesión 1** (objetos, métodos, acceso y `this`), los **8 siguientes**, de la **sesión 2** (JSON, desestructuración, *spread* y copias) y los **8 últimos**, de la **sesión 3** (colecciones, arreglos, `Set`, `Map` y `FormData`). Sin respuestas (ver `material/soluciones/soluciones-quiz.md` para la clave, material exclusivamente docente).

---

**1. [selección múltiple]** 🔘
¿Cuál de estas líneas declara un objeto con la notación literal?

A. `const p = { nombre: 'Café', precio: 4.5 };`
B. `const p = [nombre: 'Café', precio: 4.5];`
C. `const p = (nombre: 'Café', precio: 4.5);`
D. `const p = < nombre = 'Café', precio = 4.5 >;`

*RA: RA-1* · *Sesión: 1*

---

**2. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```js
const producto = { nombre: 'Café', stock: 12 };
delete producto.stock;
console.log('stock' in producto, producto.stock);
```

A. `true 12`
B. `true undefined`
C. `false null`
D. `false undefined`

*RA: RA-1* · *Sesión: 1*

---

**3. [selección múltiple]** 🔘
Una propiedad se llama `'país de origen'`. ¿Cómo se lee?

A. `producto.país de origen`
B. `producto.'país de origen'`
C. `producto['país de origen']`
D. `producto(país de origen)`

*RA: RA-2* · *Sesión: 1*

---

**4. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```js
const producto = { nombre: 'Café' };
console.log(producto.proveedor?.nombre);
```

A. Un `TypeError`
B. `undefined`
C. `null`
D. `Café`

*RA: RA-2* · *Sesión: 1*

---

**5. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```js
const cafe = {
  precio: 4.5,
  doble() { return this.precio * 2; }
};
console.log(cafe.doble());
```

A. `9`
B. `NaN`
C. `4.5`
D. `undefined`

*RA: RA-3* · *Sesión: 1*

---

**6. [identificación de resultado]** 🔍
¿Qué muestra la consola (script normal, sin modo estricto)?

```js
const cafe = {
  precio: 4.5,
  doble() { return this.precio * 2; }
};
const f = cafe.doble;
console.log(f());
```

A. `9`
B. `4.5`
C. Un error de sintaxis
D. `NaN`

*RA: RA-3* · *Sesión: 1*

---

**7. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```js
const a = { x: 1 };
const b = { x: 1 };
const c = a;
console.log(a === b, a === c);
```

A. `true true`
B. `true false`
C. `false true`
D. `false false`

*RA: RA-1* · *Sesión: 1*

---

**8. [selección múltiple]** 🔘
¿Cuál es el mejor tipo de función para un **método** de un objeto?

A. Una función de flecha, porque es más corta
B. Un método con la forma abreviada, `nombre() { ... }`
C. Una función autoejecutable
D. Cualquiera: `this` siempre es el objeto

*RA: RA-3* · *Sesión: 1*

---

**9. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```js
console.log(JSON.stringify({ a: 1, b: undefined, c: 'x' }));
```

A. `{"a":1,"c":"x"}`
B. `{"a":1,"b":null,"c":"x"}`
C. `{a: 1, c: 'x'}`
D. `undefined`

*RA: RA-4* · *Sesión: 2*

---

**10. [selección múltiple]** 🔘
¿Cuál de estas llamadas produce un `SyntaxError`?

A. `JSON.parse('{"a":1}')`
B. `JSON.parse('"hola"')`
C. `JSON.parse('[1,2]')`
D. `JSON.parse("{'a':1}")`

*RA: RA-4* · *Sesión: 2*

---

**11. [identificación de resultado]** 🔍
¿Qué valor tiene `copia.ratio`?

```js
const copia = JSON.parse(JSON.stringify({ ratio: NaN }));
console.log(copia.ratio);
```

A. `NaN`
B. `undefined`
C. `null`
D. `0`

*RA: RA-4* · *Sesión: 2*

---

**12. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```js
const { nombre, color = 'sin color' } = { nombre: 'Café' };
console.log(nombre, color);
```

A. `Café undefined`
B. `Café sin color`
C. `undefined sin color`
D. Un error

*RA: RA-5* · *Sesión: 2*

---

**13. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```js
const a = { x: 1, y: 2 };
const b = { y: 20 };
console.log({ ...a, ...b });
```

A. `{x: 1, y: 20}`
B. `{x: 1, y: 2}`
C. `{y: 20}`
D. `{x: 1, y: 2, y: 20}`

*RA: RA-5* · *Sesión: 2*

---

**14. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```js
const p = { cliente: { ciudad: 'Rosario' } };
const c = { ...p };
c.cliente.ciudad = 'Salta';
console.log(p.cliente.ciudad);
```

A. `Rosario`
B. Un error
C. `undefined`
D. `Salta`

*RA: RA-6* · *Sesión: 2*

---

**15. [identificación de resultado]** 🔍
¿Qué devuelve `Object.assign(destino, { b: 2 })`?

```js
const destino = { a: 1 };
const r = Object.assign(destino, { b: 2 });
console.log(r === destino);
```

A. `false`: devuelve una copia
B. `undefined`
C. `true`: devuelve el mismo objeto destino, modificado
D. Un error

*RA: RA-6* · *Sesión: 2*

---

**16. [selección múltiple]** 🔘
Tenés un pedido con un objeto cliente adentro y querés una copia que se pueda modificar sin afectar al original. ¿Qué conviene?

A. `const copia = pedido;`
B. `const copia = structuredClone(pedido);`
C. `const copia = { ...pedido };`
D. `const copia = Object.assign(pedido, {});`

*RA: RA-6* · *Sesión: 2*

---

**17. [selección múltiple]** 🔘
Necesitás saber **qué productos distintos** se vendieron en el día, sin importar cuántas veces ni en qué orden. ¿Qué colección conviene?

A. Un `Set`
B. Un objeto
C. Un arreglo
D. Un `Map`

*RA: RA-7* · *Sesión: 3*

---

**18. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```js
const lista = ['a', 'b'];
console.log(lista.push('c'), lista.pop());
```

A. `2 c`
B. `c 3`
C. `['a', 'b', 'c'] c`
D. `3 c`

*RA: RA-8* · *Sesión: 3*

---

**19. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```js
const x = ['a', 'b', 'c', 'd'];
const q = x.splice(1, 2);
console.log(q, x);
```

A. `['b', 'c'] ['a', 'b', 'c', 'd']`
B. `['a', 'd'] ['b', 'c']`
C. `['b', 'c'] ['a', 'd']`
D. `['b', 'c', 'd'] ['a']`

*RA: RA-8* · *Sesión: 3*

---

**20. [identificación de resultado]** 🔍
Con este arreglo, ¿qué muestra la consola?

```js
const productos = [
  { nombre: 'Café', precio: 4.5, stock: 12 },
  { nombre: 'Té', precio: 3.2, stock: 0 },
  { nombre: 'Galleta', precio: 1.8, stock: 40 }
];
console.log(productos.find(p => p.stock === 0).nombre, productos.filter(p => p.stock > 0).length);
```

A. `Té 3`
B. `Té 2`
C. `Café 2`
D. `undefined 2`

*RA: RA-9* · *Sesión: 3*

---

**21. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```js
console.log([10, 9, 1].sort());
```

A. `[1, 10, 9]`
B. `[1, 9, 10]`
C. `[10, 9, 1]`
D. `[9, 10, 1]`

*RA: RA-9* · *Sesión: 3*

---

**22. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```js
const s = new Set([1, 2, 2, 3]);
const m = new Map([['a', 1]]);
console.log(s.size, m.get('a'), m.get('b'));
```

A. `4 1 undefined`
B. `3 1 null`
C. `3 a undefined`
D. `3 1 undefined`

*RA: RA-10* · *Sesión: 3*

---

**23. [selección múltiple]** 🔘
Un formulario tiene `<input name="producto" value="Café">` y `<input value="sin nombre">`. Con `new FormData(formulario)` y `Object.fromEntries(...)`, ¿qué se obtiene?

A. `{}`
B. `{producto: 'Café', '': 'sin nombre'}`
C. `{producto: 'Café'}`
D. `{producto: 'Café', value: 'sin nombre'}`

*RA: RA-11* · *Sesión: 3*

---

**24. [problema breve]** ✍️
Dado `const ventas = ['Café', 'Té', 'Café'];`, escribí el código que cuente con un `Map` cuántas veces se vendió cada producto y mostrá el `Map`.

*RA: RA-12* · *Sesión: 3*
