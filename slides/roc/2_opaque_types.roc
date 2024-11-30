app [main] { pf: platform "https://github.com/roc-lang/basic-cli/releases/download/0.15.0/SlwdbJ-3GR7uBWQo6zlmYWNYOxnvo8r6YABXD-45UOw.tar.br" }
main = 1




Username := Str

fromStr : Str -> Username
fromStr = \str ->
    @Username str

toStr : Username -> Str
toStr = \@Username str ->
    str

# @Username is only available in this module


me = fromStr "David"
david = toStr me


