# 📘 Ejemplo 13 — toggleAttribute y removeAttribute

> 🎓 **Resultados de aprendizaje:** RA-4
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, con el archivo y la línea de cada error; los clics se hicieron por código. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Para **alternar** un atributo (poner o quitar) se usa `toggleAttribute`; para **quitarlo** sin alternar, `removeAttribute`.

El HTML de partida, dentro del `<body>`:

```html
<article class="tarjeta">
  <h2 id="nombre">Café</h2>
  <img id="foto" src="img/cafe.svg" alt="Taza de café">
  <a id="carta" href="carta.html" target="_blank">Ver la carta</a>
  <button id="pedir" class="pedir">Pedir</button>
</article>
```

## 💻 Código

El archivo [`13-toggle-y-remove-attribute.html`](../recursos/ejemplos/13-toggle-y-remove-attribute.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
const boton = document.getElementById('pedir');

console.log('toggle 1 → ' + boton.toggleAttribute('disabled') + ' (deshabilitado: ' + boton.disabled + ')');
console.log('toggle 2 → ' + boton.toggleAttribute('disabled') + ' (deshabilitado: ' + boton.disabled + ')');
console.log('toggle con true → ' + boton.toggleAttribute('disabled', true));
console.log('toggle con true otra vez → ' + boton.toggleAttribute('disabled', true));

boton.removeAttribute('disabled');
console.log('Tras removeAttribute: ' + boton.disabled);

const enlace = document.getElementById('carta');
enlace.removeAttribute('target');
console.log('target ahora: ' + enlace.getAttribute('target'));

enlace.removeAttribute('inventado');
console.log('Quitar un atributo que no existe no da error');
```

## 🔍 Análisis paso a paso

1. **`toggleAttribute(nombre)`** pone el atributo si no está y lo quita si está; devuelve **`true`** si queda puesto y **`false`** si queda quitado.
2. **Con un segundo argumento** (`toggleAttribute(nombre, true)`) fuerza el resultado: `true` lo pone (si ya estaba, lo deja) y `false` lo quita.
3. **`removeAttribute(nombre)`** quita el atributo; si no existe, **no da error**.
4. **Tras quitar un atributo,** `getAttribute` devuelve `null`.
5. **`toggleAttribute` está pensado para atributos booleanos** como `disabled` o `hidden` (Ejemplo 14).

## ✅ Resultado esperado

Al abrir `13-toggle-y-remove-attribute.html`, la consola muestra:

```text
toggle 1 → true (deshabilitado: true)
toggle 2 → false (deshabilitado: false)
toggle con true → true
toggle con true otra vez → true
Tras removeAttribute: false
target ahora: null
Quitar un atributo que no existe no da error
```

- `toggleAttribute` alterna un atributo y devuelve si quedó puesto; con `true` o `false` lo fuerza.
- `removeAttribute` quita un atributo sin error aunque no exista.
