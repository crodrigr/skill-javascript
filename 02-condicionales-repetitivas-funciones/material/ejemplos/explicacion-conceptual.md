# 📚 Explicación conceptual — Condicionales, estructuras repetitivas y funciones

Hasta ahora tus programas ejecutaban las instrucciones **una por una, de arriba hacia abajo**. En este módulo aprendés a que el programa **decida** (si pasa esto, hacé aquello), **repita** (hacelo varias veces) y **guarde instrucciones con un nombre** para reutilizarlas (funciones). Los ejemplos siguen con la tienda ficticia de café **«Aroma»** de la Clase 01. Conviene haber hecho esa clase: usamos variables, operadores de comparación y lógicos, números y cadenas.

La clase se dicta en **dos sesiones**: la **sesión 1** cubre los bloques 1 y 2 (estructuras de decisión y repetitivas, con `break` y `continue`) y la **sesión 2**, el bloque 3 (funciones declarativas, de expresión, autoejecutables y de flecha).

Resultados de aprendizaje de la clase:

- **RA-1**: tomar decisiones con `if`, `else if` y `else`, combinando condiciones.
- **RA-2**: elegir entre varias opciones con `switch` y decidir entre dos valores con `? :`.
- **RA-3**: repetir acciones con `while`, `do...while` y `for`, y evitar los bucles infinitos.
- **RA-4**: controlar un bucle con `break` y `continue`.
- **RA-5**: declarar y llamar funciones declarativas, con parámetros, `return` y alcance local.
- **RA-6**: escribir funciones de expresión y explicar en qué se diferencian de las declarativas.
- **RA-7**: escribir una función autoejecutable y explicar para qué sirve.
- **RA-8**: escribir funciones de flecha y elegir entre las cuatro formas de definir una función.
- **RA-9**: combinar decisiones, bucles y funciones para resolver un problema pequeño.

## 🗒️ Glosario

| Término | Equivalente |
|---|---|
| *condition* | condición (expresión que se evalúa como verdadera o falsa) |
| *truthy* / *falsy* | valor que cuenta como verdadero / como falso en una condición |
| *loop* | bucle (repetición de un bloque) |
| *iteration* | vuelta o iteración de un bucle |
| *infinite loop* | bucle infinito |
| *fall-through* | cascada (el `switch` sigue con los casos siguientes) |
| *function* | función |
| *parameter* / *argument* | parámetro (nombre que usa la función) / argumento (valor con el que se la llama) |
| *return value* | valor de retorno |
| *scope* | alcance (hasta dónde «se ve» una variable) |
| *hoisting* | elevación |
| *IIFE* | función autoejecutable (*Immediately Invoked Function Expression*) |
| *arrow function* | función de flecha |

> 📌 **Origen de la información.** El resultado de **todos** los ejemplos se obtuvo **ejecutando el código en el navegador** (Chrome) y contrastándolo con otro motor (Node.js). Las descripciones siguen la terminología de MDN Web Docs y de la especificación de ECMAScript. Los **mensajes de error** aparecen en **inglés**, porque así los entrega el navegador; el texto los traduce.
>
> 🚫 **Lo que queda para más adelante.** En esta clase no usamos `for...of`, `for...in`, `this`, *closures*, *callbacks*, recursión ni etiquetas. Cuando aparecen, se nombran en una línea y sin práctica.

---

## 🔀 Estructuras de decisión

### 🧭 1 · `if`, `else if` y `else`

*Resultados de aprendizaje: RA-1*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 01 — `if` y `else`: ¿envío gratis?](01-if-else.md): envío gratis según el total
> - [Ejemplo 02 — `else if` y valores verdaderos y falsos](02-else-if-y-verdadero-falso.md): tramos de descuento y valores verdaderos y falsos
> - [Ejemplo 03 — Errores comunes con `if`](03-errores-comunes-con-if.md): tres descuidos comunes con `if`

