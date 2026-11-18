# 📘 Ejemplo 12 — Estilo en línea y estilo calculado

> 🎓 **Resultados de aprendizaje:** RA-3
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, con el archivo y la línea de cada error; los clics se hicieron por código. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Sofía definió el color rojo en una **clase de CSS** y le preguntó a `style.color`… y le devolvió un texto vacío. `style` solo conoce el estilo **escrito en línea**; el valor que realmente se aplica lo da `getComputedStyle`.

El HTML de partida, dentro del `<body>`:

```html
<p id="precio" class="rojo">$4.5</p>
```

El CSS de la página, dentro de un `<style>` en el `<head>`:

```css
.rojo { color: red; }
```

## 💻 Código

El archivo [`12-estilo-en-linea-y-calculado.html`](../recursos/ejemplos/12-estilo-en-linea-y-calculado.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
const precio = document.getElementById('precio');

console.log('style.color: ' + JSON.stringify(precio.style.color));
console.log('getComputedStyle.color: ' + getComputedStyle(precio).color);

precio.style.color = 'blue';
console.log('Tras style.color = blue → style: ' + precio.style.color);
console.log('Tras style.color = blue → calculado: ' + getComputedStyle(precio).color);

precio.style.color = '';
console.log('Tras vaciar → calculado: ' + getComputedStyle(precio).color);
console.log('display calculado: ' + getComputedStyle(precio).display);
```

## 🔍 Análisis paso a paso

1. **`elemento.style`** solo refleja lo que está **escrito en línea** (en el atributo `style` o asignado con JavaScript): el color de una **clase** no aparece.
2. **`getComputedStyle(elemento)`** devuelve el **estilo final aplicado** (el resultado de todas las reglas): el color rojo se lee como `rgb(255, 0, 0)`.
3. **El estilo en línea gana a la clase:** al asignar `blue`, el calculado cambia; al vaciarlo, **vuelve** el de la clase.
4. **`getComputedStyle` es de solo lectura:** para cambiar un estilo se usa `style` o una clase.
5. **También da valores que no escribiste:** por ejemplo, `display` calculado de un `<p>` es `block`.
6. **Los valores calculados** vienen normalizados (los colores, como `rgb(…)`; las medidas, en píxeles).

## ✅ Resultado esperado

Al abrir `12-estilo-en-linea-y-calculado.html`, la consola muestra:

```text
style.color: ""
getComputedStyle.color: rgb(255, 0, 0)
Tras style.color = blue → style: blue
Tras style.color = blue → calculado: rgb(0, 0, 255)
Tras vaciar → calculado: rgb(255, 0, 0)
display calculado: block
```

- `style` ve solo el estilo en línea; `getComputedStyle` da el valor final aplicado.
- `getComputedStyle` es de solo lectura.
