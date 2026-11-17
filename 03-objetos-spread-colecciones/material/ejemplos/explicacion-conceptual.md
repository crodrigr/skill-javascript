# 📚 Explicación conceptual — Objetos, Spread, desestructuración y colecciones de datos

Hasta ahora guardabas cada dato en una variable suelta. En este módulo aprendés a **agrupar datos relacionados en objetos**, a convertirlos en texto (JSON), a extraer y copiar sus partes con una sintaxis corta y a guardar **varios valores** en colecciones: arreglos, `Set` y `Map`. Los ejemplos siguen con la tienda ficticia **«Aroma»** de las Clases 01 y 02, ahora con productos, clientes y pedidos. Conviene haber hecho esas clases: usamos variables, decisiones, bucles y funciones.

La clase se dicta en **tres sesiones**: la **sesión 1** cubre el bloque 1 (objetos, métodos, acceso y `this`); la **sesión 2**, los bloques 2 y 3 (JSON, desestructuración, *spread* y copias) y la **sesión 3**, los bloques 4 a 8 (colecciones, arreglos, `Set`, `Map` y `FormData`).

Resultados de aprendizaje de la clase:

- **RA-1**: declarar objetos y agregar, leer, modificar, borrar y comprobar propiedades.
- **RA-2**: definir métodos y acceder a propiedades y métodos con punto y con corchetes.
- **RA-3**: explicar a qué apunta `this` en un método y reconocer cuándo se pierde.
- **RA-4**: convertir objetos a JSON y JSON a objetos, y explicar qué se pierde.
- **RA-5**: usar la desestructuración y el operador *spread*.
- **RA-6**: copiar objetos con `Object.assign()` y *spread*, y distinguir copia superficial de profunda.
- **RA-7**: elegir entre arreglo, objeto, `Set` y `Map`.
- **RA-8**: crear, manipular y recorrer arreglos.
- **RA-9**: buscar y ordenar elementos de un arreglo.
- **RA-10**: usar `Set` y `Map`.
- **RA-11**: leer un formulario con `FormData`.
- **RA-12**: combinar objetos y colecciones en un problema de la tienda.

## 🗒️ Glosario

| Término | Equivalente |
|---|---|
| *object* / *property* / *method* | objeto / propiedad / método |
| *key* / *value* | clave / valor |
| *this* | referencia al objeto con el que se llama un método |
| *JSON* | notación de objetos de JavaScript, un formato de texto para intercambiar datos |
| *destructuring* | desestructuración (extraer propiedades o elementos en variables) |
| *spread operator* | operador de propagación (`...`) |
| *shallow copy* / *deep copy* | copia superficial / copia profunda |
| *array* / *index* | arreglo / índice (posición) |
| *callback* | una función que se le pasa a otra (aquí, a un método de arreglo) |
| *Set* / *Map* | conjunto de valores únicos / mapa de pares clave-valor |
| *FormData* | datos de un formulario |

> 📌 **Origen de la información.** El resultado de **todos** los ejemplos se obtuvo **ejecutando el código en el navegador** (Chrome) y contrastándolo con otro motor (Node.js). Las descripciones siguen la terminología de MDN Web Docs y de la especificación de ECMAScript. Los **mensajes de error** aparecen en **inglés**, porque así los entrega el navegador; el texto los traduce. La consola real muestra los objetos, arreglos, `Set` y `Map` como un árbol que se despliega; en este material se escriben en **una sola línea**.
>
> 🚫 **Lo que queda para más adelante.** No usamos clases, prototipos, `call`/`apply`/`bind`, *closures*, recursión, `map`/`reduce` ni `async`.

---

## 🧱 ¿Qué son los Objetos?

### 🧭 1 · ¿Qué son los objetos?

*Resultados de aprendizaje: RA-1*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 01 — Declarar un objeto](01-objeto-literal.md): declarar un producto con la notación literal
> - [Ejemplo 07 — Los objetos se comparan por referencia](07-objetos-por-referencia.md): referencias: `===` entre objetos y `const`

