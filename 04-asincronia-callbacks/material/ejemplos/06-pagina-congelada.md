# 📘 Ejemplo 06 — La página que se congela

> 🎓 **Resultados de aprendizaje:** RA-2, RA-3
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, **en el orden en que salió**, con el archivo y la línea de cada error. El orden se contrastó con Node cuando la página no usa el navegador y no depende de él (sin diferencias). Los **tiempos son aproximados**: lo que importa es el orden. Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Diego tiene una página con dos botones. Uno ejecuta un bucle largo; el otro programa un aviso a los 2 segundos. Con el primero la página **se congela**; con el segundo, sigue respondiendo.

## 💻 Código

El archivo [`06-pagina-congelada.html`](../recursos/ejemplos/06-pagina-congelada.html) tiene este HTML en el `<body>`:

```html
<button id="bloquear">Bloquear con un bucle largo</button>
    <button id="esperar">Esperar 2 segundos sin bloquear</button>
```

y este código dentro de `<script>`:

```js
document.getElementById('bloquear').addEventListener('click', () => {
  console.log('🔒 Empieza el bucle largo');
  for (let i = 0; i < 1000000000; i++) { }
  console.log('🔓 Terminó el bucle largo');
});

document.getElementById('esperar').addEventListener('click', () => {
  console.log('⏳ Esperando 2 segundos');
  setTimeout(() => {
    console.log('✅ Pasaron 2 segundos');
  }, 2000);
});
```

## 🔍 Análisis paso a paso

1. **Un clic ejecuta un callback.** El navegador llama a la función cuando ocurre el clic (lo vemos mejor en el Ejemplo 16).
2. **El botón «Esperar»** programa un `setTimeout` y termina enseguida: la página sigue respondiendo.
3. **El botón «Bloquear»** ejecuta un bucle de mil millones de vueltas: durante varios segundos no podés pulsar nada, seleccionar texto ni desplazarte.
4. **El aviso de los 2 segundos también espera:** si el bucle está en marcha, el temporizador no se ejecuta hasta que termine.
5. **Probalo vos:** abrí la página, pulsá «Bloquear» y fijate que el navegador no responde hasta que aparece el mensaje de fin.

## ✅ Resultado esperado

Sin hacer clic, la consola no muestra nada. Pulsando «Esperar» y luego «Bloquear» (en la verificación se hizo por código), la consola muestra:

```text
⏳ Esperando 2 segundos
🔒 Empieza el bucle largo
🔓 Terminó el bucle largo
✅ Pasaron 2 segundos
```

- Una tarea bloqueante congela la página: los clics y los temporizadores esperan.
- Una espera con `setTimeout` no congela nada.
