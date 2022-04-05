// 1 uzduotis
let nSkaicius = 2;
if (nSkaicius > 0) {
    console.log('Skaicius geras.');
} else if (nSkaicius === 0) {
    console.log('Jus pisirinkote skaiciu: 0');
} else {
    console.log('Skaicius blogas.');
}


// 2. Uzduotis

let nkodas = 1;
if (nkodas === 1) {
    console.log('Zalia sviesa - Eikite.');
} else if (nkodas === 2 ) {
    console.log("Geltona sviesa - Palaukite");    
} else {
   console.log('Raudona sviesa - Sustokite');
}



// 3. Uzduotis 

 var d = 2;
 var k = 8;
 var n = 5;
 if (d * n >= k) {
     console.log('Knygos telpa i dezes');
 }
 var d = 3;
 var k = 18;
 var n = 5;
 if (d * n >= k) {
     console.log('Knygos telpa i dezes');
 } else {
     console.log('Knygos netelpa i dezes');
 }

// 4. Uzduotis

let a = 13;
let b = 24;
if (a < b) {
    a +=1;
    b -=1
    console.log(a,'ir',b);
} else if (a > b) {
    a -= 1;
    b += 1;
    console.log(a,'ir',b); 
    } else {
        console.log(a,'ir', b, 'yra lygus skaiciai');
}


// 5. Uzduotis

let c = 50;
let p = 20;
let m = 0; //centu likutis
console.log('Saulius nusipirks', Math.floor(c / p), 'porcijas');
m = c % p;
console.log('Liks centu:', m);
console.log('--------------');

// 6. Uzduotis

let n6 = 6;

if (n6 % 3 === 0 ) {
    console.log('Trikampi sudelioti galima');
} else {
    console.log('Trikampio sudelioti negalima');
}

// 7. Uzduotis

let menesis = 11;
const metai = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
console.log('Menesis turi: ', metai[--menesis], 'dienu/-as');


// 8. Uzduotis

let kauliukas = 4;
if ( kauliukas % 2  === 0) {
    console.log('Kambari tvarko vyresnelis');
} else {
    console.log('Kambari tvarko jaunelis');
}

// 9. Uzduotis

const pirmosOlimpines = 1896;
let metaiOlimpiniai = 2008;
let eilesNumeris = 2;



if ( metaiOlimpiniai % 4 === 0) {
    eilesNumeris =  (metaiOlimpiniai - pirmosOlimpines) / 4 + 1;
    console.log(metaiOlimpiniai, '-ieji yra', eilesNumeris, 'olimpines zaidynes');
} else {
    console.log('Metai neolimpiniai');
}

// 10. Uzduotis

let v1 = 8; let m1 = 29; // iseina is namu
const m2 = 23;         // trunka kelione   
const pamokosValanda = 9; const pamokosMinute = 5;    // prasideda pamokos

/* m1 + m2 >= 60;
    v1++;
    m1 = m2 + m1 - 60; 

 if (v1 >= pamokosValanda) {
     if (m1 >= pamokosMinute) {
         console.log('Petras i pamoka paveluos');
     } else {
         console.log('Petras i pamoka neveluos');
     }
 }
*/

 let v1minutemis = 0; //valanda minutemis
 let pamokosValandaMinutemis = 0; // pamokos valanda minutemis
 let laikoLikutis = 0;
 
 v1minutemis = v1 * 60;
 pamokosValandaMinutemis = pamokosValanda * 60;

 laikoLikutis = pamokosValandaMinutemis + pamokosMinute - v1 * 60 - m1 - m2;

 if (laikoLikutis >= 0) {
     console.log('Petras i pamoka neveluos');
 } else {
     console.log('Petras i pamoka veluos');
 }
