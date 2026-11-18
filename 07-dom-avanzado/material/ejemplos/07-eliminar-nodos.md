# 📘 Ejemplo 07 — remove y removeChild

> 🎓 **Resultados de aprendizaje:** RA-2
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, con el archivo y la línea de cada error; los clics se hicieron por código. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Cuando un producto se agota hay que **quitarlo** de la lista. `remove` lo quita desde el propio elemento; `removeChild`, desde el padre.

El HTML de partida, dentro del `<body>`:

```html
<ul id="menu">
  <li id="cafe" class="producto">Café</li>
  <li id="te" class="producto">Té</li>
  <li id="galleta" class="producto">Galleta</li>
</ul>
```

El CSS de la página, dentro de un `<style>` en el `<head>`:

```css
.producto { padding: 4px 8px; }
.destacado { background: #fef9c3; }
```

## 💻 Código

El archivo [`07-eliminar-nodos.html`](../recursos/ejemplos/07-eliminar-nodos.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
const menu = document.getElementById('menu');
const cafe = document.getElementById('cafe');
const te = document.getElementById('te');

cafe.remove();
console.log('remove → productos: ' + menu.children.length);
console.log('El café sigue guardado en la variable: ' + cafe.textContent + ', padre: ' + cafe.parentNode);

const quitado = menu.removeChild(te);
console.log('removeChild → productos: ' + menu.children.length);
console.log('removeChild devuelve el nodo quitado: ' + (quitado === te));

cafe.remove();
console.log('remove otra vez sobre un nodo ya quitado: no da error');

menu.append(cafe);
console.log('Volví a agregar el café → productos: ' + menu.children.length);
```

## 🔍 Análisis paso a paso

1. **`elemento.remove()`** quita el elemento de la página; no necesita conocer al padre.
2. **`padre.removeChild(hijo)`** hace lo mismo desde el padre y **devuelve el nodo quitado**.
3. **La variable sigue apuntando al nodo:** `cafe.textContent` sigue valiendo `Café`, pero su `parentNode` es `null` (ya no tiene padre).
4. **Llamar a `remove()` sobre un nodo que ya no está** no da error.
5. **Un nodo quitado se puede volver a insertar:** conserva su contenido y sus controladores.
6. **`removeChild` da error** (`NotFoundError`) si el nodo no es hijo de ese padre; `remove()` es más simple.

## ✅ Resultado esperado

Al abrir `07-eliminar-nodos.html`, la consola muestra:

```text
remove → productos: 2
El café sigue guardado en la variable: Café, padre: null
removeChild → productos: 1
removeChild devuelve el nodo quitado: true
remove otra vez sobre un nodo ya quitado: no da error
Volví a agregar el café → productos: 2
```

- `remove()` quita un elemento; `removeChild` lo quita desde el padre y devuelve el nodo.
- Un nodo quitado conserva su contenido y su `parentNode` pasa a `null`.
