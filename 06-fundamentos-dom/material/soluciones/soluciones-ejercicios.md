# 🔑 Soluciones — Ejercicios de la Clase 06 (material docente)

No compartir este archivo con los estudiantes. Cada solución se ejecutó en Chrome sobre el HTML del ejercicio: pasa `validar_js.py --nivel 6` (sintaxis y alcance) y produce la salida indicada. Los clics de los casos de prueba se hicieron por código.

---

## 🟢 Básico 01 — Encontrar elementos

```js
console.log(document.getElementById('titulo').textContent);
console.log('Productos: ' + document.getElementsByClassName('producto').length);
console.log('Destacado: ' + document.querySelector('li.destacado').textContent);
console.log('Etiquetas li: ' + document.getElementsByTagName('li').length);

document.querySelectorAll('.producto').forEach((producto, posicion) => {
  console.log('Producto ' + (posicion + 1) + ': ' + producto.textContent);
});
```

**Salida:**

```text
Menú de Aroma
Productos: 4
Destacado: Té
Etiquetas li: 4
Producto 1: Café
Producto 2: Té
Producto 3: Galleta
Producto 4: Medialuna
```

**Respuesta.** Devolvería `null`, porque no existe un elemento con ese `id`. Si se usa sin comprobar (`menu2.textContent`), da `TypeError: Cannot read properties of null`.

---

## 🟡 Intermedio 01 — Colecciones: viva frente a estática

```js
const viva = document.getElementsByClassName('producto');
const estatica = document.querySelectorAll('.producto');
console.log('Antes → viva: ' + viva.length + ', estática: ' + estatica.length);

document.querySelectorAll('li')[2].classList.remove('producto');
console.log('Después → viva: ' + viva.length + ', estática: ' + estatica.length);

for (const producto of viva) {
  console.log('for…of: ' + producto.textContent);
}

estatica.forEach((producto) => {
  console.log('forEach: ' + producto.textContent);
});

console.log('forEach en la viva: ' + typeof viva.forEach);
```

**Salida:**

```text
Antes → viva: 4, estática: 4
Después → viva: 3, estática: 4
for…of: Café
for…of: Té
for…of: Medialuna
forEach: Café
forEach: Té
forEach: Galleta
forEach: Medialuna
forEach en la viva: undefined
```

**Respuesta.** La `HTMLCollection` de `getElementsByClassName` se **actualiza sola** y ya no incluye el elemento sin la clase; la `NodeList` de `querySelectorAll` es una **foto** del momento y sigue con cuatro. `viva.forEach(...)` daría `TypeError: viva.forEach is not a function`, porque las `HTMLCollection` no tienen `forEach`.

---

## 🟢 Básico 02 — Atributos de un enlace y una imagen

```js
const enlace = document.getElementById('carta');
const foto = document.getElementById('foto');

console.log('href: ' + enlace.getAttribute('href'));
console.log('rel: ' + enlace.getAttribute('rel'));

enlace.setAttribute('href', 'menu.html');
foto.setAttribute('src', 'img/te.svg');
foto.setAttribute('alt', 'Taza de té');

console.log('href ahora: ' + enlace.getAttribute('href'));
console.log('src ahora: ' + foto.getAttribute('src'));
console.log(foto.getAttributeNames());

enlace.removeAttribute('target');
console.log('target ahora: ' + enlace.getAttribute('target'));
```

**Salida:**

```text
href: carta.html
rel: null
href ahora: menu.html
src ahora: img/te.svg
(3) ['id', 'src', 'alt']
target ahora: null
```

**Respuesta.** Devuelve siempre **texto** (`string`) y, si el atributo no existe, **`null`**.

---

## 🟡 Intermedio 02 — Clases con classList

```js
const cafe = document.getElementById('cafe');
console.log('Inicio: ' + cafe.getAttribute('class'));

cafe.classList.add('destacado', 'oferta');
console.log('Tras add: ' + cafe.getAttribute('class'));
console.log('¿Tiene oferta? ' + cafe.classList.contains('oferta'));

cafe.classList.remove('oferta');
console.log('Tras remove: ' + cafe.getAttribute('class'));

console.log('replace: ' + cafe.classList.replace('activo', 'inactivo'));
console.log('Tras replace: ' + cafe.getAttribute('class'));

console.log('toggle: ' + cafe.classList.toggle('nuevo'));
console.log('toggle con true: ' + cafe.classList.toggle('agotado', true));
console.log('Final: ' + cafe.getAttribute('class') + ' (' + cafe.classList.length + ' clases)');
```