![Un objeto producto escrito con llaves. Tiene tres propiedades, nombre con el valor Café, precio con 4.5 y stock con 12, y un método precioConIva que devuelve precio por 1.21, es decir 5.445. Cada propiedad es un par formado por una clave y un valor. Debajo se muestra cómo se leen: producto.nombre da Café, producto.precio da 4.5 y producto.precioConIva() da 5.445.](../imagenes/anatomia-de-un-objeto.svg)

#### 🌍 Contexto

Un producto tiene nombre, precio y stock. Con variables sueltas, cada producto nuevo suma más variables y nada dice cuáles van juntas.

#### 💡 Concepto

Un **objeto** es un conjunto de datos relacionados, guardados como pares **clave-valor** bajo un solo nombre; puede incluir funciones (métodos).

#### 📖 Explicación

- **Casi todo lo que no es un valor simple es un objeto:** productos, clientes, pedidos, arreglos, funciones.
- **Se comparan y se copian por referencia.** Dos objetos con el mismo contenido no son `===` y dos variables pueden apuntar al mismo objeto (Ejemplo 07).
- **`typeof` da `'object'`.**
- **Lo que viene después:** clases y prototipos (otra forma de crear objetos) quedan para más adelante.

### 🧭 1.1 · Declaración de objetos

*Resultados de aprendizaje: RA-1*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 01 — Declarar un objeto](01-objeto-literal.md): declarar un producto con la notación literal

#### 🌍 Contexto

Para crear un objeto hay que escribir sus datos de una vez.

#### 💡 Concepto

La **notación literal** `{ clave: valor, ... }` declara un objeto con sus propiedades.

#### 📖 Explicación

- **Forma:** llaves, pares `clave: valor` separados por comas: `const producto = { nombre: 'Café', precio: 4.5 };`.
- **Valores:** cualquier tipo, incluidos otros objetos, arreglos y funciones.
- **Objeto vacío:** `{}`; las propiedades se agregan después.
- **Otras formas** (solo mencionadas): `new Object()` y `Object.create()`. La literal es la más corta y clara.

### 🧭 1.2 · Propiedades de objetos

*Resultados de aprendizaje: RA-1*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 02 — Propiedades: agregar, modificar, borrar y comprobar](02-propiedades.md): agregar, modificar, borrar y comprobar propiedades
> - [Ejemplo 07 — Los objetos se comparan por referencia](07-objetos-por-referencia.md): referencias: `===` entre objetos y `const`

#### 🌍 Contexto

Los datos de un producto cambian: sube el precio, se agrega un campo, se descarta otro.

#### 💡 Concepto

Las **propiedades** de un objeto se pueden agregar, modificar, borrar y comprobar.

#### 📖 Explicación

- **Agregar o modificar:** `producto.stock = 12;` crea la propiedad si no existe y la cambia si existe.
- **Borrar:** `delete producto.stock;` la elimina por completo.
- **Comprobar:** `'stock' in producto` da `true` o `false`; leer una propiedad inexistente da `undefined`.
- **Forma abreviada:** `{ nombre, precio }` usa los nombres de las variables como claves.
- **`const` no vuelve inmutable al objeto:** impide reasignar la variable, no cambiar sus propiedades.

### 🧭 1.3 · Métodos de objetos

*Resultados de aprendizaje: RA-2*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 03 — Métodos de un objeto](03-metodos.md): métodos completos y abreviados

#### 🌍 Contexto

Un producto no solo tiene datos: también sabe hacer cosas, como calcular su precio con IVA.

#### 💡 Concepto

Un **método** es una función guardada como propiedad de un objeto.

#### 📖 Explicación

- **Dos formas:** `precioConIva: function () { ... }` y la abreviada `precioConIva() { ... }` (la que se recomienda).
- **Se llama con paréntesis:** `producto.precioConIva()`. Sin paréntesis es la función misma.
- **Dentro del método,** `this` permite leer y cambiar las propiedades del propio objeto.
- **Evitá las flechas como métodos:** no tienen `this` propio (bloque 1.5).

### 🧭 1.4 · Acceso a propiedades y métodos de objetos

*Resultados de aprendizaje: RA-2*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 04 — Acceso con punto y con corchetes](04-acceso-punto-y-corchetes.md): punto, corchetes, `undefined` y `?.`

