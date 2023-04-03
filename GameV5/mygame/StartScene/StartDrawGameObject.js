class StartDrawGameObject extends GameObject {
    start() {
        this.addComponent(new StartDrawComponent())
    }

}

window.StartDrawGameObject = StartDrawGameObject