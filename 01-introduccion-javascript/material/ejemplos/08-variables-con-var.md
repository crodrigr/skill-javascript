# 📘 Ejemplo 08 — Variables con `var`

> 🎓 **Resultados de aprendizaje:** RA-6
>
> 💻 **Cómo se obtuvo.** Cada línea se escribió, en orden, en una consola nueva de Chrome, y lo que se muestra es lo que devolvió. Los resultados se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Lucía necesita guardar el precio del café para usarlo más adelante. La forma original de declarar una **variable** en JavaScript es `var`.

## 💻 Código

Abrí una consola **nueva** (recargá la página) y escribí estas líneas, una por una, pulsando Enter después de cada una:

```js
var precio = 4.5
var precio = 5
precio
console.log(antes); var antes = 10; console.log(antes);
{ var dentro = 1; }
dentro
typeof noDeclarada
```

## 🔍 Análisis paso a paso

1. **Qué es una variable.** Es un **nombre** asociado a un valor guardado en la memoria. Se declara con una palabra clave (`var`, `let` o `const`), el nombre y, opcionalmente, un valor: `var precio = 4.5`.
2. **`var` es la declaración clásica.** Existe desde el principio del lenguaje (ES5 y anteriores). La consola devuelve `undefined` porque una declaración no produce un valor.
3. **Se puede redeclarar.** Declarar `var precio` dos veces **no da error**: la segunda declaración reemplaza el valor, y `precio` vale `5`. Es cómodo, pero peligroso: se puede pisar un valor sin querer.
4. **Elevación (*hoisting*).** Las declaraciones `var` se procesan **antes** de ejecutar el código. Por eso `console.log(antes)` **antes** de `var antes = 10` no da error: muestra `undefined` (la variable existe pero todavía no tiene valor), y después de asignarla muestra `10`.
5. **Alcance de función, no de bloque.** El alcance es hasta dónde «se ve» una variable. `var` **no respeta los bloques** `{ }`: la variable declarada dentro del bloque sigue existiendo afuera (`dentro` vale `1`).
6. **`typeof` y las no declaradas.** `typeof noDeclarada` da `'undefined'`, sin error.
7. **Por qué se prefiere otra.** Los tres comportamientos (redeclarar, elevarse y ver más allá de los bloques) causan errores difíciles de encontrar. Desde ES2015 hay `let` y `const`; hoy `var` se usa poco en código nuevo.

## ✅ Resultado esperado

La consola muestra (`>` es lo que escribís y `<` es el resultado que devuelve):

```text
> var precio = 4.5
< undefined
> var precio = 5
< undefined
> precio
< 5
> console.log(antes); var antes = 10; console.log(antes);
undefined
10
< undefined
> { var dentro = 1; }
< undefined
> dentro
< 1
> typeof noDeclarada
< 'undefined'
```

- `var` permite redeclarar, se eleva y ignora los bloques.
