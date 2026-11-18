# 📘 Ejemplo 20 — classList.replace: cambiar una clase por otra

> 🎓 **Resultados de aprendizaje:** RA-6
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, con el archivo y la línea de cada error; los clics se hicieron por código. **No se contrastó con otro motor** (no hay otro navegador disponible para la verificación): las afirmaciones se apoyan, además, en MDN. La consola real muestra los elementos como un árbol que se despliega; aquí se imprimen textos concretos o el HTML (`outerHTML`). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Cuando un producto pasa de «activo» a «inactivo», conviene **reemplazar** una clase por otra en un solo paso.

El HTML de partida, dentro del `<body>`:

```html
<ul id="menu">
  <li id="cafe" class="producto activo">Café</li>
</ul>
```

## 💻 Código

El archivo [`20-class-list-replace.html`](../recursos/ejemplos/20-class-list-replace.html) tiene este código dentro de `<script>`, **al final del `<body>`**:

```js
const cafe = document.getElementById('cafe');
console.log('Inicio: ' + cafe.getAttribute('class'));

console.log('replace activo → inactivo: ' + cafe.classList.replace('activo', 'inactivo'));
console.log('class: ' + cafe.getAttribute('class'));

console.log('replace activo → otra: ' + cafe.classList.replace('activo', 'otra'));
console.log('class: ' + cafe.getAttribute('class'));
```

## 🔍 Análisis paso a paso

1. **`replace(vieja, nueva)`** busca la clase vieja y pone la nueva **en su lugar**.
2. **Devuelve `true`** si encontró la vieja y la reemplazó.
3. **Devuelve `false`** si la clase vieja **no existía**: en ese caso **no cambia nada** (la nueva no se agrega).
4. **Las demás clases se mantienen** y en el mismo orden.
5. **Es lo mismo que** hacer `remove` y `add`, pero conserva la posición y avisa si no había nada que reemplazar.

## ✅ Resultado esperado

Al abrir `20-class-list-replace.html`, la consola muestra:

```text
Inicio: producto activo
replace activo → inactivo: true
class: producto inactivo
replace activo → otra: false
class: producto inactivo
```

- `replace(vieja, nueva)` cambia una clase por otra y devuelve `true` o `false`.
- Si la vieja no existe, no cambia nada.
