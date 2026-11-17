# 📘 Ejemplo 01 — Declarar un objeto

> 🎓 **Resultados de aprendizaje:** RA-1
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome y se anotó lo que imprimió la consola, con el archivo y la línea de cada error. Los valores se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador. La consola real muestra los objetos como un árbol que se despliega; aquí se escriben en una sola línea.

## 🧱 Situación inicial

Lucía maneja los datos de un producto en variables sueltas (`nombreCafe`, `precioCafe`, `stockCafe`…). Cada producto nuevo suma más variables. Un **objeto** agrupa todos esos datos bajo un solo nombre.

## 💻 Código

El archivo [`01-objeto-literal.html`](../recursos/ejemplos/01-objeto-literal.html) tiene este código dentro de `<script>`:

```js
const producto = {
  nombre: 'Café',
  precio: 4.5,
  stock: 12,
  activo: true
};

console.log(producto);
console.log(typeof producto);
console.log(producto.nombre, producto.precio);

const vacio = {};
console.log(vacio);
```

## 🔍 Análisis paso a paso

1. **Notación literal.** Un objeto se escribe entre llaves `{ }` con pares `clave: valor` separados por comas. Es la forma más usada y la que vamos a practicar.
2. **Clave y valor.** La **clave** (o nombre de la propiedad) va a la izquierda de los dos puntos y el **valor** a la derecha: puede ser un número, un texto, un booleano, `null`, otro objeto, un arreglo o una función.
3. **Un solo nombre, muchos datos.** `producto` guarda cuatro propiedades. Se lee con un punto: `producto.nombre`.
4. **`typeof` da `'object'`.** Los objetos son un tipo de dato más (Clase 01).
5. **El objeto vacío** `{}` es válido: sirve para empezar sin datos y agregarlos después (Ejemplo 02).
6. **Otras formas (solo mencionadas).** Existen `new Object()` y `Object.create()`, pero la notación literal es más corta y clara; no las vamos a usar.
7. **En la consola real,** un objeto se muestra como un árbol que se despliega; aquí lo mostramos en una sola línea.

## ✅ Resultado esperado

Al abrir `01-objeto-literal.html`, la consola muestra:

```text
{nombre: 'Café', precio: 4.5, stock: 12, activo: true}
object
Café 4.5
{}
```

- Un objeto agrupa datos relacionados con pares `clave: valor`.
- `typeof` de un objeto da `'object'`.
