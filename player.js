class Player{
    constructor(){
this.index = null;
this.distance = 0;
this.name = null;
    }
    getCount(){
var playerCountREF = database.ref('playerCount');
playerCountREF.on("value", function(data){
    playerCount = data.val();

})
    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }
update(name){
    var playerIndex = "players/player"+ this.index;

database.ref(playerIndex).set({
    name:this.name,
    distance:this.distance

})
}
static getPlayerInfo(){
var playerInfoREF = database.ref('players');
playerInfoREF.on("value", (data)=>{
    allPlayers = data.val();
})

}
}