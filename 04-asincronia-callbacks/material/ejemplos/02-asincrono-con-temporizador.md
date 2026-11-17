# 📘 Ejemplo 02 — Lo asíncrono no se queda esperando

> 🎓 **Resultados de aprendizaje:** RA-1
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, **en el orden en que salió**, con el archivo y la línea de cada error. El orden se contrastó con Node cuando la página no usa el navegador y no depende de él (sin diferencias). Los **tiempos son aproximados**: lo que importa es el orden. Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Lucía pide un café que tarda un segundo. En lugar de quedarse parada, se sienta a esperar. Una tarea **asíncrona** se pone en marcha y el programa **sigue**: el resultado llega después.

## 💻 Código

El archivo [`02-asincrono-con-temporizador.html`](../recursos/ejemplos/02-asincrono-con-temporizador.html) tiene este código dentro de `<script>`:

```js
console.log('1. Lucía pide un café');

setTimeout(() => {
  console.log('3. ☕ El café está listo');
}, 1000);

console.log('2. Lucía se sienta a esperar');
```

## 🔍 Análisis paso a paso

1. **`setTimeout(función, milisegundos)`** pide al navegador que ejecute la función **más tarde**, pasados los milisegundos indicados (1000 ms = 1 s).
2. **El programa no se detiene.** Después de programar el temporizador, sigue con la línea siguiente y escribe el mensaje 2.
3. **El orden de salida no es el de escritura.** El mensaje 3 está escrito en medio, pero se muestra al final, cuando se cumple el tiempo.
4. **La función que se le pasa a `setTimeout` es un *callback*** (una «función de retrollamada»): el navegador la llama cuando corresponde. Lo veremos en detalle en la sesión 2.
5. **Los tiempos son aproximados:** `setTimeout` garantiza *como mínimo* ese tiempo, no uno exacto. Lo que importa es el **orden**.

## ✅ Resultado esperado

Al abrir `02-asincrono-con-temporizador.html`, la consola muestra:

```text
1. Lucía pide un café
2. Lucía se sienta a esperar
3. ☕ El café está listo
```

- Una tarea **asíncrona** se inicia y el programa sigue; el resultado llega después.
- El orden de salida puede ser distinto del orden de escritura.
