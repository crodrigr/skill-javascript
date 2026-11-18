# 📘 Ejemplo 21 — Primer hijo, último hijo y hermanos

> 🎓 **Resultados de aprendizaje:** RA-6
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, con el archivo y la línea de cada error; los clics se hicieron por código. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Desde un elemento también se puede ir al **hermano** de al lado o a los **extremos** de la lista, sin buscarlos por `id`.

El HTML de partida, dentro del `<body>`:

```html
<ul id="menu">
  <li id="cafe">Café</li>
  <li id="te">Té</li>
  <li id="galleta">Galleta</li>
</ul>
```

## 💻 Código

El archivo [`21-primero-ultimo-y-hermanos.html`](../recursos/ejemplos/21-primero-ultimo-y-hermanos.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
const menu = document.getElementById('menu');
const te = document.getElementById('te');

console.log('primero: ' + menu.firstElementChild.textContent);
console.log('último: ' + menu.lastElementChild.textContent);
console.log('anterior al té: ' + te.previousElementSibling.textContent);
console.log('siguiente al té: ' + te.nextElementSibling.textContent);

console.log('anterior al primero: ' + menu.firstElementChild.previousElementSibling);
console.log('siguiente al último: ' + menu.lastElementChild.nextElementSibling);

const vacio = document.createElement('ul');
console.log('primer hijo de una lista vacía: ' + vacio.firstElementChild);
```

## 🔍 Análisis paso a paso

1. **`firstElementChild` y `lastElementChild`** dan el **primer y el último hijo que es un elemento**.
2. **`nextElementSibling` y `previousElementSibling`** dan el **hermano siguiente y el anterior** (también elementos).
3. **En los extremos** (el anterior al primero, el siguiente al último) dan `null`; y una lista vacía no tiene primer hijo (`null`).
4. **Existen las versiones sin «Element»** (`firstChild`, `nextSibling`…), pero devuelven **nodos**, incluidos los textos de espacios: casi nunca es lo que querés.
5. **Comprobá `null`** antes de usar el resultado.

## ✅ Resultado esperado

Al abrir `21-primero-ultimo-y-hermanos.html`, la consola muestra:

```text
primero: Café
último: Galleta
anterior al té: Café
siguiente al té: Galleta
anterior al primero: null
siguiente al último: null
primer hijo de una lista vacía: null
```

- `firstElementChild`, `lastElementChild`, `nextElementSibling` y `previousElementSibling` navegan por elementos.
- En los extremos dan `null`.
