# 📘 Ejemplo 17 — Operadores de comparación

> 🎓 **Resultados de aprendizaje:** RA-7
>
> 💻 **Cómo se obtuvo.** Cada línea se escribió, en orden, en una consola nueva de Chrome, y lo que se muestra es lo que devolvió. Los resultados se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Lucía compara precios, cantidades y textos: si el pedido llega al mínimo, si dos valores son iguales. Los operadores de **comparación** siempre devuelven `true` o `false`.

## 💻 Código

Abrí una consola **nueva** (recargá la página) y escribí estas líneas, una por una, pulsando Enter después de cada una:

```js
5 == '5'
5 === '5'
0 == false
0 === false
null == undefined
null === undefined
1 != '1'
1 !== '1'
3 > 2
'a' < 'b'
'10' < '9'
10 < 9
'10' < 9
NaN == NaN
```

## 🔍 Análisis paso a paso

1. **Resultado booleano.** Toda comparación devuelve `true` (verdadero) o `false` (falso).
2. **Mayor y menor.** `>`, `<`, `>=` y `<=`: `3 > 2` da `true` y `10 < 9` da `false`.
3. **Igualdad estricta `===` y desigualdad estricta `!==`.** Comparan el **valor y el tipo**, sin convertir: `5 === '5'` da `false` (un número no es una cadena) y `1 !== '1'` da `true`.
4. **Igualdad con conversión `==` y `!=`.** Antes de comparar, **convierten los tipos**: `5 == '5'` da `true`, `0 == false` da `true` y `1 != '1'` da `false`. Esa conversión automática se llama *coerción* y produce resultados sorprendentes.
5. **El caso de `null` y `undefined`.** `null == undefined` da `true`, pero `null === undefined` da `false`.
6. **Cadenas.** Se comparan **carácter por carácter**, no como números: `'a' < 'b'` da `true` y `'10' < '9'` también da `true` (porque `'1'` va antes que `'9'`). Pero `'10' < 9` da `false`: al comparar con un número, la cadena se convierte a número.
7. **`NaN` no es igual a nada.** `NaN == NaN` da `false`.
8. **Recomendación.** Usá `===` y `!==`: evitan las conversiones inesperadas y dicen exactamente lo que comparan.

## ✅ Resultado esperado

La consola muestra (`>` es lo que escribís y `<` es el resultado que devuelve):

```text
> 5 == '5'
< true
> 5 === '5'
< false
> 0 == false
< true
> 0 === false
< false
> null == undefined
< true
> null === undefined
< false
> 1 != '1'
< false
> 1 !== '1'
< true
> 3 > 2
< true
> 'a' < 'b'
< true
> '10' < '9'
< true
> 10 < 9
< false
> '10' < 9
< false
> NaN == NaN
< false
```

| Comparación | `==` | `===` |
|---|---|---|
| `5` y `'5'` | `true` | `false` |
| `0` y `false` | `true` | `false` |
| `null` y `undefined` | `true` | `false` |
| `NaN` y `NaN` | `false` | `false` |
