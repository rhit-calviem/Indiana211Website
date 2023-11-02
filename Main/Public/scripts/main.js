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
    option.value = name;
    option.text = name;
    countyDropdown.appendChild(option);
  });

  const criteria = {
    zipcode: "",
    county: ""
  };

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
    criteria.nameLevel3 = "Emergency Food";
    console.log(criteria);
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

document.getElementById("Housing/Shelter1").addEventListener("change", function () {
    var nestedCheckboxes = document.querySelector("#nested-checkboxes21");
    nestedCheckboxes.style.display = this.checked ? "block" : "none";
});

document.getElementById("Housing/Shelter2").addEventListener("change", function () {
    var nestedCheckboxes = document.querySelector("#nested-checkboxes22");
    nestedCheckboxes.style.display = this.checked ? "block" : "none";
});

document.getElementById("Housing/Shelter3").addEventListener("change", function () {
    var nestedCheckboxes = document.querySelector("#nested-checkboxes23");
    nestedCheckboxes.style.display = this.checked ? "block" : "none";
});

document.getElementById("Housing/Shelter4").addEventListener("change", function () {
    var nestedCheckboxes = document.querySelector("#nested-checkboxes24");
    nestedCheckboxes.style.display = this.checked ? "block" : "none";
});

document.getElementById("Housing/Shelter5").addEventListener("change", function () {
    var nestedCheckboxes = document.querySelector("#nested-checkboxes25");
    nestedCheckboxes.style.display = this.checked ? "block" : "none";
});

document.getElementById("Housing/Shelter7").addEventListener("change", function () {
    var nestedCheckboxes = document.querySelector("#nested-checkboxes26");
    nestedCheckboxes.style.display = this.checked ? "block" : "none";
});

document.getElementById("Housing/Shelter10").addEventListener("change", function () {
    var nestedCheckboxes = document.querySelector("#nested-checkboxes27");
    nestedCheckboxes.style.display = this.checked ? "block" : "none";
});

document.getElementById("Housing/Shelter11").addEventListener("change", function () {
    var nestedCheckboxes = document.querySelector("#nested-checkboxes28");
    nestedCheckboxes.style.display = this.checked ? "block" : "none";
});

document.getElementById("Housing/Shelter12").addEventListener("change", function () {
    var nestedCheckboxes = document.querySelector("#nested-checkboxes29");
    nestedCheckboxes.style.display = this.checked ? "block" : "none";
});

document.getElementById("Housing/Shelter13").addEventListener("change", function () {
    var nestedCheckboxes = document.querySelector("#nested-checkboxes30");
    nestedCheckboxes.style.display = this.checked ? "block" : "none";
});

document.getElementById("Utilities1").addEventListener("change", function () {
    var nestedCheckboxes = document.querySelector("#nested-checkboxes31");
    nestedCheckboxes.style.display = this.checked ? "block" : "none";
});

document.getElementById("Utilities2").addEventListener("change", function () {
    var nestedCheckboxes = document.querySelector("#nested-checkboxes32");
    nestedCheckboxes.style.display = this.checked ? "block" : "none";
});

document.getElementById("Transportation1").addEventListener("change", function () {
    var nestedCheckboxes = document.querySelector("#nested-checkboxes33");
    nestedCheckboxes.style.display = this.checked ? "block" : "none";
});

document.getElementById("Transportation4").addEventListener("change", function () {
    var nestedCheckboxes = document.querySelector("#nested-checkboxes34");
    nestedCheckboxes.style.display = this.checked ? "block" : "none";
});

document.getElementById("Transportation6").addEventListener("change", function () {
    var nestedCheckboxes = document.querySelector("#nested-checkboxes35");
    nestedCheckboxes.style.display = this.checked ? "block" : "none";
});

document.getElementById("Material Goods2").addEventListener("change", function () {
    var nestedCheckboxes = document.querySelector("#nested-checkboxes36");
    nestedCheckboxes.style.display = this.checked ? "block" : "none";
});

document.getElementById("Material Goods3").addEventListener("change", function () {
    var nestedCheckboxes = document.querySelector("#nested-checkboxes37");
    nestedCheckboxes.style.display = this.checked ? "block" : "none";
});

document.getElementById("Material Goods4").addEventListener("change", function () {
    var nestedCheckboxes = document.querySelector("#nested-checkboxes38");
    nestedCheckboxes.style.display = this.checked ? "block" : "none";
});

document.getElementById("Material Goods5").addEventListener("change", function () {
    var nestedCheckboxes = document.querySelector("#nested-checkboxes39");
    nestedCheckboxes.style.display = this.checked ? "block" : "none";
});

document.getElementById("Material Goods6").addEventListener("change", function () {
    var nestedCheckboxes = document.querySelector("#nested-checkboxes40");
    nestedCheckboxes.style.display = this.checked ? "block" : "none";
});

//DOUBLE CHECK THESE

document.getElementById("emergency-food1").addEventListener("change", function () {
    criteria.nameLevel4 = "Brown Bag Food Programs";
    console.log(criteria);
});

document.getElementById("emergency-food2").addEventListener("change", function () {
    criteria.nameLevel4 = "Commodity Supplemental Food Program";
    console.log(criteria);
});

