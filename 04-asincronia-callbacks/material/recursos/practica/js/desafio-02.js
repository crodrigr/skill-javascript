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

function entregar(pedido, siguiente) {
  setTimeout(() => {
    console.log('🛵 Entregado');
    siguiente(null, pedido);
  }, 200);
}

const pedido = { numero: 103, cliente: 'Sofía', items: ['Brownie', 'Té'], total: 6.7 };

// Escribí acá las funciones con nombre y el primer paso
