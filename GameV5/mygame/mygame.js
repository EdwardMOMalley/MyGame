import "/engine/engine.js"
import "./MainScene/FloorComponent.js"
import "./StartScene/StartScene.js"
import "./MainScene/MainScene.js"
import "./LoseScene/LoseScene.js"
import "./WinScene/WinScene.js"















let startScene = new StartScene()
let mainScene = new MainScene()
let loseScene = new LoseScene()
let winScene = new WinScene()

//All Scenes
//window.allScenes = [startScene, mainScene, winScene, loseScene]

//Test Main Scene
window.allScenes = [startScene,mainScene,winScene,loseScene]