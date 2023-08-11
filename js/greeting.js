const greeting1 = document.querySelector('.greeting1');
const greeting2 = document.querySelector('.greeting2');


setTimeout(() => {
    greeting1.style.visibility = 'visible';
    greeting1.innerHTML = "Hi! I'm Ai!";
}, 2000);


setTimeout(() => {
    greeting2.style.visibility = 'visible';
    greeting2.innerHTML = "A Junior Developer";
}, 4000);

// setTimeout(() => {
    
   
// }, 10000);

setTimeout(() => {
    greeting1.style.visibility = 'hidden';
    greeting2.style.visibility = 'hidden'; 
}, 30000);




