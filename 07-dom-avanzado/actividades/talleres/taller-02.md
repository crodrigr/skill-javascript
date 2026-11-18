# 🛠️ Taller 02 — Moverse por la lista

## 🎯 Objetivo

Aplicar lo aprendido en la sesión 2: insertar contenido en una posición exacta (RA-4 y RA-5) y navegar la jerarquía (RA-6).

## 🌍 Contexto

Partís del menú del Taller 01. Ahora cada producto tiene botones y vas a **moverte entre elementos** sin usar `id`: un botón sabe llegar a su producto, a su vecino y a su lista.

## 🪜 Pasos

1. **Botones.** Agregá a cada producto dos botones: «Quitar» y «Subir».
2. **Quitar.** Con `closest`, hacé que «Quitar» elimine **su** producto y actualice un contador de productos.
3. **Subir.** Con `previousElementSibling`, hacé que «Subir» mueva el producto **antes** de su hermano anterior (si lo hay).
4. **Posiciones.** Agregá una nota en las cuatro posiciones alrededor del primer producto (`beforebegin`, `afterbegin`, `beforeend`, `afterend`) con `insertAdjacentElement` e `insertAdjacentText`.
5. **Navegación.** Desde un producto cualquiera, mostrá en la consola: su padre, el primer y último hermano, el anterior y el siguiente, y el resultado de `closest('section')` y de `closest('table')`.
6. **Nodos y elementos.** Mostrá `children.length` y `childNodes.length` del menú y explicá la diferencia.
7. **Recorrer sin romper.** Quitá todos los productos agotados con un bucle sobre `children` y observá qué pasa; después repetilo con `Array.from`.
8. **HTML inseguro.** Con `insertAdjacentHTML`, mostrá un comentario con una imagen que tenga `onerror` y ponga `window.hackeado = true`; comparalo con `insertAdjacentText`. No uses código dañino.
9. **Una posición mal escrita.** Provocá el error de una posición inválida y anotá el mensaje y su traducción.

## 📦 Entregable

El archivo `.html` con el código y una nota con: la diferencia del paso 6, lo que pasó en el paso 7 con y sin `Array.from`, el resultado del paso 8 en los dos casos y el error del paso 9.

## 📋 Criterios de evaluación

- ✔️ Los botones funcionan para **todos** los productos con un solo código y sin `id`.
- ✔️ «Subir» respeta el caso del primer producto (sin hermano anterior).
- ✔️ Las cuatro posiciones se muestran correctamente y se distingue texto de HTML.
- ✔️ La nota explica la colección viva y la solución con `Array.from`.
- ✔️ La prueba de seguridad usa solo la marca inofensiva y concluye cuál método usar con texto de otra persona.
