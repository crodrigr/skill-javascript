# 📘 Ejemplo 10 — Elegir el método de búsqueda

> 🎓 **Resultados de aprendizaje:** RA-2, RA-3
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, con el archivo y la línea de cada error; los clics se hicieron por código. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Hay cinco métodos y a veces todos encuentran lo mismo. ¿Cuál conviene? Probémoslos sobre la misma página y veamos qué devuelve cada uno.

El HTML de partida, dentro del `<body>`:

```html
<h1 id="titulo" class="titulo">Menú de Aroma</h1>
<ul id="menu">
  <li class="producto">Café</li>
  <li class="producto destacado">Té</li>
  <li class="producto">Galleta</li>
  <li class="producto">Medialuna</li>
</ul>
```

## 💻 Código

El archivo [`10-elegir-el-metodo.html`](../recursos/ejemplos/10-elegir-el-metodo.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
console.log('getElementById: ' + document.getElementById('menu').nodeName);
console.log('getElementsByClassName: ' + document.getElementsByClassName('producto').length);
console.log('getElementsByTagName: ' + document.getElementsByTagName('li').length);
console.log('querySelector: ' + document.querySelector('#menu .producto').textContent);
console.log('querySelectorAll: ' + document.querySelectorAll('#menu .producto').length);
```

La segunda página, [`10-elegir-el-metodo-selector-invalido.html`](../recursos/ejemplos/10-elegir-el-metodo-selector-invalido.html) (un selector inválido), tiene el mismo HTML y este código dentro de `<script>`:

```js
console.log('Antes de buscar');
document.querySelector('##titulo');
console.log('Esta línea no se ejecuta');
```

## 🔍 Análisis paso a paso

1. **`getElementById`:** un elemento por `id`, o `null`.
2. **`getElementsByClassName` y `getElementsByTagName`:** una `HTMLCollection` viva (vacía si no hay coincidencias).
3. **`querySelector`:** el primer elemento que coincide con un selector CSS, o `null`.
4. **`querySelectorAll`:** una `NodeList` estática con todos los que coinciden (vacía si no hay).
5. **La segunda página** usa un selector mal escrito (`##titulo`) y da `SyntaxError: Failed to execute 'querySelector' on 'Document': '##titulo' is not a valid selector.` (*selector no válido*). El error corta el programa.
6. **Guía rápida:** para **un** elemento con `id`, `getElementById` o `querySelector('#id')`; para **un** elemento cualquiera, `querySelector`; para **varios**, `querySelectorAll` (o `getElementsBy…` si necesitás que se actualicen solos).

## ✅ Resultado esperado

Al abrir `10-elegir-el-metodo.html`, la consola muestra:

```text
getElementById: UL
getElementsByClassName: 4
getElementsByTagName: 4
querySelector: Café
querySelectorAll: 4
```

Al abrir `10-elegir-el-metodo-selector-invalido.html`, la consola muestra:

```text
Antes de buscar
Uncaught SyntaxError: Failed to execute 'querySelector' on 'Document': '##titulo' is not a valid selector. (10-elegir-el-metodo-selector-invalido.html:19)
```

- Elegí el método según lo que necesites: uno o varios, vivo o estático.
- Un selector mal escrito da `SyntaxError` y corta el programa.
