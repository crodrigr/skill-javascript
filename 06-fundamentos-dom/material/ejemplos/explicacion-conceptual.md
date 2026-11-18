# 📚 Explicación conceptual — Fundamentos del DOM y manipulación mediante clases

Hasta ahora, tu JavaScript trabajaba con números, textos, objetos y colecciones, y mostraba el resultado en la consola. En este módulo hacés que tu código **«vea» la página web**: encuentra elementos, cambia sus atributos, sus clases y su contenido. Eso se hace a través del **DOM** (*Document Object Model*, «modelo de objetos del documento»). Los ejemplos siguen con la tienda ficticia **«Aroma»**: un menú de productos, una tarjeta con foto y botones, y un contador de pedidos.

La clase se dicta en **tres sesiones**: la **sesión 1** cubre los bloques 1 y 2 (el DOM y la búsqueda de elementos); la **sesión 2**, los bloques 3 y 4 (atributos y `classList`); y la **sesión 3**, el bloque 5 (contenido del DOM) y el proyecto de cierre. El **bloque 1** («¿Qué es el DOM?») se agrega como introducción: el temario original empezaba en el 2.

Resultados de aprendizaje de la clase:

- **RA-1**: explicar qué es el DOM, la página como árbol de nodos y `document`.
- **RA-2**: buscar elementos con los cinco métodos y elegir el adecuado.
- **RA-3**: distinguir lo que devuelve cada método (elemento, `null`, `HTMLCollection`, `NodeList`) y recorrerlo.
- **RA-4**: leer, cambiar, alternar y quitar atributos.
- **RA-5**: explicar los atributos booleanos.
- **RA-6**: manipular clases con `classList`.
- **RA-7**: leer y cambiar el contenido con `nodeName`, `textContent`, `outerText`, `innerHTML` y `outerHTML`.
- **RA-8**: explicar el riesgo de `innerHTML` y usar `setHTML()` como alternativa segura cuando esté disponible.
- **RA-9**: combinar búsqueda, atributos, clases y contenido en una página de la tienda.

## 🗒️ Glosario

| Término | Equivalente |
|---|---|
| *DOM* | modelo de objetos del documento: la página como un árbol de objetos |
| *node* / *element* | nodo (cualquier pieza del árbol) / elemento (un nodo de etiqueta) |
| *selector* | selector CSS: un texto que describe qué elementos buscar (`#id`, `.clase`, `etiqueta`) |
| *HTMLCollection* / *NodeList* | colección de elementos (viva) / lista de nodos (estática) |
| *live* / *static* | viva (se actualiza sola) / estática (una foto del momento) |
| *attribute* | atributo: un dato dentro de la etiqueta (`href`, `src`, `class`) |
| *boolean attribute* | atributo booleano: vale `true` con solo existir (`disabled`) |
| *class list* | lista de clases de un elemento |
| *sanitize* | sanear: eliminar de un HTML lo que puede ejecutar código |
| *XSS* | *cross-site scripting*: lograr que código ajeno corra en la página de otra persona |

> 📌 **Origen de la información.** El resultado de **todos** los ejemplos se obtuvo **ejecutando el código en el navegador** (Chrome). **No se contrastó con otro motor**, porque no hay otro navegador disponible para la verificación; por eso las descripciones siguen la terminología de MDN Web Docs y de la especificación DOM, y la compatibilidad de `setHTML()` se anota con la fecha de consulta. Los **mensajes de error** aparecen en **inglés**, porque así los entrega el navegador; el texto los traduce.
>
> 👀 **La consola real y los elementos.** Si escribís un elemento en la consola de DevTools, lo muestra como un árbol que se despliega. Los ejemplos imprimen datos concretos (textos, `outerHTML`) para ver el resultado en una línea.
>
> 🚫 **Lo que queda para más adelante.** No creamos ni eliminamos nodos (`createElement`, `appendChild`), no usamos `style` en línea, no recorremos el árbol (`parentNode`, `children`), ni formularios y sus eventos, *event delegation*, `fetch` o clases (`class`).

---

## 🌳 ¿Qué es el DOM?

### 🧭 1 · ¿Qué es el DOM?

*Resultados de aprendizaje: RA-1*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 01 — El DOM: la página como un árbol](01-el-dom-como-arbol.md): la página como árbol; `document` y `nodeName`
> - [Ejemplo 02 — El script al final del body](02-script-al-final.md): por qué el script va al final del `<body>`

![A la izquierda, el HTML de una página con un título y una lista de tres productos. A la derecha, el mismo contenido como un árbol: la raíz document tiene el elemento html, que contiene head, con title, y body. El body contiene el h1 con id titulo y la lista ul con id menu, que contiene tres elementos li.](../imagenes/arbol-del-dom.svg)

