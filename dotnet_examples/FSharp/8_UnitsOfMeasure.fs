module example8

// Units of measure
[<Measure>] type kW
[<Measure>] type h
[<Measure>] type kWh
[<Measure>] type GBP

let billCustomer (usage:float<h>) (cost:float<GBP/(kWh)>) =
    usage * cost


let cost = 0.2<GBP/(kWh)>
let usage = 12.<h>

let billableAmount = billCustomer usage cost