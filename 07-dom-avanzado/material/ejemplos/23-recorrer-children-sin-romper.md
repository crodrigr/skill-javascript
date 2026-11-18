# 📘 Ejemplo 23 — Recorrer children sin romper la lista

> 🎓 **Resultados de aprendizaje:** RA-6
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, con el archivo y la línea de cada error; los clics se hicieron por código. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Marcos quiso borrar todos los productos con un bucle y quedaron **la mitad**. `children` es una colección **viva**: al borrar un elemento, la colección se acorta **mientras la recorrés**.

El HTML de partida, dentro del `<body>`:

```html
<ul id="a"><li>1</li><li>2</li><li>3</li><li>4</li></ul>
<ul id="b"><li>1</li><li>2</li><li>3</li><li>4</li></ul>
```

## 💻 Código

El archivo [`23-recorrer-children-sin-romper.html`](../recursos/ejemplos/23-recorrer-children-sin-romper.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
const a = document.getElementById('a');
const b = document.getElementById('b');

const hijosA = a.children;
for (let i = 0; i < hijosA.length; i++) {
  hijosA[i].remove();
}
console.log('Recorriendo la colección viva → quedan: ' + a.children.length);

const copia = Array.from(b.children);
for (const hijo of copia) {
  hijo.remove();
}
console.log('Recorriendo una copia con Array.from → quedan: ' + b.children.length);
console.log('La copia sigue teniendo: ' + copia.length + ' elementos');
```

## 🔍 Análisis paso a paso

1. **Con la colección viva:** al quitar el elemento `0`, el `1` pasa a ser el `0`; el índice avanza y **salta** uno. Por eso quedan 2 de 4.
2. **`Array.from(b.children)`** hace una **copia estática** (un arreglo) con los mismos elementos.
3. **Recorrer la copia** es seguro: aunque se quiten los elementos de la página, el arreglo no cambia y los quita a todos.
4. **El arreglo copiado** sigue guardando los nodos (ya fuera de la página): `copia.length` sigue en `4`.
5. **Regla:** si vas a **agregar o quitar** hijos mientras recorrés, copiá antes con `Array.from`.
6. **`querySelectorAll`** (estática) evita este problema sin copiar.

## ✅ Resultado esperado

Al abrir `23-recorrer-children-sin-romper.html`, la consola muestra:

```text
Recorriendo la colección viva → quedan: 2
Recorriendo una copia con Array.from → quedan: 0
La copia sigue teniendo: 4 elementos
```

- `children` es una colección viva: modificarla mientras se recorre salta elementos.
- Copiá con `Array.from` antes de agregar o quitar.