#### 🌍 Contexto

Cuando abrís una página, el navegador no guarda el HTML como un texto: lo convierte en una estructura de objetos que tu código puede recorrer y modificar.

#### 💡 Concepto

El **DOM** es la representación de la página como un **árbol de nodos**; **`document`** es su raíz y cada etiqueta es un **elemento**.

#### 📖 Explicación

- **El HTML es el texto; el DOM es el árbol.** Cambiar el DOM cambia lo que se ve, pero **no modifica el archivo `.html`**.
- **`document`** es el punto de entrada: `document.title`, `document.body` y los métodos de búsqueda.
- **El navegador arma el árbol de arriba hacia abajo:** un script solo ve los elementos que ya existen. Por eso el `<script>` va **al final del `<body>`** (Ejemplo 02).
- **Cada elemento es un objeto** con propiedades (`nodeName`, `textContent`…) y métodos (`getAttribute`…).
- **Lo que viene después:** encontrar elementos (bloque 2) y cambiarlos (bloques 3 a 5).

---

## 🔎 Búsqueda de elementos HTML desde JavaScript

### 🧭 2 · Búsqueda de elementos HTML desde JavaScript

*Resultados de aprendizaje: RA-2, RA-3*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 10 — Elegir el método de búsqueda](10-elegir-el-metodo.md): los cinco métodos sobre la misma página
> - [Ejemplo 09 — Recorrer colecciones](09-recorrer-colecciones.md): cómo recorrer cada colección

![Tabla con los cinco métodos de búsqueda. getElementById recibe un id y devuelve un elemento o null. getElementsByClassName y getElementsByTagName devuelven una HTMLCollection viva, vacía si no hay coincidencias. querySelector recibe un selector CSS y devuelve el primer elemento que coincide o null. querySelectorAll devuelve una NodeList estática, con forEach, vacía si no hay coincidencias.](../imagenes/metodos-de-busqueda.svg)

#### 🌍 Contexto

Para cambiar un elemento primero hay que **encontrarlo**. Hay cinco métodos y cada uno devuelve algo distinto.

#### 💡 Concepto

Los métodos de búsqueda de `document` devuelven **un elemento** (o `null`) o **una colección** de elementos (vacía si no hay coincidencias).

#### 📖 Explicación

- **Para un elemento:** `getElementById` y `querySelector`; si no existe, devuelven `null`.
- **Para varios:** `getElementsByClassName` y `getElementsByTagName` (`HTMLCollection` viva) y `querySelectorAll` (`NodeList` estática).
- **`null` rompe al usarlo:** `elemento.textContent` con `elemento` nulo da `TypeError`.
- **Una colección vacía no es `null`:** tiene `length` igual a `0`.
- **Los subtemas siguientes** detallan cada método.

**Qué devuelve cada método:**

| Método | Recibe | Devuelve | Si no hay nada |
|---|---|---|---|
| `getElementById(id)` | un `id` (sin `#`) | un elemento | `null` |
| `getElementsByClassName(clase)` | una clase (sin `.`) | `HTMLCollection` (viva) | colección vacía |
| `getElementsByTagName(etiqueta)` | una etiqueta | `HTMLCollection` (viva) | colección vacía |
| `querySelector(selector)` | un selector CSS | el primero que coincide | `null` |
| `querySelectorAll(selector)` | un selector CSS | `NodeList` (estática) | `NodeList` vacía |

### 🧭 2.1 · Búsqueda de elementos HTML desde JavaScript — getElementById()

*Resultados de aprendizaje: RA-2, RA-3*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 03 — getElementById: un elemento por su id](03-get-element-by-id.md): un elemento por su `id`, o `null`

#### 🌍 Contexto

El `id` identifica un único elemento: es la forma más directa de encontrarlo.

#### 💡 Concepto

`document.getElementById(id)` devuelve **el elemento** con ese `id`, o **`null`** si no existe.

#### 📖 Explicación

- **El `id` se escribe sin `#`** y distingue mayúsculas y minúsculas.
- **Devuelve un solo elemento,** porque el `id` debe ser único en la página.
- **Comprobá `null`** si no estás seguro de que exista: `if (elemento !== null)`.
- **Es el método más rápido y claro** cuando el elemento tiene `id`.

### 🧭 2.2 · Búsqueda de elementos HTML desde JavaScript — getElementsByClassName()

