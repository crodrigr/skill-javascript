# 📘 Ejemplo 12 — getAttributeNames: listar los atributos

> 🎓 **Resultados de aprendizaje:** RA-4
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, con el archivo y la línea de cada error; los clics se hicieron por código. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

¿Qué atributos tiene un elemento? `getAttributeNames` devuelve la lista de sus **nombres**, para recorrerlos y leer cada valor.

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

El archivo [`12-get-attribute-names.html`](../recursos/ejemplos/12-get-attribute-names.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
const foto = document.getElementById('foto');
console.log(foto.getAttributeNames());

for (const nombre of foto.getAttributeNames()) {
  console.log(nombre + ' = ' + foto.getAttribute(nombre));
}

const boton = document.getElementById('pedir');
console.log(boton.getAttributeNames().length + ' atributos en el botón');
```

## 🔍 Análisis paso a paso

1. **`getAttributeNames()`** devuelve un **arreglo** de textos con los nombres de los atributos, en el orden en que están escritos.
2. **Es un arreglo de verdad:** se recorre con `for…of` y tiene `length`.
3. **Combinado con `getAttribute`** permite mostrar todos los atributos y sus valores.
4. **Un elemento sin atributos** devuelve un arreglo vacío.
5. **La consola real** muestra el arreglo con una flecha para desplegarlo; aquí se escribe en una línea.

## ✅ Resultado esperado

Al abrir `12-get-attribute-names.html`, la consola muestra:

```text
(3) ['id', 'src', 'alt']
id = foto
src = img/cafe.svg
alt = Taza de café
2 atributos en el botón
```

- `getAttributeNames` devuelve un arreglo con los nombres de los atributos.
- Se combina con `getAttribute` para leer todos los valores.
