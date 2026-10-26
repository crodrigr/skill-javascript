# 🧩 Funciones

Curso **JavaScript** · Clase 02 · **Sesión 2**

---

## 🎯 Objetivos de la sesión

- 🔹 Declarar y llamar funciones con parámetros y `return`.
- 🔹 Entender el alcance local de las variables.
- 🔹 Escribir funciones de expresión, autoejecutables y de flecha.
- 🔹 Elegir entre las cuatro formas.

> 📌 Usamos decisiones y bucles de la sesión 1.

---

## 🧩 ¿Qué es una función?

![Una función calcularTotal con los parámetros precio y cantidad y un cuerpo que devuelve precio por cantidad. Se la llama con los argumentos 4.5 y 3; cada argumento se asigna al parámetro de su posición y la función devuelve 13.5, que se guarda en una constante.](../imagenes/anatomia-de-una-funcion.svg)

- Un bloque con **nombre** que recibe datos y puede devolver un resultado.
- Declarar no ejecuta: la función trabaja cuando se la **llama**.

---

## 🧰 Funciones declarativas

- `function nombre(parámetros) { cuerpo }`.
- Sin `return`, devuelve `undefined`.
- Un argumento que falta vale `undefined`.
- Valores por defecto: `descuento = 0`.

---

## 🔒 Alcance local

- Lo declarado **dentro** de la función solo existe ahí.
- Desde adentro se ve lo de afuera; desde afuera, no.
- Error típico: `ReferenceError: subtotal is not defined`.

---

## 📦 Funciones de expresión

- Una función es un **valor**: se guarda en una constante.
- `const total = function (precio, cantidad) { ... };`.
- Usá `const` para que no se reasigne.

---

## ⬆️ Elevación (*hoisting*)

![Dos columnas. Con una función declarativa, el navegador la registra completa antes de ejecutar el código, así que llamarla en la primera línea funciona. Con una función de expresión guardada en una constante, la constante está en la zona muerta temporal hasta su línea, así que llamarla antes da un ReferenceError.](../imagenes/elevacion-de-funciones.svg)

- Declarativa: se puede llamar **antes** de definirla.
- De expresión: solo **después** de su línea.

---

## ⚡ Funciones autoejecutables

![Una caja grande representa el programa y una caja interior, la función autoejecutable, que contiene la constante secreto. Dentro de la función se puede leer secreto; desde afuera, typeof secreto da undefined, porque la variable no existe fuera de la función.](../imagenes/funcion-autoejecutable.svg)

- `(function () { ... })();` se define y se ejecuta al instante.
- **Aísla variables.** Sin los paréntesis: `SyntaxError`.

---

## ➡️ Funciones de flecha

![Cuatro pasos para escribir la misma función. Primero la declarativa con function; luego la de expresión guardada en una constante; luego la flecha con llaves y return; y por último la flecha corta, sin llaves ni return. Con 4.5 y 3 las cuatro devuelven 13.5.](../imagenes/evolucion-a-flecha.svg)

- Sin llaves: retorno implícito.
- Con llaves: hace falta `return`.

---

## 🧭 Elegir la forma

| Forma | Antes de definirla | Cuándo |
|---|---|---|
| Declarativa | Sí | Con nombre y varias líneas |
| De expresión | No | Función como valor |
| De flecha | No | Cuentas cortas |
| Autoejecutable | — | Un bloque que corre una vez |

---

## 🛠️ Actividad de la sesión

- Ejercicios **Intermedio 02**, **Intermedio 03** y **Desafío 01**.
- **Taller 02:** «La caja con funciones».
- Pasá de una forma a otra y compará los resultados.

---

## ✅ Resumen de la sesión 2

- 🔹 Una función se declara una vez y se llama muchas.
- 🔹 Los parámetros y las variables internas son locales.
- 🔹 Cuatro formas: declarativa, de expresión, autoejecutable y de flecha.
- 🔹 Una función, un trabajo.

> 📝 Cierre: respondé el **quiz** de 16 ítems.
