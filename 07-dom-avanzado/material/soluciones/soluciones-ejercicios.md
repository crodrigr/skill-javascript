# 🔑 Soluciones — Ejercicios de la Clase 07 (material docente)

No compartir este archivo con los estudiantes. Cada solución se ejecutó en Chrome sobre el HTML y el CSS del ejercicio (las de animación, en tiempo real, dos veces): pasa `validar_js.py --nivel 7` (sintaxis y alcance) y produce la salida indicada. Los clics de los casos de prueba se hicieron por código.

---

## 🟢 Básico 01 — Crear una lista de productos

```js
const productos = [
  { nombre: 'Café', precio: 4.5 },
  { nombre: 'Té', precio: 3.2 },
  { nombre: 'Galleta', precio: 1.8 }
];

const menu = document.getElementById('menu');

for (const producto of productos) {
  const item = document.createElement('li');
  item.textContent = producto.nombre + ' — $' + producto.precio;
  item.className = 'producto';
  menu.append(item);
}

console.log('Productos en el menú: ' + menu.children.length);
console.log(menu.children[0].outerHTML);

const aviso = document.createElement('li');
aviso.textContent = 'Hoy: 2x1 en galletas';
menu.prepend(aviso);
console.log('Primero ahora: ' + menu.children[0].textContent);
console.log('El aviso está en la página: ' + aviso.isConnected);
```

**Salida:**

```text
Productos en el menú: 3
<li class="producto">Café — $4.5</li>
Primero ahora: Hoy: 2x1 en galletas
El aviso está en la página: true
```

**Respuesta.** Porque `createElement` crea el elemento **fuera de la página** (desconectado): solo existe en memoria hasta que se lo inserta con `append`, `prepend`, etc. Antes de insertarlo, su `parentNode` es `null` (y `isConnected`, `false`).

---

## 🟡 Intermedio 01 — Mover, clonar, reemplazar y eliminar

```js
const pendientes = document.getElementById('pendientes');
const listos = document.getElementById('listos');
const cafe = document.getElementById('cafe');
const te = document.getElementById('te');
const galleta = document.getElementById('galleta');

function cantidades() {
  return 'pendientes: ' + pendientes.children.length + ', listos: ' + listos.children.length;
}

listos.append(cafe);
console.log('Mover el café → ' + cantidades());

const copia = te.cloneNode(true);
copia.id = 'te-copia';
const conectadoAntes = copia.isConnected;
listos.append(copia);
console.log('Clonar el té → ' + cantidades());
console.log('El clon antes de insertar estaba en la página: ' + conectadoAntes);

const medialuna = document.createElement('li');
medialuna.textContent = 'Medialuna';
galleta.replaceWith(medialuna);
console.log('Reemplazar la galleta → pendientes: ' + pendientes.children[1].textContent + ', ' + pendientes.children.length + ' elementos');
console.log('La galleta sigue en la página: ' + galleta.isConnected);

te.remove();
console.log('Eliminar el té → ' + cantidades());
console.log('Padre del té quitado: ' + te.parentNode);
```

**Salida:**

```text
Mover el café → pendientes: 2, listos: 1
Clonar el té → pendientes: 2, listos: 2
El clon antes de insertar estaba en la página: false
Reemplazar la galleta → pendientes: Medialuna, 2 elementos
La galleta sigue en la página: false
Eliminar el té → pendientes: 1, listos: 2
Padre del té quitado: null
```

**Respuesta.** El café se **mueve**: deja de estar en `#pendientes` (un nodo no puede estar en dos lugares). El clon necesita otro `id` porque, si no, habría **dos elementos con el mismo `id`** y `getElementById` solo encontraría uno de ellos.

---

## 🟡 Intermedio 02 — Configurar un elemento con sus propiedades

```js
const carta = document.getElementById('carta');

const tarjeta = document.createElement('article');
tarjeta.id = 'tarjeta-te';
tarjeta.className = 'tarjeta destacada';
tarjeta.title = 'Té de la casa';
tarjeta.dataset.precio = 3.2;
tarjeta.style.backgroundColor = 'gold';
tarjeta.style.fontSize = '18px';

const foto = document.createElement('img');
foto.src = 'img/te.svg';
foto.alt = 'Taza de té';

const boton = document.createElement('button');
boton.textContent = 'Pedir';
boton.disabled = true;

tarjeta.append(foto, boton);
carta.append(tarjeta);

console.log(tarjeta.outerHTML);
console.log('Precio + 1: ' + (Number(tarjeta.dataset.precio) + 1));
console.log('Color en línea: ' + tarjeta.style.backgroundColor);
console.log('Peso calculado: ' + getComputedStyle(tarjeta).fontWeight);
console.log('Botón deshabilitado: ' + boton.disabled);
```

**Salida:**

```text
<article id="tarjeta-te" class="tarjeta destacada" title="Té de la casa" data-precio="3.2" style="background-color: gold; font-size: 18px;"><img src="img/te.svg" alt="Taza de té"><button disabled="">Pedir</button></article>
Precio + 1: 4.2
Color en línea: gold
Peso calculado: 700
Botón deshabilitado: true
```

