# 📝 Contenido y seguridad

Curso **JavaScript** · Clase 06 · **Sesión 3**

---

## 🎯 Objetivos de la sesión

- 🔹 Leer y cambiar el contenido de un elemento.
- 🔹 Explicar el riesgo de `innerHTML`.
- 🔹 Usar `setHTML()` con detección y camino alternativo.
- 🔹 Completar el proyecto de cierre.

---

## 📝 Cuatro formas de ver el contenido

![Un párrafo con id nota que dice Hola, un span oculto con el texto oculto, y mundo. textContent lee Hola oculto mundo, incluido el texto oculto, y al asignarse reemplaza el contenido por texto. outerText lee Hola mundo, solo lo visible, y al asignarse reemplaza el elemento completo. innerHTML lee el HTML de adentro y al asignarse lo interpreta. outerHTML lee el elemento con su etiqueta y al asignarse reemplaza el elemento.](../imagenes/contenido-del-elemento.svg)

---

## 🔤 `nodeName` y `textContent`

- `nodeName` → `P`, `LI`… (mayúsculas); `#document`.
- `textContent` → el texto; **no interpreta etiquetas**; incluye el texto oculto.

---

## 👁️ `outerText`

- Lee el texto **visible**.
- Al asignarlo, **reemplaza el elemento completo**.

---

## 🧱 `innerHTML`

```js
menu.innerHTML = '<li>Té</li>';
```

- Lee y asigna el **HTML de adentro**; lo **interpreta**.
- `''` vacía el elemento.

---

## 📦 `outerHTML`

- Lee el elemento **con su etiqueta**.
- Al asignarlo, **lo reemplaza**; la variable vieja queda desactualizada.

---

## ⚠️ El riesgo de `innerHTML`

![Un comentario de una persona usuaria contiene la etiqueta b con Hola y una imagen con un atributo onerror que ejecuta código. Con textContent todo se muestra como texto y no se ejecuta nada. Con innerHTML el HTML se interpreta y el onerror ejecuta código, lo que es un riesgo. Con setHTML se conserva la negrita y se elimina la imagen con el onerror, aunque setHTML no está disponible en todos los navegadores.](../imagenes/inner-html-frente-a-set-html.svg)

- Con texto de otra persona, `<img onerror>` **ejecuta código** (XSS).

---

## 🛡️ `setHTML()`

- Inserta HTML **saneado**: quita scripts y atributos de eventos.
- **Disponibilidad limitada**: Chrome 146+, Firefox 148+; Safari, no (MDN, 17/11/2026).

---

## 🔎 Detectar y tener un plan B

```js
if (typeof elemento.setHTML === 'function') {
  elemento.setHTML(texto);
} else {
  elemento.textContent = texto;
}
```

---

## 🧰 Regla de oro

- Texto de otra persona → **`textContent`**.
- HTML propio → `innerHTML`.
- HTML ajeno → `setHTML()` con detección.

---

## 🚀 Proyecto de cierre

- [El menú de Aroma con vida](../../actividades/proyectos/proyecto-menu-aroma.md): clases, atributos, contenido y clics.

---

## ✍️ Actividad

- 🟢 [Básico 03](../ejercicios/basico-03.md), 🟡 [Intermedio 04](../ejercicios/intermedio-04.md), 🔴 [Desafío 02](../ejercicios/desafio-02.md).
- 🛠️ [Taller 03 — Contenido seguro](../../actividades/talleres/taller-03.md).

---

## ✅ Resumen

- `textContent` es seguro; `innerHTML` interpreta.
- `setHTML()` sanea, pero hay que detectarla.
