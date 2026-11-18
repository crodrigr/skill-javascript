# 📘 Ejemplo 21 — Destacar un producto con un clic

> 🎓 **Resultados de aprendizaje:** RA-4, RA-6
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, con el archivo y la línea de cada error; los clics se hicieron por código. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Marcos quiere que cada botón destaque **su** producto. Combina lo aprendido: buscar con `querySelectorAll`, registrar un clic y cambiar **una clase** y **un atributo**.

El HTML de partida, dentro del `<body>`:

```html
<ul id="menu">
  <li class="producto"><span class="nombre">Café</span> <button>Destacar</button></li>
  <li class="producto"><span class="nombre">Té</span> <button>Destacar</button></li>
  <li class="producto"><span class="nombre">Galleta</span> <button>Destacar</button></li>
</ul>
```

## 💻 Código

El archivo [`21-destacar-un-producto.html`](../recursos/ejemplos/21-destacar-un-producto.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
const productos = document.querySelectorAll('.producto');

productos.forEach((producto) => {
  const boton = producto.querySelector('button');
  const nombre = producto.querySelector('.nombre').textContent;

  boton.addEventListener('click', () => {
    const destacado = producto.classList.toggle('destacado');
    boton.setAttribute('aria-pressed', destacado);
    console.log(nombre + ': destacado=' + destacado + ' | aria-pressed=' + boton.getAttribute('aria-pressed'));
  });
});

console.log('Botones registrados: ' + productos.length);
```

## 🔍 Análisis paso a paso

1. **`querySelectorAll('.producto')`** encuentra los tres productos y `forEach` registra un clic en el botón de **cada uno**.
2. **`producto.querySelector('button')`** busca **dentro** de ese producto: cada callback conoce «su» botón y «su» producto.
3. **`toggle('destacado')`** alterna la clase y devuelve si quedó puesta.
4. **`setAttribute('aria-pressed', destacado)`** guarda el estado en un atributo (lo usan los lectores de pantalla); el valor `true` o `false` se convierte en texto.
5. **Cada producto cambia por separado:** el segundo clic en el Café quita su destaque, pero el del Té sigue.
6. **Combina bloques 2, 3 y 4:** búsqueda, atributo y `classList`.

## ✅ Resultado esperado

Al abrir la página, sin hacer clic, la consola muestra solo la primera línea. Con tres clics (en la verificación se hizo por código: Café, Té y Café otra vez), queda así:

```text
Botones registrados: 3
Café: destacado=true | aria-pressed=true
Té: destacado=true | aria-pressed=true
Café: destacado=false | aria-pressed=false
```

- Un clic puede cambiar a la vez una clase y un atributo del mismo elemento.
- Buscar dentro de cada producto permite que cada botón afecte solo al suyo.
