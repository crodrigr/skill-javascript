# 📘 Ejemplo 30 — requestAnimationFrame: animar cuadro a cuadro

> 🎓 **Resultados de aprendizaje:** RA-8
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome **en tiempo real** (por el protocolo de depuración, porque el tiempo virtual no ejecuta animaciones) y se anotó lo que imprimió la consola; se ejecutó **dos veces** con el mismo resultado. Se verifican **estados y eventos**, no instantes exactos ni cantidad de cuadros. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Con `requestAnimationFrame` **vos** movés el elemento en cada cuadro. Es la herramienta con más control (juegos, gráficos), pero más trabajo que una transición o `animate()`.

El HTML de partida, dentro del `<body>`:

```html
<div id="caja" class="caja"></div>
```

El CSS de la página, dentro de un `<style>` en el `<head>`:

```css
.caja { width: 60px; height: 60px; background: #d97706; }
```

## 💻 Código

El archivo [`30-request-animation-frame.html`](../recursos/ejemplos/30-request-animation-frame.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
const caja = document.getElementById('caja');
let inicio;

function paso(marca) {
  if (inicio === undefined) {
    inicio = marca;
  }
  const avance = Math.min((marca - inicio) * 0.2, 200);
  caja.style.transform = 'translateX(' + avance + 'px)';
  if (avance < 200) {
    requestAnimationFrame(paso);
  } else {
    console.log('Llegó a ' + avance + ' px y se detuvo');
  }
}

requestAnimationFrame(paso);
console.log('Animación pedida');

const id = requestAnimationFrame(() => console.log('Este cuadro no se ejecuta'));
cancelAnimationFrame(id);
console.log('Segundo cuadro cancelado');
```

## 🔍 Análisis paso a paso

1. **`requestAnimationFrame(función)`** pide al navegador que ejecute la función **antes del próximo dibujado** (unas 60 veces por segundo en la mayoría de las pantallas).
2. **La función recibe una marca de tiempo** (`marca`): la posición se calcula con el **tiempo transcurrido** (`marca - inicio`), no con un paso fijo; así la velocidad es la misma en pantallas rápidas y lentas.
3. **Hay que volver a pedir el siguiente cuadro** dentro de la función: la petición vale una sola vez. Cuando llega al destino (`200` px), no se pide otro y la animación se **detiene**.
4. **`cancelAnimationFrame(id)`** cancela un cuadro pedido: su función no se ejecuta.
5. **`Math.min`** evita pasarse del destino.
6. **La cantidad exacta de cuadros no es fija** (depende de la pantalla y del equipo): por eso solo se verifica el resultado final.
7. **Cuándo usarlo:** cuando la animación depende de cálculos o de la persona (un juego). Para movimientos simples, preferí transiciones o `animate()`.
8. **La animación real transcurre en tiempo real (unos cientos de milisegundos):** lo que se mide son los **estados** y los **eventos**, no los instantes exactos.

## ✅ Resultado esperado

Al abrir `30-request-animation-frame.html`, la consola muestra:

```text
Animación pedida
Segundo cuadro cancelado
Llegó a 200 px y se detuvo
```

- `requestAnimationFrame` ejecuta una función en cada cuadro; hay que volver a pedirla para seguir animando.
- Se calcula el avance con el tiempo transcurrido y se puede cancelar con `cancelAnimationFrame`.
