// *************************************************************************************
//                                  Structural Typing
// *************************************************************************************

// /Users/davidbetteridge/Personal/types_talk/slides/typescript
// tsc 1_structural_typing.ts 
// node 1_structural_typing.ts 

type Person = {
    name: string
    age: number
}

class Human {
    name: string;
    age: number;
    shoesize: number;
}

class Adult {
    name: string;
    age: number;
    job: string;
}

const printPerson = (person: Person) => {
    console.log(person.name);
}

const human = new Human();
human.name = "John";

const adult = new Adult();
adult.name = "Jane";

printPerson(human);
printPerson(adult);

// Comment out Human.name (Not Duck Typing - Comment out! (DT checks at runtime))


// Show javascript, no type information

