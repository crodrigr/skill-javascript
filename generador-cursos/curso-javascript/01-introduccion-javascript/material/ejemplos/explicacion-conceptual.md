# 📚 Explicación conceptual — Introducción a JavaScript, operadores, números y cadenas

Hasta ahora una página web te mostraba contenido y estilo. En este módulo empezás a **programar**: aprendés qué es JavaScript, dónde se ejecuta, cómo probar código en la consola, qué es ECMAScript, cómo guardar valores en variables y cómo calcular y combinar con operadores, números y cadenas. Los ejemplos usan una tienda ficticia de café, **«Aroma»**. No hace falta saber programar; conviene haber hecho las Clases 01 y 02 del curso «HTML y CSS» para entender un poco de HTML.

La clase se dicta en **dos sesiones**: la **sesión 1** cubre los bloques 1 a 7 (JavaScript, consola, ejecución, ECMAScript, tipos de datos y variables) y la **sesión 2**, los bloques 8 a 10 (operadores, números y cadenas).

Resultados de aprendizaje de la clase:

- **RA-1**: explicar qué es JavaScript y su papel junto a HTML y CSS.
- **RA-2**: usar la consola del navegador.
- **RA-3**: incorporar JavaScript a una página, en línea y desde un archivo externo.
- **RA-4**: explicar qué es ECMAScript y aplicar una estrategia de compatibilidad entre navegadores.
- **RA-5**: reconocer los tipos de datos y consultar el tipo de un valor.
- **RA-6**: declarar variables y constantes con `var`, `let` y `const` y elegir la adecuada.
- **RA-7**: usar los operadores y predecir el resultado de una expresión.
- **RA-8**: trabajar con números enteros y decimales, `NaN` e infinito.
- **RA-9**: crear cadenas y combinarlas con otros valores.

## 🗒️ Glosario

| Término | Equivalente |
|---|---|
| *script* | programa o fragmento de código JavaScript |
| *console* | consola |
| *expression* | expresión (combinación de valores y operadores que produce un resultado) |
| *operator* / *operand* | operador / operando |
| *variable* / *constant* | variable / constante |
| *scope* | alcance (hasta dónde «se ve» una variable) |
| *hoisting* | elevación |
| *temporal dead zone* | zona muerta temporal |
| *coercion* | coerción (conversión automática de tipos) |
| *short-circuit* | cortocircuito |
| *string* | cadena de texto |
| *template literal* | plantilla de texto |

> 📌 **Origen de la información.** El resultado de **todos** los ejemplos se obtuvo **ejecutando el código en el navegador** (Chrome) y contrastándolo con otro motor (Node.js). Las descripciones siguen la terminología de MDN Web Docs y de la especificación de ECMAScript. Los **mensajes de error** aparecen en **inglés**, porque así los entrega el navegador; el texto los traduce.

---

## 🟨 ¿Qué es JavaScript?

### 🧭 1 ¿Qué es JavaScript?

*Resultados de aprendizaje: RA-1*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 01 — ¿Qué es JavaScript?](01-que-es-javascript.md): HTML, CSS y JavaScript sobre una misma página de la tienda.

![Tres piezas de una página web. HTML es el contenido: el título Café Aroma y el párrafo con el total. CSS es el aspecto: color marrón para el título y verde en negrita para el total. JavaScript es el comportamiento: calcula 4.5 por 3 y escribe 13.5 en la página.](../imagenes/html-css-javascript.svg)

#### 🌍 Contexto

Una página web se compone de tres tecnologías que hacen trabajos distintos. Para entender JavaScript conviene empezar por saber en qué se diferencia de las otras dos.

#### 💡 Concepto

**JavaScript** es un **lenguaje de programación** que se ejecuta en el navegador y permite que una página **calcule, decida y reaccione**. HTML da el contenido, CSS da el aspecto y JavaScript da el comportamiento.

#### 📖 Explicación

| Tecnología | Qué hace | Ejemplo |
|---|---|---|
| **HTML** | el **contenido** y su estructura | `<h1>Café Aroma</h1>` |
| **CSS** | el **aspecto** | `h1 { color: #92400e; }` |
| **JavaScript** | el **comportamiento** | `const total = precio * cantidad;` |

