# 📝 Quiz 01 — Condicionales, estructuras repetitivas y funciones

16 ítems: los **8 primeros** son de la **sesión 1** (estructuras de decisión, estructuras repetitivas, `break` y `continue`) y los **8 últimos**, de la **sesión 2** (funciones). Sin respuestas (ver `material/soluciones/soluciones-quiz.md` para la clave, material exclusivamente docente).

---

**1. [selección múltiple]** 🔘
¿Qué muestra este programa?

```js
const total = 15;
if (total >= 20) {
  console.log('A');
} else if (total >= 10) {
  console.log('B');
} else {
  console.log('C');
}
```

A. `A`
B. `B`
C. `C`
D. `B` y `C`

*RA: RA-1* · *Sesión: 1*

---

**2. [selección múltiple]** 🔘
¿Cuál de estos valores cuenta como **falso** dentro de la condición de un `if`?

A. `'false'` (un texto)
B. `0`
C. `-1`
D. `'0'` (un texto)

*RA: RA-1* · *Sesión: 1*

---

**3. [identificación de resultado]** 🔍
¿Qué se muestra?

```js
switch (2) {
  case 1:
    console.log('uno');
  case 2:
    console.log('dos');
  case 3:
    console.log('tres');
    break;
  default:
    console.log('otro');
}
```

A. Solo `dos`
B. `dos` y `tres`
C. `dos`, `tres` y `otro`
D. `uno`, `dos` y `tres`

*RA: RA-2* · *Sesión: 1*

---

**4. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```js
const edad = 17;
const acceso = edad >= 18 ? 'adulto' : 'menor';
console.log(acceso);
```

A. `adulto`
B. `menor`
C. `true`
D. `undefined`

*RA: RA-2* · *Sesión: 1*

---

**5. [identificación de resultado]** 🔍
¿Cuántas veces se ejecuta el cuerpo de este bucle?

```js
for (let i = 1; i <= 10; i += 3) {
  // cuerpo
}
```

A. 3
B. 4
C. 10
D. Infinitas

*RA: RA-3* · *Sesión: 1*

---

**6. [selección múltiple]** 🔘
¿Cuál de estos bucles es **infinito**?

A.

```js
let i = 0;
while (i < 3) { i++; }
```

B.

```js
let i = 0;
while (i < 3) { console.log(i); }
```

C.

```js
for (let i = 0; i < 3; i++) { }
```

D.

```js
let i = 5;
do { i++; } while (i < 3);
```

*RA: RA-3* · *Sesión: 1*

---

**7. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```js
for (let n = 1; n <= 5; n++) {
  if (n === 3) {
    break;
  }
  console.log(n);
}
```

A. `1` `2`
B. `1` `2` `3`
C. `1` `2` `4` `5`
D. `3`

*RA: RA-4* · *Sesión: 1*

---

**8. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```js
for (let n = 1; n <= 5; n++) {
  if (n === 3) {
    continue;
  }
  console.log(n);
}
```

A. `1` `2`
B. `1` `2` `3` `4` `5`
C. `1` `2` `4` `5`
D. `3`

*RA: RA-4* · *Sesión: 1*

---

**9. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```js
function doble(n) {
  return n * 2;
}
console.log(doble(4) + doble(1));
```

A. `5`
B. `10`
C. `82`
D. `undefined`

*RA: RA-5* · *Sesión: 2*

---

**10. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```js
function f(a) {
  const b = a + 1;
}
console.log(f(1));
```

A. `2`
B. `undefined`
C. Un error: `b` no está definida
D. `null`

*RA: RA-5* · *Sesión: 2*

---

**11. [selección múltiple]** 🔘
¿Cuál de estas líneas define una **función de expresión**?

A. `function total(a, b) { return a + b; }`
B. `const total = function (a, b) { return a + b; };`
C. `const total = (function (a, b) { return a + b; })(1, 2);`
D. `total(a, b) { return a + b; }`

*RA: RA-6* · *Sesión: 2*

---

**12. [identificación de resultado]** 🔍
¿Qué ocurre al ejecutar este código?

```js
console.log(despedir());
const despedir = function () {
  return 'chau';
};
```

A. Muestra `chau`
B. Muestra `undefined`
C. `ReferenceError`: no se puede acceder a `despedir` antes de inicializarla
D. `TypeError`: `despedir` no es una función

*RA: RA-6* · *Sesión: 2*

---

**13. [selección múltiple]** 🔘
¿Cuál es la forma correcta de escribir una función **autoejecutable**?

A. `function () { console.log(1); }();`
B. `(function () { console.log(1); })();`
C. `function () { console.log(1); };`
D. `(function () { console.log(1); });`

*RA: RA-7* · *Sesión: 2*

---

**14. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```js
const f = (a, b) => { a + b; };
console.log(f(1, 2));
```

A. `3`
B. `undefined`
C. `12`
D. Un error de sintaxis

*RA: RA-8* · *Sesión: 2*

---

**15. [selección múltiple]** 🔘
Necesitás una función corta que calcule el IVA de un precio (`precio * 1.21`), de una sola expresión. ¿Qué forma conviene más?

A. Una función autoejecutable
B. Una función declarativa con un comentario largo
C. Una función de flecha sin llaves
D. Un `switch`

*RA: RA-8* · *Sesión: 2*

---

**16. [problema breve]** ✍️
Escribí una función de flecha `conDescuento(total)` que devuelva `total * 0.9` si el total es `50` o más, y `total` sin cambios en caso contrario. Mostrá el resultado de llamarla con `60` y con `30`.

*RA: RA-9* · *Sesión: 2*
