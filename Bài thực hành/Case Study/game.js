    minHeight = 20;
    maxHeight = 100;
    minWidth = 10;
    maxWidth = 20;
    minGap = 200;
    maxGap = 500;
    gap = randGap();
    let myObstacles = [];   
    function starGame(){
        gamearea.star();
    }
    function everyinterval(n){
        if(gamearea.frame%n ==0)
        return true; 
        return false; 
    }
    function jump(){
        if (player.y==470){
        player.speedY=-2;
    }
    }
    function randGap(){
         return Math.floor(minGap+Math.random()*(maxGap-minGap+1));
    }
    let scoreText={
        x:900,
        y:50,
        update:function(text){
            gamearea.context.font="50px consolas";
            gamearea.context.fillText(text,this.x,this.y);
        }
    }
    let player ={
        x:20,
        y:470,
        speedY:0,
        update:function(){
            gamearea.context.fillRect(this.x,this.y,30,30);
            // let image = new Image();
            // image.src ="<khunglong.png>";
        },
        newPos:function(){
            if(this.y<280) {
                this.speedY=2;
            }
            this.y=this.y+this.speedY;
            if(this.speedY==2 && this.y==470){
                this.speedY =0;
            }
        },
        crashWith:function(obs) {
            if(this.x+30>obs.x && this.x<obs.x+obs.width &&this.y+30>obs.y){
                return true;
            }
            return false;
        }
        
    }
    function obstacle(){
        this.height = Math.floor(minHeight+Math.random()*(maxHeight-minHeight+1));
        this.width = Math.floor(minWidth+Math.random()*(maxWidth-minWidth+1));
        this.x=1200;
        this.y=gamearea.canvas.height-this.height;
        this.draw = function(){
            gamearea.context.fillRect(this.x,this.y,this.width,this.height);
        }
    }

    let gamearea ={
        canvas:document.getElementById("game"),
        star:function(){
            // this.canvas.height =600;
            // this.canvas.width = 1200;
            document.body.insertBefore(this.canvas,document.body.childNodes[0]);
            this.context = this.canvas.getContext("2d");
            this.frame=0;
            this.score=0;
            scoreText.update("Score: 0");
            // myObstacles.push(new obstacle());
            this.interval = setInterval(this.updateGameArea,5);
            window.addEventListener("keydown",jump);
            // let image = new Image();
            // image.src ="<khunglong.png>";
        },
        updateGameArea:function(){
            for(i=0;i<myObstacles.length;i++) {
                if(player.crashWith(myObstacles[i])){
                    gamearea.stop();
                    return;
                }
            }
            gamearea.clear();
            if(everyinterval(gap)){
                myObstacles.push(new obstacle());
                gap = randGap();
                gamearea.frame=0;
            }
            for(i=0;i<myObstacles.length;i++){
                myObstacles[i].x -= 1;
                myObstacles[i].draw();
            }
            player.newPos();
            player.update();
            gamearea.frame += 1;
            gamearea.score += 0.1;
            scoreText.update("Score: "+Math.floor(gamearea.score));
        },
        clear:function(){
            gamearea.context.clearRect(0,0,this.canvas.width,this.canvas.width);

        },
        stop:function(){
            clearInterval(this.interval);
            alert("thua cmnr");
        }
    }