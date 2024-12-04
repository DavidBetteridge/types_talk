app [main] { pf: platform "https://github.com/roc-lang/basic-cli/releases/download/0.15.0/SlwdbJ-3GR7uBWQo6zlmYWNYOxnvo8r6YABXD-45UOw.tar.br" }
import pf.Stdout
import pf.Stdin

main =
    
   Stdout.line! "Hello, World!"

    
    # Stdout. to get intelisense

    # Stdout.line : Str -> Task {} *
    # Stdout.line interacts with the outside world - Task
    # Stdout.line does not produce a value - {}
    # Stdout.line returns some errors - *


    # When we call it when have to write ! to indicate that it returns a tash


    # Comment out and view how the type of main changes.
    input = Stdin.line!
    Stdout.line! input

    # Task.err (Exit 42 "An error happened!")
  

    # ! is syntax sugar for Task.await,  which has the type
    # Task.await : Task a err, (a -> Task b err) -> Task b err