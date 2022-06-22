
function add(a, b) {
    return a + b;
}
function subtract(a,b) {
    return a - b;
}
function multiply(a,b) {
    return a * b;
}
function divide(a,b) {
    return a / b;
}






function getData() {
    var a = parseInt(prompt("Enter the first number"));
    var b = parseInt(("Enter the second number"));
    var operator = prompt("Enter the operator");
    var result = 0;

    if (operator == "+") {
        result = add(a,b);
    }
    elseif (operator == "-") {
        result = subtract(a,b);
    }
    elseif (operator == "/") {
        result = divide(a,b);
    }
    elseif (operator == "*") {
        result = multiply(a,b);
    }
    else {
        alert("Invalid operator, try again");
    }
    alert(result);
}

getData();
