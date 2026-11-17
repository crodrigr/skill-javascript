# 🟡 Intermedio 02 — Los cálculos de la tienda

> 🟡 **Nivel:** Intermedio · 🎓 **Resultados de aprendizaje:** RA-7 · 🗓️ **Sesión 2**

## 🧱 Estado inicial

Abrí [`intermedio-02.html`](../recursos/practica/intermedio-02.html) y su archivo [`js/intermedio-02.js`](../recursos/practica/js/intermedio-02.js), de la carpeta `practica`. El archivo ya declara cuatro constantes de la tienda: `precio` (`4.5`), `cantidad` (`3`), `iva` (`0.21`) y `minimo` (`10`).

## 🛠️ Proceso esperado

**Parte A — Predecí sin ejecutar.** Escribí en papel el resultado de cada expresión y después comprobalo en la consola.

| # | Expresión | Resultado |
|---|---|---|
| 1 | `2 + 3 * 4` | `14` |
| 2 | `(2 + 3) * 4` | `20` |
| 3 | `10 % 4` | `2` |
| 4 | `2 ** 3 ** 2` | `512` |
| 5 | `'5' + 3 - 1` | `52` |
| 6 | `7 / 2` | `3.5` |

**Parte B — Escribí los cálculos** en `intermedio-02.js` con constantes y mostralos con `console.log`, en este orden:

1. `subtotal`: el precio por la cantidad. Mostralo como `Subtotal:` y el valor.
2. `conIva`: el subtotal más su IVA (`subtotal * (1 + iva)`). `Con IVA:`.
3. `llegaAlMinimo`: si el subtotal es **mayor o igual** al mínimo. `¿Llega al mínimo?`.
4. `cantidadPar`: si la cantidad es par (usá `%` y `===`). `¿Cantidad par?`.
5. `hayStockYMinimo`: si la cantidad es mayor que cero **y** llega al mínimo. `¿Hay stock y llega al mínimo?`.
6. `unidadesSobrantes`: el resto de dividir la cantidad por `2`. `Sobrantes:`.
7. El cuadrado de la cantidad, calculado en el propio `console.log`. `Cuadrado de la cantidad:`.

**Parte C — Respondé:**

1. ¿Por qué `'5' + 3 - 1` da `52` y no `7`?
2. ¿Por qué usás `===` y no `==` en el punto 4?
3. ¿Por qué `conIva` tiene decimales tan largos y qué harías para mostrar un importe?

## ✅ Resultado esperado

Con la página abierta, la consola muestra:

```text
Subtotal: 13.5
Con IVA: 16.335
¿Llega al mínimo? true
¿Cantidad par? false
¿Hay stock y llega al mínimo? true
Sobrantes: 1
Cuadrado de la cantidad: 9
```

## 🚧 Restricciones

- 🚫 No cambies las cuatro constantes del principio.
- 🚫 Usá `const` para cada resultado.
- 🚫 No uses estructuras de control ni funciones.

## 🎓 Resultados de aprendizaje

- RA-7: Usar operadores aritméticos, de comparación y lógicos, y predecir el resultado de una expresión.
