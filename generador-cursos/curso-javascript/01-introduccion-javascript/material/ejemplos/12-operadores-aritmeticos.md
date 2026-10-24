# 📘 Ejemplo 12 — Operadores aritméticos

> 🎓 **Resultados de aprendizaje:** RA-7
>
> 💻 **Cómo se obtuvo.** Cada línea se escribió, en orden, en una consola nueva de Chrome, y lo que se muestra es lo que devolvió. Los resultados se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Lucía calcula el total de un pedido de café: precio por cantidad, un contador de pedidos y varias operaciones combinadas. Para eso usa los **operadores aritméticos**.

## 💻 Código

Abrí una consola **nueva** (recargá la página) y escribí estas líneas, una por una, pulsando Enter después de cada una:

```js
let precio = 4.5
let cantidad = 3
precio * cantidad
precio + cantidad
cantidad / 2
cantidad % 2
cantidad ** 2
let n = 5
n++
n
++n
n--
n
2 + 3 * 4
(2 + 3) * 4
2 ** 3 ** 2
(2 ** 3) ** 2
-2 ** 2
(-2) ** 2
-(2 ** 2)
```

## 🔍 Análisis paso a paso

1. **Qué es un operador.** Es un símbolo que combina **valores** (los operandos) y produce un resultado. Una **expresión** es la combinación completa: `precio * cantidad`.
2. **Los cinco básicos.** `+` suma (`precio + cantidad` da `7.5`), `-` resta, `*` multiplica (`precio * cantidad` da `13.5`), `/` divide (`cantidad / 2` da `1.5`) y `%` da el **resto** de la división (`cantidad % 2` da `1`).
3. **Potencia.** `**` eleva a una potencia: `cantidad ** 2` da `9`. Es de ES2016, con compatibilidad amplia desde marzo de 2017.
4. **Incremento y decremento.** `n++` suma `1` a `n`, `n--` resta `1`. Con `n++` (**postfijo**) la expresión devuelve el valor **de antes** (`5`) y recién después `n` queda en `6`. Con `++n` (**prefijo**) suma primero y devuelve el valor nuevo (`7`).
5. **Precedencia.** Cuando hay varios operadores, algunos se resuelven antes: `2 + 3 * 4` da `14` (primero `3 * 4`). Los **paréntesis** mandan: `(2 + 3) * 4` da `20`.
6. **Asociatividad de `**`.** `2 ** 3 ** 2` se resuelve **de derecha a izquierda**: `2 ** (3 ** 2)`, que da `512`. Con paréntesis, `(2 ** 3) ** 2` da `64`.
7. **Un caso especial.** `-2 ** 2` da un error de sintaxis (`Unary operator used immediately before exponentiation expression…`) porque es ambiguo: hay que escribir `(-2) ** 2` (da `4`) o `-(2 ** 2)` (da `-4`).
8. **Consejo.** Ante la duda, usá paréntesis: se lee mejor y evita errores.

## ✅ Resultado esperado

La consola muestra (`>` es lo que escribís y `<` es el resultado que devuelve):

```text
> let precio = 4.5
< undefined
> let cantidad = 3
< undefined
> precio * cantidad
< 13.5
> precio + cantidad
< 7.5
> cantidad / 2
< 1.5
> cantidad % 2
< 1
> cantidad ** 2
< 9
> let n = 5
< undefined
> n++
< 5
> n
< 6
> ++n
< 7
> n--
< 7
> n
< 6
> 2 + 3 * 4
< 14
> (2 + 3) * 4
< 20
> 2 ** 3 ** 2
< 512
> (2 ** 3) ** 2
< 64
> -2 ** 2
Uncaught SyntaxError: Unary operator used immediately before exponentiation expression. Parenthesis must be used to disambiguate operator precedence
> (-2) ** 2
< 4
> -(2 ** 2)
< -4
```

| De mayor a menor precedencia (MDN) | Operadores |
|---|---|
| Postfijos | `x++`, `x--` |
| Unarios (prefijos) | `!x`, `-x`, `++x`, `--x`, `typeof x` |
| Potencia | `**` (de derecha a izquierda) |
| Multiplicación, división y resto | `*`, `/`, `%` |
| Suma y resta | `+`, `-` |
