# 📘 Ejemplo 21 — await en el nivel superior de un módulo

> 🎓 **Resultados de aprendizaje:** RA-8
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, **en el orden en que salió**, con el archivo y la línea de cada error. El orden se contrastó con Node cuando la página no usa el navegador ni tiene errores a propósito (sin diferencias). Los ejemplos **no imprimen objetos `Promise`**: la consola real muestra su estado, pero aquí se observa con `.then()`, `.catch()` y `.finally()`. Los **tiempos son aproximados**: lo que importa es el orden. Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Hasta ahora, `await` vivía dentro de funciones `async`. En un **módulo** (`<script type="module">`) se puede usar **directamente en el nivel superior**, sin envolverlo en una función: es el *top-level await*.

## 💻 Código

El archivo [`21-top-level-await.html`](../recursos/ejemplos/21-top-level-await.html) es un **módulo** (`<script type="module">`). Para abrirlo hay que **servir la carpeta con un servidor local** (en VS Code, la extensión *Live Server*: clic derecho en el archivo y «Open with Live Server»), porque el navegador no ejecuta módulos abiertos desde el disco. Tiene este código:

```js
console.log('módulo: antes del await');

const respuesta = await new Promise((resolve) => {
  setTimeout(() => resolve('Café: 4.5'), 300);
});

console.log('módulo: ' + respuesta);
```

La segunda página, [`21-top-level-await-clasico.html`](../recursos/ejemplos/21-top-level-await-clasico.html) (el mismo await en un script clásico), tiene este código dentro de `<script>`:

```js
console.log('script clásico');

const respuesta = await Promise.resolve('Café: 4.5');

console.log(respuesta);
```

## 🔍 Análisis paso a paso

1. **`<script type="module">`** convierte el script en un módulo: allí `await` funciona en el nivel superior. El módulo **espera** a que la promesa se cumpla antes de ejecutar las líneas siguientes.
2. **En un script clásico** (`<script>` sin `type`), `await` fuera de una función es un error de sintaxis: `SyntaxError: await is only valid in async functions and the top level bodies of modules` (*await solo es válido en funciones async y en el nivel superior de módulos*). Como es un error de sintaxis, **no se ejecuta ninguna línea** de ese script (ni siquiera la primera).
3. **Cómo abrir un módulo:** los navegadores **bloquean los módulos abiertos desde el disco** (`file://`). Hay que servir la carpeta con un servidor local; en VS Code, la extensión **Live Server** («Go Live») lo hace con un clic.
4. **Alcance:** el *top-level await* es cómodo para scripts pequeños y pruebas. Los módulos tienen más reglas (`import`/`export`), que veremos más adelante.
5. **Alternativa sin módulo:** envolver el código en una función `async` y llamarla, como hicimos hasta ahora.

## ✅ Resultado esperado

Al abrir `21-top-level-await.html`, la consola muestra:

```text
módulo: antes del await
módulo: Café: 4.5
```

Al abrir `21-top-level-await-clasico.html`, la consola muestra:

```text
Uncaught SyntaxError: await is only valid in async functions and the top level bodies of modules (21-top-level-await-clasico.html:15)
```

- En un `<script type="module">`, `await` se puede usar fuera de una función.
- En un script clásico da `SyntaxError`; los módulos requieren un servidor local.
