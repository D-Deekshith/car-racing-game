class Game{
    constructor(){}

    getState(){
        var ref = database.ref("gameState");
        ref.on("value",function(data){
            gameState = data.val();
        })
    }

    updateState(state){
        database.ref("/").update({
            gameState:state
        });
    }

    start(){
        if(gameState === 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }

        car1 = createSprite(100,200);
        car1.addImage("car1",car1Img);
        car2 = createSprite(300,200);
        car2.addImage("car2",car2Img);
        car3 = createSprite(500,200);
        car3.addImage("car3",car3Img);
        car4 = createSprite(700,200);
        car4.addImage("car4",car4Img);
        cars = [car1,car2,car3,car4];
    }

    play(){
        form.hide();
        Player.getPlayerInfo();
        if(allPlayers !== undefined){
            background(242,209,107);
            image(trackImg,0,-displayHeight*4,displayWidth,displayHeight*5);
            //var yPosition = 150;
            var xPos = 200;
            var yPos = 0;
            var carIndex = 0;
            for(var plr in allPlayers){
                xPos += 200;
                yPos = displayHeight-allPlayers[plr].distance;
                carIndex++;
                cars[carIndex-1].x = xPos;
                cars[carIndex-1].y = yPos;


                if(carIndex === player.index){
                    push();
                    rectMode(CENTER);
                    strokeWeight(4);
                    stroke("red")
                    noFill();
                    rect(xPos,yPos,50,100)
                    pop();
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[carIndex-1].y;

                }

                //yPosition +=50
                //text(allPlayers[plr].name+" : "+allPlayers[plr].distance,150,yPosition);
            }
        }

        if(player.index !== null && keyDown(UP_ARROW)){
            player.distance = player.distance+50;
            player.update();
        }

        drawSprites();
    }

    end(){}
}