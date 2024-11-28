module example3


type customerId = CustomerId of int
type addressId = AddressId of int

let sendInvoice (customerId:customerId) (addressId:addressId) =
    printfn $"Sending invoice to customer %A{customerId} at address %A{addressId}"

let customerId = CustomerId 123
let addressId = AddressId 678

sendInvoice customerId addressId

sendInvoice addressId customerId




 
