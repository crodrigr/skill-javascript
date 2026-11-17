# 📘 Ejemplo 10 — El viaje de ida y vuelta entre objeto y JSON

> 🎓 **Resultados de aprendizaje:** RA-4
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome y se anotó lo que imprimió la consola, con el archivo y la línea de cada error. Los valores se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador. La consola real muestra los objetos como un árbol que se despliega; aquí se escriben en una sola línea.

## 🧱 Situación inicial

Lucía convierte un producto a JSON y lo vuelve a convertir en objeto, y compara el resultado con el original. Algunas cosas **no sobreviven** al viaje.

## 💻 Código

El archivo [`10-json-y-objetos.html`](../recursos/ejemplos/10-json-y-objetos.html) tiene este código dentro de `<script>`:

```js
const original = {
  nombre: 'Café',
  precio: 4.5,
  tamanos: ['chico', 'grande'],
  origen: null,
  nota: undefined,
  ratio: NaN,
  creado: new Date(0),
  total() {
    return 1;
  }
};

const copia = JSON.parse(JSON.stringify(original));

console.log(copia);
console.log(typeof copia.creado);
console.log('total' in copia, 'nota' in copia, copia.ratio);
console.log(copia === original);
```

## 🔍 Análisis paso a paso

1. **Qué sobrevive:** textos, números, booleanos, `null`, arreglos y objetos anidados con esos mismos tipos.
2. **Qué desaparece:** las funciones (`total`) y las propiedades con `undefined` (`nota`) no están en la copia.
3. **Qué se transforma:** `NaN` (e infinito) se convierte en `null` (`ratio`), y una fecha pasa a ser un **texto** con formato ISO (`creado` es un `string`), no una fecha.
4. **El resultado es otro objeto.** `copia === original` es `false`: no es el mismo objeto (Ejemplo 07).
5. **Uso práctico.** JSON es la forma de enviar y guardar datos como texto. Como copia de objetos solo sirve si el objeto tiene únicamente esos tipos.
6. **Resumen de la relación.** Un objeto de JavaScript puede contener más cosas que JSON; JSON solo describe datos simples. La notación se parece, pero no es lo mismo.

## ✅ Resultado esperado

Al abrir `10-json-y-objetos.html`, la consola muestra:

```text
{nombre: 'Café', precio: 4.5, tamanos: ['chico', 'grande'], origen: null, ratio: null, creado: '1970-01-01T00:00:00.000Z'}
string
false false null
false
```

- Funciones y `undefined` desaparecen; `NaN` pasa a `null`; las fechas pasan a texto.
- La copia por JSON es otro objeto distinto del original.
