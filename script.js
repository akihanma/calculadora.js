//calculadora simples

const display = document.getElementById("result");
const buttons = document.querySelectorAll("button");

let currentNumber = "";
let firstNumber = null;
let operator = null;

function clear() // função que limpa todos os valores da calculadora 
{
  currentNumber = "";
  firstNumber = null;
  operator = null;
  display.textContent = "0";
}

function operate() // função que realiza a operação entre os dois números
 {
  let result;
  const secondNumber = parseFloat(currentNumber);  // converte o segundo número digitado para float
  if (operator === "+") {
    result = firstNumber + secondNumber;
  } else if (operator === "-") {
    result = firstNumber - secondNumber;
  } else if (operator === "*") {
    result = firstNumber * secondNumber;
  } else if (operator === "/") {
    result = firstNumber / secondNumber;
  }
  display.textContent = result;
  currentNumber = result.toString();
  operator = null;
}

function handleButtonClick(event) // função que trata o evento de clique em um botão
 {
  const buttonValue = event.target.value;
  if (buttonValue === "AC") // se o botão clicado for AC, chama a função clear()
   {
    clear();
  } else if (buttonValue === "+" || buttonValue === "-" || buttonValue === "*" || buttonValue === "/") // se o botão clicado for um operador, armazena o operador e o primeiro número
  {
    operator = buttonValue;
    firstNumber = parseFloat(currentNumber);
    currentNumber = "";
  } else if (buttonValue === "=") // se o botão clicado for o de igual, chama a função operate()
   {
    if (operator === null) // verifica se há um operador definido antes de chamar a função operate()
    {
      return;
    }
    operate();
  } else // se o botão clicado for um número, adiciona o número ao valor atual
   {
    currentNumber += buttonValue;
    display.textContent = currentNumber;
  }
}

buttons.forEach(button => button.addEventListener("click", handleButtonClick)); // adiciona um listener de clique em cada botão da calculadora e chama a função handleButtonClick() quando um botão for clicado