![Diagrama de flujo de una decisión con if y else. Se evalúa la condición total mayor o igual que 20. Si es verdadera se muestra Envío gratis; si es falsa se muestra Envío con costo y cuánto falta. Con total 13.5 la condición es falsa y se recorre el camino del else. Después los dos caminos se juntan y el programa sigue.](../imagenes/flujo-if-else.svg)

![Una cadena de condiciones evaluadas en orden. Con total 35: la primera, total mayor o igual que 50, es falsa; la segunda, total mayor o igual que 20, es verdadera y asigna 5; el else final se salta. Solo se ejecuta la primera condición verdadera.](../imagenes/cadena-else-if.svg)

#### 🌍 Contexto

Un programa que siempre hace lo mismo sirve de poco. La tienda necesita decir «envío gratis» solo cuando el pedido llega a cierto monto, y dar un descuento distinto según el total. Eso requiere **decidir**.

#### 💡 Concepto

Una **estructura de decisión** ejecuta un bloque de código **solo si** una condición es verdadera. `if` evalúa la condición; `else` ofrece el camino contrario; `else if` agrega condiciones intermedias.

#### 📖 Explicación

- **Forma:** `if (condición) { ... } else { ... }`. La condición va entre paréntesis y cada bloque entre llaves.
- **Un solo camino.** En cada ejecución se recorre **uno** de los bloques: nunca dos.
- **Condiciones.** Se arman con los operadores de comparación y lógicos de la Clase 01: `total >= 20`, `cantidad > 0 && total < 50`.
- **`else if`.** Encadena condiciones y se ejecuta la **primera** verdadera; el orden importa (de lo más específico a lo más general).
- **Verdadero y falso.** Dentro de un `if`, cualquier valor se convierte en verdadero o falso. Son **falsos** solo: `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined` y `NaN`. Todo lo demás es verdadero, incluso `'0'` y `'false'`.
- **Errores comunes.** `=` en lugar de `===` (asigna en vez de comparar), un `;` después de la condición y olvidar las llaves. Escribí siempre las llaves.

### 🧭 1 · `switch`

*Resultados de aprendizaje: RA-2*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 04 — `switch`: elegir entre varias opciones](04-switch.md): categorías con `case`, `break` y `default`
> - [Ejemplo 05 — El `switch` sin `break` (cascada)](05-switch-en-cascada.md): qué pasa sin `break`

![Dos columnas con un switch sobre nivel igual a 2. Sin break, la ejecución entra al case 2 y continúa por los siguientes: se ejecutan los casos 2, 3. Con break en cada caso, se ejecuta solo el case 2.](../imagenes/switch-en-cascada.svg)

#### 🌍 Contexto

A veces se compara **una misma cosa** contra muchos valores exactos: la categoría de un producto, el día de la semana, el nivel de socio. Encadenar muchos `else if` se vuelve largo.

#### 💡 Concepto

`switch` evalúa una expresión una vez y ejecuta el `case` cuyo valor coincide. `break` termina el caso y `default` recoge todo lo demás.

#### 📖 Explicación

- **Forma:** `switch (expresión) { case valor: ...; break; default: ... }`.
- **Compara con `===`:** el número `3` y el texto `'3'` son casos distintos.
- **`break`.** Sin él, la ejecución **sigue** en los casos siguientes (cascada). Casi siempre es un descuido; ponelo en cada caso.
- **Agrupar casos.** Dos `case` seguidos sin `break` entre ellos comparten el mismo código.
- **`default`.** Se ejecuta si ningún caso coincide; por convención va al final.
- **Cuándo usarlo.** Para valores exactos. Para rangos (`>= 20`) usá `if`/`else if`.

### 🧭 1 · El operador condicional `? :`

*Resultados de aprendizaje: RA-2*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 06 — El operador condicional `? :`](06-operador-condicional.md): elegir entre dos valores

#### 🌍 Contexto

Hay decisiones tan simples que un `if`/`else` completo es demasiado: elegir entre dos textos o dos números.

#### 💡 Concepto

El **operador condicional** es una expresión de tres partes: `condición ? valorSiVerdadera : valorSiFalsa`. Devuelve uno de los dos valores.

#### 📖 Explicación

