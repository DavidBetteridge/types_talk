namespace Example4;

public class Nulls {

    public void f(string a, string? b, string? c, string? d)
    {
        Console.WriteLine(a.Length);
        
        Console.WriteLine(b.Length);
        
        Console.WriteLine(c!.Length);  // We know best
        Console.WriteLine(c.Length);   // c is now marked as not null
        
        if (d is not null)
            // Flow analysis
            Console.WriteLine(d.Length);
    }

    public void g()
    {
        var d = new Dictionary<int, string> { { 1, "ABC" } };
        if (d.TryGetValue(123, out var v))
        {
            // How does the IDE know if v is null or not?
            Console.WriteLine(v.Length);
        }
        Console.WriteLine(v.Length);
    }
    
    //F12 show definition of TryGetValue

    
}