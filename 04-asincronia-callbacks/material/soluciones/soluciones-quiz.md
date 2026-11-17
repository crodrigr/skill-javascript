# 🔑 Soluciones — Quiz 01 de la Clase 04 (material docente)

No compartir este archivo con los estudiantes. Las respuestas con valores se comprobaron ejecutando el código en Chrome (el **orden** de las salidas; los tiempos son aproximados).

| Ítem | Tipo | Respuesta correcta | RA | Sesión |
|---|---|---|---|---|
| 1 | Selección múltiple | **B** | RA-1 | 1 |
| 2 | Selección múltiple | **D** | RA-2 | 1 |
| 3 | Selección múltiple | **A** | RA-3 | 1 |
| 4 | Identificación de resultado | **C** | RA-4 | 1 |
| 5 | Selección múltiple | **D** | RA-3 | 1 |
| 6 | Selección múltiple | **B** | RA-4 | 1 |
| 7 | Identificación de resultado | **C** | RA-2 | 1 |
| 8 | Selección múltiple | **A** | RA-2 | 1 |
| 9 | Identificación de resultado | **D** | RA-4 | 1 |
| 10 | Selección múltiple | **B** | RA-5 | 2 |
| 11 | Identificación de resultado | **A** | RA-5 | 2 |
| 12 | Selección múltiple | **C** | RA-5 | 2 |
| 13 | Identificación de resultado | **D** | RA-6 | 2 |
| 14 | Identificación de resultado | **B** | RA-6 | 2 |
| 15 | Selección múltiple | **C** | RA-6 | 2 |
| 16 | Identificación de resultado | **A** | RA-7 | 2 |
| 17 | Identificación de resultado | **B** | RA-7 | 2 |
| 18 | Problema breve | Ver abajo | RA-8, RA-9 | 2 |

## Justificaciones

1. **B.** Una tarea asíncrona se pone en marcha y el programa continúa; el resultado llega más tarde.
2. **D.** Una operación bloqueante ocupa el hilo: clics, temporizadores y dibujo esperan a que termine.
3. **A.** Con un solo hilo, esperar sin más detendría todo lo demás; por eso las esperas se delegan y se avisa después.
4. **C.** Aunque sea de 0 ms, el temporizador espera a que termine el código síncrono.
5. **D.** El código del programa corre en un solo hilo; las esperas las gestiona el entorno.
6. **B.** Conecta la cola de tareas con la pila de llamadas, de a una tarea y solo con la pila vacía.
7. **C.** El bucle bloquea el hilo: el temporizador listo debe esperar a que termine el código síncrono.
8. **A.** En el modelo no bloqueante la espera no detiene el programa.
9. **D.** `c` vence a los 100 ms; `d` se programa entonces para 50 ms más (a los 150 ms); `b` vence a los 200 ms.
10. **B.** Un callback (función de retrollamada) se entrega a otra función, que decide cuándo llamarlo.
11. **A.** `avisar()` con paréntesis se ejecuta ya y entrega `undefined` a `setTimeout`: el aviso sale antes que `fin`.
12. **C.** El de `forEach` se ejecuta durante la llamada, antes de que el programa siga.
13. **D.** `clearTimeout(id)` cancela el temporizador de `A` antes de que venza.
14. **B.** El intervalo se repite hasta que el callback lo detiene al llegar a 3.
15. **C.** Registrar el callback y ejecutarlo son dos momentos distintos: el navegador lo llama cuando ocurre el evento.
16. **A.** El primer caso pasa un error; el segundo, `null` y el resultado `2`.
17. **B.** El callback asigna el valor después: la línea síncrona todavía ve `undefined`.

## Ítem 18 — Problema breve

Una solución posible (se ejecutó en Chrome):

```js
function preparar(pedido, alTerminar) {
  setTimeout(() => {
    alTerminar(null, pedido);
  }, 300);
}

function fallar(error) {
  console.log('Error: ' + error);
}

function alPreparar(error, pedido) {
  if (error !== null) {
    fallar(error);
    return;
  }
  console.log('Pedido ' + pedido.numero + ' preparado');
}

console.log('Pedido recibido');
preparar({ numero: 7 }, alPreparar);
```

Salida:

```text
Pedido recibido
Pedido 7 preparado
```

Criterios: `preparar` espera con `setTimeout` y llama al callback **una sola vez** con `null` y el pedido; `alPreparar` y `fallar` son funciones **con nombre** (sin anidar); se revisa el error primero y se sale con `return`.
