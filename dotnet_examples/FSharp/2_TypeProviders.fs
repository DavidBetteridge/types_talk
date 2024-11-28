module example2

open FSharp.Data
type People = CsvProvider<"people.csv">
let csvFile = People.Load("people.csv")
let result = csvFile.Rows |> Seq.map (fun row -> row.Name )   // update csv