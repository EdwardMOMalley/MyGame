class EnemyHealthBar extends Component{
    start(){
        



    }
    update(){
        this.maxHitpoints = this.parent.getComponent("BasicEnemyController").maxHitpoints
        this.hp = this.parent.getComponent("BasicEnemyController").hitpoints


    }
    draw(ctx){
        //Max size = transform.sx * hp
        //size = transform.sx * hp

        ctx.fillStyle = "red"
        ctx.fillRect(this.transform.x-this.transform.sx/2,this.transform.y-this.transform.sy/2,this.hp*(this.transform.sx/this.maxHitpoints),4)

    }
}
window.EnemyHealthBar = EnemyHealthBar

