# 📘 Ejemplo 04 — Una función que devuelve una promesa

> 🎓 **Resultados de aprendizaje:** RA-2
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, **en el orden en que salió**, con el archivo y la línea de cada error. El orden se contrastó con Node cuando la página no usa el navegador ni tiene errores a propósito (sin diferencias). Los ejemplos **no imprimen objetos `Promise`**: la consola real muestra su estado, pero aquí se observa con `.then()`, `.catch()` y `.finally()`. Los **tiempos son aproximados**: lo que importa es el orden. Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

En la Clase 04, `validar` recibía un callback. Ahora **devuelve una promesa**: quien la llama decide qué hacer con el resultado usando `.then()` y `.catch()`.

## 💻 Código

El archivo [`04-funcion-que-devuelve-promesa.html`](../recursos/ejemplos/04-funcion-que-devuelve-promesa.html) tiene este código dentro de `<script>`:

```js
function validar(pedido) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (pedido.items.length === 0) {
        reject('Pedido vacío');
        return;
      }
      resolve(pedido);
    }, 300);
  });
}

validar({ numero: 101, items: ['Café'] })
  .then((pedido) => console.log('✅ Pedido ' + pedido.numero + ' validado'))
  .catch((motivo) => console.log('❌ ' + motivo));

validar({ numero: 102, items: [] })
  .then((pedido) => console.log('✅ Pedido ' + pedido.numero + ' validado'))
  .catch((motivo) => console.log('❌ ' + motivo));
```

## 🔍 Análisis paso a paso

1. **`validar` ya no recibe un callback:** devuelve una promesa, que representa el resultado de validar.
2. **Quien la llama la consume:** `.then()` para el éxito y `.catch()` para el error, sin pasar funciones por parámetro.
3. **El pedido 101** tiene productos: la promesa se cumple con el pedido. **El 102** está vacío: se rechaza con `'Pedido vacío'`.
4. **Los dos validan a la vez** (cada uno espera 300 ms) y salen en el orden en que se pidieron.
5. **Compará con la Clase 04:** allí el resultado llegaba con `siguiente(error, resultado)`; aquí llega por el `.then()` o el `.catch()`.

## ✅ Resultado esperado

Al abrir `04-funcion-que-devuelve-promesa.html`, la consola muestra:

```text
✅ Pedido 101 validado
❌ Pedido vacío
```

- Una función asíncrona puede devolver una promesa en lugar de recibir un callback.
- Quien la llama usa `.then()` y `.catch()`.
