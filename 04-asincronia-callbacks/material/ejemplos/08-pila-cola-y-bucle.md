# 📘 Ejemplo 08 — La pila, la cola y el bucle de eventos

> 🎓 **Resultados de aprendizaje:** RA-4
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, **en el orden en que salió**, con el archivo y la línea de cada error. El orden se contrastó con Node cuando la página no usa el navegador y no depende de él (sin diferencias). Los **tiempos son aproximados**: lo que importa es el orden. Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

¿Cómo decide JavaScript qué ejecutar y cuándo? Con tres piezas: la **pila de llamadas** (lo que se está ejecutando), la **cola de tareas** (lo que está listo y espera turno) y el **bucle de eventos** (que pasa la siguiente tarea de la cola a la pila cuando la pila queda vacía).

## 💻 Código

El archivo [`08-pila-cola-y-bucle.html`](../recursos/ejemplos/08-pila-cola-y-bucle.html) tiene este código dentro de `<script>`:

```js
function preparar() {
  console.log('B. preparar() se ejecuta dentro de la pila');
}

console.log('A. Inicio');
setTimeout(() => console.log('E. Temporizador de 500 ms'), 500);
setTimeout(() => console.log('D. Temporizador de 0 ms'), 0);
setTimeout(() => console.log('F. Temporizador de 1000 ms'), 1000);
preparar();
console.log('C. Fin del código síncrono');
```

## 🔍 Análisis paso a paso

1. **Pila de llamadas.** El código síncrono (`A`, `preparar()`, `B`, `C`) se ejecuta en la pila, de a una instrucción.
2. **Los `setTimeout` salen de la pila enseguida:** se registran en el navegador, que cuenta el tiempo por su cuenta.
3. **Cola de tareas.** Cuando se cumple el tiempo de cada temporizador, su función pasa a la cola, en el orden en que vencen: 0 ms, 500 ms, 1000 ms.
4. **Bucle de eventos.** Cuando la pila queda vacía (terminó el código síncrono), el bucle toma la primera función de la cola y la ejecuta; después la siguiente, y así.
5. **Resultado:** el orden de las letras coincide con el orden de ejecución: `A`, `B`, `C` (síncrono) y luego `D`, `E`, `F` (según el tiempo).
6. **Este es un modelo para razonar**, no la descripción de cada detalle interno de un navegador. Existen otras colas con más prioridad (las veremos más adelante); para esta clase alcanza con la pila y la cola de temporizadores.

## ✅ Resultado esperado

Al abrir `08-pila-cola-y-bucle.html`, la consola muestra:

```text
A. Inicio
B. preparar() se ejecuta dentro de la pila
C. Fin del código síncrono
D. Temporizador de 0 ms
E. Temporizador de 500 ms
F. Temporizador de 1000 ms
```

- La pila ejecuta lo síncrono; la cola guarda lo que está listo; el bucle de eventos las conecta.
- Para predecir el orden: primero se vacía la pila y después se atiende la cola, de a una tarea.
