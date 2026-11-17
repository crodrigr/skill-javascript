# 📘 Ejemplo 13 — Copiar y combinar con `Object.assign()`

> 🎓 **Resultados de aprendizaje:** RA-6
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome y se anotó lo que imprimió la consola, con el archivo y la línea de cada error. Los valores se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador. La consola real muestra los objetos como un árbol que se despliega; aquí se escriben en una sola línea.

## 🧱 Situación inicial

Antes de que existiera el *spread*, la forma de copiar y combinar objetos era `Object.assign()`. Lucía lo encuentra en código viejo y quiere saber en qué se diferencia.

## 💻 Código

El archivo [`13-object-assign.html`](../recursos/ejemplos/13-object-assign.html) tiene este código dentro de `<script>`:

```js
const destino = { nombre: 'Café' };
const devuelto = Object.assign(destino, { precio: 4.5 }, { stock: 12, precio: 4.8 });

console.log(destino);
console.log(devuelto === destino);

const copia = Object.assign({}, destino);
console.log(copia, copia === destino);

const nuevo = { ...destino, nota: 'oferta' };
console.log(nuevo);
console.log(destino);
```

## 🔍 Análisis paso a paso

1. **Forma:** `Object.assign(destino, fuente1, fuente2, ...)` copia las propiedades de las fuentes **en el destino** y devuelve el destino.
2. **Modifica el primer objeto.** `destino` ahora tiene `precio` y `stock`, y `devuelto === destino` es `true`: es el **mismo** objeto.
3. **Orden de las fuentes.** Como en el *spread*, gana la última: `precio` terminó en `4.8`.
4. **Para copiar sin tocar el original,** el primer argumento tiene que ser un objeto vacío nuevo: `Object.assign({}, destino)`.
5. **Frente al *spread*.** `{ ...destino }` siempre crea un objeto nuevo y se lee más claro; `Object.assign` es útil cuando hay que **modificar un objeto existente**. Los dos hacen una copia superficial.
6. **Elegí** el *spread* para copiar y combinar; reconocé `Object.assign` cuando lo veas en código ajeno.

## ✅ Resultado esperado

Al abrir `13-object-assign.html`, la consola muestra:

```text
{nombre: 'Café', precio: 4.8, stock: 12}
true
{nombre: 'Café', precio: 4.8, stock: 12} false
{nombre: 'Café', precio: 4.8, stock: 12, nota: 'oferta'}
{nombre: 'Café', precio: 4.8, stock: 12}
```

- `Object.assign(destino, ...fuentes)` modifica y devuelve el destino.
- Para copiar sin modificar el original se usa `{}` como destino, o el *spread*.
