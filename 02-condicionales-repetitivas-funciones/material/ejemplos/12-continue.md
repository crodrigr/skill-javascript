# 📘 Ejemplo 12 — `continue`: saltar una vuelta

> 🎓 **Resultados de aprendizaje:** RA-4
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome y se anotó lo que imprimió la consola, con el archivo y la línea de cada error. Los valores se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Lucía quiere mostrar solo los números impares del 1 al 6. Cuando un número es par no hay que cortar el bucle: hay que **saltar esa vuelta** y seguir con la siguiente.

## 💻 Código

El archivo [`12-continue.html`](../recursos/ejemplos/12-continue.html) tiene este código dentro de `<script>`:

```js
for (let n = 1; n <= 6; n++) {
  if (n % 2 === 0) {
    continue;
  }
  console.log('Impar:', n);
}
console.log('Fin del for');

let i = 0;
while (i < 5) {
  i++;
  if (i === 3) {
    continue;
  }
  console.log('i vale', i);
}
console.log('Fin del while');
```

### ⚠️ `continue` en un `while` sin avanzar (no lo ejecutes)

```js
let i = 0;
while (i < 5) {
  if (i === 3) {
    continue;      // salta al comienzo sin llegar a i++ : i se queda en 3
  }
  i++;
}
```

Cuando `i` llega a `3`, `continue` vuelve a evaluar la condición **sin pasar por `i++`**: `i` no cambia y el bucle nunca termina. En la verificación de este material, la página con este código dio `SIN RESPUESTA (¿bucle infinito?)`.

## 🔍 Análisis paso a paso

1. **`continue` salta el resto de la vuelta actual** y vuelve a evaluar el bucle. A diferencia de `break`, el bucle **no termina**.
2. **En el `for`**, después de `continue` se ejecuta el avance (`n++`) y se evalúa la condición. Por eso los pares se saltan y los impares se muestran: `1`, `3`, `5`.
3. **En el `while`**, después de `continue` se vuelve a evaluar la condición. Como `i++` está **antes** del `if`, `i` siempre avanza y el `3` se salta sin problemas: `1`, `2`, `4`, `5`.
4. **El riesgo.** Si el avance está **después** del `continue` (bloque de arriba), la vuelta se salta sin avanzar y aparece un bucle infinito.
5. **`break` y `continue` en una frase.** `break`: «dejo de repetir». `continue`: «dejo esta vuelta y sigo con la próxima».

## ✅ Resultado esperado

Al abrir `12-continue.html`, la consola muestra:

```text
Impar: 1
Impar: 3
Impar: 5
Fin del for
i vale 1
i vale 2
i vale 4
i vale 5
Fin del while
```

- `continue` salta solo la vuelta actual.
- En un `while`, el avance debe ocurrir antes del `continue`.
