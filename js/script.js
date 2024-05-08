

let emailInput = document.querySelector('.email');
let submit = document.querySelector('.arrow');
let form = document.querySelector('.section_input');
let emailRegex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
let warning = document.querySelector('.warning');

// click-is magivrad vwert submits ro imushaos submitis dacheraze da ara clickze
form.addEventListener('submit', (event)=> {
 
  // gverdi ar darefreshdeba
  event.preventDefault();

  let emailValue = emailInput.value;
  console.log(emailValue);
  
  // vamowmebt emailis chanaweria sworia tu ara
  let valid = emailRegex.test(emailValue);
  console.log(valid);

  let newPar = document.querySelector('.newPar');
  let node = document.createTextNode('Please provide a valid email');
  

  if(valid == false) {
    newPar.appendChild(node);
    emailInput.style.border = "2px solid #F96464";
    warning.style.display = "block";
  }else {
    warning.style.display = "none";
    newPar.style.display = "none";
  }
  
  
});