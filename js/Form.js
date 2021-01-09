class Form{
    constructor(){
        this.title = createElement("h1");
        this.input = createInput("name");
        this.greeting = createElement("h1");
        this.button = createButton("play");
        this.reset = createButton("Reset");
    }
    hide(){
        this.title.hide();
        this.input.hide();
        this.greeting.hide();
        this.button.hide();
    }

    display(){
        
        this.title.html("CAR RACING GAME");
        this.title.position(width-200,height/4);
        
        this.input.position(width-200,height/4+100);
        this.input.size(350,50);
        
        this.button.position(width-200,height/4+200);
        this.button.size(200,40);

        this.reset.position(displayWidth+400,displayHeight/4);
        this.reset.mousePressed(()=>{
            game.updateState(0);
            player.updateCount(0);
            database.ref("players").remove();
        })

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount++;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("hello "+player.name+" !");
            this.greeting.position(width-200,height/4+200);
        });
    }
}