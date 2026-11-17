# 📘 Ejemplo 19 — Buscar un valor: `indexOf` e `includes`

> 🎓 **Resultados de aprendizaje:** RA-9
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome y se anotó lo que imprimió la consola, con el archivo y la línea de cada error. Los valores se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador. La consola real muestra los objetos como un árbol que se despliega; aquí se escriben en una sola línea.

## 🧱 Situación inicial

Lucía quiere saber si un producto está en la lista y en qué posición. Para valores simples (textos y números), hay dos métodos.

## 💻 Código

El archivo [`19-busqueda-basica.html`](../recursos/ejemplos/19-busqueda-basica.html) tiene este código dentro de `<script>`:

```js
const productos = ['Café', 'Té', 'Galleta', 'Café'];

console.log(productos.indexOf('Café'), productos.indexOf('Té'), productos.indexOf('Scone'));
console.log(productos.includes('Galleta'), productos.includes('Scone'));

if (productos.indexOf('Scone') === -1) {
  console.log('Scone no está en la lista');
}

console.log(productos.includes('café'));
console.log([NaN].includes(NaN), [NaN].indexOf(NaN));
```

## 🔍 Análisis paso a paso

1. **`indexOf(valor)`** devuelve la **posición** de la primera coincidencia, o **`-1`** si no está. `'Café'` aparece dos veces, pero devuelve `0` (la primera).
2. **`includes(valor)`** devuelve `true` o `false`: responde «¿está?» sin decir dónde. Es lo más claro para preguntar si algo existe.
3. **Comparación estricta.** Distingue mayúsculas: `'café'` no está. Compara con `===`, así que no encuentra objetos «iguales» (solo el mismo objeto).
4. **`-1` no es una posición.** Para saber si no está, se compara con `-1`.
5. **El caso especial `NaN`.** `includes` lo encuentra (`true`), pero `indexOf` no (`-1`), porque `NaN === NaN` es `false`.
6. **Para buscar objetos o por condición,** estos dos métodos no alcanzan: se usa `find` (Ejemplo 20).

## ✅ Resultado esperado

Al abrir `19-busqueda-basica.html`, la consola muestra:

```text
0 1 -1
true false
Scone no está en la lista
false
true -1
```

- `indexOf` devuelve la posición o `-1`; `includes` devuelve `true` o `false`.
- Ambos comparan con `===` y distinguen mayúsculas.
