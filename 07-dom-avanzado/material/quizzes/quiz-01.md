# 📝 Quiz 01 — Manipulación avanzada del DOM mediante la jerarquía de elementos

24 ítems: los **8 primeros** son de la **sesión 1** (nodos y propiedades de modificación), los **8 siguientes**, de la **sesión 2** (inserción adyacente y navegación) y los **8 últimos**, de la **sesión 3** (animación). Sin respuestas (ver `material/soluciones/soluciones-quiz.md` para la clave, material exclusivamente docente). En los ítems con código, el HTML (y el CSS, si hace falta) aparece primero.

---

**1. [selección múltiple]** 🔘
¿Qué diferencia hay entre mostrar un texto con `createElement` + `textContent` y con `innerHTML`?

A. `textContent` solo funciona con números.
B. Con `textContent` las etiquetas se muestran como texto; con `innerHTML` se interpretan como HTML.
C. Con `innerHTML` las etiquetas se muestran como texto.
D. Ninguna: los dos interpretan las etiquetas.

*RA: RA-1* · *Sesión: 1*

---

**2. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```js
const li = document.createElement('li');
console.log(li.parentNode + ' ' + li.isConnected);
```

A. `undefined true`
B. `null true`
C. `ul false`
D. `null false`

*RA: RA-1* · *Sesión: 1*

---

**3. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```html
<ul id="a"><li>1</li><li>2</li></ul>
<ul id="b"></ul>
```

```js
const a = document.getElementById('a');
const b = document.getElementById('b');
b.append(a.children[0]);
console.log(a.children.length + ' ' + b.children.length);
```

A. `1 1`
B. `1 0`
C. `2 1`
D. `2 0`

*RA: RA-2* · *Sesión: 1*

---

**4. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```html
<ul><li id="x" class="c">Hola <b>mundo</b></li></ul>
```

```js
const x = document.getElementById('x');
console.log(x.cloneNode(false).outerHTML);
```

A. `<li id="x" class="c">Hola <b>mundo</b></li>`
B. `<li></li>`
C. `<li id="x" class="c"></li>`
D. `null`

*RA: RA-2* · *Sesión: 1*

---

**5. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```html
<ul><li id="x">Hola</li></ul>
```

```js
const x = document.getElementById('x');
x.remove();
console.log(x.parentNode + ' ' + x.textContent);
```

A. `undefined Hola`
B. `null Hola`
C. `null null`
D. `ul Hola`

*RA: RA-2* · *Sesión: 1*

---

**6. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```html
<p id="p">hola</p>
```

```js
const p = document.getElementById('p');
p.style.backgroundColor = 'gold';
console.log(p.getAttribute('style'));
```

A. `null`
B. `backgroundColor: gold;`
C. `gold`
D. `background-color: gold;`

*RA: RA-3* · *Sesión: 1*

---

**7. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```html
<p id="p" class="r">hola</p>
```

```css
.r { color: red; }
```

```js
const p = document.getElementById('p');
console.log(JSON.stringify(p.style.color) + ' ' + getComputedStyle(p).color);
```

A. `"" rgb(255, 0, 0)`
B. `"" ""`
C. `red rgb(255, 0, 0)`
D. `red red`

*RA: RA-3* · *Sesión: 1*

---

**8. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```html
<div id="a"></div>
```

```js
const a = document.getElementById('a');
a.dataset.productoId = 'x1';
console.log(a.outerHTML);
```

A. `<div id="a" dataset-productoId="x1"></div>`
B. `<div id="a"></div>`
C. `<div id="a" data-producto-id="x1"></div>`
D. `<div id="a" data-productoId="x1"></div>`

*RA: RA-3* · *Sesión: 1*

---

**9. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```html
<div id="c"><p id="p">B</p></div>
```

```js
const p = document.getElementById('p');
p.insertAdjacentText('afterbegin', 'A');
p.insertAdjacentText('beforeend', 'C');
p.insertAdjacentText('afterend', 'D');
console.log(document.getElementById('c').innerHTML);
```

A. `<p id="p">ABCD</p>`
B. `A<p id="p">B</p>CD`
C. `<p id="p">B</p>ACD`
D. `<p id="p">ABC</p>D`

*RA: RA-4* · *Sesión: 2*

---

**10. [selección múltiple]** 🔘
Un `<div>` recién creado (sin padre) llama a `insertAdjacentHTML('beforebegin', '<b>x</b>')`. ¿Qué pasa?

A. Se inserta antes del `<div>`.
B. Lanza `NoModificationAllowedError`, porque no tiene padre.
C. Devuelve `null` sin error.
D. Se inserta dentro del `<div>`.

*RA: RA-4* · *Sesión: 2*

---

**11. [selección múltiple]** 🔘
¿Por qué no conviene mostrar con `insertAdjacentHTML` un comentario escrito por una persona usuaria?

