document.getElementById("myForm").addEventListener("submit", nameRater);
var score = document.getElementsByClassName("score")[0];
var image = document.getElementsByClassName("result-img")[0];

function nameRater() {
    event.preventDefault();
    var result = document.getElementById("name").value;
    console.log(result);
    if(specialCase(result)){
        specialCases(result);
    } else {
        var rating = Math.floor(Math.random()*11);
        console.log(rating);
        score.textContent = rating+"/10";
        score.style.color = 'white';
        switch(true){
            case (rating < 2): image.src = 'images/husk.png'; break;
            case (rating <= 5): image.src = 'images/sad.jpg'; break;
            case (rating < 10): image.src = 'images/thumbsup.png'; break;
            case (rating === 10): image.src = 'images/perfect.png'; break;
            default: image.src = 'images/thumbsup.png'; break;
        }
        setVisible();
    }
    //specialCases(result);
    
}

function specialCase(result) {
    return (result.toLowerCase() === "mike")||
    (result.toLowerCase() === "taxi")||
    (result.toLowerCase() === "michael");
}

function setVisible(){
    score.style.visibility = 'visible';
    image.style.visibility = 'visible';
}

function specialCases(result){
    if(result.toLowerCase() === "mike" || result.toLowerCase() === "michael") {
        setVisible();
        score.textContent = "100/10";
        score.style.color = 'blue';
        image.src = 'images/MIKE.gif';
    }
    if(result.toLowerCase() === "taxi") {
        setVisible();
        score.textContent = "-10/10";
        score.style.color = 'green';
        image.src = 'images/husk.png';
    }
}
