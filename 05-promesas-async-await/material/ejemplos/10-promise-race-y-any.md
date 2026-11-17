# 📘 Ejemplo 10 — Promise.race y Promise.any

> 🎓 **Resultados de aprendizaje:** RA-4
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, **en el orden en que salió**, con el archivo y la línea de cada error. El orden se contrastó con Node cuando la página no usa el navegador ni tiene errores a propósito (sin diferencias). Los ejemplos **no imprimen objetos `Promise`**: la consola real muestra su estado, pero aquí se observa con `.then()`, `.catch()` y `.finally()`. Los **tiempos son aproximados**: lo que importa es el orden. Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Aroma pregunta lo mismo a tres proveedores y se queda con la primera respuesta. Pero ¿la primera **en terminar** o la primera **que se cumple**? Son dos métodos distintos.

## 💻 Código

El archivo [`10-promise-race-y-any.html`](../recursos/ejemplos/10-promise-race-y-any.html) tiene este código dentro de `<script>`:

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

Promise.race([consultar('precio', 300, false), consultar('stock', 500, false), consultar('proveedor', 700, false)])
  .then((ganadora) => console.log('race (todas bien): ' + ganadora));

Promise.race([consultar('precio', 300, true), consultar('stock', 500, false)])
  .catch((motivo) => console.log('race (la primera falla): ' + motivo));

Promise.any([consultar('precio', 300, true), consultar('stock', 500, false), consultar('proveedor', 700, false)])
  .then((ganadora) => console.log('any (la primera que se cumple): ' + ganadora));
```

## 🔍 Análisis paso a paso

1. **`Promise.race(lista)`** se asienta con la **primera** promesa que se asienta, sea éxito **o error**.
2. **En el primer `race`** gana el precio (300 ms) con éxito. **En el segundo,** el precio falla a los 300 ms y es el primero en asentarse: el `race` se rechaza.
3. **`Promise.any(lista)`** se cumple con la **primera que se cumple** e **ignora los errores**: aquí el precio falla, así que gana el stock (500 ms).
4. **`any` solo se rechaza si todas fallan** (con un error que reúne los motivos).
5. **Cuándo usarlas:** `race` para «la primera en terminar» (por ejemplo, un límite de tiempo); `any` para «la primera que funcione» (por ejemplo, varios proveedores).

## ✅ Resultado esperado

Al abrir `10-promise-race-y-any.html`, la consola muestra:

```text
race (todas bien): precio ok
race (la primera falla): Falló precio
any (la primera que se cumple): stock ok
```

- `Promise.race` copia el resultado de la primera que termina; `Promise.any`, el de la primera que se cumple.
- `any` ignora los errores mientras alguna se cumpla.
