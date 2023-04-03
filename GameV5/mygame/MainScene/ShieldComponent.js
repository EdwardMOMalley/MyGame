class ShieldComponent extends Component{
    name = "ShieldComponent"
    start(){
        this.player = GameObject.getObjectByName("PlayerObject")
        this.enemyController = GameObject.getObjectByName("MainEnemyControllerObject").getComponent("MainEnemyController")

        this.transform.sx = 8
        this.transform.sy = 8
        this.rotateDistance = 50
        this.maxOffset = 120
        this.xOffset = 0
        this.yOffset = 0
        this.subTimer = 25
        this.direction = 1
        this.weaponDamage = 25
        this.speed = 10

        this.transform.x = this.player.transform.x-this.player.transform.sx/2-this.rotateDistance
        this.transform.y = this.player.transform.y-this.player.transform.sy/2-this.rotateDistance
    }
    update(){
        if(SceneManager.isPaused){
            this.enemies = this.enemyController.currentEnemies

        this.transform.x =this.player.transform.x-this.player.transform.sx/2-this.rotateDistance+this.xOffset
        this.transform.y = this.player.transform.y-this.player.transform.sy/2-this.rotateDistance+this.yOffset


        if(this.direction == 1){
            if(this.xOffset < this.rotateDistance*2+this.player.transform.sx){
                this.xOffset += this.speed
            }
            else{
                this.direction = 2
            }
        }
        if(this.direction == 2){
            if(this.yOffset < this.rotateDistance*2+this.player.transform.sy){
                this.yOffset+=this.speed
            }
            else{
                this.direction = 3
            }
        }
        if(this.direction ==3){
            if(this.xOffset > 0){
                this.xOffset-=this.speed
            }
            else{
                this.direction =4
            }
        }
        if(this.direction == 4){
            if(this.yOffset > 0){
                this.yOffset -=this.speed
            }
            else{
                this.direction = 1
            }
        }


        this.enemies.forEach(enemy =>{
            if(Math.abs(enemy.transform.x-this.transform.x)<this.transform.sx/2+enemy.transform.sx/2){
                if(Math.abs(enemy.transform.y-this.transform.y)<this.transform.sx/2 +enemy.transform.sy/2){
                    this.send(this,enemy.getComponent("BasicEnemyController"),"ShieldHit")
                }
            }
        })
    }

    }
    handleUpdate(){}


}

window.ShieldComponent = ShieldComponent