# 📘 Ejemplo 21 — Un pedido completo: decisiones, bucle y funciones

> 🎓 **Resultados de aprendizaje:** RA-9
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome y se anotó lo que imprimió la consola, con el archivo y la línea de cada error. Los valores se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Lucía quiere saber, para pedidos de 1 a 8 cafés, cuál es el total con descuento y **a partir de qué cantidad el envío es gratis**. Junta lo de la clase: funciones, decisiones y un bucle.

## 💻 Código

El archivo [`21-pedido-completo.html`](../recursos/ejemplos/21-pedido-completo.html) tiene este código dentro de `<script>`:

```js
const precio = 4.5;
const envioGratisDesde = 20;

function subtotal(precio, cantidad) {
  return precio * cantidad;
}

const porcentajeDescuento = total => total >= 50 ? 10 : total >= 20 ? 5 : 0;

function totalConDescuento(total) {
  return total - total * porcentajeDescuento(total) / 100;
}

for (let cantidad = 1; cantidad <= 8; cantidad++) {
  const sub = subtotal(precio, cantidad);
  const final = totalConDescuento(sub);
  console.log('Cantidad', cantidad, '→ subtotal', sub.toFixed(2), '→ total', final.toFixed(2));
  if (final >= envioGratisDesde) {
    console.log('Desde la cantidad', cantidad, 'el envío es gratis');
    break;
  }
}
```

## 🔍 Análisis paso a paso

1. **Tres funciones, tres trabajos.** `subtotal` multiplica, `porcentajeDescuento` decide el tramo (con el operador condicional) y `totalConDescuento` aplica el descuento llamando a la anterior.
2. **Las funciones se pueden llamar entre sí.** `totalConDescuento` usa `porcentajeDescuento`: cada una hace una sola cosa y se combinan.
3. **El `for` recorre las cantidades** de 1 a 8, y cada vuelta calcula con las funciones y muestra una línea. Las constantes `sub` y `final` se declaran **dentro** del bucle: son locales de cada vuelta.
4. **`break` corta la búsqueda.** En cuanto el total con descuento alcanza `20`, se informa la cantidad y se sale; no hace falta seguir con 7 y 8.
5. **`toFixed(2)`** muestra los importes con dos decimales (Clase 01).
6. **Un solo programa, muchos conceptos.** Si tuvieras que cambiar el descuento, solo tocarías `porcentajeDescuento`; si cambiara el precio, la constante del principio. Esa es la ventaja de las funciones.

## ✅ Resultado esperado

Al abrir `21-pedido-completo.html`, la consola muestra:

```text
Cantidad 1 → subtotal 4.50 → total 4.50
Cantidad 2 → subtotal 9.00 → total 9.00
Cantidad 3 → subtotal 13.50 → total 13.50
Cantidad 4 → subtotal 18.00 → total 18.00
Cantidad 5 → subtotal 22.50 → total 21.38
Desde la cantidad 5 el envío es gratis
```

### 🔁 Probalo con otros datos

Se cambió una línea del primer script y se volvió a abrir la página:

- Si `precio` pasa a `8`: `Cantidad 1 → subtotal 8.00 → total 8.00` · `Cantidad 2 → subtotal 16.00 → total 16.00` · `Cantidad 3 → subtotal 24.00 → total 22.80` · `Desde la cantidad 3 el envío es gratis`

- El envío es gratis a partir de la cantidad que se informa en la última línea.
- Cada concepto de la clase aparece en un lugar concreto del programa.
