# 📘 Ejemplo 09 — Variables con `let`

> 🎓 **Resultados de aprendizaje:** RA-6
>
> 💻 **Cómo se obtuvo.** Cada línea se escribió, en orden, en una consola nueva de Chrome, y lo que se muestra es lo que devolvió. Los resultados se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Lucía quiere que una variable cambie de valor pero que **no se pueda declarar dos veces por error**. Desde ES2015 existe `let`.

## 💻 Código

Abrí una consola **nueva** (recargá la página) y escribí estas líneas, una por una, pulsando Enter después de cada una:

```js
let cantidad = 3
cantidad = 4
cantidad
let cantidad = 5
{ let enBloque = 1; enBloque }
enBloque
{ console.log(tarde); let tarde = 1; }
let sinValor
sinValor
```

## 🔍 Análisis paso a paso

1. **`let` declara una variable que puede cambiar.** `let cantidad = 3` la crea; `cantidad = 4` le **reasigna** otro valor, y la consola muestra el valor asignado (`4`).
2. **No se puede redeclarar.** Una segunda declaración `let cantidad = 5` da `Uncaught SyntaxError: Identifier 'cantidad' has already been declared` («el identificador `cantidad` ya fue declarado»). A diferencia de `var`, el error **avisa** de un posible descuido.
3. **Alcance de bloque.** Una variable `let` solo existe dentro del **bloque** `{ }` donde se declara. Dentro del bloque, `enBloque` vale `1`; afuera da `Uncaught ReferenceError: enBloque is not defined`.
4. **Zona muerta temporal.** Usar una variable `let` **antes** de su declaración no devuelve `undefined` (como `var`): da `Uncaught ReferenceError: Cannot access 'tarde' before initialization` («no se puede acceder a `tarde` antes de inicializarla»). La zona entre el comienzo del bloque y la declaración se llama *temporal dead zone* («zona muerta temporal»).
5. **Declarar sin valor.** `let sinValor` es válido: la variable existe y vale `undefined` hasta que se le asigne algo.
6. **Cuándo usarla.** Para valores que **van a cambiar**: un contador, un total acumulado, un precio que se actualiza.
7. **Nombres.** Elegí nombres claros (`cantidad`, `precioFinal`), sin espacios y que no empiecen con un número. JavaScript distingue mayúsculas y minúsculas: `Precio` y `precio` son distintos.

## ✅ Resultado esperado

La consola muestra (`>` es lo que escribís y `<` es el resultado que devuelve):

```text
> let cantidad = 3
< undefined
> cantidad = 4
< 4
> cantidad
< 4
> let cantidad = 5
Uncaught SyntaxError: Identifier 'cantidad' has already been declared
> { let enBloque = 1; enBloque }
< 1
> enBloque
Uncaught ReferenceError: enBloque is not defined
> { console.log(tarde); let tarde = 1; }
Uncaught ReferenceError: Cannot access 'tarde' before initialization
> let sinValor
< undefined
> sinValor
< undefined
```

- `let` avisa si se redeclara, respeta los bloques y no permite usar la variable antes de declararla.
