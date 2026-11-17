# 📝 Quiz 01 — Asincronía y funciones callback

18 ítems: los **9 primeros** son de la **sesión 1** (asincronía, bloqueante o no bloqueante y modelo de ejecución) y los **9 últimos**, de la **sesión 2** (callbacks, temporizadores, eventos, «error primero» y encadenado). Sin respuestas (ver `material/soluciones/soluciones-quiz.md` para la clave, material exclusivamente docente). Los temporizadores son de pocos milisegundos y lo que se pregunta es el **orden** de las salidas.

---

**1. [selección múltiple]** 🔘
¿Cuál de estas frases describe una tarea **asíncrona**?

A. Se ejecuta siempre en menos de un milisegundo.
B. Se inicia y el programa sigue; su resultado llega después.
C. Solo se puede escribir con bucles.
D. Termina por completo antes de que empiece la instrucción siguiente.

*RA: RA-1* · *Sesión: 1*

---

**2. [selección múltiple]** 🔘
¿Qué significa que una operación sea **bloqueante**?

A. Que no se puede cancelar.
B. Que solo se ejecuta una vez.
C. Que falla siempre con un error.
D. Que mientras se ejecuta el programa no puede hacer nada más.

*RA: RA-2* · *Sesión: 1*

---

**3. [selección múltiple]** 🔘
¿Por qué JavaScript usa tareas asíncronas para las esperas?

A. Porque ejecuta el código en un solo hilo y, si esperara, la página se congelaría.
B. Porque así los programas se escriben con menos líneas.
C. Porque no tiene bucles.
D. Porque los navegadores no permiten funciones.

*RA: RA-3* · *Sesión: 1*

---

**4. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```js
console.log('A');
setTimeout(() => console.log('B'), 0);
console.log('C');
```

A. `C, A, B`
B. `A, B, C`
C. `A, C, B`
D. `B, A, C`

*RA: RA-4* · *Sesión: 1*

---

**5. [selección múltiple]** 🔘
Sobre el código de un programa JavaScript, ¿cuál afirmación es correcta?

A. Se ejecuta en el orden alfabético de las funciones.
B. Se ejecutan varias instrucciones a la vez, cada una en su hilo.
C. Solo se ejecuta en paralelo dentro de los bucles.
D. Se ejecuta una instrucción a la vez, en un solo hilo.

*RA: RA-3* · *Sesión: 1*

---

**6. [selección múltiple]** 🔘
¿Qué hace el **bucle de eventos**?

A. Convierte el código síncrono en asíncrono.
B. Cuando la pila está vacía, toma la primera tarea de la cola y la ejecuta.
C. Cancela los temporizadores que tardan mucho.
D. Repite siempre el mismo `for`.

*RA: RA-4* · *Sesión: 1*

---

**7. [identificación de resultado]** 🔍
¿Qué muestra la consola? (el bucle tarda un rato)

```js
console.log('1');
setTimeout(() => console.log('2'), 0);
for (let i = 0; i < 300000000; i++) { }
console.log('3');
```

A. `2, 1, 3`
B. `3, 1, 2`
C. `1, 3, 2`
D. `1, 2, 3`

*RA: RA-2* · *Sesión: 1*

---

**8. [selección múltiple]** 🔘
¿Cuál es un ejemplo de modelo **no bloqueante**?

A. El cajero toma el pedido, sigue con el próximo y avisa cuando está listo.
B. El cajero atiende un solo cliente por día.
C. El cajero apaga la caja mientras espera.
D. El cajero se queda mirando la máquina hasta que cada café está listo.

*RA: RA-2* · *Sesión: 1*

---

**9. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```js
console.log('a');
setTimeout(() => console.log('b'), 200);
setTimeout(() => {
  console.log('c');
  setTimeout(() => console.log('d'), 50);
}, 100);
console.log('e');
```

A. `a, b, c, d, e`
B. `a, e, d, c, b`
C. `a, e, b, c, d`
D. `a, e, c, d, b`

*RA: RA-4* · *Sesión: 1*

---

**10. [selección múltiple]** 🔘
¿Qué es un **callback**?

A. Un tipo de bucle.
B. Una función que se pasa como argumento a otra para que esta la llame después.
C. Un error que se produce al ejecutar un programa.
D. Un comentario especial del código.

*RA: RA-5* · *Sesión: 2*

---

**11. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```js
function avisar() {
  console.log('hola');
}

setTimeout(avisar(), 500);
console.log('fin');
```

A. `hola, fin`
B. `fin`
C. No muestra nada
D. `fin, hola`

*RA: RA-5* · *Sesión: 2*

---

**12. [selección múltiple]** 🔘
¿Cuál de estos callbacks es **síncrono**?

A. El de `setTimeout`.
B. El de un clic.
C. El de `forEach`.
D. El de `setInterval`.

*RA: RA-5* · *Sesión: 2*

---

**13. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```js
const id = setTimeout(() => console.log('A'), 100);
setTimeout(() => console.log('B'), 200);
clearTimeout(id);
```

A. `A`
B. `A, B`
C. No muestra nada
D. `B`

*RA: RA-6* · *Sesión: 2*

---

**14. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```js
let n = 0;
const id = setInterval(() => {
  n = n + 1;
  console.log(n);
  if (n === 3) {
    clearInterval(id);
  }
}, 100);
```

A. `1, 2, 3, 4`
B. `1, 2, 3`
C. `1, 1, 1`
D. `3, 2, 1`

*RA: RA-6* · *Sesión: 2*

---

**15. [selección múltiple]** 🔘
Con `boton.addEventListener('click', f)`, ¿cuándo se ejecuta `f`?

A. Solo una vez, a los 1000 ms.
B. Apenas se escribe esa línea.
C. Cada vez que ocurre un clic en el botón, no cuando se registra.
D. Nunca: `addEventListener` no ejecuta funciones.

*RA: RA-6* · *Sesión: 2*

---

**16. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```js
function dividir(a, b, alTerminar) {
  if (b === 0) {
    alTerminar('No se puede dividir por cero');
    return;
  }
  alTerminar(null, a / b);
}

function mostrar(error, resultado) {
  if (error !== null) {
    console.log('Error: ' + error);
    return;
  }
  console.log(resultado);
}

dividir(6, 0, mostrar);
dividir(6, 3, mostrar);
```

A. `Error: No se puede dividir por cero, 2`
B. `Error: No se puede dividir por cero`
C. `No se puede dividir por cero, 2`
D. `2, Error: No se puede dividir por cero`

*RA: RA-7* · *Sesión: 2*

---

**17. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```js
let resultado;

setTimeout(() => {
  resultado = 5;
  console.log('dentro ' + resultado);
}, 100);

console.log('fuera ' + resultado);
```

A. `fuera undefined`
B. `fuera undefined, dentro 5`
C. `dentro 5, fuera undefined`
D. `fuera 5, dentro 5`

*RA: RA-7* · *Sesión: 2*

---

**18. [problema breve]** ✍️
Escribí una función `preparar(pedido, alTerminar)` que espere 300 ms y después llame a `alTerminar(null, pedido)`. Luego escribí, **con funciones con nombre y sin anidar callbacks**, el flujo `validar → preparar` del pedido `{ numero: 7 }`: `alPreparar` debe mostrar `Pedido 7 preparado` y `fallar` debe mostrar `Error: …` si `error` no es `null`.

*RA: RA-8, RA-9* · *Sesión: 2*
