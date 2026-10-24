# 📘 Ejemplo 05 — Versiones de ECMAScript

> 🎓 **Resultados de aprendizaje:** RA-4
>
> 💻 **Cómo se obtuvo.** Cada línea se escribió, en orden, en una consola nueva de Chrome, y lo que se muestra es lo que devolvió. Los resultados se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Lucía lee que un operador «es de ES2021» y no sabe qué significa. En este ejemplo conoce ECMAScript y prueba, en la consola, características que llegaron en distintas versiones.

## 💻 Código

Abrí una consola **nueva** (recargá la página) y escribí estas líneas, una por una, pulsando Enter después de cada una:

```js
let cafe = 'Aroma'
2 ** 3
`Hola, ${cafe}`
null ?? 'sin dato'
let cantidad = null
cantidad ??= 1
cantidad
10n + 5n
typeof 10n
```

## 🔍 Análisis paso a paso

1. **ECMAScript** es la **especificación** (el documento que define cómo es el lenguaje). La mantiene Ecma International en el estándar ECMA-262. **JavaScript** es el lenguaje que los navegadores implementan siguiendo esa especificación.
2. **Las versiones.** Antes de ES2015, las ediciones salían con varios años de diferencia (ES5, diciembre de 2009). **ES2015** (junio de 2015, también llamada ES6) fue una gran actualización y, desde entonces, hay una edición **cada año**, cada junio: ES2016, ES2017, ES2018…
3. **ES2015 en la consola.** `let` (el bloque 6) y las **plantillas de texto** con comillas invertidas llegaron en ES2015: `` `Hola, ${cafe}` `` inserta el valor de `cafe` y da `'Hola, Aroma'`.
4. **ES2016.** Aportó el operador de potencia `**`: `2 ** 3` da `8`.
5. **ES2020.** Trajo el operador `??` (devuelve el valor de la derecha solo si el de la izquierda es `null` o `undefined`: `null ?? 'sin dato'` da `'sin dato'`) y el tipo `BigInt` (números enteros muy grandes, con una `n` al final: `10n + 5n` da `15n`).
6. **ES2021.** Trajo los **operadores lógicos de asignación** `&&=`, `||=` y `??=`. Acá, `cantidad ??= 1` asigna `1` porque `cantidad` era `null`.
7. **La tabla.** Cada versión suma características nuevas, sin quitar las anteriores: el código viejo sigue funcionando.
8. **Por qué importa.** No todos los navegadores soportan lo más nuevo al mismo tiempo. Cuando una característica es muy reciente, hay que comprobar su compatibilidad (Ejemplo 06).

## ✅ Resultado esperado

La consola muestra (`>` es lo que escribís y `<` es el resultado que devuelve):

```text
> let cafe = 'Aroma'
< undefined
> 2 ** 3
< 8
> `Hola, ${cafe}`
< 'Hola, Aroma'
> null ?? 'sin dato'
< 'sin dato'
> let cantidad = null
< undefined
> cantidad ??= 1
< 1
> cantidad
< 1
> 10n + 5n
< 15n
> typeof 10n
< 'bigint'
```

| Versión | Publicación | Características que usa este módulo |
|---|---|---|
| ES5 | diciembre de 2009 | la base del lenguaje que usan los navegadores antiguos |
| ES2015 (ES6) | junio de 2015 | `let`, `const` y las plantillas de texto |
| ES2016 | junio de 2016 | operador de potencia `**` |
| ES2020 | junio de 2020 | `??` y `BigInt` |
| ES2021 | junio de 2021 | `&&=`, `\|\|=` y `??=` |

- Desde ES2015 se publica una edición por año, cada junio.
