class GameScene extends Scene {



    start() {
        this.playerSize = 20;
        this.worldSize = 700;
        this.mapXoffset = 0;
        this.mapYoffset = 0;
        this.minX = -this.worldSize / 2;
        this.maxX = this.worldSize / 2;
        this.minY = -this.worldSize / 2;
        this.maxY = this.worldSize / 2;
        this.enemyXoffset = Math.round(Math.random() * (this.maxX - this.minX) + this.minX);
        this.enemyYoffset = Math.round(Math.random() * (this.maxY - this.minY) + this.minY);
        this.enemyX = 50;
        this.enemyY = 50;
        this.timer = 0;

        this.firing = false;
        this.player = [{ x: -this.playerSize / 2, y: -this.playerSize / 2 }]
        this.enemy = [{ x: 0, y: 0, h: 100 }]

    }

    update() {

        //this.minY = -(this.worldSize/2 - (-Math.abs(this.mapYoffset)));
        //this.maxY = (this.worldSize/2 - Math.abs(this.mapYoffset));

        if (this.mapXoffset <= 0) {
            this.minX = (-this.worldSize / 2 + this.mapXoffset - this.playerSize);
            this.maxX = (this.worldSize / 2 + this.mapXoffset - this.playerSize);
        }
        if (this.mapXoffset > 0) {
            this.minX = (-this.worldSize / 2 + this.mapXoffset - this.playerSize);
            this.maxX = (this.worldSize / 2 + this.mapXoffset - this.playerSize);
        }
        if (this.mapYoffset <= 0) {
            this.minY = (-this.worldSize / 2 + this.mapYoffset - this.playerSize);
            this.maxY = (this.worldSize / 2 + this.mapYoffset - this.playerSize);
        }
        if (this.mapYoffset > 0) {
            this.minY = (-this.worldSize / 2 + this.mapYoffset - this.playerSize);
            this.maxY = (this.worldSize / 2 + this.mapYoffset - this.playerSize);
        }
        //Inputs

        //Inputs
        if (keysDown["a"]) {
            if (this.mapXoffset >= this.worldSize / 2 - this.playerSize / 2) {
                this.mapXoffset = this.worldSize / 2 - this.playerSize / 2;
            }
            else {
                this.mapXoffset += 10;
                this.enemyXoffset += 10;
            }

        }
        if (keysDown["d"]) {
            if (this.mapXoffset <= -(this.worldSize / 2 - this.playerSize / 2)) {
                this.mapXoffset = -(this.worldSize / 2 - this.playerSize / 2);
            }
            else {
                this.mapXoffset -= 10;
                this.enemyXoffset -= 10;
            }
        }
        if (keysDown["w"]) {
            if (this.mapYoffset >= this.worldSize / 2 - this.playerSize / 2) {
                this.mapYoffset = this.worldSize / 2 - this.playerSize / 2;
            }
            else {
                this.mapYoffset += 10;
                this.enemyYoffset += 10;
            }
        }
        if (keysDown["s"]) {
            if (this.mapYoffset <= -(this.worldSize / 2 - this.playerSize / 2)) {
                this.mapYoffset = -(this.worldSize / 2 - this.playerSize / 2);
            }
            else {
                this.mapYoffset -= 10;
                this.enemyYoffset -= 10;
            }
        }

        if (keysDown["e"]) {
            if (Math.abs(this.enemy[0].x) < 200 && Math.abs(this.enemy[0].y) < 200) {
                this.firing = true;
                this.enemy[0].h -= 10;
            }

        }
        else { this.firing = false };

        if (keysDown[" "]) {
            if (this.mapXoffset > 0) {
                this.mapXoffset -= 10;

            } else {
                this.mapXoffset += 10;

            }
            if (this.mapYoffset > 0) {
                this.mapYoffset -= 10;

            } else {
                this.mapYoffset += 10;

            }

        }
        if (keysDown["t"]) {
            if (this.enemyXoffset > 0) {
                this.enemyXoffset -= 10;
            } else {
                this.enemyXoffset += 10;

            }
            if (this.enemyYoffset > 0) {
                this.enemyYoffset -= 10;
            } else {
                this.enemyYoffset += 10;

            }

        }


        // Update enemy
        if (this.enemyXoffset > -this.playerSize / 2) {
            this.enemyXoffset -= 4;
        } else {
            this.enemyXoffset += 4;

        }
        if (this.enemyYoffset > -this.playerSize / 2) {
            this.enemyYoffset -= 4;
        } else {
            this.enemyYoffset += 4;

        }

        if (Math.abs(this.enemy[0].x) < 200 && Math.abs(this.enemy[0].y) < 200) {
            this.firing = true;
            this.enemy[0].h -= 10;
        }
        console.log(this.mapXoffset, this.mapYoffset, this.enemyXoffset, this.enemyYoffset);


        if (this.enemy[0].h <= 0) {
            this.firing = false;
            this.timer++;
            if (this.timer >= 1000 / 120) {
                this.enemyXoffset = Math.round(Math.random() * (this.maxX - this.minX) + this.minX);
                this.enemyYoffset = Math.round(Math.random() * (this.maxY - this.minY) + this.minY);
                this.enemy[0].h = 100;
                this.timer = 0;
            }
        }
        this.enemy[0].x = this.enemyXoffset;
        this.enemy[0].y = this.enemyYoffset;

    }

    draw(ctx) {



        ctx.save();
        ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2 - 50);
        //Draw Ground
        ctx.fillStyle = "green";
        ctx.fillRect(-this.worldSize / 2 + this.mapXoffset, -this.worldSize / 2 + this.mapYoffset, this.worldSize, this.worldSize)



        //Draw Player

        ctx.fillStyle = "gray";
        ctx.fillRect(this.player[0].x, this.player[0].y, this.playerSize, this.playerSize);

        ctx.fillStyle = "purple";
        ctx.fillRect(0, 0, 1, 1)

        //Draw enemy
        if (this.enemy[0].h > 0) {
            ctx.fillStyle = "red"
            ctx.fillRect(this.enemy[0].x, this.enemy[0].y, this.playerSize, this.playerSize)
        }


        //Draw laser between player and enemy
        if (this.firing && this.enemy[0].h > 0) {
            ctx.beginPath();
            ctx.moveTo(this.player[0].x + this.playerSize / 2, this.player[0].y + this.playerSize / 2)
            ctx.lineTo(this.enemy[0].x + this.playerSize / 2, this.enemy[0].y + this.playerSize / 2);
            ctx.stroke();
        }

        ctx.restore();
        drawHud(ctx);

    }



}

function drawHud(ctx) {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 20, ctx.canvas.height);
    ctx.fillRect(ctx.canvas.width - 20, 0, 20, ctx.canvas.height)
    ctx.fillRect(0, 0, ctx.canvas.width, 20)
    ctx.fillRect(0, ctx.canvas.height - 200, ctx.canvas.width, 200)
    ctx.fillStyle = "white";
    ctx.fillText("Current weapon - Tendrils", 100, ctx.canvas.height - 100);

}




let gameScene = new GameScene()

SceneManager.addScene(gameScene)