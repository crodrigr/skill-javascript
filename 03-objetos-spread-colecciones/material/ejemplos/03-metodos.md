# 📘 Ejemplo 03 — Métodos de un objeto

> 🎓 **Resultados de aprendizaje:** RA-2
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome y se anotó lo que imprimió la consola, con el archivo y la línea de cada error. Los valores se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador. La consola real muestra los objetos como un árbol que se despliega; aquí se escriben en una sola línea.

## 🧱 Situación inicial

Lucía quiere que el producto «sepa» calcular su precio con IVA y armar su descripción. Un **método** es una función guardada como propiedad de un objeto.

## 💻 Código

El archivo [`03-metodos.html`](../recursos/ejemplos/03-metodos.html) tiene este código dentro de `<script>`:

```js
const producto = {
  nombre: 'Café',
  precio: 4.5,
  precioConIva: function () {
    return this.precio * 1.21;
  },
  descripcion() {
    return `${this.nombre}: $${this.precio}`;
  }
};

console.log(producto.precioConIva());
console.log(producto.descripcion());
console.log(typeof producto.descripcion);
console.log(producto);
```

## 🔍 Análisis paso a paso

1. **Un método es una función dentro de un objeto.** Se escribe como cualquier propiedad, pero el valor es una función.
2. **Dos formas.** `precioConIva: function () { ... }` es la forma completa (una función de expresión como valor). `descripcion() { ... }` es la **forma abreviada**, más corta y la que más se usa.
3. **Se llama con paréntesis:** `producto.precioConIva()`. Sin paréntesis, `producto.descripcion` es la función misma, no su resultado.
4. **`this`.** Dentro de un método, `this.precio` significa «el `precio` de **este** objeto». Por ahora leé `this` como «este objeto»; el Ejemplo 05 explica cómo se decide.
5. **Resultado.** `4.5 * 1.21` da el precio con IVA; la plantilla de texto arma `Café: $4.5`.
6. **En la consola** la propiedad de tipo función se muestra como `ƒ`.

## ✅ Resultado esperado

Al abrir `03-metodos.html`, la consola muestra:

```text
5.445
Café: $4.5
function
{nombre: 'Café', precio: 4.5, precioConIva: ƒ, descripcion: ƒ}
```

- Un método es una función que vive dentro de un objeto y se llama con paréntesis.
- Dentro del método, `this` permite leer las propiedades del propio objeto.
