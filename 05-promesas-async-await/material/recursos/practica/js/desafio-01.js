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

// Escribí acá las versiones con promesas y la función async
