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

// Escribí acá las funciones async
