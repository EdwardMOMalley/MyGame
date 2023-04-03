class floorComponent extends Component{
    name = "floorComponent"
    start(){
        this.size = 500
        this.transform.sx = this.size
        this.transform.sy = this.size
        this.margin = 50
        this.color = "green"
    }
    draw(ctx){
        ctx.fillStyle = this.color
        ctx.fillRect(this.margin,this.margin,this.transform.sx,this.transform.sy)
    }
}

window.floorComponent = floorComponent