# 🔑 Soluciones — Quiz 01 de la Clase 07 (material docente)

No compartir este archivo con los estudiantes. Las respuestas con valores se comprobaron ejecutando el código en Chrome (los ítems de animación, en tiempo real).

| Ítem | Tipo | Respuesta correcta | RA | Sesión |
|---|---|---|---|---|
| 1 | Selección múltiple | **B** | RA-1 | 1 |
| 2 | Identificación de resultado | **D** | RA-1 | 1 |
| 3 | Identificación de resultado | **A** | RA-2 | 1 |
| 4 | Identificación de resultado | **C** | RA-2 | 1 |
| 5 | Identificación de resultado | **B** | RA-2 | 1 |
| 6 | Identificación de resultado | **D** | RA-3 | 1 |
| 7 | Identificación de resultado | **A** | RA-3 | 1 |
| 8 | Identificación de resultado | **C** | RA-3 | 1 |
| 9 | Identificación de resultado | **D** | RA-4 | 2 |
| 10 | Selección múltiple | **B** | RA-4 | 2 |
| 11 | Selección múltiple | **C** | RA-5 | 2 |
| 12 | Identificación de resultado | **A** | RA-6 | 2 |
| 13 | Identificación de resultado | **D** | RA-6 | 2 |
| 14 | Identificación de resultado | **B** | RA-6 | 2 |
| 15 | Identificación de resultado | **A** | RA-6 | 2 |
| 16 | Identificación de resultado | **C** | RA-6 | 2 |
| 17 | Selección múltiple | **B** | RA-7 | 3 |
| 18 | Identificación de resultado | **D** | RA-7 | 3 |
| 19 | Identificación de resultado | **C** | RA-7 | 3 |
| 20 | Identificación de resultado | **A** | RA-8 | 3 |
| 21 | Selección múltiple | **B** | RA-8 | 3 |
| 22 | Selección múltiple | **D** | RA-9 | 3 |
| 23 | Selección múltiple | **A** | RA-9 | 3 |
| 24 | Problema breve | Ver abajo | RA-8, RA-9 | 3 |

## Justificaciones

1. **B.** Crear nodos con `textContent` no interpreta HTML; `innerHTML` sí.
2. **D.** Un elemento recién creado no tiene padre (`null`) y no está en la página (`false`).
3. **A.** Insertar un nodo que ya está en la página lo **mueve**: sale de `a` y entra en `b`.
4. **C.** `cloneNode(false)` copia el elemento y sus atributos, sin los hijos.
5. **B.** Un elemento quitado conserva su contenido, pero su `parentNode` es `null`.
6. **D.** `style.backgroundColor` escribe el atributo `style` con el nombre CSS (con guion).
7. **A.** `style` solo ve el estilo en línea (vacío); `getComputedStyle` da el valor final aplicado.
8. **C.** `dataset.productoId` escribe el atributo `data-producto-id` (camelCase → guiones).
9. **D.** `afterbegin` y `beforeend` insertan dentro (al principio y al final); `afterend`, después del elemento.
10. **B.** `beforebegin` y `afterend` necesitan un padre; `insertAdjacentHTML` lanza el error (`insertAdjacentElement` devuelve `null`).
11. **C.** `insertAdjacentHTML` no sanea nada: con texto de otra persona, usá `insertAdjacentText` o nodos con `textContent`.
12. **A.** `children` cuenta los 3 elementos; `childNodes`, además, 4 nodos de texto (los saltos de línea).
13. **D.** El hermano siguiente de `b` es `c`; el de `c` (el último) es `null`.
14. **B.** `closest` sube hasta el primer ancestro que coincide (`article`) o devuelve `null` si ninguno coincide.
15. **A.** El padre de `<html>` es `document` (`#document`), que no es un elemento: `parentElement` es `null`.
16. **C.** `children` es una colección viva: al quitar un hijo, la colección se acorta y el bucle salta elementos (quedan 2).
17. **B.** Si el cambio ocurre antes del primer cálculo de estilos, no hay dos estados que comparar y no hay transición.
18. **D.** Al leer el estilo antes de agregar la clase, el navegador registra el estado inicial y nace una transición.
19. **C.** Sin haber calculado el estilo inicial, el cambio es instantáneo: no hay transición (0 animaciones).
20. **A.** Al empezar está en `running`; cuando termina, la promesa `finished` se cumple con el estado `finished`.
21. **B.** Si se elimina enseguida, la animación de salida no se ve: hay que esperar `finished`.
22. **D.** `transform` y `opacity` suelen animarse con menos esfuerzo del navegador que las propiedades que cambian el tamaño o la posición en el flujo.
23. **A.** Es la preferencia de movimiento reducido: hay que evitar o acortar las animaciones.

## Ítem 24 — Problema breve

Una solución posible (se ejecutó en Chrome en tiempo real, con un clic por código):

```js
const aviso = document.getElementById('aviso');
const cerrar = document.getElementById('cerrar');

cerrar.addEventListener('click', () => {
  const salida = aviso.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 200, fill: 'forwards' });
  salida.finished.then(() => {
    aviso.remove();
    console.log('Aviso eliminado');
  });
});
```

Salida:

```text
Aviso eliminado
```

Criterios: registra el clic; usa `animate` con opacidad de `1` a `0`; **espera `finished`** antes de llamar a `remove()`; muestra el mensaje solo después.
