# 🔴 Desafío 01 — La caja de la tienda

> 🔴 **Nivel:** Desafío · 🎓 **Resultados de aprendizaje:** RA-7, RA-8, RA-9 · 🗓️ **Sesión 2**

## 🧱 Estado inicial

Abrí [`desafio.html`](../recursos/practica/desafio.html) y su archivo [`js/desafio.js`](../recursos/practica/js/desafio.js), de la carpeta `practica`. El archivo declara los **datos** de la compra: `precio` (`4.5`), `cantidadTexto` (`'3'`, un **texto**, como si lo hubiera escrito una persona), `descuento` (`0.1`, un 10%) y `envioGratisDesde` (`20`). Para los casos de prueba 2 a 6, cambiás **solo esos datos**.

## 🛠️ Proceso esperado

Escribí en `desafio.js`, **debajo de los datos**, los cálculos y la salida.

1. **Cantidad.** Convertí `cantidadTexto` en un número con `Number(...)` y guardalo en `cantidad`.
2. **Validez.** `datosValidos`: si `cantidad` es un número **finito** (`Number.isFinite`).
3. **Importes.** `subtotal` (precio por cantidad), `ahorro` (subtotal por descuento) y `total` (subtotal menos ahorro).
4. **Envío.** `envioGratis`: si el total es **mayor o igual** a `envioGratisDesde`.
5. **Por unidad.** `precioPorUnidad`: el total dividido por la cantidad.
6. **Relación.** `vecesElAhorro`: el subtotal dividido por el ahorro.
7. **Salida.** Con `console.log`, en este orden y con este formato (los importes con **dos decimales**, usando `.toFixed(2)`; la relación y los booleanos, tal cual):

```text
Datos válidos: true
Subtotal: 13.50
Ahorro: 1.35
Total: 12.15
Envío gratis: false
Precio por unidad: 4.05
Veces que cabe el ahorro en el subtotal: 10
Aroma: 3 x 4.5 = 12.15
```

   La última línea se arma con una **plantilla** de texto (comillas invertidas).

## ✅ Resultado esperado

- ☑️ Una salida idéntica a la del caso 1 con los datos originales.
- ☑️ Las salidas de los demás casos de prueba.
- ☑️ El HTML sin cambios.

## 🚧 Restricciones

- 🚫 No uses `if`, bucles, funciones ni `var`.
- 🚫 Usá `const` para todo (ningún valor cambia).
- 🚫 No cambies los nombres de los datos.

## 🎓 Resultados de aprendizaje

- RA-7: Operadores aritméticos, de comparación y lógicos.
- RA-8: Decimales, `NaN` e infinito.
- RA-9: Plantillas de texto y concatenación.

## 🧪 Casos de prueba

Cambiá los datos indicados y comprobá estas líneas de la salida:

| # | Datos | Datos válidos | Subtotal | Total | Envío gratis | Precio por unidad | Veces que cabe el ahorro |
|---|---|---|---|---|---|---|---|
| 1 | `precio = 4.5`, `cantidadTexto = '3'`, `descuento = 0.1` | `true` | `13.50` | `12.15` | `false` | `4.05` | `10` |
| 2 | `precio = 19.99`, `cantidadTexto = '3'`, `descuento = 0.1` | `true` | `59.97` | `53.97` | `true` | `17.99` | `10` |
| 3 | `precio = 4.5`, `cantidadTexto = 'abc'`, `descuento = 0.1` | `false` | `NaN` | `NaN` | `false` | `NaN` | `NaN` |
| 4 | `precio = 4.5`, `cantidadTexto = '0'`, `descuento = 0.1` | `true` | `0.00` | `0.00` | `false` | `NaN` | `NaN` |
| 5 | `precio = 4.5`, `cantidadTexto = '10'`, `descuento = 0.1` | `true` | `45.00` | `40.50` | `true` | `4.05` | `10` |
| 6 | `precio = 4.5`, `cantidadTexto = '3'`, `descuento = 0` | `true` | `13.50` | `13.50` | `false` | `4.50` | `Infinity` |

- En el caso 3 (`'abc'`) todo lo calculado es `NaN` y `datosValidos` es `false`.
- En el caso 4 (`'0'`), `0 / 0` da `NaN`; en el caso 6, `13.5 / 0` da `Infinity`.
- La hoja pasa la revisión de sintaxis sin errores y sin estructuras fuera de alcance.
