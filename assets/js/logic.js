// variables to reference DOM elements
//questions element

let questionsEl = document.querySelector("#questions");

//choices element

//submit button

let submitBtn = document.querySelector("#submit");

//start button

let startBtn = document.querySelector("#start");

//timer element

let timerEl = document.querySelector("#time");



//initials element

let initalsEl = document.querySelector("#initials");

//feedback element

let feedbackEl = document.querySelector("#feedback");

// variables to keep track of quiz state
//variable for the index for the current question, will need this to increase the index of the questions

let questionIndex = 0; 

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

  getQuestions()

  }


//create a function to get the questions

  function getQuestions() {

    //get current question object from array
    let currentQuestion = questions[questionIndex];

    let questionsTitle = document.querySelector("#question-title");
    questionsTitle.textContent=currentQuestion.Title;

    let choicesEl = document.querySelector("#choices");
    
    //clear out any old question choices
    choicesEl.textContent=" ";
    
    //loop over choices
    currentQuestion.Choices.forEach(function(choice){
        //create new button for each choice
        let choiceBtn = document.createElement("button");
        //set a class of choice for each choice
        choiceBtn.setAttribute("class","choice");
        choiceBtn.setAttribute("value",choice);
        //add a text content of the choices value    
        choiceBtn.textContent=choice;
        //attach a click event to each choice
        choiceBtn.addEventListener("click",choiceClick);
        //display on the page
        choicesEl.appendChild(choiceBtn);
        
    })

  }
    
 function choiceClick() {

    if (this.value !== questions[questionIndex].Answer) {
        // wrong answer
        time -= 15; // same as time = time - 15
        if (time < 0) {
            time = 0;
        }
        timerEl.textContent = time+" Seconds";
        feedbackEl.textContent="Wrong Choice";
    } else {
        feedbackEl.textContent="Your Right!";
    }

    feedbackEl.removeAttribute("class","hide");

    setTimeout(() => {
        feedbackEl.setAttribute("class","hide");
    }, 1500);

    questionIndex ++;

    if (questionIndex === questions.length) {
        endQuiz();
    } else {
        getQuestions();
    }
    
 }
     
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

function saveScore () {
  var initials = initalsEl.value.trim(); // trim removes the spaces e.g. s r becomes sr
  if (initials !== "") {
    var highscores = JSON.parse(localStorage.getItem("highscores")) || []; // || or do this

    var newScore = {
      scoreKey: time,
      initials: initials
    };

    highscores.push(newScore);

    localStorage.setItem("highscores", JSON.stringify(highscores));

    window.location.href="/highscores.html";

  }
}

  //check to make sure the value isn't empty
    //get saved scores from localstorage, or if there are none, set to an empty array

    //format new score into an object with a score key and initials key

    //save to local storage

    //redirect to the highscores page

//add click event to the start button to the function that starts the quiz

startBtn.addEventListener("click", startQuiz);

//add click event to the submit button to the function that saves the score

submitBtn.addEventListener("click", saveScore);

