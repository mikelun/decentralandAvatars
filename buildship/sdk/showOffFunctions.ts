import {getReducedAddress} from "./Utils"
import {ImageRotateSystem, TextRotateSystem} from "./RotateSystems"
import * as utils from '@dcl/ecs-scene-utils'


function addingAddressToHead() { 
  executeTask(async () => {
    const reducedAddress =  await getReducedAddress()
    const text = new Entity()
    text.addComponent(new Transform({ position: new Vector3(1, 1, 1) }))
    engine.addEntity(text)
    engine.addSystem(new TextRotateSystem(text))
    const myText = new TextShape(reducedAddress)
    myText.fontSize = 1
    myText.color = Color3.Red()
    myText.font = new Font(Fonts.SansSerif_Bold)
    text.addComponent(myText)
  })
}

function addingImageToHead() {
  executeTask(async () => {
    try {

      let response = await fetch("https://deep-index.moralis.io/api/v2/0x17301dbE98bEf7001D68d4E8823347eFAe377543/nft?chain=eth&format=decimal", {
        headers: {"accept": "application/json",
          "X-API-Key": "66UK3wML1jMQCdEsB1dwSY4cxkx44XnWwJieYFlQheYrUJLWg54O9q8fY9mWDIAj"
          },
        method: "GET",
      })
      
      let json = await response.json()
      let result = json["result"]
      
      // Basic Url
      let url = "ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"
      
      // If person has NFTs
      if (result.length) {
        
        // Making Random Number
        let rnd = Math.floor(Math.random() * result.length)

        // Url for decentraland
        url = "ethereum://" + result[rnd]["token_address"] + "/" + result[rnd]["token_id"] 
      }

      // Making NFTShape
      const shapeComponent = new NFTShape(
        url,
        {color: Color3.Random(),style: PictureFrameStyle.Diamond_Ornament}
      )

      // Add NFT to the head
      const imageBox = new Entity()
      imageBox.addComponent(new Transform())
      engine.addSystem(new ImageRotateSystem(imageBox))
      imageBox.addComponent(shapeComponent)
      imageBox.addComponent(new utils.KeepRotatingComponent(Quaternion.Euler(30, 30, 30)))
      engine.addEntity(imageBox)
    } catch {
      log("failed to reach URL")
    }
  })
}

export {addingAddressToHead, addingImageToHead}