**Respuesta.** Porque los valores de `dataset` son **texto** (`"3.2"`): sin convertir, `+ 1` concatenaría. `style.fontWeight` solo ve el estilo **en línea** (aquí vacío, porque la negrita viene de la clase `destacada`), mientras que `getComputedStyle` da el **valor final aplicado** (`700`).

---

## 🟢 Básico 02 — Insertar en las cuatro posiciones

```js
const caja = document.getElementById('caja');
const nota = document.getElementById('nota');

const antes = document.createElement('h2');
antes.textContent = 'Hoy';
nota.insertAdjacentElement('beforebegin', antes);

nota.insertAdjacentText('afterbegin', '★ ');
nota.insertAdjacentHTML('beforeend', ' <b>doble</b>');

const despues = document.createElement('small');
despues.textContent = 'Precio: $4.5';
const devuelto = nota.insertAdjacentElement('afterend', despues);

console.log(caja.innerHTML);
console.log('Devuelve: ' + devuelto.nodeName);
console.log('Hijos de la caja: ' + caja.children.length);
console.log('Hijos del párrafo: ' + nota.children.length + ' (' + nota.childNodes.length + ' nodos)');
```

**Salida:**

```text
<h2>Hoy</h2><p id="nota">★ Café <b>doble</b></p><small>Precio: $4.5</small>
Devuelve: SMALL
Hijos de la caja: 3
Hijos del párrafo: 1 (4 nodos)
```

**Respuesta.** `beforebegin` inserta **fuera** del elemento, antes de él; `afterbegin` inserta **dentro**, antes de su primer hijo. `insertAdjacentText` **no interpreta** etiquetas: un texto con `<img onerror>` se muestra como texto y no ejecuta código; `insertAdjacentHTML` sí lo interpretaría.

---

## 🟡 Intermedio 03 — Navegar la jerarquía

```js
const te = document.getElementById('te');
const menu = te.parentElement;

console.log('Padre del té: ' + menu.id);
console.log('Sección: ' + te.closest('section').id);
console.log('Ancestro que no existe: ' + te.closest('table'));

console.log('Anterior: ' + te.previousElementSibling.textContent);
console.log('Siguiente: ' + te.nextElementSibling.textContent);
console.log('Primero: ' + menu.firstElementChild.textContent + ', último: ' + menu.lastElementChild.textContent);

console.log('Elementos hijos del menú: ' + menu.children.length);
console.log('Nodos hijos del menú: ' + menu.childNodes.length);

const nombres = [];
for (const hijo of Array.from(menu.children)) {
  nombres.push(hijo.textContent);
}
console.log('Recorridos: ' + nombres.join(', '));

const boton = document.getElementById('cerrar');
console.log('Hermano anterior del botón: ' + boton.previousElementSibling.id);
console.log('Padre de la sección: ' + document.getElementById('carta').parentNode.nodeName);
```

**Salida:**

```text
Padre del té: menu
Sección: carta
Ancestro que no existe: null
Anterior: Café
Siguiente: Galleta
Primero: Café, último: Galleta
Elementos hijos del menú: 3
Nodos hijos del menú: 7
Recorridos: Café, Té, Galleta
Hermano anterior del botón: menu
Padre de la sección: BODY
```

**Respuesta.** Porque `childNodes` cuenta también los **nodos de texto** (los saltos de línea y espacios entre las etiquetas), mientras que `children` cuenta solo los elementos. Si ningún ancestro coincide, `closest` devuelve **`null`**.

---

## 🔴 Desafío 01 — Pedidos que se pueden quitar

```js
const lista = document.getElementById('pedidos');
const total = document.getElementById('total');

document.querySelectorAll('.quitar').forEach((boton) => {
  boton.addEventListener('click', () => {
    const pedido = boton.closest('li');
    const texto = pedido.querySelector('.texto').textContent;
    const siguiente = pedido.nextElementSibling;
    pedido.remove();
    total.textContent = lista.children.length;
    console.log('Quitado: ' + texto + ' | pendientes: ' + total.textContent + ' | el siguiente era: ' + (siguiente === null ? 'ninguno' : siguiente.querySelector('.texto').textContent));
  });
});

console.log('Listo: ' + document.querySelectorAll('.quitar').length + ' botones');
```

**Salida:**

```text
Listo: 3 botones
```

**Caso 1** (Pulsá «Quitar» del segundo pedido y después del primero.) — salida:

```text
Listo: 3 botones
Quitado: Té para Marcos | pendientes: 2 | el siguiente era: Galleta para Sofía
Quitado: Café para Lucía | pendientes: 1 | el siguiente era: Galleta para Sofía
```

**Caso 2** (Pulsá «Quitar» del último pedido.) — salida:

```text
Listo: 3 botones
Quitado: Galleta para Sofía | pendientes: 2 | el siguiente era: ninguno
```

**Caso 3** (Pulsá los tres botones, de arriba hacia abajo.) — salida:

