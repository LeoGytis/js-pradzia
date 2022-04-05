// 1. Uzduotis

for (let i = 0; i < 5; i++) {
    console.log('Labas');
}

// 2. Uzduotis

for (let i = 0; i < 5; i++) {
    console.log('Skaicius', i);
}

// 3. Uzduotis

for (let i = 0; i <= 40; i += 10) {
    console.log('===', i);
}

// 4. Uzduotis

for (let i = 49; i < 54; i++) {
    console.log('-', i);
}

// 5. Uzduotis

function rand(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}  
for (let i = 0; i < 10; i++) {
    console.log('Random:', rand(1, 10));
}

// 6. Uzduotis

for (let i = 0; i < 20; i++) {
    if (i % 3 !== 0) {
        console.log('Nr.6 -', i);
    }
}

// 7. Uzduotis

let n = 8;
for (let i = 1; i <= 10; ++i) {
    let ats = i * n;
    console.log(i, '*', n, '=', ats);
}

// 8. Uzduotis

let n8 = 10;
for (let i = 1; i <= n8; i++) {
    let cm = 2.54 * i;
    console.log(i, 'coliai =', cm, 'cm');
}

// 9. Uzduotis

function bankas(nmetai) {
    let indelis = 100;
    let palukanos = 2;
    for (let i = 1; i <= nmetai; i++) { 
        indelis += indelis * 0.02;       // efektyvi palukanu norma
        palukanos = palukanos * 1.02;
        console.log(i, '-ieji metai', Math.round(palukanos * 1000) / 1000, 'palukanos', Math.round(indelis * 100) / 100, 'indelis');
    }
}

console.log(bankas(5));

// 10. Uzduotis

let metai = 0;
 
for (let i = 0; i <= 2022; i++) {
    metai++;
    if (metai % 4 === 0 || metai % 400 === 0) {
        console.log(metai, 'Metai yra keliamieji!');
    } 
}


