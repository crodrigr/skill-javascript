# 📘 Ejemplo 16 — Un clic dispara un callback

> 🎓 **Resultados de aprendizaje:** RA-6
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, **en el orden en que salió**, con el archivo y la línea de cada error. El orden se contrastó con Node cuando la página no usa el navegador y no depende de él (sin diferencias). Los **tiempos son aproximados**: lo que importa es el orden. Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Diego agregó un botón «Pedir» a la página. No sabe cuándo van a hacer clic: por eso le **registra** un callback, y el navegador lo llama cada vez que ocurre el clic.

## 💻 Código

El archivo [`16-evento-click.html`](../recursos/ejemplos/16-evento-click.html) tiene este HTML en el `<body>`:

```html
<button id="pedir">Pedir un café</button>
```

y este código dentro de `<script>`:

```js
const boton = document.getElementById('pedir');
let pedidos = 0;

console.log('1. Registro el callback del clic');

boton.addEventListener('click', () => {
  pedidos = pedidos + 1;
  console.log('🛎️ Pedido número ' + pedidos);
});

console.log('2. El código terminó: todavía no hay pedidos');
```

## 🔍 Análisis paso a paso

1. **`addEventListener('click', función)`** registra un callback para el evento `click` del botón.
2. **Registrar no es ejecutar.** Los mensajes 1 y 2 salen de inmediato; el callback todavía no se ejecutó ninguna vez.
3. **El navegador lo llama cuando ocurre el clic,** tantas veces como clics haya. Es una tarea asíncrona: no sabés cuándo va a pasar.
4. **El callback recuerda** el valor de `pedidos` entre un clic y otro.
5. **Los eventos son una fuente de asincronía** igual que los temporizadores. Los eventos del DOM (la página) tienen mucho más para estudiar; aquí solo usamos el clic.

## ✅ Resultado esperado

Al abrir la página, sin hacer clic, la consola muestra solo los dos primeros mensajes. Cada clic en el botón agrega una línea; con dos clics (en la verificación, por código) queda así:

```text
1. Registro el callback del clic
2. El código terminó: todavía no hay pedidos
🛎️ Pedido número 1
🛎️ Pedido número 2
```

- `addEventListener` registra un callback que el navegador llama cuando ocurre el evento.
- Registrar el callback y ejecutarlo son dos momentos distintos.
