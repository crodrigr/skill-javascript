# 📘 Ejemplo 04 — JavaScript desde un archivo externo

> 🎓 **Resultados de aprendizaje:** RA-3
>
> 💻 **Cómo se obtuvo.** Se abrió la página en Chrome y se anotó lo que imprimió la consola, con el archivo y la línea de cada error. Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

El código de la tienda de Lucía crece y quiere usarlo en varias páginas. Lo pasa a un **archivo aparte**, `tienda.js`, y lo incorpora con `<script src="...">`.

## 💻 Código

La página `externo.html`:

```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <title>JavaScript en un archivo externo | Café Aroma</title>
  </head>
  <body>
    <h1 id="titulo">Café Aroma</h1>

    <script src="js/tienda.js"></script>
  </body>
</html>
```

El archivo `js/tienda.js`:

```js
// Archivo externo: solo JavaScript, sin etiquetas <script>
const precio = 4.5;
const cantidad = 3;

console.log('Desde tienda.js');
console.log('Total:', precio * cantidad);
console.log('El título dice:', document.getElementById('titulo').textContent);
console.log(descuento);
console.log('Esta línea ya no se ejecuta');
```

## 🔍 Análisis paso a paso

1. **Qué es «externo».** El código JavaScript va en un **archivo propio** (con extensión `.js`) y la página lo incorpora con el atributo `src` («source», fuente) de `<script>`: `<script src="js/tienda.js"></script>`.
2. **El archivo `.js` solo lleva JavaScript.** No lleva etiquetas `<script>` ni HTML. Lo primero que hay en `tienda.js` es un comentario.
3. **La ruta.** `js/tienda.js` es una ruta **relativa** a la página: la carpeta `js` está junto a `externo.html`. Si la ruta está mal, el script no se carga.
4. **Mismo efecto que en línea.** El navegador descarga el archivo y lo ejecuta en el lugar donde está la etiqueta. Como la etiqueta está al final del `<body>`, el título ya existe y se lee: `Café Aroma`.
5. **Un error con su archivo.** `descuento` no existe: el navegador informa `Uncaught ReferenceError: descuento is not defined` y señala el archivo y la línea (`tienda.js:8`), no la página. En la consola real, un clic en ese enlace abre el archivo en esa línea.
6. **Comparación.** El archivo externo se **reutiliza** en varias páginas, se **ordena** mejor y el navegador lo puede **guardar en la memoria** (caché). El código en línea evita una descarga más y es cómodo para algo muy corto.
7. **Qué elegir.** Para el curso: pruebas y ejemplos cortos, en línea; el código que vas a conservar, en un archivo `.js`.

## ✅ Resultado esperado

Al abrir `externo.html` en el navegador, la consola muestra:

```text
Desde tienda.js
Total: 13.5
El título dice: Café Aroma
Uncaught ReferenceError: descuento is not defined (tienda.js:8)
```

| | En línea | Archivo externo |
|---|---|---|
| Dónde está el código | dentro de la página | en un archivo `.js` |
| Etiqueta | `<script>` … `</script>` | `<script src="ruta.js"></script>` |
| Reutilizable en otras páginas | no | sí |
| Dónde informa los errores | `pagina.html:línea` | `archivo.js:línea` |
| Conviene para | pruebas y código muy corto | código que crece o se repite |