- Según MDN, JavaScript es un lenguaje de *scripting* («guiones») para hacer páginas interactivas.
- El navegador trae un **motor de JavaScript** incorporado: no hay que instalar nada.
- Un programa es una **secuencia de instrucciones** que se ejecutan en orden.
- Los comentarios (`// ...`) no se ejecutan: son notas para quien lee.

---

## 🖥️ La consola

### ⌨️ 2 La consola

*Resultados de aprendizaje: RA-2*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 02 — La consola](02-la-consola.md): expresiones, `console.log`, `undefined` y un error en la consola.

![Una ventana de navegador con el panel de la consola abierto. Se escribe 2 más 3 y la consola devuelve 5. Con console.log se imprime Hola, Aroma y la consola devuelve undefined. Al escribir un nombre que no existe aparece un error en rojo: Uncaught ReferenceError: precioCafe is not defined.](../imagenes/la-consola.svg)

#### 🌍 Contexto

Para aprender a programar hace falta probar ideas rápido, sin crear una página cada vez. El navegador tiene una herramienta pensada para eso.

#### 💡 Concepto

La **consola** es un lugar del navegador donde se **escribe JavaScript, se ejecuta al instante y se ve el resultado**. También muestra los mensajes y los errores de la página.

#### 📖 Explicación

- **Cómo abrirla.** En Chrome, `F12` (o `Ctrl + Shift + J`; en Mac, `Cmd + Option + J`) y la pestaña **Consola**. En Firefox, `Ctrl + Shift + K`.
- **Evaluar una expresión:** escribís `2 + 3`, pulsás Enter y la consola devuelve `5`.
- **`console.log(valor)`** escribe un mensaje en la consola y **no devuelve nada** (`undefined`), según MDN.
- Un **error** aparece en rojo con su tipo y su mensaje (`Uncaught ReferenceError: x is not defined`) y no rompe la consola.
- Lo que escribís en la consola se pierde al **recargar** la página.

---

## ⚙️ ¿Cómo funciona JavaScript?

### 📄 3.1 ¿Cómo funciona JavaScript? — Ejecución de JavaScript en línea

*Resultados de aprendizaje: RA-3*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 03 — JavaScript en línea](03-javascript-en-linea.md): `<script>` dentro de la página y el efecto de su lugar.

![Dos formas de incorporar JavaScript. En línea, el código va dentro de la página, entre las etiquetas script. Desde un archivo externo, la etiqueta script tiene un atributo src que apunta a un archivo con extensión js que solo contiene JavaScript. En los dos casos el navegador lee la página de arriba hacia abajo y ejecuta el script cuando lo encuentra: un script en el head se ejecuta antes de que exista el título.](../imagenes/en-linea-frente-a-externo.svg)

#### 🌍 Contexto

Para que el código forme parte de la página hay que incorporarlo. La forma más directa es escribirlo dentro del propio HTML.

#### 💡 Concepto

JavaScript **en línea** es el código escrito **dentro de la página**, entre las etiquetas `<script>` y `</script>`.

#### 📖 Explicación

```html
<script>
  console.log('Hola desde la página');
</script>
```

- El navegador lee la página **de arriba hacia abajo** y ejecuta cada `<script>` **cuando lo encuentra** (según MDN, un script común se descarga y ejecuta antes de que el navegador siga leyendo la página).
- **El lugar importa.** Un script en el `<head>` se ejecuta **antes** de que existan los elementos del `<body>`: ahí `document.getElementById('titulo')` da `null`. Un script al final del `<body>` ya los encuentra.
- Si un script falla, el resto **de ese script** no se ejecuta, y el navegador informa el error con su **línea**.
- Sirve para pruebas y código corto.

---

### 🗂️ 3.2 ¿Cómo funciona JavaScript? — Ejecución de JavaScript desde un archivo externo

*Resultados de aprendizaje: RA-3*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 04 — JavaScript desde un archivo externo](04-javascript-en-archivo-externo.md): `<script src>` y la comparación con el modo en línea.

#### 🌍 Contexto

Cuando el código crece o se repite en varias páginas, mezclarlo con el HTML se vuelve incómodo.

#### 💡 Concepto

JavaScript **externo** es el código en un **archivo aparte** (extensión `.js`) que la página incorpora con `<script src="ruta/archivo.js"></script>`.

#### 📖 Explicación

```html
<script src="js/tienda.js"></script>
```

