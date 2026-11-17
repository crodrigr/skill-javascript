# 🛠️ Taller 01 — La ficha del producto

## 🎯 Objetivo

Aplicar lo aprendido en la sesión 1: declarar un objeto con propiedades (RA-1), agregarle métodos y leerlo con punto y con corchetes (RA-2) y explicar a qué apunta `this` (RA-3).

## 🌍 Contexto

Trabajás solo o en pareja con **una página propia** (puede ser una tienda, un taller o un comercio imaginario) y un archivo `.js`. Usás VS Code (o un editor en línea) y el navegador con su consola. No hace falta instalar nada más. **Mantené la consola abierta (F12) mientras trabajás.**

## 🪜 Pasos

1. **El objeto.** Declará con `const` el objeto `producto` con al menos cuatro propiedades (nombre, precio, stock y una propiedad con espacios en el nombre, por ejemplo `'país de origen'`).
2. **Leer.** Mostrá dos propiedades con punto y la de nombre con espacios con corchetes.
3. **Cambiar.** Agregá una propiedad, modificá el precio y borrá otra. Mostrá el objeto después de cada cambio.
4. **Comprobar.** Mostrá con `in` si una propiedad existe y qué da leer una que no existe.
5. **Un método.** Agregá `descripcion()` (forma abreviada) que devuelva un texto armado con `this`.
6. **Un método que cambia el objeto.** Agregá `vender(unidades)` que reste del stock, y comprobá el resultado.
7. **Otro objeto.** Creá un segundo producto que reutilice el método `descripcion` del primero y comprobá que cada uno responde con sus datos.
8. **`this` perdido.** Guardá un método en una variable y llamalo; anotá qué ocurre y por qué. Corregilo llamando al método con el objeto.
9. **Una propiedad opcional.** Leé una propiedad anidada que puede no existir con `?.`.
10. **Revisá** que no haya funciones de flecha como métodos y que los nombres sean claros.

## 📦 Entregable

La carpeta del proyecto (página y archivo `.js`) y una nota con: la salida del paso 3, lo que ocurrió en el paso 8 con una explicación de por qué y una frase que diga qué valor tiene `this` en `producto.vender(1)`.

## 📋 Criterios de evaluación

- ✔️ El objeto tiene propiedades de varios tipos y se lee con punto y con corchetes.
- ✔️ Las propiedades se agregan, modifican, borran y comprueban.
- ✔️ Hay métodos con la forma abreviada que usan `this`.
- ✔️ El segundo objeto reutiliza un método y cada objeto responde con sus datos.
- ✔️ La nota explica por qué se perdió `this` y cómo se corrigió.
