# 📘 Ejemplo 33 — Una tarjeta que aparece y se cierra con animación

> 🎓 **Resultados de aprendizaje:** RA-9
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome **en tiempo real** (por el protocolo de depuración, porque el tiempo virtual no ejecuta animaciones) y se anotó lo que imprimió la consola; se ejecutó **dos veces** con el mismo resultado. Se verifican **estados y eventos**, no instantes exactos ni cantidad de cuadros. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Cierre del módulo: un aviso se **crea**, **aparece con una animación**, tiene un botón «Cerrar» que lo **anima hacia afuera** y, **recién cuando termina la animación**, lo **elimina**. Combina crear nodos, navegar con `closest` y animar con `finished`.

El HTML de partida, dentro del `<body>`:

```html
<div id="avisos"></div>
<button id="nuevo">Mostrar aviso</button>
```

El CSS de la página, dentro de un `<style>` en el `<head>`:

```css
.tarjeta { border: 1px solid #94a3b8; padding: 8px; margin: 4px; background: #fff; }
```

## 💻 Código

El archivo [`33-tarjeta-que-aparece-y-se-cierra.html`](../recursos/ejemplos/33-tarjeta-que-aparece-y-se-cierra.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
const avisos = document.getElementById('avisos');
const boton = document.getElementById('nuevo');
let numero = 0;

function crearAviso(texto) {
  const tarjeta = document.createElement('article');
  tarjeta.className = 'tarjeta';
  tarjeta.textContent = texto + ' ';

  const cerrar = document.createElement('button');
  cerrar.className = 'cerrar';
  cerrar.textContent = 'Cerrar';
  tarjeta.append(cerrar);

  cerrar.addEventListener('click', () => {
    const tarjetaActual = cerrar.closest('.tarjeta');
    const salida = tarjetaActual.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 300, fill: 'forwards' });
    salida.finished.then(() => {
      tarjetaActual.remove();
      console.log('Aviso eliminado → quedan: ' + avisos.children.length);
    });
  });

  return tarjeta;
}

boton.addEventListener('click', () => {
  numero = numero + 1;
  const tarjeta = crearAviso('Aviso ' + numero);
  avisos.append(tarjeta);
  const entrada = tarjeta.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 300 });
  console.log('Aviso ' + numero + ' creado → animación: ' + entrada.playState + ', avisos: ' + avisos.children.length);
  entrada.finished.then(() => {
    console.log('Aviso ' + numero + ' apareció');
  });
});
```

## 🔍 Análisis paso a paso

1. **`crearAviso`** crea la tarjeta, le pone el texto con `textContent`, le agrega su botón «Cerrar» y le registra el clic; devuelve la tarjeta lista.
2. **Al mostrar el aviso:** se inserta con `append` y se anima su **aparición** con `animate` (de opacidad `0` a `1`); `finished` avisa cuando terminó.
3. **Al cerrarlo:** el botón sube con `closest` hasta **su** tarjeta, la anima hacia afuera y **espera `finished`** antes de eliminarla con `remove()`.
4. **Esperar el final es importante:** si se eliminara al instante, la animación de salida **nunca se vería**.
5. **Todo el texto** se asigna con `textContent` (seguro) y todas las tarjetas comparten el mismo código.
6. **Combina las tres sesiones:** crear e insertar nodos, navegar con `closest` y animar.
7. **La animación real transcurre en tiempo real (unos cientos de milisegundos):** lo que se mide son los **estados** y los **eventos**, no los instantes exactos.

## ✅ Resultado esperado

Al abrir la página, sin hacer clic, la consola no muestra nada. Pulsando «Mostrar aviso» y, después de que aparece, «Cerrar» (en la verificación se hizo por código, esperando entre un clic y otro), queda así:

```text
Aviso 1 creado → animación: running, avisos: 1
Aviso 1 apareció
Aviso eliminado → quedan: 0
Al final: 0 avisos
```

- Para animar la salida de un elemento hay que esperar `finished` antes de eliminarlo.
- Crear, navegar y animar se combinan en un solo flujo.
