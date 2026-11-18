# 📘 Ejemplo 18 — Elegir dónde y cómo insertar

> 🎓 **Resultados de aprendizaje:** RA-4
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, con el archivo y la línea de cada error; los clics se hicieron por código. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Hay muchos métodos para insertar. Veamos qué hace cada uno cuando el elemento **tiene padre** y cuando **no lo tiene** (recién creado).

El HTML de partida, dentro del `<body>`:

```html
<ul id="menu"><li id="cafe">Café</li></ul>
```

## 💻 Código

El archivo [`18-elegir-donde-insertar.html`](../recursos/ejemplos/18-elegir-donde-insertar.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
const huerfano = document.createElement('div');
const hijo = document.createElement('b');

const sinPadre = huerfano.insertAdjacentElement('beforebegin', hijo);
console.log('beforebegin sin padre → devuelve: ' + sinPadre);

const dentro = huerfano.insertAdjacentElement('afterbegin', hijo);
console.log('afterbegin sin padre → devuelve: ' + dentro.nodeName + ' | ' + huerfano.outerHTML);

const cafe = document.getElementById('cafe');
const con = cafe.insertAdjacentElement('afterend', document.createElement('li'));
console.log('afterend con padre → devuelve: ' + con.nodeName);

console.log('Padre del café: ' + cafe.parentNode.id + ' | hijos: ' + cafe.parentNode.children.length);
```

La segunda página, [`18-elegir-donde-insertar-html-sin-padre.html`](../recursos/ejemplos/18-elegir-donde-insertar-html-sin-padre.html) (insertAdjacentHTML sin padre), tiene el mismo HTML y este código dentro de `<script>`:

```js
const huerfano = document.createElement('div');
console.log('Antes de insertar');
huerfano.insertAdjacentHTML('beforebegin', '<b>hola</b>');
console.log('Esta línea no se ejecuta');
```

## 🔍 Análisis paso a paso

1. **`beforebegin` y `afterend`** insertan **afuera** del elemento, así que necesitan que tenga un **padre**.
2. **Con un elemento recién creado** (sin padre), `insertAdjacentElement('beforebegin', …)` **no inserta** y devuelve `null`.
3. **`afterbegin` y `beforeend`** insertan **dentro** y siempre funcionan: el elemento queda con su hijo.
4. **La segunda página** muestra que `insertAdjacentHTML` es menos permisivo: sin padre lanza `NoModificationAllowedError: Failed to execute 'insertAdjacentHTML' on 'Element': The element has no parent.`
5. **Guía rápida:** al principio o al final de un padre → `prepend` y `append`; antes o después de un hermano → `before` y `after`; en una posición exacta → `insertAdjacent…`; HTML propio → `insertAdjacentHTML`; texto → `insertAdjacentText` o `textContent`.
6. **Un solo método tampoco es «el mejor»:** elegí el que se lee más claro.

## ✅ Resultado esperado

Al abrir `18-elegir-donde-insertar.html`, la consola muestra:

```text
beforebegin sin padre → devuelve: null
afterbegin sin padre → devuelve: B | <div><b></b></div>
afterend con padre → devuelve: LI
Padre del café: menu | hijos: 2
```

Al abrir `18-elegir-donde-insertar-html-sin-padre.html`, la consola muestra:

```text
Antes de insertar
Uncaught NoModificationAllowedError: Failed to execute 'insertAdjacentHTML' on 'Element': The element has no parent. (18-elegir-donde-insertar-html-sin-padre.html:14)
```

- `beforebegin` y `afterend` necesitan un padre; sin él, `insertAdjacentElement` devuelve `null` y `insertAdjacentHTML` lanza error.
- Elegí el método que mejor describe lo que querés hacer.
