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