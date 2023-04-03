import "./SelectionComponent.js"
import "./SelectionDrawComponent.js"
import "./SelectionBoxObject.js"
class SelectionObject extends GameObject{
    constructor(upgradeTree){
        super()
        this.upgradeTree = upgradeTree
    }
    name = "SelectionObject"
    start(){
        this.upgradeTree.sort(() => Math.random() - 0.5)
        this.addComponent(new SelectionComponent())
        this.addComponent(new SelectionDrawComponent())
        this.size = 100

    }


}

window.SelectionObject = SelectionObject