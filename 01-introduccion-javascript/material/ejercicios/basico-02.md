# 🟢 Básico 02 — Tipos y variables

> 🟢 **Nivel:** Básico · 🎓 **Resultados de aprendizaje:** RA-5, RA-6 · 🗓️ **Sesión 1**

## 🧱 Estado inicial

Abrí [`basico-02.html`](../recursos/practica/basico-02.html) y su archivo [`js/basico-02.js`](../recursos/practica/js/basico-02.js), de la carpeta `practica`. La página ya incluye el script externo, que solo tiene comentarios.

## 🛠️ Proceso esperado

**Parte A — Los tipos.** En una consola nueva, usá `typeof` con cada valor y anotá el resultado.

| # | Valor | `typeof` esperado |
|---|---|---|
| 1 | `42` | `'number'` |
| 2 | `'42'` | `'string'` |
| 3 | `true` | `'boolean'` |
| 4 | `undefined` | `'undefined'` |
| 5 | `null` | `'object'` |
| 6 | `3.14` | `'number'` |
| 7 | `10n` | `'bigint'` |
| 8 | `NaN` | `'number'` |

**Parte B — Las variables.** En `basico-02.js`, declará con la declaración **adecuada** (`const` o `let`) y mostrá con `console.log`:

1. `nombreTienda` con el valor `'Aroma'` (no cambia).
2. `cantidad` con el valor `3`, que después **pasa a `5`**.
3. `precio` con el valor `4.5` (no cambia).

Mostrá, en este orden: el nombre, la cantidad (ya cambiada), el precio y el tipo del precio (`typeof precio`).

**Parte C — Respondé:**

1. ¿Por qué `nombreTienda` y `precio` van con `const` y `cantidad` con `let`?
2. Si declaraste `precio` con `const` y escribís `precio = 5`, ¿qué error aparece? ¿Qué dice en español?
3. ¿Por qué `typeof null` da `'object'`? ¿Es un error tuyo?

## ✅ Resultado esperado

Con la página abierta, la consola muestra:

```text
Aroma
5
4.5
number
```

Y, en la Parte C, al reasignar una constante: `Uncaught TypeError: Assignment to constant variable.`.

## 🚧 Restricciones

- 🚫 No uses `var`.
- 🚫 Cada variable se declara **una sola vez**.
- 🚫 No uses estructuras de control ni funciones.

## 🎓 Resultados de aprendizaje

- RA-5: Reconocer los tipos de datos y consultar el tipo de un valor.
- RA-6: Declarar variables y constantes y elegir la declaración adecuada.
