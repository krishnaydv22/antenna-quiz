//declare all variables
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var quizQuestion = document.getElementById("quizQuestion");
var quizImg = document.getElementById("quizImg");
var optionA = document.getElementById("choiceA");
var optionB = document.getElementById("choiceB");
var optionC = document.getElementById("choiceC");
var optionD = document.getElementById("choiceD");
var optionList = [optionA, optionB, optionC, optionD];
var scoreBlock = document.getElementById("scoreBlock");
var scoreMessage = document.getElementById("scoreMessage");
var quizAgain = document.getElementById("quizAgain");
var choices = document.getElementById("choices");
var score = 0;

//questions function so our getQuestion function later can get the right value from array

let questions = [{
    question: "Which of the following is the most common version of the printed antenna?",

    choiceA: "Horn antenna",
    choiceB: " Micro-strip antenna",
    choiceC: "Wire antenna",
    choiceD: " Lens antenna",
    correctAnswer: 2
}, {
    question: "The approxi",

    choiceA: "8π/M",
    choiceB: "12π/M",
    choiceC: "4π/M",
    choiceD: "16π/M",
    correctAnswer: 3
}, {
    question: "The time domain sequence for a Hamming Window is",

    choiceA: "0.54-0.46cos(2πn/M-1)",
    choiceB: "0.5(1-cos(2πn/M-1))",
    choiceC: "1",
    choiceD: "None",
    correctAnswer: 1
}, {
    question: "The time domain sequence for a Hanning Window is",

    choiceA: "0.5(1-cos(2πn/M-1))",
    choiceB: "1",
    choiceC: "0.54-0.46cos(2πn/M-1)",
    choiceD: "None",
    correctAnswer: 1
}, {
    question: " Which of the following defines the rectangular window function of length M-1?",

    choiceA: "w(n)=0, n=0,1,2...M-1 & =1, else where",
    choiceB: "None of the mentioned",
    choiceC: "w(n)=1, n=0,1,2...M-1 & =-1, else where",
    choiceD: "w(n)=1, n=0,1,2...M-1 & =0, else where",
    correctAnswer: 4
}, {
    question: "With an increase in the value of M, the height of each side lobe ____________",

    choiceA: "Do not vary",
    choiceB: "Decreases",
    choiceC: "Increases",
    choiceD: "Does not depend on value of M",
    correctAnswer: 3
}, {
    question: "What is the approximate transition width of a Blackman Window?",

    choiceA: "4π/M",
    choiceB: "12π/M",
    choiceC: "6π/M",
    choiceD: "8π/M",
    correctAnswer: 2
}, {
    question: "Which of the following windows has a time domain sequence h(n)=1−2|𝑛−(𝑀−1)/2|/𝑀−1?",

    choiceA: "Hanning window",
    choiceB: "Hamming window",
    choiceC: "Blackman window",
    choiceD: "Bartlett window",
    correctAnswer: 4
}, {
    question: "The width of each side lobes decreases with an increase in M.",

    choiceA: "True",
    choiceB: "False",
    choiceC: "Both",
    choiceD: "None",
    correctAnswer: 1
}, {
    question: "The peak side lobe value(in db) of a reactangular window is",

    choiceA: "-25",
    choiceB: "-13",
    choiceC: "-31",
    choiceD: "-57",
    correctAnswer: 2
}, ];


var questionIndex = 0;


// getQuestion function

function getQuestion() {

    let q = questions[questionIndex];
    quizQuestion.innerHTML = "<p>Question " +(questionIndex+1) + ": " + q.question + "</p>";
    // quizImg.innerHTML = "<img src=" + q.imgSrc + ">";
    for (let i = 0; i < optionList.length; i++) {
        const optins = optionList[i];
        optins.style.background = "#fff";
        optins.disabled = false;
    }
    optionA.innerHTML = q.choiceA;
    optionB.innerHTML = q.choiceB;
    optionC.innerHTML = q.choiceC;
    optionD.innerHTML = q.choiceD;
    choices.style.display = "block";
}


// start quiz

function beginQuiz() {
    start.style.display ="none";
    getQuestion();
    quiz.style.display = "block";
}

// show score function

function showScore() {
    quiz.style.display = "none";
    scoreBlock.style.display = "block";
    scoreBlock.innerHTML = "<p> You scored " + score + " out of 10!</p>";

    if (score < 4) {
        scoreMessage.innerHTML = "<p>Not so good! Time for some revision.</p>";
    }
    else if (score < 8) {
        scoreMessage.innerHTML = "<p>Pretty good! But still room for improvement.</p>"
    }
    else {
        scoreMessage.innerHTML = "<p>Great work! You really know the concepts!!</p>"
    }
    scoreMessage.style.display = "block";
    quizAgain.style.display = "block";
}


//function to check if answer is correct

function check(answer) {
    console.log(answer);
    if (questionIndex < questions.length - 1) {
        if (answer == questions[questionIndex].correctAnswer) {
            score++;
        }
        else {
            optionList[answer-1].style.background = "#FF0000";
        }
        optionList[questions[questionIndex].correctAnswer-1].style.background = "#008000";
        questionIndex++;
        for (let i = 0; i < optionList.length; i++) {
            const optins = optionList[i];
            optins.disabled = true;
        }
        setTimeout(getQuestion,2000);
    }
    else {
        if (answer == questions[questionIndex].correctAnswer) {
            score++;
        }
        else {
            optionList[answer-1].style.background = "#FF0000";
        }
        optionList[questions[questionIndex].correctAnswer-1].style.background = "#008000";
        choices.style.display = "none";
        for (let i = 0; i < optionList.length; i++) {
            const optins = optionList[i];
            optins.disabled = true;
        }
        showScore();
    }
}

function restartQuiz() {
    start.style.display = "block";
    scoreBlock.style.display = "none";
    scoreMessage.style.display = "none";
    quizAgain.style.display = "none";
    score = 0;
    questionIndex = 0;
}
