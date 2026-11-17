# 📘 Ejemplo 08 — De objeto a texto: `JSON.stringify()`

> 🎓 **Resultados de aprendizaje:** RA-4
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome y se anotó lo que imprimió la consola, con el archivo y la línea de cada error. Los valores se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador. La consola real muestra los objetos como un árbol que se despliega; aquí se escriben en una sola línea.

## 🧱 Situación inicial

Lucía quiere guardar un producto como texto para mandarlo a otro sistema. **JSON** (*JavaScript Object Notation*) es un formato de texto parecido a un objeto literal, y `JSON.stringify()` convierte un objeto en ese texto.

## 💻 Código

El archivo [`08-json-stringify.html`](../recursos/ejemplos/08-json-stringify.html) tiene este código dentro de `<script>`:

```js
const producto = {
  nombre: 'Café',
  precio: 4.5,
  stock: 12,
  activo: true,
  origen: null,
  nota: undefined,
  total() {
    return this.precio * 2;
  }
};

const texto = JSON.stringify(producto);
console.log(texto);
console.log(typeof texto);

console.log(JSON.stringify(producto, null, 2));

console.log(JSON.stringify([1, 'a', true, null, undefined]));
console.log(JSON.stringify('hola'), JSON.stringify(42), JSON.stringify(undefined));
```

## 🔍 Análisis paso a paso

1. **El resultado es un texto (`string`).** `typeof texto` da `'string'`: ya no se puede leer `texto.nombre`; es solo un texto con formato.
2. **Claves entre comillas dobles.** En JSON, las claves **y** los textos llevan siempre comillas dobles.
3. **Qué se omite.** Una propiedad con valor `undefined` (`nota`) y una con una función (`total`) **no aparecen** en el texto. `null`, números y booleanos sí.
4. **En un arreglo,** `undefined` se convierte en `null`: `[1,"a",true,null,null]`.
5. **Sangría.** `JSON.stringify(objeto, null, 2)` agrega saltos de línea y 2 espacios por nivel para que se lea mejor (el `null` del medio es un parámetro que no usamos).
6. **Valores sueltos.** Un texto, un número o un booleano también se pueden convertir. `JSON.stringify(undefined)` devuelve `undefined` (no un texto).

## ✅ Resultado esperado

Al abrir `08-json-stringify.html`, la consola muestra:

```text
{"nombre":"Café","precio":4.5,"stock":12,"activo":true,"origen":null}
string
{
  "nombre": "Café",
  "precio": 4.5,
  "stock": 12,
  "activo": true,
  "origen": null
}
[1,"a",true,null,null]
"hola" 42 undefined
```

- `JSON.stringify()` devuelve un texto con claves y textos entre comillas dobles.
- Las funciones y los valores `undefined` de un objeto no aparecen en el texto.