*Resultados de aprendizaje: RA-2, RA-3*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 04 — getElementsByClassName: todos los de una clase](04-get-elements-by-class-name.md): todos los de una clase y su recorrido
> - [Ejemplo 08 — Colección viva y colección estática](08-coleccion-viva-y-estatica.md): colección viva frente a estática
> - [Ejemplo 09 — Recorrer colecciones](09-recorrer-colecciones.md): `for`, `for…of` y `forEach`

#### 🌍 Contexto

Varios elementos comparten una clase y querés trabajar con todos ellos.

#### 💡 Concepto

`getElementsByClassName(clase)` devuelve una **`HTMLCollection` viva** con los elementos que tienen esa clase.

#### 📖 Explicación

- **El nombre va sin punto.** Con dos clases separadas por espacio, devuelve los que tienen **las dos**.
- **Se recorre con `length` y posiciones** (`coleccion[0]`) o con `for…of`; **no tiene `forEach`**.
- **Es viva:** si un elemento deja de tener la clase, desaparece de la colección sola (Ejemplo 08).
- **Sin coincidencias** devuelve una colección vacía, no `null`.

### 🧭 2.3 · Búsqueda de elementos HTML desde JavaScript — getElementsByTagName()

*Resultados de aprendizaje: RA-2, RA-3*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 05 — getElementsByTagName: todos los de una etiqueta](05-get-elements-by-tag-name.md): por etiqueta, y dentro de un elemento

#### 🌍 Contexto

A veces querés todos los `<li>` o todos los `<img>`, sin importar sus clases.

#### 💡 Concepto

`getElementsByTagName(etiqueta)` devuelve una **`HTMLCollection` viva** con todos los elementos de esa etiqueta.

#### 📖 Explicación

- **La etiqueta se escribe sin `<` ni `>`** (`'li'`).
- **También se puede usar sobre un elemento** (`menu.getElementsByTagName('li')`) para buscar solo dentro de él.
- **Es viva y sin `forEach`,** igual que `getElementsByClassName`.
- **Para criterios más específicos** (etiqueta con clase, hijos directos) conviene `querySelectorAll`.

### 🧭 2.4 · Búsqueda de elementos HTML desde JavaScript — querySelector()

*Resultados de aprendizaje: RA-2*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 06 — querySelector: el primero que coincide con un selector](06-query-selector.md): selectores CSS y el primero que coincide
> - [Ejemplo 10 — Elegir el método de búsqueda](10-elegir-el-metodo.md): un selector inválido da `SyntaxError`

#### 🌍 Contexto

Con el CSS ya sabés describir elementos con selectores; `querySelector` te permite reutilizar esa sintaxis en JavaScript.

#### 💡 Concepto

`querySelector(selector)` devuelve **el primer elemento** que coincide con un **selector CSS**, o **`null`**.

#### 📖 Explicación

- **Sirve para todo:** `#id`, `.clase`, `etiqueta`, `li.destacado`, `#menu li:last-child`, `[data-precio="1.8"]`.
- **Solo devuelve el primero,** aunque haya varios que coincidan.
- **Un selector mal escrito** lanza `SyntaxError: … is not a valid selector` y corta el programa.
- **También funciona sobre un elemento:** `producto.querySelector('button')` busca **dentro** de `producto`.

### 🧭 2.5 · Búsqueda de elementos HTML desde JavaScript — querySelectorAll()

*Resultados de aprendizaje: RA-2, RA-3*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 07 — querySelectorAll: todos los que coinciden](07-query-selector-all.md): una `NodeList` con `forEach`
> - [Ejemplo 08 — Colección viva y colección estática](08-coleccion-viva-y-estatica.md): estática frente a viva
> - [Ejemplo 09 — Recorrer colecciones](09-recorrer-colecciones.md): recorrerla

#### 🌍 Contexto

Cuando necesitás todos los elementos que coinciden con un selector, y recorrerlos cómodamente.

#### 💡 Concepto

`querySelectorAll(selector)` devuelve una **`NodeList` estática** con todos los elementos que coinciden, en el orden de la página.

#### 📖 Explicación

- **Tiene `forEach`:** `lista.forEach((elemento) => { … })`.
- **Es estática:** una foto del momento; no se actualiza si la página cambia.
- **Se pueden combinar selectores** con coma (`h1, li`).
- **Sin coincidencias** devuelve una lista vacía, no `null`.

---

## 🏷️ Gestionar atributos del DOM

### 🧭 3 · Gestionar atributos del DOM

*Resultados de aprendizaje: RA-4*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 11 — getAttribute y setAttribute](11-get-y-set-attribute.md): leer y cambiar `href` y `src`
> - [Ejemplo 21 — Destacar un producto con un clic](21-destacar-un-producto.md): clase y atributo con un clic

