# 📘 Ejemplo 07 — Un solo hilo: una tarea a la vez

> 🎓 **Resultados de aprendizaje:** RA-3
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, **en el orden en que salió**, con el archivo y la línea de cada error. El orden se contrastó con Node cuando la página no usa el navegador y no depende de él (sin diferencias). Los **tiempos son aproximados**: lo que importa es el orden. Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

La cafetería tiene un solo empleado para tres tareas. Aunque las tres estén listas al mismo tiempo, las hace **de a una y por completo**: no deja una a medias para empezar otra.

## 💻 Código

El archivo [`07-un-solo-hilo.html`](../recursos/ejemplos/07-un-solo-hilo.html) tiene este código dentro de `<script>`:

```js
function tarea(nombre) {
  setTimeout(() => {
    console.log(nombre + ' empieza');
    for (let i = 0; i < 1000; i++) { }
    console.log(nombre + ' termina');
  }, 0);
}

tarea('Barista');
tarea('Cajero');
tarea('Repartidor');
```

## 🔍 Análisis paso a paso

1. **Las tres tareas están listas a la vez** (0 ms), pero solo hay un hilo para ejecutarlas.
2. **Se turnan, no se mezclan.** Cada una empieza y termina antes de que empiece la siguiente: nunca vas a ver `Barista empieza` y después `Cajero empieza`.
3. **El orden es el de llegada:** la primera que se programó es la primera que se ejecuta.
4. **Por eso una tarea larga retrasa a las demás** (Ejemplo 04): el hilo está ocupado.
5. **Matiz:** el *navegador* hace otras cosas en paralelo (por ejemplo, contar el tiempo o esperar la red); lo que corre de a una instrucción a la vez es **tu código JavaScript**.

## ✅ Resultado esperado

Al abrir `07-un-solo-hilo.html`, la consola muestra:

```text
Barista empieza
Barista termina
Cajero empieza
Cajero termina
Repartidor empieza
Repartidor termina
```

- JavaScript ejecuta tu código en un solo hilo: una tarea a la vez, hasta terminarla.
- Las tareas listas se ejecutan en orden de llegada.
