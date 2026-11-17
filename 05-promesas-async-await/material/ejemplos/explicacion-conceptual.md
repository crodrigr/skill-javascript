# 📚 Explicación conceptual — Gestionamiento de promesas y async/await

En la Clase 04 aprendiste a manejar tareas asíncronas con callbacks, y viste que encadenar varios pasos termina en una pirámide difícil de leer. En este módulo conocés las **promesas** —objetos que representan «un resultado que llegará»— y la sintaxis **`async`/`await`**, que permite escribir código asíncrono **de arriba hacia abajo**, como si fuera síncrono. Los ejemplos siguen con la tienda ficticia **«Aroma»** y con el mismo flujo del pedido (validar, cobrar, preparar y entregar), ahora con funciones que **devuelven promesas**.

La clase se dicta en **dos sesiones**: la **sesión 1** cubre los bloques 1 y 2 (promesas y si son no bloqueantes) y la **sesión 2**, los bloques 3 a 6 (`async`/`await`, su combinación con `.then()`, *top-level await* y la asincronía con `async`/`await`).

Resultados de aprendizaje de la clase:

- **RA-1**: explicar qué es una promesa y describir sus estados.
- **RA-2**: crear promesas con `new Promise` y funciones que devuelven promesas.
- **RA-3**: consumir promesas con `.then()`, `.catch()` y `.finally()`, y encadenarlas.
- **RA-4**: combinar promesas con `Promise.all`, `race`, `allSettled` y `any`.
- **RA-5**: explicar si las promesas son no bloqueantes y predecir el orden con microtareas.
- **RA-6**: escribir funciones `async` y esperar promesas con `await`.
- **RA-7**: atender errores con `try`/`catch`/`finally` y combinar `async`/`await` con `.then()`.
- **RA-8**: usar *top-level await* en un módulo.
- **RA-9**: convertir un flujo de callbacks en promesas y en `async`/`await`, en secuencia o en paralelo.

## 🗒️ Glosario

| Término | Equivalente |
|---|---|
| *promise* | promesa: un objeto que representa el resultado futuro de una tarea asíncrona |
| *pending* / *fulfilled* / *rejected* | pendiente / cumplida / rechazada |
| *settled* | asentada (cumplida o rechazada) |
| *executor* | ejecutor: la función que recibe `new Promise` |
| *microtask* | microtarea (cola de mayor prioridad que la de tareas) |
| *async function* | función asíncrona: siempre devuelve una promesa |
| *await* | esperar el resultado de una promesa dentro de una función `async` |
| *top-level await* | `await` en el nivel superior de un módulo |
| *module* | módulo: un script con `type="module"` |

> 📌 **Origen de la información.** El orden de las salidas de **todos** los ejemplos se obtuvo **ejecutando el código en el navegador** (Chrome) y contrastándolo con otro motor (Node.js) cuando no depende del navegador. Las descripciones siguen la terminología de MDN Web Docs y de la especificación de ECMAScript. Los **tiempos son aproximados**; lo que importa es el **orden**. Los **mensajes de error** aparecen en **inglés**, porque así los entrega el navegador; el texto los traduce.
>
> 👀 **La consola real y las promesas.** Si escribís una promesa en la consola de DevTools, muestra su estado (`Promise {<pending>}`, `Promise {<fulfilled>: …}`). Los ejemplos de este módulo **no imprimen promesas**: observamos el estado con `.then()`, `.catch()` y `.finally()`.
>
> 🚫 **Lo que queda para más adelante.** No usamos `fetch` ni la red (las tareas son funciones simuladas con `setTimeout`), clases, generadores, `import`/`export` ni `map`/`reduce`.

---

## 🤝 ¿Qué son las promesas?

### 🧭 1 · ¿Qué son las promesas?

*Resultados de aprendizaje: RA-1*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 01 — Pendiente, cumplida o rechazada](01-estados-de-una-promesa.md): una promesa pendiente que se cumple o se rechaza
> - [Ejemplo 04 — Una función que devuelve una promesa](04-funcion-que-devuelve-promesa.md): una función que devuelve una promesa
> - [Ejemplo 07 — Cuatro pasos en una cadena plana](07-encadenar-then.md): los cuatro pasos del pedido encadenados

![Una promesa empieza pendiente. Si se llama a resolve con un valor, pasa a cumplida y se ejecuta el then. Si se llama a reject con un motivo, pasa a rechazada y se ejecuta el catch. El finally se ejecuta en los dos casos. El cambio ocurre una sola vez: una promesa cumplida o rechazada no vuelve a cambiar.](../imagenes/estados-de-una-promesa.svg)