**Salida:**

```text
Inicio: producto activo
Tras add: producto activo destacado oferta
¿Tiene oferta? true
Tras remove: producto activo destacado
replace: true
Tras replace: producto inactivo destacado
toggle: true
toggle con true: true
Final: producto inactivo destacado nuevo agotado (5 clases)
```

**Respuesta.** Con una clase que ya existe, `add` **no la duplica** y no da error. Con `'dos palabras'` da `InvalidCharacterError`, porque el nombre de una clase no puede tener espacios: para dos clases se pasan dos argumentos.

---

## 🟡 Intermedio 03 — Atributos booleanos

```js
const boton = document.getElementById('pedir');
const aviso = document.getElementById('aviso');

console.log('Botón deshabilitado: ' + boton.disabled);
console.log('Aviso oculto: ' + aviso.hidden);

boton.setAttribute('disabled', 'false');
console.log('Tras setAttribute false: ' + boton.disabled);

console.log('toggle del botón: ' + boton.toggleAttribute('disabled'));
console.log('Botón deshabilitado: ' + boton.disabled);

console.log('toggle del aviso: ' + aviso.toggleAttribute('hidden'));
console.log('Aviso oculto: ' + aviso.hidden);

aviso.toggleAttribute('hidden', true);
console.log('Aviso oculto otra vez: ' + aviso.hidden);
```

**Salida:**

```text
Botón deshabilitado: true
Aviso oculto: true
Tras setAttribute false: true
toggle del botón: false
Botón deshabilitado: false
toggle del aviso: false
Aviso oculto: false
Aviso oculto otra vez: true
```

**Respuesta.** Porque en un atributo booleano lo que importa es que **exista**, no su valor: `disabled="false"` sigue deshabilitando. Se lo habilita **quitando** el atributo con `removeAttribute('disabled')` o alternándolo con `toggleAttribute('disabled')`.

---

## 🔴 Desafío 01 — Destacar productos con un clic

```js
const productos = document.querySelectorAll('.producto');

productos.forEach((producto) => {
  const boton = producto.querySelector('button');
  const nombre = producto.querySelector('.nombre').textContent;

  boton.addEventListener('click', () => {
    const destacado = producto.classList.toggle('destacado');
    boton.setAttribute('aria-pressed', destacado);
    console.log(nombre + ': destacado=' + destacado + ', aria-pressed=' + boton.getAttribute('aria-pressed') + ', class="' + producto.getAttribute('class') + '"');
  });
});

console.log('Listo: ' + productos.length + ' botones');
```

**Salida:**

```text
Listo: 3 botones
```

**Caso 1** (Pulsá los botones de Café, Té y Café (otra vez).) — salida:

```text
Listo: 3 botones
Café: destacado=true, aria-pressed=true, class="producto destacado"
Té: destacado=true, aria-pressed=true, class="producto destacado"
Café: destacado=false, aria-pressed=false, class="producto"
```

**Caso 2** (Pulsá solo el botón de la Galleta.) — salida:

```text
Listo: 3 botones
Galleta: destacado=true, aria-pressed=true, class="producto destacado"
```

**Caso 3** (Pulsá los tres botones, de arriba hacia abajo.) — salida:

```text
Listo: 3 botones
Café: destacado=true, aria-pressed=true, class="producto destacado"
Té: destacado=true, aria-pressed=true, class="producto destacado"
Galleta: destacado=true, aria-pressed=true, class="producto destacado"
```

---

## 🟢 Básico 03 — Cambiar el contenido

```js
const precio = document.getElementById('precio');
const importe = precio.querySelector('strong');
const menu = document.getElementById('menu');

console.log('Nodo: ' + precio.nodeName + ' / ' + importe.nodeName);
console.log('Texto: ' + precio.textContent);

importe.textContent = '$5.0';
console.log('Nuevo texto: ' + precio.textContent);

menu.innerHTML = '<li>Té</li><li><b>Medialuna</b></li>';
console.log('Menú: ' + menu.innerHTML);
console.log('Solo el texto: ' + menu.textContent);

console.log('Párrafo: ' + precio.outerHTML);
```

**Salida:**

