# 📘 Ejemplo 08 — El return olvidado

> 🎓 **Resultados de aprendizaje:** RA-3
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, **en el orden en que salió**, con el archivo y la línea de cada error. El orden se contrastó con Node cuando la página no usa el navegador ni tiene errores a propósito (sin diferencias). Los ejemplos **no imprimen objetos `Promise`**: la consola real muestra su estado, pero aquí se observa con `.then()`, `.catch()` y `.finally()`. Los **tiempos son aproximados**: lo que importa es el orden. Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Sofía encadenó dos pasos, pero el segundo recibió `undefined`. Olvidó el `return` dentro del `.then()`: sin `return`, la cadena **no espera** la promesa del paso anterior ni recibe su valor.

## 💻 Código

El archivo [`08-olvidar-return.html`](../recursos/ejemplos/08-olvidar-return.html) tiene este código dentro de `<script>`:

```js
function sumarUno(n) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(n + 1), 100);
  });
}

sumarUno(1)
  .then((v) => {
    console.log('Sin return, paso 1: ' + v);
    sumarUno(v);
  })
  .then((v) => {
    console.log('Sin return, paso 2 recibió: ' + v);
  })
  .then(() => sumarUno(1))
  .then((v) => {
    console.log('Con return, paso 1: ' + v);
    return sumarUno(v);
  })
  .then((v) => {
    console.log('Con return, paso 2 recibió: ' + v);
  });
```

## 🔍 Análisis paso a paso

1. **Sin `return`:** el primer `.then()` llama a `sumarUno(v)` pero no devuelve su promesa. La función devuelve `undefined`, y el paso 2 se ejecuta enseguida con `undefined`.
2. **Con `return`:** el segundo bloque devuelve la promesa de `sumarUno(v)`; la cadena **espera** a que se cumpla y el paso siguiente recibe su valor (`3`).
3. **Regla:** dentro de un `.then()`, si hay otra tarea asíncrona, **devolvela** con `return`.
4. **Atención:** una flecha de una sola expresión (`.then(() => sumarUno(1))`) ya devuelve su resultado; con llaves, hay que escribir `return`.
5. **Anidar los `.then()` dentro de otros** (un `.then()` dentro del `.then()`) vuelve a crear la pirámide de la Clase 04: la cadena plana con `return` es la forma correcta.

## ✅ Resultado esperado

Al abrir `08-olvidar-return.html`, la consola muestra:

```text
Sin return, paso 1: 2
Sin return, paso 2 recibió: undefined
Con return, paso 1: 2
Con return, paso 2 recibió: 3
```

- Sin `return`, el paso siguiente recibe `undefined` y no espera.
- Devolvé con `return` la promesa de la tarea que sigue.
