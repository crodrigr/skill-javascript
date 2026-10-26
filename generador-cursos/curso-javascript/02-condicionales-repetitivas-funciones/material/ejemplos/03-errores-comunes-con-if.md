# 📘 Ejemplo 03 — Errores comunes con `if`

> 🎓 **Resultados de aprendizaje:** RA-1
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome y se anotó lo que imprimió la consola, con el archivo y la línea de cada error. Los valores se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Lucía escribió tres decisiones que **no fallan con un error**, pero hacen cosas distintas de las que ella esperaba. Son los descuidos más comunes con `if`.

## 💻 Código

El archivo [`03-errores-comunes-con-if.html`](../recursos/ejemplos/03-errores-comunes-con-if.html) tiene este código dentro de `<script>`:

**Script 1**

```js
// 1. Una asignación (=) en lugar de una comparación (===)
let stock = 5;
if (stock = 0) {
  console.log('Sin stock');
} else {
  console.log('Hay stock:', stock);
}
```

**Script 2**

```js
// 2. Un punto y coma de más después del if
const cantidad = 0;
if (cantidad > 0); {
  console.log('Esto se ejecuta aunque la cantidad sea', cantidad);
}
```

**Script 3**

```js
// 3. Un if sin llaves y un else que se engancha con el if equivocado
const hayCafe = true;
const hayLeche = false;
if (hayCafe)
  if (hayLeche) console.log('Café con leche');
else console.log('Sin café');
```

## 🔍 Análisis paso a paso

1. **Error 1: `=` no compara, asigna.** `stock = 0` **guarda `0` en `stock`** y el resultado de esa expresión es `0`, que es un valor falso. Por eso entra al `else` y, además, `stock` quedó en `0`: se perdió el dato. Para comparar usá `===` (`stock === 0`).
2. **Error 2: el `;` después del `)`.** `if (cantidad > 0);` es un `if` con un cuerpo **vacío**. El bloque `{ ... }` que sigue ya no pertenece al `if`: es un bloque suelto que se ejecuta siempre.
3. **Error 3: sin llaves, el `else` se une al `if` más cercano.** La sangría engaña: el `else` pertenece al `if (hayLeche)`, no al `if (hayCafe)`. Como `hayLeche` es falso, muestra `Sin café` aunque sí hay café.
4. **Cómo evitarlos.** (1) Comparar siempre con `===`. (2) No poner `;` después de la condición. (3) Escribir **siempre** las llaves, incluso para una sola línea: MDN lo recomienda para evitar este tipo de confusión.
5. **Los tres scripts son independientes.** Cada `<script>` se ejecuta por separado; por eso no chocan los nombres de las constantes.

## ✅ Resultado esperado

Al abrir `03-errores-comunes-con-if.html`, la consola muestra:

```text
Hay stock: 0
Esto se ejecuta aunque la cantidad sea 0
Sin café
```

- Ninguno de los tres casos produce un error: el programa hace algo distinto de lo que se quería.
- Las llaves y el `===` evitan los tres.
