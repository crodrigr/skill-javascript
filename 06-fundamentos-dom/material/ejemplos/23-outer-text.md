# 📘 Ejemplo 23 — outerText frente a textContent

> 🎓 **Resultados de aprendizaje:** RA-7
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, con el archivo y la línea de cada error; los clics se hicieron por código. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

`textContent` y `outerText` parecen iguales, pero no lo son: `outerText` devuelve el texto **tal como se ve** y, al **asignarlo**, reemplaza el elemento completo.

El HTML de partida, dentro del `<body>`:

```html
<div id="caja">
  <p id="nota">Hola <span hidden>(oculto)</span>mundo</p>
</div>
```

## 💻 Código

El archivo [`23-outer-text.html`](../recursos/ejemplos/23-outer-text.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
const nota = document.getElementById('nota');

console.log('textContent: ' + JSON.stringify(nota.textContent));
console.log('outerText: ' + JSON.stringify(nota.outerText));

nota.outerText = 'Texto nuevo';

console.log('¿Existe todavía #nota? ' + document.getElementById('nota'));
console.log('La caja ahora: ' + JSON.stringify(document.getElementById('caja').textContent.trim()));
```

## 🔍 Análisis paso a paso

1. **`textContent` incluye el texto oculto:** el `<span hidden>` aparece en el resultado.
2. **`outerText` devuelve el texto «renderizado»:** lo que se ve; el texto oculto **no** aparece.
3. **Al asignar `outerText`** se reemplaza **el elemento completo** (el `<p>`), no solo su contenido: `#nota` deja de existir y `getElementById` devuelve `null`.
4. **`textContent` asignado,** en cambio, deja el `<p>` y solo cambia lo de adentro.
5. **`outerText` depende de cómo se muestra la página:** si el elemento no se está mostrando, da lo mismo que `textContent`. Es menos usado; en el día a día conviene `textContent`.

## ✅ Resultado esperado

Al abrir `23-outer-text.html`, la consola muestra:

```text
textContent: "Hola (oculto)mundo"
outerText: "Hola mundo"
¿Existe todavía #nota? null
La caja ahora: "Texto nuevo"
```

- `outerText` lee el texto visible y, al asignarse, reemplaza el elemento completo.
- `textContent` incluye el texto oculto y deja el elemento en su lugar.
