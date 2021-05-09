class Question{
    constructor(){
    this.input1 = createInput("Enter your name here");
    this.input2 = createInput("Enter your answer")
    this.title = createElement('h2');
    this.question = createElement('h2')
    this.option1 = createElement('h2')
    this.option2 = createElement('h2')
    this.button = createButton("Submit")
    }

    hide(){
        this.input1.hide();
        this.input2.hide();
        this.title.hide();
        this.button.hide()
    }
    

    display(){
        this.title.html("My Quiz Game");
        this.title.position(350,0);

        this.question.html("Question:- What starts and ends with the letter 'E', but has only one letter? ");
        this.question.position(150,80);

        this.option1.html("1: Everyone ");
        this.option1.position(150,130);

        this.option2.html("2: Envelope ");
        this.option2.position(150,160);

        this.input1.position(150,230)
        this.input2.position(350,230)
        
        this.button.position(310,280)
        this.button.mousePressed(() => {
        this.title.hide();
        this.input1.hide();
        this.input2.hide()
        this.button.hide();
  
        contestant.name = this.input1.value();
        contestant.answer = this.input2.value();
        contestantCount+=1;
        contestant.index = contestantCount
        contestant.update()
        contestant.updateCount(contestantCount);
        })
    }

}