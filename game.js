class Game{
    constructor(){
        
    }
    getState(){
        var gameStateREF = database.ref('gameState');
        gameStateREF.on("value", function(data){
            gameState = data.val();
        })
    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }
    async start(){
        if(gameState===0){
            player = new Player();
            //player.getCount();
            var playerCountREF= await database.ref('playerCount').once("value");
            if(playerCountREF.exists()){
                playerCount = playerCountREF.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }
    }
    play(){
        form.hide();
        textSize(9);
        text("Game Start",120,100);
        player.getPlayerInfo();
        if(allPlayers!== undefined){
            var displayPos = 120
            for(var plr in allPlayers){

            if(plr === "player" + player.index){
                fill("red");
            }
            else{
                fill("black");
            }
            displayPos = displayPos+20;

            textSize(1);
            text(allPlayers[plr].name+": " + allPlayers[plr].distance,120,displayPos)
        }
    }
    
    if(keyDown(UP_ARROW)&& player.index !== null){
    player.distance = player.distance+15;
    player.update();
}
}
}
