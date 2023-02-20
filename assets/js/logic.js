// variables to reference DOM elements
//questions element

let questionsEl = document.querySelector("#questions");

//choices element

//submit button

//start button

let startBtn = document.querySelector("#start");

//timer element

let timerEl = document.querySelector("#time");



//initials element

//feedback element

// variables to keep track of quiz state
//variable for the index for the current question, will need this to increase the index of the questions

//time variable to set the initial time a player will start with

let time = 60; // sets time to 60 seconds 
let timerInt // undefined 

//create a function to start the quiz
  //hide the start screen

  function startQuiz() {
    let startScreen = document.querySelector("#start-screen");
    startScreen.setAttribute("class","hide");

    //un-hide the question element

    questionsEl.removeAttribute("class");

  //start the timer by setting an interval

  // start time variable stored in time

  timerInt = setInterval(() => {
  //show the starting time
    timerEl.textContent = time+" Seconds";
    time--;
    if (time <= 0 ) {
        endQuiz()
    }

  }, 1000);
    
  //call the function to get the questions

//   getQuestions()

  }



  



  

  


//create a function to get the questions
  //get current question object from array
  
  //clear out any old question choices

  //loop over choices

    //create new button for each choice

    //set a class of choice for each choice

    //add a text content of the choices value 

    //attach a click event to each choice

    //display on the page


//create a function to compare the question that was clicked to the answer of the question
  //check if user guessed wrong by comparing the value of the choice to the the answer
  //if the question is wrong, take 10 seconds off the timer
    //add an additional if statement so that if the time goes less than 0 that the time equals 0

    //display new time on the page

    //add text to the feedback element indicating they got it wrong.
    //else make the feedback element indicate they got it correct

  //move to the next question

  //check if we've run out of questions and if they did, end the quiz else call the function to get questions

//create a function to end the quiz

  function endQuiz() {
     //stop the timer
     clearInterval(timerInt);

     //show the end screen

     let endScreenEl = document.querySelector("#end-screen");
     endScreenEl.removeAttribute("class","hide");

     //show the final score

     let finalScore = document.querySelector("#final-score");
     finalScore.textContent = time;

    //hide questions section

    questionsEl.setAttribute("class","hide");
    
  }

 

 

  

  

//create a function to save the scores
  //get value of the initials input

  //check to make sure the value isn't empty
    //get saved scores from localstorage, or if there are none, set to an empty array

    //format new score into an object with a score key and initials key

    //save to local storage

    //redirect to the highscores page

//add click event to the start button to the function that starts the quiz

startBtn.addEventListener("click", startQuiz);

//add click event to the submit button to the function that saves the score