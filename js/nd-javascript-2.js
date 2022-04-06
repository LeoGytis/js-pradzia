console.log('Ciklo for panaudojimas');
console.log('1 UZDUOTIS -----------');

function sumaIntervale(nuo, iki) {  
    let sum = 0;
    for (let i = nuo; i <= iki; i++) {
        sum += i;
    }
    return sum;
}

console.log('Suma Intervale =', sumaIntervale(0,4));
console.log('Suma Intervale =', sumaIntervale(0,100));
console.log('Suma Intervale =', sumaIntervale(574,815));
console.log('Suma Intervale =', sumaIntervale(-50,50));
console.log('Suma Intervale =', sumaIntervale(-70,30));

console.log('2 UZDUOTIS -----------');

const uzrasas = 'sula';
let atv = '';
for (let i = uzrasas.length - 1; i >= 0; i--) {
    console.log(i, uzrasas[i]);
    atv += uzrasas[i];
}
console.log(atv);

const text = 'sula';
let atv2 = '';

for (let i = 0; i < text.length; i++) {
    let position = text.length - 1 - i;
    console.log(position, text[position]);
    atv2 += text[position];
}
console.log(atv2);

console.log('3 UZDUOTIS -----------');

function dalinasIntervale(nuo, iki, dalmuo) {
    let skaitliukas = 0;    
    for (i = nuo; i <= iki; i ++) {
        if (i % dalmuo === 0 ) {
            skaitliukas += 1; 
        }
    }
    console.log(nuo, '-', iki, 'besidalinaciu is', dalmuo, 'yra', skaitliukas);
}

dalinasIntervale(0, 11, 3);
dalinasIntervale(0, 11, 5);
dalinasIntervale(0, 11, 7);
dalinasIntervale(8, 31, 3);
dalinasIntervale(8, 31, 5);
dalinasIntervale(8, 31, 7);
dalinasIntervale(-18, 18, 3);
dalinasIntervale(-18, 18, 5);
dalinasIntervale(-18, 18, 7);

console.log('FUNKCIJOS ------------');
console.log('1 UZDUOTIS -----------');

function tusciaFunkcija() {
    return false;    
}
console.log(tusciaFunkcija());

console.log('2 UZDUOTIS -----------');

function daugyba(a, b) {
    let sandauga = a * b;
    return sandauga;
}

console.log(daugyba(5, 6));
console.log(daugyba(100, 6));
console.log(daugyba(2, 200));

console.log('3 UZDUOTIS -----------');

function skaitmenuKiekisSkaiciuje(num) {
    
    
    if (typeof num !== 'number') {
        console.log('Pateikta netinkamo tipo reiksme');
        }
    if (typeof num === NaN) { // ?????????
        console.log('Not a Number');
    }

    if (typeof num === 'number') {
        const numAsString = '' + num;
        let size = numAsString.length;
        return console.log('Rezultatas:', size);    
    }
    
      
}

skaitmenuKiekisSkaiciuje(5);
skaitmenuKiekisSkaiciuje(781);
skaitmenuKiekisSkaiciuje(3760123456);
skaitmenuKiekisSkaiciuje(true);
skaitmenuKiekisSkaiciuje('asd');
skaitmenuKiekisSkaiciuje(NaN);

