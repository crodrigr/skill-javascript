# 📘 Ejemplo 04 — `switch`: elegir entre varias opciones

> 🎓 **Resultados de aprendizaje:** RA-2
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome y se anotó lo que imprimió la consola, con el archivo y la línea de cada error. Los valores se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

La tienda ubica cada producto en un pasillo según su categoría. Como hay muchas opciones iguales de simples (`categoria` igual a un valor u otro), Lucía usa `switch` en lugar de una cadena larga de `else if`.

## 💻 Código

El archivo [`04-switch.html`](../recursos/ejemplos/04-switch.html) tiene este código dentro de `<script>`:

```js
const categoria = 'bebida';

switch (categoria) {
  case 'bebida':
    console.log('Pasillo 1');
    break;
  case 'postre':
    console.log('Pasillo 2');
    break;
  case 'snack':
  case 'galleta':
    console.log('Pasillo 3');
    break;
  default:
    console.log('Categoría desconocida');
}

// switch compara con === (mismo valor y mismo tipo)
const codigo = 3;
switch (codigo) {
  case '3':
    console.log('Es el texto "3"');
    break;
  case 3:
    console.log('Es el número 3');
    break;
}
```

## 🔍 Análisis paso a paso

1. **Estructura.** `switch (expresión)` se evalúa **una vez**. Después se busca el primer `case` cuyo valor sea igual y se ejecuta desde ahí.
2. **`break` termina el `case`.** Sin él la ejecución sigue con el `case` siguiente (ver el Ejemplo 05). Por eso cada opción termina en `break`.
3. **`default` es el «si no».** Se ejecuta cuando ningún `case` coincide. Por convención va al final.
4. **Varios valores, un mismo camino.** `case 'snack':` y `case 'galleta':` seguidos comparten el mismo código: es lo que se llama agrupar casos.
5. **La comparación es estricta (`===`).** Con `codigo = 3` (un número), el `case '3'` (un texto) **no** coincide; sí coincide el `case 3`.
6. **Cuándo conviene.** Cuando comparás **una misma expresión** contra varios valores exactos. Si necesitás rangos (`>= 20`), usá `if`/`else if`.

## ✅ Resultado esperado

Al abrir `04-switch.html`, la consola muestra:

```text
Pasillo 1
Es el número 3
```

### 🔁 Probalo con otros datos

Se cambió una línea del primer script y se volvió a abrir la página:

- Si `categoria` pasa a `'galleta'`: `Pasillo 3`
- Si `categoria` pasa a `'postre'`: `Pasillo 2`
- Si `categoria` pasa a `'ropa'`: `Categoría desconocida`

- `switch` compara con `===`: el número `3` y el texto `'3'` son distintos.
- `default` atrapa todo lo que no coincide con ningún `case`.
