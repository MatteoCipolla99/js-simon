//DOM ELEMENTS

const timerElm = document.getElementById('timer');
const startElm = document.getElementById('start')
const randomNumbersELm = document.getElementById('random-numbers')
const userAnswerELm = document.getElementById('answer')
const confirmElm = document.getElementById('confirm')
const getResultElm = document.getElementById('result')




let counter = 30
timerElm.innerHTML = counter;

let counterRightAnswers = 0;


let pcNumbers = [];
let userNumbers = [];
let rightAnswers = [];

startElm.addEventListener('click',() =>{
   startElm.classList.add('d-none')
   timerElm.classList.remove('d-none')
   randomNumbersELm.classList.remove('d-none')
  // 1. creo il conto alla rovescia
  const interval = setInterval (()=>{
   // a ogni intervallo il mio counter si decrementa  
   counter --
   timerElm.innerHTML = counter;
   // il  timer si deve fermare allo 0 e i numeri devono scomparire
   if(counter===0){
    clearInterval(interval)
    timerElm.classList.add('d-none')
    randomNumbersELm.classList.add('d-none')
    userAnswerELm.classList.remove('d-none')
    confirmElm.classList.remove('d-none')
   }
  
  }, 1000)

  // 2. genero 5 numeri casuali da 1 a 100
  
  for (let i= 0; i < 5; i++){
   pcNumbers.push(Math.floor(Math.random() * 100));
   randomNumbersELm.innerHTML = pcNumbers.join(' ');
  }

 
})

confirmElm.addEventListener('click', () =>{
  event.preventDefault();

const numA = (document.getElementById('numA')).value;
const numB = (document.getElementById('numB')).value;
const numC = (document.getElementById('numC')).value;
const numD = (document.getElementById('numD')).value;
const numE = (document.getElementById('numE')).value;


for (let i = 0; i < 5; i++){
  
  if (pcNumbers.includes(userNumbers[i])===true){
    counterRightAnswers++
  }
  
}

userAnswerELm.classList.add('d-none')
confirmElm.classList.add('d-none')
getResultElm.classList.remove('d-none')
getResultElm.innerHTML+= `Hai indovinato ${counterRightAnswers} numeri!`

})