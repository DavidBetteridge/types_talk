app [main] { pf: platform "https://github.com/roc-lang/basic-cli/releases/download/0.15.0/SlwdbJ-3GR7uBWQo6zlmYWNYOxnvo8r6YABXD-45UOw.tar.br" }

# import pf.Stdout

someone = "David"

# Inferred types
completeName = \firstName, lastName ->  "$(firstName) $(lastName)"
db = completeName someone "Betteridge"






# Type annotations
fullName : Str, Str -> Str
fullName = \firstName,lastName ->  "$(firstName) $(lastName)"
me = fullName "David" "Betteridge"



Name : Str      # Name has the type String



Meetup : { name : Name, speaker : Str }    # Meetup has the type { name : String, speaker : String }







# Wildcard types *  (list of anything)
size : List * -> U64
size = \l -> List.len l



backwards : List a -> List a
backwards = \l -> List.reverse l





# Tag values
colourFromStr : Str -> [Red Str, Green, Yellow]
colourFromStr = \string ->
    when string is
        "red" -> Red "stop"
        "green" -> Green
        _ -> Yellow


returnType =  \str ->
        if Str.isEmpty str then
            Ok "it was empty"
        else
            Err ["it was not empty"]

a = returnType "hello"


# main :  _ -> Task {} [Exit I32 Str]
main = 1