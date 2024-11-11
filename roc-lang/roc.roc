app [main] { pf: platform "https://github.com/roc-lang/basic-cli/releases/download/0.15.0/SlwdbJ-3GR7uBWQo6zlmYWNYOxnvo8r6YABXD-45UOw.tar.br" }

import pf.Stdout


fullName : Str, Str -> Str
fullName = \firstName, lastName ->  "$(firstName) $(lastName)"

Meetup : { name : Str, speaker : Str }


# Wildcard types *  (list of anything)
size : List * -> U64
size = \l -> List.len l

# Type parameters
backwards : List a -> List a
backwards = \l -> List.reverse l

colourFromStr : Str -> [Red, Green, Yellow]
colourFromStr = \string ->
    when string is
        "red" -> Red
        "green" -> Green
        _ -> Yellow

# main :  _ -> Task {} [Exit I32 Str]
main =

    # Successfully call a function with two arguments
    # Stdout.line! (fullName "David" "Betteridge")

    # # Fail to call a function with one argument
    # # stdout.line! (fullName "John")

    # # Type alias
    # accu : Meetup
    # accu = { name: "ACCU York", speaker: "David" }
    # codedojo = { name: "Code Dojo", speaker: "David" }

    # names : List Meetup
    # names = [accu, codedojo]

    # names3 = backwards names

    # names2 = size names3

    # Stdout.line! ( Num.toStr names2 )

    debug = Inspect.toStr (colourFromStr "green")
    Stdout.line! debug
    1
