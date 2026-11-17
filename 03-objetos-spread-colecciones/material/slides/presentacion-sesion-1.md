# 🧱 Objetos

Curso **JavaScript** · Clase 03 · **Sesión 1**

---

## 🎯 Objetivos de la sesión

- 🔹 Declarar objetos y manejar sus propiedades.
- 🔹 Escribir métodos y leer con punto y con corchetes.
- 🔹 Explicar a qué apunta `this` y cuándo se pierde.

> 📌 Seguimos con la tienda «Aroma» de las clases anteriores.

---

## 🧱 ¿Qué es un objeto?

![Un objeto producto escrito con llaves. Tiene tres propiedades, nombre con el valor Café, precio con 4.5 y stock con 12, y un método precioConIva que devuelve precio por 1.21, es decir 5.445. Cada propiedad es un par formado por una clave y un valor. Debajo se muestra cómo se leen: producto.nombre da Café, producto.precio da 4.5 y producto.precioConIva() da 5.445.](../imagenes/anatomia-de-un-objeto.svg)

- Datos relacionados bajo **un solo nombre**.
- Pares `clave: valor` entre llaves `{ }`.

---

## ✏️ Propiedades

- Agregar o modificar: `producto.stock = 12;`.
- Borrar: `delete producto.stock;`.
- Comprobar: `'stock' in producto`.
- Una propiedad inexistente vale `undefined`.
- `const` no vuelve inmutable al objeto.

---

## ⚙️ Métodos

- Un método es una **función guardada como propiedad**.
- Forma abreviada: `descripcion() { ... }`.
- Se llama con paréntesis: `producto.descripcion()`.

---

## 🔑 Punto y corchetes

![Dos formas de leer propiedades del objeto producto. Con punto: producto.nombre da Café. Con corchetes: producto de corchete nombre también da Café; producto de corchete país de origen da Colombia, que solo funciona con corchetes porque la clave tiene un espacio; y con la variable clave igual a precio, producto de corchete clave da 4.5. Una propiedad que no existe da undefined.](../imagenes/punto-frente-a-corchetes.svg)

- Corchetes para claves con espacios y claves en variables.

---

## 🛡️ `undefined` y `?.`

- Propiedad inexistente → `undefined` (sin error).
- Leer una propiedad **de** `undefined` → `TypeError`.
- `producto.proveedor?.nombre` evita el error.

---

## 👉 `this` en un método

- `this` es el **objeto que está antes del punto**.
- Una misma función responde distinto según el objeto con el que se llama.
- `this.stock = this.stock - unidades` cambia el objeto.

---

## 🧩 Cuando `this` se pierde

![Cuatro formas de llamar a un método y el valor de this en cada una. Con producto.total(), this es producto y el resultado es 9. Con el método guardado en una variable y llamado como suelto(), this es el objeto global y el resultado es NaN. Con una función de flecha como método, this es el del lugar donde se escribió y no el objeto. En modo estricto, un método suelto tiene this undefined y da TypeError.](../imagenes/this-segun-la-llamada.svg)

- Método suelto → `NaN`. Flecha como método → no sirve. Modo estricto → `TypeError`.

---

## 🔗 Los objetos son referencias

- `{} === {}` es `false`.
- Dos variables pueden apuntar al **mismo** objeto.
- Un cambio por una se ve por la otra.

---

## 🛠️ Actividad de la sesión

- Ejercicios **Básico 01** e **Intermedio 01**.
- **Taller 01:** «La ficha del producto».
- Predecí antes de ejecutar los casos de `this`.

---

## ✅ Resumen de la sesión 1

- 🔹 Objeto: pares clave-valor.
- 🔹 Propiedades: agregar, modificar, borrar, comprobar.
- 🔹 Métodos y `this` = objeto de la llamada.
- 🔹 Punto, corchetes y `?.`.

> 🔜 Sesión 2: JSON, desestructuración y copias.
