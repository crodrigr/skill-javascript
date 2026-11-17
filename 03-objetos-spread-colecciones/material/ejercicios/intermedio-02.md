# 🟡 Intermedio 02 — Desestructuración, spread y copias

> 🟡 **Nivel:** Intermedio · 🎓 **Resultados de aprendizaje:** RA-5, RA-6 · 🗓️ **Sesión 2**

## 🧱 Estado inicial

Abrí [`intermedio-02.html`](../recursos/practica/intermedio-02.html) y su archivo [`js/intermedio-02.js`](../recursos/practica/js/intermedio-02.js), de la carpeta `practica`. El archivo declara un pedido con un objeto anidado:

```js
const pedido = {
  numero: 102,
  cliente: { nombre: 'Marta', ciudad: 'Salta' },
  items: ['Té'],
  total: 3.2
};
```

## 🛠️ Proceso esperado

Escribí, debajo de los datos:

1. **Desestructuración anidada:** extraé `nombre` y `ciudad` de `pedido.cliente` en una sola línea y mostralos.
2. **Renombrar y valor por defecto:** de `pedido`, extraé `numero`, `total` con el nombre `importe` y `envio` con el valor por defecto `0`; mostralos.
3. **Spread:** creá `conEnvio` con todas las propiedades del pedido y `envio: 3.5`; mostrá `conEnvio.envio` y `pedido.envio`.
4. **Copia superficial:** creá `copia` con *spread*, cambiá `copia.cliente.ciudad` a `'Jujuy'` y mostrá `pedido.cliente.ciudad`.
5. **Copia profunda:** creá `profunda` con `structuredClone`, cambiá su ciudad a `'Tucumán'` y mostrá la ciudad del original y la de `profunda`.
6. **`Object.assign`:** combiná `{ a: 1, b: 2 }` y `{ b: 3 }` en un objeto nuevo y mostralo.

**Respondé:** ¿por qué el paso 4 cambió el pedido original y el paso 5, no?

## ✅ Resultado esperado

La consola muestra:

```text
Marta Salta
102 3.2 0
3.5 undefined
Jujuy
Jujuy Tucumán
{a: 1, b: 3}
```

## 🚧 Restricciones

- 🚫 No uses `JSON.parse(JSON.stringify(...))` para copiar.
- 🚫 No modifiques el objeto `pedido` directamente (solo a través de las copias).
- 🚫 El paso 6 no puede modificar ninguno de los dos objetos de origen.

## 🎓 Resultados de aprendizaje

- RA-5: Usar la desestructuración y el operador *spread*.
- RA-6: Copiar objetos y distinguir la copia superficial de la profunda.
