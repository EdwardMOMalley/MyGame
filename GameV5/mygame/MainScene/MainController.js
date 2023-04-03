import "./SelectionObject.js"
class MainController extends Component {
    name = "MainController"
    start() {


    }

    handleUpdate(component, eventName) {
        if(eventName == "PlayerDied"){
           SceneManager.changeScene(3)
           console.log("PlayerDied")
        }
        if(eventName == "EndReached"){
            SceneManager.changeScene(2)
           console.log("EndReached")
        }

        if(eventName == "pause"){
            SceneManager.pause()
        }
        if(eventName == "unpause"){
            SceneManager.unpause()
        }



    }
    update(){

    }
}


window.MainController = MainController