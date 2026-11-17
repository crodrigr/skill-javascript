# 📘 Ejemplo 20 — El mismo pedido, sin pirámide

> 🎓 **Resultados de aprendizaje:** RA-8, RA-9
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, **en el orden en que salió**, con el archivo y la línea de cada error. El orden se contrastó con Node cuando la página no usa el navegador y no depende de él (sin diferencias). Los **tiempos son aproximados**: lo que importa es el orden. Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Sofía reorganizó el flujo del pedido: en lugar de anidar callbacks anónimos, le dio **nombre a cada paso**. El resultado es el mismo, pero se lee de arriba hacia abajo y atiende los errores en un solo lugar.

## 💻 Código

El archivo [`20-pedido-con-funciones-con-nombre.html`](../recursos/ejemplos/20-pedido-con-funciones-con-nombre.html) tiene este código dentro de `<script>`:

```js
function validar(pedido, siguiente) {
  setTimeout(() => {
    console.log('✅ Validado');
    siguiente(null, pedido);
  }, 300);
}

function cobrar(pedido, siguiente) {
  setTimeout(() => {
    if (pedido.tarjetaValida === false) {
      siguiente('Tarjeta rechazada');
      return;
    }
    console.log('💳 Cobrado $' + pedido.total);
    siguiente(null, pedido);
  }, 500);
}

function preparar(pedido, siguiente) {
  setTimeout(() => {
    console.log('☕ Preparado');
    siguiente(null, pedido);
  }, 800);
}

function entregar(pedido, siguiente) {
  setTimeout(() => {
    console.log('🛵 Entregado');
    siguiente(null, pedido);
  }, 200);
}

function fallar(error) {
  console.log('❌ El pedido se detuvo: ' + error);
}

function alEntregar(error, pedido) {
  if (error !== null) {
    fallar(error);
    return;
  }
  console.log('🏁 Pedido ' + pedido.numero + ' terminado');
}

function alPreparar(error, pedido) {
  if (error !== null) {
    fallar(error);
    return;
  }
  entregar(pedido, alEntregar);
}

function alCobrar(error, pedido) {
  if (error !== null) {
    fallar(error);
    return;
  }
  preparar(pedido, alPreparar);
}

function alValidar(error, pedido) {
  if (error !== null) {
    fallar(error);
    return;
  }
  cobrar(pedido, alCobrar);
}

const pedido = { numero: 101, cliente: 'Lucía', total: 6.7 };
console.log('📥 Pedido ' + pedido.numero + ' recibido');
validar(pedido, alValidar);
```

La segunda página, [`20-pedido-con-funciones-con-nombre-fallo.html`](../recursos/ejemplos/20-pedido-con-funciones-con-nombre-fallo.html) (el pedido 102 con la tarjeta rechazada), tiene el mismo código; solo cambia el pedido:

```js
const pedido = { numero: 102, cliente: 'Marcos', total: 6.7, tarjetaValida: false };
```

## 🔍 Análisis paso a paso

1. **Cada paso tiene su función con nombre:** `alValidar`, `alCobrar`, `alPreparar` y `alEntregar` dicen qué hacer cuando termina el paso anterior.
2. **Se lee de arriba hacia abajo,** sin sangría creciente. El flujo se arma pasando el *nombre* de la función (no se la llama).
3. **Los errores se atienden en un solo lugar:** cada función revisa el error y, si lo hay, llama a `fallar` y **no continúa**.
4. **La segunda página** ejecuta el pedido 102 con `tarjetaValida: false`: se valida, el cobro falla y los pasos siguientes **no** se ejecutan.
5. **El resultado es el mismo que en el Ejemplo 19** para el pedido 101, pero el código es más fácil de leer, probar y modificar.
6. **Esto es el cierre del módulo:** los callbacks funcionan, pero encadenar muchos pasos se vuelve incómodo. En el módulo siguiente vemos las promesas y `async`/`await`, que resuelven justamente eso.

## ✅ Resultado esperado

Al abrir `20-pedido-con-funciones-con-nombre.html`, la consola muestra:

```text
📥 Pedido 101 recibido
✅ Validado
💳 Cobrado $6.7
☕ Preparado
🛵 Entregado
🏁 Pedido 101 terminado
```

Al abrir `20-pedido-con-funciones-con-nombre-fallo.html`, la consola muestra:

```text
📥 Pedido 102 recibido
✅ Validado
❌ El pedido se detuvo: Tarjeta rechazada
```

- Dar nombre a los callbacks reduce el anidamiento y facilita atender los errores.
- Si un paso falla, los siguientes no deben ejecutarse.
