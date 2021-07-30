var player_1 = localStorage.getItem("saveUsername1");
var player_2 = localStorage.getItem("saveUsername2");
var question_player = player_1;
var answer_player = player_2;
var P1_score = 0;
var P2_score = 0;
document.getElementById("Player1").innerHTML = player_1 + ":  ";
document.getElementById("Player2").innerHTML = player_2;
document.getElementById("player1_score").innerHTML = P1_score;
document.getElementById("player2_score").innerHTML = P2_score;

document.getElementById("question_player").innerHTML = question_player;
document.getElementById("answer_player").innerHTML = answer_player;

function SEND(){
    get_word = document.getElementById("mainInput").value;
    word = get_word.toLowerCase();
    console.log(word);
    first_letter = word.charAt(1);
    console.log(first_letter);
    middle_letter = word.charAt(Math.floor(word.length / 2));
    console.log(middle_letter);
    Last_letter = word.charAt(word.length - 1);
    console.log(Last_letter);
    remove_firstLetter = word.replace(first_letter,"_");
    remove_middleLetter = remove_firstLetter.replace(middle_letter,"_");
    remove_Last_letter = remove_middleLetter.replace(Last_letter,"_");
    console.log(remove_Last_letter);
    display_question = "<h4>Q. "+remove_Last_letter+"</h4>";
    display_answer = "<h4>A. <input id = 'answer_input'></h4>"
    answer_button = "<button onclick = 'checkAnswer()' >Check</button>"
    document.getElementById("output").innerHTML = display_question + display_answer + answer_button;
    document.getElementById("mainInput").value = "";
}
function checkAnswer(){
    Cinput = document.getElementById("answer_input").value;
    answer = Cinput.toLowerCase();
    if(word == answer){
        if(answer_player == player_1){
            P1_score - P1_score + 1;
            document.getElementById("player1_score").innerHTML = P1_score;
            question_player = player_1;
            answer_player = player_2;
            document.getElementById("question_player").innerHTML = question_player;
            document.getElementById("answer_player").innerHTML = answer_player;

            
            
        } 

        else{
            P2_score = P2_score + 1;
            document.getElementById("player2_score").innerHTML = P2_score;
            question_player = player_2;
            answer_player = player_1;
            document.getElementById("question_player").innerHTML = question_player;
            document.getElementById("answer_player").innerHTML = answer_player;


        }


        
    }
    else{
        if(answer_player == player_1){
            question_player = player_1;
            answer_player = player_2;
            document.getElementById("question_player").innerHTML = question_player;
            document.getElementById("answer_player").innerHTML = answer_player;

            
            
        } 

        else{
            question_player = player_2;
            answer_player = player_1;
            document.getElementById("question_player").innerHTML = question_player;
            document.getElementById("answer_player").innerHTML = answer_player;


        }


    }
    document.getElementById("output").innerHTML = "";
}