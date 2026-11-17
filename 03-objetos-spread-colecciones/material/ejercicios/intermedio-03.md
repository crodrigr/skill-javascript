# 🟡 Intermedio 03 — Buscar y ordenar

> 🟡 **Nivel:** Intermedio · 🎓 **Resultados de aprendizaje:** RA-9 · 🗓️ **Sesión 3**

## 🧱 Estado inicial

Abrí [`intermedio-03.html`](../recursos/practica/intermedio-03.html) y su archivo [`js/intermedio-03.js`](../recursos/practica/js/intermedio-03.js), de la carpeta `practica`. El archivo declara los productos de la tienda:

```js
const productos = [
  { nombre: 'Café', precio: 4.5, stock: 12 },
  { nombre: 'Té', precio: 3.2, stock: 0 },
  { nombre: 'Galleta', precio: 1.8, stock: 40 },
  { nombre: 'Medialuna', precio: 2.2, stock: 25 },
  { nombre: 'Brownie', precio: 3.5, stock: 6 }
];
```

## 🛠️ Proceso esperado

Escribí, debajo de los datos:

1. Con `find`, buscá el producto `'Brownie'` y mostralo.
2. Con `findIndex`, mostrá la posición del primer producto sin stock.
3. Con `filter`, mostrá cuántos productos tienen stock.
4. Creá una **copia** de `productos` ordenada por precio de **mayor a menor**, armá un arreglo con sus nombres y mostralos unidos con `', '`.
5. Mostrá el nombre del primer producto de `productos` (para comprobar que el original no cambió).
6. Ordená `[10, 9, 1, 100]` de menor a mayor y mostralo.

**Respondé:** ¿qué devolvería `productos.find(p => p.precio > 10)` y por qué conviene comprobarlo antes de pedirle `.nombre`?

## ✅ Resultado esperado

La consola muestra:

```text
{nombre: 'Brownie', precio: 3.5, stock: 6}
1
4
Café, Brownie, Té, Medialuna, Galleta
Café
(4) [1, 9, 10, 100]
```

## 🚧 Restricciones

- 🚫 No uses `map` ni `reduce`.
- 🚫 El ordenamiento del paso 4 no puede modificar `productos`.
- 🚫 No uses `sort()` sin comparador.

## 🎓 Resultados de aprendizaje

- RA-9: Buscar con `find`, `findIndex` y `filter`, y ordenar con `sort()` y un comparador.
