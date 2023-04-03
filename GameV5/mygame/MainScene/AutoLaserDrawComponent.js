class AutoLaserDrawComponent extends Component{
    name = "AutoLaserDrawComponent"
    start(){
        this.enemyController
        this.player = GameObject.getObjectByName("PlayerObject")
        this.weaponName = "AutoLaser"
        this.weaponDamage = 2
        this.weaponRange = 100
        this.firing = false

    }
    update(){
        console.log(this.parent.components)

        this.transform.x = this.player.transform.x
        this.transform.y = this.player.transform.y
        this.enemyController =  GameObject.getObjectByName("MainEnemyControllerObject").getComponent("MainEnemyController")

    }
    draw(ctx){

        this.enemyController.currentEnemies.forEach(enemy =>{
            if(Math.abs(this.transform.x - enemy.transform.x)< this.weaponRange && Math.abs(this.transform.y - enemy.transform.y)< this.weaponRange){
                ctx.strokeStyle = "blue"
                ctx.beginPath()
                ctx.moveTo(this.transform.x, this.transform.y);
                ctx.lineTo(enemy.transform.x, enemy.transform.y);
                ctx.stroke()
            }
        })
    }
}

window.AutoLaserDrawComponent = AutoLaserDrawComponent