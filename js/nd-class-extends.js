class dog {
    constructor (name, species, furColor, eyeColor, sound, food, sedi) {
        this.name = name;
        this.species = species;
        this.furColor = furColor;
        this.eyeColor = eyeColor;
        this.sound = sound;
        this.food = food;
        this.sedi = false;
    }

    sit() {
       this.sedi = true;
       if (this.sedi) {
           console.log('I am sitting');
       }
    }

    stand() {
        this.sedi = false;
        console.log('I am standing');
    }
}

const dog1 = new dog('Rex', 'dog', 'black', 'blue', 'AuAu', 'bone', );
console.log(dog1);
console.log(dog1.name, ':', dog1.sound);
console.log('Hi, Im a', dog1.species, 'and my name is', dog1.name);
console.log('My color is', dog1.furColor);
console.log('My eyes are', dog1.eyeColor);
dog1.stand();
console.log('Right now:');

dog1.sit();
dog1.stand();

console.log(dog1.furColor);