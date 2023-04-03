import "./DamageTextObject.js"
class BasicEnemyController extends Component{
    name = "BasicEnemyController"

    constructor(speed = 5,hp = 50){
        super()
        this.speed = speed
        this.hitpoints = hp
        this.maxHitpoints = hp
    }

    start(){
        this.isTargeted = false
        this.enemySize = this.parent.enemySize
        this.map = GameObject.getObjectByName("floorObject")
     
        this.worldSize = this.map.getComponent("floorComponent").size
        this.margin = this.map.getComponent("floorComponent").margin
        this.addListener(GameObject.getObjectByName("PlayerObject").getComponent("PlayerController"))
        this.addListener(GameObject.getObjectByName("MainEnemyControllerObject").getComponent("MainEnemyController"))
        this.updateListeners("BasicEnemySpawned")
        this.player = GameObject.getObjectByName("PlayerObject")
        this.playerLocation = GameObject.getObjectByName("PlayerObject").transform
        this.transform.x = getSpawnLocation(this.margin,this.worldSize)
        this.transform.y = getSpawnLocation(this.margin,this.worldSize)
        this.enemies

    }
    update(){
        this.pauseStatus = GameObject.getObjectByName("MainControllerObject").getComponent("MainController").paused
        if(SceneManager.isPaused){
            this.angle = Math.atan2(this.playerLocation.y-this.transform.y,this.playerLocation.x-this.transform.x)
            this.velocity = {
                x: this.speed * Math.cos(this.angle),
                y:this.speed * Math.sin(this.angle)
            }
    
            this.enemies = GameObject.getObjectByName("MainEnemyControllerObject").getComponent("MainEnemyController").currentEnemies
    
            this.transform.x += this.velocity.x
            this.transform.y += this.velocity.y
    
    
            if(Math.abs(this.playerLocation.x-this.transform.x)<this.transform.sx/2+this.player.transform.sx/2){
                if(Math.abs(this.playerLocation.y-this.transform.y)<this.transform.sy/2+this.player.transform.sy/2){
                    this.updateListeners("BasicEnemyHit")
                }
            }
    
            if(this.hitpoints <= 0){
                this.updateListeners("BasicEnemyDestroyed")
                this.parent.destroy()
            }

        }

       
    }

    handleUpdate(component,eventName){

        
    }

    recieveMessage(weapon,eventName){
        if(eventName == "TargetedEnemy"){
            if(weapon.weaponName == "AutoLaser"){
                this.hitpoints -= weapon.weaponDamage
                //GameObject.instantiate(new DamageTextObject(weapon.weaponDamage,this.transform))
            }
        }
        if(eventName == "ProjectileHit"){
            this.hitpoints -= weapon.weaponDamage
            GameObject.instantiate(new DamageTextObject(weapon.weaponDamage,this.transform))

        }
        if(eventName == "ShieldHit"){
            this.hitpoints -= weapon.weaponDamage
            GameObject.instantiate(new DamageTextObject(weapon.weaponDamage,this.transform))

        }
    }


}


function getSpawnLocation(margin,worldSize){
    return Math.floor(Math.random()*(worldSize-margin+1)+margin)
        
}

window.BasicEnemyController = BasicEnemyController