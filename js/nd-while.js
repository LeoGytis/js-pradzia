// 1 UZDUOTIS

let suma1 = 0;

while (suma1 <= 100) {
    suma1 += Math.floor (Math.random() * (10 - 1) + 1);
    console.log('Suma lygi', suma1);
}


// 2 UZDUOTIS

console.log('2 uzduotis --------------');
let suma2 = 0;

while (suma2 % 7 !== 0 || suma2 === 0) {
    suma2 += Math.floor (Math.random() * (10 - 1) + 1);
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

// 4 UZDUOTIS

let number = 0;

while (number !== 5) {
    number = Math.floor (Math.random() * (10 - 1) + 1);
    console.log('Skaicius', number);
}

// 5 UZDUOTIS

let nr = 0;
let i5 = 0;
while ((nr !== 5) && (nr !== 7)) {
    i5 ++; 
    nr = Math.floor (Math.random() * (10 - 1) + 1);
    console.log('Skaicius 5 arba 7', nr);
}
console.log('Ciklas prasisuko', i5, 'kartu');