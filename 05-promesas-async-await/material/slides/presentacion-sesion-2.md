# ⏳ async y await

Curso **JavaScript** · Clase 05 · **Sesión 2**

---

## 🎯 Objetivos de la sesión

- 🔹 Escribir funciones `async` y esperar con `await`.
- 🔹 Atender errores con `try`/`catch`/`finally`.
- 🔹 Elegir entre secuencia y paralelo.
- 🔹 Usar *top-level await* en un módulo.

---

## 🪄 `async`

```js
async function obtenerPrecio() {
  return 4.5;
}
```

- Una función `async` **siempre devuelve una promesa**.
- `return` la cumple; `throw` la rechaza.

---

## ⏸️ `await`

![Dos carriles. En el carril de la función atender, el mensaje 2 se escribe, la función se pausa en el await durante 500 milisegundos y se reanuda para escribir el mensaje 4. En el carril del resto del programa, durante esa pausa el hilo está libre y escribe el mensaje 3. La pausa es de la función, no del hilo.](../imagenes/await-pausa-la-funcion.svg)

- Pausa **la función**, no el hilo.

---

## 🛡️ `try`, `catch` y `finally`

```js
try {
  await cobrar(pedido);
} catch (motivo) {
  console.log('❌ ' + motivo);
} finally {
  console.log('🔚 Fin');
}
```

- Con `await`, el rechazo se atiende como una excepción.

---

## 🤝 `async` con `.then()`

- Una función `async` se consume con `.then()` y `.catch()`.
- Son **la misma herramienta**: elegí un estilo por función.

---

## 🧾 El pedido con `async`/`await`

![Tres columnas con el mismo flujo de validar, cobrar y preparar un pedido. Con callbacks, cada paso se anida dentro del anterior y el código baja en escalera. Con promesas, los pasos se encadenan con then en una lista plana y un catch al final. Con async y await, los pasos se escriben en orden dentro de una función con try y catch.](../imagenes/callbacks-promesas-y-async-await.svg)

- Callbacks, promesas y `async`/`await`: **misma salida**, menos anidamiento.

---

## 🧱 Secuencia o paralelo

![Dos formas de consultar tres tareas de 300, 500 y 700 milisegundos. Con await uno tras otro, cada tarea empieza cuando termina la anterior y el total es la suma, 1500 milisegundos. Con Promise.all, las tres empiezan a la vez y el total es el de la más lenta, 700 milisegundos.](../imagenes/secuencia-frente-a-paralelo.svg)

- Varios `await` seguidos: la **suma**. `Promise.all`: la **más lenta**.

---

## 🔁 `for…of` y `forEach`

- `for…of` con `await` espera a cada elemento.
- `forEach` **no espera** a las funciones `async`.
- Para lanzar todo a la vez: `Promise.all`.

---

## 🔝 *Top-level await*

```html
<script type="module">
  const r = await esperar(300);
</script>
```

- Solo en módulos. En un script clásico: `SyntaxError`.

---

## 🖥️ Servir el módulo

- Los navegadores **no abren módulos desde el disco** (`file://`).
- En VS Code: extensión **Live Server** → «Open with Live Server».

---

## 📋 Varios pedidos a la vez

- Se lanzan sin `await` y se esperan con `Promise.allSettled`.
- El informe muestra cada resultado, aunque alguno falle.

---

## ✍️ Actividad

- 🟢 [Básico 02](../ejercicios/basico-02.md), 🟡 [Intermedio 04](../ejercicios/intermedio-04.md), 🔴 [Desafío 01](../ejercicios/desafio-01.md) y 🔴 [Desafío 02](../ejercicios/desafio-02.md).
- 🛠️ [Taller 02 — El pedido con async/await](../../actividades/talleres/taller-02.md).

---

## ✅ Resumen

- `async` devuelve una promesa; `await` pausa la función.
- Errores con `try`/`catch`/`finally`.
- Paralelo con `Promise.all`; `for…of` para esperar en bucles.
