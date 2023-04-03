class WinDrawComponent extends Component {
    draw(ctx) {
        ctx.fillStyle = "black"
        ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height)
        ctx.fillStyle = "white"
        ctx.font = "40px helvettica"
        ctx.fillText("Y O U  W O N",250,250)
        ctx.fillText("P R E S S  'R'  T O  P L A Y  A G A I N",250,400)
    }
}


window.WinDrawComponent = WinDrawComponent