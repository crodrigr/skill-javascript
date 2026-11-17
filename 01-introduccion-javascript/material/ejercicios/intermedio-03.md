# 🟡 Intermedio 03 — Permisos y valores por defecto

> 🟡 **Nivel:** Intermedio · 🎓 **Resultados de aprendizaje:** RA-7 · 🗓️ **Sesión 2**

## 🧱 Estado inicial

Abrí [`intermedio-03.html`](../recursos/practica/intermedio-03.html) y su archivo [`js/intermedio-03.js`](../recursos/practica/js/intermedio-03.js). El archivo declara `permisos` con `let` y le asigna `0b001` (el permiso de leer). Los permisos son bits: leer `0b001` (`1`), escribir `0b010` (`2`) y borrar `0b100` (`4`).

## 🛠️ Proceso esperado

**Parte A — Predecí sin ejecutar** y comprobá en la consola:

| # | Expresión | Resultado |
|---|---|---|
| 1 | `6 & 3` | `2` |
| 2 | `6 | 3` | `7` |
| 3 | `6 ^ 3` | `5` |
| 4 | `1 << 4` | `16` |
| 5 | `-16 >> 2` | `-4` |
| 6 | `~6` | `-7` |

**Parte B — Los permisos.** En `intermedio-03.js`, con operadores de bits y de asignación, y mostrando cada paso:

1. Mostrá `Al empezar:` y `permisos`.
2. **Agregá** el permiso de escribir con `|=`. Mostrá `Con escribir:`.
3. **Agregá** el de borrar. Mostrá `Con borrar:`.
4. Mostrá `¿Puede escribir?` con la comprobación `(permisos & 0b010) !== 0`.
5. **Quitá** el permiso de escribir con `&=` y el operador `~`. Mostrá `Sin escribir:`.
6. Mostrá `En binario:` y `permisos.toString(2)`.

**Parte C — Valores por defecto.** Declará `nombre` (`''`), `descuento` (`0`) y `envio` (`null`) con `let`. Con **un operador lógico de asignación** en cada una, dales por defecto `'Cliente'`, `0.1` y `5`, pero **solo donde corresponde**. Mostralas en una línea.

Predicción sobre estos casos, para comprobar en la consola:

| # | Escribí | Resultado |
|---|---|---|
| 1 | `let a = null` | `undefined` |
| 2 | `a ??= 5` | `5` |
| 3 | `let b = 0` | `undefined` |
| 4 | `b ||= 7` | `7` |
| 5 | `let c = 0` | `undefined` |
| 6 | `c ??= 9` | `0` |
| 7 | `let d = 'x'` | `undefined` |
| 8 | `d &&= 'y'` | `'y'` |

**Parte D — Mostrá** `Desplazado:` con el resultado de `5 << 2` y de `-16 >> 2`.

**Parte E — Respondé:**

1. ¿Por qué `descuento` queda en `0` con el operador adecuado, y qué habría pasado con el otro?
2. ¿Qué operador usarías para saber si un permiso está encendido?

## ✅ Resultado esperado

Con la página abierta, la consola muestra:

```text
Al empezar: 1
Con escribir: 3
Con borrar: 7
¿Puede escribir? true
Sin escribir: 5
En binario: 101
Cliente 0 5
Desplazado: 20 -4
```

## 🚧 Restricciones

- 🚫 Usá `let` para lo que cambia y `const` para lo que no.
- 🚫 No uses estructuras de control ni funciones.
- 🚫 No cambies el valor inicial de `permisos`.

## 🎓 Resultados de aprendizaje

- RA-7: Usar operadores de bits, de desplazamiento y lógicos de asignación.
