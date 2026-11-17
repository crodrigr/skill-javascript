# 📘 Ejemplo 24 — `FormData`: los datos de un formulario

> 🎓 **Resultados de aprendizaje:** RA-11
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome y se anotó lo que imprimió la consola, con el archivo y la línea de cada error. Los valores se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador. La consola real muestra los objetos como un árbol que se despliega; aquí se escriben en una sola línea.

## 🧱 Situación inicial

La tienda tiene un formulario para tomar un pedido. Lucía quiere leer lo que se escribió sin pedir cada campo uno por uno. `FormData` reúne **todos los campos con nombre** de un formulario.

## 💻 Código

El archivo [`24-formdata.html`](../recursos/ejemplos/24-formdata.html) tiene este código dentro de `<script>`:

El formulario de la página (dentro del `<body>`):

```html
<form id="pedido">
  <input name="producto" value="Café">
  <input name="cantidad" type="number" value="3">
  <select name="tamano">
    <option value="chico">Chico</option>
    <option value="grande" selected>Grande</option>
  </select>
  <input value="sin nombre">
</form>
```

Y el código:

```js
const formulario = document.getElementById('pedido');
const datos = new FormData(formulario);

console.log(datos.get('producto'), datos.get('cantidad'), typeof datos.get('cantidad'));
console.log(datos.get('inexistente'));

for (const [campo, valor] of datos) {
  console.log(campo, '=', valor);
}

const pedido = Object.fromEntries(datos);
console.log(pedido);
console.log(Number(pedido.cantidad) * 4.5);
```

## 🔍 Análisis paso a paso

1. **`FormData` es del navegador,** no del lenguaje ECMAScript: existe donde hay páginas web. Aquí solo leemos los datos; **no se envía nada** a ningún servidor.
2. **Crear.** `new FormData(formulario)` recibe el elemento `<form>` (se obtiene con `document.getElementById`) y toma los valores **actuales** de sus campos.
3. **`get(nombre)`** devuelve el valor del campo con ese `name`, o `null` si no existe. Los valores llegan como **texto**: `cantidad` es `'3'`, no `3`.
4. **Solo entran los campos con `name`.** El último `<input>` no tiene `name` y no aparece en la lista. Lo mismo ocurre con los campos deshabilitados y con las casillas sin marcar.
5. **Recorrer.** Un `FormData` se puede recorrer con `for...of`: cada vuelta entrega `[nombre, valor]`.
6. **A objeto.** `Object.fromEntries(datos)` convierte los pares en un objeto. Si un nombre se repite (varias casillas con el mismo `name`), el objeto se queda con el **último** valor.
7. **Convertir a número.** Como los valores son texto, `Number(pedido.cantidad)` es necesario para calcular.

## ✅ Resultado esperado

Al abrir `24-formdata.html`, la consola muestra:

```text
Café 3 string
null
producto = Café
cantidad = 3
tamano = grande
{producto: 'Café', cantidad: '3', tamano: 'grande'}
13.5
```

- `FormData` reúne los campos con `name` de un formulario; los valores son texto.
- `Object.fromEntries(datos)` lo convierte en un objeto.