![Dos formas de leer propiedades del objeto producto. Con punto: producto.nombre da Café. Con corchetes: producto de corchete nombre también da Café; producto de corchete país de origen da Colombia, que solo funciona con corchetes porque la clave tiene un espacio; y con la variable clave igual a precio, producto de corchete clave da 4.5. Una propiedad que no existe da undefined.](../imagenes/punto-frente-a-corchetes.svg)

#### 🌍 Contexto

Hay dos maneras de leer una propiedad, y cada una resuelve un caso distinto.

#### 💡 Concepto

La **notación de punto** (`objeto.clave`) y la de **corchetes** (`objeto['clave']`) acceden a propiedades y métodos.

#### 📖 Explicación

- **Punto:** corto y legible, pero la clave debe ser un identificador válido.
- **Corchetes:** para claves con espacios o guiones y para claves guardadas en una variable (`producto[clave]`).
- **Anidados:** `producto.origen.pais` encadena accesos.
- **`undefined` frente a `TypeError`:** una propiedad inexistente da `undefined`, pero leer una propiedad **de** `undefined` da `TypeError`.
- **Encadenamiento opcional `?.`:** `producto.proveedor?.nombre` evita el error y devuelve `undefined`.

### 🧭 1.5 · `this` en el contexto de los objetos

*Resultados de aprendizaje: RA-3*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 05 — `this` dentro de un método](05-this-en-metodos.md): `this` según el objeto de la llamada
> - [Ejemplo 06 — Cuando `this` se pierde](06-this-perdido.md): el método suelto, la flecha y el modo estricto

![Cuatro formas de llamar a un método y el valor de this en cada una. Con producto.total(), this es producto y el resultado es 9. Con el método guardado en una variable y llamado como suelto(), this es el objeto global y el resultado es NaN. Con una función de flecha como método, this es el del lugar donde se escribió y no el objeto. En modo estricto, un método suelto tiene this undefined y da TypeError.](../imagenes/this-segun-la-llamada.svg)

#### 🌍 Contexto

Un mismo método puede responder con datos distintos según el objeto con el que se lo llama… o dejar de funcionar si se lo separa del objeto.

#### 💡 Concepto

`this` es el **objeto con el que se llama al método**: el que está antes del punto en `objeto.metodo()`.

#### 📖 Explicación

- **Regla:** en `producto.total()`, `this` es `producto`. Importa **cómo se llama**, no dónde se escribió la función.
- **Método suelto:** `const suelto = producto.total; suelto()` pierde el objeto: `this` pasa a ser el objeto global y `this.precio` es `undefined` (el resultado suele ser `NaN`).
- **Modo estricto:** con `'use strict'`, un método suelto tiene `this` igual a `undefined` y da `TypeError`.
- **Función de flecha:** no tiene `this` propio; usa el del lugar donde se escribió. No sirve como método.
- **Cómo evitarlo:** llamá siempre al método con el objeto, o envolvelo en otra función.
- **Fuera de esta clase:** `call`, `apply` y `bind`.

---

## 🧾 ¿Qué son los JSON?

### 🧭 2 · ¿Qué son los JSON?

*Resultados de aprendizaje: RA-4*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 08 — De objeto a texto: `JSON.stringify()`](08-json-stringify.md): de objeto a texto
> - [Ejemplo 10 — El viaje de ida y vuelta entre objeto y JSON](10-json-y-objetos.md): qué sobrevive al viaje

![Un objeto de JavaScript se convierte en un texto JSON con JSON.stringify y el texto vuelve a ser un objeto con JSON.parse. El texto es {"nombre":"Café","precio":4.5,"origen":null}. En el viaje se pierden las funciones y las propiedades con undefined; NaN pasa a null y las fechas pasan a texto.](../imagenes/viaje-json.svg)

#### 🌍 Contexto

Para guardar o enviar un objeto hay que convertirlo en **texto**. Los programas intercambian datos con un formato común.

#### 💡 Concepto

**JSON** (*JavaScript Object Notation*) es un formato de **texto** para representar datos, parecido a un objeto literal pero más estricto.

#### 📖 Explicación

