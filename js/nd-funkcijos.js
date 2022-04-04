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

function priimaMetus(metai) {
    if (metai % 4 === 0 ) {
        console.log('Metai yra keliamieji!');
    } else { 
        console.log('Metai yra nekialiemiji');
    }
    return 0;
}

const einamiejiMetai = 2024;
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

function telefonoNumeris(telNr) {
   // console.log('(', telNr[0], telNr[2], telNr[3], ')' );

        return `(${telNr[0]}${telNr[1]}${telNr[2]}) ${telNr[3]}${telNr[4]}${telNr[5]}-${telNr[6]}${telNr[7]}${telNr[8]}${telNr[9]}`;
    }

const telefonoNr = telefonoNumeris('8600123456');
console.log(telefonoNr); 

// 9. Uzduotis

const tekstas1 = 'Cia labai geras tekstukas';
const tekstas2 = 'Cia labai geras tekstukas, nu ir kas';
function lyginaTekstus(t1, t2) {
    if (t1.length > t2.length) {
        console.log('Pirmas tekstas yra ilgesnis');
    } else if (t1.length < t2.length) {
        console.log('Antras tekstas yra ilgesnis');
    } else {
        console.log('Tekstai yra vienodo ilgio');
    }
    return 0;
}

lyginaTekstus(tekstas1, tekstas2);

// 10. Uzduotis

const tekstas3 = 'Sveikas gyvas pasauli, as noriu pamatyti tave';
function kiekTeksteA(t1) {
    let kiekA = 0;
    for (let i10 = 0; i10 < t1.length; i10++) {
        if (t1[i10] === 'a') {
            kiekA++;
        }
    }
    return kiekA;
}

console.log('Tekste yra a raidziu:', kiekTeksteA(tekstas3));