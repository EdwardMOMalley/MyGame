class PlayerReloadBar extends Component{
    name = "PlayerReloadBar"
    start(){
        this.maxAmmo
        this.ammo
    }
    update(){
        this.maxAmmo = this.parent.getComponent("PlayerController").capacity
        this.ammo = this.parent.getComponent("PlayerController").ammo
    }
    draw(ctx){
        if(this.ammo == 0){
            ctx.fillStyle = "white"
            ctx.font = "15px helvettica"
            ctx.fillText("Reloading!",this.transform.x-this.transform.sx,this.transform.y-this.transform.sy)
        }

        ctx.fillStyle = "blue"
        ctx.fillRect(this.transform.x-this.transform.sx/2,this.transform.y-this.transform.sy/2,this.ammo*(this.transform.sx/this.maxAmmo),4)


    }

}

window.PlayerReloadBar = PlayerReloadBar