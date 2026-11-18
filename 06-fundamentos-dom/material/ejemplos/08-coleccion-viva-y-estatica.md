# 📘 Ejemplo 08 — Colección viva y colección estática

> 🎓 **Resultados de aprendizaje:** RA-3
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, con el archivo y la línea de cada error; los clics se hicieron por código. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Sofía buscó los productos de dos maneras y, después de quitarle la clase `producto` al Té, las dos colecciones dieron cantidades distintas. Una es **viva** y la otra **estática**.

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

El archivo [`08-coleccion-viva-y-estatica.html`](../recursos/ejemplos/08-coleccion-viva-y-estatica.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
const viva = document.getElementsByClassName('producto');
const estatica = document.querySelectorAll('.producto');
console.log('Antes → viva: ' + viva.length + ', estática: ' + estatica.length);

document.querySelector('li.destacado').classList.remove('producto');

console.log('Después → viva: ' + viva.length + ', estática: ' + estatica.length);
```

## 🔍 Análisis paso a paso

1. **Al principio** las dos colecciones tienen cuatro productos.
2. **`classList.remove('producto')`** quita la clase del Té (lo veremos en la sesión 2): el Té deja de coincidir con `.producto`.
3. **La `HTMLCollection` de `getElementsByClassName` es viva:** se actualiza sola y ahora tiene **tres** elementos.
4. **La `NodeList` de `querySelectorAll` es estática:** es una foto tomada al buscar y **sigue con cuatro**, aunque uno ya no coincida.
5. **Consecuencia práctica:** si vas a modificar la página mientras recorrés una colección viva, el recorrido puede saltear elementos; con una `NodeList` estática eso no pasa.

## ✅ Resultado esperado

Al abrir `08-coleccion-viva-y-estatica.html`, la consola muestra:

```text
Antes → viva: 4, estática: 4
Después → viva: 3, estática: 4
```

- `getElementsBy…` devuelve colecciones vivas; `querySelectorAll`, estáticas.
- Una colección viva se actualiza sola cuando cambia la página.