- El atributo `src` indica **dónde está el archivo**. Según MDN, sirve como alternativa a escribir el código dentro de la página.
- El archivo `.js` solo lleva **JavaScript** (sin etiquetas HTML).
- Se ejecuta en el lugar donde está la etiqueta, igual que uno en línea.
- Un error se informa con el **nombre del archivo** y la línea (`tienda.js:8`).
- Ventajas: se **reutiliza** en varias páginas, se **organiza** mejor y el navegador lo puede guardar en su memoria.

---

## 📜 ECMAScript

### 🕰️ 4.1 ECMAScript — Versiones de ECMAScript

*Resultados de aprendizaje: RA-4*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 05 — Versiones de ECMAScript](05-versiones-de-ecmascript.md): qué aportó cada versión de ECMAScript.

![Línea de tiempo de ECMAScript. ES5, en diciembre de 2009. Desde ES2015, en junio de 2015, hay una edición por año, cada junio. ES2015 aportó let, const y las plantillas de texto. ES2016 aportó el operador de potencia. ES2020 aportó el operador ?? y BigInt. ES2021 aportó los operadores lógicos de asignación.](../imagenes/versiones-de-ecmascript.svg)

#### 🌍 Contexto

Cuando leés sobre un operador «de ES2021» hace falta saber qué significa. JavaScript tiene un estándar con versiones.

#### 💡 Concepto

**ECMAScript** es la **especificación** del lenguaje (el estándar ECMA-262, mantenido por Ecma International). **JavaScript** es el lenguaje que los navegadores implementan siguiendo esa especificación.

#### 📖 Explicación

| Edición | Publicación | Aportó |
|---|---|---|
| ES5 | diciembre de 2009 | la base del lenguaje en los navegadores |
| ES2015 (ES6) | junio de 2015 | `let`, `const`, plantillas de texto |
| ES2016 | junio de 2016 | operador `**` |
| ES2020 | junio de 2020 | `??`, `BigInt` |
| ES2021 | junio de 2021 | `&&=`, `\|\|=`, `??=` |

- Desde ES2015 hay **una edición por año**, cada junio.
- Cada edición **suma** características sin quitar las anteriores.
- Un nombre como «ES2021» dice **cuándo se incorporó** una característica al estándar, no cuándo la soportan todos los navegadores.

---

### 🌐 4.2 ECMAScript — Estrategia «crossbrowser»

*Resultados de aprendizaje: RA-4*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 06 — Estrategia «crossbrowser»](06-estrategia-crossbrowser.md): comprobar la compatibilidad y detectar con `typeof`.

#### 🌍 Contexto

Que una característica esté en el estándar no significa que todos los navegadores la soporten el mismo día. Tu página tiene que funcionar para quien la abra.

#### 💡 Concepto

Una estrategia **crossbrowser** («entre navegadores») es el conjunto de pasos para que el código funcione en los navegadores de tu público: **consultar** la compatibilidad, **detectar** lo que falta y **decidir** qué usar.

#### 📖 Explicación

| Paso | Qué hacer | Ejemplo |
|---|---|---|
| 1. Consultar | mirar la tabla de compatibilidad de MDN (*Baseline*) | `**`: marzo de 2017 · `??`: julio de 2020 · `&&=`, `\|\|=`, `??=`: septiembre de 2020 |
| 2. Detectar | preguntar con `typeof` si existe | `typeof Number.isNaN === 'function'` |
| 3. Decidir | elegir características *Widely available* o conocer a tu público | — |

- *Baseline*: *Widely available* indica que la característica funciona en los navegadores principales desde hace tiempo.
- `typeof` **no da error** con nombres que no existen: devuelve `'undefined'`.
- La **sintaxis** nueva no se puede detectar desde el mismo script: si el navegador no la entiende, el script **entero** falla con un `SyntaxError`.
- Existen herramientas que convierten el código nuevo en código antiguo (*transpiladores*); en este curso solo se mencionan.

---

## 🧩 Tipos de datos

### 🏷️ 5 Tipos de datos

*Resultados de aprendizaje: RA-5*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 07 — Tipos de datos](07-tipos-de-datos.md): los tipos de datos y `typeof`.

![Los valores de JavaScript se dividen en siete tipos primitivos y los objetos. Los primitivos son number, string, boolean, undefined, null, bigint y symbol. Con typeof se obtiene el nombre del tipo; typeof null da object por un resto histórico.](../imagenes/tipos-de-datos.svg)

#### 🌍 Contexto

