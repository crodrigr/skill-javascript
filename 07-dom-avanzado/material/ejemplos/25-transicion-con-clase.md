# 📘 Ejemplo 25 — Una transición activada con una clase

> 🎓 **Resultados de aprendizaje:** RA-7
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome **en tiempo real** (por el protocolo de depuración, porque el tiempo virtual no ejecuta animaciones) y se anotó lo que imprimió la consola; se ejecutó **dos veces** con el mismo resultado. Se verifican **estados y eventos**, no instantes exactos ni cantidad de cuadros. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Una **transición** de CSS anima el paso de un estilo a otro. El CSS dice **cómo** (`transition: transform 400ms linear`) y JavaScript solo **cambia una clase**; el navegador hace el movimiento.

El HTML de partida, dentro del `<body>`:

```html
<div id="caja" class="caja"></div>
```

El CSS de la página, dentro de un `<style>` en el `<head>`:

```css
.caja { width: 60px; height: 60px; background: #d97706; transition: transform 400ms linear; }
.mover { transform: translateX(200px); }
```

## 💻 Código

El archivo [`25-transicion-con-clase.html`](../recursos/ejemplos/25-transicion-con-clase.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
const caja = document.getElementById('caja');

caja.addEventListener('transitionend', (evento) => {
  console.log('transitionend: ' + evento.propertyName);
});

getComputedStyle(caja).transform;
caja.classList.add('mover');

const animacion = caja.getAnimations()[0];
console.log('Animaciones activas: ' + caja.getAnimations().length);
console.log('Tipo: ' + animacion.constructor.name + ', estado: ' + animacion.playState);

animacion.finished.then(() => {
  console.log('finished → estado: ' + animacion.playState + ', transform: ' + getComputedStyle(caja).transform);
});

setTimeout(() => {
  console.log('Más tarde, animaciones activas: ' + caja.getAnimations().length);
}, 1000);
```

## 🔍 Análisis paso a paso

1. **El CSS** define la transición: la propiedad (`transform`), la duración y la curva (`linear`). La clase `mover` define el **estado final** (`translateX(200px)`).
2. **JavaScript solo agrega la clase** con `classList.add`: el navegador anima el cambio.
3. **`getAnimations()`** devuelve las animaciones del elemento: aquí hay una **`CSSTransition`** en estado `running`.
4. **`animacion.finished`** es una promesa que se cumple cuando termina; al final, `transform` vale `matrix(1, 0, 0, 1, 200, 0)` (desplazado 200 px).
5. **`transitionend`** es el evento que avisa el final (`propertyName` dice qué propiedad terminó).
6. **Pasado el tiempo** ya no quedan animaciones activas.
7. **La línea `getComputedStyle(caja).transform;`** parece inútil, pero es importante: obliga al navegador a calcular el estado inicial (Ejemplo 26).
8. **La animación real transcurre en tiempo real (unos cientos de milisegundos):** lo que se mide son los **estados** y los **eventos**, no los instantes exactos.

## ✅ Resultado esperado

Al abrir `25-transicion-con-clase.html`, la consola muestra:

```text
Animaciones activas: 1
Tipo: CSSTransition, estado: running
finished → estado: finished, transform: matrix(1, 0, 0, 1, 200, 0)
transitionend: transform
Más tarde, animaciones activas: 0
```

- Una transición de CSS anima el cambio de una clase; `transitionend` y `finished` avisan el final.
- `getAnimations()` muestra las animaciones activas de un elemento.
