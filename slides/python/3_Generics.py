from typing import NewType, TypeVar, Generic

# Old syntax

T = TypeVar('T')  # Define type variable "T"
class Stack(Generic[T]):
    def __init__(self) -> None:
        # Create an empty list with items of type T
        self.items: list[T] = []

    def push(self, item: T) -> None:
        self.items.append(item)

    def pop(self) -> T:
        return self.items.pop()

    def empty(self) -> bool:
        return not self.items
    


# New syntax
class NewStack[S]:
    def __init__(self) -> None:
        # Create an empty list with items of type T
        self.items: list[S] = []

    def push(self, item: S) -> None:
        self.items.append(item)

    def pop(self) -> S:
        return self.items.pop()

    def empty(self) -> bool:
        return not self.items




T = TypeVar('T')  # Can be anything
S = TypeVar('S', bound=str)  # Can be any subtype of str
A = TypeVar('A', str, bytes)  # Must be exactly str or bytes


# Or inline
def print_capitalized[Z: str](x: Z) -> Z:
    """Print x capitalized, and return x."""
    print(x.capitalize())
    return x

print_capitalized("hello")

Good = NewType('Good', str)
print_capitalized(Good("hi"))

# Bad = NewType('Bad', int)
# print_capitalized(Bad(123))

