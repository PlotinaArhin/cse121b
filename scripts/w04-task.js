/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Arhin Plotina ",
    photo:"path/to/your/my profile.jpeg",
    favoriteFoods:["Beans and crocodile" , "Snake soap" , "cat soap "],
    hobbies:["jumping" , "Reading" , "Sleeping"],
    placesLived: [
        { place:"Laterbiokorshie", length: "16"},
        { place: "Ayawaso", length: "12"},
        { place:"Sunyani", length:"2"},
        
    ]
}

/* Populate Profile Object with placesLive objects */
// Already populated in the myProfile object

/* DOM Manipulation - Output */

/* Name */
document.getElementById("name").textContent = myProfile.name;

/* Photo with attributes */
let photoElement = document.getElementById("photo");
photoElement.src = myProfile.photo;
photoElement.alt = myProfile.name;

/* Favorite Foods List*/
let favoriteFoodsList = document.getElementById("favorite-foods");
myProfile.favoriteFoods.forEach(food => {
  let li = document.createElement("li");
  li.textContent = food;
  favoriteFoodsList.appendChild(li);
});

/* Hobbies List */
let hobbiesList = document.getElementById("hobbies");
myProfile.hobbies.forEach(hobby => {
  let li = document.createElement("li");
  li.textContent = hobby;
  hobbiesList.appendChild(li);
});



/* Places Lived DataList */
let placesLivedList = document.getElementById("places-lived");
myProfile.placesLived.forEach(place => {
  let dt = document.createElement("dt");
  dt.textContent = place.place;
  let dd = document.createElement("dd");
  dd.textContent = place.length;
  placesLivedList.appendChild(dt);
  placesLivedList.appendChild(dd);
});