Un `5`, un `'5'` y un `true` son cosas distintas y se comportan distinto. Saber de qué tipo es un valor evita errores.

#### 💡 Concepto

Un **tipo de dato** es la clase de un valor. Según MDN, todos los tipos salvo los objetos son **primitivos**: `number`, `string`, `boolean`, `undefined`, `null`, `bigint` y `symbol`.

#### 📖 Explicación

| Tipo | Ejemplo | `typeof` |
|---|---|---|
| número | `42`, `3.14`, `NaN` | `'number'` |
| cadena | `'Aroma'` | `'string'` |
| booleano | `true`, `false` | `'boolean'` |
| sin valor asignado | `undefined` | `'undefined'` |
| ausencia de valor | `null` | `'object'` ⚠️ |
| entero grande | `10n` | `'bigint'` |
| símbolo | `Symbol('id')` | `'symbol'` |
| objeto | `{}`, `[]` | `'object'` |

- **`typeof valor`** devuelve una cadena con el nombre del tipo; con nombres no declarados devuelve `'undefined'` sin error.
- **`typeof null` es `'object'`**: es un resto histórico; MDN indica que para saber si algo es `null` se usa `=== null`.
- Los enteros y los decimales son del mismo tipo, `number` (punto flotante de 64 bits).
- Los objetos, los arreglos y las funciones se estudian en otros módulos.

---

## 📦 Variables

### 🧷 6.1 Variables — Declaración de variables de tipo `var`

*Resultados de aprendizaje: RA-6*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 08 — Variables con `var`](08-variables-con-var.md): declarar, redeclarar y la elevación.

![Comparación de var, let y const. var se reasigna, se puede redeclarar, tiene alcance de función y se puede usar antes de declararla con valor undefined. let se reasigna, no se redeclara, tiene alcance de bloque y usarla antes da error. const no se reasigna, no se redeclara, tiene alcance de bloque, exige un valor inicial y es la opción por defecto.](../imagenes/var-let-y-const.svg)

#### 🌍 Contexto

Para reutilizar un valor hay que guardarlo con un nombre. Eso es una variable, y `var` es la forma más antigua de declararla.

#### 💡 Concepto

Una **variable** es un **nombre** asociado a un valor guardado en la memoria. `var` la declara con **alcance de función**.

#### 📖 Explicación

```js
var precio = 4.5;
```

- **Se puede redeclarar**: `var precio = 5` no da error (MDN: no da error ni en modo estricto) y reemplaza el valor.
- **Elevación (*hoisting*)**: las declaraciones `var` se procesan **antes** de ejecutar el código; antes de la asignación la variable vale `undefined`.
- **Alcance de función**: no respeta los bloques `{ }`; una `var` declarada dentro de un bloque se ve afuera.
- Por estos tres comportamientos, `var` causa errores difíciles de encontrar: en código nuevo se evita.

---

### 🔁 6.2 Variables — Declaración de variables tipo `let`

*Resultados de aprendizaje: RA-6*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 09 — Variables con `let`](09-variables-con-let.md): alcance de bloque y zona muerta temporal.

#### 🌍 Contexto

A veces querés que una variable cambie de valor pero que no se pueda declarar dos veces por descuido.

#### 💡 Concepto

`let` (ES2015) declara una variable **que se puede reasignar**, con **alcance de bloque**.

#### 📖 Explicación

```js
let cantidad = 3;
cantidad = 4;
```

- **No se puede redeclarar** en el mismo ámbito: da `SyntaxError: Identifier 'cantidad' has already been declared`.
- **Alcance de bloque**: solo existe dentro del `{ }` donde se declara.
- **Zona muerta temporal**: usarla antes de declararla da `ReferenceError: Cannot access 'x' before initialization` (con `var` daría `undefined`).
- Se puede declarar **sin valor** (`let x;`): vale `undefined`.
- Se usa para valores que **van a cambiar**.

---

### 🔒 6.3 Variables — Declaración de variables tipo `const`

*Resultados de aprendizaje: RA-6*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 10 — Constantes con `const`](10-constantes-con-const.md): declarar y el error al reasignar.

#### 🌍 Contexto

Hay valores que no deberían cambiar nunca, como el IVA. Conviene que el lenguaje lo impida.

#### 💡 Concepto

`const` (ES2015) declara una **constante**: un nombre que **no se puede reasignar**, con alcance de bloque.

