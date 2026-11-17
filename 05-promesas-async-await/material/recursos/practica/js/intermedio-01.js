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

// Escribí acá los pasos del ejercicio
