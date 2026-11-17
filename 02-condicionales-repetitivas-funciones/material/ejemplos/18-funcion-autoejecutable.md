# 📘 Ejemplo 18 — Funciones autoejecutables (IIFE)

> 🎓 **Resultados de aprendizaje:** RA-7
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome y se anotó lo que imprimió la consola, con el archivo y la línea de cada error. Los valores se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Lucía quiere ejecutar un bloque de código **una sola vez**, sin dejar sus variables sueltas en el programa. Para eso envuelve una función en paréntesis y la llama en el mismo momento: es una función **autoejecutable** (IIFE, *Immediately Invoked Function Expression*).

## 💻 Código

### 📄 `18-funcion-autoejecutable.html`

Código del archivo [`18-funcion-autoejecutable.html`](../recursos/ejemplos/18-funcion-autoejecutable.html) (lo que va dentro de `<script>`):

```js
(function () {
  const secreto = 'oferta del día';
  console.log('Dentro:', secreto);
})();

console.log('Fuera:', typeof secreto);

const total = (function (precio, cantidad) {
  return precio * cantidad;
})(4.5, 3);
console.log('Total:', total);
```

### 📄 `18-sin-parentesis.html`

Código del archivo [`18-sin-parentesis.html`](../recursos/ejemplos/18-sin-parentesis.html) (lo que va dentro de `<script>`):

```js
function () {
  console.log('Esto no es una IIFE válida');
}();
```

## 🔍 Análisis paso a paso

1. **Forma:** `(function () { ... })();`. Tiene dos partes: la función entre paréntesis y, a continuación, `()` que la llama en el acto.
2. **Se ejecuta sola.** Al leer el script, el navegador define la función y la llama de inmediato; no hace falta ponerle un nombre ni llamarla después.
3. **Para qué sirve: aislar variables.** `secreto` es local a la función: `typeof secreto` desde afuera da `'undefined'`. Así el código de la IIFE no deja nombres sueltos que choquen con otros.
4. **Puede recibir argumentos y devolver un valor.** En la segunda IIFE, `(4.5, 3)` son los argumentos y el `return` se guarda en `total`.
5. **Los paréntesis son obligatorios.** Sin ellos, `function () { ... }()` empieza con la palabra `function` y JavaScript la lee como una **declaración** que necesita nombre: `SyntaxError: Function statements require a function name`. El error es de sintaxis, así que el script no llega a ejecutarse.
6. **Hoy se usa menos** que antes, porque `let`, `const` y los módulos ya aíslan las variables. Conviene reconocerla cuando aparece en código ajeno.

## ✅ Resultado esperado

Al abrir `18-funcion-autoejecutable.html`, la consola muestra:

```text
Dentro: oferta del día
Fuera: undefined
Total: 13.5
```

Al abrir `18-sin-parentesis.html`, la consola muestra:

```text
Uncaught SyntaxError: Function statements require a function name (18-sin-parentesis.html:13)
```

- La IIFE se define y se ejecuta en el mismo momento.
- Las variables de su interior no existen afuera.
