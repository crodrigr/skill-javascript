# 🟡 Intermedio 01 — Elegí la estructura

> 🟡 **Nivel:** Intermedio · 🎓 **Resultados de aprendizaje:** RA-2, RA-4 · 🗓️ **Sesión 1**

## 🧱 Estado inicial

Abrí [`intermedio-01.html`](../recursos/practica/intermedio-01.html) y su archivo [`js/intermedio-01.js`](../recursos/practica/js/intermedio-01.js), de la carpeta `practica`. El archivo declara dos datos:

```js
const codigo = 'N';
const stock = 0;
```

## 🛠️ Proceso esperado

**Parte A — `switch`.** Según `codigo`, mostrá el tipo de envío: `'E'` → `Envío: Express`; `'N'` → `Envío: Normal`; `'R'` → `Envío: Retiro en tienda`; cualquier otro → `Envío: código desconocido`.

**Parte B — Operador condicional.** Guardá en la constante `etiqueta` el texto `'Disponible'` si `stock` es mayor que `0` y `'Agotado'` en caso contrario, y mostrá `Estado:`, un espacio y la etiqueta.

**Parte C — `continue` y `break`.** Con un `for` de `n = 1` a `20`:

1. Saltá con `continue` los números que **no** sean múltiplos de 3.
2. Mostrá cada múltiplo de 3 como `Múltiplo de 3: n`.
3. Cuando el múltiplo sea además múltiplo de 12, cortá el bucle con `break`.
4. Al terminar el bucle, mostrá `Fin`.

**Parte D — Respondé:**

1. ¿Qué pasaría en la Parte A si olvidaras los `break`? Con `codigo = 'E'`, ¿qué líneas se mostrarían?
2. ¿Por qué no conviene usar el operador condicional para elegir entre los cuatro tipos de envío?

## ✅ Resultado esperado

Con los datos del estado inicial, la consola muestra:

```text
Envío: Normal
Estado: Agotado
Múltiplo de 3: 3
Múltiplo de 3: 6
Múltiplo de 3: 9
Múltiplo de 3: 12
Fin
```

## 🚧 Restricciones

- 🚫 No uses `if` en las Partes A y B.
- 🚫 En la Parte C, `continue` y `break` van dentro de un `if`.
- 🚫 Escribí un `break` al final de cada `case`.

## 🎓 Resultados de aprendizaje

- RA-2: Elegir entre `switch` y el operador condicional y escribirlos.
- RA-4: Controlar un bucle con `continue` y `break`.
