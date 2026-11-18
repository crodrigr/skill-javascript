# 🧱 Crear y modificar elementos

Curso **JavaScript** · Clase 07 · **Sesión 1**

---

## 🎯 Objetivos de la sesión

- 🔹 Crear elementos y nodos de texto, e insertarlos en la página.
- 🔹 Mover, copiar, reemplazar y eliminar nodos.
- 🔹 Configurar un elemento con sus propiedades y `style`.

---

## 🧱 Crear → configurar → insertar

![Tres pasos. Primero, createElement crea un elemento li vacío que todavía no está en la página y no tiene padre. Segundo, se configura con textContent, className y dataset. Tercero, se inserta con append en el menú, y desde ese momento aparece en la página y tiene padre.](../imagenes/crear-configurar-insertar.svg)

- Un elemento nuevo está **fuera de la página**: solo `append` & co. lo muestran.

---

## 🆕 `createElement` y `createTextNode`

```js
const li = document.createElement('li');
li.textContent = 'Té';
```

- `parentNode` es `null` e `isConnected` es `false` hasta insertarlo.
- Los textos también son nodos (`#text`).

---

## 📍 Insertar

![Una lista ul con dos elementos, A y B. prepend inserta dentro al principio. before inserta antes de B. after inserta después de B. append inserta dentro al final. replaceWith cambia B por otro nodo. remove quita B. cloneNode crea una copia de B que no está en la página hasta insertarla. Insertar un nodo que ya está en la página lo mueve.](../imagenes/metodos-de-nodos.svg)

- `append` / `prepend` → dentro. `before` / `after` → junto al elemento.

---

## 🚚 Insertar un nodo existente lo **mueve**

- `appendChild(nodo)` e `insertBefore(nodo, ref)` devuelven el nodo.
- Un nodo no puede estar en **dos lugares** a la vez.

---

## 🧬 `cloneNode`

- `cloneNode(false)` → solo el elemento. `cloneNode(true)` → con hijos.
- El clon **no está en la página** y **no copia** los controladores.
- Cambiale el `id` antes de insertarlo.

---

## 🔄 Reemplazar y eliminar

- `replaceWith(x)`, `replaceChild(nuevo, viejo)`.
- `remove()`, `removeChild(hijo)`.
- El nodo quitado queda en la variable, con `parentNode` en `null`.

---

## 🛡️ Nodos frente a `innerHTML`

- Con `textContent` el texto se muestra **como texto**.
- Con `innerHTML` se **interpreta**: riesgo con texto de otra persona.

---

## 🏷️ `id`, `className`, `title`, `hidden`, `disabled`

- Asignar la propiedad **escribe el atributo**.
- `hidden` y `disabled` se asignan con `true` o `false`.

---

## 🖼️ `src`, `href` y `dataset`

- `dataset.precio` → `data-precio`; `productoId` → `data-producto-id`.
- Los valores de `dataset` son **texto**.

---

## 🎨 `style` y el estilo calculado

- `style.backgroundColor` (*camelCase*); `style.background-color` → `SyntaxError`.
- `style` ve solo lo **en línea**; `getComputedStyle` da el valor **final**.

---

## ✍️ Actividad

- 🟢 [Básico 01](../ejercicios/basico-01.md), 🟡 [Intermedio 01](../ejercicios/intermedio-01.md) e [Intermedio 02](../ejercicios/intermedio-02.md).
- 🛠️ [Taller 01 — Construir el menú](../../actividades/talleres/taller-01.md).

---

## ✅ Resumen

- Crear → configurar → insertar.
- Insertar un nodo existente lo mueve; clonar para copiar.
- `style` en *camelCase*; `getComputedStyle` para el valor final.
