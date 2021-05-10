class Quiz{
    constructor(){

    }
    display(){
        
    }

    getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
    gameState = data.val();
    })
    }
    
    update(state){
    database.ref('/').update({
    gameState: state
    }); 
    } 

    async start(){
        if (gameState === 0) {
        contestant = new Contestant()
        var contestantCountRef = await database.ref('contestantCount').once("value")
        if (contestantCountRef.exists()) {
        contestantCount = contestantCountRef.val()
        contestant.getCount()            
        } 
        question = new Question()
        question.display()           
        }
    }

    play(){
    question.hide()
    background("yellow")
    textSize(30)
    fill("black")
    text("Result of the Quiz",425,60)
    Contestant.getContestantInfo()
    if (allContestants !== undefined) {
    var pos = 230
    textSize(20)
    fill("blue")
    text("Note:Player with the correct answer is highlighted in green",400,200)
    for(var plr in allContestants){
    var correctAns ="2"
    if(correctAns === allContestants[plr].answer){
    fill("green")
    }else{
    fill("red")
    }
    pos += 40
    text(allContestants[plr].name + ": " + allContestants[plr].answer,250,pos)
    }        
    }
    
    }
}