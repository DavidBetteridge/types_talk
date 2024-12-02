
from typing import NewType

# Alias for a type
type Vector = list[float]

def length (v:Vector):
    return v.count


# New subtypes
AddressId = NewType('AddressId', int)
CustomerId = NewType('CustomerId', int)

customerId = CustomerId(12)
addressId = AddressId(12)


def sendInvoice (customerId:CustomerId, addressId:AddressId):
    print(f"Sending invoice to customer {customerId} at address {addressId}")

sendInvoice (customerId, addressId)


# Still runs however - alias not a wrapper type
sendInvoice (addressId, customerId)

