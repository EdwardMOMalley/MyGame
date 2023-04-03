import "./BasicEnemyController.js"
import "/engine/Rectangle.js"
import "./EnemyHealthBar.js"




class BasicEnemyObject extends GameObject{
    name = "BasicEnemyObject"
    static numberOfBasicEnemies = 0
    constructor(fillStyle = "white",speed = 5,hp = 50, size = 20) {
        super();
        this.fillStyle = fillStyle
        this.enemySize = size
        this.speed = speed
        this.hp = hp
      }
    start(){
      


        this.transform.sx = this.enemySize
        this.transform.sy = this.enemySize
        this.addComponent(new Rectangle(this.fillStyle))
        this.controller = new BasicEnemyController(this.speed,this.hp)
        this.controller.addListener(this)
        this.addComponent(this.controller)
        this.controller= this.getComponent("BasicEnemyController")
        this.addComponent(new EnemyHealthBar())

    }



}



window.BasicEnemyObject = BasicEnemyObject