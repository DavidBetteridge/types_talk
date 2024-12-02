namespace Example5;

//Expand
using AddressId = System.Int32;
using NameId = System.Int32;

class c
{
    public c()
    {
        AddressId york = 1;
        NameId david = 2;

        f(york, david);
        f(david, york);  //It works :-(
    }
    
    public void f(AddressId address, NameId name)
    {
        
    }
    
}

// Not new types,  just aliases for existing types