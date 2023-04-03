class SelectionBoxComponent extends Component{
    name = "SelectionBoxComponent"
    start(){
        this.inv = GameObject.getObjectByName("PlayerObject").getComponent("PlayerInventory").inv


    }

    update(){
        if(mouseClick[0]> this.transform.x && mouseClick[0] <this.transform.x+this.transform.sx){
            if(mouseClick[1] >  this.transform.y && mouseClick[1] <this.transform.y+this.transform.sy){
                SceneManager.unpause()
                this.scene = SceneManager.getActiveScene()
                for(let gameObject of this.scene.gameObjects){
                    if (gameObject.name == "SelectionBoxObject" || gameObject.name == "SelectionObject"){
                        gameObject.destroy()
                    }
                }


            }
        }
    }

}


//Randomly selection an upgrade path -> master inventory
//Randomly selection an eligable upgrade from that path - > depending on master inventories state
//On selection, update inventory and paths

window.SelectionBoxComponent = SelectionBoxComponent