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

class Test
{
    public Test()
    {
        f(new C1());
        f(new C2());   // Remove interface from C2 to demonstrate
    }
    
    void f(I obj)
    {
        Console.WriteLine(obj.i);
    }
    
}




// The solution is to use interfaces.  
// A lot less common in modern c-sharp.
