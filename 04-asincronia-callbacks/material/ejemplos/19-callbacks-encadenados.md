# 📘 Ejemplo 19 — Tareas encadenadas con callbacks

> 🎓 **Resultados de aprendizaje:** RA-8
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, **en el orden en que salió**, con el archivo y la línea de cada error. El orden se contrastó con Node cuando la página no usa el navegador y no depende de él (sin diferencias). Los **tiempos son aproximados**: lo que importa es el orden. Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Un pedido de Aroma pasa por cuatro pasos y cada uno depende del anterior: **validar → cobrar → preparar → entregar**. Como cada paso es asíncrono, el siguiente se ejecuta dentro del callback del anterior.

## 💻 Código

El archivo [`19-callbacks-encadenados.html`](../recursos/ejemplos/19-callbacks-encadenados.html) tiene este código dentro de `<script>`:

```js
function validar(pedido, siguiente) {
  setTimeout(() => {
    console.log('✅ Validado');
    siguiente(null, pedido);
  }, 300);
}

function cobrar(pedido, siguiente) {
  setTimeout(() => {
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

const pedido = { numero: 101, cliente: 'Lucía', total: 6.7 };
console.log('📥 Pedido ' + pedido.numero + ' recibido');

validar(pedido, (e1, p1) => {
  cobrar(p1, (e2, p2) => {
    preparar(p2, (e3, p3) => {
      entregar(p3, (e4, p4) => {
        console.log('🏁 Pedido ' + p4.numero + ' terminado');
      });
    });
  });
});
```

## 🔍 Análisis paso a paso

1. **Cada paso recibe un `siguiente`** y lo llama cuando termina, con `null` como error y el pedido como resultado.
2. **Para ejecutar los pasos en orden** hay que anidar: `cobrar` solo se llama dentro del callback de `validar`, `preparar` dentro del de `cobrar`, y así.
3. **Los tiempos se suman:** el pedido tarda 300 + 500 + 800 + 200 = 1800 ms en completarse.
4. **El código «baja» hacia la derecha:** con cuatro pasos ya hay cuatro niveles de sangría. Con diez, la lectura se vuelve muy difícil. Esto se conoce como **infierno de callbacks** (*callback hell*) o «pirámide del destino».
5. **Los errores `e1`, `e2`… no se atienden** en esta versión; en el Ejemplo 20 se corrige.
6. **Se puede mejorar** dándole nombre a cada callback, como en el ejemplo siguiente. Más adelante, las promesas (*promises*) ofrecen una forma más cómoda; las vemos en otro módulo.

## ✅ Resultado esperado

Al abrir `19-callbacks-encadenados.html`, la consola muestra:

```text
📥 Pedido 101 recibido
✅ Validado
💳 Cobrado $6.7
☕ Preparado
🛵 Entregado
🏁 Pedido 101 terminado
```

- Para encadenar tareas asíncronas con callbacks, cada paso se llama dentro del anterior.
- El anidamiento excesivo se llama **infierno de callbacks**.
