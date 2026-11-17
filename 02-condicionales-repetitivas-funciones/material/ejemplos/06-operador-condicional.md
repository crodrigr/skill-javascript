# 📘 Ejemplo 06 — El operador condicional `? :`

> 🎓 **Resultados de aprendizaje:** RA-2
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome y se anotó lo que imprimió la consola, con el archivo y la línea de cada error. Los valores se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Lucía necesita elegir entre **dos valores** según una condición, por ejemplo el texto del envío. Para eso JavaScript tiene el operador condicional, que es una expresión: devuelve un valor.

## 💻 Código

El archivo [`06-operador-condicional.html`](../recursos/ejemplos/06-operador-condicional.html) tiene este código dentro de `<script>`:

```js
const total = 13.5;

const envio = total >= 20 ? 'gratis' : 'con costo';
console.log('Envío:', envio);

console.log(`Total: ${total} (${total > 0 ? 'con productos' : 'vacío'})`);

// Se puede encadenar, pero se lee con dificultad
const tramo = total >= 50 ? 10 : total >= 20 ? 5 : 0;
console.log('Descuento:', tramo + '%');
```

## 🔍 Análisis paso a paso

1. **Forma:** `condición ? valorSiVerdadera : valorSiFalsa`. Se evalúa la condición; si es verdadera el resultado es el valor de la izquierda de los `:`, y si es falsa, el de la derecha.
2. **Es una expresión.** A diferencia de `if`, que es una sentencia, el operador condicional **devuelve un valor** que se puede guardar en una constante (`const envio = ...`) o usar dentro de una plantilla.
3. **Equivale a un `if`/`else`** que asigna un valor, pero en una línea y con `const` (sin necesidad de `let` y de asignar en cada rama).
4. **Encadenarlo funciona**, pero con más de dos opciones se vuelve difícil de leer. Para tres tramos de descuento, un `if`/`else if`/`else` es más claro.
5. **Cuándo usarlo.** Para elegir entre dos valores simples. Si cada camino tiene varias instrucciones, usá `if`.

## ✅ Resultado esperado

Al abrir `06-operador-condicional.html`, la consola muestra:

```text
Envío: con costo
Total: 13.5 (con productos)
Descuento: 0%
```

### 🔁 Probalo con otros datos

Se cambió una línea del primer script y se volvió a abrir la página:

- Si `total` pasa a `60`: `Envío: gratis` · `Total: 60 (con productos)` · `Descuento: 10%`
- Si `total` pasa a `0`: `Envío: con costo` · `Total: 0 (vacío)` · `Descuento: 0%`

- `condición ? A : B` devuelve `A` si la condición es verdadera y `B` si es falsa.
- Con más de dos opciones es más claro un `if`/`else if`/`else`.
