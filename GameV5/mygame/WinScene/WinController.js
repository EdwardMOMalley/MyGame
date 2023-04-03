class WinController extends Component {
    update() {
        if(keysDown["r"]){
            SceneManager.changeScene(0)
        }
    }
}

window.WinController = WinController