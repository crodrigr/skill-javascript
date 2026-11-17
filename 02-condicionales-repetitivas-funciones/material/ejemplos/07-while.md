# 📘 Ejemplo 07 — El bucle `while`

> 🎓 **Resultados de aprendizaje:** RA-3
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome y se anotó lo que imprimió la consola, con el archivo y la línea de cada error. Los valores se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Lucía quiere mostrar una cuenta regresiva para el cierre de una oferta y sumar los números del 1 al 5, **sin escribir la misma línea muchas veces**. Un bucle repite un bloque mientras se cumpla una condición.

## 💻 Código

El archivo [`07-while.html`](../recursos/ejemplos/07-while.html) tiene este código dentro de `<script>`:

```js
let cuenta = 3;
while (cuenta > 0) {
  console.log('Faltan', cuenta);
  cuenta--;
}
console.log('¡Listo!');

let suma = 0;
let n = 1;
while (n <= 5) {
  suma += n;
  n++;
}
console.log('Suma del 1 al 5:', suma);

let precio = 10;
while (precio < 5) {
  console.log('Esta línea no se ejecuta nunca');
}
console.log('Fin');
```

## 🔍 Análisis paso a paso

1. **Forma:** `while (condición) { cuerpo }`. La condición se evalúa **antes de cada vuelta**; si es verdadera se ejecuta el cuerpo y se vuelve a evaluar.
2. **La variable de control.** `cuenta` empieza en `3` y `cuenta--` (restar uno, Clase 01) la acerca a `0`. Cuando la condición `cuenta > 0` es falsa, el bucle termina y sigue la línea de después: `¡Listo!`.
3. **Acumular un total.** `suma += n` agrega `n` a `suma` en cada vuelta: `1 + 2 + 3 + 4 + 5` da `15`.
4. **Puede no ejecutarse nunca.** Si la condición es falsa de entrada (`precio < 5` con `precio = 10`), el cuerpo se salta por completo.
5. **Regla de oro.** Dentro del cuerpo tiene que haber algo que **cambie la condición** (`cuenta--`, `n++`). Si no, el bucle nunca termina (Ejemplo 10).

## ✅ Resultado esperado

Al abrir `07-while.html`, la consola muestra:

```text
Faltan 3
Faltan 2
Faltan 1
¡Listo!
Suma del 1 al 5: 15
Fin
```

- El cuerpo se repite mientras la condición sea verdadera.
- Si la condición es falsa desde el principio, el cuerpo no se ejecuta.
