# 📘 Ejemplo 11 — Desestructuración de objetos

> 🎓 **Resultados de aprendizaje:** RA-5
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome y se anotó lo que imprimió la consola, con el archivo y la línea de cada error. Los valores se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador. La consola real muestra los objetos como un árbol que se despliega; aquí se escriben en una sola línea.

## 🧱 Situación inicial

Lucía escribe `producto.nombre`, `producto.precio`, `producto.stock`… muchas veces. La **desestructuración** extrae varias propiedades en variables con una sola línea.

## 💻 Código

El archivo [`11-desestructuracion.html`](../recursos/ejemplos/11-desestructuracion.html) tiene este código dentro de `<script>`:

```js
const producto = {
  nombre: 'Café',
  precio: 4.5,
  stock: 12,
  origen: { pais: 'Colombia', altura: 1800 }
};

const { nombre, precio } = producto;
console.log(nombre, precio);

const { stock: unidades } = producto;
console.log(unidades);

const { color = 'sin color', activo = true } = producto;
console.log(color, activo);

const { origen: { pais } } = producto;
console.log(pais);

const { nombre: titulo, ...resto } = producto;
console.log(titulo);
console.log(resto);

function describir({ nombre, precio }) {
  return nombre + ': ' + precio;
}
console.log(describir(producto));
```

## 🔍 Análisis paso a paso

1. **Forma:** `const { nombre, precio } = producto;` crea las variables `nombre` y `precio` con los valores de esas propiedades. Los nombres entre llaves deben **coincidir** con las propiedades.
2. **Renombrar.** `{ stock: unidades }` lee la propiedad `stock` y la guarda en la variable `unidades`.
3. **Valores por defecto.** `{ color = 'sin color' }` usa ese valor si la propiedad no existe o vale `undefined`. Si `producto` tuviera `color: null`, se usaría `null` (los valores por defecto solo reemplazan a `undefined`).
4. **Objetos anidados.** `{ origen: { pais } }` entra en `origen` y extrae `pais`; ojo: no crea una variable `origen`.
5. **El resto.** `...resto` junta **las demás** propiedades en un objeto nuevo (aquí sin `nombre`).
6. **En los parámetros de una función.** `function describir({ nombre, precio })` extrae las propiedades del objeto que se le pasa.
7. **Cuidado.** Desestructurar `undefined` o `null` da `TypeError`.

## ✅ Resultado esperado

Al abrir `11-desestructuracion.html`, la consola muestra:

```text
Café 4.5
12
sin color true
Colombia
Café
{precio: 4.5, stock: 12, origen: {pais: 'Colombia', altura: 1800}}
Café: 4.5
```

- La desestructuración extrae propiedades en variables: `const { a, b } = objeto;`.
- Se puede renombrar con `:` y dar un valor por defecto con `=`.
