# 📘 Ejemplo 12 — Callbacks que se ejecutan enseguida

> 🎓 **Resultados de aprendizaje:** RA-5
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, **en el orden en que salió**, con el archivo y la línea de cada error. El orden se contrastó con Node cuando la página no usa el navegador y no depende de él (sin diferencias). Los **tiempos son aproximados**: lo que importa es el orden. Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Ya usaste callbacks sin saberlo: el que le pasabas a `forEach` o `filter` en la Clase 03. Esos callbacks son **síncronos**: se ejecutan mientras el método trabaja, antes de que el programa siga.

## 💻 Código

El archivo [`12-callback-sincrono.html`](../recursos/ejemplos/12-callback-sincrono.html) tiene este código dentro de `<script>`:

```js
const precios = [4.5, 3.2, 1.8];

precios.forEach((precio) => console.log('Precio: $' + precio));

const caros = precios.filter((p) => p > 3);
console.log(caros);

function repetir(veces, accion) {
  for (let i = 1; i <= veces; i++) {
    accion(i);
  }
}

console.log('Antes');
repetir(3, (n) => console.log('Vuelta ' + n));
console.log('Después');
```

## 🔍 Análisis paso a paso

1. **`forEach` y `filter` llaman a tu función por cada elemento** y no terminan hasta haberla llamado con todos.
2. **`repetir` es un callback propio:** recibe una función (`accion`) y la llama tres veces, con `1`, `2` y `3`.
3. **Es síncrono:** `Vuelta 1`, `Vuelta 2` y `Vuelta 3` salen **entre** `Antes` y `Después`, en orden de escritura.
4. **Diferencia con `setTimeout`:** el callback de un `setTimeout` se ejecuta **después** de todo el código síncrono; el de `repetir` se ejecuta **durante** la llamada.
5. **Moraleja:** tener un callback no vuelve asíncrono a un programa; lo asíncrono es *cuándo* se llama.

## ✅ Resultado esperado

Al abrir `12-callback-sincrono.html`, la consola muestra:

```text
Precio: $4.5
Precio: $3.2
Precio: $1.8
(2) [4.5, 3.2]
Antes
Vuelta 1
Vuelta 2
Vuelta 3
Después
```

- Un callback **síncrono** se llama durante la ejecución de la función que lo recibe.
- Un callback **asíncrono** se llama después, cuando ocurre algo (pasa el tiempo, un clic).
