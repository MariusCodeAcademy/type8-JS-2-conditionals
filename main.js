console.log('Hello if');

const num1 = 26;
const num2 = 4;
const liekana = num1 % num2;

console.log('liekana ===', liekana);

// pakelti 5 treciuoju laipsniu
const pakelta = 5 ** 3;

console.log('pakelta ===', pakelta);

// padidinti arba pamazinti vienetu
let skaicius = 100;
skaicius++;
console.log('skaicius++ ===', skaicius);
skaicius--;
skaicius--;
console.log('skaicius-- ===', skaicius);

let sk2 = 110;
// skaiciaus veiksma ir prilyginima tam paciam kintamajam
sk2 = sk2 + 10;
sk2 += 10;
sk2 -= 5;
sk2 /= 10;
console.log('sk2 ===', sk2); // 110 | 120 ?
