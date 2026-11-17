# 📘 Ejemplo 09 — De texto a objeto: `JSON.parse()`

> 🎓 **Resultados de aprendizaje:** RA-4
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome y se anotó lo que imprimió la consola, con el archivo y la línea de cada error. Los valores se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador. La consola real muestra los objetos como un árbol que se despliega; aquí se escriben en una sola línea.

## 🧱 Situación inicial

Llegó un texto JSON con los datos de un producto. Para usarlos hay que convertirlo de nuevo en un objeto con `JSON.parse()`. Si el texto está mal escrito, JavaScript lo rechaza con un error.

## 💻 Código

### 📄 `09-json-parse.html`

Código del archivo [`09-json-parse.html`](../recursos/ejemplos/09-json-parse.html) (lo que va dentro de `<script>`):

```js
const texto = '{"nombre":"Café","precio":4.5,"activo":true,"origen":null}';
const producto = JSON.parse(texto);

console.log(producto);
console.log(producto.nombre, typeof producto.precio);

console.log(JSON.parse('[1,2,3]'), JSON.parse('42'), JSON.parse('"hola"'), JSON.parse('true'));
```

### 📄 `09-json-parse-error.html`

Código del archivo [`09-json-parse-error.html`](../recursos/ejemplos/09-json-parse-error.html) (lo que va dentro de `<script>`):

**Script 1**

```js
JSON.parse("{'nombre':'Café'}");
```

**Script 2**

```js
JSON.parse('{"nombre":"Café",}');
```

**Script 3**

```js
JSON.parse('{nombre:"Café"}');
```

## 🔍 Análisis paso a paso

1. **De texto a objeto.** `JSON.parse(texto)` devuelve el objeto, el arreglo o el valor que describe el texto. Con el objeto ya se puede escribir `producto.nombre`.
2. **Los tipos se recuperan** según lo que dice el texto: `4.5` vuelve como número, `true` como booleano y `null` como `null`.
3. **El texto JSON va entre comillas simples** en JavaScript (`'{"nombre":"Café"}'`) para poder usar las comillas dobles que JSON exige adentro.
4. **Tres errores típicos** (`09-json-parse-error.html`, un script por error): comillas **simples** dentro del JSON, una **coma de más** al final y una clave **sin comillas**. Los tres dan `SyntaxError` (el primero y el tercero con el mismo mensaje: se esperaba un nombre de propiedad entre comillas dobles); el mensaje exacto está abajo y cambia un poco según el navegador.
5. **JSON es más estricto que un objeto literal:** no admite comillas simples, claves sin comillas, comas finales, comentarios ni funciones.
6. **Un error detiene el script** donde ocurre; por eso cada error está en su propio `<script>`.

## ✅ Resultado esperado

Al abrir `09-json-parse.html`, la consola muestra:

```text
{nombre: 'Café', precio: 4.5, activo: true, origen: null}
Café number
(3) [1, 2, 3] 42 hola true
```

Al abrir `09-json-parse-error.html`, la consola muestra:

```text
Uncaught SyntaxError: Expected property name or '}' in JSON at position 1 (line 1 column 2) (09-json-parse-error.html:13)
Uncaught SyntaxError: Expected double-quoted property name in JSON at position 17 (line 1 column 18) (09-json-parse-error.html:17)
Uncaught SyntaxError: Expected property name or '}' in JSON at position 1 (line 1 column 2) (09-json-parse-error.html:21)
```

- `JSON.parse()` convierte un texto JSON en un valor de JavaScript.
- Un JSON mal escrito produce un `SyntaxError`.
