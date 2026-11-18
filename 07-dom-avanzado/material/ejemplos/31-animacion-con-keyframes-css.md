# 📘 Ejemplo 31 — Animación con @keyframes de CSS

> 🎓 **Resultados de aprendizaje:** RA-7
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome **en tiempo real** (por el protocolo de depuración, porque el tiempo virtual no ejecuta animaciones) y se anotó lo que imprimió la consola; se ejecutó **dos veces** con el mismo resultado. Se verifican **estados y eventos**, no instantes exactos ni cantidad de cuadros. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Una animación declarada en CSS con `@keyframes` se **activa** con una clase. A diferencia de la transición, **no necesita** un estado inicial previo.

El HTML de partida, dentro del `<body>`:

```html
<div id="caja" class="caja"></div>
```

El CSS de la página, dentro de un `<style>` en el `<head>`:

```css
.caja { width: 60px; height: 60px; background: #d97706; }
@keyframes latido {
  from { transform: scale(1); }
  to { transform: scale(1.5); }
}
.late { animation: latido 300ms linear 2 alternate; }
```

## 💻 Código

El archivo [`31-animacion-con-keyframes-css.html`](../recursos/ejemplos/31-animacion-con-keyframes-css.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
const caja = document.getElementById('caja');

caja.addEventListener('animationend', (evento) => {
  console.log('animationend: ' + evento.animationName);
});

caja.classList.add('late');

const animacion = caja.getAnimations()[0];
console.log('Tipo: ' + animacion.constructor.name + ', estado: ' + animacion.playState);
console.log('Nombre: ' + animacion.animationName);

animacion.finished.then(() => {
  console.log('finished → estado: ' + animacion.playState);
});
```

## 🔍 Análisis paso a paso

1. **`@keyframes latido`** define los cuadros (de `scale(1)` a `scale(1.5)`) y `.late` la usa con `animation: latido 300ms linear 2 alternate` (dos pasadas, de ida y vuelta).
2. **JavaScript solo agrega la clase** `late`: la animación arranca **sin** haber leído el estado inicial (a diferencia de las transiciones).
3. **`getAnimations()`** devuelve una **`CSSAnimation`** (una transición es una `CSSTransition`) con su nombre (`animationName`).
4. **`animationend`** avisa el final de la animación (con su nombre) y `finished` se cumple al terminar.
5. **Cuándo usarlas:** para animaciones repetitivas o decorativas (un latido, un giro) que no dependen de datos.
6. **La animación real transcurre en tiempo real (unos cientos de milisegundos):** lo que se mide son los **estados** y los **eventos**, no los instantes exactos.

## ✅ Resultado esperado

Al abrir `31-animacion-con-keyframes-css.html`, la consola muestra:

```text
Tipo: CSSAnimation, estado: running
Nombre: latido
finished → estado: finished
animationend: latido
```

- `@keyframes` + una clase animan sin necesitar un estado inicial previo; `animationend` avisa el final.
- `getAnimations()` distingue una `CSSAnimation` de una `CSSTransition`.
