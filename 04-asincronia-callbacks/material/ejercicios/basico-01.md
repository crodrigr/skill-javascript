# 🟢 Básico 01 — Síncrono o asíncrono

> 🟢 **Nivel:** Básico · 🎓 **Resultados de aprendizaje:** RA-1, RA-4 · 🗓️ **Sesión 1**

## 🧱 Estado inicial

Abrí [`basico-01.html`](../recursos/practica/basico-01.html) y su archivo [`js/basico-01.js`](../recursos/practica/js/basico-01.js), de la carpeta `practica`. El archivo trae un programa corto:

```js
console.log('A');
setTimeout(() => console.log('B'), 500);
console.log('C');
setTimeout(() => console.log('D'), 0);
console.log('E');
```

## 🛠️ Proceso esperado

1. **Antes de ejecutar**, anotá en un papel el orden en que saldrán las letras.
2. Ejecutá la página y comparalo con lo que mostró la consola.
3. Agregá, al final del archivo, una línea más: un `setTimeout` de **200 ms** que muestre `F`.
4. Volvé a anotar el orden **antes** de ejecutar y comprobalo.

**Respondé:** Clasificá cada situación como **síncrona** o **asíncrona**: (a) esperar parado en la fila de la caja hasta que te atienden, sin hacer otra cosa; (b) dejar el pedido y sentarte a mirar el celular hasta que te avisen; (c) pedir un té y, mientras tanto, pedir una galleta en otro mostrador.

## ✅ Resultado esperado

Con el programa original, la consola muestra (en este orden):

```text
A
C
E
D
B
```

Con la línea que agregaste:

```text
A
C
E
D
F
B
```

## 🚧 Restricciones

- 🚫 No cambies las líneas que ya están.
- 🚫 No uses `setInterval`.

## 🎓 Resultados de aprendizaje

- RA-1, RA-4
