# 📘 Ejemplo 01 — `if` y `else`: ¿envío gratis?

> 🎓 **Resultados de aprendizaje:** RA-1
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome y se anotó lo que imprimió la consola, con el archivo y la línea de cada error. Los valores se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Lucía quiere que la tienda «Aroma» le avise a cada cliente si su pedido tiene **envío gratis** (desde 20) o si todavía le falta. El programa tiene que **decidir** según el total.

## 💻 Código

El archivo [`01-if-else.html`](../recursos/ejemplos/01-if-else.html) tiene este código dentro de `<script>`:

```js
const precio = 4.5;
const cantidad = 3;
const total = precio * cantidad;
const envioGratisDesde = 20;

console.log('Total:', total);

if (total >= envioGratisDesde) {
  console.log('Envío gratis');
} else {
  console.log('Envío con costo');
  console.log('Te faltan', envioGratisDesde - total, 'para el envío gratis');
}

if (total > 0) {
  console.log('El pedido tiene productos');
}
```

## 🔍 Análisis paso a paso

1. **Una decisión tiene una condición.** `total >= envioGratisDesde` es una comparación (Clase 01): da `true` o `false`. El `if` ejecuta su bloque **solo si** la condición es verdadera.
2. **`else` es el camino contrario.** Si la condición es falsa, se ejecuta el bloque del `else`. En cada ejecución se recorre **un solo** camino: nunca los dos.
3. **Los bloques van entre llaves `{ }`.** Todo lo que está entre las llaves del `if` es lo que se hace cuando la condición se cumple. Escribí siempre las llaves, aunque haya una sola línea.
4. **Con estos datos** `total` vale `13.5`, que no llega a `20`: la condición es falsa y se ejecuta el `else`, que calcula cuánto falta: `20 - 13.5` es `6.5`.
5. **Un `if` sin `else` es válido.** El último `if` solo actúa cuando `total > 0`; si no, no hace nada.
6. **Probalo con otros datos.** Cambiá solo la cantidad y mirá qué rama se ejecuta (ver las variantes más abajo).

## ✅ Resultado esperado

Al abrir `01-if-else.html`, la consola muestra:

```text
Total: 13.5
Envío con costo
Te faltan 6.5 para el envío gratis
El pedido tiene productos
```

### 🔁 Probalo con otros datos

Se cambió una línea del primer script y se volvió a abrir la página:

- Si `cantidad` pasa de `3` a `5`: `Total: 22.5` · `Envío gratis` · `El pedido tiene productos`
- Si `cantidad` pasa de `3` a `0`: `Total: 0` · `Envío con costo` · `Te faltan 20 para el envío gratis`

- La condición decide el camino: con `13.5` se muestra el `else`; con `22.5`, el `if`.
- Un `if` sin `else` no hace nada cuando la condición es falsa.