document.getElementById("emergency-food3").addEventListener("change", function () {
    criteria.nameLevel4 = "Food Pantries";
    console.log(criteria);
});

document.getElementById("emergency-food4").addEventListener("change", function () {
    criteria.nameLevel4 = "Food Vouchers";
    console.log(criteria);
});

document.getElementById("emergency-food5").addEventListener("change", function () {
    criteria.nameLevel4 = "Packed Lunches/Dinner";
    console.log(criteria);
});

document.getElementById("emergency-food6").addEventListener("change", function () {
    var nestedCheckboxes = document.querySelector("#nested-checkboxes41");
    nestedCheckboxes.style.display = this.checked ? "block" : "none";
});

document.getElementById("Emergency Shelter2").addEventListener("change", function () {
    var nestedCheckboxes = document.querySelector("#nested-checkboxes42");
    nestedCheckboxes.style.display = this.checked ? "block" : "none";
});

document.getElementById("Home Improvement/ Accessibility1").addEventListener("change", function () {
    var nestedCheckboxes = document.querySelector("#nested-checkboxes43");
    nestedCheckboxes.style.display = this.checked ? "block" : "none";
});

document.getElementById("Home Improvement/ Accessibility2").addEventListener("change", function () {
    var nestedCheckboxes = document.querySelector("#nested-checkboxes44");
    nestedCheckboxes.style.display = this.checked ? "block" : "none";
});

document.getElementById("Residential Housing Options1").addEventListener("change", function () {
    var nestedCheckboxes = document.querySelector("#nested-checkboxes45");
    nestedCheckboxes.style.display = this.checked ? "block" : "none";
});

document.getElementById("Household Goods1").addEventListener("change", function () {
    var nestedCheckboxes = document.querySelector("#nested-checkboxes46");
    nestedCheckboxes.style.display = this.checked ? "block" : "none";
});

document.getElementById("Household Goods4").addEventListener("change", function () {
    var nestedCheckboxes = document.querySelector("#nested-checkboxes47");
    nestedCheckboxes.style.display = this.checked ? "block" : "none";
});

document.getElementById("Personal Goods/Services1").addEventListener("change", function () {
    var nestedCheckboxes = document.querySelector("#nested-checkboxes48");
    nestedCheckboxes.style.display = this.checked ? "block" : "none";
});

document.getElementById("Personal Goods/Services2").addEventListener("change", function () {
    var nestedCheckboxes = document.querySelector("#nested-checkboxes49");
    nestedCheckboxes.style.display = this.checked ? "block" : "none";
});

document.getElementById("Local Transportation1").addEventListener("change", function () {
    var nestedCheckboxes = document.querySelector("#nested-checkboxes50");
    nestedCheckboxes.style.display = this.checked ? "block" : "none";
});

document.getElementById("Local Transportation4").addEventListener("change", function () {
    var nestedCheckboxes = document.querySelector("#nested-checkboxes51");
    nestedCheckboxes.style.display = this.checked ? "block" : "none";
});

document.getElementById("Utility Assistance1").addEventListener("change", function () {
    var nestedCheckboxes = document.querySelector("#nested-checkboxes52");
    nestedCheckboxes.style.display = this.checked ? "block" : "none";
});

document.getElementById("Utility Assistance3").addEventListener("change", function () {
    var nestedCheckboxes = document.querySelector("#nested-checkboxes53");
    nestedCheckboxes.style.display = this.checked ? "block" : "none";
});

// Get a reference to the search button and card container
const searchButton = document.getElementById("searchButton");
const cardContainer = document.getElementById("cardContainer");

// Add a click event listener to the search button
searchButton.addEventListener("click", function() {
  // Show the card container
  const zipCodeValue = zipCodeInput.value;
  const countyValue = countyDropdown.value;
  if(zipCodeValue == "" || zipCodeValue == "N/A") {
    delete criteria.zipcode;
  } else {
    criteria.zipcode = zipCodeValue;
  }
  if(countyValue == "N/A") {
    delete criteria.county;
  } else {
    criteria.county = countyValue;
  }
  console.log(criteria);
  fetchData(criteria);
});
  

async function fetchData(criteria) {
    fetch('http://localhost:3030/data')
      .then((response) => response.json())
      .then((data) => {
        const filteredData = data.filter((item) => {
          for (const key in criteria) {localStorage
            if (item[key] !== criteria[key]) {
              return false;
            }
          }
          return true;
        });
        console.log(filteredData);
        createCards(filteredData);
        document.getElementById('cardContainer').style.display = 'block';
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  function createCards(data) {
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = '';
    data.forEach((item) => {
      const card = document.createElement('div');
      card.innerHTML = `
        <div class="card">
          <h2>${item.service_name}</h2>
          <div class="info">
            <p><strong>Type:</strong> ${item.taxonomy_name}</p>
            <p><strong>Description:</strong> ${item.service_description}</p>
            <p><strong>Address:</strong> ${item.address_1}, ${item.city}, ${item.zipcode}, ${item.county}</p>
            <p><strong>Number:</strong> ${item.site_number}</p>
            <p><strong>Website:</strong> <a href="${item.service_website}" target="_blank">${item.service_website}</a></p>
          </div>
        </div>
      `;
      cardContainer.appendChild(card);
    });
    cardContainer.style.display = "block";

  }
  