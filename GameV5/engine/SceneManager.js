class SceneManager{
    static scenes = []
    static currentSceneIndex = 0
    static changeSceneFlag = true
    isPaused = true

    static startScenes(scenes,title){
        SceneManager.setScenes(scenes)
        start(title)
    }

    static isPaused(){
        return this.isPaused

    }
    static pause(){
        this.isPaused = false
    }
    static unpause(){
        this.isPaused = true
    }

    static setScenes(scenes){
        SceneManager.currentSceneIndex = 0
        SceneManager.changedScene = true
        SceneManager.scenes = []
        SceneManager.addScenes(scenes)
    }

    static addScenes(scenes){
        for(let scene of scenes){
            SceneManager.addScene(scene);
        }
    }

    static addScene(scene){
        SceneManager.scenes.push(scene)
    }


    static getActiveScene(){
        return SceneManager.scenes[SceneManager.currentSceneIndex]
    }

    static changeScene(index){
        SceneManager.currentSceneIndex = index
        SceneManager.changeSceneFlag = true
    }

}

window.SceneManager = SceneManager