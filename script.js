var easyWords=["hello", "shoe", "nice"];
var mediumWords=["medium", "breeze", "claws"];
var hardWords= ["rhyme", "egypt", "exchange"]
var letters =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var lives=6;
var word= "";
var guessedLetters=[];
var missedLetters="Letters missed: ";



function startGame() {
    word="";
    lives=6;
    guessedLetters=[];
    missedLetters="Letters missed: ";

    var difficulty = document.getElementById("difficulty").value;
    difficulty = parseInt(difficulty);
    if (difficulty == 1) {
        word = easyWords[Math.floor(Math.random() * easyWords.length)];
    }
    if (difficulty == 2) {
        word = mediumWords[Math.floor(Math.random() * mediumWords.length)];
    }
    if (difficulty == 3) {
        word = hardWords[Math.floor(Math.random() * hardWords.length)];
    }
    document.getElementById("lives").innerHTML = "Lives: " + lives;
    document.getElementById("missedLetters").innerHTML = missedLetters;
    document.getElementById("click").innerHTML = "Your Guess: "
    console.log(word);
    word=word.split("");
    printWord();


}

function printWord(){
    var result= "";
    for(var i=0; i<word.length;i++) {
        if (guessedLetters.indexOf(word[i]) > -1) {
            result += word[i];
        } else {
            result += "_ "
        }
    }

    document.getElementById("wordSpaces").innerHTML=result;
    return result;
}



function guessLetter(that) {
    if (guessedLetters.indexOf(that.value) <= -1) {

        document.getElementById("click").innerHTML ="Your Guess: " + that.value;
        if (lives > 0) {
            guessedLetters[guessedLetters.length] = that.value;
        }
        var result = printWord();

        if(result.indexOf("_") == -1) {
            lives = "YOU WINNNNNN"

        }

        if (word.indexOf(that.value) <= -1) {
            if (lives > 0) {
                lives -= 1;
            }
            var missed = that.value;
            missedLetters = missedLetters + " " + missed;
        }
        if (lives <= 0) {
            lives = "YOU ARE A LOSER";
        }
        document.getElementById("lives").innerHTML = "Lives: " + lives.toString();
        if(lives>0) {
            document.getElementById("missedLetters").innerHTML = missedLetters;
        }
    }
}

function makeButtons() {
    var b;
    var div = document.getElementById("buttonContainer");
    for(var i =0; i<letters.length;i++) {
        b = document.createElement("button");
        b.setAttribute("onclick","guessLetter(this)");
        b.setAttribute("value", letters[i]);
        b.innerHTML = letters[i];

        div.appendChild(b);

    }
}

function clicked(button){
    document.getElementById("output").innerHTML= button.value
}



function images(){
    if(lives==6){
        return "img src= "
    }
    if(lives==5){
        return "img src= "
    }
    if(lives==4){
        return "img src= "
    }
    if(lives==3){
        return "img src= "
    }
    if(lives==2){
        return "img src= "
    }
    if(lives==1){
        return "img src= "
    }
    if(lives==6){
        return "img src= "
    }
}