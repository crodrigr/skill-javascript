# 📘 Ejemplo 02 — Declarar una promesa con new Promise

> 🎓 **Resultados de aprendizaje:** RA-2
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, **en el orden en que salió**, con el archivo y la línea de cada error. El orden se contrastó con Node cuando la página no usa el navegador ni tiene errores a propósito (sin diferencias). Los ejemplos **no imprimen objetos `Promise`**: la consola real muestra su estado, pero aquí se observa con `.then()`, `.catch()` y `.finally()`. Los **tiempos son aproximados**: lo que importa es el orden. Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Marcos quiere una promesa que diga si hay stock de café. `new Promise` recibe una función —el **ejecutor**— que decide cuándo llamar a `resolve` o a `reject`.

## 💻 Código

El archivo [`02-new-promise.html`](../recursos/ejemplos/02-new-promise.html) tiene este código dentro de `<script>`:

```js
console.log('1. Antes de crear la promesa');

const promesa = new Promise((resolve, reject) => {
  console.log('2. El ejecutor se ejecuta de inmediato');
  const hayStock = true;
  if (hayStock) {
    resolve('Hay stock de café');
  } else {
    reject('No hay stock de café');
  }
});

console.log('3. Después de crear la promesa');

promesa.then((mensaje) => console.log('4. ' + mensaje));
```

## 🔍 Análisis paso a paso

1. **`new Promise(ejecutor)`** crea la promesa y ejecuta el ejecutor **en el acto y de forma síncrona**: el mensaje 2 sale entre el 1 y el 3.
2. **El ejecutor recibe dos funciones:** `resolve` para cumplir la promesa y `reject` para rechazarla.
3. **Aquí hay stock,** así que se llama a `resolve` con un texto: la promesa queda cumplida.
4. **El `.then()` se ejecuta después,** aunque la promesa ya esté cumplida: su callback espera a que termine el código síncrono (el mensaje 4 sale al final). Lo explicamos con las microtareas en el Ejemplo 12.
5. **Cuándo usar `new Promise`:** para envolver una tarea que usa callbacks (como `setTimeout`) y devolver una promesa.

## ✅ Resultado esperado

Al abrir `02-new-promise.html`, la consola muestra:

```text
1. Antes de crear la promesa
2. El ejecutor se ejecuta de inmediato
3. Después de crear la promesa
4. Hay stock de café
```

- El ejecutor de `new Promise` se ejecuta de inmediato.
- `resolve(valor)` cumple la promesa y `reject(motivo)` la rechaza.
