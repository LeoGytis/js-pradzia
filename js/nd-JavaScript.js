//Kintamuju inicijavimas-------------------------

const pirmas = 5;
console.log(pirmas);
const antras = 6;
console.log(antras);
const trecias = 7;
console.log(trecias);

const gyvis = 'varle';
console.log(gyvis);
var sukojom = 'arklys';
console.log(sukojom);
var sukojom = 'suo';
console.log(sukojom);

const pazymiai = [8, 9, 10, 8, 10, 10];
console.log(pazymiai);
var pinigai = [85, 96, 107, 87, 15, 105];
console.log(pinigai);
var pinigiai = [82, 95, 25, 25, 78, 35];
console.log(pinigai);
var skola = [78, 78, 5, 25, 86, 87];
console.log(skola);
var skola = [63, 63, 36, 35, 35, 78];
console.log(skola);

const studentai = ['Petras', 'Maryte', 'Jonas', 'Ona', 'Gertruda', 'Aloyzas'];
console.log(studentai);
var mokiniai = ['Jurgis', 'Antanas', 'Aloyzas', 'Martynas', 'Kaimieciai'];
console.log(mokiniai);
var choras = ['Martynas', 'Jonukas', 'Petriukas', 'Mykolas', 'Antanelis'];
console.log(choras);


// Veiksmai su kintamaisiais -------------------------

var suma = pirmas + antras + trecias;
console.log(suma);
var gyvunai = gyvis + ' ir ' + sukojom;
console.log(gyvunai);

// 3. uzduotis
const pazymiuVerte = pazymiai[0] - pazymiai[1] + pazymiai[2] - pazymiai[3] + pazymiai[4]; 
console.log('Pazymiu verte:', pazymiuVerte);

const piniguKiekis = pinigai.length;
console.log('Ismokejimu kiekis:', pinigai.length - 1);

var index = 0;
const skolosSuma = skola[index++] + skola[index++] + skola[index++] + skola[index++] + skola[index++];
console.log('Skolos suma:', skolosSuma);

// 4. uzduotis
const choroNariai = choras[4] + ', ' + choras[3] + ', ' + choras[2] + ', ' + choras[1] + ', ' + choras[0];
console.log('Choro nariai:', choroNariai);


//Kintamuju palyginimas -------------------------

const a = 80;
const b = 20;

if (a > b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}
if (a < b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}
if (a == b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}
if (a != b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}
if (a >= b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}
if (a <= b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

// 2. Isvesti teksto tipo kintamuju ilgius
const suo = 'Vladas';
const kate = 'Stase';
console.log('2 Isvesti teksto tipo kintamuju ilgius');
console.log('--------------------------------------');
console.log(suo.length + ' ir ' + kate.length);

if (suo.length > kate.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}
if (suo.length < kate.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}
if (suo.length == kate.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}
if (suo.length != kate.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}
if (suo.length >= kate.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}
if (suo.length <= kate.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

// 4. Isvesti saraso tipo kintamuju ilgius
const santaupos = [100, 200, 50, 400, 50];
console.log('Santaupos: ', santaupos);
const pensija = [50, 100, 50, 100, 50];
console.log('Pensija: ', pensija);

if (santaupos > pensija) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}
if (santaupos < pensija) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}
if (santaupos == pensija) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}
if (santaupos != pensija) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}
if (santaupos >= pensija) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}
if (santaupos <= pensija) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}