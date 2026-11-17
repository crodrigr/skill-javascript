# 📘 Ejemplo 19 — Números enteros y decimales

> 🎓 **Resultados de aprendizaje:** RA-8
>
> 💻 **Cómo se obtuvo.** Cada línea se escribió, en orden, en una consola nueva de Chrome, y lo que se muestra es lo que devolvió. Los resultados se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Lucía calcula precios con decimales y se encuentra con resultados raros, como `0.1 + 0.2`. En este ejemplo entiende cómo guarda JavaScript los **números** y qué límites tienen.

## 💻 Código

Abrí una consola **nueva** (recargá la página) y escribí estas líneas, una por una, pulsando Enter después de cada una:

```js
42
3.14
0.5 + 0.25
0.1 + 0.2
0.1 + 0.2 === 0.3
0.07 * 100
(0.1 + 0.2).toFixed(2)
1e3
5 / 2
Number.MAX_SAFE_INTEGER
Number.MAX_SAFE_INTEGER + 2
9007199254740993
Number.isSafeInteger(9007199254740993)
```

## 🔍 Análisis paso a paso

1. **Un solo tipo.** JavaScript tiene un único tipo `number` para enteros y decimales: `42` y `3.14`. Se guardan en el formato de **punto flotante de 64 bits** (IEEE 754), como el `double` de otros lenguajes.
2. **Decimales exactos y aproximados.** `0.5 + 0.25` da `0.75` exacto, porque 0,5 y 0,25 se pueden escribir exactamente en binario.
3. **El caso `0.1 + 0.2`.** Da `0.30000000000000004`, no `0.3`. 0,1 y 0,2 **no se pueden representar exactamente en binario** (como 1/3 no se puede escribir exactamente en decimal). Por eso `0.1 + 0.2 === 0.3` da `false`. Lo mismo pasa con `0.07 * 100`, que da `7.000000000000001`.
4. **No es un error de JavaScript.** Cualquier lenguaje que use este formato da el mismo resultado.
5. **Cómo manejarlo.** Para mostrar un precio, se **redondea** el resultado: `(0.1 + 0.2).toFixed(2)` da `'0.30'` (una cadena con dos decimales). Para dinero, muchas aplicaciones trabajan en **centavos** (enteros).
6. **Notación científica.** `1e3` es `1 × 10³`: da `1000`.
7. **Enteros seguros.** Los enteros solo se guardan **con exactitud hasta `Number.MAX_SAFE_INTEGER`**, que vale `9007199254740991` (`2⁵³ − 1`). Más allá, se pierde precisión: `Number.MAX_SAFE_INTEGER + 2` da `9007199254740992` y `9007199254740993` se escribe, pero se guarda como `9007199254740992`. `Number.isSafeInteger(9007199254740993)` da `false`.
8. **Para enteros más grandes** existe `BigInt` (con la `n` final, Ejemplo 05).

## ✅ Resultado esperado

La consola muestra (`>` es lo que escribís y `<` es el resultado que devuelve):

```text
> 42
< 42
> 3.14
< 3.14
> 0.5 + 0.25
< 0.75
> 0.1 + 0.2
< 0.30000000000000004
> 0.1 + 0.2 === 0.3
< false
> 0.07 * 100
< 7.000000000000001
> (0.1 + 0.2).toFixed(2)
< '0.30'
> 1e3
< 1000
> 5 / 2
< 2.5
> Number.MAX_SAFE_INTEGER
< 9007199254740991
> Number.MAX_SAFE_INTEGER + 2
< 9007199254740992
> 9007199254740993
< 9007199254740992
> Number.isSafeInteger(9007199254740993)
< false
```

| Expresión | Resultado | Por qué |
|---|---|---|
| `0.5 + 0.25` | `0.75` | se representa con exactitud |
| `0.1 + 0.2` | `0.30000000000000004` | no se representa con exactitud |
| `Number.MAX_SAFE_INTEGER` | `9007199254740991` | el mayor entero seguro (`2⁵³ − 1`) |
| `9007199254740993` | `9007199254740992` | pasa el límite: se pierde precisión |
