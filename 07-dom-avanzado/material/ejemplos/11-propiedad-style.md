# 📘 Ejemplo 11 — La propiedad style (en camelCase)

> 🎓 **Resultados de aprendizaje:** RA-3
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, con el archivo y la línea de cada error; los clics se hicieron por código. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Cada elemento tiene una propiedad `style` para cambiar su estilo **en línea**. Los nombres de las propiedades CSS con guion se escriben en **camelCase**.

El HTML de partida, dentro del `<body>`:

```html
<p id="aviso">Café agotado</p>
```

## 💻 Código

El archivo [`11-propiedad-style.html`](../recursos/ejemplos/11-propiedad-style.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
const aviso = document.getElementById('aviso');

aviso.style.backgroundColor = 'gold';
aviso.style.fontSize = '20px';
aviso.style.color = 'darkred';

console.log('Atributo style: ' + aviso.getAttribute('style'));
console.log('backgroundColor: ' + aviso.style.backgroundColor);
console.log('Con corchetes y guion: ' + aviso.style['background-color']);

aviso.style.cssText = 'color: green;';
console.log('Tras cssText: ' + aviso.getAttribute('style'));

aviso.style.color = '';
console.log('Tras vaciar color: ' + JSON.stringify(aviso.getAttribute('style')));
```

La segunda página, [`11-propiedad-style-con-guion.html`](../recursos/ejemplos/11-propiedad-style-con-guion.html) (un nombre con guion), tiene el mismo HTML y este código dentro de `<script>`:

```js
const aviso = document.getElementById('aviso');
console.log('Antes de asignar');
aviso.style.background-color = 'gold';
console.log('Esta línea no se ejecuta');
```

## 🔍 Análisis paso a paso

1. **`style.backgroundColor`** escribe el estilo en línea del elemento: aparece en el atributo `style="…"`.
2. **CSS usa guiones y JavaScript, *camelCase*:** `background-color` → `backgroundColor`, `font-size` → `fontSize`.
3. **Con corchetes** también se puede usar el nombre con guion (`style['background-color']`).
4. **La segunda página** muestra el error de escribir `style.background-color`: JavaScript lo lee como una **resta** y da `SyntaxError: Invalid left-hand side in assignment` (*lado izquierdo no válido en una asignación*).
5. **`style.cssText`** reemplaza **todo** el estilo en línea de una vez.
6. **Asignar `''`** (texto vacío) quita esa propiedad del estilo en línea.
7. **Cuidado:** cambiar estilos con `style` mezcla el aspecto con el código; para la mayoría de los casos conviene cambiar una **clase** (Clase 06).

## ✅ Resultado esperado

Al abrir `11-propiedad-style.html`, la consola muestra:

```text
Atributo style: background-color: gold; font-size: 20px; color: darkred;
backgroundColor: gold
Con corchetes y guion: gold
Tras cssText: color: green;
Tras vaciar color: ""
```

Al abrir `11-propiedad-style-con-guion.html`, la consola muestra:

```text
Uncaught SyntaxError: Invalid left-hand side in assignment (11-propiedad-style-con-guion.html:14)
```

- `style` cambia el estilo en línea, con las propiedades en *camelCase*.
- Escribir `style.background-color` da `SyntaxError`.
