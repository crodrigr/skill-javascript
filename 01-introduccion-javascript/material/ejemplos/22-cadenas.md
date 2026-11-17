# 📘 Ejemplo 22 — Cadenas

> 🎓 **Resultados de aprendizaje:** RA-9
>
> 💻 **Cómo se obtuvo.** Cada línea se escribió, en orden, en una consola nueva de Chrome, y lo que se muestra es lo que devolvió. Los resultados se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Lucía arma mensajes para sus clientes: el nombre de la tienda, una frase con el total, un texto con comillas. Para eso trabaja con **cadenas** de texto.

## 💻 Código

Abrí una consola **nueva** (recargá la página) y escribí estas líneas, una por una, pulsando Enter después de cada una:

```js
'Aroma'
"Aroma"
'Café "especial"'
'It\'s'
"It's"
'Línea 1\nLínea 2'
console.log('Línea 1\nLínea 2')
`Total: ${4.5 * 3}`
'Aroma'.length
'Aroma'[0]
'Aroma'[4]
'Aroma'[10]
'Aroma' + ' ' + 'Café'
'5' + 3
'5' - 3
'5' * '2'
'Total: ' + 13.5
'a' + 1 + 2
1 + 2 + 'a'
'C:\\carpeta'
```

## 🔍 Análisis paso a paso

1. **Qué es una cadena.** Es una **sucesión de caracteres** (texto). Se escribe entre comillas **simples** (`'Aroma'`), **dobles** (`"Aroma"`) o de **plantilla** (con comillas invertidas). Las simples y las dobles son equivalentes.
2. **Comillas dentro de una cadena.** `'Café "especial"'` usa comillas dobles dentro de una cadena con comillas simples. Para una comilla del mismo tipo hay que **escaparla** con una barra invertida: `'It\'s'`. La consola la muestra con comillas dobles: `"It's"`.
3. **Caracteres de escape.** `\n` es un **salto de línea**: `console.log('Línea 1\nLínea 2')` escribe dos líneas. `\\` es una barra invertida literal.
4. **Plantillas.** Con comillas invertidas se puede insertar el valor de una **expresión** con `${...}`: `` `Total: ${4.5 * 3}` `` da `'Total: 13.5'`.
5. **Longitud y posición.** `'Aroma'.length` da `5`. Cada carácter tiene una **posición** que **empieza en `0`**: `'Aroma'[0]` es `'A'` y `'Aroma'[4]` es `'a'`. Una posición que no existe (`[10]`) da `undefined`.
6. **Concatenar.** `+` **une** cadenas: `'Aroma' + ' ' + 'Café'` da `'Aroma Café'`. Si uno de los operandos es una cadena, el otro se **convierte a texto**: `'Total: ' + 13.5` da `'Total: 13.5'`.
7. **El cuidado con `+`.** `'5' + 3` da `'53'` (concatena), pero `'5' - 3` da `2` y `'5' * '2'` da `10`: `-` y `*` **convierten a número**. Y el orden importa: `'a' + 1 + 2` da `'a12'`, pero `1 + 2 + 'a'` da `'3a'`.
8. **Las cadenas no se modifican.** Un carácter no se puede cambiar (ver Ejemplo 11).

## ✅ Resultado esperado

La consola muestra (`>` es lo que escribís y `<` es el resultado que devuelve):

```text
> 'Aroma'
< 'Aroma'
> "Aroma"
< 'Aroma'
> 'Café "especial"'
< 'Café "especial"'
> 'It\'s'
< "It's"
> "It's"
< "It's"
> 'Línea 1\nLínea 2'
< 'Línea 1\nLínea 2'
> console.log('Línea 1\nLínea 2')
Línea 1
Línea 2
< undefined
> `Total: ${4.5 * 3}`
< 'Total: 13.5'
> 'Aroma'.length
< 5
> 'Aroma'[0]
< 'A'
> 'Aroma'[4]
< 'a'
> 'Aroma'[10]
< undefined
> 'Aroma' + ' ' + 'Café'
< 'Aroma Café'
> '5' + 3
< '53'
> '5' - 3
< 2
> '5' * '2'
< 10
> 'Total: ' + 13.5
< 'Total: 13.5'
> 'a' + 1 + 2
< 'a12'
> 1 + 2 + 'a'
< '3a'
> 'C:\\carpeta'
< 'C:\\carpeta'
```

- Para armar un mensaje con valores, las **plantillas** son más claras que concatenar con `+`.
