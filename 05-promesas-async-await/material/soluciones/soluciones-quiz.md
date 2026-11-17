# 🔑 Soluciones — Quiz 01 de la Clase 04 (material docente)

No compartir este archivo con los estudiantes. Las respuestas con valores se comprobaron ejecutando el código en Chrome (el **orden** de las salidas; los tiempos son aproximados).

| Ítem | Tipo | Respuesta correcta | RA | Sesión |
|---|---|---|---|---|
| 1 | Selección múltiple | **C** | RA-1 | 1 |
| 2 | Identificación de resultado | **A** | RA-1 | 1 |
| 3 | Selección múltiple | **D** | RA-2 | 1 |
| 4 | Selección múltiple | **B** | RA-3 | 1 |
| 5 | Identificación de resultado | **D** | RA-3 | 1 |
| 6 | Identificación de resultado | **A** | RA-3 | 1 |
| 7 | Selección múltiple | **C** | RA-4 | 1 |
| 8 | Selección múltiple | **B** | RA-4 | 1 |
| 9 | Identificación de resultado | **D** | RA-5 | 1 |
| 10 | Selección múltiple | **A** | RA-5 | 1 |
| 11 | Selección múltiple | **B** | RA-6 | 2 |
| 12 | Identificación de resultado | **C** | RA-6 | 2 |
| 13 | Selección múltiple | **A** | RA-6 | 2 |
| 14 | Identificación de resultado | **D** | RA-7 | 2 |
| 15 | Identificación de resultado | **B** | RA-7 | 2 |
| 16 | Selección múltiple | **C** | RA-9 | 2 |
| 17 | Identificación de resultado | **A** | RA-9 | 2 |
| 18 | Selección múltiple | **B** | RA-8 | 2 |
| 19 | Identificación de resultado | **C** | RA-7 | 2 |
| 20 | Problema breve | Ver abajo | RA-6, RA-9 | 2 |

## Justificaciones

1. **C.** Toda promesa empieza pendiente y después pasa, una sola vez, a cumplida o a rechazada.
2. **A.** Solo cuenta la primera llamada a `resolve` o `reject`; las demás se ignoran.
3. **D.** El ejecutor corre en el acto, antes de la línea siguiente.
4. **B.** Cada `.then()` devuelve una promesa nueva: por eso se pueden encadenar.
5. **D.** Como la promesa se rechaza, `.then` se salta, `.catch` atiende el error y `.finally` corre siempre. Resultado: B, C.
6. **A.** El primer `.then` no hace `return`: devuelve `undefined`, y el paso siguiente lo recibe sin esperar a `sumarUno`.
7. **C.** Las tareas corren a la vez y `Promise.all` espera a la más lenta.
8. **B.** `Promise.allSettled` espera a todas y entrega el estado de cada una; nunca se rechaza.
9. **D.** Primero lo síncrono (1 y 4), después las microtareas (3) y por último los temporizadores (2): 1, 4, 3, 2.
10. **A.** La promesa no mueve el trabajo a otro lado: el ejecutor corre en el mismo hilo.
11. **B.** Una función `async` siempre devuelve una promesa: `return` la cumple y `throw` la rechaza.
12. **C.** `await` pausa la función `atender`, no el programa: el `3` sale mientras espera.
13. **A.** `await` pausa la función `async`; el hilo queda libre.
14. **D.** El rechazo se atiende en `catch` y `finally` corre siempre.
15. **B.** Una función `async` se consume con `.then()`: el valor que devuelve es el de la promesa.
16. **C.** Con `Promise.all` las tareas corren a la vez y el total es el de la más lenta (400 ms); con tres `await` seguidos serían 900 ms.
17. **A.** `forEach` no espera a las funciones `async`: `fin` sale primero.
18. **B.** El *top-level await* solo funciona en módulos; en un script clásico da `SyntaxError`.
19. **C.** Un `throw` dentro de una función `async` rechaza la promesa que devuelve; `.catch()` la atiende.

## Ítem 20 — Problema breve

Una solución posible (se ejecutó en Chrome):

```js
function esperar(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function avisar() {
  console.log('Preparando');
  await esperar(300);
  console.log('Listo');
  return 'Entregado';
}

avisar().then((texto) => console.log(texto));
```

Salida:

```text
Preparando
Listo
Entregado
```

Criterios: `preparar` espera con `setTimeout` y llama al callback **una sola vez** con `null` y el pedido; `alPreparar` y `fallar` son funciones **con nombre** (sin anidar); se revisa el error primero y se sale con `return`.
