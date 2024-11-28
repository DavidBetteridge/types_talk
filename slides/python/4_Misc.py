
from typing import Never


def never_call_me(arg: Never) -> None:
    print("Why did you call me?")

never_call_me(12)


# Union[X, Y] is equivalent to X | Y and means either X or Y.
def f(x: bool) -> str | None:
    if x:
        return "x"
    
print(f(True))
print(f(False))



