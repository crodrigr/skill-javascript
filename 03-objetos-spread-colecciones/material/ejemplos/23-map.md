# 📘 Ejemplo 23 — `Map`: pares clave-valor

> 🎓 **Resultados de aprendizaje:** RA-10
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome y se anotó lo que imprimió la consola, con el archivo y la línea de cada error. Los valores se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador. La consola real muestra los objetos como un árbol que se despliega; aquí se escriben en una sola línea.

## 🧱 Situación inicial

Lucía quiere el stock de cada producto, consultarlo por nombre y contar cuántas veces se vendió cada uno. Un `Map` asocia **claves con valores**.

## 💻 Código

El archivo [`23-map.html`](../recursos/ejemplos/23-map.html) tiene este código dentro de `<script>`:

```js
const stock = new Map();
stock.set('Café', 12);
stock.set('Té', 0);
stock.set('Medialuna', 25);
console.log(stock, stock.size);

console.log(stock.get('Café'), stock.get('Scone'), stock.has('Té'));

stock.set('Café', 10);
stock.delete('Té');
for (const [producto, cantidad] of stock) {
  console.log(producto, cantidad);
}
console.log([...stock.keys()], [...stock.values()]);

const clave = { id: 1 };
const pedidos = new Map([[clave, 'pedido 1']]);
console.log(pedidos.get(clave), pedidos.get({ id: 1 }));

const ventas = ['Café', 'Té', 'Café'];
const conteo = new Map();
for (const v of ventas) {
  conteo.set(v, (conteo.get(v) || 0) + 1);
}
console.log(conteo);
```

## 🔍 Análisis paso a paso

1. **Crear y llenar.** `new Map()` empieza vacío; `set(clave, valor)` agrega un par o **reemplaza** el valor si la clave ya existe (`Café` pasó de `12` a `10`).
2. **Leer.** `get(clave)` devuelve el valor, o `undefined` si la clave no está. `has(clave)` pregunta si está; `delete(clave)` quita el par; `size` cuenta los pares.
3. **Recorrer.** `for (const [clave, valor] of mapa)` usa la desestructuración de arreglos para tomar cada par. `keys()` y `values()` dan las claves y los valores.
4. **Claves de cualquier tipo.** Una clave puede ser un objeto; se busca **por referencia**: `get(clave)` lo encuentra, pero `get({ id: 1 })` (otro objeto) no.
5. **Contar.** `conteo.get(v) || 0` da `0` la primera vez; así se suma uno a cada producto. Es un patrón muy común.
6. **Frente al objeto.** Un `Map` sirve mejor como diccionario que cambia (agregar y quitar claves) y conoce su tamaño; un objeto, para describir una cosa con propiedades fijas.

## ✅ Resultado esperado

Al abrir `23-map.html`, la consola muestra:

```text
Map(3) {'Café' => 12, 'Té' => 0, 'Medialuna' => 25} 3
12 undefined true
Café 10
Medialuna 25
(2) ['Café', 'Medialuna'] (2) [10, 25]
pedido 1 undefined
Map(2) {'Café' => 2, 'Té' => 1}
```

- Un `Map` guarda pares clave-valor; las claves pueden ser de cualquier tipo.
- Las claves que son objetos se buscan por referencia.
