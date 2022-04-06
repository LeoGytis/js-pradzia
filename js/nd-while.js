
// WHILE

const pazymiai = [10, 2, 8, 4, 6];
console.log('-----------');
let suma = 0;
let i = 0;
while (i < pazymiai.length) {
    const pazymys = pazymiai[i];
    suma += pazymys;
    console.log(`${i} pazymys ${pazymys} [${suma}]`);
    i++;
}

// 1 UZDUOTIS

let suma1 = 0;

while (suma1 < 100) {
    suma1 += Math.floor (Math.random() * (10 - 1) + 1);
    console.log('Suma lygi', suma1);
}

// Return Math.floor(Math.random()*(max-min+1)+min); //toki radau for ciklas .pdf
// return Math.random() * (max - min) + min;

// 2 UZDUOTIS

let suma2 = 0;
let dalinas = 1; // kodel sito reikia pradziai, o negalima cikle isirasyt?

while (dalinas !== 0) {
    suma2 += Math.floor (Math.random() * (10 - 1) + 1);
    dalinas = suma2 % 7;
    console.log('Skaiciu suma', suma2);
    if (suma2 % 7 === 0) {
        console.log('Suma dalinas is', suma2);
    }   
}

// 3 UZDUOTIS

const m = 17; //skyriu skaicius
let d = 0; //dienu skaicius
let s = 0; //vidutiniskai perskaityti skyriai per diena
let skyriusk = 0;

while (skyriusk < m) {
    d++;
    skyriusk = skyriusk + d;
    console.log('skyriu skaicius', skyriusk, 'dienos', d);
    s = m / d;
}
console.log('Perskaitys knyga per dienas:', d);
console.log('Vid/diena perskaite skyriaus:', Math.round(s * 100) / 100);

// for (let pskyriai = 0; pskyriai <= 8; pskyriai++) {
//  //   pskyriai += 1;
//     diena += 1;
//     console.log('Tadas perskaito skyriu per diena', pskyriai);
//     console.log('diena kuri skaito', diena);
// }