 export function getReducedAddress(address: string): string {        
   const addressStart = address.slice(0, 6);
   const addressEnd = address.slice(address.length - 3, address.length)
     const reducedAddress = addressStart + "..." + addressEnd
     return reducedAddress
}


