# 🔑 Soluciones — Quiz 01 de la Clase 01 (material docente)

No compartir este archivo con los estudiantes. Las respuestas con valores se comprobaron ejecutando el código en Chrome (y en Node).

| Ítem | Tipo | Respuesta correcta | RA | Sesión |
|---|---|---|---|---|
| 1 | Selección múltiple | **C** | RA-1 | 1 |
| 2 | Identificación de resultado | **C** | RA-2 | 1 |
| 3 | Selección múltiple | **C** | RA-3 | 1 |
| 4 | Selección múltiple | **B** | RA-4 | 1 |
| 5 | Identificación de resultado | **C** | RA-5 | 1 |
| 6 | Selección múltiple | **A** | RA-6 | 1 |
| 7 | Selección múltiple | **C** | RA-6 | 1 |
| 8 | Corrección de errores | Ver abajo | RA-6 | 1 |
| 9 | Identificación de resultado | **B** | RA-7 | 2 |
| 10 | Identificación de resultado | **A** | RA-7 | 2 |
| 11 | Identificación de resultado | **B** | RA-7 | 2 |
| 12 | Selección múltiple | **C** | RA-7 | 2 |
| 13 | Identificación de resultado | **C** | RA-7 | 2 |
| 14 | Problema breve | Ver abajo | RA-8 | 2 |
| 15 | Identificación de resultado | **C** | RA-8 | 2 |
| 16 | Problema breve | Ver abajo | RA-9 | 2 |

## Justificaciones

**1. C.** JavaScript es el comportamiento: calcula, decide y reacciona. A describe HTML y B, CSS.

**2. C.** `console.log` imprime el mensaje y **no devuelve nada**: el resultado de la consola es `undefined` (comprobado: `undefined`). Según MDN, su valor de retorno es `undefined`.

**3. C.** El script del `<head>` se ejecuta antes de que el navegador lea el `<body>`: el elemento todavía no existe y `getElementById` devuelve `null` (comprobado en el Ejemplo 03).

**4. B.** ECMAScript es la especificación (ECMA-262) en la que se basa JavaScript. Los navegadores implementan esa especificación.

**5. C.** `typeof null` da `'object'`: es un resto histórico de la primera implementación de JavaScript, no un tipo real.

**6. A.** Con `var`, la declaración se eleva y antes de la asignación vale `undefined` (comprobado: imprime `undefined`). Con `let` y `const` hay zona muerta temporal: `Uncaught ReferenceError: Cannot access 'b' before initialization`.

**7. C.** Una constante no se puede reasignar: `t = {}` da `Uncaught TypeError: Assignment to constant variable.`. Pero `t.n = 2` funciona (`const` no vuelve inmutable el contenido de un objeto): después, `t.n` vale `2`.

**8. Corrección de errores.** Los tres errores:

1. `const total` se reasigna (`total = total + 5`): da `TypeError`. Como el valor cambia, se declara con `let`.
2. `let total = 20` **redeclara** `total`: da `SyntaxError`.
3. `console.log(subtotal)` usa `subtotal` **antes** de declararla (`let`): `ReferenceError` por la zona muerta temporal.

```js
let total = 10;
total = total + 5;
total = 20;
let subtotal = 3;
console.log(subtotal);
```

Se acepta cualquier versión que declare cada variable **una vez**, use `let` para lo que cambia y declare `subtotal` antes de mostrarla.

**9. B.** Primero `**` (`4 ** 2` = `16`), después `*` (`3 * 16` = `48`) y al final `+` (`2 + 48`): `50`.

**10. A.** `10 - 3` = `7`, después `7 * 2`: `14`.

**11. B.** `110 & 011`: solo el bit del medio es `1` en los dos: `010`, es decir `2`.

**12. C.** `0 === false` compara también el tipo: un número no es un booleano (`false`). `5 == '5'` → `true`, `null == undefined` → `true` y `'a' < 'b'` → `true`; en cambio `0 === false` → `false`.

**13. C.** `&&` tiene mayor precedencia que `||`: primero `'a' && 'b'` da `'b'` y después `0 || 'b'` da `'b'`.

**14. Problema breve.** `0.1` y `0.2` no se pueden representar exactamente en binario, así que `0.1 + 0.2` da `0.30000000000000004` y la comparación con `0.3` es `false`. Para mostrarlo con dos decimales: `(0.1 + 0.2).toFixed(2)`, que da `'0.30'`.

**15. C.** Dividir entre cero no es un error en JavaScript: `-5 / 0` da `-Infinity`.

**16. Problema breve.** `'Aroma'[1]` es la letra de la posición `1` (las posiciones empiezan en `0`): `'r'`. `'Aroma'.length` es `5`. Como uno de los operandos es una cadena, `+` **concatena**: da `'r5'`.
