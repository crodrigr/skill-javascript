# 📘 Ejemplo 02 — El script al final del body

> 🎓 **Resultados de aprendizaje:** RA-1
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, con el archivo y la línea de cada error; los clics se hicieron por código. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Marcos escribió su código en el `<head>` y el programa falló: el título todavía **no existía** cuando el script se ejecutó. El navegador lee la página de arriba hacia abajo y construye el DOM a medida que avanza.

El HTML de partida, dentro del `<body>`:

```html
<h1 id="titulo" class="titulo">Menú de Aroma</h1>
<ul id="menu">
  <li class="producto">Café</li>
  <li class="producto destacado">Té</li>
  <li class="producto">Galleta</li>
  <li class="producto">Medialuna</li>
</ul>
```

## 💻 Código

El archivo [`02-script-al-final.html`](../recursos/ejemplos/02-script-al-final.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
const titulo = document.getElementById('titulo');
console.log('El script está al final del <body>: ' + titulo.textContent);
```

La segunda página, [`02-script-al-final-en-el-head.html`](../recursos/ejemplos/02-script-al-final-en-el-head.html) (el mismo código en el head), tiene el mismo HTML, pero el script está **en el `<head>`**:

```js
const titulo = document.getElementById('titulo');
console.log('El script está en el <head>: ' + titulo);
console.log(titulo.textContent);
```

## 🔍 Análisis paso a paso

1. **El navegador construye el DOM de arriba hacia abajo.** Cuando ejecuta un `<script>`, solo existen los elementos que están **antes** de él en el archivo.
2. **Script al final del `<body>`:** todos los elementos ya existen, así que `getElementById` encuentra el título.
3. **Script en el `<head>`** (segunda página): el `<h1>` todavía no existe y `getElementById` devuelve `null`. Leer `textContent` de `null` da `TypeError: Cannot read properties of null (reading 'textContent')` (*no se pueden leer propiedades de null*).
4. **Regla de la clase:** el `<script>` va **siempre al final del `<body>`**, justo antes de `</body>`.
5. **Existen otras soluciones** (el atributo `defer` o esperar el evento de carga), que veremos más adelante.

## ✅ Resultado esperado

Al abrir `02-script-al-final.html`, la consola muestra:

```text
El script está al final del <body>: Menú de Aroma
```

Al abrir `02-script-al-final-en-el-head.html`, la consola muestra:

```text
El script está en el <head>: null
Uncaught TypeError: Cannot read properties of null (reading 'textContent') (02-script-al-final-en-el-head.html:9)
```

- Un script ejecuta con lo que ya existe en el DOM: ponelo al final del `<body>`.
- Buscar un elemento que todavía no existe devuelve `null`.
