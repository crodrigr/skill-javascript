# 🟢 Básico 02 — De then a async/await

> 🟢 **Nivel:** Básico · 🎓 **Resultados de aprendizaje:** RA-6 · 🗓️ **Sesión 2**

## 🧱 Estado inicial

Abrí [`basico-02.html`](../recursos/practica/basico-02.html) y su archivo [`js/basico-02.js`](../recursos/practica/js/basico-02.js), de la carpeta `practica`. El archivo trae `esperar`, una función `preparar` que devuelve una promesa y dos mensajes:

```js
function esperar(milisegundos) {
  return new Promise((resolve) => {
    setTimeout(resolve, milisegundos);
  });
}

function preparar(producto) {
  return esperar(500).then(() => 'Listo: ' + producto);
}

console.log('Inicio');

// Escribí acá la función atender y su llamada

console.log('Fin del código síncrono');
```

## 🛠️ Proceso esperado

1. Escribí una función **`async`** llamada `atender`.
2. Dentro, esperá con `await` a `preparar('Café')` y mostrá lo que devuelve.
3. Después esperá con `await` a `preparar('Té')` y mostrá lo que devuelve.
4. Llamá a `atender()` en el lugar indicado y ejecutá la página.

**Respondé:** ¿Por qué `Fin del código síncrono` aparece **antes** que `Listo: Café`, si `atender()` se llamó antes?

## ✅ Resultado esperado

La consola muestra (en este orden):

```text
Inicio
Fin del código síncrono
Listo: Café
Listo: Té
```

## 🚧 Restricciones

- 🚫 No uses `.then()` dentro de `atender`.
- 🚫 No cambies `esperar` ni `preparar`.

## 🎓 Resultados de aprendizaje

- RA-6
