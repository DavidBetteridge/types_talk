module example5

// Generics are supported,  along with Type constraints.   The Type T must have an integer property called Property1

type Class6<'T when 'T : (member Property1 : int)> =
    class end
    