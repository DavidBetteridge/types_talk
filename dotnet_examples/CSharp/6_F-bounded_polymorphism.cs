namespace Example6;


// F-bounded polymorphism (or self-referential constraint). aka recursion!
public interface IFluentInterface<T> where T : IFluentInterface<T>
{
    T DoSomething();
}

public class FluentImplementation : IFluentInterface<FluentImplementation>
{
    public FluentImplementation DoSomething()
    {
        // Implementation logic
        return this;
    }
}

class C
{
    void f<T>(IFluentInterface<T> c) where T : IFluentInterface<T>
    {
        // Allows you to do this...!
        c.DoSomething().DoSomething().DoSomething().DoSomething();
    }
}