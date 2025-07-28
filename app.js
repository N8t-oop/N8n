const defaultResult = 0;
let currentResult = defaultResult;
// Comment
/*
This is a multi line comment
*/
function enterNumber(){
  let number = parseInt(userInput.value)
  return number
}
function create_log(operator,result_before,cal_number){
  const calcDescription = `${result_before} ${operator} ${cal_number}`;
  outputResult(currentResult, calcDescription);
}

function add() {
  const entered_number = enterNumber();
  const intial_result = currentResult
  currentResult = currentResult + entered_number;
  calcDescription = create_log("+",intial_result,entered_number)
}
function subtract(){
  const entered_number = enterNumber();
  const intial_result = currentResult
  currentResult = currentResult - entered_number;
  calcDescription = create_log("-",intial_result,entered_number)
}
function multiply(){
  const entered_number = enterNumber();
  const intial_result = currentResult
  currentResult = currentResult * entered_number;
  calcDescription = create_log("*",intial_result,entered_number)
}
function divide(){
  const entered_number = enterNumber();
  const intial_result = currentResult
  currentResult = currentResult / entered_number;
  calcDescription = create_log("/",intial_result,entered_number)
}
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

