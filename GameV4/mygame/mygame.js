const MAPSIZE = 500
const PLAYERSIZE = 20




// WORLD
class FloorComponent extends Component {
    start() {
        this.mapSize = MAPSIZE
        this.transform.x = 0
        this.transform.y = 0
        this.transform.sx = this.mapSize
        this.transform.sy = this.mapSize
    }
    draw(ctx) {
        ctx.fillStyle = "green"
        ctx.fillRect(this.transform.x, this.transform.y, this.transform.sx, this.transform.sy)
    }
}

class FloorObject extends GameObject {
    start() {
        this.addComponent(new FloorComponent)
    }
}




// PLAYER
class PlayerDrawComponent extends Component {
    start() {
        this.playerSize = PLAYERSIZE
        this.transform.x = MAPSIZE / 2 - this.playerSize / 2
        this.transform.y = MAPSIZE / 2 - this.playerSize / 2
        this.transform.sx = this.playerSize
        this.transform.sy = this.playerSize

    }
    update() {

    }
    draw() {
        ctx.fillStyle = "gray"
        ctx.fillRect(this.transform.x, this.transform.y, this.transform.sx, this.transform.sy)

    }
}

class PlayerControllerComponent extends Component {
    start() {
        this.playerSize = PLAYERSIZE
        this.mapSize = MAPSIZE
     
    }
    update() {
        let inv = GameObject.getObjectByName("InventoryObject").getComponent("InventoryComponent")
        //Movement 
        {
            if (keysDown["w"]) {
                if (this.transform.y <= 0) {
                    this.transform.y = 0
                }
                else {
                    this.transform.y -= 10
                }

            }
            if (keysDown["s"]) {
                if (this.transform.y >= this.mapSize - this.playerSize) {
                    this.transform.y = this.mapSize - this.playerSize
                }
                else {
                    this.transform.y += 10
                }

            }
            if (keysDown["a"]) {
                if (this.transform.x <= 0) {
                    this.transform.x = 0
                }
                else {
                    this.transform.x -= 10
                }

            }
            if (keysDown["d"]) {
                if (this.transform.x >= this.mapSize - this.playerSize) {
                    this.transform.x = this.mapSize - this.playerSize
                }
                else {
                    this.transform.x += 10
                }

            }
        }




    }

        // if(keysDown["x"]){
        //     inv.inventory.push(new LaserComponent())
        // }

    }


class PlayerObject extends GameObject {
    start() {
        this.name = "PlayerObject"
        let playerDrawComponent = new PlayerDrawComponent()
        this.addComponent(playerDrawComponent)

        let playerControllerComponent = new PlayerControllerComponent()
        this.addComponent(playerControllerComponent)


    }

}




// ENEMIES


class BasicEnemyObject extends EnemyObject{
    start(){
        let enemy = new BasicEnemyComponent()
        enemy.name = "BasicEnemyComponent"
        this.addComponent(enemy)
        
    }

}


class BasicEnemyComponent extends EnemyControllerComponent{
    name = "BasicEnemyComponent"
    start(){
        
        this.transform.x = 50
        this.transform.y = 50
        this.transform.sx = 20
        this.transform.sy = 20
        this.speed = 1
        this.health = 50
    }

    
    update(){
        let player = GameObject.getObjectByName("PlayerObject")

        if(this.transform.x > player.transform.x){
            this.transform.x = this.transform.x - this.speed
        }
        else{
            this.transform.x = this.transform.x + this.speed
        }
        if(this.transform.y > player.transform.y){
            this.transform.y = this.transform.y - this.speed
        }
        else{
            this.transform.y = this.transform.y + this.speed
        }
        if(this.health <= 0){
            this.parent.body.fillStyle = "black"
        }
    }
}




// ITEMS
class InventoryObject extends GameObject{
    start(){
        let inventory = new InventoryComponent()
        inventory.name = "InventoryComponent"
        this.addComponent(inventory)
    }
}

class InventoryComponent extends Component {
    start() {
        this.mapSize = MAPSIZE
        this.transform.x = 50
        this.transform.y = this.mapSize + 50
        this.inventory = [new LaserComponent()]

    }

    update(){
        let player = GameObject.getObjectByName("PlayerObject")
        this.inventory.forEach(item =>{
            if(!item.started){
                item.start()
                item.started = true
            }

        })
        this.inventory.forEach(item =>{
            item.update()
        })

        
        let enemy = []
        SceneManager.getActiveScene().gameObjects.forEach(ob =>{
            if(ob.name == "BasicEnemyObject"){
                enemy.push(ob)
            }
        })

        this.inventory.forEach(item => {
            enemy.forEach(e =>{
                if((Math.abs(e.transform.x - player.transform.x) < item.range)
                && ((Math.abs(e.transform.y - player.transform.y) < item.range))){
                    item.firing = true
                    e.components[3].health = e.components[3].health - item.damage
                }
                else {
                    item.firing = false
                }
            })
        })

    }
    draw(ctx){
        let player = GameObject.getObjectByName("PlayerObject")
        let enemy = []
        SceneManager.getActiveScene().gameObjects.forEach(ob =>{
            if(ob.name == "BasicEnemyObject"){
                enemy.push(ob)
            }
        })

        this.inventory.forEach(item => {
            enemy.forEach(e =>{
                if(item.firing){
                    ctx.beginPath()
                    ctx.moveTo(player.transform.x+PLAYERSIZE/2,player.transform.y+PLAYERSIZE/2)
                    ctx.lineTo(e.transform.x+e.transform.sx/2,e.transform.y+e.transform.sy/2)
                    ctx.strokeStyle = "blue"
                    ctx.stroke()
                }
            })
        })

    }
}

class LaserComponent extends Weapon{
    name = "LaserComponent"
    displayName = "Auto Laser"
    start(){
        this.damage = 1
        this.range += 50

    }
    update(){
    }

    

}



// MISC
class HudObject extends GameObject {
    start() {
        let hudDraw = new HudDrawComponent()
        this.addComponent(hudDraw)


    }
}

class HudDrawComponent extends Component {
    start() {
        this.mapSize = MAPSIZE

    }
    update() {

    }
    draw() {
        let inv = GameObject.getObjectByName("InventoryObject").getComponent("InventoryComponent")
        this.xOffset = 20
        this.yOffset = 50
        ctx.fillStyle = "black"
        ctx.fillRect(this.mapSize, 0, 100, this.mapSize)
        ctx.fillRect(0, this.mapSize, this.mapSize + 100, 200)
        ctx.fillStyle = "red"
        ctx.font = "12px helvetica"
        ctx.fillText("Inventory:", inv.transform.x, inv.transform.y)

        inv.inventory.forEach((item, index) => {
            ctx.fillText(item.displayName + " " + item.damage, inv.transform.x + this.xOffset, inv.transform.y + this.yOffset)
            if((index+1) % 2 == 0){
                this.xOffset += 100
                this.yOffset = 50
            }
            else{this.yOffset = 100}
        })
    }
}




// SCENES
class MainScene extends Scene {
    start() {
        let floor = new FloorObject()
        this.addGameObject(floor)

        let player = new PlayerObject()
        this.addGameObject(player)

        let enemy = new BasicEnemyObject("BasicEnemyObject")
        this.addGameObject(enemy)

        let hud = new HudObject()
        this.addGameObject(hud)

        let inventory = new InventoryObject("InventoryObject")
        this.addGameObject(inventory)
    }
}

let mainScene = new MainScene()
SceneManager.addScene(mainScene)