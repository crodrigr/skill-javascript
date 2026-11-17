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

// Escribí acá los cuatro combinadores
