# 📘 Ejemplo 29 — Pausar, terminar y cancelar una animación

> 🎓 **Resultados de aprendizaje:** RA-8
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome **en tiempo real** (por el protocolo de depuración, porque el tiempo virtual no ejecuta animaciones) y se anotó lo que imprimió la consola; se ejecutó **dos veces** con el mismo resultado. Se verifican **estados y eventos**, no instantes exactos ni cantidad de cuadros. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Una animación se puede **pausar**, **reanudar**, **terminar de golpe** o **cancelar**. El estado (`playState`) dice en qué punto está.

El HTML de partida, dentro del `<body>`:

```html
<div id="a" class="caja"></div>
<div id="b" class="caja"></div>
<div id="c" class="caja"></div>
```

El CSS de la página, dentro de un `<style>` en el `<head>`:

```css
.caja { width: 60px; height: 20px; background: #d97706; margin: 4px; }
```

## 💻 Código

El archivo [`29-controlar-una-animacion.html`](../recursos/ejemplos/29-controlar-una-animacion.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
const a = document.getElementById('a').animate([{ opacity: 1 }, { opacity: 0.2 }], { duration: 1000, fill: 'forwards' });
console.log('A al empezar: ' + a.playState);

a.pause();
console.log('A tras pause: ' + a.playState);

a.play();
console.log('A tras play: ' + a.playState);

a.finish();
console.log('A tras finish: ' + a.playState + ', opacity: ' + getComputedStyle(document.getElementById('a')).opacity);

const b = document.getElementById('b').animate([{ opacity: 1 }, { opacity: 0.2 }], { duration: 1000, fill: 'forwards' });
b.cancel();
console.log('B tras cancel: ' + b.playState + ', opacity: ' + getComputedStyle(document.getElementById('b')).opacity);

const c = document.getElementById('c').animate([{ transform: 'translateX(0)' }, { transform: 'translateX(100px)' }], { duration: 1000, iterations: 2, direction: 'alternate' });
console.log('C: iteraciones ' + c.effect.getTiming().iterations + ', dirección ' + c.effect.getTiming().direction);
```

## 🔍 Análisis paso a paso

1. **`pause()`** detiene la animación (`paused`); **`play()`** la reanuda (`running`).
2. **`finish()`** la lleva **de golpe al final** (`finished`): con `fill: 'forwards'`, el elemento queda en el último cuadro (`opacity` `0.2`).
3. **`cancel()`** la **descarta**: el estado pasa a `idle` y el elemento **vuelve** a su aspecto original (`opacity` `1`).
4. **Otras opciones de tiempo:** `iterations` (cuántas veces se repite) y `direction` (`alternate` va y vuelve).
5. **Cuando se cancela una animación,** su promesa `finished` se **rechaza**: por eso no la usamos aquí (en un programa real, se atiende con `.catch`).
6. **Los estados posibles** son `idle`, `running`, `paused` y `finished`.
7. **La animación real transcurre en tiempo real (unos cientos de milisegundos):** lo que se mide son los **estados** y los **eventos**, no los instantes exactos.

## ✅ Resultado esperado

Al abrir `29-controlar-una-animacion.html`, la consola muestra:

```text
A al empezar: running
A tras pause: paused
A tras play: running
A tras finish: finished, opacity: 0.2
B tras cancel: idle, opacity: 1
C: iteraciones 2, dirección alternate
```

- `pause`, `play`, `finish` y `cancel` controlan una animación; `playState` indica su estado.
- `cancel()` devuelve el elemento a su aspecto original.
