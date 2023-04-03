import "./StartController.js"
import "./StartDrawComponent.js"
import "./StartControllerGameObject.js"
import "./StartDrawGameObject.js"

class StartScene extends Scene {
    start() {
        this.addGameObject(new StartControllerGameObject())
        this.addGameObject(new StartDrawGameObject())


    }
}

window.StartScene = StartScene