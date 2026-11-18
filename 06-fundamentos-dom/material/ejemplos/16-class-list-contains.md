# 📘 Ejemplo 16 — classList.contains: ¿tiene esta clase?

> 🎓 **Resultados de aprendizaje:** RA-6
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, con el archivo y la línea de cada error; los clics se hicieron por código. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Antes de cambiar algo conviene saber si una clase está puesta. `contains` responde con `true` o `false`.

El HTML de partida, dentro del `<body>`:

```html
<ul id="menu">
  <li id="cafe" class="producto destacado oferta">Café</li>
</ul>
```

## 💻 Código

El archivo [`16-class-list-contains.html`](../recursos/ejemplos/16-class-list-contains.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
const cafe = document.getElementById('cafe');

console.log('oferta: ' + cafe.classList.contains('oferta'));
console.log('agotado: ' + cafe.classList.contains('agotado'));
console.log('Oferta (con mayúscula): ' + cafe.classList.contains('Oferta'));

if (cafe.classList.contains('destacado')) {
  console.log('El café es un producto destacado');
}
```

## 🔍 Análisis paso a paso

1. **`contains(clase)`** devuelve `true` si el elemento tiene esa clase y `false` si no.
2. **Distingue mayúsculas y minúsculas:** `Oferta` y `oferta` son clases distintas.
3. **Se usa mucho dentro de un `if`** para decidir qué hacer.
4. **No hay que escribir el punto:** el nombre es `oferta`, no `.oferta`.
5. **Una clase que no existe** da `false`, sin error.

## ✅ Resultado esperado

Al abrir `16-class-list-contains.html`, la consola muestra:

```text
oferta: true
agotado: false
Oferta (con mayúscula): false
El café es un producto destacado
```

- `classList.contains` devuelve `true` o `false`.
- Distingue mayúsculas y minúsculas y no lleva punto.
