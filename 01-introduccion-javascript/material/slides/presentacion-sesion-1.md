# 🟨 Introducción a JavaScript

Curso **JavaScript** · Clase 01 · **Sesión 1**

---

## 🎯 Objetivos de la sesión

- 🔹 Explicar qué es JavaScript y ejecutar el primer código.
- 🔹 Usar la consola y los dos modos de incorporar un script.
- 🔹 Conocer ECMAScript y los tipos de datos.
- 🔹 Declarar variables y constantes con criterio.

> 📌 No hace falta saber programar.

---

## 🟨 ¿Qué es JavaScript?

![Tres piezas de una página web. HTML es el contenido: el título Café Aroma y el párrafo con el total. CSS es el aspecto: color marrón para el título y verde en negrita para el total. JavaScript es el comportamiento: calcula 4.5 por 3 y escribe 13.5 en la página.](../imagenes/html-css-javascript.svg)

---

## ⌨️ La consola

![Una ventana de navegador con el panel de la consola abierto. Se escribe 2 más 3 y la consola devuelve 5. Con console.log se imprime Hola, Aroma y la consola devuelve undefined. Al escribir un nombre que no existe aparece un error en rojo: Uncaught ReferenceError: precioCafe is not defined.](../imagenes/la-consola.svg)

---

## 📄 En línea y desde un archivo externo

![Dos formas de incorporar JavaScript. En línea, el código va dentro de la página, entre las etiquetas script. Desde un archivo externo, la etiqueta script tiene un atributo src que apunta a un archivo con extensión js que solo contiene JavaScript. En los dos casos el navegador lee la página de arriba hacia abajo y ejecuta el script cuando lo encuentra: un script en el head se ejecuta antes de que exista el título.](../imagenes/en-linea-frente-a-externo.svg)

---

## 🚦 El lugar del `<script>` importa

- El navegador lee la página **de arriba hacia abajo**.
- En el `<head>`, el título todavía **no existe**: `null`.
- Al final del `<body>`, el título **ya existe**.
- Un error se informa con su **archivo y su línea**.

---

## 🕰️ ECMAScript

![Línea de tiempo de ECMAScript. ES5, en diciembre de 2009. Desde ES2015, en junio de 2015, hay una edición por año, cada junio. ES2015 aportó let, const y las plantillas de texto. ES2016 aportó el operador de potencia. ES2020 aportó el operador ?? y BigInt. ES2021 aportó los operadores lógicos de asignación.](../imagenes/versiones-de-ecmascript.svg)

---

## 🌐 Estrategia «crossbrowser»

1. **Consultar** la compatibilidad (MDN, *Baseline*).
2. **Detectar** con `typeof`: `typeof Number.isNaN`.
3. **Decidir** qué características usar.

> ⚠️ La sintaxis nueva no se detecta: si no se entiende, el script entero falla.

---

## 🏷️ Tipos de datos

![Los valores de JavaScript se dividen en siete tipos primitivos y los objetos. Los primitivos son number, string, boolean, undefined, null, bigint y symbol. Con typeof se obtiene el nombre del tipo; typeof null da object por un resto histórico.](../imagenes/tipos-de-datos.svg)

---

## 📦 `var`, `let` y `const`

![Comparación de var, let y const. var se reasigna, se puede redeclarar, tiene alcance de función y se puede usar antes de declararla con valor undefined. let se reasigna, no se redeclara, tiene alcance de bloque y usarla antes da error. const no se reasigna, no se redeclara, tiene alcance de bloque, exige un valor inicial y es la opción por defecto.](../imagenes/var-let-y-const.svg)

---

## 🔒 `const` no es «inmutable»

```js
const tienda = { nombre: 'Aroma' };
tienda.nombre = 'Aroma Centro';   // funciona
tienda = {};                      // TypeError
```

- `const` protege el **nombre**, no el contenido.
- Empezá con `const`; si cambia, `let`; evitá `var`.

---

## ⚠️ Errores comunes

- 🚫 Reasignar una `const`.
- 🚫 Redeclarar con `let`.
- 🚫 Usar una `let` antes de declararla.
- 🚫 Poner el script en el `<head>` y leer un elemento del `<body>`.

---

## 🛠️ Actividad

**Taller 01 — Mi primer programa en la consola.**

Y los ejercicios **Básico 01**, **Básico 02** e **Intermedio 01**.

---

## ✅ Resumen de la sesión

- 🔹 JavaScript = comportamiento; HTML = contenido; CSS = aspecto.
- 🔹 Consola para probar; `<script>` para incorporar.
- 🔹 ECMAScript es el estándar; comprobá la compatibilidad.
- 🔹 `const` por defecto, `let` si cambia.
