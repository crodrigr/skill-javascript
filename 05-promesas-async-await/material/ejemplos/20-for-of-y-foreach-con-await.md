# 📘 Ejemplo 20 — for…of espera; forEach no

> 🎓 **Resultados de aprendizaje:** RA-9
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, **en el orden en que salió**, con el archivo y la línea de cada error. El orden se contrastó con Node cuando la página no usa el navegador ni tiene errores a propósito (sin diferencias). Los ejemplos **no imprimen objetos `Promise`**: la consola real muestra su estado, pero aquí se observa con `.then()`, `.catch()` y `.finally()`. Los **tiempos son aproximados**: lo que importa es el orden. Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Diego quiere procesar tres pedidos esperando a cada uno. Probó `forEach` con una función `async` y el código siguió **sin esperar**. Con `for…of`, sí espera.

## 💻 Código

El archivo [`20-for-of-y-foreach-con-await.html`](../recursos/ejemplos/20-for-of-y-foreach-con-await.html) tiene este código dentro de `<script>`:

```js
function esperar(milisegundos) {
  return new Promise((resolve) => {
    setTimeout(resolve, milisegundos);
  });
}

const pedidos = [101, 102, 103];

async function procesar(numero, etiqueta) {
  await esperar(200);
  console.log(etiqueta + ': procesado el pedido ' + numero);
}

async function conForEach() {
  pedidos.forEach(async (numero) => {
    await procesar(numero, 'forEach');
  });
  console.log('forEach: el bucle terminó, pero los pedidos siguen en proceso');
}

async function conForOf() {
  for (const numero of pedidos) {
    await procesar(numero, 'for…of');
  }
  console.log('for…of: todos los pedidos están procesados');
}

async function main() {
  conForEach();
  await esperar(500);
  await conForOf();
}

main();
```

## 🔍 Análisis paso a paso

1. **`forEach` no espera:** llama a la función `async` de cada elemento y sigue enseguida. Por eso el mensaje «el bucle terminó» sale **antes** que los pedidos procesados, y los tres se procesan **a la vez** (a los 200 ms).
2. **`for…of` con `await`** espera a cada pedido antes de pasar al siguiente: se procesan **de a uno** (200 ms cada uno) y el mensaje final sale **después** de todos.
3. **Regla:** para esperar dentro de un bucle, usá `for…of`; para lanzar todo a la vez, `Promise.all`.
4. **`main` espera 500 ms** entre las dos pruebas para que no se mezclen las salidas.
5. **Cada elemento queda etiquetado** (`forEach` o `for…of`) para distinguir las dos pruebas en la consola.

## ✅ Resultado esperado

Al abrir `20-for-of-y-foreach-con-await.html`, la consola muestra:

```text
forEach: el bucle terminó, pero los pedidos siguen en proceso
forEach: procesado el pedido 101
forEach: procesado el pedido 102
forEach: procesado el pedido 103
for…of: procesado el pedido 101
for…of: procesado el pedido 102
for…of: procesado el pedido 103
for…of: todos los pedidos están procesados
```

- `forEach` no espera a las funciones `async`; `for…of` con `await`, sí.
- Para esperar en un bucle, usá `for…of`.
