# 📘 Ejemplo 15 — classList: la lista de clases

> 🎓 **Resultados de aprendizaje:** RA-6
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, con el archivo y la línea de cada error; los clics se hicieron por código. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

El atributo `class` es un texto con varias clases separadas por espacios. **`classList`** lo presenta como una **lista** con la que se puede trabajar clase por clase.

El HTML de partida, dentro del `<body>`:

```html
<ul id="menu">
  <li id="cafe" class="producto destacado oferta">Café</li>
</ul>
```

## 💻 Código

El archivo [`15-class-list-sintaxis-length-item.html`](../recursos/ejemplos/15-class-list-sintaxis-length-item.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
const cafe = document.getElementById('cafe');

console.log('class: "' + cafe.getAttribute('class') + '"');
console.log('length: ' + cafe.classList.length);
console.log('item(0): ' + cafe.classList.item(0));
console.log('item(2): ' + cafe.classList.item(2));
console.log('item(9): ' + cafe.classList.item(9));
console.log('Con corchetes [1]: ' + cafe.classList[1]);

for (const clase of cafe.classList) {
  console.log('clase: ' + clase);
}
```

## 🔍 Análisis paso a paso

1. **`elemento.classList`** es una lista (`DOMTokenList`) con las clases del elemento; se obtiene sin paréntesis.
2. **`length`** es la cantidad de clases (aquí, tres).
3. **`item(posicion)`** devuelve la clase en esa posición (desde `0`), o **`null`** si no hay ninguna ahí.
4. **Los corchetes** (`classList[1]`) hacen lo mismo que `item(1)`.
5. **Se recorre con `for…of`,** como cualquier colección.
6. **Es una lista «viva»:** si cambia la `class` del elemento, la lista cambia sola.

## ✅ Resultado esperado

Al abrir `15-class-list-sintaxis-length-item.html`, la consola muestra:

```text
class: "producto destacado oferta"
length: 3
item(0): producto
item(2): oferta
item(9): null
Con corchetes [1]: destacado
clase: producto
clase: destacado
clase: oferta
```

- `classList` es la lista de clases de un elemento; `length` las cuenta y `item(i)` da la de la posición `i`.
- `item` devuelve `null` si la posición no existe.
