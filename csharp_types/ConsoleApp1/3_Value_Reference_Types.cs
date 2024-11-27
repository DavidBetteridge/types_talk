namespace Example3;

public class o
{
    
    void ReferenceTypes()
    {
        string str = "Hello";
        var arrayOfInt = new int[10];
        var arrayOfString = new string[10];
        C c = new C();
    }
    
    class C
    {
        public int i;
        public string s;
    }

    //*********************************************

    void ValueTypes()
    {
        int i = 10;
        bool b = true;
        S s = new S();

        const int length = 10;
        Span<int> numbers = stackalloc int[length];
        for (var j = 0; j < length; j++)
        {
            numbers[j] += j;
            Console.WriteLine(numbers[j]);
        }
    }
    
    struct S
    {
        public int i;
        public string s;
    }
    
}