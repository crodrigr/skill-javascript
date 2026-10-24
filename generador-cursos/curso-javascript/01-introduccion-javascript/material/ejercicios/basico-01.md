# 🟢 Básico 01 — Tu primera página con JavaScript

> 🟢 **Nivel:** Básico · 🎓 **Resultados de aprendizaje:** RA-1, RA-2, RA-3 · 🗓️ **Sesión 1**

## 🧱 Estado inicial

Abrí [`basico-01.html`](../recursos/practica/basico-01.html) de la carpeta `practica`. Es la página de la tienda «Aroma», con un título (`id="titulo"`) y dos comentarios que marcan dónde agregar tu código. También existe el archivo vacío [`js/basico-01.js`](../recursos/practica/js/basico-01.js).

## 🛠️ Proceso esperado

**Parte A — La consola.** Abrí una consola **nueva** y evaluá estas expresiones. Anotá el resultado de cada una.

| # | Escribí | Resultado esperado |
|---|---|---|
| 1 | `4.5 * 3` | `13.5` |
| 2 | `'Aroma'.length` | `5` |
| 3 | `10 / 4` | `2.5` |
| 4 | `typeof 'Aroma'` | `'string'` |
| 5 | `precioTe` | `Uncaught ReferenceError: precioTe is not defined` |

**Parte B — Script en línea.** Agregá, **al final del `<body>`**, un `<script>` que muestre en la consola `Bienvenida a Café Aroma` y el texto del título (con `document.getElementById('titulo').textContent`).

**Parte C — Script externo.** Agregá la etiqueta `<script src="js/basico-01.js"></script>` y escribí en el archivo `basico-01.js` el código que defina `precio` (`4.5`) y `cantidad` (`3`) y muestre `Total:` seguido de su producto.

**Parte D — Respondé:**

1. ¿Por qué el script de la Parte B va al final del `<body>` y no en el `<head>`?
2. ¿Qué diferencia hay entre un script en línea y uno externo?
3. ¿Cómo sabés en qué archivo y en qué línea ocurrió un error?

## ✅ Resultado esperado

Al abrir `basico-01.html`, la consola muestra:

```text
Bienvenida a Café Aroma
El título dice: Café Aroma
Total: 13.5
```

- Las respuestas de la Parte A coinciden con la tabla.
- Una respuesta de una o dos frases a cada pregunta de la Parte D.

## 🚧 Restricciones

- 🚫 No cambies el título ni los comentarios de la página.
- 🚫 No uses estructuras de control ni funciones (todavía no se estudiaron).
- 🚫 Usá `const` para `precio` y `cantidad`.

## 🎓 Resultados de aprendizaje

- RA-1: Explicar qué es JavaScript.
- RA-2: Usar la consola.
- RA-3: Incorporar JavaScript en línea y desde un archivo externo.
