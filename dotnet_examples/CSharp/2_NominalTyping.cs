namespace Example2;

interface I
{
    public int i { get; set; }
}

class C1 : I
{
    public int i { get; set; }
}

class C2 : I
{
    public int i { get; set; }
}

void f(I obj)
{
    Console.WriteLine(obj.i);
}

// The solution is to use interfaces.  
// A lot less common in modern c-sharp.
