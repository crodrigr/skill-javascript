# 🔑 Soluciones — Ejercicios de la Clase 05 (material docente)

No compartir este archivo con los estudiantes. Cada solución se ejecutó en Chrome sobre la página de partida del ejercicio: pasa `validar_js.py --nivel 5` (sintaxis y alcance) y produce la salida indicada **en ese orden**. Los tiempos son aproximados.

---

## 🟢 Básico 01 — Mi primera promesa

```js
console.log('Inicio');

function esperar(milisegundos) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Pasaron ' + milisegundos + ' ms');
    }, milisegundos);
  });
}

esperar(300).then((mensaje) => console.log(mensaje));
esperar(100).then((mensaje) => console.log(mensaje));

console.log('Fin del código síncrono');
```

**Salida:**

```text
Inicio
Fin del código síncrono
Pasaron 100 ms
Pasaron 300 ms
```

**Respuesta.** Justo después de llamar a la función está **pendiente** (todavía no pasaron los 300 ms). Cuando aparece el mensaje, ya está **cumplida**: `resolve` la cumplió con el texto.

---

## 🟡 Intermedio 01 — then, catch, finally y el orden

```js
function cobrar(pedido) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (pedido.tarjetaValida === false) {
        reject('Tarjeta rechazada');
        return;
      }
      resolve(pedido);
    }, 500);
  });
}

console.log('Inicio');

setTimeout(() => console.log('Temporizador de 0 ms'), 0);

Promise.resolve('ya cumplida').then((valor) => console.log('Microtarea: ' + valor));

function intentar(pedido) {
  cobrar(pedido)
    .then((p) => console.log('💳 Cobrado $' + p.total))
    .catch((motivo) => console.log('❌ ' + motivo))
    .finally(() => console.log('🔚 Fin del pedido ' + pedido.numero));
}

intentar({ numero: 101, total: 6.7 });
intentar({ numero: 102, total: 6.7, tarjetaValida: false });

console.log('Fin del código síncrono');
```

**Salida:**

```text
Inicio
Fin del código síncrono
Microtarea: ya cumplida
Temporizador de 0 ms
💳 Cobrado $6.7
🔚 Fin del pedido 101
❌ Tarjeta rechazada
🔚 Fin del pedido 102
```

**Respuesta.** Porque el `.then()` espera en la cola de **microtareas**, que se atiende apenas termina el código síncrono y **antes** de la cola de tareas donde espera el temporizador (aunque sea de 0 ms).

---

## 🟡 Intermedio 02 — Tres pasos en una cadena

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

console.log('📥 Pedido ' + pedido.numero + ' recibido');

validar(pedido)
  .then(cobrar)
  .then(preparar)
  .then((p) => console.log('🏁 Pedido ' + p.numero + ' listo para ' + p.cliente))
  .catch((motivo) => console.log('❌ El pedido se detuvo: ' + motivo));
```

**Salida:**

```text
📥 Pedido 101 recibido
✅ Validado
💳 Cobrado $4.5
☕ Preparado
🏁 Pedido 101 listo para Lucía
```

**Respuesta.** No. `cobrar` rechaza la promesa; las cadenas de `.then()` se saltan hasta el `.catch()`, así que `preparar` y el mensaje de cierre no se ejecutan.

---

## 🟡 Intermedio 03 — Los cuatro combinadores

```js
function consultar(nombre, milisegundos, falla) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (falla) {
        reject('Falló ' + nombre);
        return;
      }
      resolve(nombre + ' ok');
    }, milisegundos);
  });
}

function tareas() {
  return [
    consultar('precio', 300, false),
    consultar('stock', 500, true),
    consultar('proveedor', 700, false)
  ];
}

Promise.all(tareas())
  .then((resultados) => console.log('all: ' + resultados.join(', ')))
  .catch((motivo) => console.log('❌ all: ' + motivo));

Promise.allSettled(tareas()).then((resultados) => {
  let cumplidas = 0;
  let rechazadas = 0;
  for (const r of resultados) {
    if (r.status === 'fulfilled') {
      cumplidas = cumplidas + 1;
    } else {
      rechazadas = rechazadas + 1;
    }
  }
  console.log('allSettled: ' + cumplidas + ' cumplidas y ' + rechazadas + ' rechazada');
});

