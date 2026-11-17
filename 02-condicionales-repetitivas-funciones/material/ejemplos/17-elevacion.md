# 📘 Ejemplo 17 — Elevación (*hoisting*) de funciones

> 🎓 **Resultados de aprendizaje:** RA-6
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome y se anotó lo que imprimió la consola, con el archivo y la línea de cada error. Los valores se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Lucía llama a una función **antes** de escribirla. Con una función declarativa funciona; con una de expresión, no. La diferencia se llama **elevación** (*hoisting*).

## 💻 Código

### 📄 `17-elevacion.html`

Código del archivo [`17-elevacion.html`](../recursos/ejemplos/17-elevacion.html) (lo que va dentro de `<script>`):

```js
console.log(saludar('Lucía'));

function saludar(nombre) {
  return 'Hola, ' + nombre;
}

console.log(typeof saludar);
```

### 📄 `17-elevacion-error.html`

Código del archivo [`17-elevacion-error.html`](../recursos/ejemplos/17-elevacion-error.html) (lo que va dentro de `<script>`):

**Script 1**

```js
console.log(despedir('Lucía'));

const despedir = function (nombre) {
  return 'Chau, ' + nombre;
};
```

**Script 2**

```js
console.log(typeof avisar);
avisar('Lucía');

var avisar = function (nombre) {
  return 'Aviso para ' + nombre;
};
```

## 🔍 Análisis paso a paso

1. **Antes de ejecutar, JavaScript lee el código y registra las declaraciones.** Una **función declarativa** queda lista con su cuerpo completo desde el principio de su ámbito: por eso `saludar('Lucía')` funciona aunque la definición esté más abajo.
2. **Una función de expresión no se eleva como valor.** La constante `despedir` existe, pero está en la *zona muerta temporal* (Clase 01) hasta la línea donde se le asigna la función. Llamarla antes da `ReferenceError: Cannot access 'despedir' before initialization`.
3. **Con `var`** la variable existe desde el principio pero vale `undefined`: `typeof avisar` da `'undefined'` y llamarla da `TypeError: avisar is not a function`. El error es distinto, el motivo es el mismo: la función todavía no se asignó.
4. **Mala práctica y buena práctica.** Aunque se pueda, conviene definir las funciones **antes** de usarlas, o dejarlas todas juntas al principio, para que el código se lea de arriba hacia abajo.
5. **No declares funciones dentro de un `if` o de un bucle.** Fuera de modo estricto se comportan de forma poco clara; declaralas al nivel principal del script.
6. **Resumen.** Declarativa: se puede llamar antes. De expresión: solo después de la línea que la define.

## ✅ Resultado esperado

Al abrir `17-elevacion.html`, la consola muestra:

```text
Hola, Lucía
function
```

Al abrir `17-elevacion-error.html`, la consola muestra:

```text
Uncaught ReferenceError: Cannot access 'despedir' before initialization (17-elevacion-error.html:13)
undefined
Uncaught TypeError: avisar is not a function (17-elevacion-error.html:22)
```

- La función declarativa se puede llamar antes de su definición.
- La de expresión da un error si se la llama antes (`ReferenceError` con `const`, `TypeError` con `var`).
