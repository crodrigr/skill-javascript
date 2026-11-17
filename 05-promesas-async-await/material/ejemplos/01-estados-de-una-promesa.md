# 📘 Ejemplo 01 — Pendiente, cumplida o rechazada

> 🎓 **Resultados de aprendizaje:** RA-1
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, **en el orden en que salió**, con el archivo y la línea de cada error. El orden se contrastó con Node cuando la página no usa el navegador ni tiene errores a propósito (sin diferencias). Los ejemplos **no imprimen objetos `Promise`**: la consola real muestra su estado, pero aquí se observa con `.then()`, `.catch()` y `.finally()`. Los **tiempos son aproximados**: lo que importa es el orden. Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Lucía pide un café y un té. Cada pedido es una **promesa**: algo que todavía no tiene resultado (está **pendiente**) y que más tarde se **cumple** con un valor o se **rechaza** con un motivo.

## 💻 Código

El archivo [`01-estados-de-una-promesa.html`](../recursos/ejemplos/01-estados-de-una-promesa.html) tiene este código dentro de `<script>`:

```js
const exito = new Promise((resolve) => {
  setTimeout(() => resolve('Café listo'), 300);
});

const fallo = new Promise((resolve, reject) => {
  setTimeout(() => reject('Sin stock de té'), 300);
});

console.log('1. Las dos promesas están pendientes');

exito.then((valor) => console.log('2. Cumplida con: ' + valor));
fallo.catch((motivo) => console.log('3. Rechazada con: ' + motivo));
```

## 🔍 Análisis paso a paso

1. **Pendiente (*pending*).** Mientras pasan los 300 ms, las dos promesas existen pero no tienen resultado; por eso el mensaje 1 sale primero.
2. **Cumplida (*fulfilled*).** `resolve(valor)` cumple la promesa con un valor; `.then()` recibe ese valor.
3. **Rechazada (*rejected*).** `reject(motivo)` la rechaza con un motivo; `.catch()` recibe ese motivo.
4. **Un solo cambio.** Una promesa pasa de pendiente a cumplida **o** a rechazada, una única vez, y después no cambia.
5. **Este ejemplo no imprime las promesas.** La consola real de DevTools sí muestra su estado (`Promise {<pending>}`), pero aquí lo observamos con `.then()` y `.catch()`.
6. **Los tiempos son aproximados:** lo que importa es el **orden** de las salidas.

## ✅ Resultado esperado

Al abrir `01-estados-de-una-promesa.html`, la consola muestra:

```text
1. Las dos promesas están pendientes
2. Cumplida con: Café listo
3. Rechazada con: Sin stock de té
```

- Una promesa está **pendiente**, **cumplida** o **rechazada**.
- Pasa de pendiente a cumplida o rechazada una sola vez.
