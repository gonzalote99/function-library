const input = document.querySelector('.numberClass');
const para = document.querySelector('p');

function cubed(num) {
  return num * num * num;
}

function squared(num) {
  return num * num;
}

function factorial(num) {
  var x = num;
  while(x > 1) {
    num *= x - 1;
    x--;
      }
      return num;
}

function cubedroot(num) {
  return Math.cbrt(num)
}

function squareRoot(num) {
 return Math.sqrt(num);
}

input.onchange = function() {
  let num = input.value;
  if(isNaN(num)) {
    para.textContent = 'not number';
  } else {
    para.textContent = num + " cube is " + cubed(num) + " . " + num + " squared is " + squared(num) + " . " + num + " factorial is " + factorial(num) + " . " + num + "  squared root is " + squareRoot(num) + " . " ;
  }
};



