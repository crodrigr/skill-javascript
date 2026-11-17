# 🛠️ Taller 02 — Del objeto al JSON y de vuelta

## 🎯 Objetivo

Aplicar lo aprendido en la sesión 2: convertir objetos a JSON y de vuelta (RA-4), extraer y combinar datos con la desestructuración y el *spread* (RA-5) y copiar objetos distinguiendo la copia superficial de la profunda (RA-6).

## 🌍 Contexto

Partís del producto del Taller 01 y le sumás un **pedido** con un cliente adentro. Trabajás en el mismo proyecto y con la consola abierta (F12).

## 🪜 Pasos

1. **El pedido.** Declará un objeto `pedido` con número, total y un objeto `cliente` (nombre y ciudad) y una lista de productos como texto.
2. **A JSON.** Convertí el pedido a texto con `JSON.stringify` y mostralo con sangría.
3. **Qué se pierde.** Agregale al pedido un método y una propiedad `undefined`; convertilo y anotá qué falta.
4. **De vuelta.** Convertí el texto otra vez en un objeto y comprobá cada tipo de dato.
5. **Un JSON inválido.** En una página aparte, escribí un texto con comillas simples, otro con una coma final y otro con una clave sin comillas; anotá los tres mensajes de error.
6. **Desestructurar.** Extraé el nombre y la ciudad del cliente en una línea, y el total con otro nombre y un valor por defecto para una propiedad que no existe.
7. **Spread.** Creá un pedido nuevo igual al anterior con un envío agregado, sin modificar el original; combiná dos objetos y comprobá quién gana si hay claves repetidas.
8. **Copias.** Copiá el pedido con *spread*, cambiá la ciudad del cliente en la copia y mostrá la del original. Repetí con `structuredClone`.
9. **`Object.assign`.** Combiná dos objetos en un tercero sin modificar los de origen.
10. **Revisá** que el original no haya cambiado donde no corresponde.

## 📦 Entregable

El archivo `.js` y una nota con: lo que falta en el JSON del paso 3, los tres errores del paso 5, el resultado del paso 8 con las dos copias y una frase que explique la diferencia entre copia superficial y profunda.

## 📋 Criterios de evaluación

- ✔️ El pedido se convierte a JSON y de vuelta, y la nota dice qué se perdió.
- ✔️ Los tres errores de `JSON.parse` están anotados.
- ✔️ Hay desestructuración con renombre y valor por defecto, y *spread* sin modificar el original.
- ✔️ Las dos copias muestran el comportamiento esperado.
- ✔️ La nota explica con claridad la diferencia entre copia superficial y profunda.
