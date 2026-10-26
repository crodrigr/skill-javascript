# 🛠️ Taller 02 — La caja con funciones

## 🎯 Objetivo

Aplicar lo aprendido en la sesión 2 e integrar la sesión 1: escribir funciones declarativas con parámetros y `return` (RA-5), de expresión (RA-6), autoejecutables (RA-7) y de flecha (RA-8), y combinarlas con decisiones y bucles (RA-9).

## 🌍 Contexto

Partís del programa del Taller 01 (el carrito de Aroma). Ahora vas a **reorganizarlo en funciones**. Trabajás con el mismo proyecto, en el mismo archivo `.js`, y con la consola abierta (F12).

## 🪜 Pasos

1. **Copiá** el programa del Taller 01 a un archivo nuevo, `caja.js`.
2. **Una función declarativa.** Escribí `calcularSubtotal(precio, cantidad)` y reemplazá la cuenta repetida por la llamada.
3. **Un valor por defecto.** Escribí `calcularTotal(precio, cantidad, descuento = 0)` y probala con y sin el tercer argumento.
4. **Una función de expresión.** Guardá en una constante `porcentajeDescuento` la función que decide el tramo con `if`/`else if`/`else`.
5. **Una función de flecha.** Escribí `envioPara(total)` como flecha sin llaves y con el operador condicional.
6. **Alcance.** Comprobá que una variable declarada dentro de una función no se ve afuera: provocá el `ReferenceError` en una página aparte y anotá el mensaje y la línea.
7. **Elevación.** Llamá a una función declarativa antes de definirla y a una de expresión antes de definirla; anotá la diferencia.
8. **Una función autoejecutable.** Envolvé el cálculo de un total en una IIFE y comprobá con `typeof` que una variable interna no existe afuera.
9. **Reescribí** una de tus funciones en las cuatro formas y comprobá que dan el mismo resultado.
10. **Integrá.** Recorré las cantidades con un `for`, usá tus funciones y cortá con `break` en la primera cantidad con envío gratis.
11. **Revisá** los nombres (verbos en `camelCase`), que cada función haga un solo trabajo y que devuelva con `return`.

## 📦 Entregable

El archivo `caja.js` y una nota con: el mensaje de error del paso 6, la diferencia observada en el paso 7, la salida del paso 10 y una frase que diga cuál de las cuatro formas elegirías para cada función de tu programa y por qué.

## 📋 Criterios de evaluación

- ✔️ Hay al menos una función declarativa, una de expresión, una de flecha y una autoejecutable.
- ✔️ Las funciones usan parámetros y `return`, y al menos una usa un valor por defecto.
- ✔️ El programa integra funciones, decisiones y un bucle con `break`.
- ✔️ La nota explica el alcance local y la elevación con los errores obtenidos.
- ✔️ Las cuatro formas de la función del paso 9 dan el mismo resultado.
- ✔️ La nota justifica la elección de la forma para cada función.