![Arriba, un enlace con tres atributos: id con valor carta, href con valor carta.html y target con valor _blank, con los métodos getAttribute, setAttribute y removeAttribute. Abajo, un botón con el atributo booleano disabled: con disabled igual a false sigue deshabilitado porque basta con que exista; se habilita quitando el atributo con removeAttribute o toggleAttribute.](../imagenes/atributos-y-booleanos.svg)

#### 🌍 Contexto

Los **atributos** son los datos que se escriben dentro de la etiqueta y definen adónde lleva un enlace, qué imagen se muestra o si un botón está activo.

#### 💡 Concepto

Un **atributo** es un par **nombre-valor** dentro de una etiqueta (`href="carta.html"`); el DOM ofrece métodos para leerlos, cambiarlos, alternarlos y quitarlos.

#### 📖 Explicación

- **El valor de un atributo es siempre texto.**
- **Cinco métodos:** `getAttribute`, `setAttribute`, `getAttributeNames`, `toggleAttribute` y `removeAttribute`.
- **Cambiar un atributo** modifica lo que ve la persona, sin recargar la página.
- **El atributo `class`** tiene un tratamiento especial con `classList` (bloque 4).

### 🧭 3.1 · Gestionar atributos del DOM — getAttribute()

*Resultados de aprendizaje: RA-4*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 11 — getAttribute y setAttribute](11-get-y-set-attribute.md): leer atributos (y `null`)

#### 🌍 Contexto

Antes de cambiar un atributo conviene saber cuánto vale.

#### 💡 Concepto

`elemento.getAttribute(nombre)` devuelve el valor del atributo **como texto**, o **`null`** si no existe.

#### 📖 Explicación

- **Devuelve texto:** aunque parezca un número, es un texto.
- **Un atributo inexistente** da `null`.
- **Un atributo booleano presente** devuelve el texto vacío (`""`).
- **El nombre** de los atributos de etiquetas HTML no distingue mayúsculas.

### 🧭 3.2 · Gestionar atributos del DOM — setAttribute()

*Resultados de aprendizaje: RA-4*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 11 — getAttribute y setAttribute](11-get-y-set-attribute.md): cambiar `href`, `src` y `alt`

#### 🌍 Contexto

Para cambiar adónde lleva un enlace o qué imagen se muestra.

#### 💡 Concepto

`elemento.setAttribute(nombre, valor)` **crea** el atributo o **cambia** su valor; el valor se convierte en texto.

#### 📖 Explicación

- **Crea el atributo si no existe** y lo actualiza si existe.
- **Un valor que no es texto** se convierte (`true` pasa a `"true"`).
- **En atributos booleanos** no sirve para apagarlos (Ejemplo 14).
- **Con `class`,** reemplaza **todo** el texto: para una clase suelta conviene `classList`.

### 🧭 3.3 · Gestionar atributos del DOM — getAttributeNames()

*Resultados de aprendizaje: RA-4*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 12 — getAttributeNames: listar los atributos](12-get-attribute-names.md): listar los nombres y recorrerlos

#### 🌍 Contexto

A veces no sabés qué atributos tiene un elemento y querés listarlos.

#### 💡 Concepto

`elemento.getAttributeNames()` devuelve un **arreglo** con los **nombres** de todos sus atributos.

#### 📖 Explicación

- **Es un arreglo de textos,** en el orden en que están escritos.
- **Se recorre con `for…of`** y, con `getAttribute`, se leen los valores.
- **Un elemento sin atributos** da un arreglo vacío.

### 🧭 3.4 · Gestionar atributos del DOM — toggleAttribute()

*Resultados de aprendizaje: RA-4*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 13 — toggleAttribute y removeAttribute](13-toggle-y-remove-attribute.md): alternar y forzar un atributo

#### 🌍 Contexto

Habilitar y deshabilitar un botón, mostrar y ocultar un aviso: son interruptores sobre un atributo.

#### 💡 Concepto

`elemento.toggleAttribute(nombre)` **pone** el atributo si falta y lo **quita** si está; devuelve `true` si **quedó puesto**.

#### 📖 Explicación

- **Con un segundo argumento** (`true` o `false`) fuerza el resultado: `toggleAttribute('disabled', true)` lo pone y `false` lo quita.
- **Está pensado para atributos booleanos.**
- **Devuelve un booleano** que dice cómo quedó.

### 🧭 3.5 · Gestionar atributos del DOM — removeAttribute()

*Resultados de aprendizaje: RA-4*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 13 — toggleAttribute y removeAttribute](13-toggle-y-remove-attribute.md): quitar atributos (y uno inexistente)
> - [Ejemplo 14 — Atributos booleanos: basta con que existan](14-atributos-booleanos.md): la forma correcta de «apagar» un booleano

