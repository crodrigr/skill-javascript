# 🤝 Promesas

Curso **JavaScript** · Clase 05 · **Sesión 1**

---

## 🎯 Objetivos de la sesión

- 🔹 Explicar qué es una promesa y sus tres estados.
- 🔹 Crear promesas y consumirlas con `.then()`, `.catch()` y `.finally()`.
- 🔹 Encadenar pasos y combinar promesas.
- 🔹 Predecir el orden con microtareas.

---

## 🔙 Del callback a la promesa

- En la Clase 04, cada paso recibía un **callback** y el código se anidaba.
- Una **promesa** es un objeto que representa **un resultado que llegará**.
- Se consume con `.then()` y `.catch()`.

---

## 🚦 Los tres estados

![Una promesa empieza pendiente. Si se llama a resolve con un valor, pasa a cumplida y se ejecuta el then. Si se llama a reject con un motivo, pasa a rechazada y se ejecuta el catch. El finally se ejecuta en los dos casos. El cambio ocurre una sola vez: una promesa cumplida o rechazada no vuelve a cambiar.](../imagenes/estados-de-una-promesa.svg)

- **Pendiente → cumplida** o **rechazada**, una sola vez.

---

## 🏗️ `new Promise`

```js
const promesa = new Promise((resolve, reject) => {
  resolve('Hay stock de café');
});
```

- El **ejecutor** corre **de inmediato**.
- `resolve(valor)` cumple; `reject(motivo)` rechaza.

---

## 📦 Una función que devuelve una promesa

```js
function validar(pedido) {
  return new Promise((resolve, reject) => { /* … */ });
}
```

- Quien la llama usa `.then()` y `.catch()`.
- Hacé `return` después de `resolve` o `reject`.

---

## 🔗 `then`, `catch` y `finally`

- `.then(valor)` → éxito. `.catch(motivo)` → error. `.finally()` → siempre.
- Sin `.catch()`, un rechazo queda **sin atender**: `Uncaught (in promise)`.

---

## 🪜 Encadenar

![Cinco pasos en fila: validar, luego cobrar, preparar, entregar y terminar, cada uno con un then que devuelve una promesa para el paso siguiente. Debajo, un único catch al final recibe el motivo si cualquiera de los pasos se rechaza, y en ese caso los pasos siguientes no se ejecutan.](../imagenes/cadena-then-catch.svg)

- Cada `.then()` devuelve una promesa nueva. **Un solo** `.catch()` al final.

---

## ⚠️ El `return` olvidado

- Sin `return`, el paso siguiente recibe `undefined` y **no espera**.
- Devolvé la promesa de la tarea que sigue.
- Evitá anidar `.then()` dentro de `.then()`.

---

## 🧰 Combinar promesas

![Un mismo caso con tres tareas: el precio se cumple a los 300 milisegundos, el stock falla a los 500 y el proveedor se cumple a los 700. Promise.all se rechaza a los 500 con Falló stock. Promise.race se cumple a los 300 con precio ok. Promise.allSettled se cumple a los 700 con el estado de las tres. Promise.any se cumple a los 300 con precio ok.](../imagenes/combinadores-de-promesas.svg)

- `all`, `race`, `allSettled` y `any`: ¿cuál conviene en cada caso?

---

## 🚦 ¿Son no bloqueantes?

![Tres zonas. Primero se ejecuta el código síncrono en la pila: Inicio, el ejecutor y Fin. Después se vacía la cola de microtareas, donde esperan los then y los await: sale el then. Por último, la cola de tareas, donde esperan los temporizadores: sale el setTimeout de 0 milisegundos. El orden de salida es 1, 2, 3, 4 y 5.](../imagenes/pila-microtareas-y-cola.svg)

- La **espera** no bloquea; el **ejecutor** y los `.then()` sí ocupan el hilo.
- Orden: **síncrono → microtareas → temporizadores**.

---

## 🎯 Predecí el orden

```js
console.log('1');
setTimeout(() => console.log('2'), 0);
Promise.resolve().then(() => console.log('3'));
console.log('4');
```

- Salida: **1, 4, 3, 2**.

---

## ✍️ Actividad

- 🟢 [Básico 01](../ejercicios/basico-01.md), 🟡 [Intermedio 01](../ejercicios/intermedio-01.md), [02](../ejercicios/intermedio-02.md) y [03](../ejercicios/intermedio-03.md).
- 🛠️ [Taller 01 — El pedido prometido](../../actividades/talleres/taller-01.md).

---

## ✅ Resumen

- Una promesa: pendiente → cumplida o rechazada, una vez.
- Encadená con `.then()` y atendé el error con un `.catch()`.
- Microtareas antes que temporizadores.
