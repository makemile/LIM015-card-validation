import validator from "./validator.js";

const buttonValidar = document.getElementById("btnvalidar");
let inputCreditCard = document.getElementById("textcard");
//console.log(inputCreditCard);

buttonValidar.addEventListener("click", (e) => {
  e.preventDefault() 
  let numberCard = inputCreditCard.value; 
  let respuesta = validator.isValid(numberCard);
    console.log(respuesta); //la variable debe explcarse si misma.

  let enmascarar = validator.maskify(numberCard);
  inputCreditCard.value = enmascarar;

  console.log(enmascarar);


  inputCreditCard.classList.remove("incorrect");

  if (isNaN(numberCard)) {
    //entro aqui cuando numberCard no es un numero
    inputCreditCard.classList.add("incorrect");
  } else {
    //numberCard si es un numero y a partir de aqui comienza a hacer la validacion del algoritmo y el maskify
    inputCreditCard.classList.add("correct");

    //validator.inputCreditCard = inputCreditCard;

    
  }
});

console.log(validator);
