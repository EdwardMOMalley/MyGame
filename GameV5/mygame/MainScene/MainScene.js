import "./FloorComponent.js"
import "./Hud.js"
import "./MainController.js"
import "./PlayerObject.js"
import "./TimerComponent.js"
import "./BasicEnemyObject.js"
import "./MainEnemyController.js"
import "./ExperienceObject.js"
import "./ShieldObject.js"


class MainScene extends Scene{
    start(){
        this.addGameObject(new GameObject("floorObject").addComponent(new floorComponent()))
        this.addGameObject(new GameObject("TimerObject").addComponent(new TimerComponent()))
        this.addGameObject(new GameObject("MainControllerObject").addComponent(new MainController()))
        this.player = new PlayerObject()
        this.addGameObject(this.player)
        this.addGameObject(new GameObject("Hud").addComponent(new Hud()))
        this.addGameObject(new GameObject("MainEnemyControllerObject").addComponent(new MainEnemyController()))

    }

}

window.MainScene = MainScene