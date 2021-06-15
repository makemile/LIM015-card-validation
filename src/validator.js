const validator = {
  isValid: function (creditCardNumber) {
    /*pasar a un array en orden inverso*/

    let digits = creditCardNumber.toString().split().reverse().map(Number); //areglar el digit por for// como hago para que me aparezca uno al lado del otro.

    //ubicar los pares con el operador MOD//

    digits = digits.map((num, i) => {
      if (i % 2 == 1) {
        return num * 2;
      } else {
        return num;
      }
    });

    //identificar los que son >= o igual a 10//

    digits = digits.map((num) => {
      if (num >= 10) {
        return (num -= 9);
      } else {
        return num;
      }
    });

    //console.log(digits);

    //sumar los numeros de las posiciones pares e impares

    let totalSuma = digits.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    });
    //console.log(totalSuma);

    // sean multiplos de 10 //
    if (totalSuma % 10 == 0) {
      return true;
    } else {
      return false;
    }
  },

  //enmascarar los primeros 4 digitos
  maskify: function (creditCardNumber) {
    let replace = creditCardNumber.split("");
    replace = replace.map((num, i) => {
      if (i < replace.length - 4) {
        return "#";
      } else {
        return num;
      }
    });

    let lastNumber = replace.join("");
    return lastNumber;
  },
};

export default validator;