A. Porque es más lento que `append`.
B. Porque solo acepta números.
C. Porque interpreta el HTML sin sanearlo y puede ejecutar código (por ejemplo, con `onerror`).
D. Porque borra los elementos que ya había.

*RA: RA-5* · *Sesión: 2*

---

**12. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```html
<ul id="u">
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
```

```js
const u = document.getElementById('u');
console.log(u.children.length + ' ' + u.childNodes.length);
```

A. `3 7`
B. `3 4`
C. `3 3`
D. `7 3`

*RA: RA-6* · *Sesión: 2*

---

**13. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```html
<ul><li id="a">A</li><li id="b">B</li><li id="c">C</li></ul>
```

```js
const b = document.getElementById('b');
const c = document.getElementById('c');
console.log(b.nextElementSibling.textContent + ' ' + c.nextElementSibling);
```

A. `null C`
B. `B null`
C. `C C`
D. `C null`

*RA: RA-6* · *Sesión: 2*

---

**14. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```html
<article id="t"><div><button id="b">x</button></div></article>
```

```js
const b = document.getElementById('b');
console.log(b.closest('article').id + ' ' + b.closest('ul'));
```

A. `t t`
B. `t null`
C. `div null`
D. `null null`

*RA: RA-6* · *Sesión: 2*

---

**15. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```js
const raiz = document.documentElement;
console.log(raiz.parentNode.nodeName + ' ' + raiz.parentElement);
```

A. `#document null`
B. `HTML null`
C. `null null`
D. `#document HTML`

*RA: RA-6* · *Sesión: 2*

---

**16. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```html
<ul id="u"><li>1</li><li>2</li><li>3</li><li>4</li></ul>
```

```js
const u = document.getElementById('u');
const hijos = u.children;
for (let i = 0; i < hijos.length; i++) {
  hijos[i].remove();
}
console.log(u.children.length);
```

A. `1`
B. `4`
C. `2`
D. `0`

*RA: RA-6* · *Sesión: 2*

---

**17. [selección múltiple]** 🔘
¿Qué necesita el navegador para animar una transición de CSS al cambiar una clase?

A. Nada: siempre anima.
B. Haber visto el estado inicial antes del cambio.
C. Que el elemento tenga un `id`.
D. Usar `requestAnimationFrame`.

*RA: RA-7* · *Sesión: 3*

---

**18. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```html
<div id="c" class="c"></div>
```

```css
.m { transform: translateX(100px); }
.c { width: 20px; height: 20px; background: red; transition: transform 200ms linear; }
```

```js
const c = document.getElementById('c');
getComputedStyle(c).transform;
c.classList.add('m');
console.log(c.getAnimations().length);
```

A. `undefined`
B. `2`
C. `0`
D. `1`

*RA: RA-7* · *Sesión: 3*

---

**19. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```html
<div id="c" class="c"></div>
```

```css
.m { transform: translateX(100px); }
.c { width: 20px; height: 20px; background: red; transition: transform 200ms linear; }
```

```js
const c = document.getElementById('c');
c.classList.add('m');
console.log(c.getAnimations().length);
```

A. `1`
B. `undefined`
C. `0`
D. `2`

*RA: RA-7* · *Sesión: 3*

---

**20. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```html
<div id="d">hola</div>
```

```js
const d = document.getElementById('d');
const a = d.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 200 });
console.log(a.playState);
a.finished.then(() => console.log(a.playState));
```

A. `running finished`
B. `running running`
C. `finished running`
D. `idle finished`

*RA: RA-8* · *Sesión: 3*

---

**21. [selección múltiple]** 🔘
Querés animar la salida de una tarjeta y después eliminarla. ¿Cuándo hay que llamar a `remove()`?

A. Nunca: la animación elimina el elemento sola.
B. Cuando la promesa `finished` de la animación se cumple.
C. Antes de crear la animación.
D. Justo después de llamar a `animate()`.

*RA: RA-8* · *Sesión: 3*

---

**22. [selección múltiple]** 🔘
¿Qué propiedades conviene animar para que el movimiento sea fluido?

A. `width` y `height`.
B. `margin` y `padding`.
C. `border` y `font-size`.
D. `transform` y `opacity`.

*RA: RA-9* · *Sesión: 3*

---

**23. [selección múltiple]** 🔘
¿Qué indica `matchMedia('(prefers-reduced-motion: reduce)').matches` cuando vale `true`?

A. Que la persona pidió menos movimiento en su sistema.
B. Que la pantalla es pequeña.
C. Que la animación ya terminó.
D. Que el navegador no soporta animaciones.

*RA: RA-9* · *Sesión: 3*

---

**24. [problema breve]** ✍️
Dado `<div id="aviso">Pedido listo</div>` y `<button id="cerrar">Cerrar</button>`, escribí el código para que, al pulsar el botón, el aviso desaparezca con una animación de opacidad de `1` a `0` y, **cuando termine la animación**, se elimine de la página y se muestre `Aviso eliminado` en la consola.

*RA: RA-8, RA-9* · *Sesión: 3*
