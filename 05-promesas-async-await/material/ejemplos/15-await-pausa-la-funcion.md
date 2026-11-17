# 📘 Ejemplo 15 — await pausa la función, no el hilo

> 🎓 **Resultados de aprendizaje:** RA-5, RA-6
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, **en el orden en que salió**, con el archivo y la línea de cada error. El orden se contrastó con Node cuando la página no usa el navegador ni tiene errores a propósito (sin diferencias). Los ejemplos **no imprimen objetos `Promise`**: la consola real muestra su estado, pero aquí se observa con `.then()`, `.catch()` y `.finally()`. Los **tiempos son aproximados**: lo que importa es el orden. Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

`await` se escribe delante de una promesa y espera su resultado **dentro de una función `async`**. Parece que el programa se detiene, pero solo se pausa **esa función**: el resto del código sigue.

## 💻 Código

El archivo [`15-await-pausa-la-funcion.html`](../recursos/ejemplos/15-await-pausa-la-funcion.html) tiene este código dentro de `<script>`:

```js
function esperar(milisegundos) {
  return new Promise((resolve) => {
    setTimeout(resolve, milisegundos);
  });
}

async function atender(cliente) {
  console.log('2. Empieza a atender a ' + cliente);
  await esperar(500);
  console.log('4. Termina de atender a ' + cliente);
}

console.log('1. Antes de llamar a atender');
atender('Lucía');
console.log('3. Después de llamar (atender sigue esperando)');
```

## 🔍 Análisis paso a paso

1. **`await esperar(500)`** pausa la función `atender` hasta que la promesa se cumple (500 ms).
2. **Lo que está después de la llamada sigue ejecutándose:** el mensaje `3` sale mientras `atender` espera. El hilo **no** se bloquea.
3. **Cuando la promesa se cumple,** la función se reanuda (como una microtarea) y escribe el mensaje `4`.
4. **Lo que se escribe después del `await`** equivale al `.then()` de la promesa: el código se lee de arriba hacia abajo, pero se ejecuta más tarde.
5. **`await` solo se puede usar dentro de una función `async`** (o en el nivel superior de un módulo, Ejemplo 21).

## ✅ Resultado esperado

Al abrir `15-await-pausa-la-funcion.html`, la consola muestra:

```text
1. Antes de llamar a atender
2. Empieza a atender a Lucía
3. Después de llamar (atender sigue esperando)
4. Termina de atender a Lucía
```

- `await` pausa la función `async`, no el hilo.
- El código que sigue a la llamada se ejecuta mientras la función espera.
