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


// Nested checkbox
document.getElementById("basic-needs").addEventListener("change", function () {
    var nestedCheckboxes = document.querySelector(".nested-checkboxes");
    nestedCheckboxes.style.display = this.checked ? "block" : "none";
});

