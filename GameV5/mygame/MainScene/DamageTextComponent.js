class DamageTextComponent extends Component{


    start(){
        this.subTimer = 25

    }
    update(){     
        if(SceneManager.isPaused){
            if(this.subTimer > 0){
            this.transform.y--
            this.subTimer--
        }
        if(this.subTimer == 0){
            this.parent.destroy()
        }

    }
    }

}

window.DamageTextComponent = DamageTextComponent