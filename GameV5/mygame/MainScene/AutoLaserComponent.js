class AutoLaserComponent extends Component{
    name = "AutoLaserComponent"
    start(){
        this.weaponName = "AutoLaser"
        this.weaponDamage = 2
        this.weaponRange = 100
        this.firing = false

        this.addListener(GameObject.getObjectByName("MainEnemyControllerObject").getComponent("MainEnemyController"))
        this.enemyController =  GameObject.getObjectByName("MainEnemyControllerObject").getComponent("MainEnemyController")
    }
    update(){
        if(SceneManager.isPaused){
        for(let enemy of this.enemyController.currentEnemies){
            if(Math.abs(this.transform.x - enemy.transform.x) < this.weaponRange && Math.abs(this.transform.y - enemy.transform.y)<this.weaponRange){
                    this.send(this,enemy.getComponent("BasicEnemyController"),"TargetedEnemy")
                    this.firing = true
            }
            else{
                this.firing = false
            }
        }
    }
}

    handleUpdate(component,eventname){}
}

window.AutoLaserComponent = AutoLaserComponent