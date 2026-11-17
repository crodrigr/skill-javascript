# 📘 Ejemplo 14 — setTimeout con argumentos y cancelación

> 🎓 **Resultados de aprendizaje:** RA-6
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, **en el orden en que salió**, con el archivo y la línea de cada error. El orden se contrastó con Node cuando la página no usa el navegador y no depende de él (sin diferencias). Los **tiempos son aproximados**: lo que importa es el orden. Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Aroma avisa cuando cada pedido está listo. El cliente del té se arrepiente: hay que **cancelar** su aviso antes de que venza.

## 💻 Código

El archivo [`14-set-timeout-y-cancelar.html`](../recursos/ejemplos/14-set-timeout-y-cancelar.html) tiene este código dentro de `<script>`:

```js
function avisar(producto, mesa) {
  console.log('🔔 ' + producto + ' listo para la mesa ' + mesa);
}

setTimeout(avisar, 300, 'Café', 4);
const idTe = setTimeout(avisar, 500, 'Té', 7);
setTimeout(avisar, 700, 'Brownie', 2);

clearTimeout(idTe);
console.log('Se canceló el aviso del té');
```

## 🔍 Análisis paso a paso

1. **Argumentos extra:** a partir del tercer parámetro, `setTimeout` pasa los valores al callback: `setTimeout(avisar, 300, 'Café', 4)` llama a `avisar('Café', 4)`.
2. **`setTimeout` devuelve un identificador.** Guardarlo en una variable (`idTe`) permite cancelar el temporizador.
3. **`clearTimeout(id)`** cancela un temporizador que todavía no venció: su callback no se ejecuta nunca.
4. **El aviso del té no sale,** aunque se programó antes que el del brownie.
5. **El orden** sale por tiempo: el mensaje de cancelación (síncrono), luego el café (300 ms) y el brownie (700 ms).

## ✅ Resultado esperado

Al abrir `14-set-timeout-y-cancelar.html`, la consola muestra:

```text
Se canceló el aviso del té
🔔 Café listo para la mesa 4
🔔 Brownie listo para la mesa 2
```

- `setTimeout` acepta argumentos para el callback después del tiempo.
- `clearTimeout(id)` cancela un temporizador pendiente.
