# 🔴 Desafío 01 — La caja de Aroma

> 🔴 **Nivel:** Desafío · 🎓 **Resultados de aprendizaje:** RA-9 · 🗓️ **Sesión 2**

## 🧱 Estado inicial

Abrí [`desafio.html`](../recursos/practica/desafio.html) y su archivo [`js/desafio.js`](../recursos/practica/js/desafio.js), de la carpeta `practica`. El archivo declara los datos:

```js
const precio = 4.5;
const cantidadMaxima = 8;
```

Para los casos de prueba 2 y 3 cambiás **solo esos dos valores**.

## 🛠️ Proceso esperado

Escribí en `desafio.js`, **debajo de los datos**:

1. **`descuentoPara(subtotal)`** (función declarativa): devuelve `10` si el subtotal es 50 o más, `5` si es 20 o más y `0` en otro caso.
2. **`envioPara(total)`** (función de flecha): devuelve `0` si el total es 20 o más y `3.5` en otro caso.
3. **`totalFinal(precio, cantidad)`** (función declarativa): calcula el subtotal (`precio * cantidad`), le aplica el descuento de `descuentoPara` y le suma el envío de `envioPara` (calculado **sobre el total ya con descuento**). Devuelve el resultado.
4. **El bucle.** Con un `for`, recorré las cantidades de `1` a `cantidadMaxima`. En cada vuelta mostrá `Cantidad N: total`, con el total de `totalFinal` con **dos decimales** (`toFixed(2)`).
5. **El corte.** Cuando el envío de esa cantidad sea `0`, guardá la cantidad en una variable y cortá el bucle con `break`.
6. **El mensaje final.** Si hubo envío gratis, mostrá `Envío gratis desde la cantidad N`; si no, `Con X no se llega al envío gratis`, donde `X` es `cantidadMaxima`.

## ✅ Resultado esperado

Con `precio = 4.5` y `cantidadMaxima = 8`, la consola muestra:

```text
Cantidad 1: 8.00
Cantidad 2: 12.50
Cantidad 3: 17.00
Cantidad 4: 21.50
Cantidad 5: 21.38
Envío gratis desde la cantidad 5
```

## 🧪 Casos de prueba

| # | `precio` | `cantidadMaxima` | Salida esperada |
|---|---|---|---|
| 1 | `4.5` | `8` | Las seis líneas de arriba |
| 2 | `8` | `5` | `Cantidad 1: 11.50` · `Cantidad 2: 19.50` · `Cantidad 3: 22.80` · `Envío gratis desde la cantidad 3` |
| 3 | `2.5` | `4` | `Cantidad 1: 6.00` · `Cantidad 2: 8.50` · `Cantidad 3: 11.00` · `Cantidad 4: 13.50` · `Con 4 no se llega al envío gratis` |

## 🚧 Restricciones

- 🚫 Nada de `while` ni de `switch`: el recorrido es un `for` con `break`.
- 🚫 Cada función hace un solo trabajo y devuelve con `return`.
- 🚫 Cada umbral y el costo del envío se escriben dentro de la función que los usa.
- 🚫 No uses `this`, *callbacks* ni recursión.

## 🎓 Resultados de aprendizaje

- RA-9: Combinar funciones declarativas y de flecha, decisiones y un bucle con `break` para resolver un problema de la tienda.
