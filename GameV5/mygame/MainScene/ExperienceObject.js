import "./XPComponent.js"
class ExperienceObject extends GameObject{
    constructor(amount = 1,transform) {
        super();
        this.amount = amount
        this.transform = transform


      }
    name = "ExperienceObject"
    start(){
        this.transform.sy = 5
        this.transform.sx = 5
        this.addComponent(new Circle("orange"))
        this.addComponent(new XPComponent())  
    }

}

window.ExperienceObject = ExperienceObject