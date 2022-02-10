let calculationDiv : HTMLElement = document.getElementById("calculation-div")!; 

//Number Formation Function by commaa 

/** 
* @description convert input string into comma seperated value
* @function formateNumberWithComma(inputString)
* @param {string} inputString :normal form
* @return {string} outputString :comma seperated value
*/

  function formatNumbersWithComma(input : string) : string {
    return input.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

/** 
* @description Get the value.  
* @function addChar(element)
* @param {html-element} element : it is a value assoiated with button 
*/

  function addChar(element : any) {
    let char : any = element.getAttribute("data-value");
    let currentValue : string = calculationDiv.innerText.replace(/,/g, "");
    currentValue += char;
    if(currentValue.length>25){
      calculationDiv.innerText="Length Overflow";
      alert("Length Overflow");
    }
    else{
    calculationDiv.innerText = formatNumbersWithComma(currentValue);
    }
  }

// Calculation Function

/** 
* @function calculate()
* @description it will calculate the math equation and give output 
*/

  function calculate(): void {
    let calValue : string = calculationDiv.innerText.replace(/,/g, '');
    calculationDiv.innerText = formatNumbersWithComma(eval(calValue).toString());
  }

// BackSpace Function

/** 
* @function backSpace()
* @description it remove the last character from the input string 
*/ 

  function backSpace(): void {
    let calValue : string = calculationDiv.innerText.replace(/,/g, '');
    let calValueLength : number = calValue.length;
    let newcalValue : string = calValue.substring(0, calValueLength - 1);
    calculationDiv.innerText = formatNumbersWithComma(newcalValue);
  }

// ClearScreen Function

/** 
* @function clearScreen()
* @description it clear outputbox(display part)
*/

  function clearScreen(): void {
    calculationDiv.innerText = "";
  }

// Plus Or Minus sign change Function

/** 
* @descriptionit change sign of current input (like plus to minus/ minus to plus)
* @function plusOrMinus() 
*/

  function plusOrMinus() : void{
    let calVal : number = Number(calculationDiv.innerText.replace(/,/g, ''));
    calVal = calVal * -1;
    calculationDiv.innerText = formatNumbersWithComma(calVal.toString());
  }

// Trigonomentry Functions


/**
* @description trigonometry function to calculate sin,cos,tan,cot,sec,cosec
* @function trigonometry(functionname) 
*/

  interface trigonometry {
    (fun : string): void;
  }
  let myFunctionTrigo: trigonometry;

  function trigonometry(fun : string) :void {
    let calValue : number = Number(calculationDiv.innerText.replace(/,/g, ''));
    let result : number = 0;
    switch (fun) {
        case "sin":
            result = Math.sin(calValue); 
            break;
        case "cos":
            result = Math.cos(calValue); 
            break;
        case "tan":
            result = Math.tan(calValue); 
            break;
        case "cot":
            result = 1 / Math.tan(calValue); 
            break;
        case "sec":
            result = 1 / Math.cos(calValue); 
            break;
        case "cosec":
            result = 1 / Math.sin(calValue); 
            break; }
        calculationDiv.innerText = formatNumbersWithComma(result.toString());
  }

// Math Functions

 

/**
* @description calculate the specified math function's value 
* @function mathFunction(function_name)
*/
  interface mathFunction {
  (functionName: string): void;
  }

  let myFunctionMath : mathFunction;
  function mathFunction(functionName : string) :void {
    let calValue : number = Number(calculationDiv.innerText.replace(/,/g, ''));
    let result : number = 0;
    switch (functionName) {
        case 'round':
            result = Math.round(calValue);
            break; 
        case 'floor':
            result = Math.floor(calValue);
            break;
        case 'ceil':
            result = Math.ceil(calValue);
            break;
        case 'trunc':
            result = Math.trunc(calValue);
            break;
    }
    calculationDiv.innerText = formatNumbersWithComma(result.toString());
  }

// Square Function 

/**
* @function calSquare()
* @description calculate the square of the given input value  
*/

  function calSquare() :void{
    let calValue : number = Number(calculationDiv.innerText.replace(/,/g, ''));
    calValue*= calValue;
    calculationDiv.innerText = formatNumbersWithComma(calValue.toString());
  }

// Square Root Function

/** 
* @function calSqrt()
* @description calculate the square root of the given input 
*/

  function calSqrt():void {
    let calValue : number = Number(calculationDiv.innerText.replace(/,/g, ''));
    calculationDiv.innerText = Math.sqrt(calValue).toString();
  }
 
// Absolute Function

/** 
* @function calAbsolute() 
* @description calculate the absolute value of given input 
*/

  function calAbsolute() :void{
    let calValue : number = Number(calculationDiv.innerText.replace(/,/g, ''));
    calculationDiv.innerText = String(Math.abs(calValue));
  }

// Exponent Function

/**
* @function calExp()
* @description calculate the exponent value of the given value 
*/

  function calExp() :void{
    let calValue : number = Number(calculationDiv.innerText.replace(/,/g, ''));
    calculationDiv.innerText = String(Math.exp(calValue));
  }

// Fixed Exponent Function

/** 
* @function fixedExp()
* @description fixed value with exponent values 
*/

  function fixedExp() :void {
    let calValue : number = Number(calculationDiv.innerText.replace(/,/g, ''));
    calculationDiv.innerText = formatNumbersWithComma(calValue.toExponential(3));
  }

// Radian to Degree Function 

/**
* @function radianToDegree()
* @description convert given radiad value into degree 
*/

  function radianToDegree() :void{
    let calValue : number = Number(calculationDiv.innerText.replace(/,/g, ''));
    calValue = calValue * (180 / Math.PI);
    calculationDiv.innerText = formatNumbersWithComma(calValue.toString());
  }

// Factorial Function

/** 
* @function calFactorial()
* @description calculate the factorial value of the given value 
*/

  function calFactorial() : void{
    let calValue : number = Number(calculationDiv.innerText.replace(/,/g, ''));
    let result: number = factorial(calValue);
    function factorial(calValue : any) : any
    {
      if (calValue==1)
        return 1;
      else 
        return calValue* factorial(calValue-1);
    }
    /*for (let i = calValue; i >= 1; i--) {
        result= result *i;
    }*/
    calculationDiv.innerText = result.toString();
  }
 
// Ten Pow Funtion 

/**
* @function calTenPow() 
* @description calculate the value of the power of 10 
*/

  function calTenPow() :void{
    let calValue : number = Number(calculationDiv.innerText.replace(/,/g, ''));
    calculationDiv.innerText = Math.pow(10, calValue).toString();
  }

// Log Function 

/** 
* @function calLog()
* @description calculate the logerithmic value base 10 and display result 
*/

  function calLog() :void{
    let calValue : number = Number(calculationDiv.innerText.replace(/,/g, ''));
    calculationDiv.innerText = Math.log10(calValue).toString();
  }

// Logarithmic base e Function

/** 
* @function calLn() 
* @description calculate the logerithmic value base e and display result 
*/
 
  function calLn() :void {
    let calValue :number = Number(calculationDiv.innerText.replace(/,/g, ''));
    calculationDiv.innerText = Math.log(calValue).toString();
  }
 
// Memory Functions 

/** 
* @description MC, MR, M+, M-, MS Memory functions 
*/

 let memoryValue : number = 0; /** @description  memoryvalue is a memory  which store the memory value */
 let memoryStatus : number = 0; /** @description memorystatus flag is used whether memory is present or not */

// Memory clear Function

/** 
* @description clear  memory values
* @function memoryClear() 
*/

 function memoryClear() : void {
  memoryValue = 0;
  if (memoryStatus == 1) {
    document.getElementById("mc-gray")!.style.color = "gray";
    document.getElementById("mr-gray")!.style.color = "gray";
  }
 }

// Memory Recall Function

/**
* @description calculate the value of memory values and display
* @function memoryRecall() 
*/

function memoryRecall() :void {
  calculationDiv.innerText = formatNumbersWithComma(memoryValue.toString());
  if (memoryStatus == 1) {
    document.getElementById("mc-gray")!.style.color = "gray";
    document.getElementById("mr-gray")!.style.color = "gray";
  }
}

// Memory Plus Function

/** 
* @description add the input value to the memory stack
* @function memoryPlus() 
*/

function memoryPlus() :void{
  let calValue :number = Number(calculationDiv.innerText.replace(/,/g, ''));
  if (calculationDiv.innerText != "") {
      memoryValue += calValue;
      memoryStatus = 1;
  }
  if (memoryStatus == 1) {
    document.getElementById("mc-gray")!.style.color = "black";
    document.getElementById("mr-gray")!.style.color = "black";
  }
  calculationDiv.innerText = "";
}

// Memory Minus Function

/** 
* @description reduse memory value by the givan value
* @function memoryMinus() 
*/

function memoryMinus() : void {
  let calValue : number = Number(calculationDiv.innerText.replace(/,/g, ''));
  if (calculationDiv.innerText != "") {
      memoryValue -= calValue;
      memoryStatus = 1;
  }
  if (memoryStatus == 1) {
    document.getElementById("mc-gray")!.style.color = "black";
    document.getElementById("mr-gray")!.style.color = "black";
  }
  calculationDiv.innerText = "";
}

// Memory Save Function

/**
* @description put the input value into the memory stack
* @function memorySave() 
*/

 function memorySave() :void{
  let calValue :number = Number(calculationDiv.innerText.replace(/,/g, ''));
  if (calculationDiv.innerText != "") {
      calValue = calValue;
      memoryStatus = 1;
  }
  if (memoryStatus == 1) {
    document.getElementById("mc-gray")!.style.color = "black";
    document.getElementById("mr-gray")!.style.color = "black";
}
  calculationDiv.innerText = "";
}
  