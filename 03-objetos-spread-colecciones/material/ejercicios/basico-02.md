# 🟢 Básico 02 — De objeto a JSON y de vuelta

> 🟢 **Nivel:** Básico · 🎓 **Resultados de aprendizaje:** RA-4 · 🗓️ **Sesión 2**

## 🧱 Estado inicial

Abrí [`basico-02.html`](../recursos/practica/basico-02.html) y su archivo [`js/basico-02.js`](../recursos/practica/js/basico-02.js), de la carpeta `practica`. El archivo declara un pedido que tiene, a propósito, un valor `undefined` y un método:

```js
const pedido = {
  numero: 101,
  cliente: 'Lucía',
  total: 13.5,
  pagado: false,
  nota: undefined,
  imprimir() {
    return 'imprimiendo';
  }
};
```

## 🛠️ Proceso esperado

**Parte A — Convertí.**

1. Guardá en `texto` el resultado de `JSON.stringify(pedido)` y mostralo.
2. Mostrá el mismo JSON con sangría de 2 espacios.
3. Convertí `texto` otra vez en un objeto y guardalo en `copia`; mostrala.
4. Mostrá, en una línea, si `'imprimir' in copia` y si `'nota' in copia`.

**Parte B — Predecí** (sin ejecutar). ¿Qué muestra cada línea?

```js
console.log(JSON.stringify({ a: 1, b: [1, undefined, 3], c: NaN }));  // a)
console.log(JSON.stringify('Aroma'));                                  // b)
console.log(JSON.parse('{"x":[1,2]}').x.length);                       // c)
```

**Parte C — Respondé:** ¿cuáles de estos textos **no** son JSON válido y por qué? `'{"a":1}'`, `"{'a':1}"`, `'{"a":1,}'`, `'{a:1}'`.

## ✅ Resultado esperado

**Parte A**, en la consola:

```text
{"numero":101,"cliente":"Lucía","total":13.5,"pagado":false}
{
  "numero": 101,
  "cliente": "Lucía",
  "total": 13.5,
  "pagado": false
}
{numero: 101, cliente: 'Lucía', total: 13.5, pagado: false}
false false
```

**Partes B y C:** una respuesta única por ítem (ver las soluciones).

## 🚧 Restricciones

- 🚫 No cambies el objeto `pedido`.
- 🚫 No uses `try/catch`: en la Parte C se responde por escrito, sin ejecutar.
- 🚫 No ejecutes los textos inválidos de la Parte C en la página.

## 🎓 Resultados de aprendizaje

- RA-4: Convertir objetos a JSON y JSON a objetos, y explicar qué se pierde.
