# 📘 Ejemplo 10 — Dos modelos de cafetería

> 🎓 **Resultados de aprendizaje:** RA-2
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, **en el orden en que salió**, con el archivo y la línea de cada error. El orden se contrastó con Node cuando la página no usa el navegador y no depende de él (sin diferencias). Los **tiempos son aproximados**: lo que importa es el orden. Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Aroma probó dos formas de atender. En la **bloqueante**, el cajero se queda esperando a que cada café esté listo antes de atender al siguiente. En la **no bloqueante**, toma el pedido, sigue con el próximo y avisa cuando está listo.

## 💻 Código

El archivo [`10-bloqueante-o-no-bloqueante.html`](../recursos/ejemplos/10-bloqueante-o-no-bloqueante.html) tiene este código dentro de `<script>`:

```js
function atenderBloqueando(cliente) {
  console.log('🧍 Atiende a ' + cliente + ' y se queda esperando');
  for (let i = 0; i < 200000000; i++) { }
  console.log('✅ ' + cliente + ' recibió su café');
}

function atenderSinBloquear(cliente) {
  console.log('🧍 Toma el pedido de ' + cliente + ' y sigue con el próximo');
  setTimeout(() => {
    console.log('✅ ' + cliente + ' recibió su café');
  }, 300);
}

console.log('--- Modelo bloqueante ---');
atenderBloqueando('Lucía');
atenderBloqueando('Marcos');

console.log('--- Modelo no bloqueante ---');
atenderSinBloquear('Sofía');
atenderSinBloquear('Diego');
```

## 🔍 Análisis paso a paso

1. **Bloqueante:** Marcos no es atendido hasta que Lucía recibe su café. La espera de uno retrasa al otro.
2. **No bloqueante:** se toman los dos pedidos enseguida y los avisos llegan después, cuando se cumple cada tiempo.
3. **Lo mismo ocurre entre lenguajes.** Algunos lenguajes (o bibliotecas) esperan en cada operación lenta —como leer un archivo o consultar una red— y otros delegan la espera y siguen. JavaScript está diseñado para lo segundo.
4. **No es mejor «siempre».** El modelo bloqueante es más fácil de leer porque el orden coincide con el código; el no bloqueante aprovecha mejor el tiempo y evita congelar la interfaz, pero exige pensar en callbacks.
5. **Esta clase** no usa otros lenguajes: lo importante es entender la diferencia y por qué JavaScript elige no bloquear.

## ✅ Resultado esperado

Al abrir `10-bloqueante-o-no-bloqueante.html`, la consola muestra:

```text
--- Modelo bloqueante ---
🧍 Atiende a Lucía y se queda esperando
✅ Lucía recibió su café
🧍 Atiende a Marcos y se queda esperando
✅ Marcos recibió su café
--- Modelo no bloqueante ---
🧍 Toma el pedido de Sofía y sigue con el próximo
🧍 Toma el pedido de Diego y sigue con el próximo
✅ Sofía recibió su café
✅ Diego recibió su café
```

- **Bloqueante:** el programa espera a que la operación termine. **No bloqueante:** el programa sigue y recibe el resultado después.
- JavaScript es no bloqueante en sus operaciones de espera (temporizadores, eventos, red).
