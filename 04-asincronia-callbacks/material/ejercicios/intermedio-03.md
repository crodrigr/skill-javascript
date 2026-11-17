# 🟡 Intermedio 03 — Temporizadores

> 🟡 **Nivel:** Intermedio · 🎓 **Resultados de aprendizaje:** RA-6 · 🗓️ **Sesión 2**

## 🧱 Estado inicial

Abrí [`intermedio-03.html`](../recursos/practica/intermedio-03.html) y su archivo [`js/intermedio-03.js`](../recursos/practica/js/intermedio-03.js), de la carpeta `practica`. El archivo trae un mensaje inicial y la lista de pasos como comentarios:

```js
console.log('Pedido en marcha');

// Escribí acá los temporizadores
```

## 🛠️ Proceso esperado

1. Con `setTimeout`, programá a los **500 ms** el mensaje `Aviso 1: tu pedido está en preparación`.
2. Programá a los **700 ms** el mensaje `Aviso 2: este no debería salir` y **cancelalo** antes de que venza.
3. Con `setInterval`, cada **200 ms**, mostrá `Faltan N` con una cuenta regresiva desde `3`; cuando llegue a cero, **detené** el intervalo y mostrá `¡Listo!`.
4. Al final del archivo, mostrá `Todo programado`.

**Respondé:** ¿En qué orden salen los mensajes y por qué `Todo programado` aparece antes que los avisos, aunque esté escrito al final?

## ✅ Resultado esperado

La consola muestra (en este orden):

```text
Pedido en marcha
Todo programado
Faltan 3
Faltan 2
Aviso 1: tu pedido está en preparación
Faltan 1
¡Listo!
```

## 🚧 Restricciones

- 🚫 No uses `setTimeout` para repetir la cuenta: usá `setInterval`.
- 🚫 El intervalo tiene que detenerse solo.

## 🎓 Resultados de aprendizaje

- RA-6
