# 📘 Ejemplo 28 — El menú de Aroma con vida

> 🎓 **Resultados de aprendizaje:** RA-9
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, con el archivo y la línea de cada error; los clics se hicieron por código. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Cierre de la sesión: cada botón «Pedir» marca el producto (**clase**), deshabilita su botón (**atributo**) y actualiza el contador y el mensaje (**contenido**).

El HTML de partida, dentro del `<body>`:

```html
<h1 id="titulo">Menú de Aroma</h1>
<p>Pedidos: <span id="contador">0</span></p>
<ul id="menu">
  <li class="producto"><span class="nombre">Café</span> <button class="pedir">Pedir</button></li>
  <li class="producto"><span class="nombre">Té</span> <button class="pedir">Pedir</button></li>
  <li class="producto"><span class="nombre">Galleta</span> <button class="pedir">Pedir</button></li>
</ul>
<p id="mensaje"></p>
```

## 💻 Código

El archivo [`28-menu-con-vida.html`](../recursos/ejemplos/28-menu-con-vida.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
const contador = document.getElementById('contador');
const mensaje = document.getElementById('mensaje');
let total = 0;

document.querySelectorAll('.producto').forEach((producto) => {
  const boton = producto.querySelector('.pedir');
  const nombre = producto.querySelector('.nombre').textContent;

  boton.addEventListener('click', () => {
    total = total + 1;
    producto.classList.add('pedido');
    boton.setAttribute('disabled', '');
    boton.textContent = 'Pedido ✔';
    contador.textContent = total;
    mensaje.textContent = 'Último pedido: ' + nombre;
    console.log(nombre + ' → total ' + total + ' | class="' + producto.getAttribute('class') + '" | ' + boton.outerHTML);
  });
});

console.log('Menú listo con ' + document.querySelectorAll('.producto').length + ' productos');
```

## 🔍 Análisis paso a paso

1. **Buscar:** `querySelectorAll('.producto')` y, dentro de cada uno, `querySelector` para su botón y su nombre.
2. **Clase:** `classList.add('pedido')` marca el producto; el CSS podría darle otro aspecto.
3. **Atributo:** `setAttribute('disabled', '')` deshabilita el botón (un atributo booleano: basta con que exista).
4. **Contenido:** `textContent` cambia el texto del botón, del contador y del mensaje; el número del contador se convierte en texto.
5. **El segundo clic en el Café no hace nada:** su botón ya está deshabilitado, así que el total queda en `2`.
6. **`outerHTML` del botón** muestra cómo quedó: el atributo `disabled` aparece como `disabled=""`.
7. **Es el patrón de casi todas las páginas interactivas:** encontrar elementos, escuchar un evento y cambiar clases, atributos y contenido.

## ✅ Resultado esperado

Al abrir la página, sin hacer clic, la consola muestra solo la primera línea. Con tres clics (Café, Té y Café otra vez; en la verificación se hizo por código) y las tres líneas de comprobación del final, queda así:

```text
Menú listo con 3 productos
Café → total 1 | class="producto pedido" | <button class="pedir" disabled="">Pedido ✔</button>
Té → total 2 | class="producto pedido" | <button class="pedir" disabled="">Pedido ✔</button>
Contador: 2
Mensaje: Último pedido: Té
Marcados: 2
```

- Una página con vida combina búsqueda, atributos, clases y contenido.
- El orden habitual: encontrar, escuchar un evento y modificar.
