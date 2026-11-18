# 📘 Ejemplo 05 — cloneNode: copiar un nodo

> 🎓 **Resultados de aprendizaje:** RA-2
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, con el archivo y la línea de cada error; los clics se hicieron por código. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Para tener **otro** elemento igual (una copia), se usa `cloneNode`. Pero el clon tiene sus propias reglas: no está en la página hasta insertarlo y no hereda los controladores de eventos.

El HTML de partida, dentro del `<body>`:

```html
<ul id="menu">
  <li id="cafe" class="producto">Café <b>(destacado)</b></li>
</ul>
<button id="avisar">Avisar</button>
```

El CSS de la página, dentro de un `<style>` en el `<head>`:

```css
.producto { padding: 4px 8px; }
.destacado { background: #fef9c3; }
```

## 💻 Código

El archivo [`05-clonar-nodos.html`](../recursos/ejemplos/05-clonar-nodos.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
const menu = document.getElementById('menu');
const cafe = document.getElementById('cafe');

cafe.addEventListener('click', () => console.log('clic en ' + cafe.textContent.trim()));

const superficial = cafe.cloneNode(false);
const profundo = cafe.cloneNode(true);
console.log('false → ' + superficial.outerHTML);
console.log('true  → ' + profundo.outerHTML);
console.log('El clon está en la página: ' + profundo.isConnected + ', padre: ' + profundo.parentNode);

profundo.id = 'cafe2';
menu.append(profundo, profundo);
console.log('Insertado dos veces → productos: ' + menu.children.length);

cafe.click();
profundo.click();
console.log('Fin: el clon no copió el controlador de clic');
```

## 🔍 Análisis paso a paso

1. **`cloneNode(false)`** (o sin argumento) copia **solo el elemento** y sus atributos, sin los hijos: queda `<li id="cafe" class="producto"></li>` vacío.
2. **`cloneNode(true)`** copia **también todos sus hijos** (el texto y el `<b>`).
3. **El clon no está en la página:** `isConnected` es `false` y no tiene padre hasta insertarlo.
4. **Cambiá el `id` del clon** antes de insertarlo: dos elementos con el mismo `id` rompen `getElementById`.
5. **Insertar el mismo clon dos veces** no lo duplica: la segunda vez solo lo mueve, y quedan **dos** productos (el original y el clon).
6. **Los controladores de eventos puestos con `addEventListener` no se copian:** el clic en el original muestra el mensaje y el clic en el clon, no.

## ✅ Resultado esperado

Al abrir `05-clonar-nodos.html`, la consola muestra:

```text
false → <li id="cafe" class="producto"></li>
true  → <li id="cafe" class="producto">Café <b>(destacado)</b></li>
El clon está en la página: false, padre: null
Insertado dos veces → productos: 2
clic en Café (destacado)
Fin: el clon no copió el controlador de clic
```

- `cloneNode(false)` copia el elemento; `cloneNode(true)`, también sus hijos; el clon no está en la página.
- Los controladores de `addEventListener` no se copian.
