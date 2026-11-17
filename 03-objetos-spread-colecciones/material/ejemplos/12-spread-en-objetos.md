# 📘 Ejemplo 12 — El operador *spread* en objetos

> 🎓 **Resultados de aprendizaje:** RA-5
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome y se anotó lo que imprimió la consola, con el archivo y la línea de cada error. Los valores se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador. La consola real muestra los objetos como un árbol que se despliega; aquí se escriben en una sola línea.

## 🧱 Situación inicial

Lucía quiere un producto «en oferta» que sea igual al original pero con otro precio, sin modificar el original. El operador *spread* (`...`) **expande** las propiedades de un objeto dentro de otro.

## 💻 Código

El archivo [`12-spread-en-objetos.html`](../recursos/ejemplos/12-spread-en-objetos.html) tiene este código dentro de `<script>`:

```js
const base = { nombre: 'Café', precio: 4.5, stock: 12 };

const oferta = { ...base, precio: 3.9 };
console.log(oferta);
console.log(base);

const a = { x: 1, y: 2 };
const b = { y: 20, z: 30 };
console.log({ ...a, ...b });
console.log({ ...b, ...a });

console.log({ precio: 1, ...base });
console.log({ ...base, activo: true, ...{ origen: 'Colombia' } });
```

## 🔍 Análisis paso a paso

1. **Copiar y cambiar.** `{ ...base, precio: 3.9 }` copia todas las propiedades de `base` y después **sobrescribe** `precio`. `base` no cambia.
2. **Combinar.** `{ ...a, ...b }` junta las propiedades de dos objetos.
3. **Gana la última.** Si una clave se repite, queda el valor del que viene **después**: en `{ ...a, ...b }`, `y` vale `20`; en `{ ...b, ...a }`, vale `2`.
4. **El orden importa también con propiedades sueltas.** En `{ precio: 1, ...base }`, `base` va después y su `precio` (4.5) pisa al `1`.
5. **Se pueden mezclar** propiedades sueltas, objetos expandidos y objetos escritos en el momento.
6. **Es una copia superficial:** solo copia el primer nivel; los objetos de adentro se comparten (Ejemplo 14).

## ✅ Resultado esperado

Al abrir `12-spread-en-objetos.html`, la consola muestra:

```text
{nombre: 'Café', precio: 3.9, stock: 12}
{nombre: 'Café', precio: 4.5, stock: 12}
{x: 1, y: 20, z: 30}
{y: 2, z: 30, x: 1}
{precio: 4.5, nombre: 'Café', stock: 12}
{nombre: 'Café', precio: 4.5, stock: 12, activo: true, origen: 'Colombia'}
```

- `{ ...a, ...b }` combina objetos; si una clave se repite, gana la última.
- El objeto original no se modifica.
