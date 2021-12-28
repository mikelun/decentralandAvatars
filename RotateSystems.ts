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
        Camera.instance.position.y + 0.4,
        Camera.instance.position.z
      )
      this.transform.rotation = Camera.instance.rotation
    }
  }

// IMAGE 

class ImageRotateSystem implements ISystem {
    entity: Entity
    transform: Transform
    constructor(entity: Entity) {
      this.entity = entity
      this.transform = this.entity.getComponent(Transform)
      this.transform.scale = new Vector3(0.25, 0.25, 0.25)
    }
  
    update() {
  
      this.transform.position =  new Vector3(
        Camera.instance.position.x,
        Camera.instance.position.y + 0.65,
        Camera.instance.position.z
      )
      
    }
}

export {ImageRotateSystem, TextRotateSystem}