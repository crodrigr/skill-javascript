# 📘 Ejemplo 13 — Funciones declarativas

> 🎓 **Resultados de aprendizaje:** RA-5
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome y se anotó lo que imprimió la consola, con el archivo y la línea de cada error. Los valores se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Lucía calcula `precio * cantidad` en muchos lugares del programa. En lugar de repetir la cuenta, la guarda **una vez** en una función con nombre y la reutiliza con distintos datos.

## 💻 Código

El archivo [`13-funcion-declarativa.html`](../recursos/ejemplos/13-funcion-declarativa.html) tiene este código dentro de `<script>`:

```js
function calcularTotal(precio, cantidad) {
  return precio * cantidad;
}

console.log(calcularTotal(4.5, 3));
console.log(calcularTotal(3.2, 2));

const totalCafe = calcularTotal(4.5, 4);
console.log('Total del café:', totalCafe);

function saludar(nombre) {
  return 'Hola, ' + nombre;
}
console.log(saludar('Lucía'));

function aplicaEnvioGratis(total) {
  if (total >= 20) {
    return true;
  }
  return false;
}
console.log(aplicaEnvioGratis(13.5), aplicaEnvioGratis(22.5));
```

## 🔍 Análisis paso a paso

1. **Declarar una función.** `function nombre(parámetros) { cuerpo }`. El nombre va en `camelCase` y suele ser un verbo: `calcularTotal`.
2. **Parámetros y argumentos.** `precio` y `cantidad` son los **parámetros**: nombres para los datos que la función recibe. Los valores con los que se la llama (`4.5` y `3`) son los **argumentos**; se asignan por posición.
3. **`return` devuelve un valor** a quien llamó a la función y la termina. Por eso `calcularTotal(4.5, 3)` «vale» `13.5` y se puede mostrar, guardar en una constante o usar dentro de otra cuenta.
4. **Llamar a la función** es escribir su nombre seguido de paréntesis con los argumentos. Declararla no ejecuta nada; la llamada, sí.
5. **Reutilizar.** La misma función sirve con `(4.5, 3)`, `(3.2, 2)` y `(4.5, 4)`: da `13.5`, `6.4` y `18`.
6. **`return` dentro de un `if`.** `aplicaEnvioGratis` devuelve `true` si el total llega a `20`; si no, el programa sigue y llega al segundo `return`. Una función termina en el primer `return` que se ejecuta.

## ✅ Resultado esperado

Al abrir `13-funcion-declarativa.html`, la consola muestra:

```text
13.5
6.4
Total del café: 18
Hola, Lucía
false true
```

- Una función se declara una vez y se llama las veces que haga falta.
- El valor que sale de `return` se puede mostrar o guardar.
