# 📘 Ejemplo 09 — Predecí el orden

> 🎓 **Resultados de aprendizaje:** RA-4
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, **en el orden en que salió**, con el archivo y la línea de cada error. El orden se contrastó con Node cuando la página no usa el navegador y no depende de él (sin diferencias). Los **tiempos son aproximados**: lo que importa es el orden. Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Un reto para practicar: antes de ejecutar, escribí en un papel el orden en que saldrán los seis mensajes. Después comprobalo en la consola.

## 💻 Código

El archivo [`09-predecir-el-orden.html`](../recursos/ejemplos/09-predecir-el-orden.html) tiene este código dentro de `<script>`:

```js
console.log('1');

setTimeout(() => console.log('2'), 300);
setTimeout(() => console.log('3'), 0);

setTimeout(() => {
  console.log('4');
  setTimeout(() => console.log('5'), 0);
}, 100);

console.log('6');
```

## 🔍 Análisis paso a paso

1. **Primero lo síncrono:** salen `1` y `6`.
2. **Después, por tiempo:** `3` (0 ms), `4` (100 ms) y `2` (300 ms).
3. **El `5` se programa recién cuando se ejecuta el `4`**, a los 100 ms, con 0 ms de espera: vence a los 100 ms y sale antes que el `2` (300 ms).
4. **Orden final:** `1`, `6`, `3`, `4`, `5`, `2`.
5. **Truco:** anotá junto a cada `setTimeout` el instante en que vence (el tiempo que acumula) y ordená por ese instante.

## ✅ Resultado esperado

Al abrir `09-predecir-el-orden.html`, la consola muestra:

```text
1
6
3
4
5
2
```

- El instante en que vence un temporizador anidado es la suma de las esperas.
- Lo síncrono siempre sale antes que lo programado.
