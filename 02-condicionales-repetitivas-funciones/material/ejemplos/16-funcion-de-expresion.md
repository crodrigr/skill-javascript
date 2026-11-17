# 📘 Ejemplo 16 — Funciones de expresión

> 🎓 **Resultados de aprendizaje:** RA-6
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome y se anotó lo que imprimió la consola, con el archivo y la línea de cada error. Los valores se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

En JavaScript una función es un **valor**: se puede guardar en una constante igual que un número. Esa forma de definirla se llama **función de expresión**.

## 💻 Código

El archivo [`16-funcion-de-expresion.html`](../recursos/ejemplos/16-funcion-de-expresion.html) tiene este código dentro de `<script>`:

```js
const calcularTotal = function (precio, cantidad) {
  return precio * cantidad;
};

console.log(calcularTotal(4.5, 3));
console.log(typeof calcularTotal);

const copia = calcularTotal;
console.log(copia(3.2, 2));

const total = function calcular(precio, cantidad) {
  return precio * cantidad;
};
console.log(total(4.5, 4));
console.log(typeof calcular);
```

## 🔍 Análisis paso a paso

1. **Forma:** `const nombre = function (parámetros) { cuerpo };`. La parte `function (...) { ... }` no tiene nombre propio (es **anónima**): el nombre es el de la constante. Termina con `;` porque es parte de una declaración de constante.
2. **Se llama igual** que una declarativa: `calcularTotal(4.5, 3)`.
3. **La función es un valor.** `typeof calcularTotal` da `'function'`, y se puede copiar a otra constante (`copia`) y llamarla desde ahí.
4. **Con nombre.** `function calcular(...)` le pone un nombre a la función, pero ese nombre solo existe **dentro de ella**: `typeof calcular` desde afuera da `'undefined'`. Se llama con el nombre de la constante (`total`).
5. **Usá `const`.** Evita reasignar la función por descuido. (Con `var` o `let` también se puede escribir, pero cambia lo que ocurre antes de la definición: Ejemplo 17.)
6. **Diferencia clave con la declarativa:** no se puede llamar **antes** de la línea donde se define (Ejemplo 17).

## ✅ Resultado esperado

Al abrir `16-funcion-de-expresion.html`, la consola muestra:

```text
13.5
function
6.4
18
undefined
```

- Una función de expresión es una función guardada en una constante.
- El nombre interno de una función de expresión solo existe dentro de ella.
