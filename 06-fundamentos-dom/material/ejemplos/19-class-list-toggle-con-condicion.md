# 📘 Ejemplo 19 — classList.toggle con una condición

> 🎓 **Resultados de aprendizaje:** RA-6
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, con el archivo y la línea de cada error; los clics se hicieron por código. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

A veces no queremos alternar, sino **decidir**: la clase `agotado` debe estar **si y solo si** no hay stock. `toggle(clase, condicion)` fuerza el resultado.

El HTML de partida, dentro del `<body>`:

```html
<ul id="menu">
  <li id="cafe" class="producto destacado oferta">Café</li>
</ul>
```

## 💻 Código

El archivo [`19-class-list-toggle-con-condicion.html`](../recursos/ejemplos/19-class-list-toggle-con-condicion.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
const cafe = document.getElementById('cafe');
const sinStock = 0;
const conStock = 5;

console.log('toggle agotado con stock 0 → ' + cafe.classList.toggle('agotado', sinStock === 0));
console.log('otra vez con stock 0 → ' + cafe.classList.toggle('agotado', sinStock === 0));
console.log('class: ' + cafe.getAttribute('class'));

console.log('toggle agotado con stock 5 → ' + cafe.classList.toggle('agotado', conStock === 0));
console.log('class: ' + cafe.getAttribute('class'));

console.log('toggle nuevo con false → ' + cafe.classList.toggle('nuevo', false));
console.log('class: ' + cafe.getAttribute('class'));
```

## 🔍 Análisis paso a paso

1. **`toggle(clase, condicion)`:** si la condición es **verdadera**, la clase queda **puesta**; si es **falsa**, queda **quitada**.
2. **No alterna:** repetir la llamada con la misma condición no cambia nada (la segunda línea sigue en `true`).
3. **Sigue devolviendo un booleano:** `true` si la clase quedó puesta y `false` si no.
4. **Con una condición falsa** quita la clase aunque no existiera: `toggle('nuevo', false)` devuelve `false` y no agrega nada.
5. **Cuándo usarlo:** cuando la clase refleja un **estado** (sin stock, en oferta, activo) que se calcula con una condición.

## ✅ Resultado esperado

Al abrir `19-class-list-toggle-con-condicion.html`, la consola muestra:

```text
toggle agotado con stock 0 → true
otra vez con stock 0 → true
class: producto destacado oferta agotado
toggle agotado con stock 5 → false
class: producto destacado oferta
toggle nuevo con false → false
class: producto destacado oferta
```

- `toggle(clase, condicion)` pone la clase si la condición es verdadera y la quita si es falsa.
- No alterna: fuerza el resultado y devuelve si quedó puesta.
