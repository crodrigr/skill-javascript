# 🟢 Básico 01 — Crear una lista de productos

> 🟢 **Nivel:** Básico · 🎓 **Resultados de aprendizaje:** RA-1, RA-2 · 🗓️ **Sesión 1**

## 🧱 Estado inicial

Abrí [`basico-01.html`](../recursos/practica/basico-01.html) y su archivo [`js/basico-01.js`](../recursos/practica/js/basico-01.js), de la carpeta `practica`. La página trae este HTML:

```html
<h1>Menú de Aroma</h1>
<ul id="menu"></ul>
```

El archivo trae este código de partida:

```js
const productos = [
  { nombre: 'Café', precio: 4.5 },
  { nombre: 'Té', precio: 3.2 },
  { nombre: 'Galleta', precio: 1.8 }
];

// Escribí acá los pasos del ejercicio
```

Escribí tu código en el archivo `.js`; el `<script>` ya está al final del `<body>`.

## 🛠️ Proceso esperado

1. Guardá en `menu` la lista `#menu`.
2. Recorré el arreglo `productos` con `for…of`. Por cada producto **creá** un `<li>`, asignale como texto `NOMBRE — $PRECIO` y la clase `producto`, y **agregalo** al final del menú.
3. Mostrá `Productos en el menú:` seguido de la cantidad de hijos del menú.
4. Mostrá el `outerHTML` del primer producto.
5. Creá un `<li>` con el texto `Hoy: 2x1 en galletas`, agregalo **al principio** del menú y mostrá `Primero ahora:` seguido de su texto.
6. Mostrá `El aviso está en la página:` seguido de `isConnected` del aviso.

**Respondé:** ¿Por qué un elemento recién creado con `createElement` no aparece en la página hasta que lo insertás? ¿Qué valor tiene su `parentNode` antes de insertarlo?

## ✅ Resultado esperado

La consola muestra:

```text
Productos en el menú: 3
<li class="producto">Café — $4.5</li>
Primero ahora: Hoy: 2x1 en galletas
El aviso está en la página: true
```

## 🚧 Restricciones

- 🚫 No uses `innerHTML` para armar los productos.
- 🚫 No cambies el HTML.

## 🎓 Resultados de aprendizaje

- RA-1, RA-2
