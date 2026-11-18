# 📘 Ejemplo 01 — Crear un elemento y agregarlo a la página

> 🎓 **Resultados de aprendizaje:** RA-1
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, con el archivo y la línea de cada error; los clics se hicieron por código. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Hasta ahora, todo lo que mostrabas ya estaba en el HTML. Para mostrar datos **nuevos** (un producto que no existía) hay que **crear** el elemento con JavaScript y **ponerlo** en la página.

El HTML de partida, dentro del `<body>`:

```html
<h1>Menú de Aroma</h1>
<ul id="menu">
  <li class="producto">Café</li>
</ul>
```

El CSS de la página, dentro de un `<style>` en el `<head>`:

```css
.producto { padding: 4px 8px; }
.destacado { background: #fef9c3; }
```

## 💻 Código

El archivo [`01-crear-un-elemento.html`](../recursos/ejemplos/01-crear-un-elemento.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
const menu = document.getElementById('menu');

const nuevo = document.createElement('li');
console.log('Recién creado → padre: ' + nuevo.parentNode + ', en la página: ' + nuevo.isConnected);

nuevo.textContent = 'Té';
nuevo.className = 'producto';

menu.append(nuevo);
console.log('Tras append → padre: ' + nuevo.parentNode.id + ', en la página: ' + nuevo.isConnected);
console.log('Productos en el menú: ' + menu.children.length);
console.log(nuevo.outerHTML);
```

## 🔍 Análisis paso a paso

1. **`document.createElement('li')`** crea un elemento `<li>` **vacío** y **fuera de la página**: su `parentNode` es `null` y `isConnected` es `false`.
2. **Se configura antes de insertarlo:** `textContent` le da el texto y `className`, la clase.
3. **`menu.append(nuevo)`** lo agrega **al final** del menú. Desde ese momento tiene padre y aparece en la página (`isConnected` es `true`).
4. **El elemento nuevo no existía en el HTML:** el archivo `.html` no cambia; solo cambia el DOM.
5. **Crear y configurar antes de insertar** evita que la persona vea un elemento a medio armar.
6. **Qué no se hace aquí:** escribir HTML en un texto con `innerHTML`; crear nodos no interpreta texto como HTML (Ejemplo 08).

## ✅ Resultado esperado

Al abrir `01-crear-un-elemento.html`, la consola muestra:

```text
Recién creado → padre: null, en la página: false
Tras append → padre: menu, en la página: true
Productos en el menú: 2
<li class="producto">Té</li>
```

- `createElement` crea un elemento fuera de la página; `append` lo inserta al final de un padre.
- Se configura primero y se inserta después.
