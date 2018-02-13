// Get the keys from document
var keys = document.querySelectorAll('[type="button"]');
var operators = ['+','-','x','÷'];
var decimalAdded = false;

for( var i = 0; i < keys.length; i++){
    keys[i].onclick = function(e){
        var display = document.querySelector('#displayResult');
        var inputValue = display.innerHTML;
        var btnValue = this.value;
                
         // if clear key is pressed, erase everything
        if (btnValue === "C"){
            display.innerHTML = "";
            decimalAdded = false;
        }

        // if eval key is pressed, calculate and display the result; use eval()
        else if (btnValue === "="){
            
            var equation = inputValue;
            var lastChar = equation[equation.length-1];
            // replace all instances of x and ÷ with * and /; use regex expressions
            equation = equation.replace(/x/g,'*').replace(/÷/g,'/');

            // check the last character of equation; if an operator or a decimal remove it
            if (operators.lastIndexOf(lastChar) > -1 || lastChar === "." )
                equation = equation.replace(/.$/,''); 
            
            if(equation) 
                display.innerHTML = eval(equation);
            
            decimalAdded = false;    
        }
        // No more than one operator should be added
        else if (operators.indexOf(btnValue) > -1){
            // Operator is clicked
            // Get the last character from equation
            var lastChar = inputValue[inputValue.length-1];

            // Only add operator if input is not empty and there is so operator on the last char
            if(inputValue != "" && operators.indexOf(lastChar) === -1)
                display.innerHTML += btnValue;
            
            // Allow minus sign as first operator
            else if (inputValue === "" && btnValue === "-")
                display.innerHTML += btnValue;
            // Replace the last operator (if exists) with newly passed operator
            if (operators.indexOf(lastChar) > -1 && inputValue.length > 1)
                display.innerHTML = inputValue.replace(/.$/,btnValue)

            decimalAdded = false;    
        }   
        
        // Prevent pressing more than one decimal point
        else if (btnValue === '.'){
            if (decimalAdded === false){
                display.innerHTML += btnValue;
                decimalAdded = true;
            }
        }
        // if DEL button is pressed, delete last input
        else if (btnValue === "DEL"){
            // convert inputValue to array, remove last element, convert back to string
            inputValue = inputValue.split("");
            inputValue = inputValue.pop().
            inputValue = inputValue.join("");
            display.innerHTML = inputValue;
            decimalAdded = false; 
        }
        // if any other key pressed - append it
        else {
            display.innerHTML += btnValue;
        }
    }
}