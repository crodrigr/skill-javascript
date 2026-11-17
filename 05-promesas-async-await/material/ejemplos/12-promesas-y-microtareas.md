# 📘 Ejemplo 12 — Síncrono, microtarea y temporizador

> 🎓 **Resultados de aprendizaje:** RA-5
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, **en el orden en que salió**, con el archivo y la línea de cada error. El orden se contrastó con Node cuando la página no usa el navegador ni tiene errores a propósito (sin diferencias). Los ejemplos **no imprimen objetos `Promise`**: la consola real muestra su estado, pero aquí se observa con `.then()`, `.catch()` y `.finally()`. Los **tiempos son aproximados**: lo que importa es el orden. Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

¿Las promesas son código no bloqueante? El **ejecutor** corre de inmediato, pero los `.then()` esperan en una cola especial —la de **microtareas**— que se atiende **antes** que los temporizadores.

## 💻 Código

El archivo [`12-promesas-y-microtareas.html`](../recursos/ejemplos/12-promesas-y-microtareas.html) tiene este código dentro de `<script>`:

```js
console.log('1. Inicio');

setTimeout(() => console.log('5. Temporizador (0 ms)'), 0);

const promesa = new Promise((resolve) => {
  console.log('2. Ejecutor (síncrono)');
  resolve('listo');
});

promesa.then((valor) => console.log('4. .then (microtarea): ' + valor));

console.log('3. Fin del código síncrono');
```

## 🔍 Análisis paso a paso

1. **Primero lo síncrono:** `1`, el ejecutor (`2`, porque `new Promise` ejecuta su función en el acto) y `3`.
2. **Después las microtareas:** el `.then()` de una promesa ya cumplida entra en la **cola de microtareas** y se ejecuta apenas termina el código síncrono (`4`).
3. **Por último los temporizadores:** el `setTimeout` de 0 ms, aunque se escribió antes, espera en la cola de tareas y sale al final (`5`).
4. **Regla:** código síncrono → microtareas (`.then`, `.catch`, `.finally`, `await`) → tareas (temporizadores, eventos).
5. **Entonces, ¿es no bloqueante?** La **espera** de una promesa no bloquea nada: el hilo queda libre y el resultado llega por una microtarea. Pero el **ejecutor** y los `.then()` sí ocupan el hilo mientras se ejecutan.
6. **Es un modelo para razonar,** no el detalle de cada navegador.

## ✅ Resultado esperado

Al abrir `12-promesas-y-microtareas.html`, la consola muestra:

```text
1. Inicio
2. Ejecutor (síncrono)
3. Fin del código síncrono
4. .then (microtarea): listo
5. Temporizador (0 ms)
```

- Orden: código síncrono → microtareas (`.then`) → tareas (`setTimeout`).
- La espera de una promesa no bloquea; lo que se ejecuta dentro de ella, sí.
