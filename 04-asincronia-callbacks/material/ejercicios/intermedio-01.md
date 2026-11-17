# 🟡 Intermedio 01 — Bloquear o no bloquear

> 🟡 **Nivel:** Intermedio · 🎓 **Resultados de aprendizaje:** RA-2, RA-3 · 🗓️ **Sesión 1**

## 🧱 Estado inicial

Abrí [`intermedio-01.html`](../recursos/practica/intermedio-01.html) y su archivo [`js/intermedio-01.js`](../recursos/practica/js/intermedio-01.js), de la carpeta `practica`. El archivo trae una función que atiende un pedido **bloqueando** el hilo con un bucle:

```js
function pedirBloqueando(producto) {
  console.log('Pedido de ' + producto);
  for (let i = 0; i < 100000000; i++) { }
  console.log('Listo: ' + producto);
}

pedirBloqueando('Café');
pedirBloqueando('Té');
console.log('---');

// Escribí acá la versión sin bloquear
```

## 🛠️ Proceso esperado

1. Ejecutá la página y observá el orden de los mensajes de `pedirBloqueando`.
2. Escribí una función `pedirSinBloquear(producto)` que muestre `Pedido de …` y, **300 ms después**, `Listo: …`, **sin** usar un bucle.
3. Llamala con `'Café'`, `'Té'` y `'Brownie'`, y después mostrá `Seguimos atendiendo`.
4. Compará el orden de las salidas de las dos versiones.

**Respondé:** ¿Por qué, en la primera versión, el pedido del té no empieza hasta que termina el del café? ¿Y por qué, en la segunda, los tres pedidos se toman antes de que salga el primer «Listo»?

## ✅ Resultado esperado

La consola muestra (en este orden):

```text
Pedido de Café
Listo: Café
Pedido de Té
Listo: Té
---
Pedido de Café
Pedido de Té
Pedido de Brownie
Seguimos atendiendo
Listo: Café
Listo: Té
Listo: Brownie
```

## 🚧 Restricciones

- 🚫 No cambies `pedirBloqueando`.
- 🚫 `pedirSinBloquear` no puede usar bucles.

## 🎓 Resultados de aprendizaje

- RA-2, RA-3
