# 📘 Ejemplo 11 — Una función también es un valor

> 🎓 **Resultados de aprendizaje:** RA-5
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, **en el orden en que salió**, con el archivo y la línea de cada error. El orden se contrastó con Node cuando la página no usa el navegador y no depende de él (sin diferencias). Los **tiempos son aproximados**: lo que importa es el orden. Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Antes de escribir callbacks hay que ver una idea clave: en JavaScript una función es un valor más. Se puede guardar en una variable y **pasar como argumento** a otra función.

## 💻 Código

El archivo [`11-funcion-como-valor.html`](../recursos/ejemplos/11-funcion-como-valor.html) tiene este código dentro de `<script>`:

```js
function saludar(nombre) {
  return 'Hola, ' + nombre;
}

const otra = saludar;
console.log(otra('Lucía'));

function aplicar(texto, transformar) {
  return transformar(texto);
}

console.log(aplicar('café', (t) => t.toUpperCase()));
console.log(aplicar('café', saludar));
console.log(typeof saludar);
```

## 🔍 Análisis paso a paso

1. **`const otra = saludar`** guarda la función (sin los paréntesis, no la llama). Ahora `otra` y `saludar` son la misma función.
2. **`aplicar(texto, transformar)`** recibe una función en el segundo parámetro y la usa con `transformar(texto)`.
3. **Se le puede pasar una función de flecha** (`(t) => t.toUpperCase()`) o una función con nombre (`saludar`).
4. **`aplicar` no sabe qué hace la función recibida:** solo sabe que puede llamarla. Eso la vuelve reutilizable.
5. **`typeof` de una función** da `'function'`.
6. **Una función que se le pasa a otra para que la llame es un *callback*.** `transformar` es un callback.

## ✅ Resultado esperado

Al abrir `11-funcion-como-valor.html`, la consola muestra:

```text
Hola, Lucía
CAFÉ
Hola, café
function
```

- Una función es un valor: se guarda en variables y se pasa como argumento.
- Una función que recibe a otra y la llama usa un **callback**.
