# 🏷️ Atributos y clases

Curso **JavaScript** · Clase 06 · **Sesión 2**

---

## 🎯 Objetivos de la sesión

- 🔹 Leer, cambiar, alternar y quitar atributos.
- 🔹 Explicar los atributos booleanos.
- 🔹 Manipular clases con `classList`.

---

## 🏷️ Atributos

![Arriba, un enlace con tres atributos: id con valor carta, href con valor carta.html y target con valor _blank, con los métodos getAttribute, setAttribute y removeAttribute. Abajo, un botón con el atributo booleano disabled: con disabled igual a false sigue deshabilitado porque basta con que exista; se habilita quitando el atributo con removeAttribute o toggleAttribute.](../imagenes/atributos-y-booleanos.svg)

- Un atributo es un par **nombre-valor**; el valor es siempre **texto**.

---

## 📖 `getAttribute` y `setAttribute`

```js
enlace.getAttribute('href');         // "carta.html" (o null)
enlace.setAttribute('href', 'menu.html');
```

---

## 📋 `getAttributeNames`, `toggleAttribute`, `removeAttribute`

- `getAttributeNames()` → arreglo con los nombres.
- `toggleAttribute('disabled')` → alterna; devuelve si **quedó puesto**.
- `removeAttribute('target')` → lo quita, sin error si no existe.

---

## ✅ Atributos booleanos

- Valen `true` **con solo existir**: `disabled="false"` sigue deshabilitado.
- Para apagarlos: **quitarlos** (`removeAttribute` o `toggleAttribute`).

---

## 🎨 `classList`

![El atributo class del elemento es producto destacado oferta, y classList lo presenta como una lista con tres clases en las posiciones 0, 1 y 2. A la derecha, los miembros de classList y lo que devuelven: length da 3, item de 0 da producto, contains de oferta da true, add y remove no devuelven valor, toggle devuelve un booleano, toggle con condición fuerza el resultado y replace devuelve true o false.](../imagenes/class-list.svg)

- `class` es un texto; `classList` es una **lista** de clases.

---

## 🔢 `length`, `item` y `contains`

- `length` → cantidad. `item(i)` → la clase en `i` o `null`.
- `contains('oferta')` → `true` o `false`.

---

## ➕ `add` y `remove`

- `add('a', 'b')` → agrega **sin duplicar**.
- `remove('a')` → quita, sin error si no está.
- Un nombre con espacios: `InvalidCharacterError`.

---

## 🔁 `toggle`

- `toggle('destacado')` → alterna y devuelve si **quedó puesta**.
- `toggle('agotado', stock === 0)` → **fuerza** según la condición.

---

## 🔄 `replace`

- `replace('activo', 'inactivo')` → `true` si reemplazó.
- Si la vieja no existe: `false` y **no cambia nada**.

---

## 🖱️ Con un clic

- `addEventListener('click', …)` + `classList.toggle` + `setAttribute`.
- Cada botón cambia **su** producto.

---

## ✍️ Actividad

- 🟢 [Básico 02](../ejercicios/basico-02.md), 🟡 [Intermedio 02](../ejercicios/intermedio-02.md) e [Intermedio 03](../ejercicios/intermedio-03.md), 🔴 [Desafío 01](../ejercicios/desafio-01.md).
- 🛠️ [Taller 02 — Estilos con clases y atributos](../../actividades/talleres/taller-02.md).

---

## ✅ Resumen

- Los atributos son texto; los booleanos valen con existir.
- `classList` agrega, quita, alterna y reemplaza clases sin tocar las demás.
