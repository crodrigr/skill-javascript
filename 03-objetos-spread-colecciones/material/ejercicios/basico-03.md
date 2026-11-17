# 🟢 Básico 03 — Arreglos

> 🟢 **Nivel:** Básico · 🎓 **Resultados de aprendizaje:** RA-8 · 🗓️ **Sesión 3**

## 🧱 Estado inicial

Abrí [`basico-03.html`](../recursos/practica/basico-03.html) y su archivo [`js/basico-03.js`](../recursos/practica/js/basico-03.js), de la carpeta `practica`. El archivo declara un pedido:

```js
const pedido = ['Café', 'Té'];
```

## 🛠️ Proceso esperado

Escribí, debajo de los datos:

1. Agregá `'Medialuna'` al final y `'Brownie'` al principio. Mostrá el arreglo y su `length`.
2. Quitá el último elemento, guardalo en `quitado` y mostrá `quitado` y el arreglo.
3. Mostrá `pedido.slice(1, 3)` y el arreglo (para comprobar que `slice` no lo modifica).
4. Con `splice`, insertá `'Scone'` en la posición 1 sin quitar nada y mostrá el arreglo.
5. Con un `for`, mostrá cada elemento con su número: `1. Brownie`, `2. Scone`…
6. Creá `copia` con el *spread* y un `'Alfajor'` al final; mostrá la longitud de `copia` y la de `pedido`.

**Respondé:** ¿cuáles de los métodos usados modifican el arreglo original?

## ✅ Resultado esperado

La consola muestra:

```text
(4) ['Brownie', 'Café', 'Té', 'Medialuna'] 4
Medialuna (3) ['Brownie', 'Café', 'Té']
(2) ['Café', 'Té'] (3) ['Brownie', 'Café', 'Té']
(4) ['Brownie', 'Scone', 'Café', 'Té']
1. Brownie
2. Scone
3. Café
4. Té
5 4
```

## 🚧 Restricciones

- 🚫 No uses `concat` ni `map`.
- 🚫 El paso 5 usa `for` con índice, no `forEach`.
- 🚫 No declares el arreglo de nuevo.

## 🎓 Resultados de aprendizaje

- RA-8: Crear y manipular arreglos (agregar, quitar, cortar, insertar y copiar) y recorrerlos.