#### 🌍 Contexto

Para eliminar un atributo por completo.

#### 💡 Concepto

`elemento.removeAttribute(nombre)` **quita** el atributo; si no existía, **no da error**.

#### 📖 Explicación

- **Después, `getAttribute` devuelve `null`.**
- **Es la forma correcta** de apagar un atributo booleano.
- **No devuelve un valor** (`undefined`).

### 🧭 3.6 · Gestionar atributos del DOM — Atributos booleanos

*Resultados de aprendizaje: RA-5*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 14 — Atributos booleanos: basta con que existan](14-atributos-booleanos.md): `disabled`, `hidden`, `checked` y el engaño de `"false"`
> - [Ejemplo 13 — toggleAttribute y removeAttribute](13-toggle-y-remove-attribute.md): `toggleAttribute` con booleanos

#### 🌍 Contexto

Algunos atributos no tienen un valor real: solo importa si están o no, como el `disabled` de un botón.

#### 💡 Concepto

Un **atributo booleano** (`disabled`, `hidden`, `checked`, `readonly`, `required`, `selected`) está **activado cuando existe**, sin importar su valor.

#### 📖 Explicación

- **`<button disabled>` y `<button disabled="false">` están los dos deshabilitados.**
- **`setAttribute('disabled', 'false')` no lo habilita:** hay que **quitarlo** (`removeAttribute` o `toggleAttribute`).
- **Las propiedades** `elemento.disabled`, `elemento.hidden` y `elemento.checked` reflejan el estado como `true` o `false`.
- **Es una de las confusiones más comunes** al empezar con el DOM.

---

## 🎨 Propiedad classList

### 🧭 4 · Propiedad classList

*Resultados de aprendizaje: RA-6*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 15 — classList: la lista de clases](15-class-list-sintaxis-length-item.md): la lista de clases
> - [Ejemplo 21 — Destacar un producto con un clic](21-destacar-un-producto.md): destacar un producto con un clic

![El atributo class del elemento es producto destacado oferta, y classList lo presenta como una lista con tres clases en las posiciones 0, 1 y 2. A la derecha, los miembros de classList y lo que devuelven: length da 3, item de 0 da producto, contains de oferta da true, add y remove no devuelven valor, toggle devuelve un booleano, toggle con condición fuerza el resultado y replace devuelve true o false.](../imagenes/class-list.svg)

#### 🌍 Contexto

Las clases controlan el aspecto de un elemento desde el CSS. Cambiar las clases desde JavaScript es la forma más limpia de cambiar el aspecto sin escribir estilos en el código.

#### 💡 Concepto

**`classList`** es la lista de clases de un elemento y ofrece métodos para consultarlas y cambiarlas **una por una**.

#### 📖 Explicación

- **Sin escribir estilos en JavaScript:** el CSS define cómo se ve cada clase; el código solo la agrega o la quita.
- **Cambia solo la clase indicada** y respeta las demás.
- **Los nueve subtemas** recorren sus miembros.

**Qué devuelve cada miembro:**

| Miembro | Devuelve |
|---|---|
| `length` | la cantidad de clases |
| `item(i)` | la clase en la posición `i`, o `null` |
| `contains(clase)` | `true` o `false` |
| `add(clase)` / `remove(clase)` | nada (`undefined`) |
| `toggle(clase)` | `true` si la clase quedó puesta |
| `toggle(clase, condicion)` | lo mismo, forzando según la condición |
| `replace(vieja, nueva)` | `true` si reemplazó; `false` si no existía la vieja |

### 🧭 4.1 · Propiedad classList — Sintaxis General

*Resultados de aprendizaje: RA-6*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 15 — classList: la lista de clases](15-class-list-sintaxis-length-item.md): qué es `classList` y cómo se recorre

#### 🌍 Contexto

El atributo `class` es un texto con las clases separadas por espacios; `classList` lo muestra como una lista.

#### 💡 Concepto

`elemento.classList` (sin paréntesis) es una **lista** (`DOMTokenList`) de las clases; se usa con `.metodo()`.

#### 📖 Explicación

- **Se recorre con `for…of`** y con posiciones.
- **Es viva:** si cambia el atributo `class`, la lista cambia sola.
- **Las clases distinguen mayúsculas** (`oferta` y `Oferta` son distintas).

### 🧭 4.2 · Propiedad classList — classList.length

*Resultados de aprendizaje: RA-6*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 15 — classList: la lista de clases](15-class-list-sintaxis-length-item.md): contar las clases