- **Reglas:** claves y textos con **comillas dobles**; sin funciones, comentarios ni comas finales.
- **Tipos:** objetos, arreglos, textos, números, booleanos y `null`.
- **Dos funciones:** `JSON.stringify()` (objeto → texto) y `JSON.parse()` (texto → objeto).
- **No es lo mismo que un objeto:** el JSON es un `string`.

### 🧭 2.1 · `JSON.stringify()` y `JSON.parse()`

*Resultados de aprendizaje: RA-4*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 08 — De objeto a texto: `JSON.stringify()`](08-json-stringify.md): de objeto a texto
> - [Ejemplo 09 — De texto a objeto: `JSON.parse()`](09-json-parse.md): de texto a objeto y sus errores

#### 🌍 Contexto

Cada dirección del viaje tiene su función.

#### 💡 Concepto

`JSON.stringify(valor)` devuelve el texto JSON; `JSON.parse(texto)` devuelve el valor de JavaScript.

#### 📖 Explicación

- **`stringify`** acepta una sangría: `JSON.stringify(objeto, null, 2)`.
- **`parse`** lanza `SyntaxError` si el texto no es JSON válido: comillas simples, coma final o clave sin comillas.
- **El texto JSON va entre comillas simples** en el código para poder usar comillas dobles adentro.
- **Un error detiene el script,** porque no usamos `try/catch` en esta clase.

### 🧭 2.2 · `JSON.stringify()` y `JSON.parse()` — Relación de JSON con los objetos

*Resultados de aprendizaje: RA-4*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 10 — El viaje de ida y vuelta entre objeto y JSON](10-json-y-objetos.md): qué sobrevive al viaje

#### 🌍 Contexto

Convertir un objeto a JSON y volver no devuelve siempre lo mismo.

#### 💡 Concepto

JSON solo describe **datos simples**; un objeto de JavaScript puede contener más.

#### 📖 Explicación

| Valor | Qué pasa en el viaje |
|---|---|
| texto, número, booleano, `null` | sobrevive |
| arreglo y objeto anidado | sobrevive (con esos mismos tipos) |
| función (método) | desaparece |
| `undefined` | desaparece (en un arreglo, `null`) |
| `NaN` e infinito | pasa a `null` |
| fecha (`Date`) | pasa a texto |

- **El resultado es otro objeto,** no el mismo.
- **Uso como copia:** sirve para objetos con datos simples; para otros casos, `structuredClone()` (bloque 3.1).

---

## 🧬 Desestructuración y Spread

### 🧭 3 · Desestructuración de objetos y Spread Operator (...)

*Resultados de aprendizaje: RA-5*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 11 — Desestructuración de objetos](11-desestructuracion.md): extraer, renombrar y valores por defecto
> - [Ejemplo 12 — El operador *spread* en objetos](12-spread-en-objetos.md): copiar y combinar con `...`

![A la izquierda, la desestructuración: de un objeto con nombre, precio y stock se extraen las variables nombre y precio con una sola línea. A la derecha, el operador spread: al combinar a y b con spread, la última clave repetida gana; si se escribe a y luego b, y vale 20; si se escribe b y luego a, y vale 2.](../imagenes/destructuracion-y-spread.svg)

#### 🌍 Contexto

Escribir `producto.nombre`, `producto.precio`… cansa, y copiar un objeto cambiando una sola propiedad exige repetir todas las demás.

#### 💡 Concepto

La **desestructuración** extrae propiedades en variables: `const { nombre, precio } = producto;`. El operador ***spread*** (`...`) expande las propiedades de un objeto dentro de otro.

#### 📖 Explicación

- **Renombrar:** `{ stock: unidades }`. **Valor por defecto:** `{ color = 'sin color' }` (solo reemplaza a `undefined`).
- **Anidados y resto:** `{ origen: { pais } }` y `{ nombre, ...resto }`.
- **En parámetros de función:** `function describir({ nombre, precio }) { ... }`.
- **Spread:** `{ ...base, precio: 3.9 }` copia y cambia; `{ ...a, ...b }` combina.
- **Gana la última clave repetida.** El orden de los `...` importa.
- **Desestructurar `undefined` o `null` da `TypeError`.**

### 🧭 3.1 · Clonar objetos o elementos mediante `Object.assign()`

