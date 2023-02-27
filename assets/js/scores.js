let highscoresOl = document.querySelector("#highscores");

let clearBtn = document.querySelector("#clear");

//create a function to show the highscores
    //either get scores from local storage or set an empty array

function showScores() {
    let highscores = JSON.parse(localStorage.getItem("highscores")) || [];

   highscores.forEach(function(score) {
        var liTag = document.createElement("li");
        liTag.textContent = score.initials + " -- " + score.scoreKey;
        highscoresOl.appendChild(liTag);
    });

}

    //sort the highscores by score property in descending order

    //loop through the scores array
        //create li tag for each score

        //display on page

//create a function to clear the scores

function clearHighScores() {
    localStorage.removeItem("highscores");
    window.location.reload();
}



//add click event to the clear button for the function that clear the scores

clearBtn.addEventListener("click",clearHighScores);

//run the first function on page load

showScores();

