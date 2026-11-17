# 📘 Ejemplo 22 — `Set`: valores únicos

> 🎓 **Resultados de aprendizaje:** RA-10
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome y se anotó lo que imprimió la consola, con el archivo y la línea de cada error. Los valores se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador. La consola real muestra los objetos como un árbol que se despliega; aquí se escriben en una sola línea.

## 🧱 Situación inicial

Lucía tiene la lista de todo lo vendido en el día, con repetidos, y quiere saber **qué productos distintos** se vendieron. Un `Set` guarda cada valor **una sola vez**.

## 💻 Código

El archivo [`22-set.html`](../recursos/ejemplos/22-set.html) tiene este código dentro de `<script>`:

```js
const ventas = ['Café', 'Té', 'Café', 'Medialuna', 'Té', 'Café'];
const unicos = new Set(ventas);
console.log(unicos, unicos.size);

unicos.add('Brownie');
unicos.add('Café');
console.log(unicos.size, unicos.has('Brownie'), unicos.has('Scone'));

unicos.delete('Té');
for (const producto of unicos) {
  console.log('Vendido:', producto);
}

const lista = [...unicos];
console.log(lista, Array.isArray(lista));

console.log(new Set([{ a: 1 }, { a: 1 }]).size);
```

## 🔍 Análisis paso a paso

1. **Crear.** `new Set(arreglo)` guarda los valores del arreglo **sin repetidos**: seis ventas se reducen a tres productos distintos.
2. **`add(valor)`** agrega (si ya está, no pasa nada); **`has(valor)`** pregunta si está; **`delete(valor)`** lo quita; **`size`** dice cuántos hay (es una propiedad, sin paréntesis; en un arreglo es `length`).
3. **Se recorre con `for...of`,** en el orden en que se agregaron.
4. **De `Set` a arreglo.** `[...unicos]` (o `Array.from`) devuelve un arreglo con los valores; es la forma habitual de **eliminar repetidos**: `[...new Set(ventas)]`.
5. **Objetos distintos.** Dos objetos con el mismo contenido son dos referencias distintas, así que el `Set` guarda ambos (`size` es `2`).
6. **Cuándo usarlo.** Cuando importa **qué hay** y no cuántas veces ni en qué posición.

## ✅ Resultado esperado

Al abrir `22-set.html`, la consola muestra:

```text
Set(3) {'Café', 'Té', 'Medialuna'} 3
4 true false
Vendido: Café
Vendido: Medialuna
Vendido: Brownie
(3) ['Café', 'Medialuna', 'Brownie'] true
2
```

- Un `Set` guarda cada valor una sola vez; `[...set]` lo convierte en arreglo.
- Dos objetos con el mismo contenido se guardan como dos elementos.
