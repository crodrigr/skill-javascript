# 📘 Ejemplo 11 — Profundizando en `const`

> 🎓 **Resultados de aprendizaje:** RA-6
>
> 💻 **Cómo se obtuvo.** Cada línea se escribió, en orden, en una consola nueva de Chrome, y lo que se muestra es lo que devolvió. Los resultados se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Lucía descubre que una constante **no siempre es inmutable**. En este ejemplo ve qué impide `const` y qué no, y cómo elegir entre `var`, `let` y `const`.

## 💻 Código

Abrí una consola **nueva** (recargá la página) y escribí estas líneas, una por una, pulsando Enter después de cada una:

```js
const tienda = { nombre: 'Aroma' }
tienda.nombre = 'Aroma Centro'
tienda
tienda = {}
const dias = ['lun', 'mar']
dias[0] = 'dom'
dias
dias = []
const letras = 'abc'
letras[0] = 'z'
letras
```

## 🔍 Análisis paso a paso

1. **`const` protege el nombre, no el contenido.** MDN lo explica así: `const` crea una **referencia inmutable** a un valor, pero eso **no significa que el valor sea inmutable**.
2. **Con un objeto.** `tienda` es una constante, pero se puede **cambiar su contenido**: `tienda.nombre = 'Aroma Centro'` funciona y `tienda` ahora muestra `{nombre: 'Aroma Centro'}`. Lo que no se puede es **reasignar el nombre**: `tienda = {}` da `TypeError: Assignment to constant variable.`
3. **Con un arreglo.** Pasa lo mismo: `dias[0] = 'dom'` cambia el contenido (`(2) ['dom', 'mar']`), pero `dias = []` da el mismo `TypeError`. (Los objetos y los arreglos se estudian en otros módulos; acá solo sirven de ejemplo.)
4. **Con una cadena.** Las cadenas **sí son inmutables**: `letras[0] = 'z'` no falla en la consola, pero **no cambia nada** (`letras` sigue siendo `'abc'`). El valor es inmutable; la constante, no reasignable: son dos cosas distintas.
5. **Cómo hacer un objeto realmente inmutable.** MDN indica que hace falta `Object.freeze()`; en este módulo solo se menciona.
6. **Cómo elegir.** (1) Empezá con `const`. (2) Si el valor tiene que cambiar, usá `let`. (3) Evitá `var` en código nuevo. Así, cada vez que ves `let`, sabés que ese valor cambia.
7. **La tabla de decisión.** Resume las diferencias de los tres.

## ✅ Resultado esperado

La consola muestra (`>` es lo que escribís y `<` es el resultado que devuelve):

```text
> const tienda = { nombre: 'Aroma' }
< undefined
> tienda.nombre = 'Aroma Centro'
< 'Aroma Centro'
> tienda
< {nombre: 'Aroma Centro'}
> tienda = {}
Uncaught TypeError: Assignment to constant variable.
> const dias = ['lun', 'mar']
< undefined
> dias[0] = 'dom'
< 'dom'
> dias
< (2) ['dom', 'mar']
> dias = []
Uncaught TypeError: Assignment to constant variable.
> const letras = 'abc'
< undefined
> letras[0] = 'z'
< 'z'
> letras
< 'abc'
```

| | `var` | `let` | `const` |
|---|---|---|---|
| Se reasigna | sí | sí | **no** |
| Se redeclara en el mismo ámbito | sí | no | no |
| Alcance | función | bloque | bloque |
| Usada antes de declararla | `undefined` | error (zona muerta) | error (zona muerta) |
| Necesita valor inicial | no | no | **sí** |
| Cuándo usarla | evitar | el valor cambia | el valor **no** cambia (por defecto) |
