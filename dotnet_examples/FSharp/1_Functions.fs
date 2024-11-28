module example1


// Simple add function - note the type inference
let add a b = a + b
// let result = add 1 2


// Call with a list restrictive type
let result2 = add 1.1 2.2


// identity function - no restriction
let identity x = x
let result3 = identity 1
let result4 = identity "hello"