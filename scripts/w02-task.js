/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
/* Declare and instantiate a variable to hold your name */
const fullName = "My name is Arhin Plotina ";

/* Declare and instantiate a variable to hold the current year */
const currentYear = new Date().getFullYear();

/* Declare and instantiate a variable to hold the file path (location) and file name of the image */
const profilePicture = 'images/my profile.jpeg';

/* Step 3 - Element Variables */
/* Use the document.getElementById() method to get the HTML element with the id of name and store it in a const variable named "nameElement" */
const nameElement = document.getElementById('name');

/* Use the document.getElementById() method to get the HTML element with the id of food and store it in a const variable named "foodElement" */
const foodElement = document.getElementById('food');

/* Use the document.querySelector() method to get the element with the id of "year" and store it in a variable named "yearElement" */
const yearElement = document.querySelector('#year');

/* Use any viable method to get the profile image element stored into a variable named "imageElement" */
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
/* Assign the nameElement's innerHTML property the fullName variable value */
nameElement.innerHTML = `<strong>${fullName}</strong>`;

/* Use the textContent property to set the value of the element to the value of the variable currentYear */
yearElement.textContent = currentYear;

/* Use the setAttribute method to set the src property of the image element and set its value to the file path variable set in Step 2 */
imageElement.setAttribute('src', profilePicture);

/* Use the setAttribute method to set the alt property of the image element and set its value to equal 'Profile image of [Insert Name Variable]' where the name variable comes from Step 2. Always use a template literal to create the string. */
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
/* Declare an array variable to hold your favorite foods */
const favoriteFoods = ["The food  i really like best are ",  " FuFU", "Banku " , "Waakye" ]

/* Declare and instantiate a variable to hold another single favorite food item */
const newFavoriteFood = "Burgers";

/* Add the value stored in this new variable to your favorite food array */
favoriteFoods.push(newFavoriteFood);

/* Remove the first element in the favorite food array */
favoriteFoods.shift();

/* Remove the last element in the favorite food array */
favoriteFoods.pop();

/* Append the array output with this final modified favorite foods array */
foodElement.innerHTML = favoriteFoods.join('<br>');







