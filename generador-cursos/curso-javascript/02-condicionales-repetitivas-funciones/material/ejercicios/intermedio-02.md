# 🟡 Intermedio 02 — Funciones declarativas y de expresión

> 🟡 **Nivel:** Intermedio · 🎓 **Resultados de aprendizaje:** RA-5, RA-6 · 🗓️ **Sesión 2**

## 🧱 Estado inicial

Abrí [`intermedio-02.html`](../recursos/practica/intermedio-02.html) y su archivo [`js/intermedio-02.js`](../recursos/practica/js/intermedio-02.js), de la carpeta `practica`. El archivo solo tiene comentarios.

## 🛠️ Proceso esperado

**Parte A — Función declarativa.** Escribí `calcularTotal(precio, cantidad, descuento)`: devuelve `precio * cantidad * (1 - descuento)`, y `descuento` vale `0` si no se pasa.

**Parte B — Función de expresión.** Escribí, con `const`, la función `porcentajeDescuento(total)`: devuelve `10` si el total es 50 o más, `5` si es 20 o más y `0` en otro caso.

**Parte C — Probala.** Al final del archivo agregá estas líneas:

```js
console.log(calcularTotal(4.5, 3));
console.log(calcularTotal(4.5, 3, 0.1));
console.log(calcularTotal(4.5));
console.log(porcentajeDescuento(13.5), porcentajeDescuento(35), porcentajeDescuento(60));
```

**Parte D — Predecí** (sin ejecutar). Para cada fragmento indicá qué se muestra o qué error aparece:

```js
// a)
console.log(duplicar(4));
function duplicar(n) { return n * 2; }

// b)
console.log(triplicar(4));
const triplicar = function (n) { return n * 3; };

// c)
function sumar(a, b) { const resultado = a + b; }
console.log(sumar(1, 2));
```

## ✅ Resultado esperado

**Partes A a C**, en la consola:

```text
13.5
12.15
NaN
0 5 10
```

**Parte D:** una respuesta única por fragmento (ver las soluciones).

## 🚧 Restricciones

- 🚫 No uses funciones de flecha.
- 🚫 La Parte A es una función **declarativa** y la Parte B, una de **expresión** guardada en una constante.
- 🚫 Cada función devuelve el valor con `return`; no lo muestra con `console.log` dentro.

## 🎓 Resultados de aprendizaje

- RA-5: Declarar y llamar funciones con parámetros, valores por defecto y `return`.
- RA-6: Escribir una función de expresión y explicar la diferencia de elevación con la declarativa.
