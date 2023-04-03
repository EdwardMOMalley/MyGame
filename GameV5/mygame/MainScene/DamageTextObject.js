import "./DamageTextComponent.js"
import "./DamageTextDraw.js"
class DamageTextObject extends GameObject{
    constructor(text,transform){
        super()
        this.text = text
        this.transform.x = transform.x
        this.transform.y = transform.y
        this.height = transform.sy
        }
    start(){
        this.addComponent(new DamageTextComponent())
        this.addComponent(new DamageTextDraw(this.text,this.height))
    }


}

window.DamageTextObject = DamageTextObject