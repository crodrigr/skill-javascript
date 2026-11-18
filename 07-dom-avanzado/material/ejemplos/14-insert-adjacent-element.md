# 📘 Ejemplo 14 — insertAdjacentElement: las cuatro posiciones

> 🎓 **Resultados de aprendizaje:** RA-4
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, con el archivo y la línea de cada error; los clics se hicieron por código. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

`append` y `prepend` solo insertan **dentro** de un elemento. Para insertar **antes**, **dentro** o **después** con una sola herramienta, existe `insertAdjacentElement(posición, elemento)`, con cuatro posiciones.

El HTML de partida, dentro del `<body>`:

```html
<div id="caja"><p id="te">Té</p></div>
```

## 💻 Código

El archivo [`14-insert-adjacent-element.html`](../recursos/ejemplos/14-insert-adjacent-element.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
const caja = document.getElementById('caja');
const te = document.getElementById('te');

function crear(texto) {
  const marca = document.createElement('b');
  marca.textContent = texto;
  return marca;
}

te.insertAdjacentElement('beforebegin', crear('1-antes'));
te.insertAdjacentElement('afterbegin', crear('2-dentro-al-principio'));
te.insertAdjacentElement('beforeend', crear('3-dentro-al-final'));
const devuelto = te.insertAdjacentElement('afterend', crear('4-despues'));

console.log(caja.innerHTML);
console.log('Devuelve el elemento insertado: ' + devuelto.textContent);
```

## 🔍 Análisis paso a paso

1. **`beforebegin`:** **antes** del elemento (afuera, como hermano anterior).
2. **`afterbegin`:** **dentro**, antes de su primer hijo.
3. **`beforeend`:** **dentro**, después de su último hijo (lo mismo que `append`).
4. **`afterend`:** **después** del elemento (afuera, como hermano siguiente).
5. **Las posiciones no distinguen mayúsculas** (`beforeBegin` y `beforebegin` valen lo mismo).
6. **Devuelve el elemento insertado,** o `null` si no se pudo insertar (Ejemplo 18).
7. **Para recordarlo:** el elemento tiene cuatro «lugares» a su alrededor; el diagrama de la explicación los muestra.

## ✅ Resultado esperado

Al abrir `14-insert-adjacent-element.html`, la consola muestra:

```text
<b>1-antes</b><p id="te"><b>2-dentro-al-principio</b>Té<b>3-dentro-al-final</b></p><b>4-despues</b>
Devuelve el elemento insertado: 4-despues
```

- `insertAdjacentElement` inserta en cuatro posiciones: `beforebegin`, `afterbegin`, `beforeend` y `afterend`.
- Devuelve el elemento insertado.
