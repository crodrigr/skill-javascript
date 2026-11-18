# 🔴 Desafío 01 — Destacar productos con un clic

> 🔴 **Nivel:** Desafío · 🎓 **Resultados de aprendizaje:** RA-4, RA-6 · 🗓️ **Sesión 2**

## 🧱 Estado inicial

Abrí [`desafio-01.html`](../recursos/practica/desafio-01.html) y su archivo [`js/desafio-01.js`](../recursos/practica/js/desafio-01.js), de la carpeta `practica`. La página trae este HTML:

```html
<ul id="menu">
  <li class="producto"><span class="nombre">Café</span> <button>Destacar</button></li>
  <li class="producto"><span class="nombre">Té</span> <button>Destacar</button></li>
  <li class="producto"><span class="nombre">Galleta</span> <button>Destacar</button></li>
</ul>
```

Escribí tu código en el archivo `.js`; el `<script>` ya está al final del `<body>`.

## 🛠️ Proceso esperado

1. Mostrá `Listo: N botones` (con `N` = cantidad de productos) al cargar la página.
2. Con `querySelectorAll`, recorré los productos y, en cada uno, buscá **su** botón y **su** nombre (dentro del producto).
3. Al pulsar un botón: alterná la clase `destacado` en **su** producto (con `toggle`) y guardá el resultado.
4. Cambiá el atributo `aria-pressed` del botón al valor `true` o `false` según corresponda.
5. Mostrá `NOMBRE: destacado=true|false, aria-pressed=true|false, class="…"` con el atributo `class` del producto.
6. Comprobá los **tres casos de prueba**.

## ✅ Resultado esperado

El resultado se comprueba con los tres casos de prueba (más abajo).

## 🚧 Restricciones

- 🚫 Un solo `querySelectorAll`; no repitas el código por producto.
- 🚫 No uses `getElementById` para los botones.
- 🚫 No cambies el HTML.

## 🧪 Casos de prueba

**Caso 1.** Pulsá los botones de Café, Té y Café (otra vez).

La consola muestra (empezando por la línea de carga):

```text
Listo: 3 botones
Café: destacado=true, aria-pressed=true, class="producto destacado"
Té: destacado=true, aria-pressed=true, class="producto destacado"
Café: destacado=false, aria-pressed=false, class="producto"
```

**Caso 2.** Pulsá solo el botón de la Galleta.

La consola muestra (empezando por la línea de carga):

```text
Listo: 3 botones
Galleta: destacado=true, aria-pressed=true, class="producto destacado"
```

**Caso 3.** Pulsá los tres botones, de arriba hacia abajo.

La consola muestra (empezando por la línea de carga):

```text
Listo: 3 botones
Café: destacado=true, aria-pressed=true, class="producto destacado"
Té: destacado=true, aria-pressed=true, class="producto destacado"
Galleta: destacado=true, aria-pressed=true, class="producto destacado"
```

## 🎓 Resultados de aprendizaje

- RA-4, RA-6
