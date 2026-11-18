# 📘 Ejemplo 28 — Element.animate(): animar sin escribir CSS

> 🎓 **Resultados de aprendizaje:** RA-8
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome **en tiempo real** (por el protocolo de depuración, porque el tiempo virtual no ejecuta animaciones) y se anotó lo que imprimió la consola; se ejecutó **dos veces** con el mismo resultado. Se verifican **estados y eventos**, no instantes exactos ni cantidad de cuadros. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

`elemento.animate(cuadros, opciones)` crea y arranca una animación **sin escribir CSS**: se indican los estados (cuadros clave) y la duración.

El HTML de partida, dentro del `<body>`:

```html
<div id="aviso" class="aviso">Pedido listo</div>
```

El CSS de la página, dentro de un `<style>` en el `<head>`:

```css
.aviso { padding: 8px; background: #dbeafe; }
```

## 💻 Código

El archivo [`28-element-animate.html`](../recursos/ejemplos/28-element-animate.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
const aviso = document.getElementById('aviso');

const animacion = aviso.animate(
  [
    { opacity: 1 },
    { opacity: 0.2 }
  ],
  { duration: 400, fill: 'forwards' }
);

console.log('Estado al empezar: ' + animacion.playState);
console.log('Duración pedida: ' + animacion.effect.getTiming().duration);
console.log('Animaciones activas: ' + aviso.getAnimations().length);

animacion.finished.then(() => {
  console.log('finished → estado: ' + animacion.playState + ', opacity: ' + getComputedStyle(aviso).opacity);
});
```

## 🔍 Análisis paso a paso

1. **`animate(cuadros, opciones)`** recibe una **lista de cuadros clave** (los estados por los que pasa) y las **opciones de tiempo**.
2. **Devuelve un objeto `Animation`** con el estado (`playState`) y la promesa `finished`.
3. **`duration: 400`** son los milisegundos; **`fill: 'forwards'`** deja el elemento en el último cuadro al terminar (si no, vuelve al estado de partida).
4. **Al empezar** el estado es `running`; al terminar, la promesa `finished` se cumple y el estado es `finished`.
5. **No hay que forzar el estado inicial** como con las transiciones: `animate` define el recorrido completo.
6. **Es una API estándar** disponible desde hace años en los navegadores actuales (MDN la marca como ampliamente disponible).
7. **La animación real transcurre en tiempo real (unos cientos de milisegundos):** lo que se mide son los **estados** y los **eventos**, no los instantes exactos.

## ✅ Resultado esperado

Al abrir `28-element-animate.html`, la consola muestra:

```text
Estado al empezar: running
Duración pedida: 400
Animaciones activas: 1
finished → estado: finished, opacity: 0.2
```

- `animate(cuadros, opciones)` anima un elemento y devuelve un `Animation` con `playState` y `finished`.
- `fill: 'forwards'` conserva el último cuadro.
