let qI = 0;
let clockId;
let time = 60;
const main = document.querySelector('main');
const questions = [
    {
        Q: 'Commonly used data types NO NOT include:',
        A: ['1. strings','2. booleans','3. alerts','4. numbers'],
        C: '3. alerts'
    },
    {
        Q: 'The condition in an if/else statement is enclosed within ____.',
        A: ['1. quotes','2. curly brackets','3. parenthesis','4. square brackets'],
        C: '2. curly brackets'
    },
    {
        Q: 'Arrays in Javascript can be used to store ___.',
        A: ['1. numbers and strings','2. other arrays','3. booleans','4. all of the above'],
        C: '4. all of the above'
    },
    {
        Q: 'String values must be enclosed with ____ when being assigned to variables.',
        A: ['1. commas','2. curly brackets','3. quotes','4. parenthesis'],
        C: '3. quotes'
    },
    {
        Q: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        A: ['1. Javascript','2. terminal/bash','3. for loops','4. console log'],
        C: '1. Javascript'
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
    clockId = setInterval(clock,1000);
    document.getElementById("questions").textContent=questions[qI].Q

     for(var i = 0;i<A.length;i++){

     }
};

document.querySelector('.start').addEventListener('click',init);