function esperar(milisegundos) {
  return new Promise((resolve) => {
    setTimeout(resolve, milisegundos);
  });
}

function preparar(producto) {
  return esperar(500).then(() => 'Listo: ' + producto);
}

console.log('Inicio');

// Escribí acá la función atender y su llamada

console.log('Fin del código síncrono');
