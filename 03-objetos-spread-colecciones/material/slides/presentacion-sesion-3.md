# 🗃️ Colecciones de datos

Curso **JavaScript** · Clase 03 · **Sesión 3**

---

## 🎯 Objetivos de la sesión

- 🔹 Elegir entre arreglo, objeto, `Set` y `Map`.
- 🔹 Manipular, buscar y ordenar arreglos.
- 🔹 Usar `Set`, `Map` y `FormData`.

---

## 🗃️ ¿Qué es una colección?

![Cuatro colecciones comparadas. El arreglo es una lista ordenada que admite repetidos y se lee por posición. El objeto guarda pares con claves de texto y describe una cosa. El Set guarda valores únicos. El Map guarda pares clave-valor con claves de cualquier tipo y conoce su tamaño con size.](../imagenes/arreglo-set-map-objeto.svg)

- Una estructura que guarda **varios** valores.

---

## 📋 Arreglos

![Un arreglo de precios con cuatro elementos: 4.5, 3.2, 1.8, 2.2. Los índices empiezan en 0: precios en la posición 0 vale 4.5 y en la posición 3 vale 2.2. La propiedad length vale 4 y el último elemento está en la posición length menos 1. Una posición que no existe, como la 10, da undefined.](../imagenes/arreglo-e-indices.svg)

- La primera posición es `0`; la última, `length - 1`.
- Recorrer: `for`, `for...of`, `forEach`.

---

## ➕ Agregar y quitar

![Un pedido empieza como Café y Té. push de Medialuna agrega al final y devuelve 3. unshift de Brownie agrega al principio y devuelve 4. pop quita el último y devuelve Medialuna. shift quita el primero y devuelve Brownie. Los cuatro modifican el arreglo original.](../imagenes/agregar-y-quitar-en-un-arreglo.svg)

- `push`/`unshift` devuelven la longitud; `pop`/`shift`, el elemento.

---

## ✂️ `splice`, `slice` y copias

- `splice` **modifica** y devuelve lo quitado.
- `slice`, `concat` y `[...a]` devuelven un arreglo **nuevo**.
- Desestructuración: `const [primero, ...otros] = lista;`.

---

## 🔍 Buscar

- `indexOf` / `includes`: valores simples.
- `find` / `findIndex` / `filter`: con **una función que se le pasa al método**.
- Sin resultado: `-1`, `undefined` o `[]`.

---

## 🔢 Ordenar

![El arreglo [10, 9, 1, 100] ordenado de tres maneras. Sin comparador, sort convierte los números en texto y el resultado es [1, 10, 100, 9]. Con el comparador a menos b, el orden ascendente es [1, 9, 10, 100]. Con b menos a, el orden descendente es [100, 10, 9, 1]. sort modifica el arreglo original.](../imagenes/sort-y-comparador.svg)

- `sort()` ordena como **texto**: usá `(a, b) => a - b`.
- Modifica el original: copiá con `[...arreglo]`.

---

## 🧮 `Set` y `Map`

- `Set`: valores **únicos** (`add`, `has`, `delete`, `size`).
- `Map`: pares clave-valor (`set`, `get`, `has`, `delete`, `size`).
- Se recorren con `for...of`.

---

## 🧾 `FormData`

- Reúne los campos **con `name`** de un formulario.
- `get('campo')` devuelve **texto**.
- `Object.fromEntries(datos)` lo convierte en objeto.
- Es del navegador, no de ECMAScript.

---

## 🛠️ Actividad de la sesión

- Ejercicios **Básico 03**, **Intermedio 03**, **Intermedio 04** y **Desafío 01**.
- **Taller 03:** «El inventario de Aroma».

---

## ✅ Resumen de la sesión 3

- 🔹 Arreglo, objeto, `Set` y `Map`: cada uno para lo suyo.
- 🔹 Buscar con `find`/`filter`; ordenar con comparador.
- 🔹 `FormData` convierte un formulario en objeto.

> 📝 Cierre: respondé el **quiz** de 24 ítems.
