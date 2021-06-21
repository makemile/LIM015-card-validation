import validator from "./validator.js";

const buttonValidar = document.getElementById("btnvalidar"); 
let inputCreditCard = document.getElementById("textcard");



buttonValidar.addEventListener("click", (e) => {
  e.preventDefault()

  
  let numberCard = inputCreditCard.value;
  let respuesta = document.getElementById("respuesta"); 

  let resultado = validator.isValid(numberCard);
  inputCreditCard.value= resultado;


  let enmascarar = validator.maskify(numberCard);
  inputCreditCard.value = enmascarar;

/*imprimir el mensaje true else*/

  validator.isValid(numberCard);
  
  if (validator.isValid(numberCard) == true) {

    respuesta.innerHTML = "su numero de tarjeta es correcto";
  }else{
    respuesta.innerHTML = "su numero de tarjeta es incorrecto";
  }

});
