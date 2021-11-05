import validator from "./validator.js";

const buttonValidar = document.getElementById("btnvalidar"); 
const inputCreditCard = document.getElementById("textcard");



buttonValidar.addEventListener("click", (e) => {
  e.preventDefault()

  
  let numberCard = inputCreditCard.value;
  const respuesta = document.getElementById("respuesta"); 


  let enmascarar = validator.maskify(numberCard);
  inputCreditCard.value = enmascarar;


    if (validator.isValid(numberCard)) { 
      return respuesta.innerHTML = "su numero de tarjeta es correcto";
    } else {
    return respuesta.innerHTML = "su numero de tarjeta es incorrecto";
  }
});
