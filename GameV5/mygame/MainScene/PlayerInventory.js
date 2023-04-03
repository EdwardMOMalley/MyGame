import "./ShieldObject.js"
import "./AutoLaserObject.js"
import "./SelectionObject.js"
class PlayerInventory extends Component{
    name = "PlayerInventory"
    start(){
        this.inv = []
        this.addListener(GameObject.getObjectByName("MainEnemyControllerObject").getComponent("MainEnemyController"))
        this.enemyController =  GameObject.getObjectByName("MainEnemyControllerObject").getComponent("MainEnemyController")

        this.peashooterPath = [
            {available:true,upgradeName:"Damage++",upgradeDescription:"Increase PeaShooter damage by 50%",upgradeDamage:0.5},
            {available:true,upgradeName:"Penetration++",upgradeDescription:"PeaShooter can now penetrate through 1 additional enemy",upgradePen:1},
            {available:true,upgradeName:"Capacity++",upgradeDescription:"PeaShooter capacity increased by 50%",upgradeCapacity:0.5},
            {available:true,upgradeName:"FireRate++",upgradeDescription:"Increase PeaShooter fire rate by 50%",upgradeFireRate:0.5}
        ]
        this.autoLaserPath = []
        this.shieldPath = []
        this.generalPath = []
        this.master = [this.peashooterPath]

    }
    update(){
        //console.log(this.listeners)



    }
    handleUpdate(component,eventName){
        if(eventName == "LevelUp"){
            this.master.sort(() => Math.random() - 0.5)
            GameObject.instantiate(new SelectionObject(this.master[0]))

/*             if(component.level == 2 ){
                GameObject.instantiate(new ShieldObject())
                this.addListener(GameObject.getObjectByName("ShieldObject").getComponent("ShieldComponent"))
                console.log(GameObject.getObjectByName("ShieldObject").components)
                this.inv.push("Shield")
            }
            else if(component.level == 3){
                GameObject.instantiate(new AutoLaserObject())
                this.addListener(GameObject.getObjectByName("AutoLaserObject").getComponent("AutoLaserComponent"))

                this.inv.push("AutoLaser")
            }
            else{
                console.log("LevelUp, damage and range up")
            } */

        }

    }

    getUpgrade(){

    }

}
//Probem is youre adding listener before it can start because youre claling it in the same loop 1 line later,need to separate it
window.PlayerInventory = PlayerInventory