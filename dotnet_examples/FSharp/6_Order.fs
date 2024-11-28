module example6


let f1 x = x + 2

let f2 y = f1 y     // Move above




// What about recursion?
// let fib(n: int):int = 
//     match n with
//     | 1 | 2 -> n
//     | n -> fib (n-1) + fib (n - 2)


// Should this work?
// open example7
// let greeting = hello "David"

