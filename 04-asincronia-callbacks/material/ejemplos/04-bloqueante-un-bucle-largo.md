# 📘 Ejemplo 04 — Un bucle largo bloquea todo

> 🎓 **Resultados de aprendizaje:** RA-2
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, **en el orden en que salió**, con el archivo y la línea de cada error. El orden se contrastó con Node cuando la página no usa el navegador y no depende de él (sin diferencias). Los **tiempos son aproximados**: lo que importa es el orden. Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Sofía escribió un bucle que cuenta hasta trescientos millones. Mientras el bucle trabaja, **nada más puede ejecutarse**: ni siquiera un temporizador que ya está listo.

## 💻 Código

El archivo [`04-bloqueante-un-bucle-largo.html`](../recursos/ejemplos/04-bloqueante-un-bucle-largo.html) tiene este código dentro de `<script>`:

```js
console.log('1. Empieza el bucle largo');

setTimeout(() => {
  console.log('3. El temporizador de 0 ms recién se ejecuta ahora');
}, 0);

for (let i = 0; i < 300000000; i++) { }

console.log('2. Terminó el bucle largo');
```

## 🔍 Análisis paso a paso

1. **El bucle es una tarea bloqueante.** Mientras se ejecuta, el hilo de JavaScript está ocupado y no puede atender nada más.
2. **El temporizador ya estaba listo** (0 ms), pero tiene que esperar a que el bucle termine.
3. **Cuánto dura depende del equipo:** unas décimas de segundo o más. Lo importante no es el tiempo exacto sino que **durante ese rato la página no responde**.
4. **En una página real**, un bucle así congela los botones y el desplazamiento (lo vemos en el Ejemplo 06).
5. **Conclusión:** en JavaScript conviene no ocupar el hilo con tareas largas.

## ✅ Resultado esperado

Al abrir `04-bloqueante-un-bucle-largo.html`, la consola muestra:

```text
1. Empieza el bucle largo
2. Terminó el bucle largo
3. El temporizador de 0 ms recién se ejecuta ahora
```

- Una operación **bloqueante** ocupa el hilo y retrasa todo lo demás.
- Un temporizador listo igual espera a que termine el código que se está ejecutando.
