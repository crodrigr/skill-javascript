# 📘 Ejemplo 10 — El bucle infinito

> 🎓 **Resultados de aprendizaje:** RA-3
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome y se anotó lo que imprimió la consola, con el archivo y la línea de cada error. Los valores se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

A Lucía se le olvidó restar uno a `cuenta` y la pestaña se quedó **colgada**. Un bucle cuya condición nunca se vuelve falsa es un **bucle infinito**: el navegador sigue calculando y no responde.

## 💻 Código

El archivo [`10-bucle-infinito.html`](../recursos/ejemplos/10-bucle-infinito.html) tiene este código dentro de `<script>`:

```js
// Versión con "seguro": si algo sale mal, el bucle se detiene igual
let cuenta = 3;
let seguro = 0;
while (cuenta > 0 && seguro < 5) {
  console.log('Faltan', cuenta);
  seguro++;            // aquí se olvidó cuenta-- : solo el seguro lo frena
}
console.log('Salí por el seguro, cuenta sigue en', cuenta);

// Un bucle "infinito" a propósito, controlado con break
let vuelta = 0;
while (true) {
  vuelta++;
  console.log('Vuelta', vuelta);
  if (vuelta >= 3) {
    break;
  }
}
console.log('Salí del bucle con break');
```

### ⚠️ La versión sin seguro (no la ejecutes en la página)

```js
let cuenta = 3;
while (cuenta > 0) {
  console.log('Faltan', cuenta);   // falta cuenta-- : la condición nunca cambia
}
```

Con este código la pestaña **deja de responder** y el navegador acaba mostrando un aviso de página sin respuesta. En la verificación de este material se abrió la página con un tiempo límite y la herramienta informó `SIN RESPUESTA (¿bucle infinito?)`.

## 🔍 Análisis paso a paso

1. **Qué es.** Un bucle infinito es uno cuya condición **siempre** es verdadera. No es un error de sintaxis: JavaScript lo ejecuta fielmente, para siempre.
2. **Cómo se produce.** (1) Olvidar cambiar la variable de la condición (`cuenta--`); (2) cambiarla en el sentido equivocado (`i--` cuando la condición es `i <= 3`); (3) una condición que nunca puede ser falsa, como `while (true)`.
3. **Cómo se reconoce.** La pestaña se congela, el ventilador acelera y el navegador sugiere detener la página. En la consola puede no aparecer nada.
4. **Cómo se evita.** Antes de ejecutar, preguntate: «¿qué línea del cuerpo hace que la condición llegue a ser falsa?». Mientras practicás, agregá un **seguro** (un contador con tope) como el del primer bucle.
5. **`while (true)` con `break` no es un error.** Se usa a propósito cuando la salida se decide dentro del cuerpo. Lo importante es que el `break` sea alcanzable.
6. **Si ya se colgó.** Cerrá la pestaña (o elegí «Detener» cuando el navegador lo ofrezca) y corregí el código antes de volver a abrirla.

## ✅ Resultado esperado

Al abrir `10-bucle-infinito.html`, la consola muestra:

```text
Faltan 3
Faltan 3
Faltan 3
Faltan 3
Faltan 3
Salí por el seguro, cuenta sigue en 3
Vuelta 1
Vuelta 2
Vuelta 3
Salí del bucle con break
```

- El seguro detiene el bucle a las cinco vueltas aunque `cuenta` no cambie.
- `while (true)` con un `break` alcanzable termina bien.
