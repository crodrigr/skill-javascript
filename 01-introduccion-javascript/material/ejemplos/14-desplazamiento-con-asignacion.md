# 📘 Ejemplo 14 — Desplazamiento con asignación

> 🎓 **Resultados de aprendizaje:** RA-7
>
> 💻 **Cómo se obtuvo.** Cada línea se escribió, en orden, en una consola nueva de Chrome, y lo que se muestra es lo que devolvió. Los resultados se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Lucía ve un operador raro, `<<=`, en un código ajeno. Para entenderlo primero repasa cómo se escribe un número en **binario** y después prueba el **desplazamiento de bits**.

## 💻 Código

Abrí una consola **nueva** (recargá la página) y escribí estas líneas, una por una, pulsando Enter después de cada una:

```js
(5).toString(2)
(8).toString(2)
5 << 1
5 << 2
-8 >> 1
-8 >>> 1
(-8 >>> 0).toString(2)
let x = 5
x <<= 2
x >>= 1
x >>>= 1
```

## 🔍 Análisis paso a paso

1. **Binario.** La computadora guarda los números en **bits** (ceros y unos). `(5).toString(2)` muestra el número en base 2: `'101'` (es decir, `4 + 0 + 1`). `(8).toString(2)` da `'1000'`. (`toString(2)` es una herramienta para mostrar el binario; los métodos se estudian más adelante.)
2. **Desplazar a la izquierda (`<<`).** Mueve los bits a la izquierda y rellena con ceros: `5 << 1` da `10` y `5 << 2` da `20`. Cada desplazamiento **duplica** el número: `x << n` equivale a `x * 2 ** n`, según MDN.
3. **Desplazar a la derecha con signo (`>>`).** Mueve los bits a la derecha **conservando el signo**: `-8 >> 1` da `-4`.
4. **Desplazar a la derecha sin signo (`>>>`).** Rellena con ceros por la izquierda, así que el resultado nunca es negativo: `-8 >>> 1` da `2147483644`. `(-8 >>> 0).toString(2)` muestra los 32 bits del número: `11111111111111111111111111111000`.
5. **32 bits.** Los operadores de bits convierten los números a enteros de **32 bits** (con signo) antes de operar.
6. **Con asignación.** `x <<= 2` es la forma corta de `x = x << 2`. Partiendo de `x = 5`: `x <<= 2` → `20`, `x >>= 1` → `10`, `x >>>= 1` → `5`.
7. **Para qué sirve.** Multiplicar y dividir por potencias de 2 y manejar datos compactos. En programas comunes se usa poco, pero conviene reconocerlo cuando aparece.

## ✅ Resultado esperado

La consola muestra (`>` es lo que escribís y `<` es el resultado que devuelve):

```text
> (5).toString(2)
< '101'
> (8).toString(2)
< '1000'
> 5 << 1
< 10
> 5 << 2
< 20
> -8 >> 1
< -4
> -8 >>> 1
< 2147483644
> (-8 >>> 0).toString(2)
< '11111111111111111111111111111000'
> let x = 5
< undefined
> x <<= 2
< 20
> x >>= 1
< 10
> x >>>= 1
< 5
```

| Operador | Qué hace | Ejemplo |
|---|---|---|
| `<<` | desplaza a la izquierda (multiplica por 2 en cada paso) | `5 << 2` → `20` |
| `>>` | desplaza a la derecha, conservando el signo | `-8 >> 1` → `-4` |
| `>>>` | desplaza a la derecha, rellenando con ceros | `-8 >>> 1` → `2147483644` |
| `<<=`, `>>=`, `>>>=` | lo mismo, y guardan el resultado en la variable | `x <<= 2` |