#### 🌍 Contexto

A veces hay que saber cuántas clases tiene un elemento.

#### 💡 Concepto

`classList.length` es la **cantidad de clases** del elemento.

#### 📖 Explicación

- **Es una propiedad:** se escribe sin paréntesis.
- **Un elemento sin clases** tiene `length` igual a `0`.

### 🧭 4.3 · Propiedad classList — classList.item

*Resultados de aprendizaje: RA-6*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 15 — classList: la lista de clases](15-class-list-sintaxis-length-item.md): `item(0)`, `item(9)` y los corchetes

#### 🌍 Contexto

Para leer una clase por su posición.

#### 💡 Concepto

`classList.item(posicion)` devuelve la clase en esa posición (desde `0`), o **`null`** si la posición no existe.

#### 📖 Explicación

- **Es equivalente a los corchetes:** `classList[1]` hace lo mismo que `item(1)`.
- **El orden** es el del atributo `class`.

### 🧭 4.4 · Propiedad classList — classList.contains

*Resultados de aprendizaje: RA-6*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 16 — classList.contains: ¿tiene esta clase?](16-class-list-contains.md): `contains` dentro de un `if`

#### 🌍 Contexto

Para decidir qué hacer según si una clase está puesta.

#### 💡 Concepto

`classList.contains(clase)` devuelve **`true`** si el elemento tiene esa clase y **`false`** si no.

#### 📖 Explicación

- **El nombre va sin punto** y distingue mayúsculas y minúsculas.
- **Se usa mucho en un `if`** para tomar decisiones.
- **Una clase inexistente** da `false`, sin error.

### 🧭 4.5 · Propiedad classList — classList.add

*Resultados de aprendizaje: RA-6*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 17 — classList.add y classList.remove](17-class-list-add-y-remove.md): agregar una o varias clases, sin duplicar
> - [Ejemplo 21 — Destacar un producto con un clic](21-destacar-un-producto.md): clase y atributo con un clic

#### 🌍 Contexto

Para que un elemento «tome» el aspecto de una clase.

#### 💡 Concepto

`classList.add(clase)` **agrega** la clase **si no está**; se pueden pasar **varias** separadas por coma.

#### 📖 Explicación

- **No duplica:** agregar una clase que ya existe no cambia nada.
- **No devuelve un valor** (`undefined`).
- **Un nombre con espacios** da `InvalidCharacterError` (para dos clases, dos argumentos).
- **Las demás clases se conservan.**

### 🧭 4.6 · Propiedad classList — classList.remove

*Resultados de aprendizaje: RA-6*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 17 — classList.add y classList.remove](17-class-list-add-y-remove.md): quitar una clase y una inexistente
> - [Ejemplo 08 — Colección viva y colección estática](08-coleccion-viva-y-estatica.md): quitar una clase cambia las colecciones

#### 🌍 Contexto

Para que un elemento deje de tener el aspecto de una clase.

#### 💡 Concepto

`classList.remove(clase)` **quita** la clase; si no estaba, **no pasa nada**.

#### 📖 Explicación

- **No da error** al quitar una clase que no existe.
- **No devuelve un valor** (`undefined`).
- **Se pueden quitar varias** a la vez, separadas por coma.

### 🧭 4.7 · Propiedad classList — classList.toggle(clase)

*Resultados de aprendizaje: RA-6*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 18 — classList.toggle: alternar una clase](18-class-list-toggle.md): alternar con clic
> - [Ejemplo 21 — Destacar un producto con un clic](21-destacar-un-producto.md): destacar un producto

#### 🌍 Contexto

Interruptores: destacar y quitar el destaque, abrir y cerrar un menú.

#### 💡 Concepto

`classList.toggle(clase)` **agrega** la clase si falta y la **quita** si está; devuelve `true` si **quedó puesta**.

#### 📖 Explicación

- **Alterna en cada llamada.**
- **Con un clic como disparador** (Clase 04) hace interruptores en una línea.
- **El booleano devuelto** permite guardar o mostrar el estado.

### 🧭 4.8 · Propiedad classList — classList.toggle(clase, expr)

*Resultados de aprendizaje: RA-6*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 19 — classList.toggle con una condición](19-class-list-toggle-con-condicion.md): forzar según una condición

#### 🌍 Contexto

A veces la clase debe reflejar un estado calculado (por ejemplo, «sin stock»), no alternar.

#### 💡 Concepto

`classList.toggle(clase, condicion)`: si la condición es **verdadera**, la clase queda **puesta**; si es **falsa**, **quitada**.

#### 📖 Explicación

