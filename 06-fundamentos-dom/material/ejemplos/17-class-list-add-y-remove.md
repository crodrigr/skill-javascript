# 📘 Ejemplo 17 — classList.add y classList.remove

> 🎓 **Resultados de aprendizaje:** RA-6
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, con el archivo y la línea de cada error; los clics se hicieron por código. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Agregar una clase hace que el elemento «tome» el aspecto que el CSS le da a esa clase. `add` agrega y `remove` quita, **sin duplicar ni romper** las demás.

El HTML de partida, dentro del `<body>`:

```html
<ul id="menu">
  <li id="cafe" class="producto">Café</li>
</ul>
```

## 💻 Código

El archivo [`17-class-list-add-y-remove.html`](../recursos/ejemplos/17-class-list-add-y-remove.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
const cafe = document.getElementById('cafe');
console.log('Inicio: ' + cafe.getAttribute('class'));

console.log('Lo que devuelve add: ' + cafe.classList.add('destacado'));
console.log('Tras add: ' + cafe.getAttribute('class'));

cafe.classList.add('destacado');
console.log('add repetido: ' + cafe.getAttribute('class'));

cafe.classList.add('oferta', 'nuevo');
console.log('add con dos clases: ' + cafe.getAttribute('class'));

cafe.classList.remove('producto');
console.log('Tras remove: ' + cafe.getAttribute('class'));

cafe.classList.remove('inexistente');
console.log('remove de una inexistente: ' + cafe.getAttribute('class'));
```

La segunda página, [`17-class-list-add-y-remove-error.html`](../recursos/ejemplos/17-class-list-add-y-remove-error.html) (una clase con espacios), tiene el mismo HTML y este código dentro de `<script>`:

```js
const cafe = document.getElementById('cafe');
console.log('Antes de agregar');
cafe.classList.add('dos palabras');
console.log('Esta línea no se ejecuta');
```

## 🔍 Análisis paso a paso

1. **`add(clase)`** agrega la clase **si no está** (si ya estaba, no la duplica). Se pueden pasar **varias** separadas por coma.
2. **`remove(clase)`** quita la clase; si no estaba, **no pasa nada** y no da error.
3. **Las demás clases no se tocan.** Cambiar `class` con `setAttribute` en cambio **reemplaza todo el texto**.
4. **Ni `add` ni `remove` devuelven un valor** (`undefined`).
5. **La segunda página** muestra el error de pasar un nombre con espacios: `InvalidCharacterError: Failed to execute 'add' on 'DOMTokenList': The token provided ('dos palabras') contains HTML space characters, which are not valid in tokens.` (*carácter no válido*). Para dos clases, dos argumentos.

## ✅ Resultado esperado

Al abrir `17-class-list-add-y-remove.html`, la consola muestra:

```text
Inicio: producto
Lo que devuelve add: undefined
Tras add: producto destacado
add repetido: producto destacado
add con dos clases: producto destacado oferta nuevo
Tras remove: destacado oferta nuevo
remove de una inexistente: destacado oferta nuevo
```

Al abrir `17-class-list-add-y-remove-error.html`, la consola muestra:

```text
Antes de agregar
Uncaught InvalidCharacterError: Failed to execute 'add' on 'DOMTokenList': The token provided ('dos palabras') contains HTML space characters, which are not valid in tokens. (17-class-list-add-y-remove-error.html:16)
```

- `add` agrega sin duplicar y `remove` quita sin error; las demás clases se conservan.
- Un nombre de clase con espacios da `InvalidCharacterError`.