*Resultados de aprendizaje: RA-6*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 13 — Copiar y combinar con `Object.assign()`](13-object-assign.md): copiar y combinar con `Object.assign()`
> - [Ejemplo 14 — Copia superficial y copia profunda](14-copia-superficial-y-profunda.md): copia superficial y copia profunda

![Un pedido original tiene numero, total y un objeto cliente con la ciudad Rosario. Con la copia superficial, hecha con spread, el total es independiente, pero cliente apunta al mismo objeto que el original: cambiar la ciudad en la copia cambia también el original. Con la copia profunda, hecha con structuredClone, el cliente es otro objeto y el original no cambia.](../imagenes/copia-superficial-y-profunda.svg)

#### 🌍 Contexto

Copiar un objeto parece fácil hasta que se modifica la copia y cambia también el original.

#### 💡 Concepto

`Object.assign(destino, ...fuentes)` copia las propiedades en el **destino** y lo devuelve; junto con el *spread* hace una **copia superficial**. `structuredClone()` hace una **copia profunda**.

#### 📖 Explicación

- **`Object.assign` modifica el destino:** para copiar sin tocar el original, el destino es `{}`.
- **Superficial:** copia el primer nivel; los objetos anidados **se comparten**.
- **Profunda:** `structuredClone(objeto)` copia todos los niveles, pero no admite funciones (`DataCloneError`).
- **Elegir:** spread para objetos planos; `structuredClone` si hay objetos adentro que se van a modificar.

---

## 🗃️ Colecciones de datos

### 🧭 4 · ¿Qué son las colecciones de datos?

*Resultados de aprendizaje: RA-7*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 15 — Colecciones de datos: ¿cuál elegir?](15-colecciones-cual-elegir.md): arreglo, objeto, `Set` y `Map` con los mismos datos
> - [Ejemplo 25 — El inventario completo](25-inventario-completo.md): objetos, arreglos, `Set` y `Map` juntos

![Cuatro colecciones comparadas. El arreglo es una lista ordenada que admite repetidos y se lee por posición. El objeto guarda pares con claves de texto y describe una cosa. El Set guarda valores únicos. El Map guarda pares clave-valor con claves de cualquier tipo y conoce su tamaño con size.](../imagenes/arreglo-set-map-objeto.svg)

#### 🌍 Contexto

Una tienda no maneja un producto: maneja decenas, y las ventas del día, y cuántas veces se vendió cada cosa. Hacen falta estructuras que guarden **varios** valores.

#### 💡 Concepto

Una **colección** es una estructura que guarda varios valores. JavaScript ofrece cuatro: **arreglo**, **objeto**, **`Set`** y **`Map`**.

#### 📖 Explicación

| Colección | Guarda | Se lee con | Sirve para |
|---|---|---|---|
| Arreglo | lista ordenada, con repetidos | posición (`a[0]`) | una lista de cosas |
| Objeto | pares con clave de texto | clave (`o.precio`) | una cosa con propiedades |
| `Set` | valores únicos | `has(valor)` | qué hay, sin repetidos |
| `Map` | pares con claves de cualquier tipo | `get(clave)` | un diccionario que cambia |

- **Cómo elegir:** ¿importa el orden y puede haber repetidos? → arreglo. ¿Es una cosa con propiedades? → objeto. ¿Solo importa qué hay? → `Set`. ¿Se busca por una clave que cambia? → `Map`.

---

## 📋 Arreglos

### 🧭 5 · ¿Qué son los arreglos?

*Resultados de aprendizaje: RA-8*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 16 — Crear, leer y recorrer arreglos](16-arreglos.md): crear, índices, `length` y recorridos

![Un arreglo de precios con cuatro elementos: 4.5, 3.2, 1.8, 2.2. Los índices empiezan en 0: precios en la posición 0 vale 4.5 y en la posición 3 vale 2.2. La propiedad length vale 4 y el último elemento está en la posición length menos 1. Una posición que no existe, como la 10, da undefined.](../imagenes/arreglo-e-indices.svg)

#### 🌍 Contexto

Los precios de la tienda forman una lista: hay que guardarlos en orden y recorrerlos.

#### 💡 Concepto