#### 🌍 Contexto

En la Clase 04, cada paso del pedido recibía un callback («cuando termines, llamá a esta función»). Con varios pasos, el código se anidaba. Una promesa propone otra idea: la función **devuelve un objeto** que representa el resultado futuro.

#### 💡 Concepto

Una **promesa** (*promise*) es un objeto que representa el resultado **futuro** de una tarea asíncrona: todavía no está, pero estará (con un valor) o fallará (con un motivo).

#### 📖 Explicación

- **La promesa «es» el resultado que llegará:** se puede guardar, pasar a otra función o combinar con otras.
- **Quien la recibe decide qué hacer** con `.then()` (si sale bien) y `.catch()` (si sale mal), sin pasar callbacks a la función que la crea.
- **Resuelve el problema de la pirámide:** los pasos se encadenan en una lista plana (Ejemplo 07).
- **Está en el lenguaje:** `Promise` forma parte de JavaScript; no hay que instalar nada.
- **Lo que viene después:** `async`/`await` (bloque 3) es una forma más cómoda de escribir sobre promesas.

### 🧭 1.1 · Estados de la promesa

*Resultados de aprendizaje: RA-1*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 01 — Pendiente, cumplida o rechazada](01-estados-de-una-promesa.md): pendiente, cumplida y rechazada, observadas con `.then` y `.catch`
> - [Ejemplo 03 — Solo vale la primera vez](03-resolve-y-reject-una-vez.md): solo vale la primera llamada a `resolve` o `reject`

#### 🌍 Contexto

Una promesa no es «con resultado» o «sin resultado»: tiene tres situaciones posibles, y solo una de ellas puede ser definitiva.

#### 💡 Concepto

Una promesa está **pendiente** (*pending*) al crearse y pasa **una sola vez** a **cumplida** (*fulfilled*, con un valor) o **rechazada** (*rejected*, con un motivo). Cumplida o rechazada se dice **asentada** (*settled*).

#### 📖 Explicación

- **Pendiente:** todavía no hay resultado.
- **Cumplida:** la tarea salió bien y la promesa tiene un valor.
- **Rechazada:** la tarea falló y la promesa tiene un motivo.
- **Una sola vez:** una promesa asentada **no cambia**; las llamadas posteriores a `resolve` o `reject` se ignoran (Ejemplo 03).
- **Cómo observarlos:** `.then()` se ejecuta al cumplirse, `.catch()` al rechazarse y `.finally()` en ambos casos.

### 🧭 1.2 · Declaración de promesas

*Resultados de aprendizaje: RA-2*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 02 — Declarar una promesa con new Promise](02-new-promise.md): `new Promise` con `resolve` y `reject`
> - [Ejemplo 04 — Una función que devuelve una promesa](04-funcion-que-devuelve-promesa.md): `validar(pedido)` devuelve una promesa
> - [Ejemplo 03 — Solo vale la primera vez](03-resolve-y-reject-una-vez.md): `resolve`/`reject` una sola vez

#### 🌍 Contexto

Para tener una promesa hay que crearla: o la devuelve una función ya hecha, o la escribís vos con `new Promise`.

#### 💡 Concepto

`new Promise((resolve, reject) => { … })` crea una promesa; la función que recibe (el **ejecutor**) se ejecuta **de inmediato** y llama a `resolve(valor)` para cumplirla o a `reject(motivo)` para rechazarla.

#### 📖 Explicación

- **El ejecutor es síncrono:** corre en el acto, antes de la línea que sigue (Ejemplo 02).
- **Se usa para envolver callbacks:** por ejemplo, un `setTimeout` que llama a `resolve` cuando pasa el tiempo (Ejemplo 04).
- **Hacé `return` después de `resolve` o `reject`** para no seguir ejecutando el ejecutor por error.
- **Funciones que devuelven promesas:** `validar`, `cobrar`, `preparar` y `entregar` son el patrón del módulo.
- **Atajos:** `Promise.resolve(valor)` y `Promise.reject(motivo)` crean una promesa ya asentada; se usan poco en esta clase.

### 🧭 1.3 · Ejecutar la promesa

