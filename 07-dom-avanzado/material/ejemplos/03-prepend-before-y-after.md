# 📘 Ejemplo 03 — prepend, before y after

> 🎓 **Resultados de aprendizaje:** RA-2
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, con el archivo y la línea de cada error; los clics se hicieron por código. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

`append` agrega al final, pero a veces el producto nuevo va **al principio**, **antes** de otro o **después** de otro.

El HTML de partida, dentro del `<body>`:

```html
<ul id="menu">
  <li id="te" class="producto">Té</li>
</ul>
```

El CSS de la página, dentro de un `<style>` en el `<head>`:

```css
.producto { padding: 4px 8px; }
.destacado { background: #fef9c3; }
```

## 💻 Código

El archivo [`03-prepend-before-y-after.html`](../recursos/ejemplos/03-prepend-before-y-after.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
const menu = document.getElementById('menu');
const te = document.getElementById('te');

function crear(nombre) {
  const li = document.createElement('li');
  li.textContent = nombre;
  li.className = 'producto';
  return li;
}

function orden() {
  const nombres = [];
  for (const producto of menu.children) {
    nombres.push(producto.textContent);
  }
  return nombres.join(', ');
}

menu.prepend(crear('Café'));
console.log('prepend → ' + orden());

te.before(crear('Medialuna'));
console.log('before  → ' + orden());

te.after(crear('Galleta'));
console.log('after   → ' + orden());

menu.append(crear('Brownie'), 'texto suelto');
console.log('append  → ' + orden() + ' | hijos totales: ' + menu.childNodes.length);
```

## 🔍 Análisis paso a paso

1. **`menu.prepend(x)`** inserta **dentro** del menú, **al principio**.
2. **`te.before(x)`** inserta **antes** del elemento `te` y **`te.after(x)`**, **después**: los dos necesitan que `te` tenga un padre.
3. **`append` y `prepend` aceptan varios argumentos** y también **textos**: `menu.append(crear('Brownie'), 'texto suelto')` agrega un elemento y un nodo de texto.
4. **Ninguno devuelve un valor** (`undefined`): para seguir usando el elemento conviene guardarlo en una variable antes de insertarlo.
5. **`orden()`** recorre `menu.children` (solo elementos); por eso el texto suelto no aparece en la lista, pero sí cuenta en `childNodes` (Ejemplo 20).
6. **Las funciones auxiliares** (`crear`, `orden`) evitan repetir código: una forma de trabajar con la tienda sin copiar y pegar.

## ✅ Resultado esperado

Al abrir `03-prepend-before-y-after.html`, la consola muestra:

```text
prepend → Café, Té
before  → Café, Medialuna, Té
after   → Café, Medialuna, Té, Galleta
append  → Café, Medialuna, Té, Galleta, Brownie | hijos totales: 8
```

- `prepend` y `append` insertan dentro (al principio y al final); `before` y `after`, fuera, junto al elemento.
- Aceptan varios argumentos y textos, y no devuelven valor.