Un **arreglo** (*array*) es una lista ordenada de valores; cada uno tiene una **posición** (índice) que empieza en `0`.

#### 📖 Explicación

- **Crear:** `const precios = [4.5, 3.2, 1.8];`. **Leer:** `precios[0]`. **Cantidad:** `precios.length`. **Último:** `precios[precios.length - 1]`.
- **Posición inexistente:** `undefined`.
- **Recorrer:** `for` (con posición), `for...of` (cada elemento) y `forEach` (recibe **una función que se le pasa al método**).
- **`const`** no impide cambiar el contenido del arreglo.
- **Es un objeto:** se compara y se copia por referencia.

### 🧭 5.1 · Manipulación de arreglos: agregar y quitar

*Resultados de aprendizaje: RA-8*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 17 — Agregar y quitar elementos](17-agregar-y-quitar.md): `push`, `pop`, `shift` y `unshift`

![Un pedido empieza como Café y Té. push de Medialuna agrega al final y devuelve 3. unshift de Brownie agrega al principio y devuelve 4. pop quita el último y devuelve Medialuna. shift quita el primero y devuelve Brownie. Los cuatro modifican el arreglo original.](../imagenes/agregar-y-quitar-en-un-arreglo.svg)

#### 🌍 Contexto

El pedido de un cliente crece y se achica.

#### 💡 Concepto

`push`, `unshift`, `pop` y `shift` agregan y quitan en los extremos y **modifican** el arreglo.

#### 📖 Explicación

| Método | Qué hace | Devuelve |
|---|---|---|
| `push(x)` | agrega al final | la nueva longitud |
| `unshift(x)` | agrega al principio | la nueva longitud |
| `pop()` | quita el último | el elemento quitado |
| `shift()` | quita el primero | el elemento quitado |

- **En un arreglo vacío,** `pop()` y `shift()` devuelven `undefined`.

### 🧭 5.2 · Manipulación de arreglos: cortar, unir y copiar

*Resultados de aprendizaje: RA-8*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 18 — `splice`, `slice`, `concat` y copias de arreglos](18-splice-slice-y-copias.md): `splice`, `slice`, `concat` y copias

#### 🌍 Contexto

A veces hay que sacar un tramo del medio, reemplazar elementos, unir listas o copiar una lista.

#### 💡 Concepto

`splice` modifica el arreglo; `slice`, `concat` y el *spread* devuelven uno nuevo.

#### 📖 Explicación

| Método | Modifica el original | Devuelve |
|---|---|---|
| `splice(inicio, cuántos, ...nuevos)` | sí | los elementos quitados |
| `slice(inicio, fin)` | no | un arreglo nuevo con el tramo |
| `concat(otro)` | no | un arreglo nuevo con ambos |
| `[...a, ...b]` | no | un arreglo nuevo |

- **Insertar:** `splice(1, 0, 'x')`. **Reemplazar:** `splice(0, 1, 'x')`.
- **Desestructuración de arreglos:** `const [primero, segundo, ...otros] = lista;` por **posición**.
- **Copia `[...a]`:** superficial.

### 🧭 5.3 · Métodos de búsqueda

*Resultados de aprendizaje: RA-9*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 19 — Buscar un valor: `indexOf` e `includes`](19-busqueda-basica.md): `indexOf` e `includes`
> - [Ejemplo 20 — Buscar con una condición: `find`, `findIndex` y `filter`](20-find-findindex-filter.md): `find`, `findIndex` y `filter`

#### 🌍 Contexto

Buscar un producto en una lista es lo que más se hace con ella.

#### 💡 Concepto

`indexOf` e `includes` buscan **valores simples**; `find`, `findIndex` y `filter` buscan con **una condición**.

#### 📖 Explicación

| Método | Devuelve si no hay resultado |
|---|---|
| `indexOf(valor)` (posición) | `-1` |
| `includes(valor)` (`true`/`false`) | `false` |
| `find(función)` (el primer elemento) | `undefined` |
| `findIndex(función)` (su posición) | `-1` |
| `filter(función)` (arreglo con todos) | `[]` |

- **La función** recibe cada elemento y devuelve `true` o `false`: `productos.find(p => p.stock === 0)`.
- **`find` devuelve el mismo objeto** del arreglo, no una copia.

