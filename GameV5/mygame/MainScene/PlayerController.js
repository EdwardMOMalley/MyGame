import "./ProjectileObject.js"
class PlayerController extends Component{
    name = "PlayerController"
    start(){
        this.xp = 0
        this.XpToLevel = 1
        this.speed = 10
        this.hitpoints = 100
        this.level = 1
        this.subTimer = 0
        this.capacity = 10
        this.ammo = 10
        this.reloadTimer = 0
        this.weapon = "PeaShooter"


        this.map = GameObject.getObjectByName("floorObject")
        this.margin = this.map.getComponent("floorComponent").margin
        this.mapSize = this.map.getComponent("floorComponent").size
        this.transform.x = (this.margin+this.mapSize)/2
        this.transform.y = (this.margin+this.mapSize)/2
        this.mapX =   this.map.transform.sx - this.transform.sx/2 +this.margin
        this.mapY =   this.map.transform.sy - this.transform.sy/2 +this.margin
        this.addListener(GameObject.getObjectByName("MainControllerObject").getComponent("MainController"))
        this.addListener(this.parent.getComponent("PlayerInventory"))
        }
    update(){

        if(SceneManager.isPaused){

        if(this.hitpoints <=0){
            this.updateListeners("PlayerDied")
        }

        if(this.subTimer <=0){
            if(mouseClick[0] !=-1 && mouseClick[1] !=-1){
                if(this.ammo >0){
                    GameObject.instantiate(new ProjectileObject(this.transform.x,this.transform.y,mouse[0],mouse[1]))
                    this.subTimer = 5
                    this.ammo--
                }

    
            }
        }
        if(this.subTimer > 0){
            this.subTimer--
        }
        if(this.ammo == 0){
            if(this.reloadTimer >=25){
                this.ammo = this.capacity
                this.reloadTimer = 0
            }
            this.reloadTimer++
        }

        if(keysDown["r"]){
            this.ammo = 0
        }

        //Movement
        {
        if(keysDown["w"]){
            this.transform.y -=this.speed
        }
        if(keysDown["s"]){
            this.transform.y +=this.speed
        }
        if(keysDown["a"]){
            this.transform.x -=this.speed
        }
        if(keysDown["d"]){
            this.transform.x +=this.speed
        }
        if(this.transform.x < this.margin+this.transform.sx/2){
            this.transform.x = this.margin+this.transform.sx/2
        }
        if(this.transform.x > this.mapX){
            this.transform.x = this.mapX
        }
        if(this.transform.y < this.margin+this.transform.sx/2){
            this.transform.y = this.margin+this.transform.sx/2
        }
        if(this.transform.y > this.mapY){
            this.transform.y = this.mapY
        }
        if(this.xp >= this.XpToLevel){
            this.level++
            this.updateListeners("LevelUp")
            this.xp = 0
        }
    }

}
    }

    handleUpdate(component,eventName){
        if(eventName == "BasicEnemyHit"){
           // GameObject.instantiate(new DamageTextObject(1,this.transform))
            this.hitpoints--
        }
        if(eventName == "XPPickup"){
           this.xp++
           component.parent.destroy()
        }

    }

    draw(ctx){
        ctx.fillStyle = "purple"
        ctx.fillRect(this.transform.x,this.transform.y,2,2)
    
    }


}

window.PlayerController = PlayerController