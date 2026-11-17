# 📘 Ejemplo 14 — Copia superficial y copia profunda

> 🎓 **Resultados de aprendizaje:** RA-6
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome y se anotó lo que imprimió la consola, con el archivo y la línea de cada error. Los valores se contrastaron con Node (sin diferencias). Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador. La consola real muestra los objetos como un árbol que se despliega; aquí se escriben en una sola línea.

## 🧱 Situación inicial

Lucía copió un pedido con *spread*, le cambió la ciudad del cliente a la copia… y el pedido original también cambió. La copia **superficial** comparte los objetos anidados.

## 💻 Código

### 📄 `14-copia-superficial-y-profunda.html`

Código del archivo [`14-copia-superficial-y-profunda.html`](../recursos/ejemplos/14-copia-superficial-y-profunda.html) (lo que va dentro de `<script>`):

```js
const pedido = {
  numero: 101,
  cliente: { nombre: 'Lucía', ciudad: 'Rosario' },
  total: 13.5
};

const copia = { ...pedido };
copia.total = 20;
copia.cliente.ciudad = 'Córdoba';

console.log(pedido.total, pedido.cliente.ciudad);
console.log(copia.cliente === pedido.cliente);

const profunda = structuredClone(pedido);
profunda.cliente.ciudad = 'Salta';
console.log(pedido.cliente.ciudad, profunda.cliente.ciudad);
console.log(profunda.cliente === pedido.cliente);
```

### 📄 `14-copia-error.html`

Código del archivo [`14-copia-error.html`](../recursos/ejemplos/14-copia-error.html) (lo que va dentro de `<script>`):

```js
const producto = { nombre: 'Café', total: () => 1 };
const copia = structuredClone(producto);
```

## 🔍 Análisis paso a paso

1. **Superficial.** El *spread* (y `Object.assign`) copian el **primer nivel**. `total` es un número y se copia por valor: cambiarlo en la copia no toca al original.
2. **El objeto anidado se comparte.** `cliente` es un objeto; la copia recibe **la misma referencia**. Por eso `copia.cliente.ciudad = 'Córdoba'` cambia también `pedido.cliente.ciudad`, y `copia.cliente === pedido.cliente` es `true`.
3. **Profunda.** `structuredClone(pedido)` copia **todos los niveles**: `profunda.cliente` es otro objeto. Cambiarlo no afecta al original.
4. **Límite de `structuredClone`.** No puede copiar funciones: en `14-copia-error.html` falla con `DataCloneError`.
5. **Qué elegir.** Para un objeto plano, *spread*. Si tiene objetos adentro y vas a modificar esos objetos, `structuredClone` (o crear también un objeto nuevo para la parte anidada: `{ ...pedido, cliente: { ...pedido.cliente } }`).
6. **`JSON.parse(JSON.stringify(...))`** también hace una copia profunda, pero pierde funciones, `undefined` y fechas (Ejemplo 10).

## ✅ Resultado esperado

Al abrir `14-copia-superficial-y-profunda.html`, la consola muestra:

```text
13.5 Córdoba
true
Córdoba Salta
false
```

Al abrir `14-copia-error.html`, la consola muestra:

```text
Uncaught DataCloneError: Failed to execute 'structuredClone' on 'Window': () => 1 could not be cloned. (14-copia-error.html:14)
```

- La copia superficial comparte los objetos anidados con el original.
- `structuredClone()` hace una copia profunda, pero no admite funciones.
