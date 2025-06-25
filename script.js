alert("If You Reload This Page Your Details Will Be Lost!")


/* ----- Pages & Container to display/hide/set attribute ----- */
const getStarted = document.querySelector(".get-started");
const mainQuiz = document.querySelector(".main-quiz");
const questionAnswers = document.querySelector(".qa-container");
const finalScore = document.querySelector(".final-score");
const timerContainer = document.querySelector(".timer");
const progressBar = document.querySelector(".progress-bar");
const hintButton = document.querySelector(".hint-button");
const hintText = document.querySelector(".hint-text");

/* ----- Buttons ----- */
const startButton = document.querySelector("#start-btn");
const optionButtons = document.querySelectorAll(".option");
const checkButton = document.querySelector(".check-answer");
const nextButton = document.querySelector(".next-question");
const finishButton = document.querySelector(".finish-quiz");
const restartButton = document.querySelector("#restart-btn");
const quitButton = document.querySelectorAll(".quit-quiz");
/* ----- Variables to manipulate innerText ----- */
let myScore = document.querySelector(".my-score");
let totalScore = document.querySelector(".total-score");
let scoreText = document.querySelector(".display-score h3");
let currentQuestion = document.querySelector(".current-question");
let totalQuestions = document.querySelector(".total-questions");
let timer = document.querySelector(".timer span");
/* ----- Initial declaration ----- */
let displayQuiz;
let timerInterval;
let timeUp = document.createElement("h2");
let calculateProgress;
let selectedButton;
let selectedButtonIndex;
let correctAnswerButton;
let correctButtonIndex;
let scorePercent;


