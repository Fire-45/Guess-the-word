var input1 = "";
var input2 = "";

function nextPage(){
    input1 = document.getElementById("Player1_username").value;
    input2 = document.getElementById("Player2_username").value;
    if((input1 != "")&&(input2 != "")){
    localStorage.setItem("saveUsername1",input1);
    localStorage.setItem("saveUsername2",input2);
    window.location = "game_page.html"
    
    }
}


    