- **No alterna:** repetir la llamada con la misma condición no cambia nada.
- **Devuelve un booleano:** si la clase quedó puesta.
- **Con una condición falsa** quita la clase aunque no existiera.

### 🧭 4.9 · Propiedad classList — classList.replace(old, new)

*Resultados de aprendizaje: RA-6*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 20 — classList.replace: cambiar una clase por otra](20-class-list-replace.md): reemplazar y el `false` si no existía

#### 🌍 Contexto

Cambiar de estado «activo» a «inactivo» en un solo paso.

#### 💡 Concepto

`classList.replace(vieja, nueva)` pone la clase nueva **en lugar** de la vieja y devuelve **`true`**; si la vieja no existe, devuelve **`false`** y **no cambia nada**.

#### 📖 Explicación

- **Conserva la posición** y las demás clases.
- **El `false`** avisa que no había nada que reemplazar.
- **Es lo mismo que `remove` y `add`,** pero en una sola llamada.

---

## 📝 Contenido en el DOM

### 🧭 5 · Contenido en el DOM

*Resultados de aprendizaje: RA-7*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 22 — nodeName y textContent](22-node-name-y-text-content.md): texto del elemento
> - [Ejemplo 24 — innerHTML: leer y asignar HTML](24-inner-html.md): HTML interno
> - [Ejemplo 25 — outerHTML: el elemento completo](25-outer-html.md): el elemento completo

![Un párrafo con id nota que dice Hola, un span oculto con el texto oculto, y mundo. textContent lee Hola oculto mundo, incluido el texto oculto, y al asignarse reemplaza el contenido por texto. outerText lee Hola mundo, solo lo visible, y al asignarse reemplaza el elemento completo. innerHTML lee el HTML de adentro y al asignarse lo interpreta. outerHTML lee el elemento con su etiqueta y al asignarse reemplaza el elemento.](../imagenes/contenido-del-elemento.svg)

#### 🌍 Contexto

Mostrar información nueva en la página (un precio, un mensaje, una lista) significa cambiar el **contenido** de un elemento.

#### 💡 Concepto

El **contenido** de un elemento se lee y se cambia con `textContent`, `outerText`, `innerHTML` y `outerHTML`; `nodeName` dice **qué es** el nodo.

#### 📖 Explicación

- **Texto:** `textContent` y `outerText`. **HTML:** `innerHTML` y `outerHTML`.
- **«inner» = lo de adentro; «outer» = el elemento completo.**
- **Cuidado con lo que viene de afuera:** interpretar HTML ajeno es peligroso (Ejemplos 26 y 27).

**Comparación:**

| Propiedad | Al leer | Al asignar |
|---|---|---|
| `textContent` | todo el texto (incluso el oculto) | reemplaza el contenido por **texto** |
| `outerText` | el texto visible | reemplaza el **elemento** completo |
| `innerHTML` | el HTML de adentro | **interpreta** el HTML y reemplaza el contenido |
| `outerHTML` | el elemento con su etiqueta | reemplaza el **elemento** completo |

### 🧭 5.1 · Contenido en el DOM — nodeName

*Resultados de aprendizaje: RA-7*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 22 — nodeName y textContent](22-node-name-y-text-content.md): `nodeName` de elementos y de `document`
> - [Ejemplo 01 — El DOM: la página como un árbol](01-el-dom-como-arbol.md): `nodeName` en el árbol

#### 🌍 Contexto

Para saber **qué es** un nodo: una etiqueta, el documento…

#### 💡 Concepto

`nodo.nodeName` devuelve el nombre del nodo: la etiqueta **en mayúsculas** para un elemento HTML (`P`, `LI`) y `#document` para `document`.

#### 📖 Explicación

- **Útil para comprobar** qué elemento tenés en la mano.
- **En mayúsculas** para los elementos HTML.
- **Un nodo de texto** se llama `#text` (no los usamos aquí).

### 🧭 5.2 · Contenido en el DOM — textContent

*Resultados de aprendizaje: RA-7*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 22 — nodeName y textContent](22-node-name-y-text-content.md): leer y asignar texto
> - [Ejemplo 26 — innerHTML y su riesgo](26-inner-html-y-su-riesgo.md): la forma segura con texto de afuera

#### 🌍 Contexto

Para mostrar o cambiar un texto sin complicaciones.

#### 💡 Concepto

`elemento.textContent` lee o asigna el **texto** del elemento y de sus hijos; al asignar, **reemplaza todo el contenido** por un texto.

#### 📖 Explicación

- **No interpreta etiquetas:** `<strong>` se muestra como texto.
- **Incluye el texto oculto** al leer.
- **Es la forma segura** de mostrar texto que viene de otra persona.
- **Asignar** borra los hijos (por ejemplo, un `<strong>` interno).