Promise.race(tareas()).then((ganadora) => console.log('race: ' + ganadora));

Promise.any(tareas()).then((ganadora) => console.log('any: ' + ganadora));
```

**Salida:**

```text
race: precio ok
any: precio ok
❌ all: Falló stock
allSettled: 2 cumplidas y 1 rechazada
```

**Respuesta.** Porque `Promise.all` se rechaza apenas una de las promesas se rechaza (aquí, el stock a los 500 ms). Para mostrar el precio aunque falle el stock sirven `Promise.allSettled` (informe de todas) o `Promise.any`/`Promise.race` (la primera respuesta).

---

## 🟢 Básico 02 — De then a async/await

```js
function esperar(milisegundos) {
  return new Promise((resolve) => {
    setTimeout(resolve, milisegundos);
  });
}

function preparar(producto) {
  return esperar(500).then(() => 'Listo: ' + producto);
}

console.log('Inicio');

async function atender() {
  const primero = await preparar('Café');
  console.log(primero);
  const segundo = await preparar('Té');
  console.log(segundo);
}

atender();

console.log('Fin del código síncrono');
```

**Salida:**

```text
Inicio
Fin del código síncrono
Listo: Café
Listo: Té
```

**Respuesta.** Porque `await` pausa **la función `atender`**, no el programa: la llamada devuelve una promesa enseguida y el código siguiente (el mensaje final) se ejecuta mientras `atender` espera.

---

## 🟡 Intermedio 04 — Errores y tiempos con async/await

```js
function consultar(nombre, milisegundos, falla) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (falla) {
        reject('Falló ' + nombre);
        return;
      }
      resolve(nombre + ' ok');
    }, milisegundos);
  });
}

function redondear(ms) {
  return Math.round(ms / 100) * 100;
}

async function intentar() {
  try {
    await consultar('stock', 200, true);
    console.log('Esto no se muestra');
  } catch (motivo) {
    console.log('❌ ' + motivo);
  } finally {
    console.log('🔚 Consulta terminada');
  }
}

async function enSecuencia() {
  const inicio = Date.now();
  await consultar('precio', 200, false);
  await consultar('stock', 300, false);
  await consultar('proveedor', 400, false);
  console.log('En secuencia: ≈ ' + redondear(Date.now() - inicio) + ' ms');
}

async function enParalelo() {
  const inicio = Date.now();
  await Promise.all([
    consultar('precio', 200, false),
    consultar('stock', 300, false),
    consultar('proveedor', 400, false)
  ]);
  console.log('En paralelo: ≈ ' + redondear(Date.now() - inicio) + ' ms');
}

async function main() {
  await intentar();
  await enSecuencia();
  await enParalelo();
}

main();
```

**Salida:**

```text
❌ Falló stock
🔚 Consulta terminada
En secuencia: ≈ 900 ms
En paralelo: ≈ 400 ms
```

**Respuesta.** En la secuencia, cada `await` espera a que termine la consulta antes de lanzar la siguiente: 200 + 300 + 400 = 900 ms. En el paralelo, las tres se lanzan a la vez y `Promise.all` espera solo a la más lenta (400 ms).

---

## 🔴 Desafío 01 — De callbacks a promesas y async/await

```js
function validar(pedido, siguiente) {
  setTimeout(() => {
    if (pedido.items.length === 0) {
      siguiente('Pedido vacío');
      return;
    }
    console.log('✅ Validado');
    siguiente(null, pedido);
  }, 300);
}

function cobrar(pedido, siguiente) {
  setTimeout(() => {
    if (pedido.tarjetaValida === false) {
      siguiente('Tarjeta rechazada');
      return;
    }
    console.log('💳 Cobrado $' + pedido.total);
    siguiente(null, pedido);
  }, 500);
}

function preparar(pedido, siguiente) {
  setTimeout(() => {
    console.log('☕ Preparado');
    siguiente(null, pedido);
  }, 800);
}

