class DamageTextDraw extends Component{
    constructor(text,height){
        super()
        this.text = text
        this.height = height
    }
    draw(ctx){
        ctx.fillStyle = "white"
        ctx.font = "20px helvettica"
        ctx.fillText(this.text,this.transform.x,this.transform.y-this.height/2)
    }
}
window.DamageTextDraw = DamageTextDraw