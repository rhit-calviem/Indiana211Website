//  // JavaScript code for handling the nested dropdown
//  var menu = document.getElementById("menu");
//  var caseManagerDropdown = document.getElementById("caseManagersDropdown");
//  var caseManagerOptions = document.getElementById("caseManagerOptions");

//  // Hide the nested dropdown initially
//  caseManagerDropdown.style.display = "none";

//  // Show the nested dropdown when the "Case Managers" option is selected
//  menu.addEventListener("change", function() {
//      if (menu.value === "case_managers") {
//          caseManagerDropdown.style.display = "block";
//      } else {
//          caseManagerDropdown.style.display = "none";
//      }
//  });


 // Get updated time for header/ footer
 function updateCurrentDate() {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    const formattedDate = `${month}/${day}/${year}`;

    document.getElementById("print-date").textContent = formattedDate;
}
updateCurrentDate();
setInterval(updateCurrentDate, 86400000);

 // Define an array of county names
 var countyNames = [
    "N/A","Adams", "Allen", "Bartholomew", "Benton", "Blackford", "Boone", "Brown", "Carroll", "Cass", "Clark",
    "Clay", "Clinton", "Crawford", "Daviess", "Dearborn", "Decatur", "DeKalb", "Delaware", "Dubois", "Elkhart",
    "Fayette", "Floyd", "Fountain", "Franklin", "Fulton", "Gibson", "Grant", "Greene", "Hamilton", "Hancock",
    "Harrison", "Hendricks", "Henry", "Howard", "Huntington", "Jackson", "Jasper", "Jay", "Jefferson", "Jennings",
    "Johnson", "Knox", "Kosciusko", "LaGrange", "Lake", "LaPorte", "Lawrence", "Madison", "Marion", "Marshall",
    "Martin", "Miami", "Monroe", "Montgomery", "Morgan", "Newton", "Noble", "Ohio", "Orange", "Owen", "Parke",
    "Perry", "Pike", "Porter", "Posey", "Pulaski", "Putnam", "Randolph", "Ripley", "Rush", "St. Joseph", "Scott",
    "Shelby", "Spencer", "Starke", "Steuben", "Sullivan", "Switzerland", "Tippecanoe", "Tipton", "Union", "Vanderburgh",
    "Vermillion", "Vigo", "Wabash", "Warren", "Warrick", "Washington", "Wayne", "Wells", "White", "Whitley"
  ];

  // Get the select element by ID
  var countyDropdown = document.getElementById("countyDropdown");

  // Loop through the county names array and create option elements
  countyNames.forEach(function(name, index) {
    var option = document.createElement("option");
    option.value = "county" + (index + 1);
    option.text = name;
    countyDropdown.appendChild(option);
  });


// Nested checkbox
document.getElementById("basic-needs").addEventListener("change", function () {
    var nestedCheckboxes = document.querySelector("#nested-checkboxes1");
    nestedCheckboxes.style.display = this.checked ? "block" : "none";
});

document.getElementById("housing").addEventListener("change", function () {
    var nestedCheckboxes = document.querySelector("#nested-checkboxes2");
    nestedCheckboxes.style.display = this.checked ? "block" : "none";
});

document.getElementById("utilities").addEventListener("change", function () {
    var nestedCheckboxes = document.querySelector("#nested-checkboxes3");
    nestedCheckboxes.style.display = this.checked ? "block" : "none";
});

document.getElementById("tax-assistance").addEventListener("change", function () {
    var nestedCheckboxes = document.querySelector("#nested-checkboxes4");
    nestedCheckboxes.style.display = this.checked ? "block" : "none";
});

document.getElementById("transportation").addEventListener("change", function () {
    var nestedCheckboxes = document.querySelector("#nested-checkboxes5");
    nestedCheckboxes.style.display = this.checked ? "block" : "none";
});

document.getElementById("legal-assistance").addEventListener("change", function () {
    var nestedCheckboxes = document.querySelector("#nested-checkboxes6");
    nestedCheckboxes.style.display = this.checked ? "block" : "none";
});

document.getElementById("education").addEventListener("change", function () {
    var nestedCheckboxes = document.querySelector("#nested-checkboxes7");
    nestedCheckboxes.style.display = this.checked ? "block" : "none";
});

document.getElementById("employment").addEventListener("change", function () {
    var nestedCheckboxes = document.querySelector("#nested-checkboxes8");
    nestedCheckboxes.style.display = this.checked ? "block" : "none";
});

document.getElementById("family-self-care").addEventListener("change", function () {
    var nestedCheckboxes = document.querySelector("#nested-checkboxes9");
    nestedCheckboxes.style.display = this.checked ? "block" : "none";
});

document.getElementById("healthcare").addEventListener("change", function () {
    var nestedCheckboxes = document.querySelector("#nested-checkboxes10");
    nestedCheckboxes.style.display = this.checked ? "block" : "none";
});




// Get a reference to the search button and card container
const searchButton = document.getElementById("searchButton");
const cardContainer = document.getElementById("cardContainer");

// Add a click event listener to the search button
searchButton.addEventListener("click", function() {
  // Show the card container
  cardContainer.style.display = "block";
});

//   // Get all form-check elements
//   const formCheckboxes = document.querySelectorAll('.form-check');

//   // Add a click event listener to each form-check element
//   formCheckboxes.forEach((formCheck) => {
//     formCheck.addEventListener('click', () => {
//       // Hide all checkboxes (including subcategories)
//       formCheckboxes.forEach((checkbox) => {
//         checkbox.style.display = 'none';
//       });

//       // Show the clicked checkbox and its subcategories
//       formCheck.style.display = 'block';

//       // If it's a top-level category, show its subcategories
//       if (formCheck.querySelector('input').classList.contains('form-check-input-category')) {
//         const subcategories = formCheck.parentNode.querySelectorAll('.form-check-input-subcategory');
//         subcategories.forEach((subcategory) => {
//           subcategory.closest('.form-check').style.display = 'block';
//         },
//         formCheck.style.display = 'block');
//     }
//     });
//   });


// Get all form-check elements
const formCheckboxes = document.querySelectorAll('.form-check');

// Store the initial state of the checkboxes
const initialState = {};
formCheckboxes.forEach((formCheck) => {
  initialState[formCheck.id] = formCheck.style.display;
});

// Function to reset checkboxes to their initial state
function resetCheckboxes() {
  formCheckboxes.forEach((formCheck) => {
    formCheck.style.display = 'block'; // Reset all checkboxes to be displayed
    formCheck.querySelector('input').checked = false; // Uncheck the checkboxes
  });
}

// Add a click event listener to each form-check element
formCheckboxes.forEach((formCheck) => {
  formCheck.addEventListener('click', () => {
    // Hide all checkboxes (including subcategories)
    formCheckboxes.forEach((checkbox) => {
      checkbox.style.display = 'none';
    });

    // Show the clicked checkbox and its subcategories
    formCheck.style.display = 'block';

    // If it's a top-level category, show its subcategories
    if (formCheck.querySelector('input').classList.contains('form-check-input-category')) {
      const subcategories = formCheck.parentNode.querySelectorAll('.form-check-input-subcategory');
      subcategories.forEach((subcategory) => {
        subcategory.closest('.form-check').style.display = 'block';
      });
      formCheck.style.display = 'block';
    }
  });
});

// Get the "Go Back" button by ID and add a click event listener to reset checkboxes
document.getElementById('goBackButton').addEventListener('click', resetCheckboxes);