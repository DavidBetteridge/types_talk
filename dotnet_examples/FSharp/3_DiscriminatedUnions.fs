module example4

type Shape =
    | Rectangle of width : float * length : float    // Extra data
    | Circle of radius : float   // but not the same
    | Prism of width : float * float * height : float
    
    
let rect = Rectangle(length = 1.3, width = 10.0)
let circ = Circle (1.0)
let prism = Prism(5., 2.0, height = 3.0)


let getShapeWidth shape =
    match shape with
    | Rectangle(width = w) -> w
    | Circle(radius = r) -> 2. * r
    | Prism(width = w) -> w