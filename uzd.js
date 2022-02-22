const x1 = 50;
const x2 = 'Sveiki';
const x3 = 75;
const x4 = false;

//
if (typeof x1 === 'number') {
  console.log('x1 yra skaicius ===', x1);
} else {
  console.log('x1 nera skaicius ===', x1);
}

//1.  ar x1 yra daugiau uz 40
if (x1 > 40) {
  console.log(`x1: ${x1} yra daugiau uz 40`);
} else {
  console.log(`x1: ${x1} nera daugiau uz 40`);
}

//2. ar x3 yra maziau uz x1

//3.  ar x2 yra strting tipo?

//4. ar x4 yra Number tipo

//5. ar x1 yra daugiau uz 20 IR maziau uz 100
// neveikia
// if (20 > x1 > 100) {
if (x1 > 20 && x1 < 100) {
  console.log('x1 yra daugiau uz 20 ir maziau uz 100');
}

//6. ar x1 ARBA x2 yra String tipo
if (typeof x1 === 'string' || typeof x2 === 'string') {
  console.log('x1 ARBA x2 yra String tipo');
}

let age = -110;
// gaunam teigiama is neigiamo (absoliutus skaicius)
console.log('age iki abs ===', age);
age = Math.abs(age);
console.log('age po abs ===', age);

if (age <= 17) {
  console.log('vaikas');
} else if (age <= 60) {
  console.log('suauges');
} else if (age <= 100) {
  console.log('saulelydis');
} else {
  console.log('nezinau ar tiesa kad naudojiesi kompiuteriu...');
}

/* 7 amziaus grupes paduodam i age 10, 25, 70, 110 reiksmes ir isitikinam kad veikia

0-17 - vaikas
18-60 - suauges
61-100 - saulelydis
daugiau nei 100 - nezinau ar tiesa kad naudojiesi kompiuteriu...

// extra: paduota neigiama reiksme paverciama teigiama
*/
