# 📘 Ejemplo 17 — Recibir el resultado en un callback

> 🎓 **Resultados de aprendizaje:** RA-7
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, **en el orden en que salió**, con el archivo y la línea de cada error. El orden se contrastó con Node cuando la página no usa el navegador y no depende de él (sin diferencias). Los **tiempos son aproximados**: lo que importa es el orden. Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Lucía busca un producto, pero la búsqueda tarda. La función no puede **devolver** el resultado enseguida; en cambio, lo **entrega a un callback** cuando lo tiene.

## 💻 Código

El archivo [`17-resultado-con-callback.html`](../recursos/ejemplos/17-resultado-con-callback.html) tiene este código dentro de `<script>`:

```js
function buscarProducto(nombre, alTerminar) {
  setTimeout(() => {
    alTerminar({ nombre: nombre, precio: 4.5 });
  }, 300);
}

let encontrado;

buscarProducto('Café', (producto) => {
  encontrado = producto;
  console.log('2. Dentro del callback: ' + producto.nombre + ' $' + producto.precio);
});

console.log('1. Fuera del callback: ' + encontrado);
```

## 🔍 Análisis paso a paso

1. **`buscarProducto` recibe un callback (`alTerminar`)** y lo llama con el resultado cuando pasan 300 ms.
2. **Los datos solo existen dentro del callback** (o en lo que el callback llame). Cuando la función termina de ejecutarse, el resultado aún no llegó.
3. **Fuera del callback, `encontrado` es `undefined`** porque la línea 1 se ejecuta antes de que el callback asigne el valor.
4. **Error típico:** escribir `const p = buscarProducto(…)` y usar `p`. La función no devuelve el resultado: lo entrega al callback.
5. **Regla:** todo lo que dependa del resultado se escribe **dentro** del callback.

## ✅ Resultado esperado

Al abrir `17-resultado-con-callback.html`, la consola muestra:

```text
1. Fuera del callback: undefined
2. Dentro del callback: Café $4.5
```

- Una función asíncrona entrega el resultado a un callback, no con `return`.
- Fuera del callback, el resultado todavía no existe: vale `undefined`.
