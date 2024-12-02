// *************************************************************************************
//                                  Fancy Stuff!
// *************************************************************************************

// /Users/davidbetteridge/Personal/types_talk/slides/typescript
// tsc 6_Mapping.ts 


// type Partial<T> = {
// [P in keyof T]?: T[P];
// };

// type Readonly<T> = {
// readonly [P in keyof T]: T[P];
// };

namespace Example6 {

    type Person = {
        name: string
        lastname: string
        age: number
        // job: string
    }

    type Person2 = Partial<Readonly<Person>>;


    // Create a new type which audit an object
    type AuditDetails = { 
        readonly created: Date
        readonly createdBy: string
    }

    type AuditEntity<T> = {
        readonly [P in keyof T]: T[P];
    } & AuditDetails

    type CreatedPerson = AuditEntity<Person>; 


    // Create a new type which can specify which fields are present
    type OptionsFlags<Type> = {
        [Property in keyof Type as `Has${Capitalize<string & Property>}`]: boolean;
      };
    
    type PersonHas = OptionsFlags<Person> & Person;
    const d: PersonHas = { name: "David", age: 50, HasName: true, HasAge: true };  



    type RemoveStrings<Type> = {
        [Property in keyof Type as 
            Type[Property] extends string ? `Had${Capitalize<string & Property>}` : string & Property ]
            : 
            Type[Property] extends string ? boolean : Type[Property];
      };
    type NoName = RemoveStrings<Person>;


}