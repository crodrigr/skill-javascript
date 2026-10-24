# 📘 Ejemplo 16 — Operadores lógicos de asignación

> 🎓 **Resultados de aprendizaje:** RA-7
>
> 💻 **Cómo se obtuvo.** Cada línea se escribió, en orden, en una consola nueva de Chrome, y lo que se muestra es lo que devolvió. Los resultados se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Lucía quiere poner un valor por defecto **solo cuando hace falta**: un nombre vacío, un descuento que falta, un envío sin definir. Para eso usa los operadores lógicos de asignación: `||=`, `&&=` y `??=`.

## 💻 Código

Abrí una consola **nueva** (recargá la página) y escribí estas líneas, una por una, pulsando Enter después de cada una:

```js
let nombre = ''
nombre ||= 'Cliente'
let descuento = 0
descuento ??= 0.1
descuento ||= 0.1
let envio = null
envio ??= 5
let activo = 1
activo &&= 'sí'
let vacio = 0
vacio &&= 'sí'
const fijo = 1
fijo ??= 2
fijo
```

## 🔍 Análisis paso a paso

1. **Idea.** Estos operadores **solo asignan si hace falta**. Si no, **no tocan** la variable (se llama *cortocircuito*).
2. **`||=` (OR lógico).** Asigna **si el valor actual es falso** (vacío, `0`, `false`, `null`, `undefined`, `NaN`). `nombre ||= 'Cliente'` pasa de `''` a `'Cliente'`.
3. **`??=` (coalescencia nula).** Asigna **solo si el valor actual es `null` o `undefined`**. `envio ??= 5` asigna `5` porque `envio` era `null`; pero `descuento ??= 0.1` **no** asigna: `descuento` valía `0`, que no es `null`.
4. **La diferencia que importa.** Con el mismo `descuento = 0`, `??=` lo deja en `0` (un descuento de cero es un valor válido) y `||=` lo cambia a `0.1`. Elegí según cuál sea el caso.
5. **`&&=` (AND lógico).** Asigna **si el valor actual es verdadero**: `activo &&= 'sí'` pasa de `1` a `'sí'`; con `vacio = 0`, no asigna.
6. **Con una constante.** `fijo ??= 2` **no da error** aunque `fijo` sea `const`, porque no se asigna nada (el valor `1` no es nulo). Solo falla si realmente intenta asignar.
7. **Compatibilidad.** Son de ES2021 y MDN los marca como *Widely available* desde **septiembre de 2020**. En navegadores anteriores producen un error de sintaxis (Ejemplo 06).

## ✅ Resultado esperado

La consola muestra (`>` es lo que escribís y `<` es el resultado que devuelve):

```text
> let nombre = ''
< undefined
> nombre ||= 'Cliente'
< 'Cliente'
> let descuento = 0
< undefined
> descuento ??= 0.1
< 0
> descuento ||= 0.1
< 0.1
> let envio = null
< undefined
> envio ??= 5
< 5
> let activo = 1
< undefined
> activo &&= 'sí'
< 'sí'
> let vacio = 0
< undefined
> vacio &&= 'sí'
< 0
> const fijo = 1
< undefined
> fijo ??= 2
< 1
> fijo
< 1
```

| Operador | Asigna si el valor actual es… | Equivale a |
|---|---|---|
| `\|\|=` | falso | `a \|\| (a = b)` |
| `&&=` | verdadero | `a && (a = b)` |
| `??=` | `null` o `undefined` | `a ?? (a = b)` |
