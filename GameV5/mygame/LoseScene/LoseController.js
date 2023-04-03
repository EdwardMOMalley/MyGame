class LoseController extends Component {
    update() {
        if(keysDown["r"]){
            SceneManager.changeScene(0)
        }
    }
}
window.LoseController = LoseController