# 📘 Ejemplo 09 — El bucle `for`

> 🎓 **Resultados de aprendizaje:** RA-3
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome y se anotó lo que imprimió la consola, con el archivo y la línea de cada error. Los valores se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Cuando se sabe **cuántas veces** repetir algo, `for` junta en una sola línea el inicio, la condición y el avance. Lucía lo usa para imprimir la tabla del 3 y cuenta vueltas con `<` y `<=`.

## 💻 Código

### 📄 `09-for.html`

Código del archivo [`09-for.html`](../recursos/ejemplos/09-for.html) (lo que va dentro de `<script>`):

```js
for (let i = 1; i <= 5; i++) {
  console.log('3 x', i, '=', 3 * i);
}

let vueltas = 0;
for (let k = 0; k < 5; k++) {
  vueltas++;
}
console.log('k < 5 hace', vueltas, 'vueltas');

vueltas = 0;
for (let k = 0; k <= 5; k++) {
  vueltas++;
}
console.log('k <= 5 hace', vueltas, 'vueltas');

for (let j = 10; j > 0; j -= 3) {
  console.log('j vale', j);
}
```

### 📄 `09-for-alcance.html`

Código del archivo [`09-for-alcance.html`](../recursos/ejemplos/09-for-alcance.html) (lo que va dentro de `<script>`):

```js
for (let i = 1; i <= 3; i++) {
  console.log('Dentro del for, i vale', i);
}
console.log('Fuera del for, i vale', i);
```

## 🔍 Análisis paso a paso

1. **Tres partes entre paréntesis, separadas por `;`:** `for (inicio; condición; avance)`.
2. **Inicio** (`let i = 1`): se ejecuta **una sola vez**, antes de la primera vuelta. **Condición** (`i <= 5`): se evalúa antes de cada vuelta. **Avance** (`i++`): se ejecuta al **final** de cada vuelta, antes de volver a evaluar la condición.
3. **Orden de ejecución:** inicio → condición → cuerpo → avance → condición → cuerpo → avance → … hasta que la condición sea falsa.
4. **`<` frente a `<=`.** Para contar de `0` a `4` hacen falta cinco vueltas con `k < 5`; con `k <= 5` son seis. Un error de «una vuelta de más o de menos» es muy común.
5. **El avance puede ser otro.** `j -= 3` baja de a tres: `10`, `7`, `4`, `1`. Cuando `j` llega a `-2`, la condición `j > 0` es falsa y termina.
6. **Alcance de `let`.** La variable declarada en la cabecera (`i`) **solo existe dentro del `for`**. En `09-for-alcance.html`, usarla afuera da `ReferenceError: i is not defined` («`i` no está definida»), y el script se detiene en esa línea.

## ✅ Resultado esperado

Al abrir `09-for.html`, la consola muestra:

```text
3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
3 x 4 = 12
3 x 5 = 15
k < 5 hace 5 vueltas
k <= 5 hace 6 vueltas
j vale 10
j vale 7
j vale 4
j vale 1
```

Al abrir `09-for-alcance.html`, la consola muestra:

```text
Dentro del for, i vale 1
Dentro del for, i vale 2
Dentro del for, i vale 3
Uncaught ReferenceError: i is not defined (09-for-alcance.html:16)
```

- `k < 5` hace cinco vueltas y `k <= 5`, seis.
- La variable `let` de la cabecera no existe fuera del `for`.
