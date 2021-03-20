const question = document.getElementById("question");
const choices= Array.from(document.getElementsByClassName("choice-text"));
//console.log(choices);
 
let currentQuestion={};
let acceptingAnswers=false;
let score=0;
let questionCounter=0;
let availalbeQuestions=[];


let questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript??',
        choice1: '<script>',
        choice2: '<javascript>',
        choice3: '<js>',
        choice4: '<scripting>',
        answer: 1,
    },
    {
        question:
            "What is the correct syntax for referring to an external script called 'xxx.js'?",
        choice1: "<script href='xxx.js'>",
        choice2: "<script name='xxx.js'>",
        choice3: "<script src='xxx.js'>",
        choice4: "<script file='xxx.js'>",
        answer: 3,
    },
    {
        question: " How do you write 'Hello World' in an alert box?",
        choice1: "msgBox('Hello World');",
        choice2: "alertBox('Hello World');",
        choice3: "msg('Hello World');",
        choice4: "alert('Hello World');",
        answer: 4,
    },
    {
        question: " Which type of JavaScript language is",
        choice1: "Object-Oriented",
        choice2: "Object-Based",
        choice3: "Assembly-language",
        choice4: "High-level",
        answer: 2,
    },
    {
        question: "In JavaScript, what is a block of statement?",
        choice1: "Conditional block",
        choice2: "block that combines a number of statements into a single compound statement",
        choice3: "both conditional block and a single statement",
        choice4: "block that contains a single statement",
        answer: 2,
    },
    {
        question: 'Which of the following variables takes precedence over the others if the names are the same?',
        choice1: 'Global variable',
        choice2: 'The local element',
        choice3: 'The two of the above',
        choice4: 'None of the above',
        answer: 2,
    },
    {
        question:"Which of the following type of a variable is volatile?",
        choice1: "Mutable variable",
        choice2: "Dynamic variable",
        choice3: "Volatile variable",
        choice4: "<script file='xxx.js'>",
        answer: 1,
    },
    {
        question: "Which of the following option is used as hexadecimal literal beginning?",
        choice1: "00",
        choice2: "0x",
        choice3: "0X",
        choice4: "Both 0x and 0X",
        answer: 4,
    },
    {
        question: " Which of the following givenfunctions of the Number Object formats a number with a different number of digits to the right of the decimal?",
        choice1: "toExponential()",
        choice2: "toFixed()",
        choice3: "toPrecision()",
        choice4: "High-level",
        answer: 2,
    },
    {
        question: "In JavaScript the x===y statement implies that:",
        choice1: "Both x and y are equal in value, type and reference address as well.",
        choice2: "Both x and y are equal in value, type and reference address as well.",
        choice3: "Both are equal in the value and data type.",
        choice4: "Both are not same at all.",
        answer: 3,
    },
];

const CORRECT_BONUS= 10;
const MAX_QUESTIONS=10;

startGame= () =>{
    questionCounter=0;
    score=0;
    availalbeQuestions=[...questions];
    // console.log(availalbeQuestions);
    getNewQuestion();
};
getNewQuestion = () =>{
    if(availalbeQuestions.length ==0 || questionCounter >MAX_QUESTIONS){
        return window.location.assign('/end.html');
    }
  questionCounter++;
  const questionIndex = Math.floor(Math.random()*availalbeQuestions.length);
  currentQuestion = availalbeQuestions[questionIndex];
  question.innerText= currentQuestion.question;

  choices.forEach(choice =>{
      const number = choice.dataset['number'];
      choice.innerText=currentQuestion['choice' + number]
  });

  availalbeQuestions.splice(questionIndex,1);
  acceptingAnswers=true;
};

choices.forEach(choice =>{
    choice.addEventListener('click',e =>{
        if(!acceptingAnswers) return;
        acceptingAnswers=false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        
        const classToApply= selectedAnswer == currentQuestion.answer?'correct':'incorrect';
        console.log(classToApply);
        
        selectedChoice.parentElement.classList.add(classToApply);
        
        setTimeout( ()=>{
            selectedChoice.parentElement.classList.remove(classToApply); 
            getNewQuestion();
        },3000);
       
    });
});
startGame();
