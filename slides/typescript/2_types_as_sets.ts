// *************************************************************************************
//                                  Sets
// *************************************************************************************

// /Users/davidbetteridge/Personal/types_talk/slides/typescript
// tsc 2_types_as_sets.ts 
// node 2_types_as_sets.js 

type darkColours = "black" | "darkblue" | "darkgreen" | "darkred";
type lightColours = "white" | "lightblue" | "lightgreen" | "lightred";

type colours = darkColours | lightColours;

const printColour = (colour: colours) => {
    console.log(colour);
}

printColour("black");
printColour("white");
printColour("purple");



const printType = (value: number | string ) => {
    if (typeof value === "number") {
        console.log("number");
    } else if (typeof value === "string") {
        console.log("string");
    } else {
        throw new Error(`Expected string or number, got '${typeof value}'.`);
    }
}


printType(1);
printType("hello");
printType(true);