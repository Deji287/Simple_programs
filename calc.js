class Calculator {
  constructor(prevTextEl, currentTextEl) {
    this.prevTextEl = prevTextEl;
    this.currentTextEl = currentTextEl;
    this.clear();
  }

  clear() {
    this.current = "";
    this.prev = "";
    this.oper = undefined;
  }

  delete() {
    this.current = this.current.toString().slice(0, -1);
  }

  chooseOper(operation) {
    if (this.current === "") return;
    this.oper = operation;
    this.prev = this.current;
    this.current = "";
    if (this.prev !== "") {
      this.compute();
    }
  }

  appendNum(number) {
    if (number == "." && this.current.includes(".")) return;
    this.current = this.current.toString() + number.toString();
  }

  compute() {
    let result;
    const prevNum = parseFloat(this.prev);
    const currentNum = parseFloat(this.current);
    if (isNaN(prevNum) || isNaN(currentNum)) return;
    switch (this.oper) {
      case "+":
        result = prevNum + currentNum;
        break;
      case "x":
        result = prevNum * currentNum;
        break;
      case "÷":
        result = prevNum / currentNum;
        break;
      case "-":
        result = prevNum - currentNum;
        break;
      default:
        return;
    }
    this.current = result;
    this.oper = undefined;
    this.prev = "";
  }
  getDisplayNum(number) {
    const stringNum = number.toString();
    const integerNum = parseFloat(stringNum.split(".")[0]);
    const decimalNum = stringNum.split(".")[1];
    let integerDisplay;

    if (isNaN(integerNum)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerNum.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }

    if (decimalNum != null) {
      return `${integerDisplay}.${decimalNum}`;
    } else {
      return integerDisplay;
    }
  }

  display() {
    this.currentTextEl.innerText = this.getDisplayNum(this.current);
    if (this.oper != null) {
      this.prevTextEl.innerText = `${this.getDisplayNum(this.prev)} ${
        this.oper
      }`;
    } else {
      this.prevTextEl.innerText = "";
    }
  }
}

const numBtn = document.querySelectorAll("[data-num]");
const operBtn = document.querySelectorAll("[data-oper]");
const deleteBtn = document.querySelector("[data-delete]");
const equalsBtn = document.querySelector("[data-equals]");
const clearBtn = document.querySelector("[data-all_clear]");
const prevTextEl = document.querySelector("[data-prev]");
const currentTextEl = document.querySelector("[data-current]");

const calculator = new Calculator(prevTextEl, currentTextEl);

numBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    calculator.appendNum(btn.innerText);
    calculator.display();
  });
});

operBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    calculator.chooseOper(btn.innerText);
    calculator.display();
  });
});

equalsBtn.addEventListener("click", () => {
  calculator.compute();
  calculator.display();
});

clearBtn.addEventListener("click", () => {
  calculator.clear();
  calculator.display();
});

deleteBtn.addEventListener("click", () => {
  calculator.delete();
  calculator.display();
});
