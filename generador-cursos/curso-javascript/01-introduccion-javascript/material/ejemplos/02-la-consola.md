# 📘 Ejemplo 02 — La consola

> 🎓 **Resultados de aprendizaje:** RA-2
>
> 💻 **Cómo se obtuvo.** Cada línea se escribió, en orden, en una consola nueva de Chrome, y lo que se muestra es lo que devolvió. Los resultados se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Lucía quiere probar ideas sin crear una página cada vez. El navegador trae una **consola**, un lugar donde se escribe JavaScript y se ve el resultado al instante.

## 💻 Código

Abrí una consola **nueva** (recargá la página) y escribí estas líneas, una por una, pulsando Enter después de cada una:

```js
2 + 3
'Aroma'
console.log('Hola, Aroma')
4.5 * 3
precioCafe
let precio = 4.5
precio * 3
precio
```

## 🔍 Análisis paso a paso

1. **Abrir la consola.** En Chrome: `F12` (o `Ctrl + Shift + J`; en Mac, `Cmd + Option + J`) y la pestaña **Consola**. En Firefox: `Ctrl + Shift + K`. Es el lugar donde se prueba código y donde el navegador avisa de los errores.
2. **Evaluar una expresión.** Al escribir `2 + 3` y pulsar Enter, la consola calcula y muestra el resultado, `5`, después de un `<`. Una **expresión** es una combinación de valores y operadores que produce un resultado.
3. **Las cadenas.** `'Aroma'` es un texto. La consola lo muestra entre comillas simples para que se vea que es un texto y no un número.
4. **`console.log()`.** Es la instrucción para **escribir un mensaje** en la consola. Imprime `Hola, Aroma` (sin comillas) y **devuelve `undefined`**, que es lo que aparece después del `<`: `console.log` no tiene un resultado que devolver.
5. **Un número decimal.** `4.5 * 3` da `13.5`. En JavaScript el separador decimal es el **punto**, no la coma.
6. **Un error.** Escribir `precioCafe` (un nombre que no existe) produce `Uncaught ReferenceError: precioCafe is not defined`. Se lee: «Error de referencia no capturado: `precioCafe` no está definido». Un error **no rompe** la consola: se puede seguir escribiendo.
7. **Guardar un valor.** `let precio = 4.5` crea una **variable** (se estudia en el bloque 6). La consola muestra `undefined` porque una declaración no produce un valor. Después, `precio` vale `4.5` y se puede usar en cálculos (`precio * 3` da `13.5`).
8. **Cuándo se pierde.** Lo que escribís en la consola vive mientras la página esté abierta: si la recargás, empieza de cero.

## ✅ Resultado esperado

La consola muestra (`>` es lo que escribís y `<` es el resultado que devuelve):

```text
> 2 + 3
< 5
> 'Aroma'
< 'Aroma'
> console.log('Hola, Aroma')
Hola, Aroma
< undefined
> 4.5 * 3
< 13.5
> precioCafe
Uncaught ReferenceError: precioCafe is not defined
> let precio = 4.5
< undefined
> precio * 3
< 13.5
> precio
< 4.5
```

- Cada línea que escribís obtiene una respuesta inmediata.
- Un error aparece en rojo en la consola real, con su nombre (`ReferenceError`) y su mensaje.
