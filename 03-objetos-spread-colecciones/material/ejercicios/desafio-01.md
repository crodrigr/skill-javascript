# 🔴 Desafío 01 — El inventario de Aroma

> 🔴 **Nivel:** Desafío · 🎓 **Resultados de aprendizaje:** RA-12 · 🗓️ **Sesión 3**

## 🧱 Estado inicial

Abrí [`desafio.html`](../recursos/practica/desafio.html) y su archivo [`js/desafio.js`](../recursos/practica/js/desafio.js), de la carpeta `practica`. El archivo declara los productos y las ventas del día:

```js
const productos = [
  { nombre: 'Café', precio: 4.5, stock: 12 },
  { nombre: 'Té', precio: 3.2, stock: 0 },
  { nombre: 'Galleta', precio: 1.8, stock: 40 },
  { nombre: 'Medialuna', precio: 2.2, stock: 25 },
  { nombre: 'Brownie', precio: 3.5, stock: 6 }
];
const ventas = ['Café', 'Galleta', 'Café', 'Brownie', 'Galleta', 'Café', 'Brownie'];
```

Para los casos de prueba 2 y 3 cambiás **solo** la lista `ventas`.

## 🛠️ Proceso esperado

Escribí, debajo de los datos:

1. **Conteo.** Con un `Map`, contá cuántas veces se vendió cada producto.
2. **Avisos.** Por cada producto vendido (en el orden de la primera venta), buscalo en `productos`, extraé su `precio` y su `stock` con desestructuración y mostrá `Nombre: N vendidos, quedan R`, donde `R` es el stock menos lo vendido. Si quedan **5 o menos**, agregá al final un espacio y el texto `(reponer)`.
3. **Sin ventas.** Con un `Set` de lo vendido y un arreglo, mostrá `Sin ventas:`, un espacio y los nombres de los productos que no se vendieron (separados por una coma y un espacio), o `ninguno` si se vendieron todos.
4. **Recaudado.** Sumá `cantidad * precio` de lo vendido y mostrá `Recaudado:`, un espacio y el total con **dos decimales**.
5. **Resumen.** Con *spread*, creá un objeto con las propiedades del **primer producto** y una propiedad `vendidos` (cuántas veces se vendió, `0` si no se vendió) y mostralo como **JSON**.

## ✅ Resultado esperado

Con la lista de ventas de arriba, la consola muestra:

```text
Café: 3 vendidos, quedan 9
Galleta: 2 vendidos, quedan 38
Brownie: 2 vendidos, quedan 4 (reponer)
Sin ventas: Té, Medialuna
Recaudado: 24.10
{"nombre":"Café","precio":4.5,"stock":12,"vendidos":3}
```

## 🧪 Casos de prueba

| # | `ventas` | Salida esperada |
|---|---|---|
| 1 | `['Café', 'Galleta', 'Café', 'Brownie', 'Galleta', 'Café', 'Brownie']` | Las seis líneas de arriba |
| 2 | `[]` | `Sin ventas: Café, Té, Galleta, Medialuna, Brownie` · `Recaudado: 0.00` · `{"nombre":"Café","precio":4.5,"stock":12,"vendidos":0}` |
| 3 | `['Brownie', 'Brownie', 'Brownie', 'Brownie', 'Brownie', 'Brownie']` | `Brownie: 6 vendidos, quedan 0 (reponer)` · `Sin ventas: Café, Té, Galleta, Medialuna` · `Recaudado: 21.00` · `{"nombre":"Café","precio":4.5,"stock":12,"vendidos":0}` |

## 🚧 Restricciones

- 🚫 No uses `map` ni `reduce`.
- 🚫 El conteo va en un `Map` y la lista de lo vendido en un `Set`.
- 🚫 No modifiques el arreglo `productos`.
- 🚫 No uses `this`, clases ni recursión.

## 🎓 Resultados de aprendizaje

- RA-12: Combinar objetos, arreglos, `Set`, `Map`, desestructuración y *spread* para resolver un problema de la tienda.
