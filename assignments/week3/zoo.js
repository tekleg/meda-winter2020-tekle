class Animal {
    constructor(alive) {
        this.living = alive;
    }

    died() {
        this.living = false;
    }
}

class Mammal extends Animal {
    constructor(alive, eyeColor) {
        super(alive);
        this.tail = 1;
        this.type = "mammal";
        this.eyes = 2;
        this.eyeColor = eyeColor;
    }

    eat() {
        if ("name" in this) {
            console.log(this.name + " eats some food.");
        } else {
            console.log("Animal eats some food");
        }
    }

    breed(partner, childName) {
        if (partner.constructor.name == this.constructor.name) {
            console.log("successful breeding");
            
            let eyeInheritance = Math.random() * 2;
            eyeInheritance = Math.floor(eyeInheritance);

            let childEyeColor;

            if (eyeInheritance == 0) {
                childEyeColor = this.eyeColor;
            } else {
                childEyeColor = partner.eyeColor;
            }

            let child = new this.constructor(childName, true, childEyeColor);
            return child;
        }
    }
}

class Dog extends Mammal {
    constructor(dogName, alive, eyeColor) {
        // This function runs the constructor of the class we are inheriting, it is important to run it first before any other lines of our Dog constructor class.
        super(alive, eyeColor);
        this.legs = 4;
        this.name = dogName;

    }

    bark() {
        console.log("woof woof!");
    }
}

class Cat extends Mammal {
    constructor(catName, alive, eyeColor) {
        super(alive, eyeColor);
        this.legs = 4;
        this.name = catName;
    }

    meow() {
        console.log("meow!");
    }
}

let dog1 = new Dog("Fido", true, "brown");
let dog2 = new Dog("Fluffy", true, "green");
let dog3 = new Dog("Pluto", true, "amber");

let newDog = dog2.breed(dog1, "Spot");
let newDog2 = dog3.breed(dog2, "Fluffy Jr.");

console.log(newDog);
console.log(newDog2);

let cat1 = new Cat("Coco", true, "aqua");
let cat2 = new Cat("Lucy", true, "amber");

let newCat1 = cat1.breed(cat2, "Scratchy");

console.log(newCat1);




// console.log(isNaN());

// Math.random();
// Math.round();
// let myFirstNumber = new Number("10");
// let number1 = 19;

// console.log(myFirstNumber, number1);





// let animal1 = new Dog("Fido", true);
// let animal2 = new Cat("Garfield", true);

// animal1.bark();
// animal1.eat();
// console.log(animal1.living);
// animal2.eat();
// animal2.meow();
// console.log(animal2.living);

// animal1.died();
// console.log(animal1.living);