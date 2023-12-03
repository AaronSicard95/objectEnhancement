const createInstructor=(firstName, lastName)=>({firstName, lastName});

var favoriteNumber = 42;
var instructor={firstName:"Colt", favoriteNumber, [favoriteNumber]:"That is my favorite!"};

instructor = {
    firstName: "Colt",
    sayHi(){
        return "Hi!";
    },
    sayBye(){
        return this.firstName + " says bye!";
    }
}

const createAnimal=(species, verb, noise)=>({species, noise, [verb](){
    return this.noise;
}})