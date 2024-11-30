module
    [Username]  #exports


Username := Str

fromStr : Str -> Username
fromStr = \str ->
    # Username is never ''
    if Str.isEmpty str then
        @Username "Anonymous"
    else
        @Username str

toStr : Username -> Str
toStr = \@Username str ->
    str

# @Username is only available in this module


me = fromStr "David"
david = toStr me


