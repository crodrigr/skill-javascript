# 🟡 Intermedio 03 — Los cuatro combinadores

> 🟡 **Nivel:** Intermedio · 🎓 **Resultados de aprendizaje:** RA-4 · 🗓️ **Sesión 1**

## 🧱 Estado inicial

Abrí [`intermedio-03.html`](../recursos/practica/intermedio-03.html) y su archivo [`js/intermedio-03.js`](../recursos/practica/js/intermedio-03.js), de la carpeta `practica`. El archivo trae la función `consultar` y una lista de tareas: el precio se cumple a los 300 ms, el stock **falla** a los 500 ms y el proveedor se cumple a los 700 ms:

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

function tareas() {
  return [
    consultar('precio', 300, false),
    consultar('stock', 500, true),
    consultar('proveedor', 700, false)
  ];
}

// Escribí acá los cuatro combinadores
```

## 🛠️ Proceso esperado

1. Con `Promise.all(tareas())`, mostrá `all:` seguido de un espacio y los resultados unidos con una coma y un espacio; si se rechaza, mostrá `❌ all: MOTIVO`.
2. Con `Promise.allSettled(tareas())`, contá con un bucle cuántas se cumplieron y cuántas se rechazaron y mostrá `allSettled: N cumplidas y M rechazada`.
3. Con `Promise.race(tareas())`, mostrá `race:` seguido de un espacio y el valor de la ganadora.
4. Con `Promise.any(tareas())`, mostrá `any:` seguido de un espacio y el valor de la ganadora.
5. **Antes de ejecutar**, anotá el orden de las cuatro líneas y a qué instante sale cada una.

**Respondé:** ¿Por qué `all` muestra un error si el precio y el proveedor salieron bien? ¿Qué método elegirías para mostrar el precio aunque el stock falle?

## ✅ Resultado esperado

La consola muestra (en este orden):

```text
race: precio ok
any: precio ok
❌ all: Falló stock
allSettled: 2 cumplidas y 1 rechazada
```

## 🚧 Restricciones

- 🚫 No uses `async`/`await`.
- 🚫 No uses `map` ni `reduce`.
- 🚫 Cada combinador se llama con una lista **nueva** (`tareas()`).

## 🎓 Resultados de aprendizaje

- RA-4
