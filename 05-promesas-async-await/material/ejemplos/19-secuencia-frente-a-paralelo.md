# 📘 Ejemplo 19 — Uno tras otro o a la vez

> 🎓 **Resultados de aprendizaje:** RA-9
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, **en el orden en que salió**, con el archivo y la línea de cada error. El orden se contrastó con Node cuando la página no usa el navegador ni tiene errores a propósito (sin diferencias). Los ejemplos **no imprimen objetos `Promise`**: la consola real muestra su estado, pero aquí se observa con `.then()`, `.catch()` y `.finally()`. Los **tiempos son aproximados**: lo que importa es el orden. Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Aroma consulta precio (300 ms), stock (500 ms) y proveedor (700 ms). Si los espera **uno tras otro** con `await`, tarda la **suma**; si los lanza **a la vez** con `Promise.all`, tarda lo que la **más lenta**.

## 💻 Código

El archivo [`19-secuencia-frente-a-paralelo.html`](../recursos/ejemplos/19-secuencia-frente-a-paralelo.html) tiene este código dentro de `<script>`:

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

async function enSecuencia() {
  const inicio = Date.now();
  await consultar('precio', 300, false);
  await consultar('stock', 500, false);
  await consultar('proveedor', 700, false);
  console.log('En secuencia: ≈ ' + redondear(Date.now() - inicio) + ' ms');
}

async function enParalelo() {
  const inicio = Date.now();
  await Promise.all([
    consultar('precio', 300, false),
    consultar('stock', 500, false),
    consultar('proveedor', 700, false)
  ]);
  console.log('En paralelo: ≈ ' + redondear(Date.now() - inicio) + ' ms');
}

async function main() {
  await enSecuencia();
  await enParalelo();
}

main();
```

## 🔍 Análisis paso a paso

1. **En secuencia:** cada `await` espera a que termine la consulta antes de lanzar la siguiente: 300 + 500 + 700 = **1500 ms**.
2. **En paralelo:** las tres consultas se lanzan a la vez y `Promise.all` espera a la más lenta: **700 ms**.
3. **La diferencia** crece con cada tarea. Si las tareas **no dependen una de otra**, conviene el paralelo.
4. **Si una depende del resultado de la anterior,** hay que esperarla (secuencia), como en el flujo del pedido.
5. **Los tiempos mostrados son aproximados** (se redondean a la centena más cercana); lo que importa es la **diferencia**.
6. **`main` espera a `enSecuencia` antes de empezar `enParalelo`,** por eso los dos mensajes salen en ese orden.

## ✅ Resultado esperado

Al abrir `19-secuencia-frente-a-paralelo.html`, la consola muestra:

```text
En secuencia: ≈ 1500 ms
En paralelo: ≈ 700 ms
```

- Varios `await` seguidos tardan la suma de los tiempos; `Promise.all` tarda el de la más lenta.
- Usá paralelo cuando las tareas son independientes.
