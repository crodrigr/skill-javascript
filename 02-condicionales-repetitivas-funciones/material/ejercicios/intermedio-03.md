# 🟡 Intermedio 03 — Cuatro formas y funciones autoejecutables

> 🟡 **Nivel:** Intermedio · 🎓 **Resultados de aprendizaje:** RA-7, RA-8 · 🗓️ **Sesión 2**

## 🧱 Estado inicial

Abrí [`intermedio-03.html`](../recursos/practica/intermedio-03.html) y su archivo [`js/intermedio-03.js`](../recursos/practica/js/intermedio-03.js), de la carpeta `practica`. El archivo solo tiene comentarios.

## 🛠️ Proceso esperado

**Parte A — La misma función, cuatro formas.** Escribí `esPar` (devuelve `true` si el número es par) como: `esParA` declarativa, `esParB` de expresión, `esParC` de flecha y `esParD`, una función autoejecutable que se llama con `10` y guarda el resultado. Después mostrá, en una sola línea, `esParA(7)`, `esParB(8)`, `esParC(9)` y `esParD`.

**Parte B — Función autoejecutable.** Escribí una función autoejecutable que declare la constante `descuentoSecreto` con `0.15`, y muestre `Total con descuento:` y el resultado de `20 * (1 - descuentoSecreto)`. Fuera de la función, mostrá `typeof descuentoSecreto`.

**Parte C — Flechas.** Escribí estas cuatro funciones de flecha y probalas:

| Función | Qué hace | Llamada | Resultado |
|---|---|---|---|
| `conIva` | un parámetro `precio`; devuelve `precio * 1.21` | `conIva(10)` | `12.1` |
| `etiqueta` | `nombre` y `precio`; devuelve `nombre: precio` (por ejemplo `Café: 4.5`) | `etiqueta('Café', 4.5)` | `Café: 4.5` |
| `saludo` | sin parámetros; devuelve `'Hola, Aroma'` | `saludo()` | `Hola, Aroma` |
| `calcularSubtotal` | con **llaves** y `return`; devuelve `precio * cantidad` | `calcularSubtotal(4.5, 3)` | `13.5` |

**Parte D — Respondé:** si en `calcularSubtotal` quitaras la palabra `return`, ¿qué devolvería la llamada y por qué?

## ✅ Resultado esperado

La consola muestra:

```text
false true false true
Total con descuento: 17
undefined
12.1
Café: 4.5
Hola, Aroma
13.5
```

## 🚧 Restricciones

- 🚫 En la Parte C, las tres primeras flechas no llevan llaves.
- 🚫 No uses `this` ni funciones que reciban otras funciones.
- 🚫 La función autoejecutable lleva los paréntesis que la hacen válida.

## 🎓 Resultados de aprendizaje

- RA-7: Escribir una función autoejecutable y comprobar que aísla sus variables.
- RA-8: Reescribir una función en las cuatro formas y escribir funciones de flecha con y sin llaves.
