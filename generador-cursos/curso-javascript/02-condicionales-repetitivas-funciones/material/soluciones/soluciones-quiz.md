# 🔑 Soluciones — Quiz 01 de la Clase 02 (material docente)

No compartir este archivo con los estudiantes. Las respuestas con valores se comprobaron ejecutando el código en Chrome (y en Node).

| Ítem | Tipo | Respuesta correcta | RA | Sesión |
|---|---|---|---|---|
| 1 | Selección múltiple | **B** | RA-1 | 1 |
| 2 | Selección múltiple | **B** | RA-1 | 1 |
| 3 | Identificación de resultado | **B** | RA-2 | 1 |
| 4 | Identificación de resultado | **B** | RA-2 | 1 |
| 5 | Identificación de resultado | **B** | RA-3 | 1 |
| 6 | Selección múltiple | **B** | RA-3 | 1 |
| 7 | Identificación de resultado | **A** | RA-4 | 1 |
| 8 | Identificación de resultado | **C** | RA-4 | 1 |
| 9 | Identificación de resultado | **B** | RA-5 | 2 |
| 10 | Identificación de resultado | **B** | RA-5 | 2 |
| 11 | Selección múltiple | **B** | RA-6 | 2 |
| 12 | Identificación de resultado | **C** | RA-6 | 2 |
| 13 | Selección múltiple | **B** | RA-7 | 2 |
| 14 | Identificación de resultado | **B** | RA-8 | 2 |
| 15 | Selección múltiple | **C** | RA-8 | 2 |
| 16 | Problema breve | Ver abajo | RA-9 | 2 |

## Justificaciones

**1.** **B**. Con `15`, la primera condición (`>= 20`) es falsa y la segunda (`>= 10`) es verdadera: se muestra `B` y se salta el resto de la cadena.

**2.** **B**. Los valores falsos son `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined` y `NaN`. Un texto no vacío (incluso `'false'` o `'0'`) y los números distintos de cero son verdaderos.

**3.** **B**. El `switch` entra por `case 2` y, como no hay `break`, sigue con `case 3`, que sí tiene `break`. Se muestran `dos` y `tres`.

**4.** **B**. `17 >= 18` es falso, así que el operador condicional devuelve el valor de la derecha de los `:`: `menor`.

**5.** **B**. `i` vale `1`, `4`, `7` y `10`: cuatro vueltas. Con `13` la condición `i <= 10` es falsa.

**6.** **B**. En B, `i` nunca cambia y `i < 3` siempre es verdadero. En A y en C la variable avanza; en D el cuerpo corre una vez y la condición falla.

**7.** **A**. Cuando `n` vale `3`, `break` termina el bucle antes del `console.log`: solo se muestran `1` y `2`.

**8.** **C**. Con `n = 3`, `continue` salta el resto de esa vuelta (no se muestra el `3`) y el bucle sigue con `4` y `5`.

**9.** **B**. `doble(4)` devuelve `8` y `doble(1)`, `2`: la suma es `10`.

**10.** **B**. `f` no tiene `return`, así que devuelve `undefined`. `b` es local y no se usa afuera, por eso no hay error.

**11.** **B**. La función de expresión se guarda en una constante: `const total = function (...) { ... };`. La A es declarativa y la C es autoejecutable (guarda el resultado, no la función).

**12.** **C**. La función de expresión guardada en una `const` no se puede usar antes de su línea: error `ReferenceError: Cannot access 'despedir' before initialization`. (Con `var` sería el `TypeError` de la opción D.)

**13.** **B**. La función va entre paréntesis y se llama con `()` a continuación. La A da `SyntaxError: Function statements require a function name`; la C no se ejecuta; la D define la función entre paréntesis pero nadie la llama.

**14.** **B**. Con llaves, el cuerpo es un bloque y hace falta `return`. Sin él la función devuelve `undefined`. La versión sin llaves, `(a, b) => a + b`, devolvería `3`.

**15.** **C**. Para una cuenta de una sola expresión, la flecha sin llaves es la forma más corta y clara: `const conIva = precio => precio * 1.21;`.

**16.** Una solución posible: `const conDescuento = total => total >= 50 ? total * 0.9 : total;` y luego `console.log(conDescuento(60));` y `console.log(conDescuento(30));`. Resultados: `54` y `30`.
