# 🟢 Básico 01 — Mi primera promesa

> 🟢 **Nivel:** Básico · 🎓 **Resultados de aprendizaje:** RA-1, RA-2 · 🗓️ **Sesión 1**

## 🧱 Estado inicial

Abrí [`basico-01.html`](../recursos/practica/basico-01.html) y su archivo [`js/basico-01.js`](../recursos/practica/js/basico-01.js), de la carpeta `practica`. El archivo trae dos mensajes y un comentario donde vas a trabajar:

```js
console.log('Inicio');

// Escribí acá la función esperar y su uso

console.log('Fin del código síncrono');
```

## 🛠️ Proceso esperado

1. Escribí una función `esperar(milisegundos)` que **devuelva una promesa** con `new Promise`. Después de ese tiempo, la promesa se cumple con el texto `Pasaron N ms` (donde `N` son los milisegundos).
2. Llamala con `300` y mostrá el mensaje con `.then()`.
3. Llamala otra vez con `100` y mostrá el mensaje con `.then()`.
4. Ejecutá la página y comprobá el orden de las cuatro líneas.

**Respondé:** ¿En qué estado está la promesa de `esperar(300)` justo después de llamar a la función? ¿Y cuando aparece su mensaje?

## ✅ Resultado esperado

La consola muestra (en este orden):

```text
Inicio
Fin del código síncrono
Pasaron 100 ms
Pasaron 300 ms
```

## 🚧 Restricciones

- 🚫 No uses `setInterval` ni callbacks que reciban el resultado: usá `.then()`.
- 🚫 No cambies los dos mensajes que ya están.

## 🎓 Resultados de aprendizaje

- RA-1, RA-2
