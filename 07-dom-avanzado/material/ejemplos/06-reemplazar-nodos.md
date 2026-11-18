# 📘 Ejemplo 06 — replaceWith y replaceChild

> 🎓 **Resultados de aprendizaje:** RA-2
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, con el archivo y la línea de cada error; los clics se hicieron por código. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Para cambiar un producto por otro se usa `replaceWith` (sobre el elemento) o `replaceChild` (sobre el padre).

El HTML de partida, dentro del `<body>`:

```html
<ul id="menu">
  <li id="viejo" class="producto">Café</li>
  <li id="otro" class="producto">Té</li>
</ul>
```

El CSS de la página, dentro de un `<style>` en el `<head>`:

```css
.producto { padding: 4px 8px; }
.destacado { background: #fef9c3; }
```

## 💻 Código

El archivo [`06-reemplazar-nodos.html`](../recursos/ejemplos/06-reemplazar-nodos.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
const menu = document.getElementById('menu');
const viejo = document.getElementById('viejo');
const otro = document.getElementById('otro');

const galleta = document.createElement('li');
galleta.textContent = 'Galleta';
galleta.className = 'producto';

viejo.replaceWith(galleta);
console.log('replaceWith → ' + menu.children[0].textContent + ', ' + menu.children[1].textContent);
console.log('El viejo sigue en la página: ' + viejo.isConnected + ', padre: ' + viejo.parentNode);

const medialuna = document.createElement('li');
medialuna.textContent = 'Medialuna';
medialuna.className = 'producto';

const devuelto = menu.replaceChild(medialuna, otro);
console.log('replaceChild → ' + menu.children[0].textContent + ', ' + menu.children[1].textContent);
console.log('replaceChild devuelve el reemplazado: ' + (devuelto === otro));
```

## 🔍 Análisis paso a paso

1. **`elemento.replaceWith(nuevo)`** reemplaza el elemento por el nodo (o los nodos o textos) que se le pasen.
2. **El elemento reemplazado sale de la página** pero la variable lo sigue guardando: `isConnected` es `false` y no tiene padre.
3. **`padre.replaceChild(nuevo, viejo)`** hace lo mismo desde el padre (**primero el nuevo y después el viejo**) y devuelve el nodo reemplazado.
4. **Si el nuevo ya estaba en la página,** se mueve (igual que con `appendChild`).
5. **Con `outerHTML`** también se puede reemplazar, pero escribiendo HTML; con `replaceWith` se reemplaza por nodos.

## ✅ Resultado esperado

Al abrir `06-reemplazar-nodos.html`, la consola muestra:

```text
replaceWith → Galleta, Té
El viejo sigue en la página: false, padre: null
replaceChild → Galleta, Medialuna
replaceChild devuelve el reemplazado: true
```

- `replaceWith` reemplaza un elemento por otro nodo; `replaceChild` lo hace desde el padre.
- El nodo reemplazado queda fuera de la página.
