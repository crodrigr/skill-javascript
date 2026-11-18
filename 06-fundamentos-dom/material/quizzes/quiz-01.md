# 📝 Quiz 01 — Fundamentos del DOM y manipulación mediante clases

24 ítems: los **8 primeros** son de la **sesión 1** (el DOM y la búsqueda de elementos), los **8 siguientes**, de la **sesión 2** (atributos y `classList`) y los **8 últimos**, de la **sesión 3** (contenido, seguridad e integración). Sin respuestas (ver `material/soluciones/soluciones-quiz.md` para la clave, material exclusivamente docente). En los ítems con código, el HTML aparece primero.

---

**1. [selección múltiple]** 🔘
¿Qué es el DOM?

A. Un lenguaje para dar estilo a la página.
B. La representación de la página como un árbol de objetos que JavaScript puede leer y cambiar.
C. El archivo `.html` guardado en el disco.
D. Una biblioteca que hay que instalar.

*RA: RA-1* · *Sesión: 1*

---

**2. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```html
<h1 id="titulo">Menú</h1>
```

```js
console.log(document.getElementById('subtitulo'));
```

A. `undefined`
B. `Un error`
C. `0`
D. `null`

*RA: RA-2* · *Sesión: 1*

---

**3. [selección múltiple]** 🔘
¿Cuál de estos métodos devuelve una colección **viva** (`HTMLCollection`)?

A. `getElementsByClassName`
B. `querySelectorAll`
C. `querySelector`
D. `getElementById`

*RA: RA-3* · *Sesión: 1*

---

**4. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```html
<ul id="l"><li class="a">1</li><li class="a">2</li></ul>
```

```js
console.log(document.querySelector('.a').textContent);
```

A. `null`
B. `1, 2`
C. `1`
D. `2`

*RA: RA-2* · *Sesión: 1*

---

**5. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```html
<ul id="l"><li class="a">1</li><li class="a">2</li></ul>
```

```js
const viva = document.getElementsByClassName('a');
const fija = document.querySelectorAll('.a');
document.querySelector('.a').classList.remove('a');
console.log(viva.length + ', ' + fija.length);
```

A. `2, 2`
B. `1, 2`
C. `2, 1`
D. `1, 1`

*RA: RA-3* · *Sesión: 1*

---

**6. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```html
<ul id="l"><li class="a">1</li><li class="a">2</li></ul>
```

```js
console.log(typeof document.getElementsByClassName('a').forEach + ', ' + typeof document.querySelectorAll('.a').forEach);
```

A. `function, undefined`
B. `undefined, undefined`
C. `function, function`
D. `undefined, function`

*RA: RA-3* · *Sesión: 1*

---

**7. [selección múltiple]** 🔘
Un script en el `<head>` busca `document.getElementById('titulo')`, que está en el `<body>`. ¿Qué obtiene?

A. `null`, porque el elemento todavía no existe en el DOM.
B. El elemento, porque el navegador ya leyó todo el archivo.
C. Una colección vacía.
D. Un `SyntaxError`.

*RA: RA-1* · *Sesión: 1*

---

**8. [selección múltiple]** 🔘
¿Qué ocurre con `document.querySelector('##titulo')`?

A. Devuelve el primer elemento de la página.
B. Devuelve una lista vacía.
C. Lanza un `SyntaxError` porque el selector no es válido.
D. Devuelve `null`.

*RA: RA-2* · *Sesión: 1*

---

**9. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```html
<a id="a" href="x.html">ver</a>
```

```js
const a = document.getElementById('a');
console.log(typeof a.getAttribute('href') + ', ' + a.getAttribute('rel'));
```

A. `object, undefined`
B. `string,`
C. `string, undefined`
D. `string, null`

*RA: RA-4* · *Sesión: 2*

---

**10. [selección múltiple]** 🔘
¿Qué hace `setAttribute` si el elemento **no** tiene ese atributo?

A. Devuelve `null`.
B. Lo crea con el valor indicado.
C. No hace nada.
D. Lanza un error.

*RA: RA-4* · *Sesión: 2*

---

**11. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```html
<button id="b">Pedir</button>
```

```js
const b = document.getElementById('b');
console.log(b.toggleAttribute('disabled') + ' ' + b.toggleAttribute('disabled'));
```

A. `false false`
B. `true true`
C. `true false`
D. `false true`

*RA: RA-4* · *Sesión: 2*

---

**12. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```html
<button id="b" disabled>Pedir</button>
```

```js
const b = document.getElementById('b');
b.setAttribute('disabled', 'false');
console.log(b.disabled);
```

A. `true`
B. `null`
C. `false`
D. `undefined`

*RA: RA-5* · *Sesión: 2*

---

**13. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```html
<li id="c" class="a b c">x</li>
```

```js
const c = document.getElementById('c');
console.log(c.classList.length + ' ' + c.classList.item(1) + ' ' + c.classList.item(5));
```

