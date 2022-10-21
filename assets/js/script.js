let qI = 0;
let clockId;
let time = 60;
const main = document.querySelector('main');
const questions = [
    {
        Q: 'Question 1',
        A: ['a','b','c','d'],
        C: 'c'
    },
    {
        Q: 'Question 2',
        A: ['a','b','c','d'],
        C: 'c'
    },
    {
        Q: 'Question 3',
        A: ['a','b','c','d'],
        C: 'c'
    },
    {
        Q: 'Question 4',
        A: ['a','b','c','d'],
        C: 'c'
    },
    {
        Q: 'Question 5',
        A: ['a','b','c','d'],
        C: 'c'
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