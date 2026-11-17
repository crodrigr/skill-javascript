# 🧾 JSON, desestructuración y copias

Curso **JavaScript** · Clase 03 · **Sesión 2**

---

## 🎯 Objetivos de la sesión

- 🔹 Convertir objetos a JSON y JSON a objetos.
- 🔹 Extraer y combinar propiedades con la desestructuración y el *spread*.
- 🔹 Copiar objetos y distinguir copia superficial de profunda.

---

## 🧾 ¿Qué es JSON?

- Un formato de **texto** para intercambiar datos.
- Claves y textos con **comillas dobles**.
- Sin funciones, comentarios ni comas finales.

---

## ↔️ `stringify` y `parse`

![Un objeto de JavaScript se convierte en un texto JSON con JSON.stringify y el texto vuelve a ser un objeto con JSON.parse. El texto es {"nombre":"Café","precio":4.5,"origen":null}. En el viaje se pierden las funciones y las propiedades con undefined; NaN pasa a null y las fechas pasan a texto.](../imagenes/viaje-json.svg)

- `JSON.stringify(objeto)` → texto. `JSON.parse(texto)` → objeto.

---

## ⚠️ Errores de `JSON.parse`

- Comillas **simples** en el JSON.
- **Coma** de más al final.
- Clave **sin comillas**.
- Los tres dan `SyntaxError`.

---

## 🗑️ Qué se pierde en el viaje

- Funciones y `undefined`: desaparecen.
- `NaN` e infinito: pasan a `null`.
- Fechas: pasan a texto.
- El resultado es **otro** objeto.

---

## 🧲 Desestructuración

![A la izquierda, la desestructuración: de un objeto con nombre, precio y stock se extraen las variables nombre y precio con una sola línea. A la derecha, el operador spread: al combinar a y b con spread, la última clave repetida gana; si se escribe a y luego b, y vale 20; si se escribe b y luego a, y vale 2.](../imagenes/destructuracion-y-spread.svg)

- `const { nombre, precio } = producto;`

---

## 🔧 Renombrar, valores por defecto y resto

- `{ stock: unidades }` renombra.
- `{ color = 'sin color' }` da un valor por defecto.
- `{ nombre, ...resto }` junta lo demás.

---

## 🌿 El operador *spread*

- `{ ...base, precio: 3.9 }` copia y cambia.
- `{ ...a, ...b }` combina; **gana la última clave**.
- El orden de los `...` importa.

---

## 📎 `Object.assign()`

- Copia las propiedades **en el destino** y lo devuelve.
- Para copiar sin tocar el original: destino `{}`.
- Spread y `Object.assign`: copia **superficial**.

---

## 🪞 Copia superficial y profunda

![Un pedido original tiene numero, total y un objeto cliente con la ciudad Rosario. Con la copia superficial, hecha con spread, el total es independiente, pero cliente apunta al mismo objeto que el original: cambiar la ciudad en la copia cambia también el original. Con la copia profunda, hecha con structuredClone, el cliente es otro objeto y el original no cambia.](../imagenes/copia-superficial-y-profunda.svg)

- `structuredClone()` copia todos los niveles (no admite funciones).

---

## 🛠️ Actividad de la sesión

- Ejercicios **Básico 02** e **Intermedio 02**.
- **Taller 02:** «Del objeto al JSON y de vuelta».

---

## ✅ Resumen de la sesión 2

- 🔹 JSON es texto; `stringify` y `parse`.
- 🔹 Desestructuración y *spread*.
- 🔹 Copia superficial vs. profunda.

> 🔜 Sesión 3: colecciones.
