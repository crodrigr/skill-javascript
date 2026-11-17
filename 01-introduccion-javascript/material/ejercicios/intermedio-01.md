# 🟡 Intermedio 01 — Corregí las declaraciones

> 🟡 **Nivel:** Intermedio · 🎓 **Resultados de aprendizaje:** RA-4, RA-6 · 🗓️ **Sesión 1**

## 🧱 Estado inicial

Abrí [`intermedio-01.html`](../recursos/practica/intermedio-01.html), de la carpeta `practica`. Tiene **cuatro scripts independientes** y cada uno tiene un error de declaración. Al abrirla, la consola muestra cuatro errores:

```text
Uncaught TypeError: Assignment to constant variable. (intermedio-01.html:15)
Uncaught SyntaxError: Identifier 'cantidad' has already been declared (intermedio-01.html:22)
Uncaught ReferenceError: Cannot access 'total' before initialization (intermedio-01.html:28)
Uncaught ReferenceError: etiqueta is not defined (intermedio-01.html:37)
```

## 🛠️ Proceso esperado

**Parte A — Corregí.** Cambiá **solo el código de cada script** (sin agregar ni quitar scripts) para que no haya errores y la consola muestre los valores indicados:

| Script | Qué debe pasar | Salida esperada |
|---|---|---|
| 1 | El IVA cambia de `0.21` a `0.19` | `IVA: 0.19` |
| 2 | La cantidad pasa de `2` a `3` | `Cantidad: 3` |
| 3 | Mostrar el total que vale `10` | `Total: 10` |
| 4 | Mostrar la etiqueta `Café` declarada fuera de un bloque | `Etiqueta: Café` |

**Parte B — Compatibilidad.** En una consola nueva, comprobá con `typeof` si el navegador tiene `Number.isInteger` y una función inventada:

| Escribí | Resultado esperado |
|---|---|
| `typeof Number.isInteger` | `'function'` |
| `typeof Number.funcionInventada` | `'undefined'` |

**Parte C — Respondé:**

1. ¿Por qué en el Script 1 conviene cambiar `const` por `let`, y no quitar la reasignación?
2. ¿Por qué da error el Script 3 con `let` pero no daría error con `var`? ¿Qué mostraría con `var`?
3. ¿Qué paso de la estrategia *crossbrowser* representa la Parte B?

## ✅ Resultado esperado

Con los cuatro scripts corregidos, la consola muestra:

```text
IVA: 0.19
Cantidad: 3
Total: 10
Etiqueta: Café
```

## 🚧 Restricciones

- 🚫 No uses `var`.
- 🚫 No agregues estructuras de control ni funciones.
- 🚫 Cada script debe seguir siendo independiente de los demás.

## 🎓 Resultados de aprendizaje

- RA-4: Aplicar una estrategia de compatibilidad (detectar con `typeof`).
- RA-6: Predecir y corregir errores de declaración (reasignación, redeclaración, zona muerta y alcance).
