# 📘 Ejemplo 25 — El inventario completo

> 🎓 **Resultados de aprendizaje:** RA-12
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome y se anotó lo que imprimió la consola, con el archivo y la línea de cada error. Los valores se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador. La consola real muestra los objetos como un árbol que se despliega; aquí se escriben en una sola línea.

## 🧱 Situación inicial

Lucía junta todo lo de la clase: un arreglo de productos (objetos), un `Set` con lo vendido, un `Map` con el conteo, búsqueda, orden, desestructuración y *spread*, para armar el resumen del día.

## 💻 Código

El archivo [`25-inventario-completo.html`](../recursos/ejemplos/25-inventario-completo.html) tiene este código dentro de `<script>`:

```js
const productos = [
  { nombre: 'Café', precio: 4.5, stock: 12 },
  { nombre: 'Té', precio: 3.2, stock: 0 },
  { nombre: 'Galleta', precio: 1.8, stock: 40 },
  { nombre: 'Medialuna', precio: 2.2, stock: 25 },
  { nombre: 'Brownie', precio: 3.5, stock: 6 }
];

const ventas = ['Café', 'Galleta', 'Café', 'Medialuna', 'Galleta', 'Café'];
const distintos = new Set(ventas);

const conteo = new Map();
for (const venta of ventas) {
  conteo.set(venta, (conteo.get(venta) || 0) + 1);
}

console.log('Productos distintos vendidos:', distintos.size);

let recaudado = 0;
for (const [nombre, cantidad] of conteo) {
  const producto = productos.find(p => p.nombre === nombre);
  const { precio } = producto;
  const subtotal = cantidad * precio;
  recaudado += subtotal;
  console.log(nombre + ': ' + cantidad + ' x ' + precio + ' = ' + subtotal.toFixed(2));
}
console.log('Recaudado:', recaudado.toFixed(2));

const sinStock = productos.filter(p => p.stock === 0);
console.log('Sin stock:', sinStock[0].nombre);

const porPrecio = [...productos].sort((a, b) => a.precio - b.precio);
const nombresOrdenados = [];
for (const p of porPrecio) {
  nombresOrdenados.push(p.nombre);
}
console.log(nombresOrdenados.join(', '));

const resumen = { ...productos[0], vendidos: conteo.get('Café') };
console.log(resumen);
console.log(JSON.stringify(resumen));
```

## 🔍 Análisis paso a paso

1. **Datos.** `productos` es un arreglo de objetos (bloque 1 y 5); `ventas` es un arreglo de textos.
2. **`Set`** da los productos distintos: `3`. **`Map`** cuenta cuántas veces se vendió cada uno con el patrón `get(...) || 0`.
3. **Recorrido del `Map`** con `for...of` y desestructuración de arreglos `[nombre, cantidad]`; para cada uno, `find` busca el objeto del producto y la desestructuración extrae su `precio`.
4. **Acumulador.** `recaudado += subtotal` suma el total del día.
5. **Búsqueda y filtro.** `filter` obtiene los productos sin stock (`Té`).
6. **Orden sin tocar el original.** `[...productos].sort(...)` ordena una copia por precio; el arreglo `productos` queda igual.
7. **Resumen.** El *spread* arma un objeto nuevo con las propiedades de `Café` y agrega `vendidos`; `JSON.stringify` lo convierte en texto listo para guardar o enviar.

## ✅ Resultado esperado

Al abrir `25-inventario-completo.html`, la consola muestra:

```text
Productos distintos vendidos: 3
Café: 3 x 4.5 = 13.50
Galleta: 2 x 1.8 = 3.60
Medialuna: 1 x 2.2 = 2.20
Recaudado: 19.30
Sin stock: Té
Galleta, Medialuna, Té, Brownie, Café
{nombre: 'Café', precio: 4.5, stock: 12, vendidos: 3}
{"nombre":"Café","precio":4.5,"stock":12,"vendidos":3}
```

- Cada estructura se usa para lo que mejor sabe hacer: arreglo (lista), objeto (producto), `Set` (únicos) y `Map` (conteo).
- Ordenar una copia deja el arreglo original intacto.