```text
Nodo: P / STRONG
Texto: Café: $4.5
Nuevo texto: Café: $5.0
Menú: <li>Té</li><li><b>Medialuna</b></li>
Solo el texto: TéMedialuna
Párrafo: <p id="precio">Café: <strong>$5.0</strong></p>
```

**Respuesta.** `innerHTML` devuelve el HTML **de adentro** del elemento y `outerHTML` lo devuelve **con su propia etiqueta**. Al asignar, `textContent` trata el valor como **texto** (no interpreta etiquetas) y `innerHTML` lo **interpreta como HTML**.

---

## 🟡 Intermedio 04 — El riesgo de innerHTML y setHTML

```js
const comentario = '<b>Hola</b> <img src="img/no-existe.png" onerror="window.hackeado = true">';
const conTexto = document.getElementById('con-texto');
const conInner = document.getElementById('con-inner');
const conSetHtml = document.getElementById('con-sethtml');

window.hackeado = false;
conTexto.textContent = comentario;

setTimeout(() => {
  console.log('textContent → código ejecutado: ' + window.hackeado);

  if (typeof conSetHtml.setHTML === 'function') {
    conSetHtml.setHTML(comentario);
    console.log('Camino: setHTML');
  } else {
    conSetHtml.textContent = comentario;
    console.log('Camino: textContent');
  }

  setTimeout(() => {
    console.log('setHTML o alternativa → código ejecutado: ' + window.hackeado);
    console.log('HTML resultante: ' + conSetHtml.innerHTML);

    conInner.innerHTML = comentario;

    setTimeout(() => {
      console.log('innerHTML → código ejecutado: ' + window.hackeado);
    }, 300);
  }, 300);
}, 300);
```

**Salida:**

```text
textContent → código ejecutado: false
Camino: setHTML
setHTML o alternativa → código ejecutado: false
HTML resultante: <b>Hola</b> 
innerHTML → código ejecutado: true
```

**Respuesta.** `innerHTML` **interpreta** el texto como HTML: la imagen con `onerror` se crea, falla y **ejecuta el código** del atributo. `setHTML()` **sanea** el HTML: conserva `<b>Hola</b>` y elimina la imagen y su `onerror`, por lo que no se ejecuta nada. Pero `setHTML()` no está en todos los navegadores: por eso se detecta y se usa `textContent` como camino alternativo.

---

## 🔴 Desafío 02 — El menú con contador y total

```js
const contador = document.getElementById('contador');
const total = document.getElementById('total');
const mensaje = document.getElementById('mensaje');
let pedidos = 0;
let importe = 0;

document.querySelectorAll('.producto').forEach((producto) => {
  const boton = producto.querySelector('.pedir');
  const nombre = producto.querySelector('.nombre').textContent;
  const precio = Number(producto.getAttribute('data-precio'));

  boton.addEventListener('click', () => {
    pedidos = pedidos + 1;
    importe = importe + precio;
    producto.classList.add('pedido');
    boton.setAttribute('disabled', '');
    boton.textContent = 'Pedido ✔';
    contador.textContent = pedidos;
    total.textContent = importe;
    mensaje.textContent = 'Último pedido: ' + nombre;
    console.log(nombre + ' → pedidos: ' + pedidos + ', total: $' + importe + ', mensaje: ' + mensaje.textContent);
  });
});

console.log('Listo: ' + document.querySelectorAll('.pedir').length + ' botones');
```

**Salida:**

```text
Listo: 3 botones
```

**Caso 1** (Pulsá Pedir en Café y en Té.) — salida:

```text
Listo: 3 botones
Café → pedidos: 1, total: $4.5, mensaje: Último pedido: Café
Té → pedidos: 2, total: $7.7, mensaje: Último pedido: Té
```

**Caso 2** (Pulsá Pedir dos veces en la Galleta.) — salida:

```text
Listo: 3 botones
Galleta → pedidos: 1, total: $1.8, mensaje: Último pedido: Galleta
```

**Caso 3** (Pulsá los tres botones, de abajo hacia arriba.) — salida:

```text
Listo: 3 botones
Galleta → pedidos: 1, total: $1.8, mensaje: Último pedido: Galleta
Té → pedidos: 2, total: $5, mensaje: Último pedido: Té
Café → pedidos: 3, total: $9.5, mensaje: Último pedido: Café
```
