// 1 UZDUOTIS

let suma1 = 0;

while (suma1 <= 100) {
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

const m = 17;       //skyriu skaicius
let d = 0;          //dienu skaicius
let s = 0;          //vidutiniskai perskaityti skyriai per diena
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

// 4 UZDUOTIS

let number = 0;

while (number !== 5) {
    number = Math.floor (Math.random() * (10 - 1) + 1);
    console.log('Skaicius', number);
}

// 5 UZDUOTIS

let nr = 0;
while ((nr !== 5) && (nr !== 7)) {
    nr = Math.floor (Math.random() * (10 - 1) + 1);
    console.log('Skaicius 5 arba 7', nr);
}
