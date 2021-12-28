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
  const imageBox = new Entity()
  imageBox.addComponent(new Transform())
  imageBox.addComponent(new BoxShape())
  
  engine.addSystem(new ImageRotateSystem(imageBox))
  
  const myTexture = new Texture("https://buildship.mypinata.cloud/ipfs/QmRRPWG96cmgTn2qSzjwr2qvfNEuhunv6FNeMFGa9bx6mQ")
  
  //Create a material
  const myMaterial = new Material()
  myMaterial.albedoTexture = myTexture
  myMaterial.bumpTexture = myTexture
  
  imageBox.addComponent(myMaterial)
  imageBox.addComponent(new utils.KeepRotatingComponent(Quaternion.Euler(20, 20, 20)))
  // imageBox.addComponent(
  //   new utils.Interval(5, () => {
  //     let randomSize = Math.random()
  //     imageBox.getComponent(Transform).position.set(
  //       Camera.instance.position.x,
  //       Camera.instance.position.y + 1,
  //       Camera.instance.position.z
  //     )
  //   })
  // )
  engine.addEntity(imageBox)
}



addingAddressToHead()

addingImageToHead()


