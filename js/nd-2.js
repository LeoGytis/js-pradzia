// 1 uzduotis
let nSkaicius = 20;
if (nSkaicius > 0) {
    console.log('Skaicius geras.');
} else {
    console.log('Skaicius neigiamas.');
}

// 2. Uzduotis

let nkodas = 2;
if (nkodas == 1) {
    console.log('Zalia sviesa - Eikite.');
} else {
    console.log('Palaukite');
}


// 3. Uzduotis 

 var d = 2;
 var k = 8;
 var n = 5;
 if (d * n > k) {
     console.log('Knygos telpa i dezes');
 }
 var d = 3;
 var k = 18;
 var n = 5;
 if (d * n > k) {
     console.log('Knygos telpa i dezes');
 } else {
     console.log('Knygos netelpa i dezes');
 }

// 4. Uzduotis

let a = 4;
let b = 16;
if (a < b) {
    a +=1;
    b -=1
} else {
    a -= 1;
    b += 1;
}
console.log(a,'ir',b);

// 5. Uzduotis

let c = 50;
let p = 20;
let m = 0; //centu likutis
console.log('Saulius nusipirks', Math.floor(c / p), 'porcijas');
m = 50 - Math.floor(c / p) * p;
console.log('Liks centu:', m);

// 6. Uzduotis

let n6 = 6;
let n4 = 4;
if (Math.floor(n6 % 3) == 0 ) {
    console.log('Trikampi sudelioti galima');
}
if (Math.floor(n4 % 3) == 0 ) {
    console.log('Trikampi sudelioti galima');
} else {
    console.log('Trikampio sudelioti negalima');
}

// 7. Uzduotis

let menesis = 11;
const metai = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
console.log('Mensis turi: ', metai[--menesis], 'dienu/-as');


// 8. Uzduotis

let kauliukas = 6;
if (Math.floor(kauliukas % 2) == 0) {
    console.log('Kambari tvarko vyresnelis');
} else {
    console.log('Kambari tvarko jaunelis');
}

// 9. Uzduotis

const pirmosOlimpines = 1896;
let metaiOlimpiniai = 1925;
let eilesNumeris = 2;
eilesNumeris =  (metaiOlimpiniai - pirmosOlimpines) / 4;
console.log('Eiles numeris ', eilesNumeris);

if ((eilesNumeris % 1) === 0) {
    console.log('Eiles numeris', eilesNumeris);
} else {
    console.log('Metai neolimpiniai');
}

// 10. Uzduotis

let v1 = 8; let m1 = 29; // iseina is namu
const m2 = 23;         // trunka kelione   
const pamokosValanda = 9; const pamokosMinute = 5;    // prasideda pamokos

m1 + m2 >= 60;
    v1++;
    m1 = m2 + m1 - 60; 
    console.log(v1, 'valandos ir ', m1, 'minuciu');

 if (v1 >= pamokosValanda) {
     if (m1 >= pamokosMinute) {
         console.log('Petras i pamoka paveluos');
     } else {
         console.log('Petras i pamoka neveluos');
     }
 }