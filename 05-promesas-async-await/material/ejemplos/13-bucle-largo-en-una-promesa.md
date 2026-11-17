# 📘 Ejemplo 13 — Una promesa no impide bloquear

> 🎓 **Resultados de aprendizaje:** RA-5
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, **en el orden en que salió**, con el archivo y la línea de cada error. El orden se contrastó con Node cuando la página no usa el navegador ni tiene errores a propósito (sin diferencias). Los ejemplos **no imprimen objetos `Promise`**: la consola real muestra su estado, pero aquí se observa con `.then()`, `.catch()` y `.finally()`. Los **tiempos son aproximados**: lo que importa es el orden. Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Marcos creyó que, por usar una promesa, su bucle largo no bloquearía la página. Pero el ejecutor corre **en el mismo hilo**: un bucle largo adentro bloquea igual.

## 💻 Código

El archivo [`13-bucle-largo-en-una-promesa.html`](../recursos/ejemplos/13-bucle-largo-en-una-promesa.html) tiene este código dentro de `<script>`:

```js
console.log('1. Antes de crear la promesa');

new Promise((resolve) => {
  console.log('2. El ejecutor empieza el bucle largo');
  for (let i = 0; i < 300000000; i++) { }
  console.log('3. El ejecutor terminó el bucle');
  resolve('listo');
}).then((valor) => console.log('5. .then: ' + valor));

console.log('4. Después de crear la promesa');
```

## 🔍 Análisis paso a paso

1. **El ejecutor es síncrono:** el bucle corre antes de que el programa llegue al mensaje `4`.
2. **Mientras el bucle trabaja,** el hilo está ocupado: la página no responde (como en la Clase 04).
3. **La promesa no «mueve» el trabajo a otro lado:** solo representa un resultado futuro; el trabajo pesado sigue ejecutándose en el hilo.
4. **El `.then()` espera** a que termine todo el código síncrono (`5`).
5. **Para no bloquear,** lo que se espera tiene que ser una operación que el navegador gestione por su cuenta (un temporizador, la red) y no un cálculo largo escrito en JavaScript.

## ✅ Resultado esperado

Al abrir `13-bucle-largo-en-una-promesa.html`, la consola muestra:

```text
1. Antes de crear la promesa
2. El ejecutor empieza el bucle largo
3. El ejecutor terminó el bucle
4. Después de crear la promesa
5. .then: listo
```

- Una promesa no vuelve no bloqueante a un bucle largo dentro de su ejecutor.
- El trabajo pesado en JavaScript sigue bloqueando el hilo.
