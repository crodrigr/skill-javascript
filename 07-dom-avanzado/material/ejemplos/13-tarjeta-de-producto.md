# 📘 Ejemplo 13 — Armar una tarjeta de producto

> 🎓 **Resultados de aprendizaje:** RA-1, RA-2, RA-3
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, con el archivo y la línea de cada error; los clics se hicieron por código. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Cierre de la sesión 1: Aroma tiene los datos de sus productos en un arreglo y quiere mostrarlos como **tarjetas**, sin escribir una por una en el HTML. Cada tarjeta se **crea**, se **configura** y se **inserta**.

El HTML de partida, dentro del `<body>`:

```html
<div id="carta"></div>
```

El CSS de la página, dentro de un `<style>` en el `<head>`:

```css
.tarjeta { border: 1px solid #94a3b8; padding: 8px; margin: 4px; display: inline-block; }
.precio { font-weight: bold; }
```

## 💻 Código

El archivo [`13-tarjeta-de-producto.html`](../recursos/ejemplos/13-tarjeta-de-producto.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
const productos = [
  { nombre: 'Café', precio: 4.5 },
  { nombre: 'Té', precio: 3.2 },
  { nombre: 'Galleta', precio: 1.8 }
];
const carta = document.getElementById('carta');

function crearTarjeta(producto) {
  const tarjeta = document.createElement('article');
  tarjeta.className = 'tarjeta';
  tarjeta.dataset.precio = producto.precio;

  const titulo = document.createElement('h2');
  titulo.textContent = producto.nombre;

  const precio = document.createElement('p');
  precio.className = 'precio';
  precio.textContent = '$' + producto.precio;

  const boton = document.createElement('button');
  boton.textContent = 'Pedir';

  tarjeta.append(titulo, precio, boton);
  return tarjeta;
}

for (const producto of productos) {
  carta.append(crearTarjeta(producto));
}

console.log('Tarjetas en la página: ' + carta.children.length);
console.log(carta.children[0].outerHTML);
console.log('Precio de la última: ' + carta.children[2].dataset.precio);
```

## 🔍 Análisis paso a paso

1. **Una función `crearTarjeta`** recibe un producto y devuelve una tarjeta **lista**: la crea, la configura (`className`, `dataset`) y le agrega sus hijos.
2. **`append` con varios argumentos** agrega el título, el precio y el botón de una vez.
3. **El bucle `for…of`** recorre el arreglo y agrega una tarjeta por producto: con diez productos no cambia el código.
4. **Todo el texto se asigna con `textContent`:** si un nombre trajera etiquetas, se vería como texto (no se interpretaría).
5. **El resultado final** tiene tres tarjetas y el HTML de cada una se puede leer con `outerHTML`.
6. **Combina las secciones 1.1 y 1.2:** crear nodos, configurar propiedades e insertar.

## ✅ Resultado esperado

Al abrir `13-tarjeta-de-producto.html`, la consola muestra:

```text
Tarjetas en la página: 3
<article class="tarjeta" data-precio="4.5"><h2>Café</h2><p class="precio">$4.5</p><button>Pedir</button></article>
Precio de la última: 1.8
```

- Una función que crea, configura y devuelve un elemento evita repetir código.
- Crear nodos con `textContent` permite mostrar datos de forma segura.
