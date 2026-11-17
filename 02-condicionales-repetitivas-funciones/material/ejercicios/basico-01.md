# 🟢 Básico 01 — Envío y descuento

> 🟢 **Nivel:** Básico · 🎓 **Resultados de aprendizaje:** RA-1 · 🗓️ **Sesión 1**

## 🧱 Estado inicial

Abrí [`basico-01.html`](../recursos/practica/basico-01.html) y su archivo [`js/basico-01.js`](../recursos/practica/js/basico-01.js), de la carpeta `practica`. El archivo declara el total de un pedido de la tienda «Aroma»:

```js
const total = 35;
```

## 🛠️ Proceso esperado

Escribí en `basico-01.js`, **debajo del dato**, estas decisiones:

1. **Descuento.** Con `if`, `else if` y `else` guardá en una variable `porcentaje` el descuento según el total: **10** si el total es 50 o más, **5** si es 20 o más (y menos de 50) y **0** en cualquier otro caso.
2. **Envío.** Con `if` y `else`, el envío es **gratis** si el total es 20 o más y **con costo** en caso contrario.
3. **Salida.** Con `console.log`, en este orden y con este formato:

```text
Total: 35
Descuento: 5%
Envío: gratis
```

## ✅ Resultado esperado

Con `total = 35`, la consola muestra las tres líneas de arriba. Probá también con otros dos totales (cambiá solo el dato):

| `total` | Salida esperada (en tres líneas) |
|---|---|
| `12` | `Total: 12` · `Descuento: 0%` · `Envío: con costo` |
| `35` | `Total: 35` · `Descuento: 5%` · `Envío: gratis` |
| `60` | `Total: 60` · `Descuento: 10%` · `Envío: gratis` |

## 🚧 Restricciones

- 🚫 No uses `switch` ni el operador `? :`.
- 🚫 Comparaciones con `===` cuando compares igualdad; escribí siempre las llaves.
- 🚫 No cambies el nombre de la constante `total`.

## 🎓 Resultados de aprendizaje

- RA-1: Tomar decisiones con `if`, `else if` y `else` combinando condiciones.
