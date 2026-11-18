# 📘 Ejemplo 32 — Respetar prefers-reduced-motion

> 🎓 **Resultados de aprendizaje:** RA-9
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome **en tiempo real** (por el protocolo de depuración, porque el tiempo virtual no ejecuta animaciones) y se anotó lo que imprimió la consola; se ejecutó **dos veces** con el mismo resultado. Se verifican **estados y eventos**, no instantes exactos ni cantidad de cuadros. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

A algunas personas el movimiento les provoca mareos. Los sistemas permiten pedir **menos movimiento**, y la página puede leer esa preferencia con `matchMedia` y **evitar o acortar** las animaciones.

El HTML de partida, dentro del `<body>`:

```html
<div id="aviso" class="aviso">Pedido listo</div>
```

El CSS de la página, dentro de un `<style>` en el `<head>`:

```css
.aviso { padding: 8px; background: #dbeafe; }
```

## 💻 Código

El archivo [`32-prefers-reduced-motion.html`](../recursos/ejemplos/32-prefers-reduced-motion.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
const aviso = document.getElementById('aviso');
const consulta = window.matchMedia('(prefers-reduced-motion: reduce)');

function duracionPara(prefiereMenos) {
  return prefiereMenos ? 1 : 400;
}

console.log('Prefiere menos movimiento: ' + consulta.matches);
console.log('Duración si prefiere menos: ' + duracionPara(true) + ' ms');
console.log('Duración si no: ' + duracionPara(false) + ' ms');

const animacion = aviso.animate(
  [{ opacity: 0 }, { opacity: 1 }],
  { duration: duracionPara(consulta.matches), fill: 'forwards' }
);
console.log('Duración elegida: ' + animacion.effect.getTiming().duration + ' ms');

animacion.finished.then(() => {
  console.log('Terminó → estado: ' + animacion.playState);
});
```

## 🔍 Análisis paso a paso

1. **`matchMedia('(prefers-reduced-motion: reduce)')`** consulta la preferencia del sistema; su propiedad **`matches`** es `true` si la persona pidió menos movimiento.
2. **La función `duracionPara`** decide la duración: casi instantánea (1 ms) si prefiere menos movimiento y la normal si no. Se muestran **los dos caminos** para verlos sin cambiar la configuración.
3. **En esta verificación** la preferencia es `false` (valor por defecto), así que se eligen 400 ms.
4. **Se aplica la duración elegida** a la animación: el resultado es el mismo (el aviso aparece), pero sin movimiento prolongado si hace falta.
5. **Buena práctica:** respetar siempre esta preferencia, sobre todo en movimientos grandes o repetidos.
6. **También se puede resolver solo en CSS** con `@media (prefers-reduced-motion: reduce)`.
7. **La animación real transcurre en tiempo real (unos cientos de milisegundos):** lo que se mide son los **estados** y los **eventos**, no los instantes exactos.

## ✅ Resultado esperado

Al abrir `32-prefers-reduced-motion.html`, la consola muestra:

```text
Prefiere menos movimiento: false
Duración si prefiere menos: 1 ms
Duración si no: 400 ms
Duración elegida: 400 ms
Terminó → estado: finished
```

- `matchMedia('(prefers-reduced-motion: reduce)').matches` indica si la persona pidió menos movimiento.
- Hay que evitar o acortar las animaciones cuando es `true`.
