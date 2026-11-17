# 🟡 Intermedio 02 — Tres pasos en una cadena

> 🟡 **Nivel:** Intermedio · 🎓 **Resultados de aprendizaje:** RA-3 · 🗓️ **Sesión 1**

## 🧱 Estado inicial

Abrí [`intermedio-02.html`](../recursos/practica/intermedio-02.html) y su archivo [`js/intermedio-02.js`](../recursos/practica/js/intermedio-02.js), de la carpeta `practica`. El archivo trae tres pasos del pedido que devuelven promesas, y el pedido 101:

```js
function validar(pedido) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (pedido.items.length === 0) {
        reject('Pedido vacío');
        return;
      }
      console.log('✅ Validado');
      resolve(pedido);
    }, 300);
  });
}

function cobrar(pedido) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (pedido.tarjetaValida === false) {
        reject('Tarjeta rechazada');
        return;
      }
      console.log('💳 Cobrado $' + pedido.total);
      resolve(pedido);
    }, 500);
  });
}

function preparar(pedido) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('☕ Preparado');
      resolve(pedido);
    }, 800);
  });
}

const pedido = { numero: 101, cliente: 'Lucía', items: ['Café'], total: 4.5 };

// Escribí acá la cadena
```

## 🛠️ Proceso esperado

1. Mostrá `📥 Pedido N recibido`.
2. Encadená `validar`, `cobrar` y `preparar` con `.then()`, **una debajo de la otra** y sin anidar.
3. Al final de la cadena, mostrá `🏁 Pedido N listo para CLIENTE`.
4. Agregá **un solo** `.catch()` que muestre `❌ El pedido se detuvo: MOTIVO`.
5. Probá cambiando el pedido a `{ numero: 102, cliente: 'Marcos', items: [], total: 0 }` y a `{ numero: 103, cliente: 'Diego', items: ['Té'], total: 3.2, tarjetaValida: false }`.

**Respondé:** En el pedido 103, ¿se ejecuta `preparar`? ¿Por qué?

## ✅ Resultado esperado

La consola muestra (en este orden):

```text
📥 Pedido 101 recibido
✅ Validado
💳 Cobrado $4.5
☕ Preparado
🏁 Pedido 101 listo para Lucía
```

## 🚧 Restricciones

- 🚫 Nada de `.then()` anidados dentro de otros.
- 🚫 Un solo `.catch()`.
- 🚫 No cambies los tres pasos.

## 🎓 Resultados de aprendizaje

- RA-3