/* ----- Quiz questions ----- */
const quizes = {
    easy:[
      {
        question: "What has keys but can't open locks?",
        options: ["Piano", "Computer", "Book", "Key"],
        answers: 0,
        hint: "It's a musical instrument."
    },
    {
        question: "I speak without a mouth and hear without ears. What am I?",
        options: ["Wind", "Echo", "Music", "Water"],
        answers: 1,
        hint: "It repeats what you say."
    },
    {
        question: "What comes once in a minute, twice in a moment, but never in a thousand years?",
        options: ["E", "N", "O", "M"],
        answers: 3,
        hint: "Don’t focus on time."
    },
    {
        question: "What has cities, but no houses; forests, but no trees; and rivers, but no water?",
        options: ["Map", "Globe", "Dictionary", "Story"],
        answers: 0,
        hint: "Used for navigation."
    },
    {
        question: "What belongs to you but others use it more than you do?",
        options: ["Name", "Heart", "Time", "Voice"],
        answers: 0,
        hint: "People call you by this."
    },
    {
        question: "The more you take, the more you leave behind. What am I?",
        options: ["Memories", "Breath", "Footsteps", "Silence"],
        answers: 2,
        hint: "They are found on the ground after walking."
    },
    {
        question: "I'm tall when I'm young, and I'm short when I'm old. What am I?",
        options: ["Tree", "Battery", "Candle", "Pencil"],
        answers: 2,
        hint: "You light it for ambiance."
    },
    {
        question: "What can travel around the world while staying in the same corner?",
        options: ["Satellite", "Stamp", "Wind", "Shadow"],
        answers: 1,
        hint: "It’s attached to letters."
    },
    {
        question: "What disappears as soon as you say its name?",
        options: ["Ghost", "Fear", "Dream", "Silence"],
        answers: 3,
        hint: "Talking breaks it."
    },
    {
        question: "If you have me, you want to share me. If you share me, you don't have me. What am I?",
        options: ["Coin", "Memory", "Secret", "Joke"],
        answers: 2,
        hint: "It’s kept hidden from others."
    },
    {
        question: "Which word is spelled incorrectly in every dictionary?",
        options: ["Incorrectly", "Wrong", "Misspelled", "Irregular"],
        answers: 0,
        hint: "It's a play on the word itself."
    },
    {
        question: "Forward I am heavy, but backward I am not. What am I?",
        options: ["Weight", "Time", "Truck", "Ton"],
        answers: 3,
        hint: "Reverse the spelling!"
    },
    {
        question: "What comes down but never goes up?",
        options: ["Balloon", "Age", "Smoke", "Rain"],
        answers: 3,
        hint: "It falls from the sky."
    },
    {
        question: "If 2=3,3=5,4=4,5=4,then 6=?",
        options: ["5", "4", "6", "3"],
        answers: 3,
        hint: "concentrate on number of letters ."
    },
    {
        question: "I am an odd number .Take away one letter and I become even. what am I?",
        options: ["5", "4", "6", "7"],
        answers: 3,
        hint: "concentrate on  letters of each number."
    },
    {
        question: "which three numbers have same answer whether they are added or multiplied together?",
        options: ["1,3,5", "4,1,2", "1,2,3", "1,3,4"],
        answers: 3,
        hint: "try multiplying and adding the numbers given in option ."
    },
    
],
  medium:[
     {
        question: "Two numbers are in the ratio of 2:9. If their hcf is 19,numbers are:", 
        options: ["6,27", "8,36", "38,171", "20,90"],
        answers: 2,
        
        hint: "multiply both numbers by 19 "
   },
 
    {
        question: " name the first indian satellite to be launched into orbit ?",
        options: ["Rohini", "kalpana", "Bhaskar", "Aryabhata"],
        answers: 3,
        hint: "he is a male."
    },
    {
        question: "Where is the headquarters of National Institute of Oceanography located?",
        options: ["chennai", "goa", "mangalore", "vishakapatnam"],
        answers: 1,
        hint: "it is famous for poie."
    },{
        question: "Who became the first female President of Italy in 2024?",
        options: ["Giorgia Meloni b. Maria", "Elisabetta Alberti", "Emma Bonino", "Roberta Pinnoti"],
        answers: 0,
        hint: "Narendra Modi."
    },
    {
        question: "which indian state became the first  to reach a trillion-dollar economy in 2023?",
        options: ["Maharashtra", "Gujrat", "Tamil Nadu", "Karnataka"],
        answers: 0,
        hint: "bollywood"
    },
    {
        question: "Which of the following indian states border bangladesh?",
        options: ["West Bengal,Assam,Sikkim,Nagaland,Meghalaya,", "West Bengal,Mizoram,Sikkim,Nagaland,Meghalaya", "West Bengal,,Sikkim,Tripura,Mizoram,Manipur", " West Bengal,Assam,Meghalaya,tripura,mizoram"],
        answers: 3,
        hint: "mamtw"
    },
    {
        question: "The intensity of earthquake is measured in?",
        options: ["kilogram", "pascal", "Richter scale", "bar"],
        answers: 2,
        hint:"it is named after a scientist"
    },{
        question: "Which tech company became the first to surpass a market capitalization of $4 trillion in 2024?",
        options: ["Microsoft", "Amazon", "Apple", "Tesla"],
        answers:2 ,
        hint: "Newtons law of gravitation."
    },
    {
        question: "which  is the world,s most visited city in 2023,according to official tourism statistics?",
        options: ["bangkok", "paris", "istanbul", "london"],
        answers: 2,
        hint: "it is famous for blue mosque."
    },
    {
        question: "Which country was largest exporter of weapons in 2024?",
        options: ["united states", "russia", "china", "france"],
        answers: 0,
        hint: "statue of liberty."
    },
  
     ],
  hard:[

  
    {
        question: " A clock strikes the number of times corresponding to the hour it is.if it take 6 seconds to strike the first hour , 12 seconds to strike the second hour , 18 seconds to strike the third hour and so on ,how long will it take to strike 12 hours?",
        options: ["60", "84", "72", "96"],
        answers: 3,
        hint: "consider the pattern of strikes and the time it takes for each strike."
    },
    {
        question: "Ayush has three daughters dhanu, riya, vidhi. His friend Shivam wants to know the ages of his daughters.  Ayush gives him a first hint,. The product of their age is 36. Shivam says this is not enough information Ayush gives him a second hint, The sum of their ages is equal to 13. shivam goes out and looks at the house number and tells “I still do not have enough information to determine the ages”. Ayush admits that Shivam can not guess and gives him the third hint 3. my eldest daughter lives upstairs. Shivam is able to guess after the third hint. Can you guess what are the ages of the three daughters?",
        options: ["1.4,9", "3,3,4", "1,2,18", "2,2,9"],
        answers: 3,
        hint: "look for a pattern in how the numbers increase."
    },
    {
        question: "a bus starts with 14 passengers . at the first stop ,5 passengers get off,and 3 passengers get on .At the second stop ,7 passengers get off,and4 passengers get on .How many passengers are on the bus now ?",
        options: ["5", "16", "12", "9"],
        answers:2 ,
        hint: "focus on the changrs in number of passengers at each stop."
    },
    {
     
        question: "A clock is running  correctly ,but the minute hand is moving backwards.If the hour hand was at 3 o'clock when you first noticed it,how long will it take for the minute hand to catch up to it?",
        options: ["71 minutes", "73 minutes", "62 minutes", "72 minutes"],
        answers:3 ,
        hint: "assuming the clock is running normally."
    },
    {
        question: "You have 5 apples in a basket . you want to give one apple to each of five friends and keep one apple in the basket . how can you do this?", 
        options: ["6,27", "8,36", "3"],
        answers: 2,
        
        hint: " think about the arrangement of the apples."
     }
]
  };

