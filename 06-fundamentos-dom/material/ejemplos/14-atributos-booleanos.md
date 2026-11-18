# 📘 Ejemplo 14 — Atributos booleanos: basta con que existan

> 🎓 **Resultados de aprendizaje:** RA-5
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, con el archivo y la línea de cada error; los clics se hicieron por código. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Diego escribió `setAttribute('disabled', 'false')` para **habilitar** un botón y el botón siguió deshabilitado. En los **atributos booleanos** (`disabled`, `hidden`, `checked`) lo que importa es que el atributo **exista**, no su valor.

El HTML de partida, dentro del `<body>`:

```html
<form method="get">
  <input id="oferta" type="checkbox" name="oferta" value="si" checked>
</form>
<button id="pedir" disabled>Pedir</button>
<p id="aviso" hidden>Café agotado</p>
```

## 💻 Código

El archivo [`14-atributos-booleanos.html`](../recursos/ejemplos/14-atributos-booleanos.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
const boton = document.getElementById('pedir');
const aviso = document.getElementById('aviso');
const oferta = document.getElementById('oferta');

console.log('getAttribute de disabled: ' + JSON.stringify(boton.getAttribute('disabled')));
console.log('disabled: ' + boton.disabled);

boton.setAttribute('disabled', 'false');
console.log('Tras setAttribute("disabled", "false"): ' + boton.disabled);

boton.removeAttribute('disabled');
console.log('Tras removeAttribute: ' + boton.disabled);

console.log('hidden: ' + aviso.hidden);
aviso.toggleAttribute('hidden');
console.log('hidden tras toggleAttribute: ' + aviso.hidden);

console.log('checked: ' + oferta.checked + ' | atributo: ' + JSON.stringify(oferta.getAttribute('checked')));
```

## 🔍 Análisis paso a paso

1. **Un atributo booleano está «activado» cuando existe,** sin importar su valor: `<button disabled>` y `<button disabled="false">` están los dos deshabilitados.
2. **`getAttribute` de un booleano presente** devuelve el texto vacío (`""`); si no está, `null`.
3. **`setAttribute('disabled', 'false')` no lo desactiva:** el atributo sigue existiendo. La forma correcta es **quitarlo** con `removeAttribute` o `toggleAttribute`.
4. **Las propiedades** `boton.disabled`, `aviso.hidden` y `oferta.checked` reflejan el estado como `true` o `false`.
5. **Booleanos comunes:** `disabled` (deshabilitado), `hidden` (oculto), `checked` (marcado), `readonly`, `required` y `selected`.

## ✅ Resultado esperado

Al abrir `14-atributos-booleanos.html`, la consola muestra:

```text
getAttribute de disabled: ""
disabled: true
Tras setAttribute("disabled", "false"): true
Tras removeAttribute: false
hidden: true
hidden tras toggleAttribute: false
checked: true | atributo: ""
```

- Un atributo booleano vale `true` si existe, aunque su valor sea `"false"`.
- Para apagarlo hay que quitarlo con `removeAttribute` o `toggleAttribute`.
