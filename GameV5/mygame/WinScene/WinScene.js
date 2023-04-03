import "./WinController.js"
import "./WinDrawComponent.js"

class WinScene extends Scene {
    start() {
        this.addGameObject(new GameObject().addComponent(new WinDrawComponent()))
        this.addGameObject(new GameObject().addComponent(new WinController()))
    }
}


window.WinScene = WinScene