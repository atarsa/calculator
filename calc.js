function add(a, b){
    return a + b;
};

function substract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function equals(a,operator, b){
    if (operator === '+') return add(a,b);
    if (operator === '-') return substract(a,b);
    if (operator === '*') return multiply(a,b);
    if (operator === '/') return divide(a,b);
    }    
var storedValue = "";
var result = 0;
var display = document.getElementById('display');
var displayResult = document.getElementById('displayResult');
var displayOperation = document.getElementById('displayOperation');

var handlers = {
    displayValue: function(){
        var targetValue = event.target.value;
        storedValue +=targetValue;
        displayOperation.innerHTML = storedValue;
        }, 
    displayOperator: function(){
        var operator = event.target.value;
        if (result != 0){
            displayOperation.innerHTML = result;
            storedValue = result + " " + operator + " ";
            displayOperation.innerHTML = storedValue;
        } 
        storedValue += " " + operator + " ";
        displayOperation.innerHTML = storedValue;
                
    },
    operate: function(){
        var storedValueArray = storedValue.split(" ");
        console.log(storedValueArray);
        if (storedValueArray.length === 3){
            result = equals(storedValueArray[0],storedValueArray[1],storedValueArray[2]);
            displayResult.innerHTML = result;
           
        } 
        
        console.log(result);
        storedValueArray.splice(0,1, result);
        console.log(storedValueArray);
        
        
    }
};

// var view = {
//         displayValue: function(){
//             console.log(event.target.value);
//         },
//         setUpEventListeners: function(){
//             var buttons = document.getElementsByClassName('btn');
//             var numButtons = buttons.length;

//             for(var i = 0; i < numButtons; i++){
//                 buttons[i].addEventListener("click",function(event){
//                     var elementClicked = event.target;
//                 });
//             }
//         }
//     };