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

// Escribí acá procesarPedido y main