#### 📖 Explicación

```js
const IVA = 0.21;
```

- **Reasignar da error**: `IVA = 0.1` → `TypeError: Assignment to constant variable.`
- **Exige un valor inicial**: `const SIN_VALOR` → `SyntaxError: Missing initializer in const declaration`.
- **No se redeclara** en el mismo ámbito.
- `contador++` también falla: incrementar es reasignar.
- Es la **opción por defecto**: si el valor cambia, se pasa a `let`.

---

## 🔐 Variables - Declaración de variables tipo `const` (en profundidad)

### 🧠 7 Variables - Declaración de variables tipo `const` (en profundidad)

*Resultados de aprendizaje: RA-6*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 11 — Profundizando en `const`](11-profundizando-en-const.md): `const` frente a «inmutable» y la tabla de decisión.

#### 🌍 Contexto

Es común creer que una constante «no se puede cambiar en absoluto». La realidad es más sutil.

#### 💡 Concepto

`const` crea una **referencia inmutable** a un valor, pero **no significa que el valor sea inmutable** (MDN). Lo que no se puede es **reasignar el nombre**.

#### 📖 Explicación

| Caso | Resultado |
|---|---|
| `const tienda = { nombre: 'Aroma' }; tienda.nombre = 'Aroma Centro'` | **funciona**: cambia el contenido del objeto |
| `tienda = {}` | `TypeError`: no se reasigna el nombre |
| `const letras = 'abc'; letras[0] = 'z'` | no cambia nada: las **cadenas** son inmutables |

- Para hacer inmutable un objeto, MDN indica `Object.freeze()` (solo se menciona en este curso).
- **Cómo elegir**: empezá con `const`; si el valor cambia, `let`; evitá `var`.
- Así, cada `let` que ves avisa que ese valor **cambia**.

| | `var` | `let` | `const` |
|---|---|---|---|
| Se reasigna | sí | sí | no |
| Se redeclara | sí | no | no |
| Alcance | función | bloque | bloque |
| Antes de declarar | `undefined` | error | error |

---

## ➕ Operadores

### 🧮 8.1 Operadores aritméticos

*Resultados de aprendizaje: RA-7*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 12 — Operadores aritméticos](12-operadores-aritmeticos.md): `+ - * / % **`, `++`, `--` y la precedencia.

![Las familias de operadores ordenadas de mayor a menor precedencia: paréntesis, postfijos como n++, unarios como menos, no y typeof, potencia, multiplicación división y resto, suma y resta, desplazamientos, comparación de orden, igualdad, bits AND XOR y OR, lógicos AND y OR y el de coalescencia, y asignación. Abajo se resuelve 2 + 3 * 4 en dos pasos, que da 14.](../imagenes/operadores-y-precedencia.svg)

#### 🌍 Contexto

Para calcular el total de un pedido hay que sumar, multiplicar, dividir... con símbolos que el lenguaje entiende.

#### 💡 Concepto

Un **operador** combina valores (**operandos**) y produce un resultado; una **expresión** es esa combinación. Los **aritméticos** hacen cuentas.

#### 📖 Explicación

| Operador | Operación | Ejemplo |
|---|---|---|
| `+` `-` `*` `/` | suma, resta, multiplicación, división | `4.5 * 3` → `13.5` |
| `%` | resto de la división | `3 % 2` → `1` |
| `**` | potencia (ES2016) | `3 ** 2` → `9` |
| `++` `--` | sumar o restar 1 | `n++`, `--n` |

- **Postfijo** (`n++`) devuelve el valor de antes; **prefijo** (`++n`), el nuevo.
- **Precedencia**: `**` antes que `* / %`, y estos antes que `+ -`; los **paréntesis** mandan: `2 + 3 * 4` → `14`; `(2 + 3) * 4` → `20`.
- `**` se resuelve **de derecha a izquierda**: `2 ** 3 ** 2` → `512`.
- Un unario antes de `**` es ambiguo y da `SyntaxError`: `-2 ** 2`; se escribe `(-2) ** 2` o `-(2 ** 2)`.

---

### 📝 8.2 Operadores de asignación

