import "./PlayerController.js"
import "./PlayerInventory.js"
import "./PlayerReloadBar.js"
class PlayerObject extends GameObject{
    name = "PlayerObject"
    start(){
        this.transform.sx = 20
        this.transform.sy = 20
        this.playerController = new PlayerController()
        this.inventory = new PlayerInventory()
        this.playerController.addListener(this)
        this.laserLine = new Line()
        this.addComponent(this.laserLine)

        this.addComponent(this.inventory)
        this.addComponent(new Rectangle("gray"))
        this.addComponent(this.playerController)
        this.addComponent(new PlayerReloadBar())

    }
}

window.PlayerObject = PlayerObject