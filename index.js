const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
console.log(colors);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};



let idx = 0;
let idInterval = null;

let mainNumber = () => {
    for (let i = 0; i < colors.length; i += 1) {
    
        idx = randomIntegerFromInterval(0, colors.length-1);
    
         console.log(idx);
        console.log(colors[idx]);
        bodyEl.style.color = colors[idx];
        
        break;
        
      
    };
};


 
  console.log(idx);

 idInterval =  setInterval(mainNumber, 1000,colors);
console.log(idInterval);
 clearInterval(idInterval);



const bodyEl = document.querySelector('body');
const BtnEl = document.querySelectorAll('button');
const startBtnEl = BtnEl[0];
const stopBtnEl = BtnEl[1];

console.log(startBtnEl);
console.log(stopBtnEl);

const pushStart = () => {
    bodyEl.classList.add('active');
    mainNumber();
}

const pushStop = () => {
    bodyEl.classList.remove('active')
    clearInterval(idInterval);
}





console.log(bodyEl);


    startBtnEl.addEventListener('click', () =>  setInterval(pushStart, 1000));

    stopBtnEl.addEventListener('click', pushStop);


