const firstNum = document.querySelector("#firstNum");
const secondNum = document.querySelector("#secondNum");
const thirdNum = document.querySelector("#thirdNum");
const calculateBtn = document.querySelector("#calculateBtn");

// program to solve quadratic equation

calculateBtn.addEventListener("click", calculate);

function calculate() {
  let x1, x2;
  // take input from the user
  let a = firstNum.value;
  let b = secondNum.value;
  let c = thirdNum.value;

  a = parseFloat(a);
  b = parseFloat(b);
  c = parseFloat(c);

  // calculate D
  let D = b * b - 4 * a * c;

  // code for real and different roots

  if (D > 0) {
    x1 = (-b + Math.sqrt(D)) / (2 * a);
    x2 = (-b - Math.sqrt(D)) / (2 * a);

    // result for different root
    console.log(`The roots of quadratic equation are ${x1} and ${x2}`);
  }

  // code for real and equal roots
  else if (D == 0) {
    root1 = root2 = -b / (2 * a);

    // answer for real and equal roots
    console.log(`The roots of quadratic equation are ${x1} and ${x2}`);
  }

  // code for roots that are not real
  else {
    let rp = (-b / (2 * a)).toFixed(2);
    let ip = (Math.sqrt(-D) / (2 * a)).toFixed(2);

    //  result for result
    console.log(
      `The roots of quadratic equation are ${rp} + ${ip}i and ${rp} - ${ip}i`
    );
  }
}

// to modify later
