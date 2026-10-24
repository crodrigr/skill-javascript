# 📘 Ejemplo 10 — Constantes con `const`

> 🎓 **Resultados de aprendizaje:** RA-6
>
> 💻 **Cómo se obtuvo.** Cada línea se escribió, en orden, en una consola nueva de Chrome, y lo que se muestra es lo que devolvió. Los resultados se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

El IVA de la tienda no cambia nunca durante el programa. Lucía lo declara como **constante** con `const`, para que nadie lo modifique sin querer.

## 💻 Código

Abrí una consola **nueva** (recargá la página) y escribí estas líneas, una por una, pulsando Enter después de cada una:

```js
const IVA = 0.21
IVA * 100
IVA = 0.1
IVA
const IVA = 0.2
const SIN_VALOR
const contador = 1
contador++
```

## 🔍 Análisis paso a paso

1. **`const` declara un valor que no se reasigna.** `const IVA = 0.21` crea la constante y se puede usar en cálculos: `IVA * 100` da `21`.
2. **Reasignar da error.** `IVA = 0.1` produce `Uncaught TypeError: Assignment to constant variable.` («error de tipo: asignación a una variable constante»). El valor sigue siendo `0.21`.
3. **No se puede redeclarar.** `const IVA = 0.2` da `SyntaxError: Identifier 'IVA' has already been declared`.
4. **Hace falta un valor inicial.** `const SIN_VALOR` da `Uncaught SyntaxError: Missing initializer in const declaration` («falta el valor inicial en la declaración `const`»): como no se puede asignar después, tiene que tener valor desde el principio.
5. **Incrementar también es reasignar.** `contador++` equivale a `contador = contador + 1`: da el mismo `TypeError`.
6. **Alcance de bloque.** Como `let`, una constante solo existe en su bloque, y tiene zona muerta temporal.
7. **Convención de nombres.** Para valores fijos y universales, es habitual escribir el nombre en MAYÚSCULAS con guion bajo (`IVA`, `LIMITE_ENVIO`).
8. **Cuándo usarla.** Siempre que el valor **no cambie**: es la elección por defecto. Si más adelante hace falta cambiarlo, se pasa a `let`.

## ✅ Resultado esperado

La consola muestra (`>` es lo que escribís y `<` es el resultado que devuelve):

```text
> const IVA = 0.21
< undefined
> IVA * 100
< 21
> IVA = 0.1
Uncaught TypeError: Assignment to constant variable.
> IVA
< 0.21
> const IVA = 0.2
Uncaught SyntaxError: Identifier 'IVA' has already been declared
> const SIN_VALOR
Uncaught SyntaxError: Missing initializer in const declaration
> const contador = 1
< undefined
> contador++
Uncaught TypeError: Assignment to constant variable.
```

- `const` obliga a dar un valor inicial y avisa con un error si se intenta reasignar.
