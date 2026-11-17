# 🟢 Básico 02 — Mi primer callback

> 🟢 **Nivel:** Básico · 🎓 **Resultados de aprendizaje:** RA-5 · 🗓️ **Sesión 2**

## 🧱 Estado inicial

Abrí [`basico-02.html`](../recursos/practica/basico-02.html) y su archivo [`js/basico-02.js`](../recursos/practica/js/basico-02.js), de la carpeta `practica`. El archivo declara los precios de la tienda y dos funciones que dan formato:

```js
const precios = [4.5, 3.2, 1.8];

function conPesos(precio) {
  return '$' + precio;
}

function conDescuento(precio) {
  return '$' + (precio - 1);
}

// Escribí acá la función mostrarPrecios y sus llamadas
```

## 🛠️ Proceso esperado

1. Escribí una función `mostrarPrecios(lista, formato)` que recorra la lista con un `for` y, por cada precio, muestre en la consola lo que devuelva `formato(precio)`.
2. Mostrá `Precios normales` y llamala pasando `conPesos` (**sin** paréntesis).
3. Mostrá `Con descuento` y llamala pasando `conDescuento`.
4. Mostrá `En euros` y llamala con una **función de flecha** que anteponga `€` al precio.

**Respondé:** ¿Qué pasaría si, al llamar a `mostrarPrecios`, escribieras `conPesos()` con paréntesis en lugar de `conPesos`?

## ✅ Resultado esperado

La consola muestra (en este orden):

```text
Precios normales
$4.5
$3.2
$1.8
Con descuento
$3.5
$2.2
$0.8
En euros
€4.5
€3.2
€1.8
```

## 🚧 Restricciones

- 🚫 No uses `forEach`, `map` ni `reduce`.
- 🚫 `mostrarPrecios` no puede usar `conPesos` ni `conDescuento` por su nombre: tiene que usar el parámetro `formato`.

## 🎓 Resultados de aprendizaje

- RA-5
