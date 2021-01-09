class Player{
    constructor(){
        this.name = null;
        this.distance = 0;
        this.index = null;
    }

    getCount(){
        var ref = database.ref("playerCount");
        ref.on("value",function(data){
        playerCount = data.val();
        })
    }

    updateCount(count){
        database.ref("/").update({
            playerCount:count
        });
    }

    update(){
        var playerIndex = "players/player"+this.index;
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        });
    }

    static getPlayerInfo(){
        var ref = database.ref("players");
        ref.on("value",(data)=>{
            allPlayers = data.val();
        })
    }
}