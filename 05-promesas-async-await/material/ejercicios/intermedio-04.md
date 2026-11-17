# 🟡 Intermedio 04 — Errores y tiempos con async/await

> 🟡 **Nivel:** Intermedio · 🎓 **Resultados de aprendizaje:** RA-7, RA-9 · 🗓️ **Sesión 2**

## 🧱 Estado inicial

Abrí [`intermedio-04.html`](../recursos/practica/intermedio-04.html) y su archivo [`js/intermedio-04.js`](../recursos/practica/js/intermedio-04.js), de la carpeta `practica`. El archivo trae `consultar` y la función `redondear`:

```js
function consultar(nombre, milisegundos, falla) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (falla) {
        reject('Falló ' + nombre);
        return;
      }
      resolve(nombre + ' ok');
    }, milisegundos);
  });
}

function redondear(ms) {
  return Math.round(ms / 100) * 100;
}

// Escribí acá las funciones async
```

## 🛠️ Proceso esperado

1. Escribí `async function intentar()`: con `try`, esperá `consultar('stock', 200, true)` (que **falla**) y mostrá `Esto no se muestra`; en `catch`, mostrá `❌ MOTIVO`; en `finally`, mostrá `🔚 Consulta terminada`.
2. Escribí `enSecuencia()`: guardá `Date.now()`, esperá **uno tras otro** `consultar` de `precio` (200 ms), `stock` (300 ms) y `proveedor` (400 ms) y mostrá `En secuencia: ≈ T ms`, con `T = redondear(Date.now() - inicio)`.
3. Escribí `enParalelo()`: lo mismo, pero con las tres tareas dentro de `Promise.all`; mostrá `En paralelo: ≈ T ms`.
4. Escribí `main()` que espere a las tres funciones **en ese orden** y llamala.

**Respondé:** ¿Por qué la secuencia tarda la **suma** de los tiempos y el paralelo, el de la **más lenta**?

## ✅ Resultado esperado

La consola muestra (en este orden):

```text
❌ Falló stock
🔚 Consulta terminada
En secuencia: ≈ 900 ms
En paralelo: ≈ 400 ms
```

## 🚧 Restricciones

- 🚫 No uses `.then()` ni `.catch()`.
- 🚫 `intentar` no puede dejar el error sin atender.
- 🚫 No cambies `consultar` ni `redondear`.

## 🎓 Resultados de aprendizaje

- RA-7, RA-9
