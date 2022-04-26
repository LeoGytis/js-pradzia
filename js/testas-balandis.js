//1 UZDUOTIS
let a = 9;
let b = 9;

if (a > b) {
    console.log(a,'daugiau uz', b);
} else if (a < b)
    console.log(b,'dauygiau uz',a);
    else {
        console.log('skaicai lygus');
    }

//2 UZDUOTIS

for (let i = 1; i <= 10; ++i) {
    console.log(i);
}

//3 UZDUOTIS
for (let i2 = 0; i2 <= 10; i2 += 2) {
    console.log('nr2', i2);
}

// 4 UZDUOTIS
function random (nuo, iki) {
    return Math.floor(Math.random()*(iki-nuo+1)+nuo);
}
for (let i = 0; i < 5; i++) {
    console.log('Uzd.4', random(1, 10));
}

// 5 UZDUOTIS
let randomNumeris;
while (randomNumeris !== 5) {
    randomNumeris = random (1, 10);
    console.log('Uzd.5:', randomNumeris);
} 

// 6 UZDUOTIS

const skaiciuMasyvas = [];
let max = 9;

for (let i6 = 0; i6 < random(20,30); i6++) {
    skaiciuMasyvas.push(random(10, 30));
}
console.log('Uzd.6', skaiciuMasyvas);

for (let i66 = 0; i66 <= skaiciuMasyvas.length; i66++) {
    if (skaiciuMasyvas[i66] > max) {
        max = skaiciuMasyvas[i66];
    }
}
console.log('Uzd.6, Max =', max);

//7 UZDUOTIS
let raidziuMasyvas = [];
let abecele = ['A', 'B', 'C', 'D'];
let kiekA = 0;
let kiekB = 0;
let kiekC = 0;
let kiekD = 0;

for (let i7 = 0; i7 < 10; i7++){
    raidziuMasyvas.push(abecele[random(0,3)]);
}
for (let i77 = 0; i77 <= raidziuMasyvas.length; i77++) {
    if ( abecele[0] === raidziuMasyvas[i77]) {
        kiekA++;
        console.log(kiekA);
    }
    if (abecele[1] === raidziuMasyvas[i77]) {
        kiekB++;
        console.log(kiekB);
    }
    if (abecele[2] === raidziuMasyvas[i77]) {
       kiekC++;
       console.log(kiekC);
    }
    if (abecele[3] === raidziuMasyvas[i77]) {
       kiekD++;
       console.log(kiekD);
    }
}

console.log('Uzd.7 Raidziu masyvas:', raidziuMasyvas);
console.log('Raidziu A',kiekA);
console.log('Raidziu B',kiekB);
console.log('Raidziu C',kiekC);
console.log('Raidziu D',kiekD);


// 8 UZDUOTIS
function lygineSuma(a, b) {
    let masyvuSuma = 0;
    if (typeof a === 'number' && typeof b === 'number') {
     let skaiciuSuma = a + b;
     if (skaiciuSuma % 2 === 0) {
        console.log('Skaiciu suma', skaiciuSuma);        
    } else { console.log('Skaiciu suma nelygine');
       }
    }
       
    else if (Array.isArray(a) && Array.isArray(b)) {
        masyvuSuma = a.length + b.length;
        if (masyvuSuma % 2 === 0) {
            console.log('Masyvu ilgiu suma:', masyvuSuma);
        } 
        else {
            console.log('Masyvu suma nelygine');
        }
    } else {
        console.log('Skaiciai nera masyvai');
    }    
}    


lygineSuma(4, 4)
lygineSuma(5, 10)
lygineSuma(5, 13)
console.log('--------');
lygineSuma(5, [10, 2, 1])
lygineSuma([5, 5, 6, 5], [10, 2, 1, 5])
lygineSuma([5, 5, 6, 5], [10, 2, 1])


// 9 UZDUOTIS


// 10 UZDUOTIS commitui

function telefonoNumeris(telNr) {
    if (!Array.isArray(telNr)) {
        return 'Kintamasis nėra masyvas';
    }
    if (telNr.length !== 10) {
        return 'Masyvas yra netinkamo ilgio';
    }
    for (let i10 = 0; i10 < telNr.length; i10++){
        if (typeof telNr[i10] !== 'number') {
            return 'Masyvo reiksmes turi buti skaiciai';
        }
    }
    return `(${telNr[0]}${telNr[1]}${telNr[2]}) ${telNr[3]}${telNr[4]}${telNr[5]}-${telNr[6]}${telNr[7]}${telNr[8]}${telNr[9]}`;
}

console.log(telefonoNumeris([8, 6, 0, 5, 1, 2, 3,]));
console.log(telefonoNumeris([8, 6, 0, 5, 1, 2, 3, 8, 9, 5]));
console.log(telefonoNumeris([8, 6, 0, 5, 1, 2, 3, 'c', 9, 5]));