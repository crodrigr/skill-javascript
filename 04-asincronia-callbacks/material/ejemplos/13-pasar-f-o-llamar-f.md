# 📘 Ejemplo 13 — Pasar la función o llamarla

> 🎓 **Resultados de aprendizaje:** RA-5, RA-6
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, **en el orden en que salió**, con el archivo y la línea de cada error. El orden se contrastó con Node cuando la página no usa el navegador y no depende de él (sin diferencias). Los **tiempos son aproximados**: lo que importa es el orden. Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Marcos escribió `setTimeout(avisar('Mal escrito'), 500)` y el aviso salió **al instante**. Pasar `f` entrega la función; escribir `f()` la **llama** y entrega lo que devuelve.

## 💻 Código

El archivo [`13-pasar-f-o-llamar-f.html`](../recursos/ejemplos/13-pasar-f-o-llamar-f.html) tiene este código dentro de `<script>`:

```js
function avisar(texto) {
  console.log('🔔 ' + texto);
}

console.log('Inicio');
setTimeout(avisar('Mal escrito'), 500);
setTimeout(() => avisar('Bien escrito'), 500);
console.log('Fin');
```

La segunda página, [`13-pasar-f-o-llamar-f-error.html`](../recursos/ejemplos/13-pasar-f-o-llamar-f-error.html) (olvidar pasar el callback), tiene este código dentro de `<script>`:

```js
function hacerAlgo(callback) {
  console.log('Voy a llamar al callback');
  callback();
}

hacerAlgo();
```

## 🔍 Análisis paso a paso

1. **`avisar('Mal escrito')` se ejecuta ya**, mientras se evalúan los argumentos de `setTimeout`. Escribe el mensaje y devuelve `undefined`; `setTimeout` recibe `undefined` y no programa nada útil.
2. **`() => avisar('Bien escrito')` es una función nueva** que, cuando venza el tiempo, llama a `avisar`. Esa sí se ejecuta a los 500 ms.
3. **Si no hay que pasar argumentos**, alcanza con el nombre: `setTimeout(avisar, 500)`. Con argumentos, se envuelve en una función de flecha (o se pasan como argumentos extra de `setTimeout`, Ejemplo 14).
4. **La segunda página** muestra el error opuesto: una función que espera un callback y no lo recibe. `callback` vale `undefined` y llamarlo da `TypeError: callback is not a function` (*callback no es una función*).
5. **Cambia según el entorno:** en Chrome, `setTimeout(undefined, 500)` no da error (lo que no es una función se trata como texto de código y `undefined` es código que no hace nada; MDN desaconseja pasar texto), por eso el error pasa inadvertido; en Node.js, otro entorno donde corre JavaScript, ese mismo código **lanza un error**. Esta página se verificó en Chrome.
6. **Regla:** para pasar una función, sin paréntesis; para llamarla, con paréntesis.

## ✅ Resultado esperado

Al abrir `13-pasar-f-o-llamar-f.html`, la consola muestra:

```text
Inicio
🔔 Mal escrito
Fin
🔔 Bien escrito
```

Al abrir `13-pasar-f-o-llamar-f-error.html`, la consola muestra:

```text
Voy a llamar al callback
Uncaught TypeError: callback is not a function (13-pasar-f-o-llamar-f-error.html:15)
```

- `f` es la función; `f()` es su resultado. A `setTimeout` y a los eventos se les pasa `f`.
- Si una función espera un callback y no lo recibe, llamarlo da `TypeError`.
