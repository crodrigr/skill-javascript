# 📝 Quiz 01 — Introducción a JavaScript, operadores, números y cadenas

16 ítems: los **8 primeros** son de la **sesión 1** (JavaScript, consola, ejecución, ECMAScript, tipos y variables) y los **8 últimos**, de la **sesión 2** (operadores, números y cadenas). Sin respuestas (ver `material/soluciones/soluciones-quiz.md` para la clave, material exclusivamente docente).

---

**1. [selección múltiple]** 🔘
¿Cuál de estas afirmaciones describe mejor el papel de JavaScript en una página web?

A. Define la estructura y el contenido de la página
B. Define los colores y la tipografía
C. Permite calcular, decidir y reaccionar: el comportamiento
D. Guarda las imágenes de la página

*RA: RA-1* · *Sesión: 1*

---

**2. [identificación de resultado]** 🔍
En la consola escribís `console.log('a')`. Además de imprimir `a`, ¿qué resultado devuelve la consola?

A. `'a'`
B. `a`
C. `undefined`
D. `null`

*RA: RA-2* · *Sesión: 1*

---

**3. [selección múltiple]** 🔘
Un `<script>` en línea está en el `<head>` y contiene `document.getElementById('titulo')`, pero el `<h1 id="titulo">` está en el `<body>`. ¿Qué devuelve esa línea?

A. El texto del título
B. `undefined`
C. `null`, porque el elemento todavía no existe
D. Un error de sintaxis

*RA: RA-3* · *Sesión: 1*

---

**4. [selección múltiple]** 🔘
¿Qué es ECMAScript?

A. Un navegador
B. La especificación (el estándar) en la que se basa JavaScript
C. Un editor de código
D. Una versión de HTML

*RA: RA-4* · *Sesión: 1*

---

**5. [identificación de resultado]** 🔍
¿Qué devuelve `typeof null`?

A. `'null'`
B. `'undefined'`
C. `'object'`
D. `'number'`

*RA: RA-5* · *Sesión: 1*

---

**6. [selección múltiple]** 🔘
¿Cuál de estos fragmentos muestra `undefined` (y no un error) al usar la variable **antes** de declararla?

A. `console.log(a); var a = 1;`
B. `{ console.log(b); let b = 1; }`
C. `{ console.log(c); const c = 1; }`
D. Ninguno

*RA: RA-6* · *Sesión: 1*

---

**7. [selección múltiple]** 🔘
Se ejecutan estas tres líneas en una consola nueva. ¿Qué ocurre?

```js
const t = { n: 1 };
t.n = 2;
t = {};
```

A. Las tres funcionan
B. La segunda línea da error
C. La tercera línea da `TypeError`: no se puede reasignar la constante
D. La primera línea da error

*RA: RA-6* · *Sesión: 1*

---

**8. [corrección de errores]** 🛠️
Este código tiene **tres** errores de declaración. Encontralos y escribí el código corregido.

```js
const total = 10;
total = total + 5;
let total = 20;
console.log(subtotal);
let subtotal = 3;
```

*RA: RA-6* · *Sesión: 1*

---

**9. [identificación de resultado]** 🔍
¿Cuánto vale `2 + 3 * 4 ** 2`?

A. `80`
B. `50`
C. `98`
D. `32`

*RA: RA-7* · *Sesión: 2*

---

**10. [identificación de resultado]** 🔍
¿Cuánto vale `x` al final?

```js
let x = 10;
x -= 3;
x *= 2;
```

A. `14`
B. `7`
C. `20`
D. `17`

*RA: RA-7* · *Sesión: 2*

---

**11. [identificación de resultado]** 🔍
¿Cuánto vale `6 & 3` (en binario, `110 & 011`)?

A. `0`
B. `2`
C. `3`
D. `7`

*RA: RA-7* · *Sesión: 2*

---

**12. [selección múltiple]** 🔘
¿Cuál de estas comparaciones da `false`?

A. `5 == '5'`
B. `null == undefined`
C. `0 === false`
D. `'a' < 'b'`

*RA: RA-7* · *Sesión: 2*

---

**13. [identificación de resultado]** 🔍
¿Qué devuelve `0 || 'a' && 'b'`?

A. `0`
B. `'a'`
C. `'b'`
D. `false`

*RA: RA-7* · *Sesión: 2*

---

**14. [problema breve]** ✍️
`0.1 + 0.2 === 0.3` da `false`. Explicá por qué y escribí una forma de mostrar el resultado de `0.1 + 0.2` con dos decimales.

*RA: RA-8* · *Sesión: 2*

---

**15. [identificación de resultado]** 🔍
¿Qué devuelve `-5 / 0`?

A. Un error: no se puede dividir entre cero
B. `NaN`
C. `-Infinity`
D. `0`

*RA: RA-8* · *Sesión: 2*

---

**16. [problema breve]** ✍️
¿Qué valor da esta expresión y por qué?

```js
'Aroma'[1] + 'Aroma'.length
```

*RA: RA-9* · *Sesión: 2*
