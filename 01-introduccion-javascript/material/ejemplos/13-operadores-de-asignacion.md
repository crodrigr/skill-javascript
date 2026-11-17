# 📘 Ejemplo 13 — Operadores de asignación

> 🎓 **Resultados de aprendizaje:** RA-7
>
> 💻 **Cómo se obtuvo.** Cada línea se escribió, en orden, en una consola nueva de Chrome, y lo que se muestra es lo que devolvió. Los resultados se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Lucía va acumulando el total del pedido: suma un producto, resta un descuento, multiplica... Para no repetir la variable, usa los **operadores de asignación compuesta**.

## 💻 Código

Abrí una consola **nueva** (recargá la página) y escribí estas líneas, una por una, pulsando Enter después de cada una:

```js
let total = 10
total = total + 5
total += 5
total -= 4
total *= 2
total /= 4
total %= 3
total **= 3
total
```

## 🔍 Análisis paso a paso

1. **Asignación simple.** `=` guarda un valor en una variable. En la consola, la expresión devuelve el valor asignado: `total = total + 5` da `15`.
2. **Asignación compuesta.** `total += 5` es la forma corta de `total = total + 5`. La variable se usa **una sola vez** y se actualiza.
3. **La familia.** `+=` suma, `-=` resta, `*=` multiplica, `/=` divide, `%=` guarda el resto y `**=` eleva a una potencia.
4. **La secuencia.** Partiendo de `total = 10`: `total = total + 5` → `15`; `+= 5` → `20`; `-= 4` → `16`; `*= 2` → `32`; `/= 4` → `8`; `%= 3` → `2`; `**= 3` → `8`.
5. **Requisito.** La variable tiene que haber sido declarada con `let` (o `var`): una constante no puede usar estos operadores porque son reasignaciones.
6. **Cuidado con el orden.** Cada línea parte del valor que dejó la anterior. La última línea (`total`) muestra el valor final.
7. **Por qué se usan.** Hacen el código más corto y evitan errores al repetir el nombre de la variable.

## ✅ Resultado esperado

La consola muestra (`>` es lo que escribís y `<` es el resultado que devuelve):

```text
> let total = 10
< undefined
> total = total + 5
< 15
> total += 5
< 20
> total -= 4
< 16
> total *= 2
< 32
> total /= 4
< 8
> total %= 3
< 2
> total **= 3
< 8
> total
< 8
```

| Forma corta | Equivale a |
|---|---|
| `a += b` | `a = a + b` |
| `a -= b` | `a = a - b` |
| `a *= b` | `a = a * b` |
| `a /= b` | `a = a / b` |
| `a %= b` | `a = a % b` |
| `a **= b` | `a = a ** b` |
