# 📘 Ejemplo 18 — Operadores lógicos

> 🎓 **Resultados de aprendizaje:** RA-7
>
> 💻 **Cómo se obtuvo.** Cada línea se escribió, en orden, en una consola nueva de Chrome, y lo que se muestra es lo que devolvió. Los resultados se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Lucía combina condiciones: «hay stock **y** el pedido llega al mínimo», «el cliente dio su nombre **o** usamos uno por defecto». Para eso están los operadores **lógicos**.

## 💻 Código

Abrí una consola **nueva** (recargá la página) y escribí estas líneas, una por una, pulsando Enter después de cada una:

```js
true && false
'a' && 'b'
0 && 'x'
0 || 'x'
'' || 'sin nombre'
!true
!!'texto'
null ?? 'x'
0 ?? 'x'
null ?? 0 || 5
(null ?? 0) || 5
false && console.log('no se imprime')
true || console.log('no se imprime')
```

## 🔍 Análisis paso a paso

1. **`&&` (Y).** Da `true` solo si **las dos** partes son verdaderas: `true && false` da `false`.
2. **Devuelven uno de los valores.** `&&` y `||` no devuelven siempre `true` o `false`: devuelven **uno de los operandos**. `'a' && 'b'` da `'b'` y `0 && 'x'` da `0`.
3. **`||` (O).** Devuelve el **primer valor verdadero**: `0 || 'x'` da `'x'` y `'' || 'sin nombre'` da `'sin nombre'`. Se usa mucho para valores por defecto.
4. **`!` (NO).** Invierte un valor booleano: `!true` da `false`. Dos negaciones, `!!'texto'`, convierten cualquier valor a su verdad: `true`.
5. **`??` (coalescencia nula).** Devuelve el valor de la derecha **solo si el de la izquierda es `null` o `undefined`**: `null ?? 'x'` da `'x'`; pero `0 ?? 'x'` da `0` (el cero es un valor válido). Es de ES2020 (*Widely available* desde julio de 2020).
6. **No se mezcla sin paréntesis.** `null ?? 0 || 5` da `Uncaught SyntaxError: Unexpected token '||'`: `??` no se puede combinar con `||` ni `&&` sin paréntesis. `(null ?? 0) || 5` da `5`.
7. **Cortocircuito.** Si el resultado ya se conoce con la parte izquierda, la derecha **no se evalúa**: `false && console.log(...)` y `true || console.log(...)` **no imprimen** nada.
8. **Qué cuenta como «falso».** Son falsos: `false`, `0`, `''`, `null`, `undefined` y `NaN`. Todo lo demás es verdadero.

## ✅ Resultado esperado

La consola muestra (`>` es lo que escribís y `<` es el resultado que devuelve):

```text
> true && false
< false
> 'a' && 'b'
< 'b'
> 0 && 'x'
< 0
> 0 || 'x'
< 'x'
> '' || 'sin nombre'
< 'sin nombre'
> !true
< false
> !!'texto'
< true
> null ?? 'x'
< 'x'
> 0 ?? 'x'
< 0
> null ?? 0 || 5
Uncaught SyntaxError: Unexpected token '||'
> (null ?? 0) || 5
< 5
> false && console.log('no se imprime')
< false
> true || console.log('no se imprime')
< true
```

| Operador | Devuelve | Ejemplo |
|---|---|---|
| `&&` | el primer valor falso, o el último | `'a' && 'b'` → `'b'` |
| `\|\|` | el primer valor verdadero, o el último | `0 \|\| 'x'` → `'x'` |
| `!` | el booleano opuesto | `!true` → `false` |
| `??` | la derecha si la izquierda es `null` o `undefined` | `0 ?? 'x'` → `0` |
