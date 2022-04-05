// 1. Uzduotis
const pirmas = 18;
const antras = 9;

function sumuojaSkaicius(a, b) {
    return a + b;
}

console.log('Skaiciu suma:', sumuojaSkaicius (pirmas, antras));

// 2. Uzduotis

function palyginaSkaicius(a, b) {
    if (a > b) {
        console.log('Pirmas skaicius didesnis uz antra');   
    } else if (a < b) {
        console.log('Antras skaicius didenis uz pirma');
        
    } else console.log('Skaiciai yra lygus');
}

palyginaSkaicius(pirmas, antras);

// 3. Uzduotis

function priimaMetus(metai) {
    if (metai % 4 === 0 && metai % 100 !== 0 || metai % 400 === 0) {
        console.log('Metai yra keliamieji!');
    } else { 
        console.log('Metai yra nekialiemiji');
    }   
}

priimaMetus(2024);

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
        for ( let i = 1; i <= a; i++) {
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
    for (let i = 2; i < a; i++) {
        if (a % i === 0) {
            sumaSveikuSkaiciu++;
        }
    }
    return sumaSveikuSkaiciu;
}
const sveikasSk = sveikasSkaicius(pirmas);
console.log('Skaicius dalinasi is', sveikasSk, 'skaiciu');

// 7. Uzduotis

function priimaTeksta(t1) {
    console.log(t1, 'Simboliu:=', t1.length);
}

const tekstas = 'Eina Petriukas per gatve';
const tekstoIlgis = priimaTeksta(tekstas);

// 8. Uzduotis

function telefonoNumeris(telNr) {
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
}

lyginaTekstus(tekstas1, tekstas2);

// 10. Uzduotis

const tekstas3 = 'Sveikas gyvas pasauli, as noriu pamatyti tave';
function kiekTeksteA(t1) {
    let kiekA = 0;
    for (let i = 0; i < t1.length; i++) {
        if (t1[i] === 'a') {
            kiekA++;
        }
    }
    return kiekA;
}

console.log('Tekste yra a raidziu:', kiekTeksteA(tekstas3));