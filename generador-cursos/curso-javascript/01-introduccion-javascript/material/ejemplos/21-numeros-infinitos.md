# 📘 Ejemplo 21 — Los números infinitos

> 🎓 **Resultados de aprendizaje:** RA-8
>
> 💻 **Cómo se obtuvo.** Cada línea se escribió, en orden, en una consola nueva de Chrome, y lo que se muestra es lo que devolvió. Los resultados se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Lucía divide el total de ventas entre la cantidad de clientes y, el primer día, la cantidad es cero. En lugar de un error, aparece `Infinity`. Quiere entender por qué.

## 💻 Código

Abrí una consola **nueva** (recargá la página) y escribí estas líneas, una por una, pulsando Enter después de cada una:

```js
1 / 0
-1 / 0
Infinity + 1
Infinity - Infinity
0 * Infinity
10 ** 1000
typeof Infinity
Number.isFinite(1 / 0)
Number.isFinite(5)
Infinity > 1e308
-Infinity < 0
5 % 0
```

## 🔍 Análisis paso a paso

1. **Infinito.** `Infinity` representa un valor **mayor que cualquier otro número**; `-Infinity`, menor que cualquiera. Los dos son de tipo `number`.
2. **Dividir entre cero no es un error.** En JavaScript, `1 / 0` da `Infinity` y `-1 / 0` da `-Infinity`. El programa **sigue funcionando**.
3. **Operaciones con infinito.** `Infinity + 1` sigue siendo `Infinity`. Pero algunas combinaciones no tienen sentido y dan `NaN`: `Infinity - Infinity` y `0 * Infinity`.
4. **Resto entre cero.** `5 % 0` da `NaN`.
5. **Desbordamiento.** Un número demasiado grande para representarse también se convierte en infinito: `10 ** 1000` da `Infinity`.
6. **Comparaciones.** `Infinity > 1e308` y `-Infinity < 0` dan `true`.
7. **Detectarlo.** `Number.isFinite(valor)` da `true` solo si el valor es un número **finito**: `Number.isFinite(1 / 0)` da `false` y `Number.isFinite(5)` da `true`. (También da `false` para `NaN`.)
8. **Qué hacer.** Si un divisor puede ser cero, comprobá el resultado con `Number.isFinite` antes de usarlo.

## ✅ Resultado esperado

La consola muestra (`>` es lo que escribís y `<` es el resultado que devuelve):

```text
> 1 / 0
< Infinity
> -1 / 0
< -Infinity
> Infinity + 1
< Infinity
> Infinity - Infinity
< NaN
> 0 * Infinity
< NaN
> 10 ** 1000
< Infinity
> typeof Infinity
< 'number'
> Number.isFinite(1 / 0)
< false
> Number.isFinite(5)
< true
> Infinity > 1e308
< true
> -Infinity < 0
< true
> 5 % 0
< NaN
```

| Expresión | Resultado |
|---|---|
| `1 / 0` | `Infinity` |
| `-1 / 0` | `-Infinity` |
| `Infinity - Infinity` | `NaN` |
| `Number.isFinite(1 / 0)` | `false` |
| `Number.isFinite(5)` | `true` |
