namespace Example4;

public class Nulls {

    public void f(string a, string? b, string? c)
    {
        Console.WriteLine(a.Length);
        
        Console.WriteLine(b.Length);
        
        Console.WriteLine(c!.Length);  // We know best
        Console.WriteLine(c.Length);   // c is now marked as not null
    }

    public void g()
    {
        var d = new Dictionary<int, string> { { 1, "ABC" } };
        if (d.TryGetValue(123, out var v))
        {
            // Is v null or not?
            Console.WriteLine(v.Length);
        }
        Console.WriteLine(v.Length);
    }
    
    //F12 show definition of TryGetValue

    
}