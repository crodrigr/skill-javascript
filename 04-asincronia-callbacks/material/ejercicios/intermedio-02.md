# 🟡 Intermedio 02 — La pila, la cola y el bucle

> 🟡 **Nivel:** Intermedio · 🎓 **Resultados de aprendizaje:** RA-4 · 🗓️ **Sesión 1**

## 🧱 Estado inicial

Abrí [`intermedio-02.html`](../recursos/practica/intermedio-02.html) y su archivo [`js/intermedio-02.js`](../recursos/practica/js/intermedio-02.js), de la carpeta `practica`. El archivo trae un programa con temporizadores anidados:

```js
console.log('1');
setTimeout(() => console.log('2'), 100);
setTimeout(() => {
  console.log('3');
  setTimeout(() => console.log('4'), 0);
}, 0);
setTimeout(() => console.log('5'), 100);

function seis() {
  console.log('6');
}

seis();
console.log('7');
```

## 🛠️ Proceso esperado

1. Anotá, junto a cada `setTimeout`, **en qué instante vence** (sumando las esperas si está anidado).
2. Con eso, escribí el orden en que saldrán los siete números y después ejecutá la página para comprobarlo.
3. Agregá, al final, un `setTimeout` de **50 ms** que muestre `8`. Anotá dónde esperás que salga y comprobalo.

**Respondé:** ¿Por qué el `4` sale antes que el `2`, si en el código está escrito después? ¿Y por qué el `2` sale antes que el `5`?

## ✅ Resultado esperado

Con el programa original, la consola muestra (en este orden):

```text
1
6
7
3
4
2
5
```

Con la línea que agregaste:

```text
1
6
7
3
4
8
2
5
```

## 🚧 Restricciones

- 🚫 No cambies las líneas que ya están.
- 🚫 No uses `setInterval`.

## 🎓 Resultados de aprendizaje

- RA-4
