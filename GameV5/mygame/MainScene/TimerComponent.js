class TimerComponent extends Component{
    name = "TimerComponent"
    start(){
        this.goal = 45
        this.mainTimer = this.goal
        this.subTimer = 0
        this.addListener(GameObject.getObjectByName("MainControllerObject").getComponent("MainController"))
    }
    update(){
        if(SceneManager.isPaused){
            this.subTimer++
        if(this.subTimer == 25){
            this.mainTimer--
            this.subTimer = 0
        }

        if (this.mainTimer <=-1){
            this.updateListeners("EndReached")
        }

    }
}
}


window.TimerComponent = TimerComponent