let selectedLevel = "easy";
let currentQuizes = [];

const levelSelect = document.getElementById("level-select");
if (levelSelect) {
  levelSelect.addEventListener("change", function() {
    selectedLevel = this.value;
  });
}


/* ----- Functions to manipulate styles -----*/
const disableButton = (button) => {
  // Make button disabled by adding a disabled attribute to the button
  button.setAttribute("disabled", "");
  // Set cursor style back to default
  button.style.cursor = "auto";
}

const enableButton = (button) => {
  // Enable the button by removing the disabled attribute from the button
  button.removeAttribute("disabled", ""); 
  // Set cursor style to pointer
  button.style.cursor = "pointer";
};

const removeBackgroundStyle = () => {
  // Remove background color of every option button
  optionButtons.forEach(eachButton => {
    enableButton(eachButton);
    eachButton.style.backgroundColor = "";
  });
  
};

const optionClicked = (button) => {
  // Set the selected button to be the option that is clicked
  selectedButton = button;
  // Ensure all option buttons' background color are removed before setting new one below
  removeBackgroundStyle();
  // When any option button is clicked, change button to this color:
  button.style.backgroundColor = "rgba(240, 238, 138, 0.29)";
  // When any option is clicked, enable the check answer button
  enableButton(checkButton);
  checkButton.style.display = "inline"; // <-- Ensure visible!
}
// ADD THIS BLOCK RIGHT HERE:
optionButtons.forEach(button => {
  button.addEventListener("click", function() {
    optionClicked(button);
  });
});


/* ----- Functions to set Timer -----*/
const insertTimerText = () => {
  // When timer countdown to 0, ensure the text shows 0
  timer.innerText = 0;
  // Display a 'Times up!' text
  timeUp.textContent = 'Times up!';
  // Insert the text before the question and answer/options section
  questionAnswers.insertAdjacentElement('beforebegin', timeUp);
  // Align the text to center
  timeUp.style.textAlign = "center";
  // Give this color to the text
  timeUp.style.color = "rgba(255, 32, 32 , 0.8)";
}

const timerCountdown = () => {
  // Every 1000 milliseconds/ 1 second interval, execute this:
  timerInterval = setInterval(() => {
    // If time left is more than 0 second, execute this:
    if(timer.textContent > 0) {
      // Time left should reduce by 1
      timer.innerText--;
    // If time left is less or equal to 0 second, execute this:
    } else if (timer.textContent <= 0) {
      optionButtons.forEach(eachButton => {
        // Disable all option buttons
        disableButton(eachButton);
        // Display correct answer
        displayAnswer();
        // Hide the check answer button and display next question button
        checkButton.style.display ="none";
        nextButton.style.display ="inline";
      })
      // If nothing is selected after time is up execute this:
      if(selectedButton == undefined) {
        // If it is the last question, execute this:
        if(currentQuestion.textContent === totalQuestions.textContent) {
          // Hide next question button and display finish quiz button
          nextButton.style.display ="none";
          finishButton.style.display="inline";
        } else {
          // otherwise, if it's not the last question, display next quesiton button
          nextButton.style.display = "inline";
        }
      }
      insertTimerText();
      // Stop the timer
      clearInterval(timerInterval);
    }
  }, 1000)
}

/* ----- Function to update Progress Bar -----*/
const updateProgressBar = () => {
  // Progress bar 'value' is 1 less than current question because, eg: when you're on question 2, you have only completed 1 question.
  calculateProgress = ((currentQuestion.textContent - 1) / totalQuestions.textContent)*100;
  // Update the progress bar 'value' accordingly
  progressBar.setAttribute("value", calculateProgress);
}

