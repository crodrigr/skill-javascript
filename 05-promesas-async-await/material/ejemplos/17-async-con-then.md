# 📘 Ejemplo 17 — async y .then() juntos

> 🎓 **Resultados de aprendizaje:** RA-7
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, **en el orden en que salió**, con el archivo y la línea de cada error. El orden se contrastó con Node cuando la página no usa el navegador ni tiene errores a propósito (sin diferencias). Los ejemplos **no imprimen objetos `Promise`**: la consola real muestra su estado, pero aquí se observa con `.then()`, `.catch()` y `.finally()`. Los **tiempos son aproximados**: lo que importa es el orden. Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Una función `async` devuelve una promesa, así que se puede consumir con `.then()` y `.catch()`. Las dos formas no compiten: son **la misma herramienta**.

## 💻 Código

El archivo [`17-async-con-then.html`](../recursos/ejemplos/17-async-con-then.html) tiene este código dentro de `<script>`:

```js
function esperar(milisegundos) {
  return new Promise((resolve) => {
    setTimeout(resolve, milisegundos);
  });
}

async function procesar(pedido) {
  await esperar(300);
  if (pedido.items.length === 0) {
    throw new Error('Pedido vacío');
  }
  return 'Pedido ' + pedido.numero + ' procesado';
}

procesar({ numero: 101, items: ['Café'] })
  .then((mensaje) => console.log('✅ ' + mensaje))
  .catch((error) => console.log('❌ ' + error.message))
  .finally(() => console.log('Fin del pedido 101'));

procesar({ numero: 102, items: [] })
  .then((mensaje) => console.log('✅ ' + mensaje))
  .catch((error) => console.log('❌ ' + error.message))
  .finally(() => console.log('Fin del pedido 102'));
```

## 🔍 Análisis paso a paso

1. **`procesar` es `async`:** usa `await` por dentro y devuelve una promesa por fuera.
2. **Desde afuera** no importa cómo está escrita: se usa con `.then()`, `.catch()` y `.finally()` como cualquier promesa.
3. **Para eso sirve la combinación:** una parte del programa puede usar `async`/`await` y otra, `.then()`, sin problema.
4. **Cuándo conviene `.then()`:** en el nivel superior de un script clásico, donde no se puede usar `await`.
5. **Cuándo conviene `await`:** dentro de funciones, para que el flujo se lea de arriba hacia abajo.

## ✅ Resultado esperado

Al abrir `17-async-con-then.html`, la consola muestra:

```text
✅ Pedido 101 procesado
Fin del pedido 101
❌ Pedido vacío
Fin del pedido 102
```

- Una función `async` se puede consumir con `.then()`/`.catch()`.
- `async`/`await` y `.then()` son dos formas de usar la misma promesa.
