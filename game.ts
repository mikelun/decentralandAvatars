import {getReducedAddress} from "./utils/Utils"
import {ImageRotateSystem, TextRotateSystem} from "./RotateSystems"



function addingAddressToHead() {
  const text = new Entity()
  text.addComponent(new Transform({ position: new Vector3(1, 1, 1) }))
  engine.addEntity(text)
  engine.addSystem(new TextRotateSystem(text))
  const address = "0x59E1faC2FAF72765AD41aE1BfAC53d5cd80acB91"
  const reducedAddress =  getReducedAddress(address)
  const myText = new TextShape(reducedAddress)
  myText.fontSize = 2
  myText.color = Color3.Red()
  myText.font = new Font(Fonts.SansSerif_Bold)
  text.addComponent(myText)
}

function addingImageToHead() {
  const imageBox = new Entity()
  imageBox.addComponent(new Transform())
  imageBox.addComponent(new BoxShape())
  engine.addEntity(imageBox)
  engine.addSystem(new ImageRotateSystem(imageBox))
  const myTexture = new Texture("https://buildship.mypinata.cloud/ipfs/QmRRPWG96cmgTn2qSzjwr2qvfNEuhunv6FNeMFGa9bx6mQ")
  //Create a material
  const myMaterial = new Material()
  myMaterial.albedoTexture = myTexture
  imageBox.addComponent(myMaterial)
}



addingAddressToHead()

addingImageToHead()

