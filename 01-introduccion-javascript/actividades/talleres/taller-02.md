# 🛠️ Taller 02 — La caja de la tienda

## 🎯 Objetivo

Aplicar lo aprendido en las dos sesiones: calcular y comparar con operadores (RA-7), manejar decimales, `NaN` e infinito (RA-8) y armar un mensaje con cadenas (RA-9), sobre el programa del Taller 01 (RA-1 a RA-6).

## 🌍 Contexto

Partís del **resultado del Taller 01**. Trabajás con la consola y con tu archivo `.js`. No hace falta nada más que lo visto en la clase: sin condicionales ni funciones.

## 🪜 Pasos

1. **Datos.** Declará, con `const`, el precio de un producto, la cantidad (como **texto**, por ejemplo `'3'`), un descuento y un mínimo para envío gratis.
2. **Convertí.** Convertí la cantidad en número con `Number(...)` y comprobá con `Number.isFinite` que sea válida.
3. **Calculá.** Calculá subtotal, ahorro y total. Mostralos con dos decimales.
4. **Decidí.** Calculá si el total llega al mínimo de envío gratis y guardá el resultado en una constante.
5. **Predecí.** Antes de ejecutar, escribí en papel cuánto crees que vale el total y si el envío es gratis. Comprobalo.
6. **Casos raros.** Probá una cantidad `'abc'` y otra `'0'`. Anotá qué valores aparecen (`NaN`, `Infinity`) y por qué.
7. **Decimales.** Calculá algo que dé un resultado como `0.1 + 0.2`. Anotá el valor y cómo lo mostrarías al público.
8. **Un valor por defecto.** Con un operador lógico de asignación, poné un nombre por defecto («Cliente») solo si el nombre está vacío.
9. **El mensaje.** Armá una frase para la persona con una plantilla de texto (nombre, cantidad y total).
10. **Comprobá** el código: sin errores, con nombres claros y sin valores repetidos a mano.

## 📦 Entregable

El archivo `.js` y una nota con: la predicción y el resultado del paso 5, los valores del paso 6 y su explicación, el valor del paso 7 y la frase del paso 9.

## 📋 Criterios de evaluación

- ✔️ La cantidad se convierte y se valida.
- ✔️ Los importes se muestran con dos decimales y los cálculos usan los valores completos.
- ✔️ La decisión del envío usa un operador de comparación.
- ✔️ La nota explica `NaN` e infinito en los casos raros.
- ✔️ El valor por defecto usa el operador lógico de asignación adecuado.
- ✔️ El mensaje usa una plantilla y muestra los valores correctos.
- ✔️ El código no usa condicionales, bucles ni funciones.
