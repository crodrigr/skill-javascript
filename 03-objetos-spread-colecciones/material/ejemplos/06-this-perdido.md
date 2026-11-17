# 📘 Ejemplo 06 — Cuando `this` se pierde

> 🎓 **Resultados de aprendizaje:** RA-3
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome y se anotó lo que imprimió la consola, con el archivo y la línea de cada error. Los valores se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador. La consola real muestra los objetos como un árbol que se despliega; aquí se escriben en una sola línea.

## 🧱 Situación inicial

Lucía guardó un método en una variable y, al llamarlo, el precio apareció como `NaN`. Después probó una función de flecha como método y tampoco funcionó. Son los dos errores más comunes con `this`.

## 💻 Código

### 📄 `06-this-perdido.html`

Código del archivo [`06-this-perdido.html`](../recursos/ejemplos/06-this-perdido.html) (lo que va dentro de `<script>`):

```js
const producto = {
  nombre: 'Café',
  precio: 4.5,
  total() {
    return this.precio * 2;
  },
  conFlecha: () => typeof this.precio
};

console.log(producto.total());

const suelto = producto.total;
console.log(suelto());

console.log(producto.conFlecha());
console.log(this === globalThis);

const envuelto = () => producto.total();
console.log(envuelto());
```

### 📄 `06-this-estricto.html`

Código del archivo [`06-this-estricto.html`](../recursos/ejemplos/06-this-estricto.html) (lo que va dentro de `<script>`):

```js
'use strict';

const producto = {
  precio: 4.5,
  total() {
    return this.precio * 2;
  }
};

console.log(producto.total());
const suelto = producto.total;
console.log(suelto());
```

## 🔍 Análisis paso a paso

1. **Método suelto.** `const suelto = producto.total` copia **la función**, sin el objeto. Al llamar `suelto()` no hay objeto antes del punto, así que `this` es el objeto global (`globalThis`, en el navegador `window`). `globalThis.precio` no existe y `undefined * 2` da `NaN`.
2. **Flecha como método.** Una función de flecha **no tiene `this` propio**: usa el `this` del lugar donde se escribió (aquí, el nivel principal del script, que es el objeto global). Por eso `this.precio` es `undefined` y `typeof` da `'undefined'`. Las flechas no sirven como métodos de un objeto.
3. **Modo estricto.** Con `'use strict'` al principio del script, un método suelto tiene `this` igual a `undefined`, y leer `this.precio` da `TypeError: Cannot read properties of undefined (reading 'precio')`. Es un error más claro que el `NaN` silencioso.
4. **Cómo evitarlo.** Llamá el método **siempre con el objeto** (`producto.total()`), o envolvelo en otra función que lo haga (`() => producto.total()`).
5. **Usá métodos abreviados** (`total() { }`) para los métodos de un objeto.
6. **Fuera de esta clase:** `bind` fija el `this` de una función; lo veremos más adelante.

## ✅ Resultado esperado

Al abrir `06-this-perdido.html`, la consola muestra:

```text
9
NaN
undefined
true
9
```

Al abrir `06-this-estricto.html`, la consola muestra:

```text
9
Uncaught TypeError: Cannot read properties of undefined (reading 'precio') (06-this-estricto.html:18)
```

- Un método suelto pierde su objeto: `this` pasa a ser el objeto global (o `undefined` en modo estricto).
- Una función de flecha no tiene `this` propio y no sirve como método.
