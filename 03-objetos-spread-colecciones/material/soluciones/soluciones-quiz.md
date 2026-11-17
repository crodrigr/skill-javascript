# 🔑 Soluciones — Quiz 01 de la Clase 03 (material docente)

No compartir este archivo con los estudiantes. Las respuestas con valores se comprobaron ejecutando el código en Chrome (y en Node).

| Ítem | Tipo | Respuesta correcta | RA | Sesión |
|---|---|---|---|---|
| 1 | Selección múltiple | **A** | RA-1 | 1 |
| 2 | Identificación de resultado | **D** | RA-1 | 1 |
| 3 | Selección múltiple | **C** | RA-2 | 1 |
| 4 | Identificación de resultado | **B** | RA-2 | 1 |
| 5 | Identificación de resultado | **A** | RA-3 | 1 |
| 6 | Identificación de resultado | **D** | RA-3 | 1 |
| 7 | Identificación de resultado | **C** | RA-1 | 1 |
| 8 | Selección múltiple | **B** | RA-3 | 1 |
| 9 | Identificación de resultado | **A** | RA-4 | 2 |
| 10 | Selección múltiple | **D** | RA-4 | 2 |
| 11 | Identificación de resultado | **C** | RA-4 | 2 |
| 12 | Identificación de resultado | **B** | RA-5 | 2 |
| 13 | Identificación de resultado | **A** | RA-5 | 2 |
| 14 | Identificación de resultado | **D** | RA-6 | 2 |
| 15 | Identificación de resultado | **C** | RA-6 | 2 |
| 16 | Selección múltiple | **B** | RA-6 | 2 |
| 17 | Selección múltiple | **A** | RA-7 | 3 |
| 18 | Identificación de resultado | **D** | RA-8 | 3 |
| 19 | Identificación de resultado | **C** | RA-8 | 3 |
| 20 | Identificación de resultado | **B** | RA-9 | 3 |
| 21 | Identificación de resultado | **A** | RA-9 | 3 |
| 22 | Identificación de resultado | **D** | RA-10 | 3 |
| 23 | Selección múltiple | **C** | RA-11 | 3 |
| 24 | Problema breve | Ver abajo | RA-12 | 3 |

## Justificaciones

**1.** **A**. Un objeto literal se escribe entre llaves con pares `clave: valor`. Los corchetes son arreglos y no admiten `clave: valor`.

**2.** **D**. `delete` elimina la propiedad: `in` da `false` y leerla da `undefined`.

**3.** **C**. Una clave con espacios solo se puede leer con corchetes y comillas.

**4.** **B**. `producto.proveedor` es `undefined`; con `?.` la lectura se corta y devuelve `undefined` en vez de fallar.

**5.** **A**. Con `cafe.doble()`, `this` es `cafe`: `4.5 * 2` es `9`.

**6.** **D**. `f()` se llama sin objeto: `this` es el objeto global, `this.precio` es `undefined` y `undefined * 2` da `NaN`.

**7.** **C**. Cada `{ }` es un objeto distinto: `a === b` es `false`. `c` apunta al mismo objeto que `a`: `true`.

**8.** **B**. La flecha no tiene `this` propio y no apunta al objeto; el método abreviado sí recibe como `this` el objeto con el que se lo llama.

**9.** **A**. `undefined` en un objeto se omite; las claves y los textos van con comillas dobles.

**10.** **D**. JSON exige comillas dobles: las comillas simples en el texto JSON no son válidas.

**11.** **C**. En JSON, `NaN` se convierte en `null`.

**12.** **B**. `color` no existe en el objeto: se usa el valor por defecto.

**13.** **A**. Gana la última clave repetida: `y` vale `20`; `x` se conserva.

**14.** **D**. El *spread* hace una copia superficial: `c.cliente` es el mismo objeto que `p.cliente`.

**15.** **C**. `Object.assign` modifica el destino y lo devuelve: es el mismo objeto.

**16.** **B**. `structuredClone` copia todos los niveles. A es la misma referencia; B y D (con `pedido` de destino) comparten el objeto anidado.

**17.** **A**. Un `Set` guarda valores únicos: es lo que hace falta cuando solo importa qué hay.

**18.** **D**. `push` devuelve la nueva longitud (`3`) y `pop` el elemento quitado (`c`).

**19.** **C**. `splice(1, 2)` quita dos elementos desde la posición 1, los devuelve y deja el arreglo sin ellos.

**20.** **B**. `find` devuelve el primer producto sin stock (`Té`) y `filter` devuelve los dos que tienen stock.

**21.** **A**. Sin comparador, `sort()` ordena como texto: `'1'` y `'10'` van antes que `'9'`.

**22.** **D**. El `Set` guarda los valores únicos (`3`); `get` devuelve el valor de la clave, o `undefined` si no existe.

**23.** **C**. `FormData` solo incluye los campos con `name`; el que no lo tiene se omite.

**24.** Una solución posible: `const conteo = new Map();` y un `for (const v of ventas) { conteo.set(v, (conteo.get(v) || 0) + 1); }` seguido de `console.log(conteo);`. Resultado: `Map(2) {'Café' => 2, 'Té' => 1}`.