```text
Listo: 3 botones
Quitado: Café para Lucía | pendientes: 2 | el siguiente era: Té para Marcos
Quitado: Té para Marcos | pendientes: 1 | el siguiente era: Galleta para Sofía
Quitado: Galleta para Sofía | pendientes: 0 | el siguiente era: ninguno
```

---

## 🟢 Básico 03 — Una transición con una clase

```js
const caja = document.getElementById('caja');

caja.addEventListener('transitionend', (evento) => {
  console.log('transitionend: ' + evento.propertyName);
});

console.log('Antes → transform: ' + getComputedStyle(caja).transform);

caja.classList.add('mover');
console.log('Animaciones activas: ' + caja.getAnimations().length);
console.log('Tipo: ' + caja.getAnimations()[0].constructor.name);

caja.getAnimations()[0].finished.then(() => {
  console.log('Terminó → transform: ' + getComputedStyle(caja).transform);
});
```

**Salida:**

```text
Antes → transform: none
Animaciones activas: 1
Tipo: CSSTransition
Terminó → transform: matrix(1, 0, 0, 1, 200, 0)
transitionend: transform
```

**Respuesta.** El navegador no habría visto el estado inicial, así que **no habría transición**: la caja aparecería directamente desplazada y `getAnimations().length` daría `0`. Leer el estilo calculado antes obliga al navegador a registrar el estado inicial y la transición nace (`1` animación).

---

## 🟡 Intermedio 04 — animate() con finished y control

```js
const aviso = document.getElementById('aviso');
const otro = document.getElementById('otro');

const animacion = aviso.animate(
  [{ opacity: 1 }, { opacity: 0.2 }],
  { duration: 300, fill: 'forwards' }
);
console.log('Estado al empezar: ' + animacion.playState);
console.log('Duración: ' + animacion.effect.getTiming().duration);

animacion.finished.then(() => {
  console.log('Terminó → estado: ' + animacion.playState + ', opacity: ' + getComputedStyle(aviso).opacity);
});

const segunda = otro.animate([{ opacity: 1 }, { opacity: 0.2 }], { duration: 1000, fill: 'forwards' });
segunda.pause();
console.log('Segunda tras pause: ' + segunda.playState);
segunda.play();
console.log('Segunda tras play: ' + segunda.playState);
segunda.cancel();
console.log('Segunda tras cancel: ' + segunda.playState + ', opacity: ' + getComputedStyle(otro).opacity);
```

**Salida:**

```text
Estado al empezar: running
Duración: 300
Segunda tras pause: paused
Segunda tras play: running
Segunda tras cancel: idle, opacity: 1
Terminó → estado: finished, opacity: 0.2
```

**Respuesta.** `finish()` lleva la animación **al último cuadro** (con `fill: 'forwards'` el elemento queda con ese aspecto); `cancel()` la **descarta** y el elemento vuelve a su aspecto original. Al cancelar, la promesa `finished` se **rechaza**, por lo que habría que atender el rechazo con `.catch`.

---

## 🔴 Desafío 02 — Un aviso que aparece y se cierra

```js
const avisos = document.getElementById('avisos');
const boton = document.getElementById('nuevo');
let numero = 0;

boton.addEventListener('click', () => {
  numero = numero + 1;
  const actual = numero;

  const tarjeta = document.createElement('article');
  tarjeta.className = 'tarjeta';
  tarjeta.textContent = 'Aviso ' + actual + ' ';

  const cerrar = document.createElement('button');
  cerrar.className = 'cerrar';
  cerrar.textContent = 'Cerrar';
  tarjeta.append(cerrar);

  cerrar.addEventListener('click', () => {
    const salida = cerrar.closest('.tarjeta').animate([{ opacity: 1 }, { opacity: 0 }], { duration: 200, fill: 'forwards' });
    salida.finished.then(() => {
      tarjeta.remove();
      console.log('Aviso ' + actual + ' eliminado → quedan ' + avisos.children.length);
    });
  });

  avisos.append(tarjeta);
  const entrada = tarjeta.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 200 });
  console.log('Aviso ' + actual + ' creado → avisos: ' + avisos.children.length);
  entrada.finished.then(() => {
    console.log('Aviso ' + actual + ' apareció');
  });
});

console.log('Listo');
```

**Salida:**

```text
Listo
```

**Caso 1** (Pulsá «Mostrar aviso» y, cuando aparezca, «Cerrar».) — salida:

```text
Listo
Aviso 1 creado → avisos: 1
Aviso 1 apareció
Aviso 1 eliminado → quedan 0
```

**Caso 2** (Pulsá «Mostrar aviso» dos veces y cerrá solo el primero.) — salida:

```text
Listo
Aviso 1 creado → avisos: 1
Aviso 2 creado → avisos: 2
Aviso 1 apareció
Aviso 2 apareció
Aviso 1 eliminado → quedan 1
```

**Caso 3** (Pulsá «Mostrar aviso» una vez y no cierres nada.) — salida:

```text
Listo
Aviso 1 creado → avisos: 1
Aviso 1 apareció
```
