# 📘 Ejemplo 06 — Estrategia «crossbrowser»

> 🎓 **Resultados de aprendizaje:** RA-4
>
> 💻 **Cómo se obtuvo.** Cada línea se escribió, en orden, en una consola nueva de Chrome, y lo que se muestra es lo que devolvió. Los resultados se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Lucía quiere que su tienda funcione en **cualquier navegador** (*crossbrowser* significa «entre navegadores»). Antes de usar una característica nueva, comprueba si el navegador la tiene.

## 💻 Código

Abrí una consola **nueva** (recargá la página) y escribí estas líneas, una por una, pulsando Enter después de cada una:

```js
typeof Number.isNaN
typeof Number.isNaN === 'function'
typeof Number.funcionInventada
typeof Number.funcionInventada === 'function'
typeof variableInexistente
1 +* 2
```

## 🔍 Análisis paso a paso

1. **El problema.** Los navegadores no incorporan las novedades de ECMAScript todos a la vez ni en la misma fecha. Una característica que funciona en uno puede fallar en otro, sobre todo si es muy reciente.
2. **Paso 1: consultar la compatibilidad.** Antes de usar una característica nueva, mirá su tabla de compatibilidad en MDN. MDN muestra un estado *Baseline*: *Widely available* (disponible en todos los navegadores principales desde hace tiempo) o *Newly available*. Por ejemplo: `**` desde marzo de 2017, `??` desde julio de 2020, y `&&=`, `||=` y `??=` desde septiembre de 2020.
3. **Paso 2: detectar la característica en vez de adivinar.** Para una **función o propiedad**, se pregunta si existe con `typeof`: `typeof Number.isNaN` da `'function'` (existe) y `typeof Number.funcionInventada` da `'undefined'` (no existe). Sin errores: `typeof` funciona incluso con nombres que no existen.
4. **Un valor de verdad.** `typeof Number.isNaN === 'function'` da `true`. Ese `true` o `false` se puede usar después para decidir qué hacer (las decisiones con `if` se estudian en otro módulo).
5. **Con una variable que no existe.** `typeof variableInexistente` da `'undefined'` y no `ReferenceError`: es la forma segura de preguntar.
6. **Paso 3: la sintaxis no se puede detectar.** Un operador nuevo (como `??=`) es **sintaxis**: si el navegador no la entiende, el script **entero** falla antes de ejecutarse, como pasa con `1 +* 2`: `Uncaught SyntaxError: Unexpected token '*'` («error de sintaxis: símbolo inesperado»). Por eso la sintaxis nueva se decide mirando la compatibilidad.
7. **Opciones.** (1) Elegir solo características *Widely available*; (2) conocer los navegadores de tu público; (3) usar herramientas que convierten el código nuevo en código antiguo (*transpiladores*), que no se estudian en este curso.

## ✅ Resultado esperado

La consola muestra (`>` es lo que escribís y `<` es el resultado que devuelve):

```text
> typeof Number.isNaN
< 'function'
> typeof Number.isNaN === 'function'
< true
> typeof Number.funcionInventada
< 'undefined'
> typeof Number.funcionInventada === 'function'
< false
> typeof variableInexistente
< 'undefined'
> 1 +* 2
Uncaught SyntaxError: Unexpected token '*'
```

- Si una característica no existe en un navegador, `typeof` lo informa sin errores.
- Un error de sintaxis impide que el script se ejecute por completo.