*Resultados de aprendizaje: RA-3*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 05 — then, catch y finally](05-then-catch-finally.md): `.then`, `.catch` y `.finally`
> - [Ejemplo 06 — Un rechazo que nadie atiende](06-rechazo-sin-atender.md): un rechazo sin atender
> - [Ejemplo 07 — Cuatro pasos en una cadena plana](07-encadenar-then.md): la cadena plana con un solo `.catch`
> - [Ejemplo 08 — El return olvidado](08-olvidar-return.md): el `return` olvidado

![Cinco pasos en fila: validar, luego cobrar, preparar, entregar y terminar, cada uno con un then que devuelve una promesa para el paso siguiente. Debajo, un único catch al final recibe el motivo si cualquiera de los pasos se rechaza, y en ese caso los pasos siguientes no se ejecutan.](../imagenes/cadena-then-catch.svg)

#### 🌍 Contexto

Una promesa se crea y se «ejecuta» (el ejecutor corre), pero su resultado se **consume** con métodos que registran qué hacer cuando se asiente.

#### 💡 Concepto

`.then(alCumplir)`, `.catch(alRechazar)` y `.finally(alTerminar)` consumen una promesa; **cada uno devuelve una promesa nueva**, lo que permite **encadenarlos**.

#### 📖 Explicación

- **`.then()`** recibe el valor; **`.catch()`**, el motivo; **`.finally()`** corre siempre y no recibe argumentos (Ejemplo 05).
- **Encadenar:** `validar(p).then(cobrar).then(preparar)…`: cada paso espera al anterior (Ejemplo 07).
- **Un solo `.catch()` al final** atiende el rechazo de cualquier paso; los siguientes no se ejecutan.
- **Devolvé con `return`** la promesa del paso siguiente; sin `return`, la cadena no espera y el paso recibe `undefined` (Ejemplo 08).
- **Sin `.catch()`,** un rechazo queda sin atender y el navegador avisa con `Uncaught (in promise)` (Ejemplo 06).
- **No anides `.then()` dentro de `.then()`:** repite la pirámide de la Clase 04.

### 🧭 1.4 · Métodos de las promesas

*Resultados de aprendizaje: RA-4*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 09 — Promise.all: todas juntas](09-promise-all.md): `Promise.all`: todas, en paralelo
> - [Ejemplo 10 — Promise.race y Promise.any](10-promise-race-y-any.md): `Promise.race` y `Promise.any`
> - [Ejemplo 11 — Promise.allSettled: éxitos y fallos](11-promise-allsettled.md): `Promise.allSettled`: un informe completo

![Un mismo caso con tres tareas: el precio se cumple a los 300 milisegundos, el stock falla a los 500 y el proveedor se cumple a los 700. Promise.all se rechaza a los 500 con Falló stock. Promise.race se cumple a los 300 con precio ok. Promise.allSettled se cumple a los 700 con el estado de las tres. Promise.any se cumple a los 300 con precio ok.](../imagenes/combinadores-de-promesas.svg)

#### 🌍 Contexto

A veces hay que lanzar varias tareas independientes a la vez y decidir cuándo seguir: cuando terminen todas, cuando termine una, o cuando se cumpla alguna.

#### 💡 Concepto

Los **combinadores** reciben una lista de promesas y devuelven **una promesa**: `Promise.all`, `Promise.race`, `Promise.allSettled` y `Promise.any`.

#### 📖 Explicación

- **`Promise.all`:** se cumple con la lista de valores (en el orden de la lista) cuando **todas** se cumplen; se rechaza **de inmediato** si una se rechaza.
- **`Promise.race`:** copia el resultado de la **primera** que se asienta (éxito o error).
- **`Promise.allSettled`:** espera a **todas** y entrega una lista con el estado de cada una; nunca se rechaza.
- **`Promise.any`:** se cumple con la **primera que se cumple** e ignora los errores; se rechaza solo si todas fallan.
- **Tiempo total:** las tareas corren a la vez, así que `all` tarda lo que la más lenta.

**Cómo elegir:**

| Necesitás… | Usá |
|---|---|
| Todos los resultados, y si falla uno, parar | `Promise.all` |
| La primera respuesta, buena o mala | `Promise.race` |
| Un informe de todas, con éxitos y fallos | `Promise.allSettled` |
| La primera que funcione | `Promise.any` |

---

## 🚦 ¿Las promesas son código no bloqueante?

### 🧭 2 · ¿Las promesas son código no bloqueante?

*Resultados de aprendizaje: RA-5*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 12 — Síncrono, microtarea y temporizador](12-promesas-y-microtareas.md): síncrono → microtarea → temporizador
> - [Ejemplo 13 — Una promesa no impide bloquear](13-bucle-largo-en-una-promesa.md): un bucle largo dentro de una promesa sí bloquea

