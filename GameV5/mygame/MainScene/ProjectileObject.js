import "./Projectile.js"
class ProjectileObject extends GameObject{
    constructor(transformX,transformY,targetX,targetY) {
        super();
        this.transformx = transformX
        this.transformy = transformY
        this.targetX = targetX
        this.targetY = targetY


      }
    name = "ProjectileObject"
    start(){
        this.transform.sy = 5
        this.transform.sx = 5
        this.transform.x = this.transformx
        this.transform.y = this.transformy
        this.addComponent(new Projectile(this.targetX,this.targetY)) 
        this.addComponent(new Circle("blue"))
 
    }

}

window.ProjectileObject = ProjectileObject


/* import "./Projectile.js"
class ProjectileObject extends GameObject(){
    constructor(amount = 1,transform) {
        super();
        this.amount = amount
        this.transform = transform


      }
    start(){
        this.addComponent(new Projectile(locationX,locationY))
        this.addcomponent(new Rectangle("blue"))
    }
}

window.ProjectileObject = ProjectileObject
 */