- **Es una expresión.** A diferencia de `if`, devuelve un valor: se puede guardar en una constante o usar dentro de una plantilla de texto.
- **Ejemplo:** `const envio = total >= 20 ? 'gratis' : 'con costo';`.
- **Encadenarlo** es posible (`a ? x : b ? y : z`), pero con más de dos opciones se lee mal: usá `if`/`else if`.
- **Cuándo elegir cada uno.** `? :` para elegir entre dos valores simples; `if` cuando hay varias instrucciones; `switch` para comparar un valor con varias opciones exactas.

---

## 🔁 Estructuras repetitivas

### 🧭 2 · El bucle `while`

*Resultados de aprendizaje: RA-3*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 07 — El bucle `while`](07-while.md): cuenta regresiva y suma

![Dos diagramas de flujo. En while la condición se evalúa antes del cuerpo: con stock igual a 0, el cuerpo se ejecuta 0 veces. En do while el cuerpo se ejecuta primero y la condición se evalúa al final: con stock igual a 0, el cuerpo se ejecuta 1 vez.](../imagenes/while-frente-a-do-while.svg)

#### 🌍 Contexto

Mostrar una cuenta regresiva o sumar una serie de precios exigiría escribir la misma línea muchas veces. Un **bucle** repite un bloque mientras se cumpla una condición.

#### 💡 Concepto

`while (condición) { cuerpo }` evalúa la condición **antes** de cada vuelta y ejecuta el cuerpo mientras sea verdadera.

#### 📖 Explicación

- **Variable de control.** Una variable (`cuenta`) que cambia en el cuerpo (`cuenta--`) y hace que la condición termine siendo falsa.
- **Puede no ejecutarse nunca,** si la condición es falsa de entrada.
- **Acumuladores.** `suma += n` va agregando un valor en cada vuelta.
- **Regla de oro.** Algo dentro del cuerpo tiene que cambiar la condición; si no, el bucle no termina.

### 🧭 2 · El bucle `do...while`

*Resultados de aprendizaje: RA-3*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 08 — El bucle `do...while`](08-do-while.md): al menos una vuelta

#### 🌍 Contexto

Hay acciones que deben ocurrir **al menos una vez**, por ejemplo mostrar un aviso y después decidir si se repite.

#### 💡 Concepto

`do { cuerpo } while (condición);` ejecuta el cuerpo y **después** evalúa la condición.

#### 📖 Explicación

- **Al menos una vuelta.** Aunque la condición sea falsa de entrada, el cuerpo corre una vez.
- **Termina con `;`** después del paréntesis de la condición.
- **Frente a `while`:** `while` puede hacer cero vueltas; `do...while`, como mínimo una.
- **Uso.** Es el menos frecuente de los tres bucles.

### 🧭 2 · El bucle `for`

*Resultados de aprendizaje: RA-3*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 09 — El bucle `for`](09-for.md): tabla del 3, `<` frente a `<=` y alcance de `let`

![La cabecera del for tiene tres partes: inicio let i igual a 1, que se ejecuta una vez; condición i menor o igual que 3, que se evalúa antes de cada vuelta; y avance i más más, que se ejecuta al final de cada vuelta. La traza muestra i igual a 1, 2 y 3 con la condición verdadera y el cuerpo ejecutado, e i igual a 4 con la condición falsa, donde el bucle termina.](../imagenes/anatomia-del-for.svg)

#### 🌍 Contexto

Cuando se sabe **cuántas veces** repetir, escribir la variable de control, la condición y el avance por separado es incómodo. `for` los junta en una línea.

#### 💡 Concepto

`for (inicio; condición; avance) { cuerpo }` ejecuta el inicio una vez y repite *condición → cuerpo → avance* hasta que la condición sea falsa.

#### 📖 Explicación

- **Tres partes separadas por `;`.** Inicio (`let i = 1`), condición (`i <= 5`) y avance (`i++`).
- **Orden:** inicio → condición → cuerpo → avance → condición → cuerpo → avance → … → condición falsa → fin.
- **`<` o `<=`.** Es el origen de la mayoría de los errores de «una vuelta de más o de menos»: contá a mano las vueltas.
- **Avances distintos.** `i += 2`, `j -= 3`, `i--`.
- **Alcance.** La variable `let` de la cabecera solo existe dentro del `for`.

