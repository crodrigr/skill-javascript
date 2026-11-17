# 📝 Quiz 01 — Gestionamiento de promesas y async/await

20 ítems: los **10 primeros** son de la **sesión 1** (promesas, encadenado, combinadores y orden de ejecución) y los **10 últimos**, de la **sesión 2** (`async`/`await`, errores, secuencia y paralelo, y *top-level await*). Sin respuestas (ver `material/soluciones/soluciones-quiz.md` para la clave, material exclusivamente docente). Los temporizadores son de pocos milisegundos y lo que se pregunta es el **orden** de las salidas.

---

**1. [selección múltiple]** 🔘
¿En qué estado se encuentra una promesa recién creada, cuyo resultado todavía no llegó?

A. Asentada.
B. Rechazada.
C. Pendiente.
D. Cumplida.

*RA: RA-1* · *Sesión: 1*

---

**2. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```js
const p = new Promise((resolve, reject) => {
  resolve('primero');
  resolve('segundo');
  reject('error');
});

p.then((valor) => console.log(valor));
```

A. `primero`
B. `segundo`
C. `error`
D. `primero, segundo`

*RA: RA-1* · *Sesión: 1*

---

**3. [selección múltiple]** 🔘
¿Cuándo se ejecuta la función que recibe `new Promise` (el ejecutor)?

A. Después de que termine el código síncrono, como una microtarea.
B. Solo cuando se llama a `.then()`.
C. Cuando pasan 0 ms, como un temporizador.
D. De inmediato y de forma síncrona, al crear la promesa.

*RA: RA-2* · *Sesión: 1*

---

**4. [selección múltiple]** 🔘
¿Qué devuelve `.then()`?

A. Un arreglo con el resultado.
B. Una promesa nueva.
C. El valor de la promesa.
D. Siempre `undefined`.

*RA: RA-3* · *Sesión: 1*

---

**5. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```js
Promise.reject('motivo')
  .then(() => console.log('A'))
  .catch(() => console.log('B'))
  .finally(() => console.log('C'));
```

A. `B, A, C`
B. `A, B, C`
C. `A, C, B`
D. `B, C`

*RA: RA-3* · *Sesión: 1*

---

**6. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```js
function sumarUno(n) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(n + 1), 100);
  });
}

sumarUno(1)
  .then((v) => {
    sumarUno(v);
  })
  .then((v) => console.log('Paso 2 recibió: ' + v));
```

A. `Paso 2 recibió: undefined`
B. No muestra nada
C. `Paso 2 recibió: [object Promise]`
D. `Paso 2 recibió: 2`

*RA: RA-3* · *Sesión: 1*

---

**7. [selección múltiple]** 🔘
Tres consultas independientes tardan 300, 500 y 700 ms. Con `Promise.all`, ¿cuánto tarda en total si todas se cumplen?

A. 1500 ms (la suma).
B. 500 ms (el promedio).
C. 700 ms (la más lenta).
D. 300 ms (la más rápida).

*RA: RA-4* · *Sesión: 1*

---

**8. [selección múltiple]** 🔘
Querés mostrar el resultado de cada tarea aunque alguna falle. ¿Qué método conviene?

A. `Promise.race`
B. `Promise.allSettled`
C. `Promise.resolve`
D. `Promise.all`

*RA: RA-4* · *Sesión: 1*

---

**9. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```js
console.log('1');
setTimeout(() => console.log('2'), 0);
Promise.resolve().then(() => console.log('3'));
console.log('4');
```

A. `1, 3, 4, 2`
B. `1, 3, 2, 4`
C. `1, 2, 3, 4`
D. `1, 4, 3, 2`

*RA: RA-5* · *Sesión: 1*

---

**10. [selección múltiple]** 🔘
Un bucle de trescientos millones de vueltas está dentro del ejecutor de `new Promise`. ¿Qué pasa con la página?

A. Se bloquea mientras corre el bucle, porque el ejecutor es síncrono.
B. Se bloquea solo cuando se llama a `.then()`.
C. No se bloquea, porque es una promesa.
D. El navegador lo ejecuta en otro hilo.

*RA: RA-5* · *Sesión: 1*

---

**11. [selección múltiple]** 🔘
¿Qué devuelve siempre una función declarada con `async`?

A. El valor que se escribe en `return`, sin más.
B. Una promesa.
C. Un objeto con las propiedades `then` y `catch` vacías.
D. `undefined`.

*RA: RA-6* · *Sesión: 2*

---

**12. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```js
function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function atender() {
  console.log('1');
  await esperar(100);
  console.log('2');
}

atender();
console.log('3');
```

A. `1, 2, 3`
B. `3, 1, 2`
C. `1, 3, 2`
D. `2, 1, 3`

*RA: RA-6* · *Sesión: 2*

---

**13. [selección múltiple]** 🔘
¿Qué pausa `await`?

A. Solo la función `async` que lo contiene.
B. Solo los temporizadores.
C. Todo el programa, incluida la página.
D. El navegador, hasta que cierre la pestaña.

*RA: RA-6* · *Sesión: 2*

---

**14. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```js
async function probar() {
  try {
    await Promise.reject('falló');
  } catch (motivo) {
    console.log('❌ ' + motivo);
  } finally {
    console.log('fin');
  }
}

probar();
```

A. `fin, ❌ falló`
B. `fin`
C. `❌ falló`
D. `❌ falló, fin`

*RA: RA-7* · *Sesión: 2*

---

**15. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```js
async function calcular() {
  return 5;
}

calcular().then((valor) => console.log('Resultado: ' + valor));
```

A. `Promise`
B. `Resultado: 5`
C. `5`
D. `Resultado: undefined`

*RA: RA-7* · *Sesión: 2*

---

**16. [selección múltiple]** 🔘
Tres tareas **independientes** tardan 200, 300 y 400 ms. ¿Cómo conviene esperarlas para tardar lo menos posible?

A. Con tres `forEach` anidados.
B. Con un `setInterval`.
C. Con `Promise.all` y un solo `await`.
D. Con tres `await` seguidos.

*RA: RA-9* · *Sesión: 2*

---

**17. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```js
function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  [1, 2].forEach(async (n) => {
    await esperar(100);
    console.log('Procesado ' + n);
  });
  console.log('fin');
}

main();
```

A. `fin, Procesado 1, Procesado 2`
B. `Procesado 2, Procesado 1, fin`
C. `Procesado 1, Procesado 2, fin`
D. `fin`

*RA: RA-9* · *Sesión: 2*

---

**18. [selección múltiple]** 🔘
¿Dónde se puede usar `await` **fuera de una función**?

A. En cualquier `<script>`.
B. En el nivel superior de un `<script type="module">`.
C. En ninguna parte: siempre hace falta una función.
D. Solo dentro de `try`.

*RA: RA-8* · *Sesión: 2*

---

**19. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```js
async function fallar() {
  throw new Error('Sin stock');
}

fallar().catch((error) => console.log('Atendido: ' + error.message));
```

A. No muestra nada
B. `Uncaught Error: Sin stock`
C. `Atendido: Sin stock`
D. `Sin stock`

*RA: RA-7* · *Sesión: 2*

---

**20. [problema breve]** ✍️
Escribí una función `esperar(ms)` que devuelva una promesa que se cumple después de `ms` milisegundos. Luego escribí una función `async` `avisar()` que muestre `Preparando`, espere 300 ms con `await`, muestre `Listo` y devuelva el texto `Entregado`; y usala con `.then()` para mostrar el texto devuelto.

*RA: RA-6, RA-9* · *Sesión: 2*
