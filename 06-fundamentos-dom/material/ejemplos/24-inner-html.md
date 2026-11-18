# 📘 Ejemplo 24 — innerHTML: leer y asignar HTML

> 🎓 **Resultados de aprendizaje:** RA-7
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, con el archivo y la línea de cada error; los clics se hicieron por código. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Para mostrar contenido **con etiquetas** (listas, negritas, enlaces) se usa `innerHTML`: lee y asigna el **HTML interno** de un elemento.

El HTML de partida, dentro del `<body>`:

```html
<ul id="menu"><li>Café</li><li>Té</li></ul>
```

## 💻 Código

El archivo [`24-inner-html.html`](../recursos/ejemplos/24-inner-html.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
const menu = document.getElementById('menu');

console.log('Leído: ' + menu.innerHTML);

menu.innerHTML = '<li>Galleta</li><li><b>Medialuna</b></li>';
console.log('Asignado: ' + menu.innerHTML);
console.log('Solo el texto: ' + menu.textContent);

menu.innerHTML = '';
console.log('Vacío: "' + menu.innerHTML + '"');
```

## 🔍 Análisis paso a paso

1. **`innerHTML` leído** devuelve el **HTML** de todo lo que hay dentro del elemento (etiquetas incluidas).
2. **`innerHTML` asignado** reemplaza el contenido: el texto se **interpreta como HTML** y se crean los elementos (aquí, dos `<li>` nuevos, uno con negrita).
3. **`textContent`** sobre el mismo elemento da solo el texto, sin etiquetas.
4. **Asignar una cadena vacía** (`''`) es la forma de vaciar un elemento.
5. **Atención:** `innerHTML` interpreta lo que le asignás. Si el texto viene de una persona usuaria, puede ser peligroso (Ejemplo 26).

## ✅ Resultado esperado

Al abrir `24-inner-html.html`, la consola muestra:

```text
Leído: <li>Café</li><li>Té</li>
Asignado: <li>Galleta</li><li><b>Medialuna</b></li>
Solo el texto: GalletaMedialuna
Vacío: ""
```

- `innerHTML` lee y asigna el HTML interno de un elemento y lo interpreta.
- Asignar `''` vacía el elemento.