![Tres zonas. Primero se ejecuta el código síncrono en la pila: Inicio, el ejecutor y Fin. Después se vacía la cola de microtareas, donde esperan los then y los await: sale el then. Por último, la cola de tareas, donde esperan los temporizadores: sale el setTimeout de 0 milisegundos. El orden de salida es 1, 2, 3, 4 y 5.](../imagenes/pila-microtareas-y-cola.svg)

#### 🌍 Contexto

Las promesas nacieron para manejar esperas sin bloquear. Pero conviene separar qué parte espera y qué parte se ejecuta en el hilo.

#### 💡 Concepto

La **espera** de una promesa **no bloquea** el hilo; el **ejecutor** y los `.then()` sí ocupan el hilo mientras se ejecutan. Los `.then()` esperan en la **cola de microtareas**, que se atiende **antes** que la de tareas (temporizadores).

#### 📖 Explicación

- **El ejecutor es síncrono:** si tiene un bucle largo, bloquea (Ejemplo 13).
- **Los `.then()`, `.catch()` y `.finally()` van a la cola de microtareas** y se ejecutan apenas termina el código síncrono.
- **Orden:** código síncrono → microtareas → tareas (temporizadores, eventos) (Ejemplo 12).
- **`await` también usa microtareas:** cuando la promesa se cumple, la función se reanuda como una microtarea.
- **La espera de una promesa de temporizador o de red no bloquea,** porque la gestiona el navegador.
- **Es un modelo para razonar,** no el detalle de cada navegador.

---

## ⏳ ¿Qué es Async/Await?

### 🧭 3 · ¿Qué es Async/Await?

*Resultados de aprendizaje: RA-6, RA-7*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 14 — Una función async devuelve una promesa](14-funcion-async.md): una función `async` devuelve una promesa
> - [Ejemplo 15 — await pausa la función, no el hilo](15-await-pausa-la-funcion.md): `await` pausa la función y no el hilo
> - [Ejemplo 16 — Atender errores con try, catch y finally](16-try-catch-finally.md): `try`/`catch`/`finally` con `await`

![Dos carriles. En el carril de la función atender, el mensaje 2 se escribe, la función se pausa en el await durante 500 milisegundos y se reanuda para escribir el mensaje 4. En el carril del resto del programa, durante esa pausa el hilo está libre y escribe el mensaje 3. La pausa es de la función, no del hilo.](../imagenes/await-pausa-la-funcion.svg)

#### 🌍 Contexto

Encadenar `.then()` funciona, pero el código sigue leyéndose «de a pedazos». `async`/`await` permite escribirlo en orden.

#### 💡 Concepto

**`async`** delante de una función hace que **devuelva siempre una promesa**; **`await`** delante de una promesa **espera su resultado** dentro de esa función. Los errores se atienden con **`try`/`catch`/`finally`**.

#### 📖 Explicación

- **`async function`:** `return` cumple la promesa que devuelve y `throw` la rechaza (Ejemplo 14).
- **`await`:** pausa **la función**, no el hilo; el código que sigue a la llamada se ejecuta mientras tanto (Ejemplo 15).
- **Solo dentro de funciones `async`** (o en el nivel superior de un módulo, bloque 5).
- **Errores:** si la promesa se rechaza, `await` lanza el motivo y se atiende con `try`/`catch`; `finally` corre siempre (Ejemplo 16).
- **Es azúcar sintáctico:** por dentro sigue siendo `Promise`; `await` equivale a un `.then()` y `catch`, a un `.catch()`.
- **Un error no atendido** en una función `async` rechaza su promesa; si nadie la atiende, aparece `Uncaught (in promise)`.

---

## 🤝 Uso del Async/await con .then()

### 🧭 4 · Uso del Async/await con .then()

*Resultados de aprendizaje: RA-7*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 17 — async y .then() juntos](17-async-con-then.md): `.then`/`.catch` sobre una función `async`

#### 🌍 Contexto

No hace falta elegir un bando: una función `async` devuelve una promesa, así que se puede consumir con `.then()`.

#### 💡 Concepto

`async`/`await` y `.then()` son **dos formas de usar la misma promesa** y se pueden combinar.

#### 📖 Explicación