### 🧭 5.4 · Métodos de ordenamiento

*Resultados de aprendizaje: RA-9*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 21 — Ordenar: `sort()` y `reverse()`](21-ordenamiento.md): `sort()` y `reverse()`

![El arreglo [10, 9, 1, 100] ordenado de tres maneras. Sin comparador, sort convierte los números en texto y el resultado es [1, 10, 100, 9]. Con el comparador a menos b, el orden ascendente es [1, 9, 10, 100]. Con b menos a, el orden descendente es [100, 10, 9, 1]. sort modifica el arreglo original.](../imagenes/sort-y-comparador.svg)

#### 🌍 Contexto

Mostrar los productos de menor a mayor precio exige ordenar, y `sort()` tiene una trampa con los números.

#### 💡 Concepto

`sort()` ordena el arreglo **en el lugar**; sin comparador ordena **como texto**. `reverse()` invierte el orden.

#### 📖 Explicación

- **Sin comparador:** `[10, 9, 1, 100].sort()` da `[1, 10, 100, 9]`.
- **Con comparador `(a, b) => a - b`:** menor a mayor; `b - a`, de mayor a menor. Negativo: `a` va antes; positivo: `b` va antes.
- **Por propiedad:** `(a, b) => a.precio - b.precio`.
- **Textos:** `a.localeCompare(b)`.
- **Modifican el original** y devuelven el mismo arreglo: copiá antes con `[...arreglo]`.

---

## 🔢 Objeto de tipo `Set`

### 🧭 6 · Objeto de tipo `Set`

*Resultados de aprendizaje: RA-10*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 22 — `Set`: valores únicos](22-set.md): valores únicos

#### 🌍 Contexto

Para saber qué productos distintos se vendieron no importa cuántas veces ni en qué orden.

#### 💡 Concepto

Un **`Set`** es una colección de valores **únicos**.

#### 📖 Explicación

- **Crear:** `new Set(arreglo)` quita los repetidos. **Métodos:** `add`, `has`, `delete`, `size`.
- **Recorrer:** `for...of`. **A arreglo:** `[...conjunto]`.
- **Objetos distintos:** dos objetos con el mismo contenido son dos elementos.

---

## 🗺️ Objeto de tipo `Map`

### 🧭 7 · Objeto de tipo `Map`

*Resultados de aprendizaje: RA-10*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 23 — `Map`: pares clave-valor](23-map.md): pares clave-valor

#### 🌍 Contexto

Para el stock de cada producto, o para contar ventas, hace falta asociar una clave con un valor que cambia.

#### 💡 Concepto

Un **`Map`** guarda pares **clave-valor**; las claves pueden ser de cualquier tipo y recuerda cuántos pares tiene.

#### 📖 Explicación

- **Crear:** `new Map()`. **Métodos:** `set`, `get`, `has`, `delete`, `size`, `keys()`, `values()`.
- **Recorrer:** `for (const [clave, valor] of mapa)`.
- **Claves que son objetos:** se buscan por referencia.
- **Contar:** `conteo.set(v, (conteo.get(v) || 0) + 1)`.

---

## 🧾 `FormData`

### 🧭 8 · ¿Qué es `new FormData()`?

*Resultados de aprendizaje: RA-11*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 24 — `FormData`: los datos de un formulario](24-formdata.md): de un formulario a un objeto

#### 🌍 Contexto

Leer un formulario campo por campo es largo. El navegador ofrece un objeto que reúne todos sus campos.

#### 💡 Concepto

**`FormData`** reúne los campos con `name` de un formulario. **Es del navegador,** no de ECMAScript.

#### 📖 Explicación

- **Crear:** `new FormData(formulario)`. **Leer:** `datos.get('campo')`: el valor llega como **texto** (o `null` si no existe).
- **Recorrer:** `for (const [campo, valor] of datos)`.
- **A objeto:** `Object.fromEntries(datos)`; si un nombre se repite, queda el último valor.
- **Solo entran los campos con `name`:** los que no lo tienen, los deshabilitados y las casillas sin marcar no aparecen.
- **No enviamos nada:** `fetch` y los servidores quedan para más adelante.
