# 🧮 Operadores, números y cadenas

Curso **JavaScript** · Clase 01 · **Sesión 2**

---

## 🎯 Objetivos de la sesión

- 🔹 Usar los operadores y predecir el resultado.
- 🔹 Trabajar con enteros, decimales, `NaN` e infinito.
- 🔹 Crear y combinar cadenas.

> 📌 Se necesita de la sesión 1: consola, variables y `const`/`let`.

---

## ➕ Operadores aritméticos y precedencia

![Las familias de operadores ordenadas de mayor a menor precedencia: paréntesis, postfijos como n++, unarios como menos, no y typeof, potencia, multiplicación división y resto, suma y resta, desplazamientos, comparación de orden, igualdad, bits AND XOR y OR, lógicos AND y OR y el de coalescencia, y asignación. Abajo se resuelve 2 + 3 * 4 en dos pasos, que da 14.](../imagenes/operadores-y-precedencia.svg)

---

## 📝 Asignación compuesta

```js
let total = 10;
total += 5;    // total = total + 5   → 15
total *= 2;    // 30
total **= 2;   // 900
```

- `a op= b` equivale a `a = a op b`.
- Solo con `let` (una constante no se reasigna).

---

## 🔢 Binario y desplazamientos

![El número 5 escrito en 8 bits es 00000101. Desplazarlo 2 bits a la izquierda con menor menor da 00010100, que es 20: cada desplazamiento duplica el valor. El número menos 8 en 8 bits es 11111000; desplazarlo 1 bit a la derecha con mayor mayor conserva el signo y da 11111100, que es menos 4. Con mayor mayor mayor se rellena con ceros por la izquierda y el resultado es siempre positivo. Los números reales usan 32 bits; aquí se muestran 8 para que quepan.](../imagenes/binario-y-desplazamientos.svg)

---

## 🔣 Bits con asignación

- `&` AND · `|` OR · `^` XOR · `~` NOT.
- `permisos |= 0b010` **enciende** un bit.
- `permisos &= ~0b010` **lo apaga**.
- `0b101` es `5`.

---

## ⚖️ Lógicos de asignación

| Operador | Asigna si el valor actual es… |
|---|---|
| `\|\|=` | falso |
| `&&=` | verdadero |
| `??=` | `null` o `undefined` |

> 📌 ES2021 · *Widely available* desde septiembre de 2020.

---

## ⚖️ Comparación

- `===` y `!==`: valor **y** tipo (recomendados).
- `==` y `!=`: convierten tipos → resultados sorprendentes.
- `5 == '5'` es `true`; `5 === '5'` es `false`.
- `NaN == NaN` es `false`.

---

## 🔀 Operadores lógicos

- `&&` y `||` devuelven **uno de los operandos**.
- Cortocircuito: la derecha puede **no evaluarse**.
- `??` solo trata `null` y `undefined` como ausentes.
- `null ?? 0 || 5` → `SyntaxError`: usá paréntesis.

---

## 🔟 Números enteros y decimales

![Una recta numérica de menos infinito a más infinito. En el centro está el cero. A los lados, en menos y más 9007199254740991, están los límites de los enteros seguros. Más allá de esos límites los enteros pierden precisión. En los extremos están Infinity y menos Infinity. NaN no está en la recta: es el resultado de una operación sin resultado válido.](../imagenes/la-recta-de-los-numeros.svg)

---

## ❓ `NaN` e infinito

- `0 / 0` y `Number('abc')` → `NaN`; `NaN === NaN` → `false`.
- `1 / 0` → `Infinity`: dividir entre cero **no es un error**.
- Detectar: `Number.isNaN(x)` y `Number.isFinite(x)`.
- `0.1 + 0.2` → `0.30000000000000004`.

---

## ✂️ Cadenas

![La cadena 'Aroma' como cinco cajas con las letras A, r, o, m, a y sus posiciones 0, 1, 2, 3 y 4. Su longitud es 5. La posición 0 es la A y la posición 4 es la última a. La posición 10 no existe y da undefined. Abajo se muestra cómo el operador más une cadenas y cómo '5' + 3 da '53'.](../imagenes/la-cadena-y-sus-posiciones.svg)

---

## ⚠️ Errores comunes

- 🚫 `==` en lugar de `===`.
- 🚫 `'5' + 3` esperando `8`.
- 🚫 Comparar con `NaN` usando `===`.
- 🚫 Mostrar decimales sin redondear.

---

## ✅ Actividad, resumen y evaluación

- 🛠️ **Taller 02 — La caja de la tienda**, y los ejercicios **Intermedio 02**, **Intermedio 03** y **Desafío 01**.
- 🔹 Operadores: precedencia, asignación, bits, comparación y lógicos.
- 🔹 Decimales aproximados; `NaN` e infinito son valores, no errores.
- 🔹 Cadenas: posiciones desde `0` y `+` concatena.
- 🔹 Cierre: **Quiz 01** (16 ítems).
