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
for (let i2 = 0; i2 <= 10; i2) {
    console.log(i2);
    i2 += 2;
}

// 4 UZDUOTIS

for (let i = 0; i < 10; i++) {
    console.log('Random:', Math.floor(Math.random()*(10-1+1)+1));
}

// 5 UZDUOTIS
let random = 0;
while (random !== 5) {
    random = Math.floor(Math.random()*(10-1+1)+1);
    console.log('Random:',random);
} 

//7 UZDUOTIS
let raidziuMasyvas = '';
let abecele = 'ABCD';
let kiekA = 0;

for (let i = 0; i < 10; i++){
    raidziuMasyvas +=  abecele.charAt(Math.floor(Math.random() * abecele.length));
    if (raidziuMasyvas.includes('A')) {
        kiekA++;
    }
}
console.log(raidziuMasyvas);
console.log('Raidziu A',kiekA);

// 8 UZDUOTIS
function lygineSuma(a, b) {
    let skaiciuSuma = 0;
    let masyvuSuma = 0;
    if (typeof a !== typeof b) {
        
        console.log('Skaiciai nesutampa');
    } else if (typeof a === 'number' && typeof b == 'number') {
        const skaiciuSuma = a + b;
        if (skaiciuSuma % 2 !== 0) {
            console.log('Skaiciu suma nelygine');
        } else console.log('Skaiciu suma', skaiciuSuma);
   
        } else if (typeof a[a.length] === 'undefined' 
                    && b[b.length === 'undefined']) {}
                else {
            let masyvuSuma = a.length + b.length;
            if (masyvuSuma % 2 !== 0) {
                console.log('Masyvu suma nelygine');
            } else 
        console.log('Masyvu ilgiu suma:', masyvuSuma);
                
        }
        
}

lygineSuma(5, 10)
lygineSuma(5, [10, 2, 1])
lygineSuma([5, 5, 6, 5], [10, 2, 1, 5])

// 10 UZDUOTIS commitui

function telefonoNumeris(telNr) {
    let numeris = 0;
    for (let i = 0; i < telNr.length; i++){
        numeris[i] = telNr[i];
    }
    return `(${numeris[0]}${numeris[1]}${numeris[2]})
     ${numeris[3]}${numeris[4]}${numeris[5]}-
     ${numeris[6]}${numeris[7]}${numeris[8]}${numeris[9]}`;
}

console.log(telefonoNumeris(860512345));