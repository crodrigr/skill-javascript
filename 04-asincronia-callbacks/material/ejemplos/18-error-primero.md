# 📘 Ejemplo 18 — El patrón «error primero»

> 🎓 **Resultados de aprendizaje:** RA-7
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, **en el orden en que salió**, con el archivo y la línea de cada error. El orden se contrastó con Node cuando la página no usa el navegador y no depende de él (sin diferencias). Los **tiempos son aproximados**: lo que importa es el orden. Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Una reserva puede salir bien o mal (el producto no existe o está agotado). Por convención, el callback recibe **primero el error** y después el resultado: si hay error, se atiende; si no, se usa el resultado.

## 💻 Código

El archivo [`18-error-primero.html`](../recursos/ejemplos/18-error-primero.html) tiene este código dentro de `<script>`:

```js
const stock = { 'Café': 12, 'Té': 0 };

function reservar(producto, alTerminar) {
  setTimeout(() => {
    if (stock[producto] === undefined) {
      alTerminar('No existe: ' + producto);
      return;
    }
    if (stock[producto] === 0) {
      alTerminar('Agotado: ' + producto);
      return;
    }
    alTerminar(null, 'Reservado: ' + producto);
  }, 200);
}

function mostrar(error, resultado) {
  if (error !== null) {
    console.log('❌ ' + error);
    return;
  }
  console.log('✅ ' + resultado);
}

reservar('Café', mostrar);
reservar('Té', mostrar);
reservar('Pizza', mostrar);
console.log('Pedidos enviados');
```

La segunda página, [`18-error-primero-error.html`](../recursos/ejemplos/18-error-primero-error.html) (un error dentro de un callback asíncrono), tiene este código dentro de `<script>`:

```js
const precios = {};

console.log('Programo la consulta');

setTimeout(() => {
  console.log(precios.cafe.valor);
}, 200);

console.log('El código terminó sin errores');
```

## 🔍 Análisis paso a paso

1. **Convención «error primero»:** el callback tiene la forma `(error, resultado)`. Si todo salió bien, `error` es `null` y `resultado` trae el dato.
2. **`mostrar` revisa primero el error.** Si hay, lo muestra y termina con `return`; si no, usa el resultado.
3. **Cada caso llama al callback una sola vez** y termina con `return`. Llamarlo dos veces (o ninguna) produce resultados duplicados o un programa que nunca responde.
4. **Por qué no se usa `return` para el error:** como la tarea es asíncrona, quien llamó a la función ya terminó cuando el error ocurre. La única vía para avisarle es el callback.
5. **La segunda página** muestra lo que pasa si no se atiende un error: ocurre **después** de que el código terminó, y el error aparece solo en la consola. No hay forma de capturarlo desde el código que programó el temporizador.
6. **Aquí los errores son textos** para mantenerlo simple; otras bibliotecas usan objetos de error (lo veremos más adelante).

## ✅ Resultado esperado

Al abrir `18-error-primero.html`, la consola muestra:

```text
Pedidos enviados
✅ Reservado: Café
❌ Agotado: Té
❌ No existe: Pizza
```

Al abrir `18-error-primero-error.html`, la consola muestra:

```text
Programo la consulta
El código terminó sin errores
Uncaught TypeError: Cannot read properties of undefined (reading 'valor') (18-error-primero-error.html:18)
```

- Patrón «error primero»: `(error, resultado)`; `error` vale `null` si todo salió bien.
- Un callback debe llamarse exactamente una vez.
