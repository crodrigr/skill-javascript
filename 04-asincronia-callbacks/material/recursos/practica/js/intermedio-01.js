function pedirBloqueando(producto) {
  console.log('Pedido de ' + producto);
  for (let i = 0; i < 100000000; i++) { }
  console.log('Listo: ' + producto);
}

pedirBloqueando('Café');
pedirBloqueando('Té');
console.log('---');

// Escribí acá la versión sin bloquear
