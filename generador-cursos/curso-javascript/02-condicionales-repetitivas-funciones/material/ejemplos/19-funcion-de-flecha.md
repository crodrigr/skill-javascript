# 📘 Ejemplo 19 — Funciones de flecha

> 🎓 **Resultados de aprendizaje:** RA-8
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome y se anotó lo que imprimió la consola, con el archivo y la línea de cada error. Los valores se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Lucía quiere escribir funciones cortas. Las **funciones de flecha** (`=>`) permiten definir una función de expresión con menos código.

## 💻 Código

El archivo [`19-funcion-de-flecha.html`](../recursos/ejemplos/19-funcion-de-flecha.html) tiene este código dentro de `<script>`:

```js
const calcularTotal = (precio, cantidad) => precio * cantidad;
console.log(calcularTotal(4.5, 3));

const doble = n => n * 2;
console.log(doble(21));

const saludo = () => 'Hola, Aroma';
console.log(saludo());

const conLlaves = (precio, cantidad) => {
  const subtotal = precio * cantidad;
  return subtotal;
};
console.log(conLlaves(4.5, 3));

const sinReturn = (precio, cantidad) => {
  precio * cantidad;
};
console.log(sinReturn(4.5, 3));

const tipoEnvio = total => total >= 20 ? 'gratis' : 'con costo';
console.log(tipoEnvio(13.5), tipoEnvio(22.5));
```

## 🔍 Análisis paso a paso

1. **Forma básica:** `(parámetros) => expresión`. Es una función de expresión: se guarda en una constante y se llama igual.
2. **Retorno implícito.** Sin llaves, lo que está a la derecha de `=>` **es** el valor que devuelve la función; no se escribe `return`.
3. **Un parámetro simple** puede ir sin paréntesis (`n => n * 2`). Con **cero** parámetros los paréntesis son obligatorios (`() => ...`), y con **dos o más**, también.
4. **Con llaves** el cuerpo es un bloque normal: hay que escribir `return` para devolver algo.
5. **El error típico.** Con llaves y sin `return` (`sinReturn`), la cuenta se calcula pero no se devuelve: la llamada da `undefined`.
6. **Cuándo conviene.** Para funciones cortas de una expresión. Si la función es larga o tiene varias decisiones, una declarativa se lee mejor.
7. **Fuera de alcance:** las flechas se comportan distinto con `this`; lo veremos más adelante.

## ✅ Resultado esperado

Al abrir `19-funcion-de-flecha.html`, la consola muestra:

```text
13.5
42
Hola, Aroma
13.5
undefined
con costo gratis
```

- Sin llaves, la flecha devuelve el valor de la expresión.
- Con llaves hace falta `return`; sin él, la función devuelve `undefined`.
