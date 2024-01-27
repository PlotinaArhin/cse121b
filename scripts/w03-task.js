/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    //Function body where you before addition //
    return number1 +number2
}

function addNumbers() {
    //Get the valueof the HTML form controls with IDs add1 and add2
    const number1 = parseFloat(document.getElementById('add1').value);
    const number2 = parseFloat(document.getElementById('add2').value);

    // perform addition
    const sum = number1 + number2;

    // Return the result
    return sum;
}


/* Function Expression - Subtract Numbers */
//Define substract function expression
const Subtract = function(number1 , number2 ){
    return number1 - number2

    //Define substractNumbers function expression
const number1 = parseFloat(document.getElementById('substract1').value);
const number2 = parseFloat(document.getElementById('subtract2').value);

// perform subtraction
const result = Subtract(number1, number2);

// Display the result in the HTML element with the ID difference
document.getElementById('difference').textContent = 'Difference: ' + result;
};

// Attach event listener to the button with ID subtractNumbers
document.getElementById('subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

// Arrow function for multiplying numbers retrieved from form controls
const multiplyNumbers = () => {
    // Get the values of the HTML form controls with IDs factor1 and factor2
    const number1 = parseFloat(document.getElementById('factor1').value);
    const number2 = parseFloat(document.getElementById('factor2').value);

    // Perform multiplication
    const result = multiply(number1, number2);

    // Display the result in the HTML element with the ID product
    document.getElementById('product').textContent = 'Product: ' + result;
};


/* Open Function Use - Divide Numbers */
function divide(dividend, divisor) {
    return dividend / divisor;
}

// Function expression for dividing numbers retrieved from form controls
const divideNumbers = function() {
    // Get the values of the HTML form controls with IDs dividend and divisor
    const dividend = parseFloat(document.getElementById('dividend').value);
    const divisor = parseFloat(document.getElementById('divisor').value);

    // Perform division
    const result = divide(dividend, divisor);

    // Display the result in the HTML element with the ID quotient
    document.getElementById('quotient').textContent = 'Quotient: ' + result;
};

// Attach event listener to the button with ID divideNumbers
document.getElementById('divideNumbers').addEventListener('click', divideNumbers);


/* Decision Structure */
document.getElementById('getTotalDue').addEventListener('click', function() {
    // Retrieve the value entered by the user in the subtotal field
    const subtotal = parseFloat(document.getElementById('subtotal').value);

    // Check if the membership checkbox is checked
    const membershipCheckbox = document.getElementById('membership');
    const isMembershipChecked = membershipCheckbox.checked;

    // Apply discount if membership is checked
    let total;
    if (isMembershipChecked) {
        total = subtotal * 0.8; // Apply 20% discount
    } else {
        total = subtotal;
    }

    // Output the total to the total span with two decimals using a template string
    document.getElementById('total').textContent = `\$${total.toFixed(2)}`;
});



// Declare and instantiate an array variable to hold the numbers 1 through 13
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// Assign the value of the array variable to the HTML element with an ID of "array"
document.getElementById('array').textContent = numbersArray.join(', ');

// Use the filter() array method to find all of the odd numbers of the array variable and assign the result to the HTML element with an ID of "odds"
document.getElementById('odds').textContent = numbersArray.filter(number => number % 2 !== 0).join(', ');

// Use the filter() array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
document.getElementById('evens').textContent = numbersArray.filter(number => number % 2 === 0).join(', ');

// Use the reduce() array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
const sumOfArray = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
document.getElementById('sumOfArray').textContent = sumOfArray;

// Use the map() array method to multiply each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
const multipliedArray = numbersArray.map(number => number * 2);
document.getElementById('multiplied').textContent = multipliedArray.join(', ');

// Use the map() and reduce() array methods to sum the array elements after multiplying each element by two. Assign the result to the HTML element with an ID of "sumOfMultiplied"
const sumOfMultiplied = numbersArray.map(number => number * 2).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
document.getElementById('sumOfMultiplied').textContent = sumOfMultiplied;

