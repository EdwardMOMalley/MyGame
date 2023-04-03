//imports
import "./SceneManager.js"
import "./Scene.js"
import "./GameObject.js"
import "./Component.js"
import "./Transform.js"
import "./Vector2.js"
import "./Circle.js"
import "./Line.js"
import "./Camera.js"

let pause = false
let canvas = document.querySelector("#canv")
let ctx = canvas.getContext("2d")

let mouseX = 0
let mouseY = 0
let mouse = [0,0]
let mouseClick = [-1,-1]
let keysDown = []

document.addEventListener("keydown",keyDown)
document.addEventListener("keyup",keyUp)
document.addEventListener("mousedown",mouseDown)
document.addEventListener("mouseup",mouseUp)
document.addEventListener("mousemove",mouseMove)

function mouseDown(e){
    mouseClick[0] = e.clientX
    mouseClick[1] = e.clientY

}
function mouseUp(e){
    mouseClick[0] = -1
    mouseClick[1] = -1

}

function mouseMove(e){
    mouseX = e.clientX
    mouseY = e.clientY
    mouse[0] = e.clientX
    mouse[1] = e.clientY
}





function keyUp(e){
    keysDown[e.key] = false
    if(e.key == "p"){
        SceneManager.pause()

    }
    if(e.key == "o"){
        SceneManager.unpause()
    }

}



function keyDown(e){
    keysDown[e.key] = true
    if(e.key == " "){
        e.preventDefault()
    }
}


function engineUpdate(){
    if(pause){
        return
    }

    let scene = SceneManager.getActiveScene()
    if(SceneManager.changeSceneFlag && scene.start){
        let camera = scene.gameObjects[0]
        scene.gameObjects = []
        scene.gameObjects.push(camera)
        scene.start()
        SceneManager.changeSceneFlag = false
    }

    for(let gameObject of scene.gameObjects){
        if(gameObject.start && !gameObject.started){
            gameObject.start()
            gameObject.started = true
        }
    }

    for(let gameObject of scene.gameObjects){
        for(let component of gameObject.components){
            if(component.start && !component.started){
                component.start()
                component.started = true
            }
        }
    }

    let keptGameObjects = []
    for(let gameObject of scene.gameObjects){
        if(!gameObject.markedForDestroy){
            keptGameObjects.push(gameObject)
        }
    }
    
    scene.gameObjects = keptGameObjects
    for(let gameObject of scene.gameObjects){
        for(let component of gameObject.components){
            if(component.update){
                component.update()
            }
        }
    }
}

let aspectRatio = 16/9
let logicalWidth = 300

function engineDraw(){
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let currentAspectRatio = canvas.width/canvas.height
    let offsetX = 0
    let offsetY = 0
    let actualWidth = canvas.width
    if(aspectRatio > currentAspectRatio){
        let desiredHeight = canvas.width/aspectRatio
        let amount = (canvas.height-desiredHeight)/2
        offsetY = amount
    }
    else{
        let desiredWidth = canvas.height * aspectRatio
        let amount = (canvas.width-desiredWidth)/2
        offsetX = amount
        actualWidth -= 2*amount
    }
    let scene = SceneManager.getActiveScene()

    ctx.save()
    ctx.translate(offsetX,offsetY)
    let logicalScale = actualWidth/logicalWidth
    //ctx.translate(ctx.canvas.width/2,ctx.canvas.height/2)
    ctx.scale(logicalScale,logicalScale)
    ctx.translate(-Camera.main.transform.x,-Camera.main.transform.y)
    for(let gameObject of scene.gameObjects){
        for(let component of gameObject.components){
            if(component.draw){
                component.draw(ctx)
            }
        }
    }
    ctx.restore()

    if(aspectRatio > currentAspectRatio){
        let desiredHeight = canvas.width/aspectRatio
        let amount = (canvas.height-desiredHeight)/2
        ctx.fillStyle = "magenta"
        ctx.fillRect(0,0,canvas.width,amount)
        ctx.fillRect(0,canvas.height-amount,canvas.width,amount)
    }
    else{
        let desiredWidth = canvas.height * aspectRatio
        let amount = (canvas.width-desiredWidth)/2;
        ctx.fillStyle = "magenta"
        ctx.fillRect(0,0,amount, canvas.height);
        ctx.fillRect(canvas.width-amount,0,amount, canvas.height);
    }
}

function start(title){
    document.title = title
    function gameLoop(){
        engineUpdate()
        engineDraw()
    } setInterval(gameLoop,1000/25)
}


window.start = start
window.keysDown = keysDown
window.mouse = mouse
window.mouseY = mouseY
window.mouseClick = mouseClick