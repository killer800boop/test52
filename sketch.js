var canvas, contestantCount, database, quiz, question, contestant;
var gameState = 0;
var allContestants

function setup(){
  canvas = createCanvas(950,400);
  database = firebase.database()
  mint = new Quiz()
  mint.start()
  mint.getState() 
}


function draw(){
  background("pink");

  if (contestantCount === 2) {
  mint.update(1)    
  }
  if(gameState === 1){
  clear()
  mint.play()
  }
}
