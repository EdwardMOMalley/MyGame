class StartController extends Component {
    start() {
        this.size = 1000

    }
    update() {
        if(keysDown["e"]){
            SceneManager.changeScene(1);

        }

        }
    }


    window.StartController = StartController