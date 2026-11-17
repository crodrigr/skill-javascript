# 🟢 Básico 02 — Contá las vueltas

> 🟢 **Nivel:** Básico · 🎓 **Resultados de aprendizaje:** RA-3 · 🗓️ **Sesión 1**

## 🧱 Estado inicial

Abrí [`basico-02.html`](../recursos/practica/basico-02.html) y su archivo [`js/basico-02.js`](../recursos/practica/js/basico-02.js), de la carpeta `practica`. La **Parte A** se resuelve **sin ejecutar** nada: es de predecir. Las Partes B y C se escriben en el archivo.

## 🛠️ Proceso esperado

**Parte A — Predecí.** ¿Cuántas veces se ejecuta el cuerpo de cada bucle? Anotá un número, o escribí «infinito» si nunca termina:

```js
// a)
for (let i = 0; i < 4; i++) { /* cuerpo */ }

// b)
for (let i = 5; i > 0; i -= 2) { /* cuerpo */ }

// c)
let m = 10;
while (m > 6) { m -= 3; /* cuerpo */ }

// d)
let k = 0;
do { k++; /* cuerpo */ } while (k > 5);

// e)
let x = 1;
while (x < 5) { console.log(x); }
```

**Parte B — La tabla del 7.** Con un `for`, mostrá la tabla del 7 de 1 a 5.

**Parte C — Una suma.** Con un `while`, calculá la suma de los números del 1 al 10 y mostrala.

## ✅ Resultado esperado

**Parte A:** una respuesta única por bucle (la clave está en las soluciones).

**Partes B y C**, en la consola:

```text
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
Suma del 1 al 10: 55
```

## 🚧 Restricciones

- 🚫 **No ejecutes** los bucles de la Parte A: uno de ellos es infinito y deja la pestaña colgada.
- 🚫 No uses `break` ni `continue`.
- 🚫 En la Parte B, la variable de control se declara en la cabecera del `for`.

## 🎓 Resultados de aprendizaje

- RA-3: Predecir el número de vueltas de un bucle, reconocer un bucle infinito y escribir bucles `for` y `while`.
