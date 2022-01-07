
import * as EthereumController from "@decentraland/EthereumController"
import { getUserAccount } from "@decentraland/EthereumController"


// Getting reduced address
export async function getReducedAddress(): string {        
  try {
    const address = await getAddress()
    const addressStart = address.slice(0, 6);
    const addressEnd = address.slice(address.length - 3, address.length)
    const reducedAddress = addressStart + "..." + addressEnd
    return reducedAddress
  } catch (error) {
    return error.toString()
  }
}

//Getting full address

export async function getAddress() : string {
  const address = await getUserAccount()
  return address
}


