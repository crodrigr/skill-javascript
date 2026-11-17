# 📘 Ejemplo 03 — JavaScript en línea

> 🎓 **Resultados de aprendizaje:** RA-3
>
> 💻 **Cómo se obtuvo.** Se abrió la página en Chrome y se anotó lo que imprimió la consola, con el archivo y la línea de cada error. Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Lucía quiere mostrar un mensaje al cargar la página. Escribe el código **dentro de la propia página**, entre etiquetas `<script>`. En `en-linea.html` prueba dos lugares distintos: el `<head>` y el final del `<body>`.

## 💻 Código

La página `en-linea.html`:

```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <title>JavaScript en línea | Café Aroma</title>
    <script>
      console.log('1. Script en el head');
      console.log('   ¿Existe el título todavía?', document.getElementById('titulo'));
    </script>
  </head>
  <body>
    <h1 id="titulo">Café Aroma</h1>

    <script>
      console.log('2. Script al final del body');
      console.log('   El título dice:', document.getElementById('titulo').textContent);
      console.log(totalPedido);
      console.log('3. Esta línea ya no se ejecuta');
    </script>
  </body>
</html>
```

## 🔍 Análisis paso a paso

1. **Qué es «en línea».** El código JavaScript va **dentro del HTML**, entre `<script>` y `</script>`. No hay archivos aparte.
2. **El navegador lee la página de arriba hacia abajo.** Cuando encuentra un `<script>`, **lo ejecuta en ese momento** y recién después sigue con el resto de la página.
3. **Script en el `<head>`.** Se ejecuta **antes** de que exista el título (`<h1 id="titulo">`). Por eso `document.getElementById('titulo')` devuelve `null` («nada»): el elemento todavía no se leyó.
4. **Script al final del `<body>`.** Cuando llega, el título **ya existe** y se puede leer su texto: `Café Aroma`. Por eso ese script va al final: necesita que lo anterior ya esté cargado.
5. **Un error con su línea.** `totalPedido` no existe y el navegador informa `Uncaught ReferenceError: totalPedido is not defined` y **la línea del archivo** donde ocurrió (`en-linea.html:17`). Ahí hay que mirar.
6. **El error detiene ese script.** La línea siguiente (`3. Esta línea ya no se ejecuta`) no se ejecuta: cuando un script falla, el resto de **ese** script se salta.
7. **Cuándo conviene.** El código en línea sirve para pruebas pequeñas y ejemplos cortos. Cuando el código crece o se repite en varias páginas, conviene separarlo (Ejemplo 04).

## ✅ Resultado esperado

Al abrir `en-linea.html` en el navegador, la consola muestra:

```text
1. Script en el head
   ¿Existe el título todavía? null
2. Script al final del body
   El título dice: Café Aroma
Uncaught ReferenceError: totalPedido is not defined (en-linea.html:17)
```

- Con el `<script>` en el `<head>` el elemento todavía no existe: se obtiene `null`.
- Con el `<script>` al final del `<body>` el elemento existe y se lee su texto.
