let qI = 0;
let clockId;
let time = 3;
const main = document.querySelector('main');

const clock = () => {
    time--;
    if(time<1) {
        clearInterval(clockId);
        time = 0;
    }
    document.querySelector(".time").innerHTML=time
};

const init = () => {
    const {Q,A,C} = questions[qI];
    clockId = setInterval(clock,1000);
    main.innerHTML = `<h1>${Q}</h1>`;

    A.forEach(ans => {
        main.innerHTML += `<button>${ans}</button>`;
    });
};

document.querySelector('.start').addEventListener('click',init);