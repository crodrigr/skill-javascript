# 📘 Ejemplo 14 — Una función async devuelve una promesa

> 🎓 **Resultados de aprendizaje:** RA-6
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, **en el orden en que salió**, con el archivo y la línea de cada error. El orden se contrastó con Node cuando la página no usa el navegador ni tiene errores a propósito (sin diferencias). Los ejemplos **no imprimen objetos `Promise`**: la consola real muestra su estado, pero aquí se observa con `.then()`, `.catch()` y `.finally()`. Los **tiempos son aproximados**: lo que importa es el orden. Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

`async` es una palabra que se escribe delante de una función. Hace que la función **devuelva siempre una promesa**: lo que `return`ea la cumple y lo que `throw`ea la rechaza.

## 💻 Código

El archivo [`14-funcion-async.html`](../recursos/ejemplos/14-funcion-async.html) tiene este código dentro de `<script>`:

```js
async function obtenerPrecio() {
  return 4.5;
}

async function fallar() {
  throw new Error('Sin conexión');
}

obtenerPrecio().then((precio) => console.log('Precio: ' + precio));
fallar().catch((error) => console.log('❌ ' + error.message));

console.log('Las dos funciones ya se llamaron');
```

## 🔍 Análisis paso a paso

1. **`async function`** devuelve una promesa aunque no escribas `new Promise`: `return 4.5` la cumple con `4.5`.
2. **`throw new Error('…')`** dentro de una función `async` **rechaza** la promesa: el motivo es el objeto de error y su texto está en `error.message`.
3. **Se consume igual que cualquier promesa:** con `.then()` y `.catch()`.
4. **El mensaje final sale primero:** las funciones `async` devuelven la promesa enseguida y sus `.then()` esperan al final del código síncrono (microtareas).
5. **`async` es una forma más cómoda de escribir promesas,** no un mecanismo distinto: por dentro es la misma `Promise`.

## ✅ Resultado esperado

Al abrir `14-funcion-async.html`, la consola muestra:

```text
Las dos funciones ya se llamaron
Precio: 4.5
❌ Sin conexión
```

- Una función `async` siempre devuelve una promesa.
- `return` la cumple y `throw` la rechaza.
