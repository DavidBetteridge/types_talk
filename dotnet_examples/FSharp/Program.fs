
let Calculate (a: Option<int>) (b:int): int = 
    a.Value + b
    
let lhs = Some(12)
let rhs = 34
let result = Calculate lhs rhs
printf $"%d{result}"


    
 

// Simple add function - note the type inference
// let add a b = a + b
// let result = add 1 2
// Call with a list restrictive type
// let resul2 = add 1.1 2.2


// identity function - no restriction
// let identity x = x
// let result = identity 1
// let result2 = identity "hello"

// Type providers
// Requires nuget package
// open FSharp.Data
// type People = CsvProvider<"people.csv">
// let csvFile = People.Load("people.csv")
// csvFile.Rows |> Seq.iter (fun row -> row.Name )

// type customerId = CustomerId of int
// type addressId = AddressId of int
//
// let sendInvoice (customerId:customerId) (addressId:addressId) =
//     printfn $"Sending invoice to customer %A{customerId} at address %A{addressId}"
//
// let customerId = CustomerId 1
// let addressId = AddressId 2
//
// sendInvoice customerId addressId
// sendInvoice addressId customerId



// Discriminated unions


// // Units of measure
// [<Measure>] type kW
// [<Measure>] type h
// [<Measure>] type kWh
// [<Measure>] type GBP
//
// let cost = 0.2<GBP/(kWh)>
// let usage = 12.<h>
//
// let billCustomer (usage:float<h>) (cost:float<GBP/(kWh)>) =
//     usage * cost
//
// let billableAmount = billCustomer usage cost




