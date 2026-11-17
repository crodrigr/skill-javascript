# 📘 Ejemplo 05 — `this` dentro de un método

> 🎓 **Resultados de aprendizaje:** RA-3
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome y se anotó lo que imprimió la consola, con el archivo y la línea de cada error. Los valores se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador. La consola real muestra los objetos como un árbol que se despliega; aquí se escriben en una sola línea.

## 🧱 Situación inicial

Lucía copió un método de un producto a otro y le sorprendió que cada uno respondiera con sus propios datos. `this` no es fijo: depende de **con qué objeto se llama** al método.

## 💻 Código

El archivo [`05-this-en-metodos.html`](../recursos/ejemplos/05-this-en-metodos.html) tiene este código dentro de `<script>`:

```js
const cafe = {
  nombre: 'Café',
  precio: 4.5,
  stock: 12,
  describir() {
    return this.nombre + ' cuesta ' + this.precio;
  },
  vender(unidades) {
    this.stock = this.stock - unidades;
  }
};

const te = { nombre: 'Té', precio: 3.2, stock: 0, describir: cafe.describir };

console.log(cafe.describir());
console.log(te.describir());

cafe.vender(2);
console.log(cafe.stock, te.stock);
```

## 🔍 Análisis paso a paso

1. **Regla.** Cuando se llama como `objeto.metodo()`, `this` es **el objeto que está antes del punto**.
2. **Una función, dos objetos.** `te.describir` es la **misma función** que `cafe.describir`, pero al llamarla como `te.describir()` el `this` es `te`: por eso responde con los datos del té.
3. **`this` lee y también cambia.** `this.stock = this.stock - unidades` modifica el stock **del objeto con el que se llamó**: `cafe.stock` pasa de `12` a `10` y el de `te` queda en `0`.
4. **No importa dónde se escribió** la función, sino **cómo se llama**.
5. **Sin `this`, no hay acceso a los datos propios.** Escribir `precio` a secas buscaría una variable llamada `precio`, no la propiedad del objeto.
6. **Fuera de esta clase:** `call`, `apply`, `bind` y las clases cambian el valor de `this` de otras maneras; lo veremos más adelante.

## ✅ Resultado esperado

Al abrir `05-this-en-metodos.html`, la consola muestra:

```text
Café cuesta 4.5
Té cuesta 3.2
10 0
```

- `this` es el objeto que está antes del punto en la llamada.
- Un método puede leer y cambiar las propiedades del objeto con `this`.
