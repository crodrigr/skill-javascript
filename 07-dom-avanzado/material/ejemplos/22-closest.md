# 📘 Ejemplo 22 — closest: del botón a su tarjeta

> 🎓 **Resultados de aprendizaje:** RA-6
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, con el archivo y la línea de cada error; los clics se hicieron por código. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Cada tarjeta tiene su botón. Si hay muchas, no conviene ponerle un `id` a cada botón: desde **el botón** se sube hasta **su tarjeta** con `closest`.

El HTML de partida, dentro del `<body>`:

```html
<article class="tarjeta" id="t1">
  <h2>Café</h2>
  <button class="cerrar">Cerrar</button>
</article>
<article class="tarjeta" id="t2">
  <h2>Té</h2>
  <button class="cerrar">Cerrar</button>
</article>
```

## 💻 Código

El archivo [`22-closest.html`](../recursos/ejemplos/22-closest.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
document.querySelectorAll('.cerrar').forEach((boton) => {
  const tarjeta = boton.closest('.tarjeta');
  const nombre = tarjeta.querySelector('h2').textContent;
  console.log('El botón de ' + nombre + ' pertenece a #' + tarjeta.id);
});

const primero = document.querySelector('.cerrar');
console.log('closest de sí mismo: ' + primero.closest('button').className);
console.log('closest que no existe: ' + primero.closest('ul'));
console.log('closest por etiqueta: ' + primero.closest('article').id);
```

## 🔍 Análisis paso a paso

1. **`closest(selector)`** empieza **en el propio elemento** y sube por sus ancestros hasta encontrar el primero que coincide con el selector CSS.
2. **Devuelve ese ancestro,** o **`null`** si ninguno coincide.
3. **Cada botón encuentra su propia tarjeta,** sin `id` y sin importar cuántas haya.
4. **También puede devolver el propio elemento** si coincide (`closest('button')` en un botón).
5. **Es más robusto que `parentNode.parentNode`:** sigue funcionando si se agrega un `<div>` en el medio.
6. **Un selector mal escrito** lanza `SyntaxError`, como `querySelector`.

## ✅ Resultado esperado

Al abrir `22-closest.html`, la consola muestra:

```text
El botón de Café pertenece a #t1
El botón de Té pertenece a #t2
closest de sí mismo: cerrar
closest que no existe: null
closest por etiqueta: t1
```

- `closest` sube desde el elemento hasta el primer ancestro (o él mismo) que coincide con un selector, o `null`.
- Permite pasar de un botón a su tarjeta sin usar `id`.