A. `3 b undefined`
B. `3 a b`
C. `2 b undefined`
D. `3 b null`

*RA: RA-6* · *Sesión: 2*

---

**14. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```html
<li id="c" class="a b c">x</li>
```

```js
const c = document.getElementById('c');
c.classList.add('a');
c.classList.add('d');
console.log(c.getAttribute('class'));
```

A. `a b c`
B. `a b c d`
C. `a b c a d`
D. `d a b c`

*RA: RA-6* · *Sesión: 2*

---

**15. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```html
<li id="c" class="a b c">x</li>
```

```js
const c = document.getElementById('c');
console.log(c.classList.toggle('x', false) + ' ' + c.classList.toggle('a', true));
```

A. `false true`
B. `false false`
C. `true true`
D. `true false`

*RA: RA-6* · *Sesión: 2*

---

**16. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```html
<li id="c" class="a b c">x</li>
```

```js
const c = document.getElementById('c');
console.log(c.classList.replace('z', 'y') + ' ' + c.classList.replace('a', 'w') + ' ' + c.getAttribute('class'));
```

A. `false true a b c`
B. `false false a b c`
C. `false true w b c`
D. `true true w b c`

*RA: RA-6* · *Sesión: 2*

---

**17. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```html
<p id="p">Hola <b>mundo</b></p>
```

```js
const p = document.getElementById('p');
console.log(p.textContent + ' | ' + p.innerHTML);
```

A. `Hola <b>mundo</b> | Hola mundo`
B. `Hola mundo | Hola <b>mundo</b>`
C. `<p>Hola mundo</p> | Hola <b>mundo</b>`
D. `Hola mundo | Hola mundo`

*RA: RA-7* · *Sesión: 3*

---

**18. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```html
<p id="p">Hola</p>
```

```js
const p = document.getElementById('p');
p.textContent = '<i>x</i>';
console.log(p.innerHTML);
```

A. `x`
B. `<i>x</i>`
C. `&lt;i&gt;x`
D. `&lt;i&gt;x&lt;/i&gt;`

*RA: RA-7* · *Sesión: 3*

---

**19. [identificación de resultado]** 🔍
¿Qué muestra la consola?

```html
<div id="d"><p id="p">A</p></div>
```

```js
const d = document.getElementById('d');
const p = document.getElementById('p');
p.outerHTML = '<h1>B</h1>';
console.log(d.innerHTML + ' | ' + p.nodeName);
```

A. `<h1>B</h1> | H1`
B. `<p id="p">A</p> | P`
C. `<h1>B</h1> | P`
D. `B | P`

*RA: RA-7* · *Sesión: 3*

---

**20. [selección múltiple]** 🔘
¿Por qué no conviene mostrar con `innerHTML` el comentario escrito por una persona usuaria?

A. Porque interpreta el texto como HTML y puede ejecutar código (por ejemplo, con `onerror`).
B. Porque borra la página completa.
C. Porque `innerHTML` es muy lento.
D. Porque no funciona con textos largos.

*RA: RA-8* · *Sesión: 3*

---

**21. [selección múltiple]** 🔘
¿Qué hace `elemento.setHTML(texto)` y qué hay que hacer antes de usarla?

A. Inserta solo texto; funciona en todos los navegadores.
B. Inserta el HTML saneado; conviene detectar que el navegador la tenga y tener un camino alternativo.
C. Borra el elemento y lo vuelve a crear.
D. Inserta el HTML sin cambios; no hay que comprobar nada.

*RA: RA-8* · *Sesión: 3*

---

**22. [selección múltiple]** 🔘
¿Qué diferencia hay entre `textContent` y `outerText` al **leer** un elemento con un `<span hidden>`?

A. No hay diferencia.
B. `outerText` incluye el texto oculto; `textContent`, no.
C. Las dos devuelven `null`.
D. `textContent` incluye el texto oculto; `outerText` solo el visible.

*RA: RA-7* · *Sesión: 3*

---

**23. [identificación de resultado]** 🔍
Se pulsa el botón dos veces. ¿Qué muestra la consola?

```html
<button id="b">Pedir</button> <span id="n">0</span>
```

```js
const b = document.getElementById('b');
const n = document.getElementById('n');
let c = 0;
b.addEventListener('click', () => {
  c = c + 1;
  n.textContent = c;
  b.setAttribute('disabled', '');
  console.log(n.textContent + ' ' + b.disabled);
});
```

A. `1 true`
B. `1 false`
C. `2 false`
D. `2 true`

*RA: RA-9* · *Sesión: 3*

---

**24. [problema breve]** ✍️
Dado `<li id="cafe" class="producto">Café</li>` y `<button id="marcar">Marcar</button>`, escribí el código para que cada clic en el botón alterne la clase `destacado` del café y muestre en la consola `destacado: true` o `destacado: false`.

*RA: RA-6, RA-9* · *Sesión: 3*
