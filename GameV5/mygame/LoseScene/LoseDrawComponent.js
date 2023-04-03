class LoseDrawComponent extends Component {
    draw(ctx) {
        ctx.fillStyle = "black"
        ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height)
        ctx.fillStyle = "white"
        ctx.font = "40px helvettica"
        ctx.fillText("Y O U  L O S E",250,250)
        ctx.fillText("P R E S S  'R'  T O  R E T R Y",250,400)
    }
}

window.LoseDrawComponent = LoseDrawComponent