*Resultados de aprendizaje: RA-7*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 13 — Operadores de asignación](13-operadores-de-asignacion.md): `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `**=`.

#### 🌍 Contexto

Es muy común actualizar una variable a partir de su propio valor, como ir sumando al total.

#### 💡 Concepto

El operador **`=`** guarda un valor en una variable. Los de **asignación compuesta** combinan una operación con la asignación.

#### 📖 Explicación

| Forma corta | Equivale a |
|---|---|
| `a += b` | `a = a + b` |
| `a -= b` | `a = a - b` |
| `a *= b` | `a = a * b` |
| `a /= b` | `a = a / b` |
| `a %= b` | `a = a % b` |
| `a **= b` | `a = a ** b` |

- La expresión de asignación **devuelve el valor asignado**.
- La variable tiene que ser `let` (o `var`): una constante no se puede reasignar.

---

### ⬅️ 8.3 Operadores de Desplazamiento con Asignación

*Resultados de aprendizaje: RA-7*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 14 — Desplazamiento con asignación](14-desplazamiento-con-asignacion.md): binario, `<<`, `>>`, `>>>` y sus formas con asignación.

![El número 5 escrito en 8 bits es 00000101. Desplazarlo 2 bits a la izquierda con menor menor da 00010100, que es 20: cada desplazamiento duplica el valor. El número menos 8 en 8 bits es 11111000; desplazarlo 1 bit a la derecha con mayor mayor conserva el signo y da 11111100, que es menos 4. Con mayor mayor mayor se rellena con ceros por la izquierda y el resultado es siempre positivo. Los números reales usan 32 bits; aquí se muestran 8 para que quepan.](../imagenes/binario-y-desplazamientos.svg)

#### 🌍 Contexto

Los operadores de bits trabajan con la forma binaria de los números. Para entenderlos hay que saber leer un número en binario.

#### 💡 Concepto

La computadora guarda los números en **bits** (0 y 1). Los operadores de **desplazamiento** mueven los bits; los de asignación (`<<=`, `>>=`, `>>>=`) guardan el resultado en la variable.

#### 📖 Explicación

| Operador | Qué hace | Ejemplo |
|---|---|---|
| `<<` | desplaza a la izquierda (rellena con ceros): multiplica por 2 en cada paso | `5 << 2` → `20` |
| `>>` | desplaza a la derecha **conservando el signo** | `-8 >> 1` → `-4` |
| `>>>` | desplaza a la derecha **rellenando con ceros** | `-8 >>> 1` → `2147483644` |
| `<<=`, `>>=`, `>>>=` | lo mismo y guardan el resultado | `x <<= 2` |

- `(5).toString(2)` muestra `5` en binario: `'101'`.
- Los operadores de bits convierten los números a **enteros de 32 bits**.
- `x << n` equivale a `x * 2 ** n` (MDN).

---

### 🔣 8.4 Operadores de Bits con Asignación

*Resultados de aprendizaje: RA-7*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 15 — Bits con asignación](15-bits-con-asignacion.md): `&`, `|`, `^`, `~` y sus formas con asignación.

#### 🌍 Contexto

Los bits permiten guardar muchas opciones sí/no en un solo número.

#### 💡 Concepto

Los operadores de **bits** comparan los números bit a bit: `&` (AND), `|` (OR), `^` (XOR) y `~` (NOT). Los de asignación (`&=`, `|=`, `^=`) guardan el resultado.

#### 📖 Explicación

| Operador | Regla por cada bit | `5` y `3` (`101` y `011`) |
|---|---|---|
| `&` | `1` si los dos son `1` | `1` |
| `\|` | `1` si alguno es `1` | `7` |
| `^` | `1` si son distintos | `6` |
| `~` | invierte | `~5` → `-6` |

- Un número binario se escribe con el prefijo `0b`: `0b101` es `5`.
- `permisos |= 0b0010` **enciende** un bit; `permisos &= 0b0100` **conserva** solo ese bit; `permisos ^= 0b0110` **alterna** los bits indicados.
- Es un uso especializado: alcanza con reconocer cada operador.

---

### ⚖️ 8.5 Operadores Lógicos de Asignación

*Resultados de aprendizaje: RA-7*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 16 — Operadores lógicos de asignación](16-logicos-de-asignacion.md): `&&=`, `||=` y `??=`.

#### 🌍 Contexto

A veces querés poner un valor por defecto solo cuando falta, sin tocar lo que ya existe.

#### 💡 Concepto

Los operadores **lógicos de asignación** (`||=`, `&&=`, `??=`) **solo asignan si hace falta**: si no, no tocan la variable (cortocircuito). Son de ES2021.

#### 📖 Explicación

| Operador | Asigna si el valor actual es… | Equivale a |
|---|---|---|
| `\|\|=` | falso | `a \|\| (a = b)` |
| `&&=` | verdadero | `a && (a = b)` |
| `??=` | `null` o `undefined` | `a ?? (a = b)` |

- Con `descuento = 0`: `descuento ??= 0.1` lo deja en `0` y `descuento ||= 0.1` lo pasa a `0.1`.
- Una constante no da error si el operador **no asigna** (`const x = 1; x ??= 2`).
- **Compatibilidad** (MDN): *Widely available* desde **septiembre de 2020**; en navegadores anteriores, `SyntaxError`.

---

### ⚖️ 8.6 Operadores de comparación

*Resultados de aprendizaje: RA-7*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 17 — Operadores de comparación](17-operadores-de-comparacion.md): `==`, `===`, `<`, `>` y la conversión de tipos.

#### 🌍 Contexto

Para decidir si el pedido llega al mínimo o si dos valores son iguales hay que compararlos. La comparación siempre da `true` o `false`.

#### 💡 Concepto

Los operadores de **comparación** comparan dos valores y devuelven un **booleano**.

#### 📖 Explicación

| Operador | Significa |
|---|---|
| `>` `<` `>=` `<=` | mayor, menor, mayor o igual, menor o igual |
| `===` / `!==` | igual / distinto, **estricto** (valor y tipo) |
| `==` / `!=` | igual / distinto, **con conversión de tipos** |

- `5 === '5'` → `false`; `5 == '5'` → `true` (la cadena se convierte a número).
- Con `==`: `0 == false` → `true` y `null == undefined` → `true`; con `===`, ambos dan `false`.
- Las cadenas se comparan **carácter por carácter**: `'10' < '9'` → `true`.
- `NaN` no es igual a nada, ni a sí mismo.
- **Recomendación**: usá `===` y `!==`.

---

### 🔀 8.7 Operadores lógicos

*Resultados de aprendizaje: RA-7*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 18 — Operadores lógicos](18-operadores-logicos.md): `&&`, `||`, `!`, `??` y el cortocircuito.

#### 🌍 Contexto

Las condiciones reales combinan varias partes: «hay stock y llega al mínimo», «o usamos un nombre por defecto».

#### 💡 Concepto

Los operadores **lógicos** combinan valores: `&&` (Y), `||` (O), `!` (NO) y `??` (coalescencia nula).

#### 📖 Explicación

| Operador | Devuelve | Ejemplo |
|---|---|---|
| `&&` | el primer valor falso, o el último | `'a' && 'b'` → `'b'` |
| `\|\|` | el primer valor verdadero, o el último | `0 \|\| 'x'` → `'x'` |
| `!` | el booleano opuesto | `!true` → `false` |
| `??` | la derecha si la izquierda es `null` o `undefined` | `0 ?? 'x'` → `0` |

- `&&` y `||` devuelven **uno de los operandos**, no siempre un booleano.
- **Cortocircuito**: si la parte izquierda decide el resultado, la derecha no se evalúa.
- Son **falsos**: `false`, `0`, `''`, `null`, `undefined` y `NaN`; el resto es verdadero.
- `??` no se puede mezclar con `||` o `&&` sin paréntesis: `null ?? 0 || 5` da `SyntaxError`.
- `??` es de ES2020 (*Widely available* desde julio de 2020).

---

## 🔢 Números enteros y decimales

### 🔟 9 Números enteros y decimales

*Resultados de aprendizaje: RA-8*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 19 — Números enteros y decimales](19-enteros-y-decimales.md): enteros, decimales y los enteros seguros.

![Una recta numérica de menos infinito a más infinito. En el centro está el cero. A los lados, en menos y más 9007199254740991, están los límites de los enteros seguros. Más allá de esos límites los enteros pierden precisión. En los extremos están Infinity y menos Infinity. NaN no está en la recta: es el resultado de una operación sin resultado válido.](../imagenes/la-recta-de-los-numeros.svg)

#### 🌍 Contexto

Los precios tienen decimales, y los decimales en la computadora tienen sorpresas.

#### 💡 Concepto

JavaScript tiene **un solo tipo** para enteros y decimales, `number`, guardado en **punto flotante de 64 bits** (IEEE 754).

#### 📖 Explicación

- Los decimales son **aproximados**: `0.1 + 0.2` da `0.30000000000000004` y `0.1 + 0.2 === 0.3` da `false`.
- Para mostrar un precio se **redondea**: `(0.1 + 0.2).toFixed(2)` → `'0.30'`.
- Los enteros son exactos hasta **`Number.MAX_SAFE_INTEGER`** (`9007199254740991`, `2⁵³ − 1`); más allá se pierde precisión.
- `1e3` es notación científica: `1000`.
- Para enteros más grandes existe `BigInt` (`10n`).

---

### ❓ 9.1 Números NaN

*Resultados de aprendizaje: RA-8*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 20 — El valor NaN](20-numeros-nan.md): cuándo aparece `NaN` y cómo detectarlo.

#### 🌍 Contexto

A veces un cálculo no tiene un resultado válido, como convertir `'abc'` en un número.

#### 💡 Concepto

`NaN` (*Not a Number*) es el valor que resulta de una **operación numérica sin resultado válido**. Es de tipo `number`.

#### 📖 Explicación

- Aparece con `0 / 0`, `Number('abc')`, `'abc' * 2` o `undefined + 1`.
- **Contagia**: cualquier operación con `NaN` da `NaN`.
- **No es igual a sí mismo**: `NaN === NaN` es `false` (es el único valor de JavaScript así, según MDN).
- Se detecta con **`Number.isNaN(valor)`**, que da `true` solo si el valor **es** `NaN`.
- `isNaN('abc')` da `true` porque convierte antes: se prefiere `Number.isNaN`.

---

### ♾️ 9.2 Números infinitos

*Resultados de aprendizaje: RA-8*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 21 — Los números infinitos](21-numeros-infinitos.md): `Infinity`, `-Infinity` y la división entre cero.

#### 🌍 Contexto

Dividir entre cero en JavaScript no rompe el programa.

#### 💡 Concepto

`Infinity` y `-Infinity` son valores numéricos **mayores y menores que cualquier otro número**.

#### 📖 Explicación

- `1 / 0` da `Infinity` y `-1 / 0` da `-Infinity`: no hay error.
- `Infinity + 1` sigue siendo `Infinity`; pero `Infinity - Infinity` y `0 * Infinity` dan `NaN`.
- Un número demasiado grande también da infinito: `10 ** 1000`.
- Se detecta con **`Number.isFinite(valor)`** (da `false` para infinito y para `NaN`).

---

## 🔤 Cadenas

### ✂️ 10 Cadenas

*Resultados de aprendizaje: RA-9*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 22 — Cadenas](22-cadenas.md): comillas, plantillas, escapes, `length` y concatenación.

![La cadena 'Aroma' como cinco cajas con las letras A, r, o, m, a y sus posiciones 0, 1, 2, 3 y 4. Su longitud es 5. La posición 0 es la A y la posición 4 es la última a. La posición 10 no existe y da undefined. Abajo se muestra cómo el operador más une cadenas y cómo '5' + 3 da '53'.](../imagenes/la-cadena-y-sus-posiciones.svg)

#### 🌍 Contexto

Los mensajes para las personas son texto: nombres, frases, totales.

#### 💡 Concepto

Una **cadena** es una **sucesión de caracteres**. Se escribe entre comillas simples, dobles o de plantilla (comillas invertidas).

#### 📖 Explicación

| Forma | Ejemplo | Para qué |
|---|---|---|
| Comillas simples o dobles | `'Aroma'`, `"Aroma"` | iguales |
| Plantilla | `` `Total: ${4.5 * 3}` `` | insertar valores con `${...}` (ES2015) |
| Escapes | `\n` (salto de línea), `\'` (comilla), `\\` (barra) | caracteres especiales |

- `'Aroma'.length` → `5`; la **posición** empieza en `0`: `'Aroma'[0]` → `'A'`; una posición que no existe da `undefined`.
- **`+` une cadenas**; si un operando es cadena, el otro se convierte a texto: `'5' + 3` → `'53'`. `-` y `*` convierten a número: `'5' - 3` → `2`.
- El orden importa: `'a' + 1 + 2` → `'a12'`; `1 + 2 + 'a'` → `'3a'`.
- Las cadenas **no se modifican**: `letras[0] = 'z'` no cambia nada.
- Los métodos de cadenas (`slice`, `split`...) se estudian en otro módulo.
