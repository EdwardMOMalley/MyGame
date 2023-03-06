//Most of this code is from class demonstration atm

class SceneManager {
    static scenes = []
    static currentSceneIndex = 0
    static changedSceneFlag = true

    static addScene(scene) {
        SceneManager.scenes.push(scene)
    }

    static getActiveScene(){
        return SceneManager.scenes[SceneManager.currentSceneIndex]
    }

    static changeScene(index){
        SceneManager.currentSceneIndex = index
        SceneManager.changedSceneFlag = true
    }
}


class Scene { 
    gameObjects = []

    addGameObject(gameObject){
        this.gameObjects.push(gameObject)
        if(gameObject.start && !gameObject.started){
            gameObject.started = true
            gameObject.start()
        }
    }
}

class GameObject {
    name = ""
    components = []
    started = false
    
    constructor(name){
        this.name = name
        this.addComponent(new Transform());
    }


    static getObjectByName(name){
        return SceneManager.getActiveScene().gameObjects.find(gameObject => gameObject.name == name)
    }

    addComponent(component){
        this.components.push(component)
        component.parent = this
        return this
    }

    getComponent(name){
        return this.components.find(c => c.name == name)
    }

    get transform(){
        return this.components[0]
    }


 }

 class EnemyObject extends GameObject{
    constructor(name){
        super(name)
        this.addComponent(new Weapon())
        this.addComponent(new Rectangle())

    }
    get weapon(){
        return this.components[1]
    }
    get body(){
        return this.components[2]
    }


    
 }



class Component {
    name = ""
    parent
    started = false

    get transform(){
        return this.parent.components[0]
    }
 }

 class EnemyControllerComponent extends Component{
    speed = 10
    health = 100


 }

 class Weapon extends Component{
    name = "Weapon"
    displayName = ""
    range = 20
    damage = 10
    firing

 }
 

class Transform extends Component {
    name = "Transform"
    x = 0
    y = 0
    sx = 1
    sy = 1
    r = 0
 }

 class Rectangle extends Component{
    name = "Rectangle"
    fillStyle = "red"
    start(){

    }
    draw(ctx){
        ctx.fillStyle = this.fillStyle
        ctx.beginPath()
        ctx.fillRect(this.transform.x,this.transform.y,this.transform.sx,this.transform.sy)
    }

 }


 



let canvas = document.querySelector("#canv")
let ctx = canvas.getContext("2d")

let keysDown = []
let mouseX
let mouseY

document.addEventListener("keydown", keyDown)
document.addEventListener("keyup", keyUp)

/*
document.addEventListener("mousedown",mouseDown)
document.addEventListener("mouseup",mouseUp)
document.addEventListener("mousemove",mouseMove)
*/

let scene = 0

let pause = false

function mouseDown(e) { }

function mouseUp(e) { }

function mouseMove(e) { }

function keyUp(e) {
    keysDown[e.key] = false
    if (e.key == "p") {
        pause = !pause
    }
}

function keyDown(e) {
    keysDown[e.key] = true

    //Prevent Scrolling 
    if (e.key == " ") {
        e.preventDefault()
    }
}


function engineUpdate() {
    if(pause) return
    let scene = SceneManager.getActiveScene()
    if(SceneManager.changedSceneFlag && scene.start){
        scene.gameObjects = []
        scene.start()
        SceneManager.changedSceneFlag = false
    }

    for(let gameObject of scene.gameObjects){
        for(let component of gameObject.components){
            if(component.start && !component.started){
                component.start()
                component.started = true
            }
        }
    }

    //destroy code here

    for(let gameObject of scene.gameObjects){
        for(let component of gameObject.components){
            if(component.update){
                component.update()
            }
        }
    }
 }

function engineDraw() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let scene = SceneManager.getActiveScene()

    for(let gameObject of scene.gameObjects){
        for(let component of gameObject.components){
            if(component.draw){
                component.draw(ctx)
            }
        }
    }
 }

function start(title) {
    document.title = title
    function gameLoop() {
        engineUpdate()
        engineDraw()
    }

    setInterval(gameLoop, 1000 / 25)
}