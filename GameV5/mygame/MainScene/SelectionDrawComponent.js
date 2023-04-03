class SelectionDrawComponent extends Component{
    name = "SelectionDrawComponent"

    start(){

    }

    draw(ctx){
        ctx.fillStyle = "black"
        ctx.fillRect(this.transform.x,this.transform.y,this.transform.sx,this.transform.sy)
        ctx.fillRect(this.transform.x,this.transform.y-50,this.transform.sx,50)
        ctx.fillStyle = "white"
        ctx.font = "20px helvettica"
        ctx.fillText("C H O O S E  A N  U P G R A D E",this.transform.x+this.transform.sx/6,this.transform.y-15)
        ctx.fillRect(this.transform.x+this.transform.sx/3,this.transform.y,1,this.transform.sy)
        ctx.fillRect(this.transform.x,this.transform.y,this.transform.sx,1)
        ctx.fillRect(this.transform.x+this.transform.sx/3*2,this.transform.y,1,this.transform.sy)

    }


}
window.SelectionDrawComponent = SelectionDrawComponent