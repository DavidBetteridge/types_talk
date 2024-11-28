namespace Example0;

interface I
{
    public int p { get; set; }
}

class C<T1, T2>(T1 c1, T2 c2) 
    where T1 : I, new() // T1 implements I and have a public parameterless ctor
    where T2 : T1       // S must inherit from T1
{
    void Print()
    {
        Console.WriteLine(c2.p);
    }
}