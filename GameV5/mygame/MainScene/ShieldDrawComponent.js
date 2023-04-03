class ShieldDrawComponent extends Component{

    draw(ctx){

        ctx.fillStyle = "brown"
        ctx.fillRect(this.transform.x,this.transform.y,this.transform.sx,this.transform.sy)
    }
}

window.ShieldDrawComponent = ShieldDrawComponent