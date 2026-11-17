# 📘 Ejemplo 15 — Alcance local de las variables

> 🎓 **Resultados de aprendizaje:** RA-5
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome y se anotó lo que imprimió la consola, con el archivo y la línea de cada error. Los valores se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Lucía declara `subtotal` dentro de una función y, más abajo, intenta usarla. Las variables creadas **dentro** de una función son **locales**: solo existen ahí.

## 💻 Código

### 📄 `15-alcance-local.html`

Código del archivo [`15-alcance-local.html`](../recursos/ejemplos/15-alcance-local.html) (lo que va dentro de `<script>`):

```js
const iva = 0.21;

function totalConIva(precio, cantidad) {
  const subtotal = precio * cantidad;
  return subtotal * (1 + iva);
}

console.log(totalConIva(10, 2));
```

### 📄 `15-alcance-local-error.html`

Código del archivo [`15-alcance-local-error.html`](../recursos/ejemplos/15-alcance-local-error.html) (lo que va dentro de `<script>`):

**Script 1**

```js
function totalConIva(precio, cantidad) {
  const subtotal = precio * cantidad;
  return subtotal * 1.21;
}

console.log(totalConIva(10, 2));
console.log(subtotal);
```

**Script 2**

```js
function sumar(a, b) {
  return a + b;
}
sumar(1, 2);
console.log(a);
```

## 🔍 Análisis paso a paso

1. **Variables globales y locales.** `iva` se declara fuera de las funciones: es **global** y la función la puede leer. `subtotal` se declara dentro: es **local** y solo existe mientras la función se ejecuta.
2. **Los parámetros también son locales.** `precio` y `cantidad` solo existen dentro de `totalConIva`.
3. **Adentro se ve lo de afuera, afuera no se ve lo de adentro.** En la función se usa `iva`; fuera de la función, `subtotal` no existe.
4. **El error.** En `15-alcance-local-error.html`, el primer script llama a la función (que funciona) y luego intenta mostrar `subtotal`: `ReferenceError: subtotal is not defined`. El segundo script falla igual con `a`, un parámetro.
5. **Por qué conviene.** Cada función trabaja con sus propios datos y no pisa los del resto del programa. Dos funciones pueden usar el mismo nombre de variable sin molestarse.
6. **Cada `<script>` es independiente** en cuanto a errores: el primero falla y el segundo se ejecuta de todas formas.

## ✅ Resultado esperado

Al abrir `15-alcance-local.html`, la consola muestra:

```text
24.2
```

Al abrir `15-alcance-local-error.html`, la consola muestra:

```text
24.2
Uncaught ReferenceError: subtotal is not defined (15-alcance-local-error.html:19)
Uncaught ReferenceError: a is not defined (15-alcance-local-error.html:27)
```

- Una variable declarada dentro de una función solo existe ahí.
- Los errores muestran el archivo y la línea donde ocurrieron.
