let age = prompt('iveskite skaiciu');
console.log('age ===', age);
// !! pavertimas reikmes i boolean
console.log('!!age ===', !!age);

if (age || age === 0) {
  console.log('age buvo ivestas');
  // tikrinam tik jei zinom kad ivesta reiskme
  if (age > 50) {
    console.log('age ivestas ir daugiau uz 50');
  }
}

const sk = 50;

if (sk) {
  // vygdom nes sk yra truthy
}
