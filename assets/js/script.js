let qI = 0;
let clockId;
let time = 60;
const main = document.querySelector('main');
const questions = [
    {
        Q: 'Commonly used data types NO NOT include:',
        A: ['1. strings','2. booleans','3. alerts','4. numbers'],
        C: 2
    },
    {
        Q: 'The condition in an if/else statement is enclosed within ____.',
        A: ['1. quotes','2. curly brackets','3. parenthesis','4. square brackets'],
        C: 1
    },
    {
        Q: 'Arrays in Javascript can be used to store ___.',
        A: ['1. numbers and strings','2. other arrays','3. booleans','4. all of the above'],
        C: 3
    },
    {
        Q: 'String values must be enclosed with ____ when being assigned to variables.',
        A: ['1. commas','2. curly brackets','3. quotes','4. parenthesis'],
        C: 2
    },
    {
        Q: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        A: ['1. Javascript','2. terminal/bash','3. for loops','4. console log'],
        C: 0
    }
]
const clock = () => {
    time--;
    if(time<1) {
        clearInterval(clockId);
        time = 0;
    }
    document.querySelector(".time").innerHTML=time
};

const init = () => {
    // start Timer
    clockId = setInterval(clock,1000);
    // hide instruction section
    document.getElementById("start-page").style.display = "none";
    // show questions section
    document.getElementById("display-questions").style.display = "block";
    // call displayQuestion Func to display questions
    displayQuestion();
};

function displayQuestion() {
    // to display question on questions element.
    // document.getElementById('questions').textContent = questions[qI].Q;
    // for(var i = 0; i < A.length; i++){
        // Create button element
        // document.createElement('button')
        // Assign a Question value into the button element.
        var questions
        // assign evenListener into each button or delegate event listener <== assign a event function into answers button.
        // append the button into buttons <div id="buttons"></div>
    }
// }

// decalre eventListener func. for answers button
function onclickAnswers(event){
    // inside event.target, it has anwser button element.
    // compare the answer that user clicked with correct anwer using "if statement"
    // if true, do something, else do something
    // increase qI++
    // call displayQuestion() function. then you can display next question.

}

document.querySelector('.start').addEventListener('click',init);