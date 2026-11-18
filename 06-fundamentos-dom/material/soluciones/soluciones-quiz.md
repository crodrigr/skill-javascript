# 🔑 Soluciones — Quiz 01 de la Clase 06 (material docente)

No compartir este archivo con los estudiantes. Las respuestas con valores se comprobaron ejecutando el código en Chrome (con los clics hechos por código).

| Ítem | Tipo | Respuesta correcta | RA | Sesión |
|---|---|---|---|---|
| 1 | Selección múltiple | **B** | RA-1 | 1 |
| 2 | Identificación de resultado | **D** | RA-2 | 1 |
| 3 | Selección múltiple | **A** | RA-3 | 1 |
| 4 | Identificación de resultado | **C** | RA-2 | 1 |
| 5 | Identificación de resultado | **B** | RA-3 | 1 |
| 6 | Identificación de resultado | **D** | RA-3 | 1 |
| 7 | Selección múltiple | **A** | RA-1 | 1 |
| 8 | Selección múltiple | **C** | RA-2 | 1 |
| 9 | Identificación de resultado | **D** | RA-4 | 2 |
| 10 | Selección múltiple | **B** | RA-4 | 2 |
| 11 | Identificación de resultado | **C** | RA-4 | 2 |
| 12 | Identificación de resultado | **A** | RA-5 | 2 |
| 13 | Identificación de resultado | **D** | RA-6 | 2 |
| 14 | Identificación de resultado | **B** | RA-6 | 2 |
| 15 | Identificación de resultado | **A** | RA-6 | 2 |
| 16 | Identificación de resultado | **C** | RA-6 | 2 |
| 17 | Identificación de resultado | **B** | RA-7 | 3 |
| 18 | Identificación de resultado | **D** | RA-7 | 3 |
| 19 | Identificación de resultado | **C** | RA-7 | 3 |
| 20 | Selección múltiple | **A** | RA-8 | 3 |
| 21 | Selección múltiple | **B** | RA-8 | 3 |
| 22 | Selección múltiple | **D** | RA-7 | 3 |
| 23 | Identificación de resultado | **A** | RA-9 | 3 |
| 24 | Problema breve | Ver abajo | RA-6, RA-9 | 3 |

## Justificaciones

1. **B.** El DOM es el árbol de nodos que el navegador arma a partir del HTML; cambiarlo cambia lo que se ve, no el archivo.
2. **D.** `getElementById` devuelve `null` si no existe el elemento.
3. **A.** `getElementsByClassName` y `getElementsByTagName` devuelven una `HTMLCollection` viva; `querySelectorAll`, una `NodeList` estática.
4. **C.** `querySelector` devuelve solo el **primer** elemento que coincide.
5. **B.** La colección viva se actualiza (1); la `NodeList` es una foto (2).
6. **D.** `forEach` existe en la `NodeList` y no en la `HTMLCollection`.
7. **A.** El DOM se arma de arriba hacia abajo: el script solo ve lo que ya existe. Por eso el `<script>` va al final del `<body>`.
8. **C.** Un selector mal escrito lanza `SyntaxError: … is not a valid selector`.
9. **D.** `getAttribute` devuelve texto, o `null` si el atributo no existe.
10. **B.** `setAttribute` crea el atributo si no existe y cambia su valor si existe.
11. **C.** La primera llamada lo pone (`true`) y la segunda lo quita (`false`).
12. **A.** En un atributo booleano basta con que exista: `disabled="false"` sigue deshabilitando.
13. **D.** Hay tres clases; `item(1)` es `b` e `item(5)` devuelve `null` porque esa posición no existe.
14. **B.** `add` no duplica una clase existente y agrega la nueva al final.
15. **A.** Con condición falsa quita (o no agrega): `false`. Con condición verdadera deja puesta la clase: `true`.
16. **C.** `replace` devuelve `false` si la clase vieja no existe y `true` si la reemplazó.
17. **B.** `textContent` da solo el texto; `innerHTML`, el HTML de adentro.
18. **D.** `textContent` no interpreta etiquetas: quedan como texto (escapadas en el HTML).
19. **C.** Asignar `outerHTML` reemplaza el elemento; la variable `p` sigue apuntando al elemento viejo (`P`).
20. **A.** `innerHTML` interpreta el HTML: etiquetas con atributos de eventos pueden ejecutar código (XSS). Con texto de afuera, usá `textContent`.
21. **B.** `setHTML()` sanea el HTML, pero su disponibilidad es limitada: se detecta (`typeof elemento.setHTML === 'function'`) y se usa `textContent` como alternativa.
22. **D.** `textContent` incluye el texto oculto; `outerText` devuelve el texto «como se ve».
23. **A.** El primer clic suma y deshabilita el botón; el segundo clic no se produce porque el botón está deshabilitado.

## Ítem 24 — Problema breve

Una solución posible (se ejecutó en Chrome con dos clics por código):

```js
const cafe = document.getElementById('cafe');
const boton = document.getElementById('marcar');

boton.addEventListener('click', () => {
  const destacado = cafe.classList.toggle('destacado');
  console.log('destacado: ' + destacado);
});
```

Salida:

```text
destacado: true
destacado: false
```

Criterios: busca el elemento y el botón con `getElementById`; registra el clic con `addEventListener`; usa `classList.toggle` y su valor devuelto; el script está al final del `<body>`.
