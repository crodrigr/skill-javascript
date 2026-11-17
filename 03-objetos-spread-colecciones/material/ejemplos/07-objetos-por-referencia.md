# 📘 Ejemplo 07 — Los objetos se comparan por referencia

> 🎓 **Resultados de aprendizaje:** RA-1
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome y se anotó lo que imprimió la consola, con el archivo y la línea de cada error. Los valores se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador. La consola real muestra los objetos como un árbol que se despliega; aquí se escriben en una sola línea.

## 🧱 Situación inicial

Lucía comparó dos productos con exactamente los mismos datos y `===` dijo que eran distintos. Después modificó uno y cambió el otro sin querer. Los objetos son **referencias**.

## 💻 Código

### 📄 `07-objetos-por-referencia.html`

Código del archivo [`07-objetos-por-referencia.html`](../recursos/ejemplos/07-objetos-por-referencia.html) (lo que va dentro de `<script>`):

```js
console.log({} === {});

const a = { x: 1 };
const b = { x: 1 };
const c = a;
console.log(a === b, a === c);

c.x = 99;
console.log(a.x, b.x);

console.log(JSON.stringify(a) === JSON.stringify(b));
```

### 📄 `07-objetos-por-referencia-error.html`

Código del archivo [`07-objetos-por-referencia-error.html`](../recursos/ejemplos/07-objetos-por-referencia-error.html) (lo que va dentro de `<script>`):

```js
const producto = { nombre: 'Café' };
producto.nombre = 'Té';
console.log(producto.nombre);
producto = { nombre: 'Galleta' };
```

## 🔍 Análisis paso a paso

1. **Cada `{ }` crea un objeto nuevo.** `{} === {}` es `false`: son dos objetos distintos, aunque estén vacíos.
2. **`===` compara referencias.** `a` y `b` tienen el mismo contenido, pero son objetos distintos: `false`. `c` apunta **al mismo objeto** que `a`: `true`.
3. **Dos nombres, un objeto.** `c.x = 99` cambia el objeto compartido; por eso `a.x` también vale `99`, mientras que `b`, que es otro objeto, sigue en `1`.
4. **Comparar contenido.** Una forma sencilla es comparar los textos JSON (`JSON.stringify`, bloque 2); sirve para objetos pequeños con las propiedades en el mismo orden.
5. **`const` y los objetos.** En `07-objetos-por-referencia-error.html`, cambiar una propiedad (`producto.nombre = 'Té'`) funciona, pero reasignar la variable (`producto = { ... }`) da `TypeError: Assignment to constant variable.`
6. **Esto vale para todo lo que no es un valor simple:** los arreglos, `Set` y `Map` también se comparan y se copian por referencia.

## ✅ Resultado esperado

Al abrir `07-objetos-por-referencia.html`, la consola muestra:

```text
false
false true
99 1
false
```

Al abrir `07-objetos-por-referencia-error.html`, la consola muestra:

```text
Té
Uncaught TypeError: Assignment to constant variable. (07-objetos-por-referencia-error.html:16)
```

- Dos objetos distintos nunca son `===`, aunque tengan el mismo contenido.
- Dos variables pueden apuntar al mismo objeto: un cambio por una se ve por la otra.
