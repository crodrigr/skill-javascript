# 📘 Ejemplo 24 — Quitar una tarea con closest

> 🎓 **Resultados de aprendizaje:** RA-2, RA-6
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, con el archivo y la línea de cada error; los clics se hicieron por código. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Cierre de la sesión 2: cada pedido tiene un botón «Quitar». Un solo código sirve para **todos**: el botón sube con `closest` hasta su `<li>` y lo elimina.

El HTML de partida, dentro del `<body>`:

```html
<h2>Pedidos pendientes</h2>
<ul id="pedidos">
  <li class="pedido"><span class="texto">Café para Lucía</span> <button class="quitar">Quitar</button></li>
  <li class="pedido"><span class="texto">Té para Marcos</span> <button class="quitar">Quitar</button></li>
  <li class="pedido"><span class="texto">Galleta para Sofía</span> <button class="quitar">Quitar</button></li>
</ul>
<p>Pendientes: <span id="total">3</span></p>
```

## 💻 Código

El archivo [`24-borrar-con-closest.html`](../recursos/ejemplos/24-borrar-con-closest.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
const lista = document.getElementById('pedidos');
const total = document.getElementById('total');

document.querySelectorAll('.quitar').forEach((boton) => {
  boton.addEventListener('click', () => {
    const pedido = boton.closest('li');
    const texto = pedido.querySelector('.texto').textContent;
    pedido.remove();
    total.textContent = lista.children.length;
    console.log('Quitado: ' + texto + ' → quedan ' + total.textContent);
  });
});

console.log('Botones registrados: ' + document.querySelectorAll('.quitar').length);
```

## 🔍 Análisis paso a paso

1. **Un solo `querySelectorAll`** encuentra los tres botones y a cada uno se le registra su clic.
2. **`boton.closest('li')`** sube desde el botón hasta **su** pedido: no hace falta un `id` por pedido.
3. **`pedido.remove()`** lo elimina de la página.
4. **El contador** se actualiza con la cantidad de hijos de la lista (`children.length`) y se asigna con `textContent`.
5. **Un botón de un pedido ya quitado** ya no existe en la página, así que no se puede volver a pulsar.
6. **Es el patrón de las listas de tareas:** botón → `closest` → `remove`.

## ✅ Resultado esperado

Al abrir la página, sin hacer clic, la consola muestra solo la primera línea. Con dos clics (el del segundo botón y el del primero; en la verificación se hicieron por código) y la línea de comprobación final, queda así:

```text
Botones registrados: 3
Quitado: Té para Marcos → quedan 2
Quitado: Café para Lucía → quedan 1
Siguiente del último que queda: Galleta para Sofía
```

- Un botón puede quitar su propio elemento si sube con `closest` y llama a `remove()`.
- Un solo código sirve para todos los elementos de la lista.
