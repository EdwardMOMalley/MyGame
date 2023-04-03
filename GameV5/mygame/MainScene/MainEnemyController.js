
class MainEnemyController extends Component{
    name = "MainEnemyController"
    start(){
        this.currentEnemies = []
        this.test = 0
        this.subTimer = 0
        this.spawnRate = 25
        this.player = GameObject.getObjectByName("PlayerObject").getComponent("PlayerController")
        this.timer = GameObject.getObjectByName("TimerObject").getComponent("TimerComponent")
    }

    update(){
        if(SceneManager.isPaused){
            this.ratio = this.timer.mainTimer/this.timer.goal

        this.keptEnemies = []
        for(let enemy of this.currentEnemies){
            if(!enemy.markedForDestroy){
                this.keptEnemies.push(enemy)
            }
        }
        this.currentEnemies = this.keptEnemies


        //Enemy - Enemy collision 
         this.currentEnemies.forEach(enemy =>{
            this.currentEnemies.forEach(enemy2 =>{
                if(enemy != enemy2){
                    if(Math.abs(enemy.transform.x-enemy2.transform.x)<enemy.transform.sx/2+enemy2.transform.sx/2){
                        if(Math.abs(enemy.transform.y-enemy2.transform.y)<enemy.transform.sy/2+enemy2.transform.sy/2){
                            if(enemy.transform.x > enemy2.transform.x){
                                enemy.transform.x +=1
                            }
                            if(enemy.transform.x < enemy2.transform.x){
                                enemy.transform.x -=1
                            }
                            if(enemy.transform.y > enemy2.transform.y){
                                enemy.transform.y +=1
                            }
                            if(enemy.transform.y < enemy2.transform.y){
                                enemy.transform.y -=1
                            }
                        }
                    }
                }

            })
        }) 

        //Spawn Enemies basicenemyobject(color,speed,hitpoints,size)
        if(this.subTimer == this.spawnRate){
            if(this.ratio > .9){
                if(this.currentEnemies.length < 3){
                    GameObject.instantiate(new BasicEnemyObject("yellow",4,75,50))
                }
            }
            if(this.ratio> 0.8 && this.ratio <= 0.9){
                if(this.currentEnemies.length < 7){
                    this.spawnRate = 17
                    GameObject.instantiate(new BasicEnemyObject("yellow",4,50,20))
                }
            }
            if(this.ratio <=0.8){
                if(this.currentEnemies.length <15){
                    this.spawnRate = 5
                    GameObject.instantiate(new BasicEnemyObject("yellow",4,50,20))
                }
            } 
            this.subTimer = 0
        }
        this.subTimer++

    }

    }

    handleUpdate(component,eventName){
        if(eventName == "BasicEnemySpawned"){
            this.currentEnemies.push(component.parent)
            BasicEnemyObject.numberOfBasicEnemies++
        }

        if(eventName == "BasicEnemyDestroyed"){
            GameObject.instantiate(new ExperienceObject(1,component.parent.transform))
        }
    }



}

window.MainEnemyController = MainEnemyController