/* ----- Logical process functions -----*/
const startQuiz = () => {

  clearInterval(timerInterval); //when ever we went to next level and again come back the timer moves fast to control it we use this 
  // Get the selected level from the dropdown
  selectedLevel = levelSelect.value;
  // Set currentQuizes to the questions for that level
  currentQuizes = quizes[selectedLevel];

  // Hide the get started button, and display timer
  getStarted.style.display = "none";
  timerContainer.style.display = "inline";
  disableButton(checkButton);

  // Set the total questions to be the quiz questions' length
  totalQuestions.innerText = currentQuizes.length;
  mainQuiz.style.display = "inline";

  timer.innerText = 60;         // <-- Always start timer at 60 seconds if you want to change then change here
  timerCountdown();

  // Reset all option buttons (enable and remove background)
  optionButtons.forEach(eachButton => {
    enableButton(eachButton);
    eachButton.style.backgroundColor = "";
  });
  selectedButton = undefined;

  // Set question to be the first question in the currentQuizes array
  question.innerText = currentQuizes[0].question;
  for (let i = 0; i < optionButtons.length; i++) {
    optionButtons.item(i).innerText = currentQuizes[0].options[i];
  }
  currentQuestion.innerText = 1;
};


const checkAnswer = () => {
  // If current question is the last question, execute this:
  if(currentQuestion.textContent >= currentQuizes.length) {
    // Hide next question and check answer button, and display finish quiz button
    nextButton.style.display="none"
    checkButton.style.display="none"
    finishButton.style.display = "inline"
  } else {
    // If not the last question, hide check answer button and display next button
    checkButton.style.display = "none";
    nextButton.style.display="inline";
  }
  if (selectedButton) {
   selectedButton.style.backgroundColor = "rgba(255,0, 26, 0.3)";
  }
  // Display answer
  displayAnswer();
  // Ensure thet imer countdown is stopped
  clearInterval(timerInterval);
  // Add to score depending on if answered correctly
  addScore();
  // Disable each option button
  optionButtons.forEach(eachButton => {
    disableButton(eachButton)
  });
};


const displayAnswer = () => {
  // Find out the correct answer button where it matches answer in quizes array
  correctAnswerButton = document.querySelector(`[data-index="${currentQuizes[currentQuestion.textContent-1].answers}"]`)
  // Find the correct answer button's index
  correctButtonIndex = currentQuizes[currentQuestion.textContent-1].answers
  // Change the correct answer button to this color
  correctAnswerButton.style.backgroundColor = "rgba(40,247,40,0.3)";
}

const addScore = () => {
  // Find out the index of the selected button
  selectedButtonIndex = selectedButton.getAttribute("data-index")
  // If the selected button is the correct answer, execute this:
  if(selectedButtonIndex == correctButtonIndex) {
    // Increase the score by 1 each time
    myScore.innerText++;
    // Find out the score percentage according to score obtained
    scorePercent = (myScore.textContent / totalQuestions.textContent) * 100
  // If it's not the correct answer, then just leave it as it is
  } else {
    myScore;
  }
  // If score percentage is less than 50
  if(scorePercent < 50 || myScore.textContent == 0) {
    // Display text 'Better luck next time!'
    scoreText.innerText = 'Better luck next time!'
  // If score percentage is more than or equal to 50, then show text below
  } else {
    scoreText.innerText = "Well done, you nailed it!"
  }
};

const nextQuestion = () => {

    clearInterval(timerInterval); //when ever we went to next level and again come back the timer moves fast to control it we use this 

  // Display the main quiz content
  mainQuiz.style.display = "inline";
  // Remove the 'Times Up!' text
  timeUp.textContent = "";
  // Reset time left to 60
  timer.innerText = 60;
  // hide the next question button and display check answer button
  nextButton.style.display = "none";
  checkButton.style.display = "inline";
  // Increase current question by 1 everytime
  currentQuestion.innerText++;
  // Disable check answer button
  disableButton(checkButton);
  // Update progress bar accordingly
  updateProgressBar();
  // Start timer countdown
  timerCountdown();
  // Set question to be the correct question form the quizes array
  question.innerText = currentQuizes[currentQuestion.textContent - 1].question;
  // Change all option buttons to the appropriate text
  for(i = 0; i < optionButtons.length; i++) {
    optionButtons.item(i).innerText = currentQuizes[currentQuestion.textContent - 1].options[i]
  }
   hintText.style.display = "none";
   hintButton.disabled = false;
};

