# 📘 Ejemplo 08 — El bucle `do...while`

> 🎓 **Resultados de aprendizaje:** RA-3
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome y se anotó lo que imprimió la consola, con el archivo y la línea de cada error. Los valores se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Hay acciones que se deben hacer **al menos una vez**, por ejemplo mostrar un aviso y recién después preguntar si hay que repetirlo. Para eso existe `do...while`, que evalúa la condición **al final**.

## 💻 Código

El archivo [`08-do-while.html`](../recursos/ejemplos/08-do-while.html) tiene este código dentro de `<script>`:

```js
let intento = 0;
do {
  intento++;
  console.log('Intento', intento);
} while (intento < 3);

let stock = 0;
do {
  console.log('Se muestra una vez, aunque el stock sea', stock);
} while (stock > 0);

let reposicion = 0;
while (reposicion > 0) {
  console.log('Con while, esto no se muestra');
}
console.log('Fin');
```

## 🔍 Análisis paso a paso

1. **Forma:** `do { cuerpo } while (condición);`. Primero se ejecuta el cuerpo y **después** se evalúa la condición. Termina con punto y coma.
2. **Primer bucle:** hace tres vueltas (`intento` vale 1, 2 y 3). Después de la tercera, `intento < 3` es falso y termina.
3. **Segundo bucle:** la condición `stock > 0` es falsa desde el principio, pero el cuerpo **ya se ejecutó una vez**. Es la diferencia con `while`.
4. **Tercer bucle:** el mismo caso con `while` no ejecuta el cuerpo ni una vez.
5. **Cuándo conviene.** Cuando la acción debe ocurrir al menos una vez antes de decidir si se repite. En la práctica se usa menos que `while` y `for`.

## ✅ Resultado esperado

Al abrir `08-do-while.html`, la consola muestra:

```text
Intento 1
Intento 2
Intento 3
Se muestra una vez, aunque el stock sea 0
Fin
```

- `do...while` ejecuta el cuerpo al menos una vez.
- Con `while`, si la condición es falsa de entrada, el cuerpo no se ejecuta.
