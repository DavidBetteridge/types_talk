namespace Example3;

public class o
{
    // Wrong definition is stack vs heap
    
    void ReferenceTypes()
    {
        string str = "Hello";
        var arrayOfInt = new int[10];
        var arrayOfString = new string[10];
        C c = new C();
        c.i = 1;
    }
    
    class C
    {
        public int i;           // Value type on the heap
        public string s;
    }

    //*********************************************
    struct S
    {
        public int i;
        public string s;
    }
    
    void ValueTypes()
    {
        int i = 10;
        bool b = true;
        S s;  // Not null
        s.i = 1;

        const int length = 10;
        Span<int> numbers = stackalloc int[length];   // Reference type on the stack
        for (var j = 0; j < length; j++)
        {
            numbers[j] += j;
            Console.WriteLine(numbers[j]);
        }
    }
    

    
}