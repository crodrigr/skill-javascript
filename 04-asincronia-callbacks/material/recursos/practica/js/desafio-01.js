const stock = { 'Café': 12, 'Té': 0, 'Brownie': 6, 'Galleta': 40 };

function informar(error, resultado) {
  if (error !== null) {
    console.log('❌ ' + error);
    return;
  }
  console.log('✅ ' + resultado);
}

// Escribí acá la función reservar

reservar('Café', 2, informar);
reservar('Té', 1, informar);
reservar('Pizza', 1, informar);
reservar('Brownie', 10, informar);
console.log('Reservas enviadas');
