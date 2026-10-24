# 📘 Ejemplo 20 — El valor NaN

> 🎓 **Resultados de aprendizaje:** RA-8
>
> 💻 **Cómo se obtuvo.** Cada línea se escribió, en orden, en una consola nueva de Chrome, y lo que se muestra es lo que devolvió. Los resultados se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Lucía convierte lo que escribe una persona en un número y a veces obtiene `NaN`. Quiere saber qué significa y cómo detectarlo.

## 💻 Código

Abrí una consola **nueva** (recargá la página) y escribí estas líneas, una por una, pulsando Enter después de cada una:

```js
0 / 0
Number('abc')
Number('12')
'abc' * 2
undefined + 1
typeof NaN
NaN + 5
NaN === NaN
NaN == NaN
Number.isNaN(NaN)
Number.isNaN('abc')
isNaN('abc')
```

## 🔍 Análisis paso a paso

1. **Qué es `NaN`.** Significa *Not a Number* («no es un número»). Es el resultado de una **operación numérica que no tiene resultado válido**.
2. **Cuándo aparece.** `0 / 0` da `NaN`; `Number('abc')` (convertir un texto que no es un número) también; `'abc' * 2` y `undefined + 1` también. En cambio, `Number('12')` da `12`.
3. **Es de tipo `number`.** `typeof NaN` da `'number'`: es un valor numérico especial.
4. **Contagia.** Cualquier operación con `NaN` da `NaN`: `NaN + 5` da `NaN`.
5. **No es igual a sí mismo.** `NaN === NaN` da `false` y `NaN == NaN` también. Es el **único valor** de JavaScript que no es igual a sí mismo (MDN). Por eso no se puede detectar con `===`.
6. **Cómo detectarlo.** `Number.isNaN(valor)` da `true` solo si el valor **es** `NaN`: `Number.isNaN(NaN)` da `true` y `Number.isNaN('abc')` da `false` (el texto no es `NaN`, es una cadena).
7. **La versión global es distinta.** `isNaN('abc')` da `true` porque **convierte** antes el valor a número. Es más confuso; se prefiere `Number.isNaN`.
8. **Qué hacer.** Si un cálculo puede dar `NaN`, comprobá el resultado con `Number.isNaN` antes de mostrarlo.

## ✅ Resultado esperado

La consola muestra (`>` es lo que escribís y `<` es el resultado que devuelve):

```text
> 0 / 0
< NaN
> Number('abc')
< NaN
> Number('12')
< 12
> 'abc' * 2
< NaN
> undefined + 1
< NaN
> typeof NaN
< 'number'
> NaN + 5
< NaN
> NaN === NaN
< false
> NaN == NaN
< false
> Number.isNaN(NaN)
< true
> Number.isNaN('abc')
< false
> isNaN('abc')
< true
```

| Expresión | Resultado |
|---|---|
| `0 / 0`, `Number('abc')`, `'abc' * 2` | `NaN` |
| `NaN === NaN` | `false` |
| `Number.isNaN(NaN)` | `true` |
| `Number.isNaN('abc')` | `false` |
| `isNaN('abc')` | `true` (convierte antes) |
