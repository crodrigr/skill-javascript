# 📘 Ejemplo 04 — Insertar un nodo existente lo mueve

> 🎓 **Resultados de aprendizaje:** RA-2
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, con el archivo y la línea de cada error; los clics se hicieron por código. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Diego quiso «copiar» un pedido de la lista de pendientes a la de listos con `appendChild` y descubrió que el pedido **desapareció de la primera lista**. Un nodo solo puede estar en **un lugar**: insertarlo en otro lo **mueve**.

El HTML de partida, dentro del `<body>`:

```html
<h2>Pendientes</h2>
<ul id="pendientes">
  <li>Café</li>
  <li>Té</li>
</ul>
<h2>Listos</h2>
<ul id="listos">
  <li>Galleta</li>
</ul>
```

## 💻 Código

El archivo [`04-mover-un-nodo-existente.html`](../recursos/ejemplos/04-mover-un-nodo-existente.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
const pendientes = document.getElementById('pendientes');
const listos = document.getElementById('listos');

function cantidades() {
  return 'pendientes: ' + pendientes.children.length + ', listos: ' + listos.children.length;
}

console.log('Inicio → ' + cantidades());

const cafe = pendientes.children[0];
const devuelto = listos.appendChild(cafe);
console.log('appendChild → ' + cantidades());
console.log('appendChild devuelve el mismo nodo: ' + (devuelto === cafe));

const te = pendientes.children[0];
listos.insertBefore(te, listos.children[0]);
console.log('insertBefore → ' + cantidades());

console.log('Orden en listos: ' + listos.children[0].textContent + ', ' + listos.children[1].textContent + ', ' + listos.children[2].textContent);
```

## 🔍 Análisis paso a paso

1. **`appendChild(nodo)`** agrega el nodo al final del padre y **devuelve el nodo**. Como `cafe` ya estaba en `pendientes`, se **mueve**: pendientes pasa de 2 a 1.
2. **No hace falta quitarlo antes:** el navegador lo saca del lugar anterior.
3. **`insertBefore(nuevo, referencia)`** inserta antes de un hijo de referencia; con un nodo existente también lo **mueve**.
4. **`append` y `appendChild`:** `append` acepta varios nodos y textos y no devuelve nada; `appendChild` acepta uno solo y lo devuelve. Para un padre que es un elemento, MDN recomienda `append`.
5. **Para tener una copia** (y que el original se quede) hay que clonar (Ejemplo 05).
6. **Un nodo no puede estar en dos lugares a la vez:** si necesitás el mismo elemento en dos listas, necesitás dos elementos.

## ✅ Resultado esperado

Al abrir `04-mover-un-nodo-existente.html`, la consola muestra:

```text
Inicio → pendientes: 2, listos: 1
appendChild → pendientes: 1, listos: 2
appendChild devuelve el mismo nodo: true
insertBefore → pendientes: 0, listos: 3
Orden en listos: Té, Galleta, Café
```

- Insertar un nodo que ya está en la página lo **mueve**; no lo copia.
- `appendChild` e `insertBefore` devuelven el nodo insertado.