### 🧭 2 · El bucle infinito

*Resultados de aprendizaje: RA-3*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 10 — El bucle infinito](10-bucle-infinito.md): cómo se produce y cómo se evita

#### 🌍 Contexto

Un descuido en la condición y la pestaña queda congelada. Reconocer un bucle infinito a tiempo ahorra mucha frustración.

#### 💡 Concepto

Un **bucle infinito** es uno cuya condición nunca se vuelve falsa: el programa repite el cuerpo para siempre.

#### 📖 Explicación

- **Causas típicas:** olvidar el avance (`cuenta--`), avanzar en sentido contrario (`i--` con `i <= 3`) o usar una condición siempre verdadera (`while (true)`) sin salida.
- **Cómo se reconoce:** la pestaña deja de responder y la consola no muestra nada nuevo.
- **Cómo se evita:** antes de ejecutar, preguntate qué línea del cuerpo hace que la condición llegue a ser falsa. Mientras practicás, usá un contador de seguridad.
- **`while (true)` con un `break` alcanzable** es un patrón válido cuando la salida se decide dentro del cuerpo.

### 🧭 2.1 · Control de flujo con `break` y `continue`

*Resultados de aprendizaje: RA-4*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 11 — `break`: salir del bucle](11-break.md): buscar el primer múltiplo y salir
> - [Ejemplo 12 — `continue`: saltar una vuelta](12-continue.md): saltar una vuelta

![Dos filas de seis vueltas, con n de 1 a 6. Con break cuando n vale 4, las vueltas 1, 2 y 3 se ejecutan completas, en la 4 el bucle termina y las vueltas 5 y 6 no se hacen. Con continue cuando n es par, las vueltas pares se saltan después del if y las impares se ejecutan completas.](../imagenes/break-y-continue.svg)

#### 🌍 Contexto

A veces no hace falta completar todas las vueltas: se encontró lo que se buscaba, o una vuelta concreta hay que saltarla.

#### 💡 Concepto

`break` **termina** el bucle y sigue con la línea de después. `continue` **salta** el resto de la vuelta actual y pasa a la siguiente.

#### 📖 Explicación

- **`break`:** «dejo de repetir». Se usa dentro de un `if` (por ejemplo, al encontrar el primer múltiplo de 7).
- **`continue`:** «dejo esta vuelta y sigo con la próxima». En un `for` ejecuta el avance antes de volver a la condición.
- **Cuidado en `while`:** si el avance (`i++`) está después del `continue`, esa vuelta no avanza y el bucle puede quedar infinito. Poné el avance **antes**.
- **`break` en un `switch`** termina el caso (bloque 1); el de los bucles termina el bucle.
- **Fuera de esta clase:** las etiquetas (*labels*), que permiten salir de varios bucles a la vez.

---

## 🧩 Funciones

### 🧭 3 · ¿Qué es una función? Parámetros, `return` y alcance

*Resultados de aprendizaje: RA-5*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 13 — Funciones declarativas](13-funcion-declarativa.md): `calcularTotal` con parámetros y `return`
> - [Ejemplo 15 — Alcance local de las variables](15-alcance-local.md): variables locales y su error

![Una función calcularTotal con los parámetros precio y cantidad y un cuerpo que devuelve precio por cantidad. Se la llama con los argumentos 4.5 y 3; cada argumento se asigna al parámetro de su posición y la función devuelve 13.5, que se guarda en una constante.](../imagenes/anatomia-de-una-funcion.svg)

#### 🌍 Contexto

La cuenta `precio * cantidad` aparece en muchos lugares del programa. Si hubiera que cambiarla, habría que tocar todos. Mejor escribirla **una vez**, ponerle un nombre y reutilizarla.

#### 💡 Concepto

Una **función** es un bloque de código con nombre que recibe datos (**parámetros**), hace algo con ellos y puede devolver un resultado (`return`).

