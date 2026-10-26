# 📘 Ejemplo 11 — `break`: salir del bucle

> 🎓 **Resultados de aprendizaje:** RA-4
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome y se anotó lo que imprimió la consola, con el archivo y la línea de cada error. Los valores se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Lucía busca el primer número del 1 al 20 que sea múltiplo de 7. Cuando lo encuentra no tiene sentido seguir probando: usa `break` para **salir del bucle** de inmediato.

## 💻 Código

El archivo [`11-break.html`](../recursos/ejemplos/11-break.html) tiene este código dentro de `<script>`:

```js
for (let n = 1; n <= 20; n++) {
  console.log('Probando', n);
  if (n % 7 === 0) {
    console.log('Primer múltiplo de 7:', n);
    break;
  }
}
console.log('Fin de la búsqueda');

// ¿Cuántos cafés de 4 alcanzan con un saldo de 10?
let saldo = 10;
let cafes = 0;
while (true) {
  if (saldo < 4) {
    break;
  }
  saldo -= 4;
  cafes++;
}
console.log('Cafés:', cafes, '— sobran', saldo);
```

## 🔍 Análisis paso a paso

1. **`break` termina el bucle** que lo contiene y el programa sigue con la primera línea que viene después del bucle (`Fin de la búsqueda`).
2. **En el primer bucle** la condición de `for` permitiría llegar hasta `20`, pero al llegar a `7` (`7 % 7` es `0`) se ejecuta `break` y no se prueba `8`, `9`, etc.
3. **Siempre dentro de una condición.** Un `break` sin `if` cortaría el bucle en la primera vuelta.
4. **En el segundo bucle** `while (true)` no tiene condición de parada propia: la parada la decide el `if` (`saldo < 4`). Con `10` de saldo se compran dos cafés (`10 - 4 - 4`) y sobran `2`.
5. **`break` solo sale del bucle más interno.** Con bucles dentro de bucles solo cortaría el de adentro (los bucles anidados no se practican en esta clase).
6. **Fuera de alcance:** `break` también puede salir de un bloque con una etiqueta (*label*); lo veremos más adelante.

## ✅ Resultado esperado

Al abrir `11-break.html`, la consola muestra:

```text
Probando 1
Probando 2
Probando 3
Probando 4
Probando 5
Probando 6
Probando 7
Primer múltiplo de 7: 7
Fin de la búsqueda
Cafés: 2 — sobran 2
```

- `break` detiene el bucle y sigue con la línea de después.
- En el `for`, el bucle probó solo del `1` al `7`.
