class StartControllerGameObject extends GameObject {
    start() {
        this.addComponent(new StartController())
    }

}

window.StartControllerGameObject = StartControllerGameObject