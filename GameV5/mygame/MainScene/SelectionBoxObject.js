import "./SelectionBoxComponent.js"
import "./SelectionBoxDraw.js"
class SelectionBoxObject extends GameObject{
    name = "SelectionBoxObject"
    constructor(transform,number,upgrade){
        super()
        this.transform.y = transform.y
        this.transform.sy = transform.sy
        this.transform.sx = transform.sx/3
        this.upgrade = upgrade
        if(number == 1){
            this.transform.x = transform.x
        }
        if(number == 2){
            this.transform.sx-=1
            this.transform.x = transform.x+this.transform.sx+2
        }
        if(number == 3){
            this.transform.x = transform.x+(this.transform.sx)*2+1
        }


    }

    start(){
        this.addComponent(new SelectionBoxComponent())
        this.addComponent(new SelectionBoxDraw())
    }

}

window.SelectionBoxObject = SelectionBoxObject