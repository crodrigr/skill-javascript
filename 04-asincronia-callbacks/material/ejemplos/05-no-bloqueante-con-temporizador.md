# 📘 Ejemplo 05 — Esperar sin bloquear

> 🎓 **Resultados de aprendizaje:** RA-2
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, **en el orden en que salió**, con el archivo y la línea de cada error. El orden se contrastó con Node cuando la página no usa el navegador y no depende de él (sin diferencias). Los **tiempos son aproximados**: lo que importa es el orden. Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

En Aroma entran dos pedidos casi a la vez: un café (tarda 1 s) y un té (tarda 0,5 s). Si el cajero esperara parado a que termine el café, el té quedaría demorado. Sin bloquear, atiende a los dos y avisa cuando cada uno está listo.

## 💻 Código

El archivo [`05-no-bloqueante-con-temporizador.html`](../recursos/ejemplos/05-no-bloqueante-con-temporizador.html) tiene este código dentro de `<script>`:

```js
function pedir(producto, milisegundos) {
  console.log('📥 Pedido de ' + producto);
  setTimeout(() => {
    console.log('✅ Listo: ' + producto);
  }, milisegundos);
}

pedir('Café', 1000);
pedir('Té', 500);
console.log('🧑‍🍳 Mientras tanto, seguimos atendiendo');
```

## 🔍 Análisis paso a paso

1. **`pedir` no espera.** Programa el aviso y devuelve el control enseguida, así que los dos pedidos entran antes de que termine cualquiera.
2. **Las esperas corren «en paralelo»:** el té (500 ms) termina antes que el café (1000 ms), aunque se pidió después.
3. **El orden lo decide el tiempo de espera**, no el orden en que se programaron.
4. **El hilo queda libre** para hacer otras cosas (el mensaje de «seguimos atendiendo»).
5. **Esto es «no bloqueante»:** la espera la gestiona el navegador y el programa no se detiene.

## ✅ Resultado esperado

Al abrir `05-no-bloqueante-con-temporizador.html`, la consola muestra:

```text
📥 Pedido de Café
📥 Pedido de Té
🧑‍🍳 Mientras tanto, seguimos atendiendo
✅ Listo: Té
✅ Listo: Café
```

- En un modelo **no bloqueante**, la espera no detiene el programa.
- Varias esperas pueden estar en curso a la vez; termina primero la más corta.
