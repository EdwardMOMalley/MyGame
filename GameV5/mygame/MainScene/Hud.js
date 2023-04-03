class Hud extends Component{
    start(){
        this.timer = GameObject.getObjectByName("TimerObject").getComponent("TimerComponent")
        this.player = GameObject.getObjectByName("PlayerObject")
        this.inventory = this.player.getComponent("PlayerInventory").inv
        this.maxHitpoints = this.player.getComponent("PlayerController").hitpoints
        this.weapon = this.player.getComponent("PlayerController").weapon
        this.xp = this.player.getComponent("PlayerController").xp
        this.xpToLevel = this.player.getComponent("PlayerController").XpToLevel
        this.level = this.player.getComponent("PlayerController").level
        this.map = GameObject.getObjectByName("floorObject")
        this.mapSize = this.map.getComponent("floorComponent").size
        this.margin = this.map.getComponent("floorComponent").margin
        this.transform.y = this.margin*2 + this.mapSize
        this.transform.x = this.margin+5

    }
    update(){
        this.hitpoints = this.player.getComponent("PlayerController").hitpoints
        this.xp = this.player.getComponent("PlayerController").xp
        this.level = this.player.getComponent("PlayerController").level
        this.ammo = this.player.getComponent("PlayerController").ammo
        this.capacity = this.player.getComponent("PlayerController").capacity
    }
    draw(ctx){

        //Borders
        ctx.fillStyle = "black"
        ctx.fillRect(0,this.margin,this.margin,this.mapSize)
        ctx.fillRect(0,0,this.mapSize+this.margin,this.margin)
        ctx.fillRect(this.mapSize+this.margin,0,this.margin,this.mapSize+this.margin)
        ctx.fillRect(0,this.mapSize+this.margin,this.mapSize+this.margin*2,150)

        //Main weapon
        ctx.fillStyle = "white"
        ctx.font = "20px helvettica"
        ctx.fillText("Weapon:      "+this.weapon +"(" +this.ammo+"/"+this.capacity+")",this.transform.x,this.transform.y)



        // Inventory
        ctx.fillStyle = "white"
        ctx.font = "20px helvettica"
        ctx.fillText("Inventory:",this.transform.x,this.transform.y+50)
        this.incX = 1
        this.incY = 0
        this.inventory.forEach(item => {
            ctx.fillText(item,this.transform.x + this.incX*100,this.transform.y+50 + this.incY*40)
            this.incX++
            if(this.incX == 4){
                this.incY++
                this.incX = 1
            }
        })

        // Health Bar
        ctx.fillStyle = "maroon"
        ctx.fillRect(this.mapSize+this.margin*1.5-20,this.margin+this.mapSize,40,10)
        ctx.fillRect(this.mapSize+this.margin*1.5-20,this.margin-10,40,10)
        ctx.font = "35px helvettica"
        if(this.hitpoints >=100){
            ctx.fillText(this.hitpoints,this.mapSize+this.margin*2-54,this.margin+this.mapSize+50)
        }
        if(this.hitpoints >=10 && this.hitpoints <100){
            ctx.font = "40px helvettica"
            ctx.fillText(this.hitpoints,this.mapSize+this.margin*2-45,this.margin+this.mapSize+50)
        }
        if (this.hitpoints<10){
            ctx.font = "40px helvettica"
            ctx.fillText(this.hitpoints,this.mapSize+this.margin*2-35,this.margin+this.mapSize+50)

        }
        ctx.fillStyle = "red"
        ctx.fillRect(this.mapSize+this.margin*1.5-5,this.margin+this.mapSize+(-this.hitpoints*(this.mapSize/this.maxHitpoints)),10,this.hitpoints*(this.mapSize/this.maxHitpoints))

        // XP
        ctx.fillStyle = "teal"
        ctx.fillRect(this.margin/2-20,this.margin+this.mapSize,40,10)        
        ctx.fillRect(this.margin/2-20,this.margin-10,40,10)
        ctx.font = "40px helvettica"
        ctx.fillText(this.level,15,this.margin+this.mapSize+50)
        ctx.fillStyle = "blue"
        ctx.fillRect(this.margin/2-5,this.margin+this.mapSize-(this.mapSize/this.xpToLevel)*this.xp,10,(this.mapSize/this.xpToLevel)*this.xp)


        //Timer
        ctx.font = "20px helvettica"
        ctx.fillStyle = "white"
        ctx.fillText("Time Remaining: " +this.timer.mainTimer,(this.margin*2+this.mapSize)/2-80,this.margin-5)
        ctx.fillStyle = "violet"
        ctx.fillRect(this.margin,this.margin/2-20,10,40)
        ctx.fillRect(this.margin+this.mapSize-10,this.margin/2-20,10,40)
        ctx.fillStyle = "purple"
        ctx.fillRect(this.margin+((this.mapSize/this.timer.goal)*(this.timer.goal-this.timer.mainTimer))/2,this.margin/2-5,this.mapSize-(this.mapSize/this.timer.goal)*(this.timer.goal-this.timer.mainTimer),10)
            

    }


}

//100hp
//500px bar

//px div hp = 5
//(-this.hitpoints)*5


//10 xp
//500px bar
//50px*(numofxp) 
//bar/xp*(numofxp)

//X seconds
//500px bar
// bar - (bar div seconds)*secondsElapsed



window.Hud = Hud