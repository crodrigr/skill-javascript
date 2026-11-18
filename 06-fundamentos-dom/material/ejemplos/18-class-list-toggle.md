# 📘 Ejemplo 18 — classList.toggle: alternar una clase

> 🎓 **Resultados de aprendizaje:** RA-6
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, con el archivo y la línea de cada error; los clics se hicieron por código. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Un clic debería destacar el producto y otro clic quitarle el destaque. `toggle` hace las dos cosas: **si la clase está la quita y si no está la pone**.

El HTML de partida, dentro del `<body>`:

```html
<ul id="menu">
  <li id="cafe" class="producto">Café</li>
</ul>
<button id="marcar">Destacar el café</button>
```

## 💻 Código

El archivo [`18-class-list-toggle.html`](../recursos/ejemplos/18-class-list-toggle.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
const cafe = document.getElementById('cafe');
const boton = document.getElementById('marcar');

boton.addEventListener('click', () => {
  const destacado = cafe.classList.toggle('destacado');
  console.log('destacado: ' + destacado + ' | class="' + cafe.getAttribute('class') + '"');
});

console.log('Registrado. class="' + cafe.getAttribute('class') + '"');
```

## 🔍 Análisis paso a paso

1. **`toggle(clase)`** alterna: si la clase **no** está, la agrega; si **está**, la quita.
2. **Devuelve un booleano:** `true` si la clase quedó puesta y `false` si quedó quitada.
3. **El callback del clic** (visto en la Clase 04) se ejecuta cada vez que alguien pulsa el botón: tres clics, tres cambios.
4. **Registrar el callback no lo ejecuta:** la primera línea sale al cargar, sin clics.
5. **Es la forma más corta** de hacer interruptores: menús que se abren y cierran, favoritos, modo oscuro…

## ✅ Resultado esperado

Al abrir la página, sin hacer clic, la consola muestra solo la primera línea. Con tres clics en el botón (en la verificación se hizo por código), queda así:

```text
Registrado. class="producto"
destacado: true | class="producto destacado"
destacado: false | class="producto"
destacado: true | class="producto destacado"
```

- `classList.toggle(clase)` agrega la clase si falta y la quita si está, y devuelve si quedó puesta.
- Con un clic como disparador sirve para hacer interruptores.
