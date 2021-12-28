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

// IMAGE 

class ImageRotateSystem implements ISystem {
    entity: Entity
    transform: Transform
    constructor(entity: Entity) {
      this.entity = entity
      this.transform = this.entity.getComponent(Transform)
      this.transform.scale = new Vector3(0.35, 0.35, 0.35)
    }
  
    update() {
  
      this.transform.position =  new Vector3(
        Camera.instance.position.x,
        Camera.instance.position.y + 1,
        Camera.instance.position.z
      )
      this.transform.rotation = new Vector3(
        Camera.instance.position.x,
        0,
        0,
      )
    }
}

export {ImageRotateSystem, TextRotateSystem}