import "./ShieldComponent.js"
import "./ShieldDrawComponent.js"

class ShieldObject extends GameObject{
    name = "ShieldObject"
    start(){
        this.addComponent(new ShieldComponent())
        this.addComponent(new ShieldDrawComponent())
    }

}
window.ShieldObject = ShieldObject