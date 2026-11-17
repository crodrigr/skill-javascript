# 📘 Ejemplo 18 — `splice`, `slice`, `concat` y copias de arreglos

> 🎓 **Resultados de aprendizaje:** RA-8
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome y se anotó lo que imprimió la consola, con el archivo y la línea de cada error. Los valores se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador. La consola real muestra los objetos como un árbol que se despliega; aquí se escriben en una sola línea.

## 🧱 Situación inicial

Lucía necesita cortar un tramo de la lista de productos, quitar y reemplazar elementos del medio, unir listas y copiar un arreglo sin modificar el original.

## 💻 Código

El archivo [`18-splice-slice-y-copias.html`](../recursos/ejemplos/18-splice-slice-y-copias.html) tiene este código dentro de `<script>`:

```js
const items = ['Café', 'Té', 'Galleta', 'Brownie', 'Medialuna'];

const tramo = items.slice(1, 3);
console.log(tramo, items);

const quitados = items.splice(1, 2);
console.log(quitados, items);

items.splice(1, 0, 'Scone', 'Muffin');
console.log(items);

items.splice(0, 1, 'Capuchino');
console.log(items);

const unidos = items.concat(['Alfajor']);
const unidos2 = [...items, 'Alfajor', ...quitados];
console.log(unidos);
console.log(unidos2);

const [primero, segundo, ...otros] = unidos2;
console.log(primero, segundo, otros);

const copia = [...items];
copia.push('Extra');
console.log(items.length, copia.length);
```

## 🔍 Análisis paso a paso

1. **`slice(inicio, fin)`** devuelve un **arreglo nuevo** con los elementos desde `inicio` hasta **antes** de `fin`. **No modifica** el original.
2. **`splice(inicio, cuántos, ...nuevos)`** **modifica** el original y devuelve **los elementos quitados**. Con `splice(1, 2)` quita dos desde la posición 1.
3. **Insertar y reemplazar.** `splice(1, 0, 'Scone', 'Muffin')` no quita nada (`0`) e inserta dos elementos en la posición 1; `splice(0, 1, 'Capuchino')` quita el primero y pone otro en su lugar.
4. **Unir.** `concat` y el *spread* de arreglos (`[...items, 'Alfajor']`) crean un arreglo nuevo con los elementos de varios. El *spread* es más flexible: se pueden intercalar valores sueltos.
5. **Desestructuración de arreglos.** `const [primero, segundo, ...otros] = lista` toma los elementos **por posición**; `...otros` junta el resto.
6. **Copia.** `[...items]` es una copia **superficial**: `copia.push('Extra')` no cambia `items`. Si los elementos fueran objetos, se compartirían.
7. **Resumen.** Modifican: `splice`. No modifican (devuelven uno nuevo): `slice`, `concat`, el *spread*.

## ✅ Resultado esperado

Al abrir `18-splice-slice-y-copias.html`, la consola muestra:

```text
(2) ['Té', 'Galleta'] (5) ['Café', 'Té', 'Galleta', 'Brownie', 'Medialuna']
(2) ['Té', 'Galleta'] (3) ['Café', 'Brownie', 'Medialuna']
(5) ['Café', 'Scone', 'Muffin', 'Brownie', 'Medialuna']
(5) ['Capuchino', 'Scone', 'Muffin', 'Brownie', 'Medialuna']
(6) ['Capuchino', 'Scone', 'Muffin', 'Brownie', 'Medialuna', 'Alfajor']
(8) ['Capuchino', 'Scone', 'Muffin', 'Brownie', 'Medialuna', 'Alfajor', 'Té', 'Galleta']
Capuchino Scone (6) ['Muffin', 'Brownie', 'Medialuna', 'Alfajor', 'Té', 'Galleta']
5 6
```

- `splice` modifica el arreglo y devuelve lo quitado; `slice` devuelve una copia de un tramo.
- `[...arreglo]` copia el arreglo sin modificar el original.
