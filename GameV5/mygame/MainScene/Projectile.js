class Projectile extends Component{
    constructor(targetX,targetY){
        super()
        this.targetX = targetX
        this.targetY = targetY
        this.velocity
        this.weaponDamage
    }
    start(){
        this.angle = Math.atan2(this.targetY-this.transform.y,this.targetX-this.transform.x)
        this.velocity = {
            x: 10 * Math.cos(this.angle),
            y:10 * Math.sin(this.angle)
        }
        this.timer = 1
        this.subTimer =25
        this.weaponDamage = 50
        this.enemyController = GameObject.getObjectByName("MainEnemyControllerObject").getComponent("MainEnemyController")

    }

    update(){
        if(SceneManager.isPaused){
            this.enemies = this.enemyController.currentEnemies


        this.transform.x += this.velocity.x
        this.transform.y += this.velocity.y
        if(this.subTimer >0){
            this.subTimer--
        }
        if(this.subTimer == 0){
            this.subTimer = 25
            this.parent.destroy()
        }

        this.enemies.forEach(enemy =>{
            if(Math.abs(enemy.transform.x-this.transform.x)<this.transform.sx/2+enemy.transform.sx/2){
                if(Math.abs(enemy.transform.y-this.transform.y)<this.transform.sx/2 +enemy.transform.sy/2){
                    this.send(this,enemy.getComponent("BasicEnemyController"),"ProjectileHit")
                    this.parent.destroy()
                }
            }
        })

    }
    }
}

window.Projectile = Projectile