# 📘 Ejemplo 20 — Elegir la forma de definir una función

> 🎓 **Resultados de aprendizaje:** RA-8
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome y se anotó lo que imprimió la consola, con el archivo y la línea de cada error. Los valores se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

La misma cuenta se puede escribir de **cuatro maneras**. Lucía las compara y decide cuál usar en cada caso.

## 💻 Código

El archivo [`20-elegir-la-forma.html`](../recursos/ejemplos/20-elegir-la-forma.html) tiene este código dentro de `<script>`:

```js
function totalA(precio, cantidad) {
  return precio * cantidad;
}

const totalB = function (precio, cantidad) {
  return precio * cantidad;
};

const totalC = (precio, cantidad) => precio * cantidad;

const totalD = (function (precio, cantidad) {
  return precio * cantidad;
})(4.5, 3);

console.log(totalA(4.5, 3));
console.log(totalB(4.5, 3));
console.log(totalC(4.5, 3));
console.log(totalD);
```

## 🔍 Análisis paso a paso

1. **Las cuatro dan el mismo resultado** (`13.5`). Lo que cambia es **cuándo** se pueden usar y **cómo se leen**.
2. **A — Declarativa.** Se puede llamar antes de definirse y se lee bien como «lista de herramientas» del programa. Es la opción por defecto para funciones con nombre.
3. **B — De expresión.** La función es un valor guardado en una constante. Útil cuando querés dejar claro que no se reasigna y que se define antes de usarse.
4. **C — De flecha.** La más corta. Ideal para cuentas de una línea.
5. **D — Autoejecutable.** No es una función que se reutilice: es un bloque que se ejecuta **una vez** y guarda su resultado (en `totalD` está el número, no una función).
6. **Regla práctica:** declarativa para funciones con nombre y varias líneas; flecha para cuentas cortas; autoejecutable para aislar un bloque de arranque; de expresión cuando necesites una función como valor.

## ✅ Resultado esperado

Al abrir `20-elegir-la-forma.html`, la consola muestra:

```text
13.5
13.5
13.5
13.5
```

- Las cuatro formas dan `13.5`.
- `totalD` no es una función: es el resultado de ejecutarla una vez.
