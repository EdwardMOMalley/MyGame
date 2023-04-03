import "./LoseController.js"
import "./LoseDrawComponent.js"

class LoseScene extends Scene {
    start() {
        this.addGameObject(new GameObject().addComponent(new LoseDrawComponent()))
        this.addGameObject(new GameObject().addComponent(new LoseController()))
    }
}

window.LoseScene = LoseScene