#### 📖 Explicación

- **Declarar no ejecuta.** La función trabaja cuando se la **llama**: `calcularTotal(4.5, 3)`.
- **Parámetros y argumentos.** Los parámetros son los nombres de la definición (`precio`, `cantidad`); los argumentos, los valores de la llamada (`4.5`, `3`), asignados por posición.
- **`return`** devuelve un valor a quien llamó y termina la función.
- **Alcance local.** Las variables y los parámetros declarados dentro de la función **solo existen ahí**. Desde adentro se ve lo de afuera; desde afuera no se ve lo de adentro.
- **Nombres.** `camelCase` y, para una acción, un verbo: `calcularTotal`, `aplicarDescuento`.
- **Lo que viene después:** funciones que reciben otras funciones (*callbacks*) o que recuerdan datos (*closures*) quedan para más adelante.

### 🧭 3.1 · Funciones declarativas

*Resultados de aprendizaje: RA-5*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 13 — Funciones declarativas](13-funcion-declarativa.md): `calcularTotal` con parámetros y `return`
> - [Ejemplo 14 — Retorno, `undefined` y valores por defecto](14-retorno-y-valores-por-defecto.md): sin `return` y valores por defecto
> - [Ejemplo 17 — Elevación (*hoisting*) de funciones](17-elevacion.md): llamar antes de definir

#### 🌍 Contexto

La forma clásica de definir una función es con la palabra `function` y un nombre. Es la que primero se enseña y la más usada.

#### 💡 Concepto

Una **función declarativa** (*function declaration*) se escribe `function nombre(parámetros) { cuerpo }` y puede llamarse **antes** del lugar donde se define.

#### 📖 Explicación

- **Sin `return`, devuelve `undefined`.** Mostrar con `console.log` no es lo mismo que devolver.
- **Argumentos que faltan valen `undefined`.** `calcularTotal(4.5)` da `NaN` porque `cantidad` es `undefined`.
- **Valores por defecto.** `function calcularTotal(precio, cantidad, descuento = 0)`: se usa cuando el argumento falta o es `undefined`.
- **Elevación (*hoisting*).** Antes de ejecutar, JavaScript registra las funciones declarativas: por eso se pueden llamar aunque estén más abajo.
- **Buena práctica.** Definí las funciones antes de usarlas y al nivel principal del script (no dentro de un `if` o de un bucle).

### 🧭 3.2 · Funciones de expresión

*Resultados de aprendizaje: RA-6*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 16 — Funciones de expresión](16-funcion-de-expresion.md): una función guardada en una constante
> - [Ejemplo 17 — Elevación (*hoisting*) de funciones](17-elevacion.md): llamar antes de definir

![Dos columnas. Con una función declarativa, el navegador la registra completa antes de ejecutar el código, así que llamarla en la primera línea funciona. Con una función de expresión guardada en una constante, la constante está en la zona muerta temporal hasta su línea, así que llamarla antes da un ReferenceError.](../imagenes/elevacion-de-funciones.svg)

#### 🌍 Contexto

En JavaScript una función es un **valor**, igual que un número o un texto. Por eso se puede guardar en una constante.

#### 💡 Concepto

Una **función de expresión** (*function expression*) es una función guardada en una variable o constante: `const nombre = function (parámetros) { cuerpo };`.

#### 📖 Explicación

- **Anónima o con nombre.** La parte `function (...) { ... }` puede no tener nombre (anónima). Si lo tiene, ese nombre solo existe dentro de la función.
- **Se llama con el nombre de la constante:** `calcularTotal(4.5, 3)`.
- **No se eleva como valor.** Llamarla **antes** de su línea da `ReferenceError: Cannot access '...' before initialization` (con `const`) o `TypeError: ... is not a function` (con `var`).
- **Usá `const`** para que no se pueda reasignar por error.
- **Cuándo.** Cuando querés tratar la función como un valor o dejar claro que se define antes de usarse.

### 🧭 3.3 · Funciones autoejecutables

