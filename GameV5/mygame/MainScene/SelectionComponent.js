
class SelectionComponent extends Component{
    name = "SelectionComponent"
    start(){
        SceneManager.pause()
        this.map = GameObject.getObjectByName("floorObject")
        this.margin = this.map.getComponent("floorComponent").margin
        this.mapSize = this.map.getComponent("floorComponent").size
        this.transform.x = this.margin+this.mapSize/16
        this.transform.y =this.margin+this.mapSize/3
        this.transform.sy = this.mapSize/3
        this.transform.sx = this.mapSize-this.mapSize/8
        this.boxSizeX = this.transform.sx/3
        this.boxSizeY = this.transform.sy
        GameObject.instantiate(new SelectionBoxObject(this.transform,1,this.parent.upgradeTree[0]))
        GameObject.instantiate(new SelectionBoxObject(this.transform,2,this.parent.upgradeTree[1]))
        GameObject.instantiate(new SelectionBoxObject(this.transform,3,this.parent.upgradeTree[2]))




    }

}

window.SelectionComponent = SelectionComponent