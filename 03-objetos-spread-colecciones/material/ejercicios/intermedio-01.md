# 🟡 Intermedio 01 — Métodos y `this`

> 🟡 **Nivel:** Intermedio · 🎓 **Resultados de aprendizaje:** RA-2, RA-3 · 🗓️ **Sesión 1**

## 🧱 Estado inicial

Abrí [`intermedio-01.html`](../recursos/practica/intermedio-01.html) y su archivo [`js/intermedio-01.js`](../recursos/practica/js/intermedio-01.js), de la carpeta `practica`. El archivo declara el producto **sin métodos**:

```js
const producto = {
  nombre: 'Brownie',
  precio: 3.5,
  stock: 6
};
```

## 🛠️ Proceso esperado

**Parte A — Métodos.** Agregá al objeto, con la forma abreviada, estos métodos (todos usan `this`):

1. `descripcion()`: devuelve el texto `Brownie: $3.5` (con el nombre y el precio del objeto).
2. `conDescuento(porcentaje)`: devuelve el precio con ese porcentaje de descuento (`precio * (100 - porcentaje) / 100`).
3. `vender(unidades)`: resta las unidades del `stock` y no devuelve nada.

Después mostrá `producto.descripcion()`, `producto.conDescuento(10)`, llamá `producto.vender(1)` y mostrá el `stock`.

**Parte B — Predecí** (sin ejecutar). Con el objeto de abajo, ¿qué muestra cada línea? Si hay error, indicá cuál.

```js
const producto = {
  nombre: 'Brownie',
  precio: 3.5,
  descripcion() {
    return `${this.nombre}: $${this.precio}`;
  },
  conIva: () => this.precio * 1.21
};

const f = producto.descripcion;
console.log(f());                 // a)
console.log(producto.conIva());   // b)
console.log(producto.descripcion()); // c)
```

**Parte C — Respondé:** ¿cómo conseguirías que `f()` muestre `Brownie: $3.5` sin cambiar el objeto?

## ✅ Resultado esperado

**Parte A**, en la consola:

```text
Brownie: $3.5
3.15
5
```

**Parte B:** una respuesta única por línea (ver las soluciones). **Parte C:** una respuesta con una frase.

## 🚧 Restricciones

- 🚫 Los métodos usan la forma abreviada, no funciones de flecha.
- 🚫 No uses `call`, `apply` ni `bind`.
- 🚫 En la Parte B **no ejecutes** el código: predecí primero.

## 🎓 Resultados de aprendizaje

- RA-2: Definir métodos con la forma abreviada.
- RA-3: Explicar a qué apunta `this` y reconocer cuándo se pierde.
