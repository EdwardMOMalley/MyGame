class SelectionBoxDraw extends Component{
    name = "SelectionBoxObject"
    start(){
        this.upgrade = this.parent.upgrade
        console.log(this.upgrade)
    }

    draw(ctx){

        ctx.fillStyle = "black"
        ctx.fillRect(this.transform.x,this.transform.y,this.transform.sx,this.transform.sy)
        ctx.fillStyle = "white"
        ctx.font = "10px helvettica"
        ctx.fillText(this.upgrade.upgradeName,this.transform.x+10,this.transform.y+50)
        ctx.fillText(this.upgrade.upgradeDescription,this.transform.x+10,this.transform.y+100)
    }


}

window.SelectionBoxDraw = SelectionBoxDraw