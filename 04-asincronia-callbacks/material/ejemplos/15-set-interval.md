# 📘 Ejemplo 15 — Repetir con setInterval y detenerlo

> 🎓 **Resultados de aprendizaje:** RA-6
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, **en el orden en que salió**, con el archivo y la línea de cada error. El orden se contrastó con Node cuando la página no usa el navegador y no depende de él (sin diferencias). Los **tiempos son aproximados**: lo que importa es el orden. Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Sofía quiere una cuenta regresiva de tres pasos que avise cuando el pedido está listo. `setInterval` repite un callback cada cierto tiempo **hasta que lo detengas**.

## 💻 Código

El archivo [`15-set-interval.html`](../recursos/ejemplos/15-set-interval.html) tiene este código dentro de `<script>`:

```js
let segundos = 3;

const id = setInterval(() => {
  console.log('⏳ Faltan ' + segundos + ' s');
  segundos = segundos - 1;
  if (segundos === 0) {
    clearInterval(id);
    console.log('🔔 ¡Tu pedido está listo!');
  }
}, 300);

console.log('Cuenta regresiva iniciada');
```

## 🔍 Análisis paso a paso

1. **`setInterval(función, milisegundos)`** ejecuta la función una y otra vez, cada vez que pasa ese tiempo.
2. **Devuelve un identificador,** como `setTimeout`, que se guarda en `id`.
3. **`clearInterval(id)`** lo detiene. Sin esa llamada, el intervalo se repite **para siempre**.
4. **El callback lleva la cuenta** en la variable `segundos` y se detiene a sí mismo cuando llega a cero.
5. **Resultado:** tres avisos exactos, y el mensaje final. El mensaje de «iniciada» sale primero porque es síncrono.
6. **Cuidado:** olvidar `clearInterval` deja una tarea repitiéndose para siempre; en una página real consume recursos.

## ✅ Resultado esperado

Al abrir `15-set-interval.html`, la consola muestra:

```text
Cuenta regresiva iniciada
⏳ Faltan 3 s
⏳ Faltan 2 s
⏳ Faltan 1 s
🔔 ¡Tu pedido está listo!
```

- `setInterval` repite un callback hasta que se lo detiene con `clearInterval`.
- El callback puede detener su propio intervalo guardando el identificador.