### 🧭 5.3 · Contenido en el DOM — outerText

*Resultados de aprendizaje: RA-7*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 23 — outerText frente a textContent](23-outer-text.md): `outerText` frente a `textContent`

#### 🌍 Contexto

Hay una propiedad que lee el texto «como se ve» y que, al asignarse, hace algo inesperado.

#### 💡 Concepto

`elemento.outerText` devuelve el **texto visible** del elemento; al **asignarla**, **reemplaza el elemento completo** por ese texto.

#### 📖 Explicación

- **No incluye el texto oculto,** a diferencia de `textContent`.
- **Asignarla elimina el elemento:** `getElementById` ya no lo encuentra.
- **Si el elemento no se muestra,** da lo mismo que `textContent`.
- **En la práctica** se usa menos: conviene `textContent`.

### 🧭 5.4 · Contenido en el DOM — innerHTML

*Resultados de aprendizaje: RA-7, RA-8*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 24 — innerHTML: leer y asignar HTML](24-inner-html.md): leer y asignar HTML
> - [Ejemplo 26 — innerHTML y su riesgo](26-inner-html-y-su-riesgo.md): el riesgo con texto de afuera

#### 🌍 Contexto

Para mostrar contenido con etiquetas (listas, negritas, enlaces).

#### 💡 Concepto

`elemento.innerHTML` lee o asigna el **HTML interno**; al asignar, el texto se **interpreta como HTML**.

#### 📖 Explicación

- **Asignar `''`** vacía el elemento.
- **El `<script>` insertado no se ejecuta,** pero otras etiquetas con atributos de eventos (`onerror`, `onclick`) **sí** pueden ejecutar código.
- **Con texto de otra persona es un riesgo (XSS):** usá `textContent` (Ejemplo 26).
- **Solo con HTML propio** y de confianza.

### 🧭 5.5 · Contenido en el DOM — outerHTML

*Resultados de aprendizaje: RA-7*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 25 — outerHTML: el elemento completo](25-outer-html.md): leer el elemento completo y reemplazarlo

#### 🌍 Contexto

Para ver el elemento con su propia etiqueta, o reemplazarlo entero.

#### 💡 Concepto

`elemento.outerHTML` devuelve el HTML **del elemento con su etiqueta**; al **asignarla**, **reemplaza el elemento**.

#### 📖 Explicación

- **La variable vieja** sigue apuntando al elemento anterior (ya fuera de la página).
- **Para el nuevo** hay que buscarlo de nuevo.
- **Mismo cuidado que `innerHTML`:** interpreta HTML.
- **Leerlo es muy útil** para ver cómo quedó un elemento (los ejemplos lo usan).

### 🧭 5.6 · Contenido en el DOM — setHTML()

*Resultados de aprendizaje: RA-8*

> 🔗 **Ejemplos de este concepto**
>
> - [Ejemplo 27 — setHTML: HTML saneado, si el navegador lo tiene](27-set-html.md): detección de la función y camino alternativo
> - [Ejemplo 26 — innerHTML y su riesgo](26-inner-html-y-su-riesgo.md): el riesgo que resuelve

![Un comentario de una persona usuaria contiene la etiqueta b con Hola y una imagen con un atributo onerror que ejecuta código. Con textContent todo se muestra como texto y no se ejecuta nada. Con innerHTML el HTML se interpreta y el onerror ejecuta código, lo que es un riesgo. Con setHTML se conserva la negrita y se elimina la imagen con el onerror, aunque setHTML no está disponible en todos los navegadores.](../imagenes/inner-html-frente-a-set-html.svg)

#### 🌍 Contexto

Si querés mostrar HTML que viene de otra persona, necesitás eliminar lo peligroso: eso es **sanear**.

#### 💡 Concepto

`elemento.setHTML(texto)` inserta el HTML **saneado**: elimina los `<script>` y los atributos de eventos y conserva lo inofensivo.

#### 📖 Explicación

- **Alternativa segura a `innerHTML`** para HTML no confiable.
- **Disponibilidad limitada:** según los datos de compatibilidad de MDN (consultados el 17 de noviembre de 2026), figura desde Chrome 146 y Firefox 148; Safari no la ofrece. Comprobalo en MDN antes de depender de ella.
- **Detectala antes de usarla:** `typeof elemento.setHTML === 'function'`.
- **El camino alternativo seguro** es `textContent`; no uses `innerHTML` con texto no confiable.
- **No conviertas el resultado a texto** para volver a insertarlo con `innerHTML`: perdés la protección.
