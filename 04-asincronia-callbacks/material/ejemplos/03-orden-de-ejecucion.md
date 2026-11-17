# 📘 Ejemplo 03 — Primero lo síncrono, después lo programado

> 🎓 **Resultados de aprendizaje:** RA-4
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, **en el orden en que salió**, con el archivo y la línea de cada error. El orden se contrastó con Node cuando la página no usa el navegador y no depende de él (sin diferencias). Los **tiempos son aproximados**: lo que importa es el orden. Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Marcos programó un aviso «inmediato» (0 ms) y se sorprendió: salió **después** del mensaje que estaba escrito más abajo.

## 💻 Código

El archivo [`03-orden-de-ejecucion.html`](../recursos/ejemplos/03-orden-de-ejecucion.html) tiene este código dentro de `<script>`:

```js
console.log('Primero');

setTimeout(() => {
  console.log('Tercero (temporizador de 0 ms)');
}, 0);

console.log('Segundo');
```

## 🔍 Análisis paso a paso

1. **0 ms no significa «ahora».** Significa «lo antes posible, pero **después** de que termine el código que se está ejecutando».
2. **El código síncrono va primero.** `Primero` y `Segundo` se escriben antes de que el navegador pueda ejecutar el temporizador.
3. **La función programada espera en una cola.** Cuando el código síncrono termina, el navegador la toma y la ejecuta (en el Ejemplo 08 vemos cómo).
4. **Regla práctica:** un `setTimeout`, aunque sea de 0 ms, siempre se ejecuta después de todo el código síncrono que ya está en marcha.

## ✅ Resultado esperado

Al abrir `03-orden-de-ejecucion.html`, la consola muestra:

```text
Primero
Segundo
Tercero (temporizador de 0 ms)
```

- `setTimeout(…, 0)` se ejecuta después del código síncrono, no antes.
- Para predecir el orden: primero todo lo síncrono, después lo programado.
