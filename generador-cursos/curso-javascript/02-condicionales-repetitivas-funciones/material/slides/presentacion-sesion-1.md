# 🔀 Condicionales y bucles

Curso **JavaScript** · Clase 02 · **Sesión 1**

---

## 🎯 Objetivos de la sesión

- 🔹 Decidir con `if`, `else if`, `else`, `switch` y `? :`.
- 🔹 Repetir con `while`, `do...while` y `for`.
- 🔹 Reconocer y evitar un bucle infinito.
- 🔹 Controlar un bucle con `break` y `continue`.

> 📌 Seguimos con la tienda «Aroma» de la Clase 01.

---

## 🔀 `if` y `else`

![Diagrama de flujo de una decisión con if y else. Se evalúa la condición total mayor o igual que 20. Si es verdadera se muestra Envío gratis; si es falsa se muestra Envío con costo y cuánto falta. Con total 13.5 la condición es falsa y se recorre el camino del else. Después los dos caminos se juntan y el programa sigue.](../imagenes/flujo-if-else.svg)

- Un `if` ejecuta su bloque **solo si** la condición es verdadera.
- `else` es el camino contrario: nunca se recorren los dos.

---

## 🪜 `else if`: varias condiciones

![Una cadena de condiciones evaluadas en orden. Con total 35: la primera, total mayor o igual que 50, es falsa; la segunda, total mayor o igual que 20, es verdadera y asigna 5; el else final se salta. Solo se ejecuta la primera condición verdadera.](../imagenes/cadena-else-if.svg)

- Se evalúan **en orden** y se ejecuta la **primera** verdadera.
- El orden importa: de lo más específico a lo más general.

---

## ⚠️ Errores comunes con `if`

- `=` en lugar de `===`: **asigna** en vez de comparar.
- Un `;` después de la condición: el `if` queda vacío.
- Sin llaves, el `else` se engancha con el `if` más cercano.
- Valores **falsos**: `false`, `0`, `-0`, `0n`, `''`, `null`, `undefined` y `NaN`.

> 💡 Escribí siempre las llaves y comparaciones con `===`.

---

## 🎛️ `switch` y el operador `? :`

![Dos columnas con un switch sobre nivel igual a 2. Sin break, la ejecución entra al case 2 y continúa por los siguientes: se ejecutan los casos 2, 3. Con break en cada caso, se ejecuta solo el case 2.](../imagenes/switch-en-cascada.svg)

- `switch` compara con `===` y entra por el `case` que coincide.
- Sin `break`, sigue con los casos siguientes (cascada).
- `condición ? A : B` elige entre **dos valores**.

---

## 🔁 `while` y `do...while`

![Dos diagramas de flujo. En while la condición se evalúa antes del cuerpo: con stock igual a 0, el cuerpo se ejecuta 0 veces. En do while el cuerpo se ejecuta primero y la condición se evalúa al final: con stock igual a 0, el cuerpo se ejecuta 1 vez.](../imagenes/while-frente-a-do-while.svg)

- `while` evalúa **antes**: puede no ejecutarse nunca.
- `do...while` evalúa **después**: se ejecuta al menos una vez.

---

## 🔢 El bucle `for`

![La cabecera del for tiene tres partes: inicio let i igual a 1, que se ejecuta una vez; condición i menor o igual que 3, que se evalúa antes de cada vuelta; y avance i más más, que se ejecuta al final de cada vuelta. La traza muestra i igual a 1, 2 y 3 con la condición verdadera y el cuerpo ejecutado, e i igual a 4 con la condición falsa, donde el bucle termina.](../imagenes/anatomia-del-for.svg)

- `for (inicio; condición; avance)`.
- `<` o `<=`: contá las vueltas a mano.

---

## ♾️ El bucle infinito

- La condición **nunca** se vuelve falsa: la pestaña se congela.
- Causas: olvidar el avance, avanzar en sentido contrario o `while (true)` sin salida.
- Antes de ejecutar, preguntate: **¿qué línea hace falsa la condición?**
- Mientras practicás, usá un **seguro** (un contador con tope).

---

## ✂️ `break` y `continue`

![Dos filas de seis vueltas, con n de 1 a 6. Con break cuando n vale 4, las vueltas 1, 2 y 3 se ejecutan completas, en la 4 el bucle termina y las vueltas 5 y 6 no se hacen. Con continue cuando n es par, las vueltas pares se saltan después del if y las impares se ejecutan completas.](../imagenes/break-y-continue.svg)

- `break`: «dejo de repetir».
- `continue`: «dejo esta vuelta y sigo con la próxima».

---

## 🛠️ Actividad de la sesión

- Ejercicios **Básico 01**, **Básico 02** e **Intermedio 01**.
- **Taller 01:** «El carrito de Aroma».
- Predecí antes de ejecutar y **no ejecutes** el bucle infinito de la Parte A.

---

## ✅ Resumen de la sesión 1

- 🔹 Decisiones: `if`/`else if`/`else`, `switch`, `? :`.
- 🔹 Repeticiones: `while`, `do...while`, `for`.
- 🔹 Un bucle necesita algo que haga falsa su condición.
- 🔹 `break` corta el bucle; `continue` salta una vuelta.

> 🔜 Sesión 2: funciones.
