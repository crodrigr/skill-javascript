# 📘 Ejemplo 04 — Acceso con punto y con corchetes

> 🎓 **Resultados de aprendizaje:** RA-2
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome y se anotó lo que imprimió la consola, con el archivo y la línea de cada error. Los valores se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador. La consola real muestra los objetos como un árbol que se despliega; aquí se escriben en una sola línea.

## 🧱 Situación inicial

Lucía necesita leer propiedades de dos maneras: la habitual, con punto, y otra que sirve cuando el nombre tiene un espacio o cuando está guardado en una variable.

## 💻 Código

### 📄 `04-acceso-punto-y-corchetes.html`

Código del archivo [`04-acceso-punto-y-corchetes.html`](../recursos/ejemplos/04-acceso-punto-y-corchetes.html) (lo que va dentro de `<script>`):

```js
const producto = {
  nombre: 'Café',
  precio: 4.5,
  'país de origen': 'Colombia',
  origen: { pais: 'Colombia', altura: 1800 }
};

console.log(producto.nombre, producto['nombre']);
console.log(producto['país de origen']);

const clave = 'precio';
console.log(producto[clave]);

console.log(producto.color);
console.log(producto.origen.pais);
console.log(producto.proveedor?.nombre);
```

### 📄 `04-acceso-error.html`

Código del archivo [`04-acceso-error.html`](../recursos/ejemplos/04-acceso-error.html) (lo que va dentro de `<script>`):

```js
const producto = { nombre: 'Café' };
console.log(producto.proveedor);
console.log(producto.proveedor.nombre);
```

## 🔍 Análisis paso a paso

1. **Punto:** `producto.nombre`. Es lo más corto y legible, pero el nombre tiene que ser un identificador válido (sin espacios ni guiones).
2. **Corchetes:** `producto['nombre']` hace lo mismo. Se **necesitan** cuando la clave tiene espacios (`'país de origen'`) o cuando el nombre está en una variable: `producto[clave]` usa el **valor** de `clave` (`'precio'`).
3. **Objetos anidados.** `producto.origen.pais` encadena accesos: primero `origen`, y dentro de él, `pais`.
4. **Una propiedad que no existe da `undefined`.** No hay error al leerla.
5. **Leer una propiedad de `undefined` sí da error.** En `04-acceso-error.html`, `producto.proveedor` es `undefined` y pedirle `.nombre` provoca `TypeError: Cannot read properties of undefined (reading 'nombre')`.
6. **Encadenamiento opcional `?.`.** `producto.proveedor?.nombre` devuelve `undefined` en lugar de fallar si `proveedor` no existe.

## ✅ Resultado esperado

Al abrir `04-acceso-punto-y-corchetes.html`, la consola muestra:

```text
Café Café
Colombia
4.5
undefined
Colombia
undefined
```

Al abrir `04-acceso-error.html`, la consola muestra:

```text
undefined
Uncaught TypeError: Cannot read properties of undefined (reading 'nombre') (04-acceso-error.html:15)
```

- Los corchetes sirven para claves con espacios y para claves guardadas en variables.
- Leer una propiedad de `undefined` da `TypeError`; `?.` lo evita.
