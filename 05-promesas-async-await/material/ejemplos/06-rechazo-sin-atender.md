# 📘 Ejemplo 06 — Un rechazo que nadie atiende

> 🎓 **Resultados de aprendizaje:** RA-3
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, **en el orden en que salió**, con el archivo y la línea de cada error. El orden se contrastó con Node cuando la página no usa el navegador ni tiene errores a propósito (sin diferencias). Los ejemplos **no imprimen objetos `Promise`**: la consola real muestra su estado, pero aquí se observa con `.then()`, `.catch()` y `.finally()`. Los **tiempos son aproximados**: lo que importa es el orden. Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Lucía cobró un pedido con la tarjeta rechazada, pero solo escribió `.then()` y olvidó el `.catch()`. El rechazo queda **sin atender** y el navegador lo avisa en la consola.

## 💻 Código

El archivo [`06-rechazo-sin-atender.html`](../recursos/ejemplos/06-rechazo-sin-atender.html) tiene este código dentro de `<script>`:

```js
function cobrar(pedido) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (pedido.tarjetaValida === false) {
        reject('Tarjeta rechazada');
        return;
      }
      resolve(pedido);
    }, 500);
  });
}

console.log('Cobrando el pedido 102');
cobrar({ numero: 102, total: 6.7, tarjetaValida: false })
  .then((p) => console.log('💳 Cobrado $' + p.total));
```

## 🔍 Análisis paso a paso

1. **La promesa se rechaza y nadie la atiende:** el `.then()` solo mira el éxito y no hay `.catch()`.
2. **El navegador lo informa** con `Uncaught (in promise)` (*sin atrapar, en una promesa*) seguido del motivo.
3. **El programa no se detiene,** pero el error pasa inadvertido para quien usa la página.
4. **Regla:** toda cadena de promesas debería terminar con un `.catch()` (o estar dentro de un `try`/`catch`, como veremos con `await`).
5. **Nota sobre el orden:** el aviso aparece después de que el código termina; aquí no hay otras tareas pendientes, así que no hay confusión sobre el orden.

## ✅ Resultado esperado

Al abrir `06-rechazo-sin-atender.html`, la consola muestra:

```text
Cobrando el pedido 102
Uncaught (in promise) Tarjeta rechazada
```

- Un rechazo sin atender genera `Uncaught (in promise)` en la consola.
- Terminá las cadenas de promesas con un `.catch()`.
