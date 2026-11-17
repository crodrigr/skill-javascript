# 🟡 Intermedio 04 — `Set`, `Map` y `FormData`

> 🟡 **Nivel:** Intermedio · 🎓 **Resultados de aprendizaje:** RA-7, RA-10, RA-11 · 🗓️ **Sesión 3**

## 🧱 Estado inicial

Abrí [`intermedio-04.html`](../recursos/practica/intermedio-04.html) y su archivo [`js/intermedio-04.js`](../recursos/practica/js/intermedio-04.js), de la carpeta `practica`. La página tiene un formulario con tres campos (uno **sin** `name`) y el archivo declara las ventas del día:

```js
const ventas = ['Café', 'Té', 'Café', 'Galleta', 'Té', 'Café'];
```

## 🛠️ Proceso esperado

Escribí, debajo de los datos:

1. Con un `Set`, mostrá cuántos productos **distintos** se vendieron y la lista de esos productos como arreglo.
2. Con un `Map`, contá cuántas veces se vendió cada producto y mostrá el `Map`.
3. Mostrá cuántas veces se vendió el `'Café'` y cuántas el `'Scone'` (que no se vendió).
4. Con `FormData`, leé el formulario de la página y convertilo en un objeto con `Object.fromEntries`. Mostralo.
5. Mostrá el total de la cantidad pedida por el precio `4.5` (cuidado: los valores del formulario son texto).

**Respondé:** ¿qué colección elegirías para (a) los productos únicos vendidos, (b) cuántas veces se vendió cada uno y (c) la lista de ventas en orden? Justificá.

## ✅ Resultado esperado

La consola muestra:

```text
3 (3) ['Café', 'Té', 'Galleta']
Map(3) {'Café' => 3, 'Té' => 2, 'Galleta' => 1}
3 undefined
{producto: 'Café', cantidad: '3'}
13.5
```

## 🚧 Restricciones

- 🚫 No uses un objeto común para contar: el conteo va en un `Map`.
- 🚫 No envíes el formulario ni uses `fetch`.
- 🚫 No cambies el formulario de la página.

## 🎓 Resultados de aprendizaje

- RA-7: Elegir entre arreglo, `Set` y `Map`.
- RA-10: Usar `Set` y `Map`.
- RA-11: Leer los datos de un formulario con `FormData`.
