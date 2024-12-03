namespace Example1;

class C1
{
    public int i { get; set; }
}

class C2
{
    public int i { get; set; }
}


// Same structure,  but cannot be use interchangeably

class Test
{
    public Test()
    {
        f(new C1());
        f(new C2());
    }
    
    void f(C1 obj)
    {
        Console.WriteLine(obj.i);
    }
    
}