const restartQuiz = () => {

   clearInterval(timerInterval); //when ever we went to next level and again come back the timer moves fast to control it we use this 
  // Reset score and current question to 0, time left to 60
  myScore.innerText = 0;
  currentQuestion.innerText = 1;
  timer.innerText = 60;

  selectedButton = undefined; // Reset selected button
  scoreText.innerText = "Well done!"; // Reset score text
  // Enable each option button, and remove backgound color
  optionButtons.forEach(eachButton => {
    enableButton(eachButton)
    removeBackgroundStyle(eachButton)
  });
  // Display check answer button, hide finish quiz button and final score content
  checkButton.style.display = "inline";
  finishButton.style.display="none";
  finalScore.style.display="none";
  chooseLevelBtn.style.display = "none";

  const levelSelect = document.getElementById("level-select");
  if (levelSelect) {
    levelSelect.querySelector('option[value="medium"]').disabled = true;
    levelSelect.querySelector('option[value="hard"]').disabled = true;
  }

  // Update progress bar accordingly and start quiz
  updateProgressBar();
  startQuiz();
}


/* ----- Buttons event listeners -----*/
// When get started button is clicked, execute this:
startButton.addEventListener("click", startQuiz);

// When check answer button is clicked, execute this:
checkButton.addEventListener("click", checkAnswer);

nextButton.addEventListener("click", () => {
  nextQuestion();
  removeBackgroundStyle();
  optionButtons.forEach(eachButton => {
    enableButton(eachButton)
  })
});
// When finish quiz button is clicked
const chooseLevelBtn = document.getElementById("choose-level-btn");

finishButton.addEventListener("click", () => {
  timeUp.textContent = '';
  finalScore.style.display = 'flex';
  mainQuiz.style.display = "none";
  totalScore.innerText = totalQuestions.textContent;
  clearInterval(timerInterval);

  function unlockLevels() {
    const levelSelect = document.getElementById("level-select");
    if (!levelSelect) return;
    if (selectedLevel === "easy" && Number(myScore.innerText) >= 2) {
      levelSelect.querySelector('option[value="medium"]').disabled = false;
    }
    if (selectedLevel === "medium" && Number(myScore.innerText) >= 4) {
      levelSelect.querySelector('option[value="hard"]').disabled = false;
    }
  }

  // Level progression logic
  if (selectedLevel === "easy" && Number(myScore.innerText) >= 2) {
    unlockLevels();
    chooseLevelBtn.textContent = "Continue to Medium Level";
    chooseLevelBtn.style.display = "inline-block";
    chooseLevelBtn.onclick = () => {
      selectedLevel = "medium";
      levelSelect.value = "medium"; // keep dropdown in sync
      myScore.innerText = 0;
      chooseLevelBtn.style.display = "none";
      startQuiz();
    };
    return;
  }
  if (selectedLevel === "medium" && Number(myScore.innerText) >= 4) {
    unlockLevels();
    chooseLevelBtn.textContent = "Continue to Hard Level";
    chooseLevelBtn.style.display = "inline-block";
    chooseLevelBtn.onclick = () => {
      selectedLevel = "hard";
      levelSelect.value = "hard"; // keep dropdown in sync
      myScore.innerText = 0;
      chooseLevelBtn.style.display = "none";
      startQuiz();
    };
    return;
  }
   
  // If not enough correct, restart the level
  if (selectedLevel === "easy" && Number(myScore.innerText) < 2) {
    alert("You need at least 2 correct to move to Medium. Try again!");
    restartQuiz();
    return;
  }
  if (selectedLevel === "medium" && Number(myScore.innerText) < 4) {
    alert("You need at least 4 correct to move to Hard. Try again!");
    restartQuiz();
    return;
  }

  // If hard level or finished, show the Choose Level button
  chooseLevelBtn.textContent = "Choose Level";
  chooseLevelBtn.style.display = "inline-block";
  chooseLevelBtn.onclick = () => {
    finalScore.style.display = "none";
    getStarted.style.display = "flex";
    chooseLevelBtn.style.display = "none";
  };
});

chooseLevelBtn.addEventListener("click", () => {
  finalScore.style.display = "none";
  getStarted.style.display = "flex";
  chooseLevelBtn.style.display = "none";
});
// When restart button is clicked, ;execute this:
restartButton.addEventListener("click", restartQuiz);

quitButton.forEach(button => {
  button.addEventListener("click", () => {
    getStarted.style.display = "flex";
    mainQuiz.style.display = "none";
    finalScore.style.display = "none";
    
  });
});

// hint button 
hintButton.addEventListener("click", () => {
  const currentIdx = currentQuestion.textContent - 1;
  const hint = currentQuizes[currentIdx].hint;
  hintText.textContent = hint;
  hintText.style.display = "block";
  hintButton.disabled = true;
});





