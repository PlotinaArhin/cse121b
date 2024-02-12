const templesElement = document.querySelector('#temples');
const templeList = [];

const displayTemples = (temples) => {
  temples.forEach(temple => {
    const article = document.createElement('article');
    const h3 = document.createElement('h3');
    h3.textContent = temple.templeName;
    const img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = temple.location;
    article.appendChild(h3);
    article.appendChild(img);
    templesElement.appendChild(article);
  });
};

// Sample temple data
const templesData = [
  {
    "templeName": "Aba Nigeria",
    "imageUrl": "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
    "location": "Aba, Nigeria"
  },
  {
    "templeName": "Cedar City Utah",
    "imageUrl": "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cedar-city-utah/400x225/Cedar-City-1978603.jpg",
    "location": "Cedar City, Utah, United States"
  },
  {
    "templeName": "Manti Utah",
    "imageUrl": "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
    "location": "Manti, Utah, United States"
  },
  {
    "templeName": "Payson Utah",
    "imageUrl": "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
    "location": "Payson, Utah, United States"
  }
];

const getTemples = async () => {
    try {
      const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
      if (!response.ok) {
        throw new Error('Failed to fetch temple data');
      }
      const data = await response.json();
      templeList = data; // Assign the fetched data to the templeList global array
      displayTemples(templeList); // Call displayTemples function and pass the templeList
    } catch (error) {
      console.error('Error fetching temple data:', error);
    }
  };

  const reset = () => {
    templesElement.innerHTML = ''; // Clear all the <article> elements inside templesElement
  };

  const filterTemples = (temples) => {
    reset(); // Call reset function to clear the output
    const filter = document.querySelector('#filtered').value; // Obtain the value of the HTML select element
    switch (filter) {
      case 'utah':
        displayTemples(temples.filter(temple => temple.location.toLowerCase().includes('utah')));
        break;
      case 'nonutah':
        displayTemples(temples.filter(temple => !temple.location.toLowerCase().includes('utah')));
        break;
      case 'older':
        displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
        break;
      case 'all':
      default:
        displayTemples(temples);
        break;
    }
  };

  // Add change event listener to the HTML element with ID 'filtered'
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });
  
  
  // Call getTemples function to fetch temple data
  getTemples();

// Call displayTemples function with the sample data
displayTemples(templesData);

