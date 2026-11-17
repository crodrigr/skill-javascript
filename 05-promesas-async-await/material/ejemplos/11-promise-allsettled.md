# 📘 Ejemplo 11 — Promise.allSettled: éxitos y fallos

> 🎓 **Resultados de aprendizaje:** RA-4
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, **en el orden en que salió**, con el archivo y la línea de cada error. El orden se contrastó con Node cuando la página no usa el navegador ni tiene errores a propósito (sin diferencias). Los ejemplos **no imprimen objetos `Promise`**: la consola real muestra su estado, pero aquí se observa con `.then()`, `.catch()` y `.finally()`. Los **tiempos son aproximados**: lo que importa es el orden. Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Si una de las tres consultas falla, `Promise.all` se rechaza y descarta el resto. Diego quiere **ver el resultado de cada una**, con sus éxitos y sus fallos: para eso está `Promise.allSettled`.

## 💻 Código

El archivo [`11-promise-allsettled.html`](../recursos/ejemplos/11-promise-allsettled.html) tiene este código dentro de `<script>`:

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

Promise.allSettled([
  consultar('precio', 300, false),
  consultar('stock', 500, true),
  consultar('proveedor', 700, false)
]).then((resultados) => {
  for (const r of resultados) {
    if (r.status === 'fulfilled') {
      console.log('✅ ' + r.value);
    } else {
      console.log('❌ ' + r.reason);
    }
  }
});
```

## 🔍 Análisis paso a paso

1. **`Promise.allSettled(lista)`** espera a que **todas** se asienten (se cumplan o se rechacen) y **nunca se rechaza**.
2. **El resultado es una lista de objetos,** uno por promesa, en el orden de la lista: `{ status: 'fulfilled', value }` o `{ status: 'rejected', reason }`.
3. **Aquí** el stock falla, pero el precio y el proveedor se muestran igual.
4. **Cuándo usarla:** cuando querés un informe completo aunque algunas tareas fallen.
5. **Comparación:**

   | Método | Se cumple cuando… | Se rechaza cuando… |
   |---|---|---|
   | `all` | todas se cumplen | alguna se rechaza |
   | `race` | la primera se cumple | la primera se rechaza |
   | `allSettled` | todas se asientan | nunca |
   | `any` | alguna se cumple | todas se rechazan |

## ✅ Resultado esperado

Al abrir `11-promise-allsettled.html`, la consola muestra:

```text
✅ precio ok
❌ Falló stock
✅ proveedor ok
```

- `Promise.allSettled` informa el estado de **todas**, con sus éxitos y sus fallos.
- Nunca se rechaza: hay que revisar el `status` de cada resultado.
