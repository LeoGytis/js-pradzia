// 1. Uzduotis
const pirmas = 18;
const antras = 9;

function sumuojaSkaicius(a, b) {
    let suma = 0;
    return a + b;
}

console.log('Skaiciu suma:', sumuojaSkaicius (pirmas, antras));

// 2. Uzduotis

function palyginaSkaicius(a, b) {
    if (a > b) {
        console.log('Pirmas skaicius didesnis uz antra');   
    } else {
        if (a < b) {
        console.log('Antras skaicius didenis uz pirma');
    } else console.log('Skaiciai yra lygus');
    }
    return 0;
}
palyginaSkaicius(pirmas, antras);

// 3. Uzduotis

const einamiejiMetai = 2024;
function priimaMetus(metai) {
    if (metai % 4 === 0 ) {
        console.log('Metai yra keliamieji!');
    } else { 
        console.log('Metai yra nekialiemiji');
    }
    return 0;
}
priimaMetus(einamiejiMetai);

// 4. Uzduotis

function skaiciausKvadratas(a) {
    return a * a;
}
const kvadratas = skaiciausKvadratas(pirmas);
console.log('Skaiciaus kvadratas:', kvadratas);

const skaiciuojaKadrata = (a) => {
    return a ** 2;
}
const kvadratoAtsakymas = skaiciuojaKadrata(antras);
console.log('Antro skaiciaus kvadratas:', kvadratoAtsakymas);

// 5. Uzduotis

function skaiciuSuma(a) {
    let suma = 0;
    if (a > 1) {
        for ( i1 = 1; i1 < a; i1++) {
            suma = suma + a;
        }
    } else {
        console.log('Skaiciaus priimti negalime');
    }
    return suma;
}
const sum1 = skaiciuSuma(pirmas);
console.log('Visu skaiciu suma:', sum1);

// 6. Uzduotis

function sveikasSkaicius(a) {
    sumaSveikuSkaiciu = 0;
    for (i2 = 2; i2 < a; i2++) {
        if (a % i2 === 0) {
            sumaSveikuSkaiciu++;
        }
    }
    return sumaSveikuSkaiciu;
}
const sveikasSk = sveikasSkaicius(pirmas);
console.log('Skaicius dalinasi is', sveikasSk, 'skaiciu');

// 7. Uzduotis

const tekstas = 'Eina Petriukas per gatve';
function priimaTeksta(t1) {
    let ilgis = 0;
    for (let i3 = 0; i3 < t1.length; i3++) {
        ilgis += 1;
    }
    console.log(t1);
    return ilgis;
}

const tekstoIlgis = priimaTeksta(tekstas);
console.log('Teksto ilgis yra:', tekstoIlgis);

// 8. Uzduotis

const telefonoNr = 8600123456;
function pakelkRageli(telNr) {
    for (let i4 = 0; i4 > telNr.length; i4++) {

    }
    return 0;
}
pakelkRageli(telefonoNr);