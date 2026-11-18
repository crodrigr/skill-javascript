# 📘 Ejemplo 26 — Por qué a veces no se anima

> 🎓 **Resultados de aprendizaje:** RA-7
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome **en tiempo real** (por el protocolo de depuración, porque el tiempo virtual no ejecuta animaciones) y se anotó lo que imprimió la consola; se ejecutó **dos veces** con el mismo resultado. Se verifican **estados y eventos**, no instantes exactos ni cantidad de cuadros. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Lucía agregó la clase y la caja **saltó** al final, sin animación. Una transición necesita que el navegador **vea el estado inicial** antes del cambio; si todo ocurre antes del primer cálculo de estilos, no hay nada que animar.

El HTML de partida, dentro del `<body>`:

```html
<div id="a" class="caja"></div>
<div id="b" class="caja"></div>
```

El CSS de la página, dentro de un `<style>` en el `<head>`:

```css
.caja { width: 60px; height: 60px; background: #d97706; transition: transform 400ms linear; }
.mover { transform: translateX(200px); }
```

## 💻 Código

El archivo [`26-por-que-no-anima.html`](../recursos/ejemplos/26-por-que-no-anima.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
const a = document.getElementById('a');
const b = document.getElementById('b');

a.classList.add('mover');
console.log('A (sin leer el estado inicial) → animaciones: ' + a.getAnimations().length + ', transform: ' + getComputedStyle(a).transform);

getComputedStyle(b).transform;
b.classList.add('mover');
console.log('B (leyendo antes) → animaciones: ' + b.getAnimations().length + ', estado: ' + b.getAnimations()[0].playState);
```

## 🔍 Análisis paso a paso

1. **Caja A:** la clase se agrega **antes** de que el navegador calcule su estilo inicial. No hay dos estados que comparar, así que **no hay transición** (`0` animaciones) y la caja aparece directamente desplazada.
2. **Caja B:** se **lee** `getComputedStyle(b).transform` antes de agregar la clase. Eso obliga al navegador a calcular el estilo inicial; al agregar la clase hay un cambio y nace una transición (`1` animación en estado `running`).
3. **En una página real** esto pasa sobre todo con elementos **recién creados** (se crean y se animan en la misma ejecución): conviene leer una propiedad (o esperar un cuadro) antes de cambiar.
4. **Hay otras soluciones** (`requestAnimationFrame`, `@starting-style`), que veremos más adelante.
5. **Cuando una animación no se ve,** una prueba rápida es `elemento.getAnimations().length`.
6. **La animación real transcurre en tiempo real (unos cientos de milisegundos):** lo que se mide son los **estados** y los **eventos**, no los instantes exactos.

## ✅ Resultado esperado

Al abrir `26-por-que-no-anima.html`, la consola muestra:

```text
A (sin leer el estado inicial) → animaciones: 0, transform: matrix(1, 0, 0, 1, 200, 0)
B (leyendo antes) → animaciones: 1, estado: running
```

- Una transición necesita que el navegador haya visto el estado inicial antes del cambio.
- Leer el estilo calculado antes de cambiar la clase lo garantiza.