- **Una función `async` se consume con `.then()`, `.catch()` y `.finally()`** como cualquier promesa (Ejemplo 17).
- **Un `.then()` puede devolver una promesa,** y una función `async` puede esperar con `await` el resultado de una cadena.
- **Cuándo conviene cada uno:** `await` dentro de funciones, para leer de arriba hacia abajo; `.then()` en el nivel superior de un script clásico, donde no se puede usar `await`.
- **Lo importante** es no mezclar sin necesidad: elegí un estilo por función.

---

## 🔝 Top-level await

### 🧭 5 · Top-level await

*Resultados de aprendizaje: RA-8*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 21 — await en el nivel superior de un módulo](21-top-level-await.md): `await` en un módulo y el `SyntaxError` en un script clásico

#### 🌍 Contexto

Hasta ahora, `await` vivía dentro de funciones `async`. A veces estorba envolver un script pequeño en una función solo para esperar una promesa.

#### 💡 Concepto

El ***top-level await*** permite usar `await` **fuera de una función**, en el nivel superior de un **módulo** (`<script type="module">`).

#### 📖 Explicación

- **Solo en módulos:** en un script clásico, `await` fuera de una función da `SyntaxError: await is only valid in async functions and the top level bodies of modules` y **no se ejecuta ninguna línea** (Ejemplo 21).
- **El módulo espera:** las líneas que siguen al `await` no se ejecutan hasta que la promesa se cumple.
- **Cómo abrirlo:** los navegadores bloquean los módulos abiertos desde el disco (`file://`); hay que **servir la carpeta con un servidor local**, por ejemplo con la extensión **Live Server** de VS Code.
- **Alcance:** es cómodo para scripts pequeños y pruebas; los módulos tienen más reglas (`import`/`export`) que veremos más adelante.

---

## 🧩 Asincronía con async/await

### 🧭 6 · Asincronía con async/await

*Resultados de aprendizaje: RA-9*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 18 — El pedido con async/await](18-pedido-con-async-await.md): el flujo del pedido con `async`/`await`
> - [Ejemplo 19 — Uno tras otro o a la vez](19-secuencia-frente-a-paralelo.md): secuencia frente a paralelo
> - [Ejemplo 20 — for…of espera; forEach no](20-for-of-y-foreach-con-await.md): `for…of` frente a `forEach`
> - [Ejemplo 22 — Varios pedidos a la vez](22-pedidos-completo.md): varios pedidos con `allSettled`

![Dos formas de consultar tres tareas de 300, 500 y 700 milisegundos. Con await uno tras otro, cada tarea empieza cuando termina la anterior y el total es la suma, 1500 milisegundos. Con Promise.all, las tres empiezan a la vez y el total es el de la más lenta, 700 milisegundos.](../imagenes/secuencia-frente-a-paralelo.svg)

![Tres columnas con el mismo flujo de validar, cobrar y preparar un pedido. Con callbacks, cada paso se anida dentro del anterior y el código baja en escalera. Con promesas, los pasos se encadenan con then en una lista plana y un catch al final. Con async y await, los pasos se escriben en orden dentro de una función con try y catch.](../imagenes/callbacks-promesas-y-async-await.svg)

#### 🌍 Contexto

Con `async`/`await` se puede escribir el flujo completo del pedido en orden. Pero hay que decidir **cuándo esperar** y cuándo lanzar tareas a la vez.

#### 💡 Concepto

Con `async`/`await`, las tareas se ejecutan **en secuencia** (un `await` tras otro, tarda la suma) o **en paralelo** (`Promise.all`, tarda la más lenta); un bucle `for…of` con `await` espera a cada elemento.

#### 📖 Explicación

- **El flujo del pedido:** `validar`, `cobrar`, `preparar` y `entregar` con `await` y un solo `try`/`catch` (Ejemplo 18).
- **Secuencia:** cuando un paso necesita el resultado del anterior. **Paralelo:** cuando son independientes (`Promise.all`) (Ejemplo 19).
- **`for…of` con `await`** espera a cada elemento; **`forEach` no espera** a las funciones `async` (Ejemplo 20).
- **Varios pedidos a la vez:** se lanzan sin `await`, se guardan las promesas y se esperan con `Promise.allSettled` para informar todo, aunque alguno falle (Ejemplo 22).
- **Las tres formas del mismo flujo:** callbacks (Clase 04), promesas y `async`/`await`: la misma salida, con menos anidamiento.
- **Lo que viene después:** con tareas reales (la red, con `fetch`) se usa exactamente este patrón; lo veremos más adelante.
