console.log('1');
setTimeout(() => console.log('2'), 100);
setTimeout(() => {
  console.log('3');
  setTimeout(() => console.log('4'), 0);
}, 0);
setTimeout(() => console.log('5'), 100);

function seis() {
  console.log('6');
}

seis();
console.log('7');
