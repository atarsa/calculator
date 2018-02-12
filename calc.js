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

function operate(a,operator, b){
    if (operator === '+') return add(a,b);
    if (operator === '-') return substract(a,b);
    if (operator === '*') return multiply(a,b);
    if (operator === '/') return divide(a,b);
    }    
var storedValue = [];
var display = document.getElementById('display');
var displayResult = document.getElementById('displayResult');
var displayOperation = document.getElementById('displayOperation');

var handlers = {
        displayValue: function(){
            var targetValue = event.target.value;
            //storedValue.push(targetValue);
            displayOperation.innerHTML = targetValue;
            console.log(targetValue);
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