const pedido = { numero: 101, cliente: 'Lucía', items: ['Café'], total: 4.5 };

function validarP(pedido) {
  return new Promise((resolve, reject) => {
    validar(pedido, (error, p) => {
      if (error !== null) {
        reject(error);
        return;
      }
      resolve(p);
    });
  });
}

function cobrarP(pedido) {
  return new Promise((resolve, reject) => {
    cobrar(pedido, (error, p) => {
      if (error !== null) {
        reject(error);
        return;
      }
      resolve(p);
    });
  });
}

function prepararP(pedido) {
  return new Promise((resolve, reject) => {
    preparar(pedido, (error, p) => {
      if (error !== null) {
        reject(error);
        return;
      }
      resolve(p);
    });
  });
}

async function procesar(pedido) {
  console.log('📥 Pedido ' + pedido.numero + ' recibido');
  try {
    await validarP(pedido);
    await cobrarP(pedido);
    await prepararP(pedido);
    console.log('🏁 Pedido ' + pedido.numero + ' listo para ' + pedido.cliente);
  } catch (motivo) {
    console.log('❌ El pedido ' + pedido.numero + ' se detuvo: ' + motivo);
  }
}

procesar(pedido);
```

**Salida:**

```text
📥 Pedido 101 recibido
✅ Validado
💳 Cobrado $4.5
☕ Preparado
🏁 Pedido 101 listo para Lucía
```

**Caso 2: tarjeta rechazada** — salida:

```text
📥 Pedido 102 recibido
✅ Validado
❌ El pedido 102 se detuvo: Tarjeta rechazada
```

**Caso 3: pedido vacío** — salida:

```text
📥 Pedido 103 recibido
❌ El pedido 103 se detuvo: Pedido vacío
```

---

## 🔴 Desafío 02 — Varios pedidos con allSettled

```js
function validar(pedido) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (pedido.items.length === 0) {
        reject('Pedido vacío');
        return;
      }
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
      resolve(pedido);
    }, 500);
  });
}

function preparar(pedido) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(pedido), 800);
  });
}

const pedidos = [
  { numero: 101, cliente: 'Lucía', items: ['Café'], total: 4.5 },
  { numero: 102, cliente: 'Marcos', items: ['Té'], total: 3.2, tarjetaValida: false },
  { numero: 103, cliente: 'Sofía', items: [], total: 0 },
  { numero: 104, cliente: 'Diego', items: ['Brownie'], total: 3.5 }
];

async function procesarPedido(pedido) {
  try {
    await validar(pedido);
    await cobrar(pedido);
    await preparar(pedido);
    return 'Pedido ' + pedido.numero + ' listo para ' + pedido.cliente;
  } catch (motivo) {
    throw new Error('Pedido ' + pedido.numero + ': ' + motivo);
  }
}

async function main() {
  const promesas = [];
  for (const pedido of pedidos) {
    promesas.push(procesarPedido(pedido));
  }

  const resultados = await Promise.allSettled(promesas);

  let entregados = 0;
  let fallidos = 0;
  for (const r of resultados) {
    if (r.status === 'fulfilled') {
      entregados = entregados + 1;
      console.log('🏁 ' + r.value);
    } else {
      fallidos = fallidos + 1;
      console.log('❌ ' + r.reason.message);
    }
  }
  console.log('Resumen: ' + entregados + ' listos, ' + fallidos + ' fallidos');
}

main();
```

**Salida:**

```text
🏁 Pedido 101 listo para Lucía
❌ Pedido 102: Tarjeta rechazada
❌ Pedido 103: Pedido vacío
🏁 Pedido 104 listo para Diego
Resumen: 2 listos, 2 fallidos
```

**Caso 2: todos bien** — salida:

```text
🏁 Pedido 201 listo para Ana
🏁 Pedido 202 listo para Luis
Resumen: 2 listos, 0 fallidos
```

**Caso 3: todos fallan** — salida:

```text
❌ Pedido 301: Pedido vacío
❌ Pedido 302: Tarjeta rechazada
Resumen: 0 listos, 2 fallidos
```
