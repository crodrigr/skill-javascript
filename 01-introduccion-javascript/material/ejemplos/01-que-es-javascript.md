# 📘 Ejemplo 01 — ¿Qué es JavaScript?

> 🎓 **Resultados de aprendizaje:** RA-1
>
> 💻 **Cómo se obtuvo.** Se abrió la página en Chrome y se anotó lo que imprimió la consola, con el archivo y la línea de cada error. Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Lucía abre la tienda «Aroma» en línea y quiere entender qué hace cada tecnología de una página. En `que-es-javascript.html` junta **HTML**, **CSS** y **JavaScript** en una sola página y calcula el total de un pedido de café.

## 💻 Código

La página `que-es-javascript.html`:

```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <title>Café Aroma | HTML, CSS y JavaScript</title>
    <style>
      /* CSS: el aspecto */
      h1 {
        color: #92400e;
      }

      #total {
        font-weight: bold;
        color: #166534;
      }
    </style>
  </head>
  <body>
    <!-- HTML: el contenido -->
    <h1>Café Aroma</h1>
    <p>Total de tu pedido: <span id="total">?</span></p>

    <script>
      // JavaScript: el comportamiento (acá, un cálculo)
      const precio = 4.5;
      const cantidad = 3;
      const total = precio * cantidad;

      // Una vista previa: JavaScript también puede cambiar la página
      document.getElementById('total').textContent = total;

      console.log('Total calculado:', total);
      console.log('La página ahora dice:', document.getElementById('total').textContent);
    </script>
  </body>
</html>
```

## 🔍 Análisis paso a paso

1. **HTML** es el **contenido**: el título «Café Aroma», el párrafo y el `<span>` donde irá el total. Sin HTML no hay página.
2. **CSS** es el **aspecto**: en el bloque `<style>` el título es marrón y el total, verde y en negrita. Cambiarlo no cambia el contenido ni el comportamiento.
3. **JavaScript** es el **comportamiento**: es un **lenguaje de programación** que el navegador ejecuta. Acá hace un cálculo (`4.5 * 3`) y se lo muestra a la persona. MDN lo describe como un lenguaje de *scripting* que sirve para hacer páginas interactivas.
4. **Dónde se ejecuta.** El navegador lee la página y, al llegar al `<script>`, ejecuta el código. Para eso trae un **motor de JavaScript** incorporado: no hace falta instalar nada.
5. **Qué hace el código.** Guarda dos valores (`precio` y `cantidad`), los multiplica y guarda el resultado en `total`. Después cambia el texto del `<span>` y escribe dos mensajes en la consola.
6. **Una vista previa.** La línea con `document.getElementById('total')` es una muestra de que JavaScript puede **cambiar la página**. No hace falta entenderla todavía: se estudia en otro módulo. En este módulo trabajamos con los valores y los cálculos.
7. **Los comentarios.** Las líneas que empiezan con `//` (y lo que está entre `/* */` en CSS y `<!-- -->` en HTML) no se ejecutan: son notas para quien lee el código.
8. **Un solo lenguaje, muchos lugares.** JavaScript nació para los navegadores, pero hoy también se usa en otros entornos. En este curso trabajamos siempre en el navegador.

## ✅ Resultado esperado

Al abrir `que-es-javascript.html` en el navegador, la consola muestra:

```text
Total calculado: 13.5
La página ahora dice: 13.5
```

- Los tres lenguajes viven en la misma página y cada uno hace una cosa: HTML estructura, CSS da aspecto y JavaScript calcula y cambia cosas.
- El texto del párrafo, que decía `?`, ahora dice `13.5` (el total calculado).
