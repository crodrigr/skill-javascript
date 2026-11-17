# 📘 Ejemplo 03 — Solo vale la primera vez

> 🎓 **Resultados de aprendizaje:** RA-1, RA-2
>
> 💻 **Cómo se obtuvo.** Se abrió cada página en Chrome (modo página de la herramienta de verificación) y se anotó lo que imprimió la consola, **en el orden en que salió**, con el archivo y la línea de cada error. El orden se contrastó con Node cuando la página no usa el navegador ni tiene errores a propósito (sin diferencias). Los ejemplos **no imprimen objetos `Promise`**: la consola real muestra su estado, pero aquí se observa con `.then()`, `.catch()` y `.finally()`. Los **tiempos son aproximados**: lo que importa es el orden. Los mensajes de error aparecen en **inglés**, tal como los entrega el navegador.

## 🧱 Situación inicial

Sofía llamó a `resolve` dos veces y a `reject` después, por descuido. ¿Qué valor tiene la promesa? Una promesa se **asienta una sola vez**: solo cuenta la primera llamada.

## 💻 Código

El archivo [`03-resolve-y-reject-una-vez.html`](../recursos/ejemplos/03-resolve-y-reject-una-vez.html) tiene este código dentro de `<script>`:

```js
const promesa = new Promise((resolve, reject) => {
  resolve('primero');
  resolve('segundo');
  reject('error');
  console.log('El ejecutor terminó');
});

promesa.then((valor) => console.log('Valor: ' + valor));
promesa.catch((motivo) => console.log('Motivo: ' + motivo));
```

## 🔍 Análisis paso a paso

1. **La primera llamada gana:** `resolve('primero')` cumple la promesa con `'primero'`.
2. **Las demás se ignoran,** sin error: ni `resolve('segundo')` ni `reject('error')` cambian nada.
3. **El ejecutor sigue ejecutándose** hasta el final (el mensaje «El ejecutor terminó» sale), aunque la promesa ya esté asentada.
4. **`.catch()` no se ejecuta,** porque la promesa no fue rechazada.
5. **Moraleja:** después de llamar a `resolve` o `reject`, conviene terminar con `return`, como hacemos en el resto de los ejemplos.

## ✅ Resultado esperado

Al abrir `03-resolve-y-reject-una-vez.html`, la consola muestra:

```text
El ejecutor terminó
Valor: primero
```

- Una promesa se asienta una sola vez; las llamadas siguientes se ignoran.
- Conviene hacer `return` después de `resolve` o `reject`.
