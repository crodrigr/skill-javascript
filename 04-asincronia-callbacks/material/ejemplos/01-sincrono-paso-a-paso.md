# 📘 Ejemplo 01 — Todo en orden: el código síncrono

> 🎓 **Resultados de aprendizaje:** RA-1
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, **en el orden en que salió**, con el archivo y la línea de cada error. El orden se contrastó con Node cuando la página no usa el navegador y no depende de él (sin diferencias). Los **tiempos son aproximados**: lo que importa es el orden. Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Lucía atiende pedidos en Aroma. Cuando una tarea es **síncrona**, la siguiente espera a que la anterior termine: el orden en que escribís las instrucciones es el orden en que se ejecutan.

## 💻 Código

El archivo [`01-sincrono-paso-a-paso.html`](../recursos/ejemplos/01-sincrono-paso-a-paso.html) tiene este código dentro de `<script>`:

```js
function preparar(producto) {
  console.log('☕ Preparando ' + producto);
}

console.log('📥 Pedido 101 recibido');
preparar('Café');
console.log('🛵 Pedido 101 entregado');
```

## 🔍 Análisis paso a paso

1. **Una instrucción a la vez.** JavaScript ejecuta de arriba hacia abajo y no pasa a la línea siguiente hasta terminar la actual.
2. **Las llamadas también esperan.** Al llamar `preparar('Café')`, el programa entra en la función, la termina y recién entonces sigue con el mensaje de entrega.
3. **Previsible.** Si sabés el código, sabés el orden de salida: es el de la lectura.
4. **Es lo que venías haciendo.** Todos los ejemplos de las Clases 01 a 03 eran síncronos.

## ✅ Resultado esperado

Al abrir `01-sincrono-paso-a-paso.html`, la consola muestra:

```text
📥 Pedido 101 recibido
☕ Preparando Café
🛵 Pedido 101 entregado
```

- Una tarea **síncrona** se completa antes de que empiece la siguiente.
- El orden de ejecución coincide con el orden en que está escrito el código.
