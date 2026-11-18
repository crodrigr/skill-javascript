# 📘 Ejemplo 27 — Una transición con la propiedad style

> 🎓 **Resultados de aprendizaje:** RA-7
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome **en tiempo real** (por el protocolo de depuración, porque el tiempo virtual no ejecuta animaciones) y se anotó lo que imprimió la consola; se ejecutó **dos veces** con el mismo resultado. Se verifican **estados y eventos**, no instantes exactos ni cantidad de cuadros. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

La transición también se puede activar y configurar **desde JavaScript** con `style`: se escribe la duración y después se cambia el valor.

El HTML de partida, dentro del `<body>`:

```html
<div id="aviso" class="aviso">Pedido listo</div>
```

El CSS de la página, dentro de un `<style>` en el `<head>`:

```css
.aviso { padding: 8px; background: #dbeafe; }
```

## 💻 Código

El archivo [`27-transicion-con-style.html`](../recursos/ejemplos/27-transicion-con-style.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
const aviso = document.getElementById('aviso');

aviso.addEventListener('transitionend', (evento) => {
  console.log('transitionend: ' + evento.propertyName + ' → opacity calculado: ' + getComputedStyle(aviso).opacity);
});

aviso.style.transition = 'opacity 300ms linear';
getComputedStyle(aviso).opacity;
aviso.style.opacity = 0.2;

console.log('Animaciones activas: ' + aviso.getAnimations().length);
console.log('opacity en línea: ' + aviso.style.opacity);
```

## 🔍 Análisis paso a paso

1. **`style.transition`** escribe la transición en línea: se anima la propiedad `opacity` durante 300 ms.
2. **Se lee el estilo calculado** antes de cambiar `opacity` (como en el Ejemplo 26) para que el navegador vea el estado inicial.
3. **`style.opacity = 0.2`** cambia el valor y dispara la transición (una animación activa).
4. **`transitionend`** avisa el final; el valor calculado ya es `0.2`.
5. **Cuándo conviene `style`:** para valores que se calculan en JavaScript (una posición, un porcentaje). Para cambios fijos, **una clase** deja el aspecto en el CSS.
6. **La animación real transcurre en tiempo real (unos cientos de milisegundos):** lo que se mide son los **estados** y los **eventos**, no los instantes exactos.

## ✅ Resultado esperado

Al abrir `27-transicion-con-style.html`, la consola muestra:

```text
Animaciones activas: 1
opacity en línea: 0.2
transitionend: opacity → opacity calculado: 0.2
```

- `style.transition` y un cambio de valor animan una propiedad desde JavaScript.
- Para aspectos fijos, es mejor cambiar una clase.
