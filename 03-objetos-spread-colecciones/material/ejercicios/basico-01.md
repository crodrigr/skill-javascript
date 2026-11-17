# 🟢 Básico 01 — La ficha del producto

> 🟢 **Nivel:** Básico · 🎓 **Resultados de aprendizaje:** RA-1, RA-2 · 🗓️ **Sesión 1**

## 🧱 Estado inicial

Abrí [`basico-01.html`](../recursos/practica/basico-01.html) y su archivo [`js/basico-01.js`](../recursos/practica/js/basico-01.js), de la carpeta `practica`. El archivo solo tiene un comentario.

## 🛠️ Proceso esperado

Escribí en `basico-01.js`:

1. Un objeto `producto` con la notación literal: `nombre` `'Galleta'`, `precio` `1.8` y `stock` `40`.
2. Agregá la propiedad `activo` con el valor `true` y cambiá el `stock` a `35`. Mostrá el objeto con `console.log`.
3. Borrá la propiedad `activo` y mostrá si `'activo' in producto`.
4. Mostrá el nombre con **corchetes** y el precio con **punto**, en una sola línea.
5. Mostrá la propiedad inexistente `color`.

**Respondé:** ¿por qué se puede cambiar el `stock` si el objeto está guardado en una `const`?

## ✅ Resultado esperado

La consola muestra:

```text
{nombre: 'Galleta', precio: 1.8, stock: 35, activo: true}
false
Galleta 1.8
undefined
```

## 🚧 Restricciones

- 🚫 Declará el objeto con la notación literal (`{ }`), no con `new Object()`.
- 🚫 Usá `const` para el objeto.
- 🚫 No uses métodos todavía.

## 🎓 Resultados de aprendizaje

- RA-1: Declarar un objeto y agregar, modificar, borrar y comprobar propiedades.
- RA-2: Acceder a propiedades con punto y con corchetes.
