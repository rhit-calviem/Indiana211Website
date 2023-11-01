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

document.getElementById("basic-needs1").addEventListener("change", function () {
    var nestedCheckboxes = document.querySelector("#nested-checkboxes11");
    nestedCheckboxes.style.display = this.checked ? "block" : "none";
});

document.getElementById("basic-needs2").addEventListener("change", function () {
    var nestedCheckboxes = document.querySelector("#nested-checkboxes12");
    nestedCheckboxes.style.display = this.checked ? "block" : "none";
});

document.getElementById("basic-needs3").addEventListener("change", function () {
    var nestedCheckboxes = document.querySelector("#nested-checkboxes13");
    nestedCheckboxes.style.display = this.checked ? "block" : "none";
});

document.getElementById("basic-needs4").addEventListener("change", function () {
    var nestedCheckboxes = document.querySelector("#nested-checkboxes14");
    nestedCheckboxes.style.display = this.checked ? "block" : "none";
});

document.getElementById("basic-needs5").addEventListener("change", function () {
    var nestedCheckboxes = document.querySelector("#nested-checkboxes15");
    nestedCheckboxes.style.display = this.checked ? "block" : "none";
});

document.getElementById("food1").addEventListener("change", function () {
    var nestedCheckboxes = document.querySelector("#nested-checkboxes16");
    nestedCheckboxes.style.display = this.checked ? "block" : "none";
});

document.getElementById("food3").addEventListener("change", function () {
    var nestedCheckboxes = document.querySelector("#nested-checkboxes17");
    nestedCheckboxes.style.display = this.checked ? "block" : "none";
});

document.getElementById("food4").addEventListener("change", function () {
    var nestedCheckboxes = document.querySelector("#nested-checkboxes18");
    nestedCheckboxes.style.display = this.checked ? "block" : "none";
});

document.getElementById("food5").addEventListener("change", function () {
    var nestedCheckboxes = document.querySelector("#nested-checkboxes19");
    nestedCheckboxes.style.display = this.checked ? "block" : "none";
});

document.getElementById("food6").addEventListener("change", function () {
    var nestedCheckboxes = document.querySelector("#nested-checkboxes20");
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