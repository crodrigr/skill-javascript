# 📘 Ejemplo 09 — Promise.all: todas juntas

> 🎓 **Resultados de aprendizaje:** RA-4
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, **en el orden en que salió**, con el archivo y la línea de cada error. El orden se contrastó con Node cuando la página no usa el navegador ni tiene errores a propósito (sin diferencias). Los ejemplos **no imprimen objetos `Promise`**: la consola real muestra su estado, pero aquí se observa con `.then()`, `.catch()` y `.finally()`. Los **tiempos son aproximados**: lo que importa es el orden. Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Para mostrar un producto, Aroma consulta tres cosas que no dependen una de otra: el precio (300 ms), el stock (500 ms) y el proveedor (700 ms). En lugar de esperarlas una tras otra, las lanza **a la vez** y espera a que **todas** terminen.

## 💻 Código

El archivo [`09-promise-all.html`](../recursos/ejemplos/09-promise-all.html) tiene este código dentro de `<script>`:

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

function lanzarTareas(conFallo) {
  return [
    consultar('precio', 300, false),
    consultar('stock', 500, conFallo),
    consultar('proveedor', 700, false)
  ];
}

Promise.all(lanzarTareas(false))
  .then((resultados) => console.log('Todas cumplidas: ' + resultados.join(', ')))
  .then(() => Promise.all(lanzarTareas(true)))
  .then((resultados) => console.log('Esto no se muestra'))
  .catch((motivo) => console.log('❌ Se rechazó con: ' + motivo));
```

## 🔍 Análisis paso a paso

1. **`Promise.all(lista)`** recibe una lista de promesas y devuelve **una promesa** que se cumple cuando **todas** se cumplen.
2. **El resultado es una lista** con los valores **en el orden de la lista**, no en el orden en que terminaron.
3. **Tarda lo que la más lenta:** las tres corren a la vez, así que el total es ≈ 700 ms y no 1500 ms.
4. **Si una se rechaza,** `Promise.all` se rechaza **de inmediato** con ese motivo (aquí, `Falló stock` a los 500 ms). Las demás tareas siguen ejecutándose, pero su resultado se descarta.
5. **Cuándo usarla:** cuando necesitás **todos** los resultados para continuar.

## ✅ Resultado esperado

Al abrir `09-promise-all.html`, la consola muestra:

```text
Todas cumplidas: precio ok, stock ok, proveedor ok
❌ Se rechazó con: Falló stock
```

- `Promise.all` espera a todas y devuelve la lista de valores en orden; si una falla, se rechaza al instante.
- Las tareas corren a la vez: el tiempo total es el de la más lenta.
