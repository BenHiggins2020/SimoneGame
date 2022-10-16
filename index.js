
//setup audio files
var wrongAudio = new Audio("sounds/wrong.mp3");


// Button Sequence (Array)
var sequence = new Array();
var playerSequence = new Array();
var index = 0;


// key listeners
$(document).keypress(function(){
    //begin game
    $("h1").text("Begin!!")
    begin() 
    
    //change title to level number
})

$(".green").click(function(){
    var greenAudio = new Audio("sounds/green.mp3");
    greenAudio.play();
    this.animate({opacity:.25}, 150);
    getButtonClicked("green");

})


$(".blue").click(function(){
    var blueAudio = new Audio("sounds/blue.mp3");
    blueAudio.play();

    this.animate({opacity:.25}, 150)
    getButtonClicked("blue");
})

$(".red").click(function(){
    var redAudio = new Audio("sounds/red.mp3");
    redAudio.play();
    this.animate({opacity:.25}, 150);
    getButtonClicked("red");

})


$(".yellow").click(function(){
    var yellowAudio = new Audio("sounds/yellow.mp3");
    yellowAudio.play();
    this.animate({opacity:.25}, 150)
    getButtonClicked("yellow");

})

//Game instance 

// need to randomly select a button (use numbers buttons 1,2,3,4)
function randomButtonChoice(){
    var buttonNumber = Math.floor(Math.random() * 4)+1;
    


    switch(buttonNumber){
        case 1:
            greenAudio.play();
            $(".green").animate({opacity:.25}, 150);
            $(".green").animate({opacity:1}, 150);
            console.log("correct button = green");
            return "green";
        case 2:
            blueAudio.play();
            $(".blue").animate({opacity:.25}, 150);
            $(".blue").animate({opacity:1}, 150);
            console.log("correct button = blue");
            return "blue";
        case 3:
            redAudio.play();
            $(".red").animate({opacity:.25}, 150);
            $(".red").animate({opacity:1}, 150);
            console.log("correct button = red");
            return "red";
        case 4:
            yellowAudio.play();
            $(".yellow").animate({opacity:.25}, 150);
            $(".yellow").animate({opacity:1}, 150);
            console.log("correct button = yellow");
            return "yellow";
    }    
}
// need to get the selected button 
function getButtonClicked(btn){
    // need to check if the selected button is right/wrong
    //Check if the level is finished
    playerSequence.push(btn);
   if(check(btn)){

    index ++;
       if(index == sequence.length){
            console.log("you have made it through that level!");
            nextLevel();
       }
   }
   else{
        lose();
   }
}
    // need to check if the selected button is right/wrong

function check(btn){
    console.log("button clicked = "+btn);

    return sequence.at(index) == btn;
    
}

function nextLevel(){
    var level = index +1;
    index = 0;
    //update h1
    $("h1").text("Level "+level);

    //add button value
    //wait before continuing! so that it doesnt go off immediately
    setTimeout(() => {  
        sequence.push(randomButtonChoice());
        console.log("waiting one second!");
        console.log("Correct Sequence: \n");
        console.log(sequence);
        console.log("Player's Sequence: \n");
        console.log(playerSequence);

        playerSequence = new Array();  
    }, 500);


}

function lose(){
    index = 0;
    // wrongAudio.play();
    $("body").css("background-color","red");
    setTimeout(() => {  
        $("body").css("background-color","#011F3F");
    }, 200);

    $("h1").text("Game over! You Lose! ");

    console.log("Correct Sequence: \n");
    console.log(sequence);
    console.log("Player's Sequence: \n");
    console.log(playerSequence);

    sequence = new Array();
    playerSequence = new Array(); 
}

function begin(){
    index = 0; 
    setTimeout(()=>{
        $("h1").text("Level 1");
    },300)
    sequence = new Array();
    playerSequence = new Array();  
    sequence.push(randomButtonChoice());

}

