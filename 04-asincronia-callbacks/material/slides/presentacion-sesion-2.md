# 📞 Callbacks y tareas asíncronas

Curso **JavaScript** · Clase 04 · **Sesión 2**

---

## 🎯 Objetivos de la sesión

- 🔹 Escribir y usar funciones **callback**.
- 🔹 Programar tareas con `setTimeout`, `setInterval` y eventos.
- 🔹 Recibir resultados y errores con callbacks y encadenar pasos.

---

## 📞 ¿Qué es un callback?

- Una **función que se pasa como argumento** a otra, para que esta la llame después.
- Las funciones son **valores**: se guardan y se pasan.

```js
function aplicar(texto, transformar) { return transformar(texto); }
aplicar('café', (t) => t.toUpperCase());
```

---

## ⚠️ `f` o `f()`

- `setTimeout(f, 500)` → **entrega** la función.
- `setTimeout(f(), 500)` → la **ejecuta ya** y entrega su resultado.
- Si se espera un callback y no llega: `TypeError: callback is not a function`.

---

## 🔀 Síncrono frente a asíncrono

| | Síncrono | Asíncrono |
|---|---|---|
| Se ejecuta | Durante la llamada | Después, cuando ocurre algo |
| Ejemplo | `forEach` | `setTimeout`, clic |
| Orden de salida | El de escritura | Puede ser distinto |

---

## 🧭 Quién llama al callback

![Dos columnas, tu código y el navegador. Tu código llama a setTimeout pasando la función avisar y 500 milisegundos. El navegador anota el pedido y devuelve el control. Tu código sigue con las demás líneas. A los 500 milisegundos el navegador llama a avisar. Pasar la función es entregarla, no ejecutarla.](../imagenes/flujo-de-un-callback.svg)

---

## ⏲️ Temporizadores

![Dos líneas de tiempo. setTimeout ejecuta su callback una sola vez, a los 500 milisegundos. setInterval con 300 milisegundos ejecuta su callback a los 300, 600 y 900 milisegundos, y a los 900 se detiene con clearInterval.](../imagenes/ciclo-de-timeout-e-interval.svg)

- `setTimeout` → una vez; `clearTimeout(id)` lo cancela.
- `setInterval` → repite; `clearInterval(id)` lo detiene.

---

## 🖱️ Eventos

- `boton.addEventListener('click', f)` **registra** el callback.
- El navegador lo llama **cada vez** que hay un clic, no al registrarlo.

---

## 📬 El resultado llega al callback

- Una función asíncrona **no devuelve** el resultado: lo **entrega** al callback.
- Fuera del callback, todavía es `undefined`.
- Todo lo que dependa del resultado va **dentro**.

---

## ❌ Error primero

![Una función asíncrona llama a su callback con dos parámetros, error y resultado. Si error es distinto de null, algo falló y se atiende el error, por ejemplo Agotado Té. Si error es null, todo salió bien y se usa el resultado, por ejemplo Reservado Café. El callback se llama una sola vez.](../imagenes/error-primero.svg)

- `callback(error, resultado)`: revisá primero el error y salí con `return`.
- El callback se llama **una sola vez**.

---

## 🪜 Encadenar y el infierno de callbacks

![A la izquierda, cuatro pasos anidados que bajan en escalera hacia la derecha: validar, cobrar, preparar y entregar, cada uno dentro del callback del anterior. A la derecha, los mismos cuatro pasos como funciones con nombre en una lista plana, cada una pasando a la siguiente.](../imagenes/infierno-de-callbacks-y-funciones-con-nombre.svg)

- Un paso dentro de otro: el código baja hacia la derecha.

---

## 🏷️ Funciones con nombre

- Un nombre por paso: `alValidar`, `alCobrar`, `alPreparar`…
- Se lee de arriba hacia abajo y los errores se atienden en cada una.
- Más adelante: las **promesas** y `async`/`await` simplifican esto.

---

## ✍️ Actividad

- 🟢 [Básico 02](../ejercicios/basico-02.md), 🟡 [Intermedio 03](../ejercicios/intermedio-03.md), 🔴 [Desafío 01](../ejercicios/desafio-01.md) y 🔴 [Desafío 02](../ejercicios/desafio-02.md).
- 🛠️ [Taller 02 — Del pedido a la entrega](../../actividades/talleres/taller-02.md).

---

## ✅ Resumen

- Callback = función pasada para que otra la llame después.
- Temporizadores y eventos son las fuentes de asincronía.
- «Error primero» y funciones con nombre mantienen el código claro.
