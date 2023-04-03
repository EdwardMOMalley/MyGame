class StartDrawComponent extends Component {
    draw(ctx) {
        ctx.fillStyle = "gray"
        ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height)
        ctx.fillStyle = "blue"
        ctx.font = "40px helvettica"
        ctx.fillText("M Y  G A M E",250,250)
        ctx.fillText("P R E S S  'E'  T O  P L A Y",250,400)

    }
}

window.StartDrawComponent = StartDrawComponent