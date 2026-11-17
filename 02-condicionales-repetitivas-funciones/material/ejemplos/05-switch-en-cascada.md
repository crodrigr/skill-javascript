# 📘 Ejemplo 05 — El `switch` sin `break` (cascada)

> 🎓 **Resultados de aprendizaje:** RA-2
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome y se anotó lo que imprimió la consola, con el archivo y la línea de cada error. Los valores se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Lucía armó un programa de niveles de socio. Olvidó los `break` y el programa muestra más de lo que debería. Eso se llama **cascada** (*fall-through*).

## 💻 Código

El archivo [`05-switch-en-cascada.html`](../recursos/ejemplos/05-switch-en-cascada.html) tiene este código dentro de `<script>`:

```js
const nivel = 2;

// Sin break: la ejecución "cae" en los casos siguientes
switch (nivel) {
  case 1:
    console.log('Beneficio del nivel 1');
  case 2:
    console.log('Beneficio del nivel 2');
  case 3:
    console.log('Beneficio del nivel 3');
    break;
  default:
    console.log('Nivel desconocido');
}

console.log('---');

// Con break: se ejecuta solo el caso que coincide
const nivelB = 2;
switch (nivelB) {
  case 1:
    console.log('Beneficio del nivel 1');
    break;
  case 2:
    console.log('Beneficio del nivel 2');
    break;
  case 3:
    console.log('Beneficio del nivel 3');
    break;
  default:
    console.log('Nivel desconocido');
}
```

## 🔍 Análisis paso a paso

1. **El `switch` salta al `case` que coincide** (`case 2`) y ejecuta **todo lo que sigue** hasta encontrar un `break` o llegar al final.
2. **Sin `break` en `case 2`**, la ejecución continúa en `case 3` aunque `nivel` no valga `3`. Eso es la cascada: se muestran los beneficios 2 y 3.
3. **El `break` del `case 3`** detiene la cascada. Si tampoco estuviera, llegaría hasta el `default` y lo ejecutaría también.
4. **Con `break` en cada caso**, el resultado es el esperado: solo `Beneficio del nivel 2`.
5. **La cascada a veces es útil** (por ejemplo, para agrupar casos como en el Ejemplo 04), pero casi siempre es un descuido. Si la querés a propósito, dejá un comentario que lo diga.

## ✅ Resultado esperado

Al abrir `05-switch-en-cascada.html`, la consola muestra:

```text
Beneficio del nivel 2
Beneficio del nivel 3
---
Beneficio del nivel 2
```

### 🔁 Probalo con otros datos

Se cambió una línea del primer script y se volvió a abrir la página:

- Si `nivel` pasa a `1` (en el primer `switch`): `Beneficio del nivel 1` · `Beneficio del nivel 2` · `Beneficio del nivel 3` · `---` · `Beneficio del nivel 2`

- Sin `break` se ejecutan también los casos siguientes.
- Con `break` en cada caso se ejecuta solo el que coincide.
