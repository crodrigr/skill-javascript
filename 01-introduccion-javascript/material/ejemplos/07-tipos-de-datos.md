# 📘 Ejemplo 07 — Tipos de datos

> 🎓 **Resultados de aprendizaje:** RA-5
>
> 💻 **Cómo se obtuvo.** Cada línea se escribió, en orden, en una consola nueva de Chrome, y lo que se muestra es lo que devolvió. Los resultados se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Lucía guarda precios, nombres y si hay stock, y necesita saber qué **tipo** es cada valor. El operador `typeof` se lo dice.

## 💻 Código

Abrí una consola **nueva** (recargá la página) y escribí estas líneas, una por una, pulsando Enter después de cada una:

```js
typeof 42
typeof 3.14
typeof 'Aroma'
typeof true
typeof undefined
typeof null
typeof 10n
typeof Symbol('id')
typeof {}
typeof []
typeof NaN
```

## 🔍 Análisis paso a paso

1. **Qué es un tipo de dato.** Es la clase de un valor: define qué se puede hacer con él. Un texto se puede unir a otro; un número se puede sumar.
2. **Los tipos primitivos.** Según MDN son siete: `number` (números), `string` (cadenas de texto), `boolean` (`true` o `false`), `undefined` (sin valor asignado), `null` (ausencia intencional de valor), `bigint` (enteros muy grandes) y `symbol` (identificadores únicos). Todo lo demás es un **objeto**.
3. **`typeof`.** El operador `typeof` devuelve **una cadena** con el nombre del tipo: `typeof 42` da `'number'` y `typeof 'Aroma'` da `'string'`.
4. **Un solo tipo para enteros y decimales.** `42` y `3.14` son `'number'`. Los números se guardan en formato de punto flotante de 64 bits.
5. **`typeof NaN` es `'number'`.** `NaN` («no es un número») es, curiosamente, un valor del tipo `number` (Ejemplo 20).
6. **`typeof null` es `'object'`.** Es un **resto histórico** de la primera versión de JavaScript: `null` no es un objeto. Para saber si algo es `null` se compara con `=== null`.
7. **Objetos y arreglos.** `{}` (un objeto) y `[]` (un arreglo) dan `'object'`. Se estudian en módulos posteriores.
8. **`undefined`.** Es el valor de una variable declarada sin valor y de lo que no existe; `typeof undefined` da `'undefined'`.

## ✅ Resultado esperado

La consola muestra (`>` es lo que escribís y `<` es el resultado que devuelve):

```text
> typeof 42
< 'number'
> typeof 3.14
< 'number'
> typeof 'Aroma'
< 'string'
> typeof true
< 'boolean'
> typeof undefined
< 'undefined'
> typeof null
< 'object'
> typeof 10n
< 'bigint'
> typeof Symbol('id')
< 'symbol'
> typeof {}
< 'object'
> typeof []
< 'object'
> typeof NaN
< 'number'
```

| Valor | `typeof` | Tipo |
|---|---|---|
| `42`, `3.14`, `NaN` | `'number'` | número |
| `'Aroma'` | `'string'` | cadena |
| `true` | `'boolean'` | booleano |
| `undefined` | `'undefined'` | sin valor asignado |
| `null` | `'object'` ⚠️ | ausencia de valor (resto histórico) |
| `10n` | `'bigint'` | entero grande |
| `Symbol('id')` | `'symbol'` | símbolo |
| `{}`, `[]` | `'object'` | objeto |
