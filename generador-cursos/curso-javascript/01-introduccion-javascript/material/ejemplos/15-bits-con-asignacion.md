# 📘 Ejemplo 15 — Bits con asignación

> 🎓 **Resultados de aprendizaje:** RA-7
>
> 💻 **Cómo se obtuvo.** Cada línea se escribió, en orden, en una consola nueva de Chrome, y lo que se muestra es lo que devolvió. Los resultados se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Lucía guarda varios «permisos» de un usuario en un solo número, usando bits (uno por permiso). Para combinarlos usa los operadores de **bits**: `&`, `|`, `^` y `~`, y sus formas con asignación.

## 💻 Código

Abrí una consola **nueva** (recargá la página) y escribí estas líneas, una por una, pulsando Enter después de cada una:

```js
5 & 3
5 | 3
5 ^ 3
~5
0b101
0b101 & 0b011
let permisos = 0b0101
permisos &= 0b0100
permisos |= 0b0010
permisos ^= 0b0110
permisos
```

## 🔍 Análisis paso a paso

1. **Comparar bit a bit.** Los operadores de bits comparan los números **posición por posición**. `5` es `101` y `3` es `011` en binario.
2. **AND (`&`).** Da `1` solo si **los dos** bits son `1`: `5 & 3` da `1` (`101 & 011 = 001`).
3. **OR (`|`).** Da `1` si **alguno** es `1`: `5 | 3` da `7` (`101 | 011 = 111`).
4. **XOR (`^`).** Da `1` si los bits **son distintos**: `5 ^ 3` da `6` (`101 ^ 011 = 110`).
5. **NOT (`~`).** **Invierte** todos los bits: `~5` da `-6`.
6. **Escribir binarios.** Con el prefijo `0b` se escribe un número en binario: `0b101` es `5`; `0b101 & 0b011` da `1`.
7. **Con asignación.** `permisos &= 0b0100` conserva solo el bit pedido (`5` pasa a `4`); `permisos |= 0b0010` **enciende** un bit (`4` pasa a `6`); `permisos ^= 0b0110` **alterna** los bits indicados (`6` pasa a `0`).
8. **Para qué sirve.** Los **indicadores** (*flags*) guardan muchas opciones sí/no en un solo número. Es un uso especializado; en el curso interesa reconocer cada operador.

## ✅ Resultado esperado

La consola muestra (`>` es lo que escribís y `<` es el resultado que devuelve):

```text
> 5 & 3
< 1
> 5 | 3
< 7
> 5 ^ 3
< 6
> ~5
< -6
> 0b101
< 5
> 0b101 & 0b011
< 1
> let permisos = 0b0101
< undefined
> permisos &= 0b0100
< 4
> permisos |= 0b0010
< 6
> permisos ^= 0b0110
< 0
> permisos
< 0
```

| Operador | Nombre | Regla por cada bit | `5` y `3` |
|---|---|---|---|
| `&` | AND | `1` si los dos son `1` | `1` |
| `\|` | OR | `1` si alguno es `1` | `7` |
| `^` | XOR | `1` si son distintos | `6` |
| `~` | NOT | invierte el bit | `~5` → `-6` |