*Resultados de aprendizaje: RA-7*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 18 — Funciones autoejecutables (IIFE)](18-funcion-autoejecutable.md): aislar variables con paréntesis

![Una caja grande representa el programa y una caja interior, la función autoejecutable, que contiene la constante secreto. Dentro de la función se puede leer secreto; desde afuera, typeof secreto da undefined, porque la variable no existe fuera de la función.](../imagenes/funcion-autoejecutable.svg)

#### 🌍 Contexto

A veces hay un bloque de código que debe correr **una sola vez**, al empezar, y no querés dejar sus variables sueltas en el programa.

#### 💡 Concepto

Una **función autoejecutable** (IIFE) es una función que se define y se llama en el mismo momento: `(function () { ... })();`.

#### 📖 Explicación

- **Dos partes:** la función entre paréntesis y `()` que la llama.
- **Aísla variables.** Lo declarado adentro no existe afuera.
- **Puede recibir argumentos y devolver un valor:** `(function (a, b) { return a * b; })(4.5, 3)`.
- **Los paréntesis son obligatorios.** Sin ellos: `SyntaxError: Function statements require a function name`.
- **Hoy** se usa menos, porque `let`, `const` y los módulos ya aíslan variables; conviene reconocerla en código ajeno.

### 🧭 3.4 · Funciones de flecha

*Resultados de aprendizaje: RA-8*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 19 — Funciones de flecha](19-funcion-de-flecha.md): sintaxis corta y retorno implícito

![Cuatro pasos para escribir la misma función. Primero la declarativa con function; luego la de expresión guardada en una constante; luego la flecha con llaves y return; y por último la flecha corta, sin llaves ni return. Con 4.5 y 3 las cuatro devuelven 13.5.](../imagenes/evolucion-a-flecha.svg)

#### 🌍 Contexto

Muchas funciones son tan cortas (una cuenta, una comparación) que la palabra `function` y las llaves sobran. Las **funciones de flecha** acortan la escritura.

#### 💡 Concepto

Una **función de flecha** (*arrow function*) se escribe `(parámetros) => expresión` y devuelve el valor de la expresión.

#### 📖 Explicación

- **Sin llaves, retorno implícito:** `const calcularTotal = (precio, cantidad) => precio * cantidad;`.
- **Un parámetro simple** admite no llevar paréntesis (`n => n * 2`); con **cero** o con **dos o más**, son obligatorios.
- **Con llaves** el cuerpo es un bloque y hay que escribir `return`; sin él devuelve `undefined`.
- **Cuándo.** Para funciones cortas de una expresión; si la función es larga o tiene varias decisiones, una declarativa se lee mejor.
- **Fuera de esta clase:** las flechas se comportan distinto con `this`; lo veremos más adelante.

### 🧭 3 · Elegir la forma de definir una función

*Resultados de aprendizaje: RA-8, RA-9*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 20 — Elegir la forma de definir una función](20-elegir-la-forma.md): cuatro formas, un mismo resultado
> - [Ejemplo 21 — Un pedido completo: decisiones, bucle y funciones](21-pedido-completo.md): decisiones, un bucle y funciones juntos

#### 🌍 Contexto

Ya conocés cuatro formas de escribir lo mismo. Saber cuál elegir hace el código más claro.

#### 💡 Concepto

Las cuatro formas producen el mismo resultado; difieren en **cuándo** se pueden llamar y en **cómo se leen**.

#### 📖 Explicación

| Forma | Se puede llamar antes de definirla | Cuándo usarla |
|---|---|---|
| Declarativa | Sí | Funciones con nombre y varias líneas (la opción por defecto) |
| De expresión | No | Cuando necesitás la función como un valor |
| De flecha | No | Cuentas o comparaciones cortas de una expresión |
| Autoejecutable | — (se ejecuta sola) | Un bloque que corre una vez y aísla variables |

- **Combinarlas.** En el Ejemplo 21, tres funciones se llaman entre sí dentro de un `for` con un `break`.
- **Una función, un trabajo.** Es más fácil probar y cambiar funciones chicas que una grande.
