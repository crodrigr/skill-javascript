# 📘 Ejemplo 22 — nodeName y textContent

> 🎓 **Resultados de aprendizaje:** RA-7
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, con el archivo y la línea de cada error; los clics se hicieron por código. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

`nodeName` dice **qué es** un nodo y `textContent` lee o cambia su **texto**, sin interpretar etiquetas.

El HTML de partida, dentro del `<body>`:

```html
<p id="precio">Café: <strong>$4.5</strong></p>
```

## 💻 Código

El archivo [`22-node-name-y-text-content.html`](../recursos/ejemplos/22-node-name-y-text-content.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
const precio = document.getElementById('precio');
const importe = precio.querySelector('strong');

console.log(precio.nodeName + ' / ' + importe.nodeName);
console.log(document.nodeName + ' / ' + document.body.nodeName);

console.log('Texto: ' + precio.textContent);

importe.textContent = '$5.0';
console.log('Cambié el importe: ' + precio.textContent);

precio.textContent = 'Café: <strong>$6</strong>';
console.log('Asigné texto con etiquetas: ' + precio.textContent);
console.log('Cómo quedó el HTML: ' + precio.innerHTML);
```

## 🔍 Análisis paso a paso

1. **`nodeName`** da el nombre del nodo: `P` y `STRONG` para elementos HTML (en mayúsculas), `#document` para `document`.
2. **`textContent` leído** junta el texto de **todo el elemento y sus hijos**, sin las etiquetas: `Café: $4.5`.
3. **`textContent` asignado** reemplaza **todo** el contenido por **texto**: cambiar solo el `<strong>` no toca el resto.
4. **No interpreta etiquetas:** al asignar `Café: <strong>$6</strong>`, las etiquetas se muestran **como texto** (en el HTML quedan escapadas: `&lt;strong&gt;`).
5. **Por eso `textContent` es la forma segura** de mostrar texto que viene de afuera (Ejemplo 26).
6. **Asignar `textContent`** borra los hijos: el `<strong>` original ya no existe.

## ✅ Resultado esperado

Al abrir `22-node-name-y-text-content.html`, la consola muestra:

```text
P / STRONG
#document / BODY
Texto: Café: $4.5
Cambié el importe: Café: $5.0
Asigné texto con etiquetas: Café: <strong>$6</strong>
Cómo quedó el HTML: Café: &lt;strong&gt;$6&lt;/strong&gt;
```

- `nodeName` da el nombre del nodo; `textContent` lee y cambia el texto sin interpretar etiquetas.
- Asignar `textContent` reemplaza todo el contenido del elemento.
