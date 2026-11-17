# 📘 Ejemplo 15 — Colecciones de datos: ¿cuál elegir?

> 🎓 **Resultados de aprendizaje:** RA-7
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome y se anotó lo que imprimió la consola, con el archivo y la línea de cada error. Los valores se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador. La consola real muestra los objetos como un árbol que se despliega; aquí se escriben en una sola línea.

## 🧱 Situación inicial

La tienda necesita guardar varios productos y varias ventas. JavaScript ofrece cuatro estructuras para **colecciones**: arreglo, objeto, `Set` y `Map`. Lucía las prueba con los mismos datos para ver en qué se diferencian.

## 💻 Código

El archivo [`15-colecciones-cual-elegir.html`](../recursos/ejemplos/15-colecciones-cual-elegir.html) tiene este código dentro de `<script>`:

```js
const arreglo = ['Café', 'Té', 'Café', 'Medialuna'];
const objeto = { Café: 12, Té: 0, Medialuna: 25 };
const conjunto = new Set(arreglo);
const mapa = new Map([['Café', 12], ['Té', 0], ['Medialuna', 25]]);

console.log(arreglo);
console.log(objeto);
console.log(conjunto);
console.log(mapa);

console.log(arreglo.length, conjunto.size, mapa.size);
console.log(arreglo[0], objeto['Café'], mapa.get('Café'), conjunto.has('Té'));
```

## 🔍 Análisis paso a paso

1. **Arreglo** `[ ]`: lista **ordenada** de valores que pueden **repetirse**; se accede por **posición** (`arreglo[0]`). Tiene 4 elementos (`Café` dos veces).
2. **Objeto** `{ }`: pares **clave-valor** donde las claves son textos. Sirve para describir **una cosa** con sus propiedades, o como diccionario simple (`objeto['Café']`).
3. **`Set`**: valores **únicos**. Al crearlo con el arreglo, el `Café` repetido queda una sola vez: `size` es `3`. Se pregunta con `has`.
4. **`Map`**: pares clave-valor cuyas **claves pueden ser de cualquier tipo** y que sabe cuántos pares tiene (`size`). Se lee con `get`.
5. **Cómo elegir.** ¿Una lista ordenada con posibles repetidos? → arreglo. ¿Una cosa con propiedades? → objeto. ¿Solo importa **qué hay**, sin repetidos? → `Set`. ¿Buscar un valor por una clave que se agrega y se quita? → `Map`.
6. **Los cuatro se muestran en una línea aquí;** la consola real los despliega como un árbol.

## ✅ Resultado esperado

Al abrir `15-colecciones-cual-elegir.html`, la consola muestra:

```text
(4) ['Café', 'Té', 'Café', 'Medialuna']
{Café: 12, Té: 0, Medialuna: 25}
Set(3) {'Café', 'Té', 'Medialuna'}
Map(3) {'Café' => 12, 'Té' => 0, 'Medialuna' => 25}
4 3 3
Café 12 12 true
```

- Arreglo: ordenado y con repetidos. Objeto: una cosa con propiedades. `Set`: únicos. `Map`: pares con claves de cualquier tipo.
- El `Set` de cuatro nombres con un repetido tiene tres elementos.
