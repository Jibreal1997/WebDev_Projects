let p1Display = document.querySelector('#p1Display');
let p2Display = document.querySelector('#p2Display');

let p1Button = document.querySelector('#p1Button');
let p2Button = document.querySelector('#p2Button');
let resetButton = document.querySelector('#reset');
let gameSelect = document.querySelector('#games');

let p1score = 0;
let p2score = 0;
let gameScore = 0;

p1Button.addEventListener('click', function ()
{   
    if (p1score == gameScore || p2score == gameScore) {                                     // Game winning condition player1
        p1Display.textContent = p1score;

        if (p1score > p2score)
        { 
            p1Display.style.color = "green";
            p2Display.style.color = "red";
        }

    }

    else
    { 
        p1score += 1;
        p1Display.textContent = p1score;
    }
 })

p2Button.addEventListener('click', function () {
    
    if (p1score == gameScore || p2score == gameScore) {                                    // Game winning condition player2
        p2Display.textContent = p2score;
        
        if (p1score < p2score)
        { 
            p1Display.style.color = "red";
            p2Display.style.color = "green";
        }
    }
     
    else
    { 
        p2score += 1;
        p2Display.textContent = p2score;
    }
})

resetButton.addEventListener('click', function ()
{ 
    p1score = 0;
    p2score = 0;

    p1Display.textContent = p1score;
    p2Display.textContent = p2score;

    p1Display.style.color = "black";
    p2Display.style.color = "black";

})

gameSelect.addEventListener('change', function ()
{ 
    gameScore = this.value;
})
 
