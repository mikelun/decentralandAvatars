import {getReducedAddress} from "./utils/Utils"



class TextRotateSystem implements ISystem {
  entity: Entity
  transform: Transform
  constructor(entity: Entity) {
    this.entity = entity
    this.transform = this.entity.getComponent(Transform)
  }

  
  update() {

    this.transform.position =  new Vector3(
      Camera.instance.position.x,
      Camera.instance.position.y + 0.5,
      Camera.instance.position.z
    )
    this.transform.rotation = Camera.instance.rotation
  }
}

class ImageRotateSystem implements ISystem {
  entity: Entity
  transform: Transform
  constructor(entity: Entity) {
    this.entity = entity
    this.transform = this.entity.getComponent(Transform)
    this.transform.scale = new Vector3(0.5, 0.01, 0.5)
  }

  update() {

    this.transform.position =  new Vector3(
      Camera.instance.position.x,
      Camera.instance.position.y + 1,
      Camera.instance.position.z
    )
    this.transform.rotation = new Vector3(
      Camera.instance.rotation.x,
      Camera.instance.rotation.y,
      0,
    )
  }
}

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

addingAddressToHead()

const imageBox = new Entity()
imageBox.addComponent(this.transform.rotation  = Camera.instance.rotation(new BoxShape())
engine.addEntity(imageBox)
imageBox.addComponent(new Transform())
engine.addSystem(new ImageRotateSystem(imageBox))

//Create texture
const myTexture = new Texture("https://buildship.mypinata.cloud/ipfs/QmRRPWG96cmgTn2qSzjwr2qvfNEuhunv6FNeMFGa9bx6mQ")

//Create a material
const myMaterial = new Material()
myMaterial.albedoTexture = myTexture



