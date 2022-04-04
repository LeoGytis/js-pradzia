// 1. Uzduotis
const duSkaiciai = [12, 2];

function sumuojaSkaicius(skaiciuSarasas) {
    let skaiciuSuma = 0;
    skaiciuSuma = skaiciuSarasas [0] + skaiciuSarasas[1];
    return skaiciuSuma;
}

const suma = sumuojaSkaicius(duSkaiciai);
console.log('Skaiciu suma:', suma);

// 2. Uzduotis

function palyginaSkaicius(skaiciuSarasas) {
    if (skaiciuSarasas[0] > skaiciuSarasas[1]) {
        console.log('Pirmas skaicius didesnis uz antra');   
    } else {
        if (skaiciuSarasas[0] < skaiciuSarasas[1]) {
        console.log('Antras skaicius didenis uz pirma');
    } else console.log('Skaiciai yra lygus');
    }
}

let palyginimas = palyginaSkaicius(duSkaiciai);