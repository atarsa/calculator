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
var displayResult = document.getElementById('displayResult');


var handlers = {
    getValue: function(){
        view.getValue();
    }, 
    getOperator: function(){
        view.getOperator();          
    },
    operate: function(){
        view.operate();  
    },
    display : function(){
        view.display();
    },
    clear: function(){
        view.clear();
    }
};

var view = {
    getValue: function(){
        var targetValue = event.target.value;
        storedValue +=targetValue;
        view.display();
    }, 
    getOperator: function(){
        var operator = event.target.value;
        storedValue += " " + operator + " ";
        view.display();
               
    },
    operate: function(){
        var storedValueArray = storedValue.split(" ");
        console.log(storedValueArray);
        if (storedValueArray.length === 3){
            result = equals(parseFloat(storedValueArray[0]),storedValueArray[1],parseFloat(storedValueArray[2]));
            storedValue = result;
            view.display();
       
        }
               
    },
    display : function(){
        if (storedValue === ""){
            displayResult.innerHTML = 0; 
        } else {
            displayResult.innerHTML = storedValue;
            
        }
    },
    clear: function(){
        storedValue = "";
        displayResult.innerHTML = 0;
    },    
    setUpEventListeners: function(){
        var buttons = document.getElementsByClassName('btn');
        var numButtons = buttons.length;

        for(var i = 0; i < numButtons; i++){
            buttons[i].addEventListener("click",function(event){
                var elementClicked = event.target;
                return elementClicked;
            });
        }
    }
};